
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

        const apiUrl = "https://your-api-id.execute-api.region.amazonaws.com/store-data";

        try {
            // Make an API request with the input values
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ key1, key2 }),
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();
            alert(`Data saved successfully: ${JSON.stringify(data)}`);
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to store data. Check console for details.");
        }

        // Clear the form inputs
        form.reset();
    });
});
