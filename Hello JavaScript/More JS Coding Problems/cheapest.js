const phones = [
    {
        name: 'samsung',
        camera: 12,
        storage: '32gb',
        price: 3200,
        color: 'silver',
    },
    {
        name: 'walton',
        camera: 10,
        storage: '32gb',
        price: 2200,
        color: 'silver',
    },
    {
        name: 'iphone',
        camera: 48,
        storage: '128gb',
        price: 90000,
        color: 'white',
    },
    {
        name: 'nokia',
        camera: 10,
        storage: '32gb',
        price: 4400,
        color: 'silver',
    },
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
// output: 
// {
//     name: 'walton',
//     camera: 10,
//     storage: '32gb',
//     price: 2200,
//     color: 'silver'
//   }