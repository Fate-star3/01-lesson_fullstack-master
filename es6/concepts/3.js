// const arr = [1,2,3]
const func = function(a,b) {
    // this 
    // arguments 
    console.log(arguments);
    
    console.log(a, b)
    console.log(arguments[2]);
}

func(1, 2, 3);