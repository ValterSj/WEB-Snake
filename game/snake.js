let dir = {x: 0, y: 0};
let pace = 10;
let lastTime = 0;
let score = 0;
let arrayForSnake = [
    {x: 13, y: 15}
]
let food = {x: 5, y: 8}
let scoreGUI = document.querySelector(".score")
let scoreArray = [];





//Game functionallity
function main(time){
    window.requestAnimationFrame(main)
    if((time - lastTime)/1000 < 1/pace){
        return;
    }
    lastTime = time;
    snakeGameEngine();
}

//checks if you runs in to the wall or yourself
function gameOver(array){
    for (let index = 1; index < arrayForSnake.length; index++) {
        if(array[index].x === array[0].x && array[index].y === array[0].y){
            return true;
        }
    }

    if(array[0].x >= 18 || array[0].x <= 0 || array[0].y >= 18 || array[0].y <= 0){
        return true;
    }
}


function snakeGameEngine(){

    //checks if game is over, if it is you need to write you name
    //to get to highscore list
    if(gameOver(arrayForSnake)){
        dir = {x:0, y:0}
        let retrivedData = localStorage.getItem("pointsArray");
        scoreArray = (JSON.parse(retrivedData))
        console.log(scoreArray)

        Swal.fire({
            icon: 'info',
            title: 'Game Over',
            input: 'text',
            inputLabel: 'Your score was ' + score,
            inputPlaceholder: 'Enter your name',
            showCancelButton: true,
            confirmButtonText: 'Submit',
        
        }).then((result) => {
            console.log(result)
            if (result.isConfirmed) {
              let player = {points: score, name: result.value};
              scoreArray.push(player)
              localStorage.setItem("pointsArray", JSON.stringify(scoreArray))
              console.log(scoreArray)
            }
            score = 0;
            scoreGUI.innerHTML = "Score: " + score
            
          })
          arrayForSnake = [{x: 13, y: 15}]
       
        
    }

    //If food eaten, increase score and place new food
    if(arrayForSnake[0].y === food.y && arrayForSnake[0].x === food.x){
        score += 1;
        scoreGUI.innerHTML = "Score: " + score
        arrayForSnake.unshift({x: arrayForSnake[0].x + dir.x, y: arrayForSnake[0].y + dir.y}); 
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)*Math.random()), y: Math.round(a + (b-a)*Math.random())}
    }

    //snake movment
    for (let index = arrayForSnake.length - 2; index >=0; index--) {
        arrayForSnake[index+1] = {...arrayForSnake[index]};
    }

    arrayForSnake[0].x += dir.x 
    arrayForSnake[0].y += dir.y
    
    
    //displaying the snake
    let GameBoard = document.querySelector(".gameBoard");
    GameBoard.innerHTML = "";

    
    arrayForSnake.forEach((e, index)=>{
        element = document.createElement('div')
        element.style.gridRowStart = e.y;
        element.style.gridColumnStart = e.x;
        if(index === 0){
            element.classList.add("snakeHead")

        }else {
            element.classList.add("snakeBody")
        }
        GameBoard.appendChild(element)
    })

    //displaying the food
    foodDisplay = document.createElement('div')
    foodDisplay.style.gridRowStart = food.y;
    foodDisplay.style.gridColumnStart = food.x;
    foodDisplay.classList.add("food")
    GameBoard.appendChild(foodDisplay)
}



window.requestAnimationFrame(main);
window.addEventListener('keydown', event =>{
    
    //Controls which direction the snake should move,
    //depending on what button you press (W,A,S,D) in this case
    switch (event.key){
        case "W":
        case "w":
            console.log("W")
            dir.x = 0;
            dir.y = -1;
            break;

        case "A":
        case "a":
            console.log("A")
            dir.x = -1;
            dir.y = 0;
            break;

        case "S":
        case "s":
            console.log("S")
            dir.x = 0;
            dir.y = 1;
            break;

        case "D":
        case "d":
            console.log("D")
            dir.x = 1;
            dir.y = 0;
            break;

        
    }
})