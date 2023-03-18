const button = document.querySelectorAll(".numButton");
const display = document.querySelector(".display");
const operator = document.querySelectorAll(".operator");
const solve = document.getElementById("solve");

let nums = [];
let num = "";

let operators ="";

//Functions to populate the display
button.forEach(function(buttonElement){
    buttonElement.addEventListener('mouseover', function(){
        buttonElement.style.color = "red";
    });
    buttonElement.addEventListener('mouseout', function(){
        buttonElement.style.color = "black";
    });
    buttonElement.addEventListener('click',function(event){
        const buttonValue = event.target.textContent;
        display.innerHTML += buttonValue;
        num += buttonValue;
        console.log(num);
    });     
});

//Functions to populate the display
operator.forEach(function(buttonElement){
    buttonElement.addEventListener('mouseover', function(){
        buttonElement.style.color = "red";
    });
    buttonElement.addEventListener('mouseout', function(){
        buttonElement.style.color = "black";
    });
    buttonElement.addEventListener("click",function(event){
        const buttonValue = event.target.textContent;
        operators = buttonValue;
        display.innerHTML += buttonValue;
        nums.push(parseInt(num));
        num = "";

        console.log(num);
        console.log(nums);

    })
});

solve.addEventListener("mouseover", function() {
    solve.style.color = "red";
});
solve.addEventListener('mouseout', function(){
    solve.style.color = "black";
});
solve.addEventListener("click", function(){
    nums.push(parseInt(num));
    console.log("Attemping to solve function:");
    console.log(parseInt(nums[0]));
    console.log(parseInt(nums[1]));
    console.log(operators);
    let answer = operate(parseInt(nums[0]), parseInt(nums[1]), operators);
    nums = [];
    display.innerHTML = answer.toString();
});



// Step 1: function for basic math
function addNum(num1, num2){
    return parseInt(num1) + parseInt(num2);
}

function subractNum(num1, num2){
    return parseInt(num1) - parseInt(num2);
}

function multiplyNum(num1, num2){
    return parseInt(num1) * parseInt(num2);

}

function divideNum(num1, num2){
    return parseInt(num1) / parseInt(num2);

}

//Step 2: Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(num1, num2, operator){
    switch(operator){
        case "+":
            console.log('The "+" pathway');
            return addNum(num1,num2);
            break;
        case "-":
            console.log("The \"-\" pathway");
            return subractNum(num1,num2);
            break;
        case "*":
            console.log("The \"*\" pathway");
            return multiplyNum(num1,num2);
            break;
        case "/":
            console.log("The \"/\" pathway");
            return divideNum(num1,num2);
            break;
        default:
            alert("Did not recieve an operator!");            
    }   
}





