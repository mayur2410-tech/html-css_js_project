const display=document.getElementById("display");


function appendToDisplay(value){
    display.value+=value;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try {
        display.value=eval( display.value)
    }
    catch(error){
        display.value="Error"
    }
}

    // function appendToDisplay(value) {
        //     document.getElementById('display').innerText += value;
        // }

        // function clearDisplay() {
        //     document.getElementById('display').innerText = '0';
        // }

        // function calculate() {

        //     try {
        //         let result = eval(document.getElementById('display').innerText);
        //         document.getElementById('display').innerText = result;
        //     } catch (error) {
        //         document.getElementById('display').innerText = 'Error'; // Handle errors
        //     }
        // }