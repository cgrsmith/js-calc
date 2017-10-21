$(document).ready(function() {
    $(".buttonInput").click(function() {
        equationAdd($(this), $("#calcInput"));
    });
    $("#inpEquals").click(function() {
        equationEval($("#calcInput"), $("#calcAnswer"));
    });
    $("#calcInput").keypress(function(key) {
        if(key.which === 13){
            $("#inpEquals").trigger("click");
        }
    });
    $("#inpClear").click(function() {
        equationClear($("#calcInput"));
    });
    $("#inpBackspace").click(function() {
        equationBackspace($("#calcInput"));
    });
});

function equationAdd(clickedButton, inputField) {
    //Add input button value to input field
    inputField.val(inputField.val() + clickedButton.val());
}

function equationClear(inputField) {
    //Clear the input field
    inputField.val("");
}

function equationBackspace(inputField) {
    //Remove last character in string
    inputField.val(inputField.val().slice(0,-1));
}

function equationEval(inputField, outputField) {
    //perform checks and evaluate the equation
    //Check if equation is legal
    if (equationCheck(inputField.val())){
        //if previous result is non numeric (ie an error), set it to 0
        let prevResult = $.isNumeric(outputField.text()) ? outputField.text() : 0;
        //
        outputField.text(eval(equationSetup(inputField.val(), prevResult)));
        equationClear(inputField);
    } else {
        outputField.text("Equation Error");
    }
    inputField.focus();
}

function equationCheck(equationString) {
    //look for any NON-allowed character, returns whether eqn is legal
    let testRegex = /[^0-9\+\-\*\/\^\(\)\.]/;
    return !testRegex.test(equationString)
}

function equationSetup(equationString, prevResult) {
    //Set string to chain if no leading value
    let testRegex = /[\+\-\*\/\^\(\)]/;
    let returnString = equationString;
    if (testRegex.test(returnString.slice(0,1))) {
        console.log(prevResult);
        returnString = prevResult + returnString;
    }
    /*TBD - Add ^ (power) button functionality
    */
    return returnString;
}