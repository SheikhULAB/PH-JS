function milesToKilometers(miles) {
    // The conversion factor from miles to kilometers is 1.609344.
    const kilometersPerMile = 1.609344;
  
    // Multiply the number of miles by the conversion factor to get the number of kilometers.
    const kilometers = miles * kilometersPerMile;
  
    // Return the number of kilometers.
    return kilometers;
  }

const miles = 10;
const kilometers = milesToKilometers(miles);

console.log(`${miles} miles is equal to ${kilometers} kilometers.`);
// output:
//10 miles is equal to 16.09344 kilometers.