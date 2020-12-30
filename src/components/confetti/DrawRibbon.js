export const DrawRibbon = (ctx) => {

    let vertices = Math.ceil(window.innerWidth / 50);
    var colors = ['ff0000', '00ff00', '0000ff', 'ffff00', '00ffff']
        .sort(function () { return 0.5 - Math.random(); }),
        blender = blendColors(colors[0], colors[1], vertices);

    var prev = 0,
        points = [],
        y1 = window.innerHeight / 2,
        width = window.innerWidth / vertices;

    for (var i = 0; i <= vertices; i++) {
        var x = Math.floor(i * width),
            y2 = Math.floor(Math.random() * 30) + 20,
            deviation = Math.floor(Math.random() * y2 * 2) + (y2 * -1);

        if ((deviation < 0 && prev <= -1) || (deviation > 0 && prev >= 1)) {
            deviation *= -1;
            prev = 0;
        } else {
            prev += deviation > 0 ? 1 : -1;
        }

        y1 += deviation;
        points.push({ x: x, y: y1 });
    }

    for (let i = 0; i < points.length; i++) {
        var color = blender[i],
            current = points[i],
            first = points[i + 1],
            second = points[i + 2];

        ctx.fillStyle = 'rgba(' + color.R + ',' + color.G + ',' + color.B + ',0.6)';
        if (first !== undefined && second !== undefined) {
            ctx.beginPath();
            ctx.moveTo(current.x, current.y);
            ctx.lineTo(first.x, first.y);
            ctx.lineTo(second.x, second.y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }

    function blendColors(hexStart, hexStop, steps) {
        var colors = [],
            start = {
                R: parseInt(hexStart.substring(0, 2), 16),
                G: parseInt(hexStart.substring(2, 4), 16),
                B: parseInt(hexStart.substring(4, 6), 16),
            },
            stop = {
                R: parseInt(hexStop.substring(0, 2), 16),
                G: parseInt(hexStop.substring(2, 4), 16),
                B: parseInt(hexStop.substring(4, 6), 16),
            },
            blend = {
                R: (stop.R - start.R) / steps,
                G: (stop.G - start.G) / steps,
                B: (stop.B - start.B) / steps,
            };

        for (var i = 0; i <= steps; i++) {
            colors.push({
                R: Math.round(start.R + (blend.R * i)),
                G: Math.round(start.G + (blend.G * i)),
                B: Math.round(start.B + (blend.B * i)),
            });
        }

        return colors;
    }
}