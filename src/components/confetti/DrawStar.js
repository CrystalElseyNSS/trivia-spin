export const DrawStar = (ctx) => {

    function randomInt(min, max) {
        return Math.floor(min + (Math.random() * ((max - min) + 1)))
    }

    const numPoints = randomInt(4, 6)
    const outerRadius = window.innerWidth / 100
    const innerRadius = outerRadius / 200

    ctx.beginPath()
    ctx.moveTo(0, 0 - outerRadius)

    for (let n = 1; n < numPoints * 2; n++) {
        const radius = n % 2 === 0 ? outerRadius : innerRadius
        const x = radius * Math.sin((n * Math.PI) / numPoints)
        const y = -1 * radius * Math.cos((n * Math.PI) / numPoints)
        ctx.lineTo(x, y)
    }

    ctx.fill()
    ctx.closePath()
}