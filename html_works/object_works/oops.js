var baleno={
    colors:["red","black","blue"],
    varients:["petrol"],
    price:"8lakh",
    manufacture:"nexa",
    getPrice(){
        return this.price
    }

}
var glanza={
    manufacture:"toyota",
    price:"9lakh"
}
glanza.__proto__=baleno
console.log(glanza.price);
console.log(glanza.getPrice());