let matrix = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
let end = 0
let y = 0
let x = 0
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

function animate_tetris_dot() {
    
    led.plot(x, y)
    basic.pause(700)
    led.unplot(x, y)
}

function end_of_game() {
    basic.showIcon(IconNames.Sad)
}

function on_forever() {
    
    if (end == 1) {
        end_of_game()
    } else {
        x = randint(0, 4)
        y = 0
        while (y < 5) {
            draw_matrix()
            animate_tetris_dot()
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
    
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    x = x - 1
    if (x < 0) {
        x = 0
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    x = x + 1
    if (x > 4) {
        x = 4
    }
    
})
input.onButtonPressed(Button.AB, function restart() {
    
    end = 0
    y = 0
    x = 0
    matrix = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    on_forever()
})
basic.forever(on_forever)
