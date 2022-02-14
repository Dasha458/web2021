function createImage() {

    var canvas = document.getElementById("my_canvas");

    var ctx = canvas.getContext("2d");



    ctx.fillRect(10, 10, 50, 50);
    ctx.clearRect(15, 15, 40, 40);
    ctx.fillStyle = "red";
    ctx.fillRect(10, 70, 80, 30);
    ctx.fillStyle = "green";
    ctx.fillRect(20, 80, 80, 30);
    ctx.fillStyle = "blue";
    ctx.fillRect(30, 90, 80, 30);
    ctx.fillStyle = "green";
    ctx.fillRect(30, 130, 30, 80);
    ctx.fillRect(80, 150, 30, 60);
    ctx.fillRect(130, 140, 30, 70);
    ctx.fillStyle = "blue";
    ctx.fillRect(30, 150, 30, 60);
    ctx.fillRect(80, 170, 30, 40);
    ctx.fillRect(130, 160, 30, 50);
}