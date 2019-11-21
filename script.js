function getHistory(){
    return document.getElementById("history-value").innerText; //get the value of the history (calulation e.g 10+10) by using inner text
}

function printHistory(num){
    document.getElementById("history-value").innerText=num; //this function is used to get whatever the history calculations value
}

// outputs 

function printOutput(num){
    document.getElementById("output-value").innerText=num; //gets the output value
}

printOutput("100")

function getOutput(num){
    document.getElementById("output-value").innerText=num;
}

