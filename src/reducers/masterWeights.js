const masterWeightsReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SET_MASTER_WEIGHTS':
			return action.weights;
		case 'UPDATE_MASTER_WEIGHTS': {
			const updatedMasterWeights = { ...state };
			const { updates } = action;
			const keys = Object.keys(updates);
			keys.forEach((key) => {
				if (updates[key] !== null) {
					if (key !== 'chinup') {
						let increase = 2.5;
						if (key === 'squat' || key === 'deadlift') increase = 5;
						if (updates[key] === 0) {
							const deload = state[key] / 10;
							if (state[key] - deload > 44) {
								updatedMasterWeights[key] = Math.round(state[key] - deload);
							} else {
								updatedMasterWeights[key] = 44;
							}
						} else if (updates[key] === 1) {
							updatedMasterWeights[key] = Math.round(state[key] + increase);
						} else if (updates[key] === 2) {
							updatedMasterWeights[key] = Math.round(state[key] + increase * 2);
						}
					} else if (updates[key] === 1) {
						const { negatives } = state[key];
						if (negatives > 0) {
							updatedMasterWeights.chinup.negatives =
								state.chinup.negatives - 1;
							updatedMasterWeights.chinup.ups = state.chinup.ups + 1;
						} else {
							updatedMasterWeights.chinup.weight = state.chinup.weight + 2.5;
						}
					}
				}
			});

			return updatedMasterWeights;
		}
		case 'SET_WEIGHT': {
			const { update } = action;
			const setWeightUpdates = { ...state };
			const lift = Object.keys(update)[0];
			const newWeight = update[lift];
			setWeightUpdates[lift] = Math.round(newWeight);
			return setWeightUpdates;
		}
		default:
			return state;
	}
};

export default masterWeightsReducer;
