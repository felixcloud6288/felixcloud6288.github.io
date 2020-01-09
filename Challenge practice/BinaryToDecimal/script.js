
// Backend testing code
function backEndGet(){
    return prompt("Input String:");
}
// convert a binary string to a decimal value
function binaryToDecimal(event){
    var binaryString = document.getElementById("binary-input").value;
    console.log(binaryString)
    event.preventDefault();
    // Check that user input is a valid binary string
    var valid
    //binaryString = backEndGet();
    for(var i = 0; i < binaryString.length; i++){
        if(binaryString[i] != "1" && binaryString[i]!= "0"){
            valid = false;
            break;
        }
        valid = true
    }
    if(valid){
        document.getElementById("response").textContent = parseInt(binaryString, 2);
    }
    else{
        document.getElementById("response").textContent = "Invalid String";       
    }


    
    //var decimal = parseInt(binaryString, 2);
    //console.log(decimal)
}
document.getElementById("submit").addEventListener("click", binaryToDecimal)

