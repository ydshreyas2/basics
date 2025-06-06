document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("inputForm");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const key1 = document.getElementById("key1").value;
        const key2 = document.getElementById("key2").value;

        const apiUrl = "https://z12a2pzsqg.execute-api.ap-south-1.amazonaws.com/";

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ key1, key2 }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error("API error response:", errorText);
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();
            alert(`Success: ${data.message}\nStored Data: ${JSON.stringify(data.storedData)}`);
        } catch (error) {
            console.error("Error occurred:", error);
            alert("Failed to store data. Check console for details.");
        }

        form.reset();
    });
});
