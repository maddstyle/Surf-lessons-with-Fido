class Game {
    constructor() {
        this.canvas = document.getElementById("Canvas");;
        this.ctx = this.canvas.getContext("2d");
        this.surfer = new Player(this, 0, 200, 150, 150);
        this.shark = new Component(this, 700, 200, 250, 200);
        this.background = new Image();
        this.score = 0;
        this.surfer.img.src = "images/surferDog.png";
        this.shark.img.src = "images/shark2.png";
        this.scrollValue = 0;
        this.speed = 1;
    }

    init() {
        this.start();
    }

    start() {
        // this.drawBackground();
        // this.drawMainCharacters();
        const interval = setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();
            this.surfer.move();

            if (this.surfer.didCollide(this.shark)) {
                clearInterval(interval);
                this.gameOver();
                // console.log("collision");
                //alert("BOOM!!!!");
            }

            this.shark.x -= 1;
            this.scrollBackground();
            if (this.shark.x <= -100) {
                this.shark.x = 990;
                this.shark.y = Math.floor(Math.random() * 600); // 400 = heightOfCanvas(500) - heightOfshark(100)
            }
            if (this.shark.x === 0) this.score++;
        }, 2);
    }

    // drawBackground() {
    //     this.background.drawComponent("images/surf-background.jpg");
    // }
    drawBackground = () => {

        this.canvas.width = 990;
        this.canvas.height = 700;

        this.background.src = "./images/ocean3.jpeg";
        this.ctx.drawImage(
            this.background, 0, 0, 990, 700
        )
    }

    scrollBackground = () => {
        this.background.src = "./images/ocean3.jpeg";
        if (this.scrollValue >= 990) {
            this.scrollValue = 0;
        }
        let render = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(
                this.background, 990 - this.scrollValue, 0, 990, 700
            )
            this.scrollValue += this.speed;
            this.ctx.drawImage(
                this.background, 0 - this.scrollValue, 0, 990, 700)
        }
        render();
        this.drawMainCharacters();
        this.surfer.move();
        this.shark.x -= 1;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawMainCharacters() {
        this.shark.drawComponent("images/shark2.png");
        this.surfer.drawComponent("images/surferDog.png");
    }

    gameOver = () => {
        location = "/game-over.html";
    }
}