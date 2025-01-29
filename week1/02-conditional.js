testType = "load"

function runTests(){
    switch(testType){
        case 'smoke':
            console.log("smoke")
            break;

        case 'sanity':
            console.log("sanity")
            break;
        case 'regression':
            console.log("Regression")
            break;
        default:
            console.log("load")
            break;
    }
}
runTests();
