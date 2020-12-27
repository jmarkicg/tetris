let x = 0
function animate_tetris_dot(x: number, y: number) {
    led.plot(x, y)
    basic.pause(500)
    led.unplot(x, y)
}

basic.forever(function on_forever() {
    let x = randint(0, 4)
    let y = 0
    while (y < 5) {
        animate_tetris_dot(x, y)
        y += 1
    }
})
