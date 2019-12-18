class Player extends Component {
    constructor(game, x, y, w, h) {
        super(game, x, y, w, h);
    }

move() {
    document.onkeydown = event => {


    
        //   console.log("event: ", event.keyCode);
        const key = event.keyCode;
        const possibleKeystrokes = [37, 38, 39, 40,];
        if (possibleKeystrokes.includes(key)) {
            event.preventDefault();
            switch (key) {
                case 37:
                    console.log('decreasing x by 50: ' + this.x.toString() + "(" + (this.x <= 1420 - this.width) + ")");
                    if (this.x >= 20) this.x -= 50;
                    break;
                case 38:
                    console.log('decreasing y by 50: ' + this.y.toString());
                    if (this.y >= 150) this.y -= 50;
                    break;
                case 39:
                    console.log('increasing x by 50: ' + this.x.toString() + "(" + (this.x <= 1420 - this.width) + ")");
                    if (this.x <= (1420 - this.width)) this.x += 50;
                    break;
                case 40:
        
                    console.log('increasing y by 50: ' + this.y.toString());
                    if (this.y <= (780 - this.height)) this.y += 50;

                    break;
                }
            }
        }
    }
};