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


const availableProducts = ['phone', 'laptop', 'tablet']

function processOrder(availableProducts) {
    return new Promise((resolve, rejects) => {

        setTimeout(() =>{if(!availableProducts || availableProducts.length === 0 ){
            rejects(new Error("Products are not available yet!"))
            return;
        }
        const productIndex = Math.floor(Math.random() * availableProducts.length);
        const productId = Math.floor(10000 + Math.random() * 90000);
        const product = availableProducts[productIndex]
        if(productId && productId >= 10000 && productId <= 99999){
            resolve(`Order for ${product} processed successfully`)
        }
        else{
            rejects(new Error("Product ${product} is out of stock"))
        }

        },2000)
        
    }) 
}

processOrder(availableProducts)
.then((productId) => {
    console.log(productId)
})
.catch((error) => {
    console.error("Error processing order:", error.message)
})