const INITIAL_STATE = {
	isLoggedIn: null,
	userId: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return { ...state, isLoggedIn: true, userId: action.payload };
		case 'SIGN_OUT':
			return { ...state, isLoggedIn: false, userId: undefined };
		default:
			return state;
	}
};

export default authReducer;
