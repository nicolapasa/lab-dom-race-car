class UI{


   constructor(game){

    this.game=game
    this.scoreBoard=document.getElementById("score")
    this.lifeBoard=document.getElementById("lives")
   }
  

   update(){
    this.scoreBoard.innerText=this.game.score 
    this.lifeBoard.innerText=this.game.lives 
   }

}