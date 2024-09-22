var greeting;
var time = new Date().getHours();

if (time < 10){
    greeting ="Goodmorning";
}

else if (time < 15){
    greeting ="Goodnoon";
}

else if (time < 20){
    greeting ="Goodevening";
}

else {
    greeting ="Goodnight";
}
console.log(time);
console.log(greeting);