<script>
    import {
        CognitoUser,
        CognitoUserAttribute,
        CognitoUserPool,
        AuthenticationDetails,
    } from "amazon-cognito-identity-js";

    let poolData = {
        UserPoolId: "eu-west-2_lYdgNFNRz", // Your user pool id here
        ClientId: "15j3o5j00ekao3btgpnuj7t1jj", // Your client id here
    };

    var userPool = new CognitoUserPool(poolData);
    var cognitoUser = userPool.getCurrentUser();

    if (cognitoUser != null) {
        cognitoUser.getSession(function (err, session) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log("session validity: " + session.isValid());

            // NOTE: getSession must be called to authenticate user before calling getUserAttributes
            cognitoUser.getUserAttributes(function (err, attributes) {
                if (err) {
                    console.log("in err: ", err);
                    // Handle error
                } else {
                    for (let i = 0; i < attributes.length; i++) {
                        console.log(
                            "attribute " +
                                attributes[i].getName() +
                                " has value " +
                                attributes[i].getValue()
                        );
                    }
                }
            });

            // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            //     IdentityPoolId: "...", // your identity pool id here
            //     Logins: {
            //         // Change the key below according to the specific region your user pool is in.
            //         "cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>":
            //             session.getIdToken().getJwtToken(),
            //     },
            // });

            // Instantiate aws sdk service objects now that the credentials have been updated.
            // example: var s3 = new AWS.S3();
        });
    }
</script>

<h2>user profile</h2>
