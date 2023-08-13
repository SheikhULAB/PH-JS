const myInches = 12;
const feet = myInches / 12;
console.log(feet);//1


const dadaInches = 144;
const dadarFeet = dadaInches / 12;
console.log(dadarFeet);//12


const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log(dadiFeet);//5


//using function

function inchToFeet(inch) {
    // const feet = inch / 12;
    // return feet;
    return inch / 12;
}
// console.log(inchToFeet(60));//5
const dadaInch = 144;
const dadaFeet = inchToFeet(dadaInch);
console.log(dadaFeet);//12

const nanaInch = 160;
const nanaFeet = inchToFeet(nanaInch);
// console.log(nanaFeet);//13.333333333333334
console.log(nanaFeet.toFixed(2));//13.33