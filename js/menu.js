const restourant = 'food-band'

const renderItems = (data) => {
    data.forEach(elem => {
        console.log(elem);
    });
} 

fetch(`https://food-733bf-default-rtdb.firebaseio.com/db/food-band.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error) => console.log(error) )