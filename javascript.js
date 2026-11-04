console.log("Let's Calculate!");

let operand1 = 0, operand2 = 0, operator ="";

const number1Update = function(num) {
   operand1 = num;
   dis.textContent = operand1;
};
const number2Update = function(num) {
    operand2 = num;
    dis.textContent = operand2;
};

const addition = function(a,b) {
    console.log(a+b);
    return a+b;
};

const subtraction = function(a,b) {
    console.log(a-b);
    return a-b;
};

const multiplication =function(a,b) {
    console.log(a*b);
    return a*b;
};

const division = function(a,b) {
    if (b==0) return "Cannot Divide By Zero!";
    else {
    console.log(Math.round(a/b*1000)/1000);
    return Math.round(a/b*1000)/1000;
    }
};

const operate = function(a,x,b) {
    if (x==="+") return addition(a,b);
    else if (x==="-") return subtraction(a,b);
    else if (x==="*") return multiplication(a,b);
    else if (x==="/") return division(a,b);
};

const dis = document.querySelector(".display");

let op1="", op2="", op="";

const operandButtons = document.querySelectorAll(".operands button");
operandButtons.forEach(button => {
    button.addEventListener("click",(e) => {
        const value = e.target.dataset.value;
        if(op==="") { 
        op1+=value;
        dis.textContent=op1;
    }
        else {
            op2+=value;
            dis.textContent=op2;
        }
    })
});

const operatorButtons = document.querySelectorAll(".operators button");
operatorButtons.forEach(button => {
    button.addEventListener("click",(e) => {
        if(op1!=="" && op2!=="" && op!=="") {
            const intermediateResult = operate(Number(op1),op,Number(op2));
            op1=intermediateResult;
            op2="";
        }

        if (op1!=="") {
            op = e.target.dataset.value;
        }
})});

const equalsButton = document.querySelector(".Equal");
equalsButton.addEventListener("click",() => {
    if (op1!=="" && op2!=="" && op!=="") {
        const finalResult = operate(Number(op1),op,Number(op2));
        dis.textContent = finalResult;
        op1="";
        op2="";
        op="";
    }

});

const clearButton = document.querySelector(".AC");
clearButton.addEventListener("click",() => {
    op1="";
    op2="";
    op="";
    dis.textContent = 0;
});

const deleteButton = document.querySelector(".Delete");
deleteButton.addEventListener("click",() => {
    if (op2!=="") {
        op2 = op2.slice(0,-1);
        dis.textContent = op2!==""? op2:op1;
    }

    else if (op!=="") {
        op="";
        dis.textContent=op1;
    }

    else if (op1!=="") {
        op1 = op1.slice(0,-1);
        dis.textContent = op1!==""?op1:"0";
    }

});


