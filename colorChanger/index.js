const buttons = document.querySelectorAll(".button")
const bg = document.querySelector('.body')

buttons.forEach((button) => {
        button.addEventListener("click" , function(e){
            let target = e.target;
            let getBgColor = windows.getComputedStyle(target).getPropertyValue('background-color');
            
            bg.style.backgroundColor = getBgColor;
        })

})