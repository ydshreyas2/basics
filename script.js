
document.getElementById('fetch-button').addEventListener('click', fetchProducts);

document.getElementById("numberForm").addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        alert("Form submitted");
        const key1 = document.getElementById('input1').value;
        const key2 = document.getElementById('input2').value;

         const apiputUrl = "https://d779zqnxna.execute-api.ap-south-1.amazonaws.com/tests-basics/POST";
         

        try {
            alert("Storing data...");
            const response = await fetch(apiputUrl, 
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json",},
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
        // Fetch products after storing data
        form.reset();

        
    });


// Function to fetch products from the API and display them

async function fetchProducts() {
    try {
        const apigetUrl = 'https://d779zqnxna.execute-api.ap-south-1.amazonaws.com/tests-basics/get';// Replace with GET API URL
        alert("Fetching products...");
        const response = await fetch(apigetUrl);
        const products = await response.json();

        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.ProductID}: ${product.Name}`;
            productList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
