import {
    CognitoUser,
    CognitoUserAttribute,
    CognitoUserPool,
    AuthenticationDetails,
} from "amazon-cognito-identity-js";


const url = "https://nbq1wgzh9d.execute-api.eu-west-2.amazonaws.com/stagetest1/";


const getUserPool = () => {
    let poolData = {
        UserPoolId: "eu-west-2_lYdgNFNRz", // Your user pool id here
        ClientId: "15j3o5j00ekao3btgpnuj7t1jj", // Your client id here
    };
    return new CognitoUserPool(poolData);

}


export const getSession = async () => {


    let userPool = getUserPool();
    var cognitoUser = await userPool.getCurrentUser();

    if (cognitoUser != null) {
        return cognitoUser.getSession(function (err, session) {
            if (err) {
                alert('in getSession err todo: Send the user to the log in page' + err.message || JSON.stringify(err));
                return;
            }
            return session;
            // NOTE: getSession must be called to authenticate user before calling getUserAttributes
        });

    } else {
        alert('Todo: send the user to the log in page')
    }
}


export async function fetchWithAuth(endpoint, method, payload = null) {
    let session = await getSession();

    if (session == null) {
        alert(' no session, todo: goto log in ');
        return;
    }
    let idToken = await session.getIdToken().getJwtToken();

    if (
        method !== "POST" &&
        method !== "PUT" &&
        method !== "GET" &&
        method !== "DELETE"
    ) {

        return { status: "error", message: `Method ${method} not implemented.` };
    }
    try {
        let headers = {};
        headers["Authorization"] = idToken;


        let response = null;
        if (method === "POST" || method === "PUT") {
            if (!(payload instanceof FormData)) {
                headers["Content-Type"] = "application/json";
                payload = JSON.stringify(payload);
            }
            response = await fetch(`${url}${endpoint}`, {
                method,
                mode: "cors",
                body: payload,
                headers,
            });
        } else if (method === "GET" || "DELETE") {
            let urlEndpoint = new URL(`${url}${endpoint}`);

            if (payload) {
                urlEndpoint.search = new URLSearchParams(payload).toString();
            }
            response = await fetch(`${urlEndpoint}`, {
                headers,
                mode: "cors",
                method,
            });
        }
        // const resJson = await response.json();
        if (response && !response.ok) {
            // if (!resJson.sucess) {
            const resJson = await response.json();
            const errorMessage = resJson.message;
            console.log("TODO: needst to log out", errorMessage);
            return { status: "nok", message: errorMessage };
        }
        try {
            console.log('response: ', response)
            const resJson = await response.json();
            console.log('resJson.data: ', resJson['body-json'].data)
            return {
                status: "ok",
                data: resJson ?? null,
            };

        } catch {
            return {
                status: "ok",
                data: {},
            };
        }



    } catch (error) {
        console.log(error.message);

        return {
            status: error.status || "error",
            message: error.message || "Unexpected error has happened.",
        };
    }
}
