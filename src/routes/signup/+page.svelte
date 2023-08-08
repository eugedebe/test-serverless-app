<script>
    import {
        CognitoUser,
        CognitoUserAttribute,
        CognitoUserPool,
    } from "amazon-cognito-identity-js";

    let userData;
    let userName;
    let userNameConfirmation;
    let email;
    let password;
    let confirmationCode;
    const signIn = async () => {
        var poolData = {
            UserPoolId: "eu-west-2_lYdgNFNRz", // Your user pool id here
            ClientId: "15j3o5j00ekao3btgpnuj7t1jj", // Your client id here
        };
        const userPool = new CognitoUserPool(poolData);
        const attributeList = [];
        const emailAttribute = {
            Name: "email",
            Value: email,
        };
        attributeList.push(new CognitoUserAttribute(emailAttribute));
        userPool.signUp(
            userName,
            password,
            attributeList,
            attributeList,
            function (err, result) {
                if (err) {
                    alert(err.message || JSON.stringify(err));
                    return;
                }
                var cognitoUser = result.user;
                userData = cognitoUser;
                console.log("user name is " + cognitoUser.getUsername());
            }
        );
    };

    const confirmUser = async (resendCode) => {
        var poolData = {
            UserPoolId: "eu-west-2_lYdgNFNRz", // Your user pool id here
            ClientId: "15j3o5j00ekao3btgpnuj7t1jj", // Your client id here
        };

        console.log("userName: ", userNameConfirmation);
        console.log("confirmationCode: ", confirmationCode);

        var userPool = new CognitoUserPool(poolData);
        var userData = {
            Username: userNameConfirmation,
            Pool: userPool,
        };

        var cognitoUser = new CognitoUser(userData);
        if (!resendCode) {
            cognitoUser.confirmRegistration(
                `${confirmationCode}`,
                true,
                function (err, result) {
                    if (err) {
                        alert(err.message || JSON.stringify(err));
                        return;
                    }
                }
            );
        } else {
            cognitoUser.resendConfirmationCode(function (err, result) {
                if (err) {
                    alert(err.message || JSON.stringify(err));
                    return;
                }
                console.log("call result: " + result);
            });
        }
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
        <div style="margin:10px 0px;">
            <label for="email"> email </label>

            <input
                id="email"
                name="email"
                autocomplete="off"
                bind:value={email}
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
                    signIn();
                }}>Sign in</button
            >
        </div>
    </form>

    <br />
    <br /><br />
    <form>
        <div style="margin:10px 0px;">
            <label for="name"> User Name </label>

            <input
                id="name"
                name="name"
                autocomplete="off"
                bind:value={userNameConfirmation}
            />
        </div>

        <div style="margin:10px 0px;">
            <label for="name"> Confirmation Code </label>

            <input
                id="confirmation-code"
                name="confirmation-code"
                autocomplete="off"
                bind:value={confirmationCode}
            />
        </div>
        <div
            style="width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;"
        >
            <div style="display:flex; flex-direction: row; ">
                <button
                    on:click={async (event) => {
                        event.preventDefault();
                        confirmUser(false);
                    }}>Send Code</button
                >
                <button
                    on:click={async (event) => {
                        event.preventDefault();
                        confirmUser(true);
                    }}>ReSend Code</button
                >
            </div>
        </div>
    </form>

    <a href="/">Log in</a>
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
