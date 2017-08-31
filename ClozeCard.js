module.exports = ClozeCard;

var inquirer = require('inquirer');
var frontEndArray = [    
    {
        fullText: "George Washington is the first president of the United States",
        cloze: "George Washington"
    },
    {
       fullText: "The tallest mountain in the world is Mountain Everest",
       cloze: "Mountain Everest"
    }
];

var count = 0;

function ClozeCard (text, cloze){

    if(this instanceof ClozeCard){

        this.cloze = cloze;
        this.fullText = text;
        this.partial = 'No questions to be asked';
        this.hasIt = text.includes(cloze);
    
        if(text.includes(cloze)){
            this.partial = text.replace(cloze, " ... ");
        }

    }
    else{

        return new ClozeCard(text, cloze);
    }


}

function playFlashCards(){

    if(count < frontEndArray.length){

        var clozeCard = new ClozeCard(frontEndArray[count].fullText, frontEndArray[count].cloze);

        if(clozeCard.hasIt === false){
            
                console.log('The cloze does not appear in the text');
            
            }
            
            else{
            
            
                inquirer.prompt([
                    
                            {
                                type: "input",
                                name: "answer",
                                message: clozeCard.partial+'\n',
                             }
                    
                        ]).then(function(answers){
                
                            if(answers.answer.toLowerCase() === clozeCard.cloze.toLowerCase()){
                                console.log("Correct Answer!");
                            }
                
                            else{
                
                                console.log("Wrong Answer :(");
                                console.log("The correct answer is: " + clozeCard.fullText);
                            }
                             
                            count++;
                            playFlashCards();
                            });
            
            }            

    }

    else{
        console.log("No more flash cards!");
    }
}

playFlashCards();



