$(document).ready(function(){
    $("#formOne").submit(function(event){
        event.preventDefault();
        const inputSent = $("input#sentence").val();
        let inputArray = inputSent.split(" ");
        console.log(inputArray);
        let newArray = [];
        let capitalArray= [];

        // inputArray.forEach(function(letter){
        //   newArray.push(letter.replace("a", "-"));
        // }) 

        for (index = 0; index < inputArray.length; index += 1) {
            newArray.push(inputArray[index].replace("a", "-").replace("e", "-").replace("i","-").replace("o", "-").replace("u", "-")); 
                capitalArray.push(newArray[index].replace("A", "-").replace("E", "-").replace("I", "-").replace("O", "-").replace("U", "-"));
                    
                
            
            console.log(newArray);         
            
        }
        // console.log('Outside the loop;' + index);
        console.log(capitalArray);
        $("#result").text(capitalArray.join(" "));
    })
})