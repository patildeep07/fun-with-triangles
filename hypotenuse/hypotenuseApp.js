const no1 = document.querySelector("#input1");
const no2 = document.querySelector("#input2");
const submitButton = document.querySelector(".submit");
const outputDiv = document.querySelector(".outputDiv");

function calculateHypotenuse() {
    const l1 = Number(no1.value);
    const l2 = Number(no2.value);
    if (l1&&l2){
        const hypo = Math.sqrt((l1**2)+(l2**2))
        // console.log(hypo)
        outputDiv.innerText = "Hypotenuse of " +l1 +" and " +l2 +" is " +hypo
    }
    else{
        // console.log("Please enter both the numbers")
        outputDiv.innerText = "Please enter both the numbers"
    }
}

submitButton.addEventListener("click", calculateHypotenuse)