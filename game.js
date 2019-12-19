class Game {
    constructor() {
        this.canvas = document.getElementById("Canvas");;
        this.ctx = this.canvas.getContext("2d");
        this.surfer = new Player(this, 0, 200, 150, 150);
        this.background = new Image();
        this.score = 0;
        this.surfer.img.src = "images/surferDog.png";
        this.scrollValue = 0;
        this.speed = 1;
        this.sharks = [];
    }

    init() {
        this.start();
        this.createShark();
    }

    // frameCounter() {
    //     this.score = score + 1; // adds 1 to seconds
    //     setInterval(updateCanvas, 20);
    // }

    start() {
        // this.drawBackground();
        // this.drawMainCharacters();
        const interval = setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();
            this.surfer.move();


            if (this.score / 30 >= 90) {
                clearInterval(interval);
                this.youWin();
            }
            this.scrollBackground();
            this.sharks.forEach((shark, i) => {
                shark.x -= 1;
                shark.drawComponent("images/shark2.png");
                if (shark.x <= -200) {
                    this.sharks.splice(i, 1);
                }
                if (this.surfer.didCollide(shark)) {
                    clearInterval(interval);
                    this.gameOver();
                }
            });
            this.score++;
            this.ctx.font = "60px Arial";
            this.ctx.fillText("Score:" + Math.round(this.score / 60), 40, 100)
        }, 10);
    }
    drawMainCharacters() {
        this.surfer.drawComponent("images/surferDog.png");
    }


    createShark() {
        let sharkWidth = 150;
        let sharkHeight = 150;
        this.sharks.push(
            new Component(this, 1420, 200 + Math.floor(Math.random() * 400), sharkWidth, sharkHeight)
        );

        setTimeout(() => {
            this.createShark();
        }, 3000);
    };
    // drawBackground() {
    //     this.background.drawComponent("images/surf-background.jpg");
    // }
    drawBackground = () => {

        this.canvas.width = 1420;
        this.canvas.height = 800;

        this.background.src = "./images/ocean4.jpg";
        this.ctx.drawImage(
            this.background, 0, 0, 1420, 800
        )
    }

    scrollBackground = () => {
        this.background.src = "./images/ocean4.jpg";
        if (this.scrollValue >= 1420) {
            this.scrollValue = 0;
        }

        let render = () => {
            this.ctx.clearRect(1420, 800, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(
                this.background, this.scrollValue - 1420, 0, 1420, 800
            )
            this.scrollValue += this.speed;
            this.ctx.drawImage(
                this.background, this.scrollValue - 0, 0, 1420, 800)
        }
        render();
        this.drawMainCharacters();
        this.surfer.move();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    youWin = () => {
        location = "/Surf-lessons-with-Fido/you-win.html";
    }

    gameOver = () => {
        location = "/Surf-lessons-with-Fido/game-over.html";
    }
}
// gameOver() {
//     this.clear();
//     this.drawBackground();
//     this.ctx.font = "70px Arial bold";
//     this.ctx.textAlign = "center";
//     this.ctx.fillStyle = "red";
//     this.ctx.fillText(
//       "Game Over!",
//       this.canvas.width / 2,
//       this.canvas.height / 2
//     );
//   }
// 