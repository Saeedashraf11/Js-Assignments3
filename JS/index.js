
var tableBody = document.getElementById("tableBody");
var siteNameInput = document.getElementById("siteNameInput");
var siteURLInput = document.getElementById("siteURLInput");
// var productCategoryInput = document.getElementById("productCategoryInput");
// var productDescInput = document.getElementById("productDescInput");
var productsContainer = JSON.parse(localStorage.getItem("products")) ?? [];
displayProducts();

var productsContainer = [];

function addProduct() {
  var product = {
    name:siteNameInput.value,
    url:siteURLInput.value,
    // category: productCategoryInput.value,
    // desc: productDescInput.value,
  };

  console.log(product);

  productsContainer.push(product);
  Storeproducts(productsContainer);
  displayProducts();
  clear();
}

function displayProducts() {
  var cartoona = "";
  for (var i = 0; i < productsContainer.length; i++) {
    cartoona += `
        <tr>
            <td>${i}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].url}</td>
          
            <td>
                <button id="visit" onclick="visitWebsite('${encodeURIComponent(productsContainer[i].url)}')" class="">Visit</button>
            </td>
            <td>
                <button id="delete" onclick="deleteProduct(${i})" class="">Delete</button>
            </td>
        </tr>
        `;
  }

  tableBody.innerHTML = cartoona;
}

function Storeproducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

function clear() {
 siteNameInput.value = "";
//   productCategoryInput.value = "";
 siteURLInput.value = "";
//   productDescInput.value = "";
}


function deleteProduct(productIndex) {
  productsContainer.splice(productIndex, 1);
  Storeproducts(productsContainer);
  // console.log(productsContainer);
  displayProducts();
}


function visitWebsite(url){
  var product = productsContainer[url];
  window.open(url, "_blank");
 

  // siteNameInput.value = product.name
  // siteURLInput.value = product.url
  // productCategoryInput.value = product.category
  // productDescInput.value = product.desc


  // document.getElementById("addBtn").innerHTML = "Update Product"


}
