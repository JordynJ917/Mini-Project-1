/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/

const products = [
    {id: 1, title: , price: 15.99},
    {id: 2, title: , price: 42.75},
    {id: 3, title: , price: 69.99},
    {id: 4, title: , price: 35.00},
    {id: 5, title: , price: 34.99},
    {id: 6, title: , price: 45.00},
    {id: 7, title: , price: 18.00},
    {id: 8, title: , price: 70.00},
    {id: 9, title: , price: 66.00},
    {id: 10, title: , price: 50.00},
    {id: 11, title: , price: 55.00},
    {id: 12, title: , price: 55.00},
    {id: 13, title: , price: 39.99},
    {id: 14, title: , price: 58.75},
    {id: 15, title: , price: 19.99},
    {id: 16, title: , price: 20.00}
];


let categories = new Map();
let allProducts;

fetch example
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(json => { allProducts = json; loadProducts(json); loadFilterOptions(); })


    function loadProducts(products) {
        document.querySelector('#product-list').innerHTML = '';

        products.forEach(product => {
            let categorySlug = product.category.replaceAll(' ', '_').replaceAll("'", '');
            categories.set(product.category, categorySlug);

            addProduct(product);
        });

        if (products.length == 0) document.querySelector('#product-list').innerHTML = '<p>No matching products.</p>';
    }

    
    function addProduct(item) {

        const template = document.getElementById("card-template").content.cloneNode(true);
        template.querySelector('.card-title').innerText = item.title;
        template.querySelector('.card-header').innerHTML = getCategoryIcon(item.category) + item.category;
        template.querySelector('.card-subtitle').innerText = '$' + item.price;
        template.querySelector('.card-img-top').src = item.image;
        template.querySelector('.card-img-top').alt = item.title;
        template.querySelector('.card-text').innerText = item.description.substring(0, 50) + '...';
        template.querySelector('.card').className = 'card '+ categories.get(item.category);
        template.querySelector('.card').id = 'product' + item.id;
        template.querySelector('.btn').addEventListener('click', (e) => expandText(e, item.id, item.description));
        document.querySelector('#product-list').appendChild(template);
    }

    
    function getCategoryIcon(cat) {
        switch (cat.toLowerCase()) {
            case "men's clothing": return '<i class="fa-solid fa-shirt"></i> ';
            case "women's clothing": return '<i class="fa-solid fa-person-dress"></i> ';
            case "jewelery": return '<i class="fa-regular fa-gem"></i> ';
            case "electronics": return '<i class="fa-solid fa-tv"></i> ';
        }
        
        return '<i class="fa-brands fa-shirtsinbulk"></i> ';
    }

    
    function loadFilterOptions() {
        let filterSelect = document.getElementById('category_filter')
        categories.forEach((slug, cat) => {
            filterSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }

   
    function filterProducts(e) {
        let selectedCategory = e.target.value;
        let filteredProducts = allProducts.filter(product => product.category == selectedCategory);

        loadProducts(filteredProducts)
    }

    function sortProducts(e) {
        let selectedOrder = e.target.value;
        let sortedProducts = [...allProducts];

        switch (selectedOrder) {
            case 'price_lohi': sortedProducts.sort((p1, p2) => p1.price - p2.price); break;
            case 'price_hilo': sortedProducts.sort((p1, p2) => p2.price - p1.price); break;
            case 'title_az': sortedProducts.sort((p1, p2) => p2.title == p1.title ? 0 : (p1.title > p2.title ? 1 : -1)); break;
            case 'title_za': sortedProducts.sort((p1, p2) => p2.title == p1.title ? 0 : (p2.title > p1.title ? 1 : -1)); break;
        }

        loadProducts(sortedProducts)           
    }
