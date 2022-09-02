const inputs = document.querySelectorAll("#input-angle");
const submitBtn = document.querySelector("#submit-btn");
var outputDiv = document.querySelector(".output-div");



submitBtn.addEventListener("click", checkTriangle)


function sumOfAngles(angle1, angle2, angle3){
    return Number(angle1) + Number(angle2) + Number(angle3)
    // console.log(angle1,angle2,angle3)
}


function checkTriangle(){
    const sumOfAngle = sumOfAngles(inputs[0].value, inputs[1].value, inputs[2].value);
    if (sumOfAngle === 180) {
        // console.log("It is a Triangle")
        outputDiv.innerText = "It is a Triangle"
    }
    else {
        // console.log("It is not a Triangle")
        outputDiv.innerText = "It is not a Triangle"
    }
}