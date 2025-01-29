//Task1 - Function Declartion
 function userProfile(name){

    console.log("Hello "+name);
 }
 userProfile("Vinoth");

//Task2 - Arrow function

 let doubleArrow = (number) =>{

    console.log(number)
 }
 doubleArrow(2)

//Task3 - Anonymous Function

 let setTimeOut = function (){

    console.log("This message is delayed by 2 seconds")

 }
 setTimeOut();

//Task4 - Callback function

function getUserData(name,age,call){

    console.log("I am " + name)
    console.log("My age is " + age)
    call(3000);

}
function setTimeOut(){
    console.log("This message is delayed by 3 seconds") 
}
getUserData("Vinoth",26,setTimeOut)