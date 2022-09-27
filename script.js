var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ","
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// //Advance Array
// array = [1,2,10,16];
// double = [];

// newArray = array.forEach(num => {
//     double.push(num*2)
// });
// console.log("ForEach",double)

// //map, filter, reduce

// mapArray = array.map(num => num*2);
// console.log("Map",mapArray);

// //filter

// filterArray = array.filter((num) => num > 5)
// console.log("filter", filterArray);

// //reduce

// reduceArray = array.reduce((accumalator,num)=>{
//     return accumalator + num;
// },0);
// console.log("reduce",reduceArray);

// //referrence
// const obj1 = { value : 10 }
// const obj2 = obj1;
// const obj3 = { value : 10 }

// //context
// const obj = {
//     a: function(){
//         console.log(this);
//     }
// }

// //instanstiation
// class Player {
//     constructor(name,type){
//         console.log("Player",this)
//         this.name = name;
//         this.type = type;
//     }
//     introduce(){
//         console.log(`hi i am ${this.name}. and im ${this.type}`)
//     }
// }

// class Wirzard extends Player{
//     constructor(name,type){
//         super(name,type)
//         console.log("Wirzard",this)
//     }
//     play(){
//         console.log(`Weee im ${this.type}`)
//     }
// }

// wirzard1 = new Wirzard("Sadeeq","Stark");
// wirzard2 = new Wirzard("Ahmed","Lannister");

const flattened = [[0,1],[2,3],[4,5]].reduce(
    (accumalator,array) => {
        debugger;
        return accumalator.concat(array)
    }, []); 

