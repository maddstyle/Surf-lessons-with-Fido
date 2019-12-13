let canvas = document.getElementById('oceanCanvas');
let ctx = canvas.getContext('2d');

const background = new Image();
background.src = "images/surf-background.jpg";

const surfer = new Image();
surfer.src = "images/surfing-dog.jpg";

background.onload = function(){
    ctx.drawImage(background,0,0)
}

surfer.onload = function(){
    ctx.drawImage(surfer, 400, 600)
}