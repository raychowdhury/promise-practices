// //Producer part
// const cars = ['bmw','vw','benz']; //It could be api call to grab data from database.

// // Create funcation which return promise
// function orderCar(cars) {

//   return new Promise((resolve, reject) => {
//     //Checking the value has been passed is empty or null
//     if (!cars || cars.length === 0) {

//         reject(new Error("Cars is not ready yet!"));
//         return;
//     }
//     // creating id for the car
//    const carId = Math.floor(10000 + Math.random() * 90000);;

//     if (carId && carId >= 10000 && carId <= 99999) {
//         resolve(`Car created with ID: ${carId}`);
//     } else {

//         reject(new Error("Manufacturer issue raised"));
//     }
//   });
// }
// //Consumer part
// orderCar(cars)
// .then((carId) => {
//     console.log(carId);
// })
// .catch((error) => {
//     console.error("Error creating car:", error.message);
// })

// First Problem
// const availableProducts = ['phone', 'laptop', 'tablet']

// function processOrder(availableProducts) {
//     return new Promise((resolve, rejects) => {

//         setTimeout(() =>{if(!availableProducts || availableProducts.length === 0 ){
//             rejects(new Error("Products are not available yet!"))
//             return;
//         }
//         const productIndex = Math.floor(Math.random() * availableProducts.length);
//         const productId = Math.floor(10000 + Math.random() * 90000);
//         const product = availableProducts[productIndex]
//         if(productId && productId >= 10000 && productId <= 99999){
//             resolve(`Order for ${product} processed successfully`)
//         }
//         else{
//             rejects(new Error("Product ${product} is out of stock"))
//         }

//         },2000)

//     })
// }

// processOrder(availableProducts)
// .then((productId) => {
//     console.log(productId)
// })
// .catch((error) => {
//     console.error("Error processing order:", error.message)
// })

// function uploadFile(fileSize) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (fileSize <= 5) {  // Check if the file size is less than or equal to 5 MB
//                 resolve("Upload successfully done.");
//             } else {
//                 reject(new Error("File size is too large"));
//             }
//         }, 3000); // Simulate a delay of 3 seconds
//     });
// }

// // Example calls to the function with different file sizes
// uploadFile(8)  // Change this number to test different scenarios
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error("Error uploading file:", error.message);
//     });

// // You can also test with a size greater than 5
// uploadFile(6)
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error("Error uploading file:", error.message);
//     });

// practing fetch

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data =>console.log(data.name))
//     .catch(error => console.error(error))

// async & await

//pokemon api


fetechData();
async function fetechData() {
  try {

    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if(!response.ok){
        throw new Error("Network response was not ok");
    } 
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block"

    console.log(data.name);
    

  } catch (error) {
    console.error(error);
  }
}


