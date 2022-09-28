//this is the last step of the process:
//get info from the url parameters by accessing the search bar in the browser window
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
// const id = "632cea0070a5204f0003a208";
console.log(id);

//import access point & API key
const url = `https://keammd22-06be.restdb.io/rest/sdlproducts?q={"_id":"${id}"}`;

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
    productDisplay(data[0]);
  });

//   .catch((e) => {
//     console.error("an error occured:", e.message);
//   });

function productDisplay(product) {
  console.log(product);
}
