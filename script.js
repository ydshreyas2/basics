document.addEventListener("DOMContentLoaded", function () {
    // Select the form
    const form = document.getElementById("inputForm");

    // Add a submit event listener to the form
    form.addEventListener("submit", async function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get values from the input fields
        const key1 = document.getElementById("key1").value;
        const key2 = document.getElementById("key2").value;

        const apiUrl = "https://z12a2pzsqg.execute-api.ap-south-1.amazonaws.com/dev/store-data";

    
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputData),
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();
            alert("Data stored successfully: " + JSON.stringify(data));
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to store data.");
        }
    });
});
