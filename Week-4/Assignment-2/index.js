const products = document.getElementById("products");

async function ajax(src, callback) {
    // your code here
    let response = await fetch(src);
    let jsonObject = await response.json();
    jsonObject.map((object) => {
        callback(object);
    });
}
function render(data) {
    // your code here
    // document.createElement() and appendChild() methods are preferred.
    const section = document.createElement("section");
    products.appendChild(section);
    section.innerHTML = `
    <div class="product-top">
        <p class="product-name">${data.name}</p>
        <div>
            <span class="product-price">$ ${data.price}</span>
        </div>
    </div>
    <p class="product-description">${data.description}</p>
    `;
}

ajax(
    "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
    function (response) {
        render(response);
    }
); // you should get product information in JSON format and render data in the page
