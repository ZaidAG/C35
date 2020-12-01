class GameRules{
    constructor(){

    }
    // start the game
    start(){

        if(gameState ===0){
            player = new CarRookie();
            player.getCount();
            form=new Form();
            form.display();

        }

    
    }
    // get the playerstate
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref("gameState").update({
            gameState: state
        })
    }
}