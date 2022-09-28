//import access point & API key
const url = "https://keammd22-06be.restdb.io/rest/sdlproducts?max=20";

const options = {
  headers: {
    "x-apikey": "6332fb6932330102d591d230",
  },
};

//fetch the data
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    //give me the data in json form
    return response.json();
  })
  //and apply whatever changes I am about to make in the data
  .then(function (data) {
    console.log(data);
    handleProductList(data);
  });

//   .catch((e) => {
//     console.error("an error occured:", e.message);
//   });

//more specifically, apply the changes for each data I get
function handleProductList(data) {
  data.forEach(showProduct);
}

//what I want to change is the display of every product
//I start from here:
function showProduct(product) {
  console.log(product);

  //grab template
  const template = document.querySelector("#smallProductTemplate").content;
  //clone it
  const copy = template.cloneNode(true);
  //go inside it and start changing its content
  copy.querySelector("a").href = `product.html?id=${product._id}`;
  if (product.subcategory[0] === "suits") {
    copy.querySelector(
      "img"
    ).src = `http://mamouzelos.art/stardustLab/img/stardustLab-img/${product.name
      .toLowerCase()
      .replace(" ", "")}1.jpg`;
    copy.querySelector(
      ".secondary-img"
    ).src = `http://mamouzelos.art/stardustLab/img/stardustLab-img/${product.name
      .toLowerCase()
      .replace(" ", "")}2.jpg`;

    copy.querySelector(".img-container").classList.add("hover-img");
  } else {
    copy.querySelector(
      "img"
    ).src = `http://mamouzelos.art/stardustLab/img/stardustLab-img/${product.name
      .toLowerCase()
      .replace(" ", "")}.jpg`;
    copy.querySelector(".secondary-img").remove();
  }

  copy.querySelector("h3").textContent = product.name;
  copy.querySelector(".price").textContent = `DKK ${product.price}`;
  //the content is now changed
  //all this content you changed needs to go and live somewhere now
  //In this case in need to live in the main
  //so...
  //grab parent (main)
  const parent = document.querySelector("main");
  //and append this content to it
  parent.appendChild(copy);
}

//   if (product._id === id) {
//     console.log(product);
//   }
