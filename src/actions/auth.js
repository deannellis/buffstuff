import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
	return () => {
		return firebase.auth().signInWithPopup(googleAuthProvider);
	};
};

export const login = (uid, photoUrl, displayName, email) => ({
	type: 'LOGIN',
	uid,
	photoUrl,
	displayName,
	email,
});

export const startLogout = () => {
	return () => {
		return firebase.auth().signOut();
	};
};

export const logout = () => ({
	type: 'LOGOUT',
});
