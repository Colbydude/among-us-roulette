<template>
    <div class="wheel container">
        <canvas @click="spinWheel()" id="canvas" width="500" height="500"></canvas>
    </div>
</template>

<script>
export default {
    name: 'Wheel',

    props: {
        players: {
            type: Array,
            default: () => []
        }
    },

    data: () => ({
        spinAngleStart: 10,
        spinTime: 0,
        spinTimeTotal: 0,
        spinTimeout: null,
        startAngle: 0,
        wheelCtx: ''
    }),

    computed: {
        arc() {
            return Math.PI / (this.players.length / 2);
        }
    },

    watch: {
        players: {
            deep: true,

            handler() {
                this.drawRouletteWheel();
            }
        }
    },

    mounted() {
        this.drawRouletteWheel();
    },

    methods: {
        drawRouletteWheel() {
            // Thank you: https://codepen.io/barney-parker/pen/OPyYqy
            const canvas = document.getElementById("canvas");

            if (canvas.getContext) {
                let outsideRadius = 200;
                let textRadius = 160;
                let insideRadius = 125;

                this.wheelCtx = canvas.getContext('2d');
                this.wheelCtx.clearRect(0, 0, 500, 500);

                this.wheelCtx.strokeStyle = 'black';
                this.wheelCtx.lineWidth = 2;

                for (let i = 0; i < this.players.length; i++) {
                    let angle = this.startAngle + i * this.arc;
                    this.wheelCtx.fillStyle = this.players[i].colorHex;

                    this.wheelCtx.beginPath();
                    this.wheelCtx.arc(250, 250, outsideRadius, angle, angle + this.arc, false);
                    this.wheelCtx.arc(250, 250, insideRadius, angle + this.arc, angle, true);
                    this.wheelCtx.stroke();
                    this.wheelCtx.fill();

                    this.wheelCtx.save();
                    this.wheelCtx.shadowOffsetX = -1;
                    this.wheelCtx.shadowOffsetY = -1;
                    this.wheelCtx.shadowBlur    = 0;
                    this.wheelCtx.shadowColor   = "rgb(220,220,220)";
                    this.wheelCtx.fillStyle = "black";
                    this.wheelCtx.translate(
                        250 + Math.cos(angle + this.arc / 2) * textRadius,
                        250 + Math.sin(angle + this.arc / 2) * textRadius
                    );
                    this.wheelCtx.rotate(angle + this.arc / 2 + Math.PI / 2);

                    let text = this.players[i].playerName;
                    this.wheelCtx.fillText(text, -this.wheelCtx.measureText(text).width / 2, 0);
                    this.wheelCtx.restore();
                }

                // Arrow.
                this.wheelCtx.fillStyle = "black";
                this.wheelCtx.beginPath();
                this.wheelCtx.moveTo(250 - 4, 250 - (outsideRadius + 5));
                this.wheelCtx.lineTo(250 + 4, 250 - (outsideRadius + 5));
                this.wheelCtx.lineTo(250 + 4, 250 - (outsideRadius - 5));
                this.wheelCtx.lineTo(250 + 9, 250 - (outsideRadius - 5));
                this.wheelCtx.lineTo(250 + 0, 250 - (outsideRadius - 13));
                this.wheelCtx.lineTo(250 - 9, 250 - (outsideRadius - 5));
                this.wheelCtx.lineTo(250 - 4, 250 - (outsideRadius - 5));
                this.wheelCtx.lineTo(250 - 4, 250 - (outsideRadius + 5));
                this.wheelCtx.fill();
            }
        },

        easeOut(t, b, c, d) {
            let ts = (t /= d) * t;
            let tc = ts * t;

            return b + c * (tc + -3 * ts + 3 * t);
        },

        getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        },

        rotateWheel() {
            this.spinTime += 30;

            if (this.spinTime >= this.spinTimeTotal) {
                this.stopRotateWheel();

                return;
            }

            let spinAngle = this.spinAngleStart - this.easeOut(this.spinTime, 0, this.spinAngleStart, this.spinTimeTotal);
            this.startAngle += (spinAngle * Math.PI / 180);
            this.drawRouletteWheel();

            this.spinTimeout = setTimeout(() => {
                this.rotateWheel();
            }, this.getRandomInt(30));
        },

        spinWheel() {
            this.spinAngleStart = this.getRandomInt(10) + 10;
            this.spinTime = 0;
            this.spinTimeTotal = this.getRandomInt(3) + 4 * (1000 + this.getRandomInt(100));
            this.rotateWheel();
        },

        stopRotateWheel() {
            clearTimeout(this.spinTimeout);

            let degrees = this.startAngle * 180 / Math.PI + 90;
            let arcd = this.arc * 180 / Math.PI;
            let index = Math.floor((360 - degrees % 360) / arcd);

            this.wheelCtx.save();
            this.wheelCtx.font = 'bold 30px Helvetica, Arial';
            this.wheelCtx.fillStyle = 'white';

            let text = this.players[index].playerName;
            console.log(index, text, this.players);

            this.wheelCtx.fillText(text, 250 - this.wheelCtx.measureText(text).width / 2, 250 + 10);
            this.wheelCtx.restore();
        }
    }
}
</script>

<style scoped>
canvas {
    cursor: pointer;
}
</style>
