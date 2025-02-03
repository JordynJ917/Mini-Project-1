
const products = [
    {id: 1, title:"#Red #Short #Round" , price: 15.99, category:"Short"},
    {id: 2, title:"#Red #Medium #Coffin #Floral" , price: 42.75, category: "Medium"},
    {id: 3, title:"#Red #Long #Stilleto #Spooky" , price: 69.99, category: "Long"},
    {id: 4, title:"#Red #Square #Long #Winter" , price: 35.00, category: "Long"},
    {id: 5, title:"#Green #Short #Square" , price: 34.99, category: "Short"},
    {id: 6, title:"#Green #Long #Coffin #Floral" , price: 45.00, category: "Long"},
    {id: 7, title:"#Green #Medium #Square #Winter" , price: 18.00, category: "Medium"},
    {id: 8, title:"#Green #Square #XL" , price: 70.00, category: "XL"},
    {id: 9, title:"#Orange #Long #Coffin #Fall" , price: 66.00, category: "Long"},
    {id: 10, title:"#Orange #Short #Square #Spooky" , price: 50.00, category: "Short"},
    {id: 11, title:"#Orange #Medium #Floral #Square" , price: 55.00, category: "Medium"},
    {id: 12, title:"#Orange #XL #Stilleto" , price: 55.00, category: "XL"},
    {id: 13, title:"#Pink #Short #Square #Floral" , price: 39.99, category: "Short"},
    {id: 14, title:"#Pink #Medium #Square #Spooky " , price: 58.75, category: "Long"},
    {id: 15, title:"#Pink #Coffin #Long #Winter" , price: 19.99, category: "Long"},
    {id: 16, title:"#Pink #Short #Round" , price: 20.00, category: "Short"}
];


let categories = new Map();
let allProducts;

// fetch example
// fetch('/index1.html')
//     .then(response => response.json())
//     .then(json => { allProducts = json; loadProducts(json); loadFilterOptions(); })


    function loadProducts(products) {
        document.querySelector('#product-list').innerHTML = '';

        products.forEach(product => {
            let categorySlug = product.category.replaceAll(' ', '_').replaceAll("'", '');
            categories.set(product.category, categorySlug);

            addProduct(product);
        });

        if (products.length == 0) document.querySelector('#product-list').innerHTML = '<p>No matching products.</p>';
    }

    
    // function addProduct(item) {

    //     const template = document.getElementById("card-template").content.cloneNode(true);
    //     template.querySelector('.card-title').innerText = item.title;
    //     template.querySelector('.card-header').innerHTML = getCategoryIcon(item.category) + item.category;
    //     template.querySelector('.card-subtitle').innerText = '$' + item.price;
    //     template.querySelector('.card-img-top').src = item.image;
    //     template.querySelector('.card-img-top').alt = item.title;
    //     template.querySelector('.card-text').innerText = item.description.substring(0, 50) + '...';
    //     template.querySelector('.card').className = 'card '+ categories.get(item.category);
    //     template.querySelector('.card').id = 'product' + item.id;
    //     template.querySelector('.btn').addEventListener('click', (e) => expandText(e, item.id, item.description));
    //     document.querySelector('#product-list').appendChild(template);
    // }

    
    // function getCategoryIcon(cat) {
    //     switch (cat.toLowerCase()) {
    //         case "Short": return '<i class="fa-solid fa-shirt"></i> ';
    //         case "Medium": return '<i class="fa-solid fa-person-dress"></i> ';
    //         case "Long": return '<i class="fa-regular fa-gem"></i> ';
    //         case "XL": return '<i class="fa-solid fa-tv"></i> ';
    //     }
        
    //     return '<i class="fa-brands fa-shirtsinbulk"></i> ';
    // }

    
    // function loadFilterOptions() {
    //     let filterSelect = document.getElementById('category_filter')
    //     categories.forEach((slug, cat) => {
    //         filterSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
    //     });
    // }

   
    function filterProducts(e) {
        let selectedCategory = e.target.value;
        let filteredProducts = allProducts.filter(product => product.category == selectedCategory);

        loadProducts(filteredProducts)
    }

    function sortProducts(e) {
        let selectedOrder = e.target.value;
        let sortedProducts = [...products];

        switch (selectedOrder) {
            case 'price_lohi': sortedProducts.sort((p1, p2) => p1.price - p2.price); break;
            case 'price_hilo': sortedProducts.sort((p1, p2) => p2.price - p1.price); break;
            case 'title_az': sortedProducts.sort((p1, p2) => p2.title == p1.title ? 0 : (p1.title > p2.title ? 1 : -1)); break;
            case 'title_za': sortedProducts.sort((p1, p2) => p2.title == p1.title ? 0 : (p2.title > p1.title ? 1 : -1)); break;
        }

        loadProducts(sortedProducts)           
    }
