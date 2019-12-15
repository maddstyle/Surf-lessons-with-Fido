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
    this.img.src = imgSource;
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  getLeft() {
    return this.x;
  }
  getRight() {
    return this.x + this.width - 30;
  }

  getTop() {
    return this.y + 30;
  }
  getBottom() {
    return this.y + this.height - 50;
  }

  didCollide(otherComp) {
    //console.log(otherComp.x, this.getTop(), otherComp.getTop(), otherComp.getBottom(), this.getBottom())
    /*const crossLeft =
      otherComp.x <= this.getRight() && otherComp.x >= this.getLeft();

    const crossRight =
      otherComp.x + otherComp.width >= this.getLeft() &&
      otherComp.x + otherComp.width <= this.getRight();

    const crossTop =
      otherComp.y <= this.getBottom() && otherComp.y >= this.getTop();

    const crossBottom =
      otherComp.y + otherComp.height >= this.getTop() &&
      otherComp.y + otherComp.height <= this.getBottom();*/

    return ((otherComp.getTop() >= this.getTop() && otherComp.getTop() <= this.getBottom()) ||
        (otherComp.getBottom() >= this.getTop() && otherComp.getBottom() <= this.getBottom())) &&
      otherComp.getLeft() <= this.getRight();
  }
}