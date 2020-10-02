let currentNumber = "";
let numberToChange = "";
let mathsfunction = "";


//display new value of currentNumber
function display(){
    document.getElementById("answer").innerHTML = currentNumber;
}

//clear calc
function clear(){
    document.getElementById("numbertochange").innerHTML = 0;
    document.getElementById("answer").innerHTML = "0";
    document.getElementById("mathsfunction").innerHTML = ".";
    currentNumber=""
    numberToChange=""

    
}
//display function and equals on middle row
function equalsign(){
    mathsfunction=mathsfunction+currentNumber +"  =";
    document.getElementById("mathsfunction").innerHTML = (mathsfunction);
     
}
//places new number to right of current number
function addNumber(num){
    num=num.toString();
    currentNumber= parseFloat((currentNumber + num),10); //replace parseInt with parseFloat to accept decimal
    display()
}

//convert currentnumber to plus or minus
function positiveNegativeSwitch(){
    currentNumber=(currentNumber * -1);
    display()
}

//decimals
function dot(){
    if ( /\d*\.{1,}/.test(currentNumber) == true) {
        currentNumber=currentNumber;
    }
    else{
        currentNumber=(currentNumber+".")
        display()
    }                                                 
    
}
//on pressing operators, do some stuff
function funcButtonPress(func){
    numberToChange = currentNumber;
    currentNumber = "0";
    mathsfunction = func;
    display()
    document.getElementById("numbertochange").innerHTML = numberToChange;
    document.getElementById("mathsfunction").innerHTML = mathsfunction;
}

//pressing equals does some stuff
function equals(){
    switch(mathsfunction){

        case "+" :
        equalsign()
        currentNumber=currentNumber+numberToChange;
        display()
        break;

        case "-" :
        equalsign()
        currentNumber=numberToChange-currentNumber;
        display()
        break;

        case "*" :
        equalsign()
        currentNumber=(numberToChange * currentNumber);
        display()
        break;

        case "/" :
        equalsign()
        currentNumber=(numberToChange / currentNumber);
        display()
        break;

        case "%" :
        equalsign()
        currentNumber=((numberToChange/100) * currentNumber);
        display()
        break;

        
    }

}
//what functions load when buttons are pressed
document.getElementById("clear").addEventListener("click", clear );
document.getElementById("one").addEventListener("click", () =>  addNumber(1) );
document.getElementById("two").addEventListener("click", () => addNumber(2) );
document.getElementById("three").addEventListener("click", () => addNumber(3) );
document.getElementById("four").addEventListener("click",() => addNumber(4) );
document.getElementById("five").addEventListener("click",() => addNumber(5) );
document.getElementById("six").addEventListener("click",() => addNumber(6) );
document.getElementById("seven").addEventListener("click",() => addNumber(7) );
document.getElementById("eight").addEventListener("click",() => addNumber(8) );
document.getElementById("nine").addEventListener("click",() => addNumber(9) );
document.getElementById("zero").addEventListener("click",() => addNumber(0) );
document.getElementById("plusminus").addEventListener("click", positiveNegativeSwitch );
document.getElementById("add").addEventListener("click", () => funcButtonPress("+") );
document.getElementById("minus").addEventListener("click", () => funcButtonPress("-") );
document.getElementById("multiply").addEventListener("click", () => funcButtonPress("*") );
document.getElementById("divide").addEventListener("click", () => funcButtonPress("/") );
document.getElementById("dot").addEventListener("click", dot );
document.getElementById("percent").addEventListener("click", () => funcButtonPress("%") );
document.getElementById("equals").addEventListener("click", equals );





//in case of faults
function wtf(){
console.log(currentNumber);
}