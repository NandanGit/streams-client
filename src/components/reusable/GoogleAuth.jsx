import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'163873393271-c9eefvo25lqqbopl283h78m2m31hoce5.apps.googleusercontent.com',
					scope: 'email',
					plugin_name: 'streamy',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange();
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		if (this.auth.isSignedIn.get()) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	renderAuthButton() {
		switch (this.props.auth.isLoggedIn) {
			case true:
				return 'Logout';
			case false:
				return 'Login with Google';
			default:
				return 'Login with Google';
		}
	}

	loginLogoutHandler = () => {
		switch (this.props.auth.isLoggedIn) {
			case true:
				console.log('Signing out with Google OAuth');
				this.auth.signOut();
				break;
			case false:
				console.log('Signing in with Google OAuth');
				this.auth.signIn();
				break;
			default:
				return;
		}
	};

	render() {
		// console.log(this.props);
		return (
			<div
				className={
					'google-auth' +
					(this.props.className ? ' ' + this.props.className : '')
				}
				// {...this.props}
				onClick={this.loginLogoutHandler}
			>
				{this.renderAuthButton()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { auth: state.auth };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
