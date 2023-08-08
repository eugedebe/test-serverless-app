<script>
    import { fetchWithAuth, getSession } from "$lib/services/gateway-api.js";
    import { onMount } from "svelte";
    let age, height, income;

    const submitData = async () => {
        const response = await fetchWithAuth("compare-youself", "POST", {
            age,
            height,
            income,
        });

        // const url =
        //     "https://nbq1wgzh9d.execute-api.eu-west-2.amazonaws.com/stagetest1/compare-youself";
    };

    const deleteUser = async () => {
        const response = await fetchWithAuth("compare-youself", "DELETE");
        console.log("response: ", response);
    };

    onMount(async () => {
        const session = await getSession();
        const tokenId = await session.getAccessToken().getJwtToken();
        const response = await fetchWithAuth(
            `compare-youself/single?accessToken=${tokenId}`,

            "GET"
        );
        console.log("rspons: ", response.data["body-json"]);
        // response["body-json"][0]);
        if (response.data["body-json"].data.length == 0) {
            return;
        }
        age = response.data["body-json"].data[0].age;
        height = response.data["body-json"].data[0].height;
        income = response.data["body-json"].data[0].income;
        // ?accessToken=${tokenId}`,
    });
</script>

<h1>home</h1>

<div />
<a href="/user-details">See Profile</a>

<form>
    <div
        style="width:100%; display: flex; flex-direction:column; align-items:center; justify-content: center;"
    >
        <div style="display: flex; flex-direction: column; align-items: end;">
            <div style="margin:10px 0px;">
                <label for="age"> Age</label>

                <input
                    id="age"
                    name="age"
                    autocomplete="off"
                    bind:value={age}
                />
            </div>
            <div style="margin:10px 0px;">
                <label for="height"> Height </label>

                <input
                    id="height"
                    name="height"
                    autocomplete="off"
                    bind:value={height}
                />
            </div>
            <div>
                <label for="income">
                    Income
                    <input
                        id="pass"
                        name="income"
                        autocomplete="off"
                        bind:value={income}
                    />
                </label>
            </div>
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
                    submitData();
                }}>Submit</button
            >
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
                }}>I already stored data on the server!</button
            >
        </div>
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
                deleteUser();
            }}>Delete user</button
        >
    </div>
</form>
