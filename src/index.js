import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './pages/LoadingPage';
import configureStore from './store/configureStore';
import MenuContext from './context/menu-context';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import { startFetchWorkouts } from './actions/workouts';
import { startFetchMasterWeights } from './actions/masterWeights';
import { startFetchLiftVariant } from './actions/liftVariant';
import { startFetchMacros } from './actions/macros';
import { login, logout } from './actions/auth';

const store = configureStore();

class App extends Component {
	constructor(props) {
		super(props);

		this.toggleMenu = () => {
			this.setState((state) => ({
				menuIsOpen: !state.menuIsOpen,
			}));
		};

		this.closeMenu = () => {
			this.setState({ menuIsOpen: false });
		};

		this.setPageMenu = (hasMenu) => {
			this.setState({
				pageHasMenu: hasMenu,
			});
		};

		this.state = {
			/* eslint-disable react/no-unused-state */
			menuIsOpen: false,
			toggleMenu: this.toggleMenu,
			pageHasMenu: true,
			setPageMenu: this.setPageMenu,
			closeMenu: this.closeMenu,
			/* eslint-enable react/no-unused-state */
		};
	}

	componentDidUpdate() {
		const { menuIsOpen } = this.state;
		if (menuIsOpen) {
			document.body.style.position = 'fixed';
		} else {
			document.body.style.position = 'relative';
		}
	}

	render() {
		const { pageHasMenu } = this.state;
		return (
			<Provider store={store}>
				<MenuContext.Provider value={this.state}>
					<AppRouter toggleMenu={this.toggleMenu} pageHasMenu={pageHasMenu} />
				</MenuContext.Provider>
			</Provider>
		);
	}
}

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(<App />, document.querySelector('#root'));
	}
	hasRendered = true;
};

ReactDOM.render(<LoadingPage />, document.querySelector('#root'));

firebase.auth().onAuthStateChanged(async (user) => {
	if (user) {
		const { uid, photoURL, displayName, email } = user;
		store.dispatch(login(uid, photoURL, displayName, email));
		await store.dispatch(startFetchWorkouts());
		await store.dispatch(startFetchMasterWeights());
		await store.dispatch(startFetchLiftVariant());
		await store.dispatch(startFetchMacros());
		renderApp();
		if (history.location.pathname === '/') {
			history.push('/home');
		}
	} else {
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
});
