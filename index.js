// Write your solution here!
let cats =["Milo", "Otis", "Garfield"]
console.log(cats)

function destructivelyAppendCat(name){
    cats.push(name)
}
 function destructivelyPrependCat(name) {
     cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function  destructivelyRemoveFirstCat(){
    cats.shift()
}
function  appendCat(name){
const Broom=[...cats,name]
return Broom;
}
function prependCat(name){

    const Arnold=[name,...cats]
    return Arnold;
}
function removeLastCat(){
    const newArray=[...cats]
    newArray.pop()
    return newArray;
}
function  removeFirstCat(){
    const newArray=[...cats]

    newArray.shift()
    return newArray;
}