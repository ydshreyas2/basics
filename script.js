// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Select the button by its ID
    const button = document.getElementById("popupButton");

    // Add a click event listener
    button.addEventListener("click", async function () {
        // Define the API Gateway URL
        const apiUrl = "https://your-api-id.execute-api.region.amazonaws.com/stage/resource";

        try {
            // Make an API request
            const response = await fetch(apiUrl, {
                method: "GET", // Adjust to "POST" or other methods as needed
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            // Parse the JSON response
            const data = await response.json();

            // Display the data in a popup
            alert(`API Response: ${JSON.stringify(data)}`);
        } catch (error) {
            // Handle errors
            console.error("Error fetching API:", error);
            alert("An error occurred while fetching data. Check the console for details.");
        }
    });
});
