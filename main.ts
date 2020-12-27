let matrix = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
function draw_matrix() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (matrix[i][j] == 1) {
                led.plot(i, j)
            } else {
                led.unplot(i, j)
            }
            
        }
    }
}

function animate_tetris_dot(x: number, y: number) {
    led.plot(x, y)
    basic.pause(500)
    led.unplot(x, y)
}

basic.forever(function on_forever() {
    let x = randint(0, 4)
    let y = 0
    while (y < 5) {
        draw_matrix()
        animate_tetris_dot(x, y)
        if (matrix[x][y + 1] == 0 && y != 4) {
            y += 1
        } else {
            matrix[x][y] = 1
            break
        }
        
    }
})
