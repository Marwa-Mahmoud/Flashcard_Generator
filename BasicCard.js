
module.exports = BasicCard;

var inquirer = require('inquirer');
var fs = require('fs');
var frontEndArray = [    
    {
        front: "Who is the first president of the United States?",
        back: "George Washington"
    },
    {
        front:  "What is the tallest mountain in the world?",
        back: "Mountain Everest"
    }
];

var count = 0;

function BasicCard (front, back){
    
        if(this instanceof BasicCard){
    
            this.front = front;
            this.back = back;
        }
    
        else return new BasicCard(front, back);
            
    }




function playFlashCards(){
 
    if(count < frontEndArray.length){

        var basicCard = BasicCard(frontEndArray[count].front, frontEndArray[count].back);

        inquirer.prompt([
            
                    {
                        type: "input",
                        name: "answer",
                        message: "Front: "+basicCard.front+"\n"+"Back: ",
                     }
            
                ]).then(function(answers){
        
                    if(answers.answer.toLowerCase() === basicCard.back.toLowerCase()){
                        console.log("Correct Answer!");
                    }
        
                    else{
        
                        console.log("Wrong Answer :(");
                        console.log("The correct answer is: " + basicCard.back);
                    }

                    count++;
                    playFlashCards();
                       
                    });

    }

    else{
        console.log("No more flash cards!");
    }
}
playFlashCards();


          
    
