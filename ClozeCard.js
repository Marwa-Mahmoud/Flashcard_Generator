module.exports = ClozeCard;

var inquirer = require('inquirer');
//var BasicCard = require('./BasicCard.js');

var ClozeCard = function(text, cloze){
    this.cloze = cloze;
    this.fullText = text;

    if(text.includes(cloze)){
        this.partial = text.replace(cloze, " ... ");
    }

    else{
        console.log("The cloze you entered doesn't exist!");
    }


   
    this.hasIt = text.includes(cloze);
   

    this.createParialText = function(){

    console.log(this.partial);
    console.log(this.hasIt);
    }
}


var clozeCard1 = new ClozeCard("Marwa is my name", "marwa");
clozeCard1.createParialText();
