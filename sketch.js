var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);

  //assign firebase database to database
database=firebase.database();
  // create an object of quiz class
quiz=new Quiz();
  // call getState() of quiz class
quiz.getState();
  //call start() of quiz class
quiz.start();  
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
