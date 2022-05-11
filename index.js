let screen = document.getElementById("screen");
let screenValue = "";
buttons = document.querySelectorAll("button");
for (item of buttons) {
    item.addEventListener("click", (e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText=="x") {
            buttonText ="*";
            screenValue += buttonText
            screen.value = screenValue;
        } else if(buttonText=="C") {
            screenValue = ""
            screen.value = screenValue;
        } else if (buttonText=="=") {
           screen.value = eval(screenValue) 
        }
        //  else if (buttonText=="Back") {
        //     buttonText = screen.innerText.slice(0, 2);
        //     screenValue = buttonText
        //     screen.value = screenValue
        // }
        
        
        
        
        else {
           screenValue +=buttonText;
           screen.value = screenValue;
        }
    })
}


function operations(event) {
    let value = event.target.innerText
    switch(value) {
        case "Back": 
        screen.innerText = screen.slice(0, - 1)
        break
    }
}