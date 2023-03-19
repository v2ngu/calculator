const button = document.querySelectorAll(".numButton");
const display = document.querySelector(".display");
const operator = document.querySelectorAll(".operator");
const solve = document.getElementById("solve");

let nums = [];
let num = "";

let operators = "";

//Functions to populate the display
button.forEach(function (buttonElement) {
    changeDownOpacity(buttonElement, .8);
    changeUpOpacity(buttonElement, 1);
    buttonElement.addEventListener('click', function (event) {
        const buttonValue = event.target.textContent;
        if (buttonValue === "A/C") {
            window.location.reload()
        } else {
            display.innerHTML += buttonValue;
            num += buttonValue;
        }
    });
});

//Functions to populate the display
operator.forEach(function (buttonElement) {
    changeDownOpacity(buttonElement, .8);
    changeUpOpacity(buttonElement, 1);
    buttonElement.addEventListener("click", function (event) {
        if (num !== '') {
            nums.push(parseInt(num));
        }
        if (nums.length === 2) {
            handleSolveClick();
        }
        num = "";
        const buttonValue = event.target.textContent;
        operators = buttonValue;
        display.innerHTML += buttonValue;
    })
});

function handleSolveClick() {
    nums.push(parseInt(num));
    console.log("Attemping to solve function:");
    console.log("nums at 0: " + parseInt(nums[0]));
    console.log("nums at 1: " + parseInt(nums[1]));
    console.log("what is the operator: " + operators);
    let answer = operate(parseInt(nums[0]), parseInt(nums[1]), operators);
    nums = [answer];
    console.log(nums);
    num = "";
    console.log(nums);
    display.innerHTML = answer.toString();
}


function changeDownOpacity(element, opacity) {
    element.addEventListener("mousedown", function () {
        element.style.opacity = opacity;
    })
};
function changeUpOpacity(element, opacity) {
    element.addEventListener("mouseup", function () {
        element.style.opacity = opacity;
    })
};

// Step 1: function for basic math
function addNum(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subractNum(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function multiplyNum(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

function divideNum(num1, num2) {
    return parseInt(num1) / parseInt(num2);

}

//Step 2: Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            console.log('The "+" pathway');
            return addNum(num1, num2);
            break;
        case "-":
            console.log("The \"-\" pathway");
            return subractNum(num1, num2);
            break;
        case "*":
            console.log("The \"*\" pathway");
            return multiplyNum(num1, num2);
            break;
        case "/":
            console.log("The \"/\" pathway");
            return divideNum(num1, num2);
            break;
        default:
            alert("Did not recieve an operator!");
    }
}

solve.addEventListener("click", handleSolveClick);
