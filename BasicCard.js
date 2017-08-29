
module.exports = BasicCard;

var inquirer = require('inquirer');

var BasicCard = function(front, back){

    this.front = front;
    this.back = back;

}

var basicCard1 = new BasicCard("What is your name?", "Marwa");

inquirer.prompt([
    
            {
                type: "input",
                name: "answer",
                message: basicCard1.front,
             }
    
        ]).then(function(answers){

            if(answers.answer === basicCard1.back){
                console.log("Correct Answer!");
            }

            else{

                console.log("Wrong Answer :(");
                console.log("The correct answer is: " + basicCard1.back);
            }
               
            });
    
