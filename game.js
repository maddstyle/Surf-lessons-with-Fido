class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.surfer = new Player(this, 0, 200, 150, 150);
        this.shark = new Component(this, 800, 200, 70, 70);
        this.score = 0;
    }

    init () {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.start();
    }

    start() {
        this.drawBackground();
        this.drawMainCharacters();
        setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();
            this.surfer.move();
            this.shark.x -= 5;
            if (this.shark.x <= -70) {
                this.shark.x = 800;
                this.shark.y = Math.floor(Math.random() * 700); // 430 = heightOfCanvas(500) - heightOfshark(70)
            }
            if (this.shark.x === 0) this.score++;
        }, 1000 / 60);
    }

    // drawBackground() {
    //     this.background.drawComponent("images/surf-background.jpg");
    // }
    drawBackground() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const ctx = canvas.getContext("2d");

        const background = new Image();
        background.src = "./images/surf-backgroun.jpg";

        background.onload = function () {
            ctx.drawImage(
                background,
                canvas.width / 2 - background.width / 2,
                canvas.height / 2 - background.height / 2
            )
        };
   }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawMainCharacters() {
        this.shark.drawComponent("images/shark.jpg");
        this.surfer.drawComponent("images/surfer-dog.jpg");
    }
}
