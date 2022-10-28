// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

;
let message=[];
const name =['Guadalupe', 'Ollie', 'Aki'] ;
function writeCards (name){
    for(let i=0; i < name.length ; i++){
       message = [`Thank you, ${name[i]}, for the wonderful surprise gift!`];
       console.log(message);
        
        
    }
 return message;

}
writeCards();



function countDown(){
for (let countDown = 10; countDown >= 0; countDown--) {
    console.log(countDown);
  }
}
