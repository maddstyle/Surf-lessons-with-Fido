window.addEventListener("load", () => {
    var canvas = document.getElementsByTagName('Canvas');
    canvas.width = 1420;
    canvas.height = 800;
    const myGame = new Game();
    //   console.log("what: ", game);
    myGame.init();
});