const length = document.querySelector("#length");
const breadth = document.querySelector("#breadth");
const submitBtn = document.querySelector(".submit") ;
const outputDiv = document.querySelector(".output-div");

function calculateArea () {
    // console.log("test")
    const len = Number(length.value);
    const bre = Number(breadth.value);

    if (len&&bre){
        const area = 0.5 * len * bre;
        // console.log(area)
        outputDiv.innerText = "Area of the triangle for Length: " +len +" and Breadth: " +bre +" is " +area
    }
    else {
        // console.log("Please enter both the values!")
        outputDiv.innerText = "Please enter both the values!"
    }

}

submitBtn.addEventListener("click", calculateArea)