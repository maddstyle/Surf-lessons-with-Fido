class Component {
    constructor(game, x, y, w, h) {
      this.game = game;
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      this.img = new Image();
    }
    drawComponent(imgSource) {
      let ctx = this.game.ctx;
      this.img.src = imgSource;
      this.img.addEventListener("load", () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      });
    }
  }