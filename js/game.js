class Game {
    constructor() {
      this.startScreen = document.getElementById('game-intro')
      this.gameScreen = document.getElementById('game-screen')
      this.gameEndScreen = document.getElementById('game-end')
      this.height = 600
      this.width = 500
      this.player = new Player(this.gameScreen, 200, 400,  100, 150,  './images/car.png')
      this.ui=new UI(this)
      this.handlerInput=new handleInput(this)
      this.obstacles = []
      this.isGameOver = false
      this.score = 0
      this.lives = 3
    }
  
    start() {
      console.log(this.gameScreen.offsetHeight)
      this.gameScreen.style.width = `${this.width}px`
      this.gameScreen.style.height = `${this.height}px`
  
      this.startScreen.style.display = 'none'
      this.gameScreen.style.display = 'block'
  
      this.gameLoop()
    }
  
    gameLoop() {
            if(!this.isGameOver){
              this.update()
              requestAnimationFrame(()=>this.gameLoop())
            }

    }
  
    update() {
        const obstacleKeep=[]
        this.player.move()
        this.handlerInput.update()
        this.ui.update()
        this.obstacles.forEach(obstacle=>{
          obstacle.move()
               if(this.player.didCollide(obstacle)) {
                 this.lives-=1 
                 obstacle.element.remove()
               }
               else if (obstacle.top >this.height ){
                  this.score+=1
                  obstacle.element.remove()
               }
               else{
                  obstacleKeep.push(obstacle)
               }

        })
        this.obstacles=obstacleKeep
        if(this.lives===0) this.endGame() 
        if (Math.random() > 0.98 && this.obstacles.length < 1) {
          this.obstacles.push(new Obstacle(this.gameScreen));
        }
    }
  
    endGame() {

      this.player.element.remove()
      this.obstacles.forEach(obstacle => obstacle.element.remove());

      this.gameIsOver = true;
  
      // Hide game screen
      this.gameScreen.style.display = "none";
      // Show end game screen
      this.gameEndScreen.style.display = "block";
    }
 
  }