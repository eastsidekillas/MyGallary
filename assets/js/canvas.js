const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function Heart() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 20 + 10;
    this.speed = Math.random() * 2 + 1;

    this.draw = function () {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x, this.y - this.size, this.x + this.size * 1.5, this.y - this.size, this.x + this.size * 1.5, this.y);
        ctx.bezierCurveTo(this.x + this.size * 1.5, this.y + this.size * 1.5, this.x, this.y + this.size * 1.5, this.x, this.y);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }

    this.update = function () {
        if (this.y > canvas.height + this.size * 1.5) {
            this.y = 0 - this.size * 1.5;
            this.x = Math.random() * canvas.width;
        }
        this.y += this.speed;
        this.draw();
    }
}

function createHearts() {
    for (let i = 0; i < 20; i++) {
        hearts.push(new Heart());
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < hearts.length; i++) {
        hearts[i].update();
    }
}

createHearts();
animate();