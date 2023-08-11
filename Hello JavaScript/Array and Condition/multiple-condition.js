var isGraduated = true;
var salary = 25000;
var cars = 0;

if(isGraduated === true) {
    console.log("eso biye kore feli"); //will  print
} else {
    console.log("tor kopale biye nai");//not print
}

if(isGraduated === true && salary > 50000) {
    console.log("eso biye kore feli"); //will not print
} else {
    console.log("tor kopale biye nai");// print
}

salary = 50000;
if(isGraduated === true && salary >= 50000) {
    console.log("eso biye kore feli"); // print
} else {
    console.log("tor kopale biye nai");//not print
}

if(isGraduated === true && salary >= 50000 && cars >=1) {
    console.log("eso biye kore feli"); // not print
} else {
    console.log("tor kopale biye nai");// print
}

cars = 1;

if(isGraduated === true && salary >= 50000 && cars >=1) {
    console.log("eso biye kore feli"); // print
} else {
    console.log("tor kopale biye nai");// not print
}


if(isGraduated === true || salary > 50000){
    console.log("eso prem kori"); // print
} else {
    console.log("tomar friend er phone number daw");// not print
}

isGraduated = false;
if(isGraduated === true || salary > 50000){
    console.log("eso prem kori"); //not  print
} else {
    console.log("tomar friend er phone number daw");//  print
}

if(isGraduated === true || salary > 50000 || cars >= 1) { 
    console.log("eso prem kori"); //  print
} else {
    console.log("tomar friend er phone number daw");//  not print
}


if(isGraduated === true && salary > 50000 || cars >= 1) { 
    console.log("eso prem kori"); //  print
} else {
    console.log("tomar friend er phone number daw");//  not print
}