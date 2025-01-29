function numberType(number){
    if(number>0){
        return "It is a Positive Number"    
    }
    else if(number<0){
        return "It is a Negative Number"
    }
    else{
        return "The number is netural"
    }
}
let result = numberType(0);
console.log(result);