class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.surfer = new Player(this, 0, 200, 150, 150);
        this.shark = new Component(this, 800, 200, 70, 70);
        this.score = 0;
    }

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.start();
    }

    start() {
        // this.drawBackground();
        this.drawMainCharacters();
        setInterval(() => {
            this.clear();
            // this.drawBackground();
            this.drawMainCharacters();
            this.surfer.move();
            this.shark.x -= 5;
            if (this.shark.x <= -70) {
                this.shark.x = 990;
                this.shark.y = Math.floor(Math.random() * 430); // 430 = heightOfCanvas(500) - heightOfshark(70)
            }
            if (this.shark.x === 0) this.score++;
        }, 1000 / 60);
    }

    // drawBackground() {
    //     this.background.random
    // }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawMainCharacters() {
        this.shark.drawComponent("images/shark.jpg");
        this.surfer.drawComponent("images/surfer-dog.jpg");
    }
}