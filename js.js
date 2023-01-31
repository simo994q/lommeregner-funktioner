

// Funktion 1
myCalcOne()

function myCalcOne () {
    let result = 1+2
    console.log(result);
};



// Funktion 2
myCalcTwo(1, 2)

function myCalcTwo (argOne, argTwo) {
    let result = argOne + argTwo
    console.log(result);
};



// Funktion 3
myCalcThree(1, 2)

function myCalcThree (argOne, argTwo) {
    let result = argOne + argTwo
    myCalcThreeResult(result)
};

function myCalcThreeResult (res) {
    console.log(res);
}



// Funktion 4
myCalcFour(1, 2)

function myCalcFour (argOne, argTwo) {
    let result = addMe(argOne, argTwo)

    myViewFour(result)
};

function addMe (argOne, argTwo) {
    return (argOne + argTwo)
};

function myViewFour (res) {
    console.log(res);
};
