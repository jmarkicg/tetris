let matrix = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
let end = 0
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
    basic.pause(70)
    led.unplot(x, y)
}

function end_of_game() {
    basic.showIcon(IconNames.Sad)
}

basic.forever(function on_forever() {
    
    let x = randint(0, 4)
    let y = 0
    if (end == 1) {
        end_of_game()
    } else {
        while (y < 5) {
            draw_matrix()
            animate_tetris_dot(x, y)
            if (matrix[x][y + 1] == 0 && y != 4) {
                y = y + 1
            } else if (y == 0) {
                end = 1
                break
            } else {
                matrix[x][y] = 1
                break
            }
            
        }
    }
    
})
