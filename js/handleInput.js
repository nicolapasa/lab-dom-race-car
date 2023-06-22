class handleInput {

    constructor(game){
        this.game=game 
    }


    update(){

        document.addEventListener('keydown', (event)=>{

            const keysPossible=['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
            const key=event.key
            if(keysPossible.includes(key)){


                   switch (key) {
                    case 'ArrowLeft':
                        this.game.player.directionX=-1
                    break;
                    case 'ArrowRight':
                        this.game.player.directionX=1
                    break;
                    case 'ArrowUp':
                        this.game.player.directionY=-1
                    break;
                    case 'ArrowDown':
                        this.game.player.directionY=1
                    break;
                   
                   }
                       


            }
             

        })

        document.addEventListener('keyup', (event)=>{
            this.game.player.directionX=0
            this.game.player.directionY=0

        })
    }
}