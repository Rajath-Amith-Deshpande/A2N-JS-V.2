function f1(a){


    switch(a) {

        case "GM":
            console.log("Good Morning")
            break;

        case "GA":
            console.log("Good Afternoon")
            break;
    
        case "GE":
            console.log("Good Evening")
            break;

        case "GN":
            console.log("Good Night")
            break;
            
        default:
            console.log("No case has been matched")
    }
}     

f1("GA")