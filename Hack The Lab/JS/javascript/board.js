window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth * 0.75;
    canvas.height = window.innerHeight * 0.6;


    var painting = false;

    function startPosition(e) {
        painting = true;
        draw(e)
    }
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {
        if (!painting) {
            return
        }

        ctx.lineWidth = 4;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
});