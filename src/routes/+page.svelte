<script>
	import { goto } from "$app/navigation";

	import {
		CognitoUser,
		CognitoUserAttribute,
		CognitoUserPool,
		AuthenticationDetails,
	} from "amazon-cognito-identity-js";
	// import * as AWS from "aws-sdk/global";
	let cognitoUser;
	let userName;
	let password;
	const signUp = async () => {
		let poolData = {
			UserPoolId: "eu-west-2_lYdgNFNRz", // Your user pool id here
			ClientId: "15j3o5j00ekao3btgpnuj7t1jj", // Your client id here
		};

		let authenticationData = {
			Username: userName,
			Password: password,
		};
		var authenticationDetails = new AuthenticationDetails(
			authenticationData
		);
		const userPool = new CognitoUserPool(poolData);
		var userData = {
			Username: userName,
			Pool: userPool,
		};

		cognitoUser = new CognitoUser(userData);
		cognitoUser.authenticateUser(authenticationDetails, {
			onSuccess: async (result) => {
				var accessToken = result.getAccessToken().getJwtToken();
				console.log("onSuccess: ", result);

				//POTENTIAL: Region needs to be set if not already set previously elsewhere.
				// AWS.config.region = 'eu-west-2';

				// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
				// 	IdentityPoolId: '...', // your identity pool id here
				// 	Logins: {
				// 		// Change the key below according to the specific region your user pool is in.
				// 		'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>': result
				// 			.getIdToken()
				// 			.getJwtToken(),
				// 	},
				await cognitoUser.getUserAttributes(function (err, result) {
					if (err) {
						alert(err.message || JSON.stringify(err));
						return;
					}
					for (let i = 0; i < result.length; i++) {
						console.log(
							"attribute " +
								result[i].getName() +
								" has value " +
								result[i].getValue()
						);
					}
				});
				goto("/home");
			},
			onFailure: (err) => {
				console.log("onFailuere: ", err);
			},
		});
	};

	const logOut = async () => {
		if (cognitoUser == null) {
			return;
		}
		await cognitoUser.signOut();
		cognitoUser = null;
	};
</script>

<div class="centered">
	<h1>Sign up</h1>

	<form>
		<div style="margin:10px 0px;">
			<label for="name"> User Name </label>

			<input
				id="name"
				name="name"
				autocomplete="off"
				bind:value={userName}
			/>
		</div>

		<div>
			<label for="pass">
				Password
				<input
					id="pass"
					name="description"
					autocomplete="off"
					bind:value={password}
				/>
			</label>
		</div>
		<div
			style="width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;"
		>
			<button
				on:click={async (event) => {
					event.preventDefault();
					signUp();
				}}>Sign up</button
			>
		</div>
	</form>

	<br />
	<br /><br />

	<a href="/signup">Create an account</a>
</div>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: end;
	}
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	span {
		flex: 1;
	}

	button {
		min-width: 100px;
		border: none;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	button:hover {
		opacity: 1;
	}

	.saving {
		opacity: 0.5;
	}
</style>
