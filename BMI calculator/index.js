const form = document.querySelector('form')

form.addEventListener("submit" , function(e){
    e.preventDefault();


    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const answer = document.querySelector(".answer");
    console.log(answer)


    if( height === '' || height < 0 || isNaN(height) ){
        answer.innerHTML = "Invalid response" ;
    } else if( weight === '' || weight < 0 || isNaN(weight) ){
        answer.innerHTML = "Invalid response" ;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        answer.innerText = `Your BMI is : ${bmi}` 
    }
    

})

