exports.signIn = (userId) => {
	return {
		type: 'SIGN_IN',
		payload: userId,
	};
};

exports.signOut = () => {
	return {
		type: 'SIGN_OUT',
	};
};
