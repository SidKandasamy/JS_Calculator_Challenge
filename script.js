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



function getOutput(num){
    document.getElementById("output-value").innerText=num;
}

// operators

let operator = document.getElementsByClassName("operator")

for (let i = 0; i < operator.length; i++) {
    
    operator[i].addEventListener('click',function(){
        // alert("this works"+this.id);

    })
    
}

//use for loop to access each operator one by one and add click function

//numbers

let numbers = document.getElementsByClassName("number")

for (let i = 0; i < numbers.length; i++) {
    
    numbers[i].addEventListener('click',function(){
        // alert("this works"+this.id);

    })
    
}

//use for loop to access each numbers one by one and add click function
