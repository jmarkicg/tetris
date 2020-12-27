matrix = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
end = 0
y = 0
x = 0

def draw_matrix():
    for i in range(5):
        for j in range(5):
            if matrix[i][j] == 1:
                led.plot(i, j)
            else: 
                led.unplot(i, j)

def animate_tetris_dot():
    global x, y
    led.plot(x, y)
    basic.pause(700)
    led.unplot(x, y)

def end_of_game():
    basic.show_icon(IconNames.SAD)

def on_forever():
    global end, x, y

    if end == 1:
        end_of_game()
    else:
        x = randint(0, 4)
        y = 0
        while y < 5:
            draw_matrix()
            animate_tetris_dot()
            if matrix[x][y+1] == 0 and y != 4:
                y = y + 1
            elif y == 0:
                end = 1
                break
            else: 
                matrix[x][y] = 1
                break

def on_button_pressed_a():
    global x
    x = x - 1
    if x < 0:
        x = 0

def on_button_pressed_b():
    global x
    x = x + 1
    if x > 4:
        x = 4

input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)
basic.forever(on_forever)
