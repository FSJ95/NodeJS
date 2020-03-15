$("#teleportButton").click(() => {
    const temp = $(".inputRight").val();
    $(".inputRight").val($(".inputLeft").val());
    $(".inputLeft").val(temp);
});




const example1 = "example."
let example2 = "example."
var example3 = "example."

var x = 10.99; //With decimals
var y = 11; //Without decimals

const firstName = 'Frederik'; 
const lastName = 'Jensen'; 
var fullName = firstName + ' ' + lastName


0 == false         // true
0 === false        // false (different types: int, bool)
1 == "1"           // true
1 === "1"          // false (different types: int, string)
null == undefined  // true
null === undefined // false


function aFunction(valueOne, valueTwo) {
    return valueOne + valueTwo;    
}

console.log(typeof("example")); // Return String


