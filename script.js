function getHistory(){
	return document.getElementById("history-value").innerText; //get the value of the history (calulation e.g 10+10) by using inner text
}
function printHistory(num){
	document.getElementById("history-value").innerText=num; //this function is used to get whatever the history calculations value
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){ //if valiue is empty set the output ot empty
		document.getElementById("output-value").innerText=num;//gets the output value
	}
	else{ //or else convert it to formatted number
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
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


// operators

let operator = document.getElementsByClassName("operator")

for (let i = 0; i < operator.length; i++) {
    
    operator[i].addEventListener('click',function(){
        // alert("this works"+this.id);

        if(this.id=="C"){
            printHistory("");
            printOutput("");
        }
        else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}

    })
    
}

//use for loop to access each operator one by one and add click function

//numbers

let numbers = document.getElementsByClassName("number")
    
    for(var i =0;i<numbers.length;i++){
        //alert(:this works"+id);
        //getoutput without commas removed
        numbers[i].addEventListener('click',function(){
            var output=reverseNumberFormat(getOutput());
            if(output!=NaN){ //if output is a number
                output=output+this.id;
                printOutput(output);
            }
        });

    
}




//use for loop to access each numbers one by one and add click function



