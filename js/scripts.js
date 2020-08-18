$(document).ready(function(){
    $("#formOne").submit(function(event){
        event.preventDefault();
        const inputSent = $("input#sentence").val();
        let inputArray = inputSent.split(" ");
        console.log(inputArray);
        let newArray = [];
        let anotherNewArray= [];
        let pushIArray= [];
        let pushOArray = [];
        let pushUArray = [];

        // inputArray.forEach(function(letter){
        //   newArray.push(letter.replace("a", "-"));
        // }) 

        for (index = 0; index < inputArray.length; index += 1) {
            newArray.push(inputArray[index].replace("a", "-")); 
                anotherNewArray.push(newArray[index].replace("e", "-")); 
                    pushIArray.push(anotherNewArray[index].replace("i", "-")); 
                        pushOArray.push(pushIArray[index].replace("o", "-")); 
                            pushUArray.push(pushOArray[index].replace("u", "-"));
                        
                    
                
            
            console.log(pushUArray);         
            
        }
        // console.log('Outside the loop;' + index);
        console.log(pushUArray);
        $("#result").text(pushUArray.join(" "));
    })
})