let outputDisplay = document.getElementById("output-display");
outputDisplay.value = "";   //set the initial value of output display as 0

//          Operand function for accessing the right value of pressed key 
let operandFunction = (keyPressed) => {
    outputDisplay.value += keyPressed;
}
//          operator function 
let operatorFunction = (operatorPressed) => {
    let operatorArray = ['+', '-', '/', '*'];
    let lastElement = outputDisplay.value.charAt(outputDisplay.value.length-1);

    // for eliminating the last element if it's already a operator
    if(operatorArray.includes(lastElement)) {
        outputDisplay.value = outputDisplay.value.slice(0, -1);
    }
    outputDisplay.value += operatorPressed;
}
//          Delete function for deleting the element from right side
let deleteFunction = () => {
    outputDisplay.value = outputDisplay.value.slice(0, -1);
}
//          Reset button function for clearing the display
let resetFunction = () => {
    outputDisplay.value = "";
}
//          Equalsto function 
let equalstoFunction = () => {
    if(outputDisplay.value.length == 0) {
        outputDisplay.value = 0;
    }
    else {
        // using try and catch for catching and showing the errors on the output display
        try {
            // using if else for differentiating if the operation has a decimal or not and based on that evaluating and giving output
            if(outputDisplay.value.includes(".")) {
                outputDisplay.value = eval(outputDisplay.value).toFixed(2);
            }
            else {
                outputDisplay.value = eval(outputDisplay.value);
            }
        }
        catch {
            outputDisplay.value = "Invalid Operation";
        }
    }
}
