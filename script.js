function getHistory(){
    return document.getElementById("history-value").innerText; //get the value of the history (calulation e.g 10+10) by using inner text
}

function printHistory(num){
    document.getElementById("history-value").innerText=num; //this function is used to get whatever the history calculations value
}

// outputs 

function printOutput(num){
  
    if(num==""){ //if valiue is empty set the output ot empty
		document.getElementById("output-value").innerText=num;//gets the output value
	}
	else{ //or else convert it to formatted number
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}

printOutput("9999");

function getFormattedNumber(num){ //this function reads the value and formats the number output
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}


function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}


function getOutput(num){
    document.getElementById("output-value").innerText=num;
}

// operators

let operator = document.getElementsByClassName("operator")

for (let i = 0; i < operator.length; i++) {
    
    operator[i].addEventListener('click',function(){
        // alert("this works"+this.id);

        if(this.id=="C"){
            printHistory("");
            printOutput("");
        }

    })
    
}

//use for loop to access each operator one by one and add click function

//numbers

let numbers = document.getElementsByClassName("number")

for (let i = 0; i < numbers.length; i++) {
    
    numbers[i].addEventListener('click',function(){
        // alert("this works"+this.id);
        
    
      

    });
    
}

//use for loop to access each numbers one by one and add click function
