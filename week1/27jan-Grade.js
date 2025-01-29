function stuGrade(score){
   switch(true){
        case (score>=90 && score <=100):
            return "The Grade is A"
            break;
        case (score>=80 && score <90):
            return "The Grade is B"
            break;
        case (score>=70 && score <80):
            return "The Grade is C"
            break;
        default:
           return "The Grade is D"
            break;
    }
}
let score = stuGrade(85);
console.log(score);
