matrix = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
end = 0

def draw_matrix():
    for i in range(5):
        for j in range(5):
            if matrix[i][j] == 1:
                led.plot(i, j)
            else: 
                led.unplot(i, j)

def animate_tetris_dot(x: number, y: number):
    led.plot(x, y)
    basic.pause(70)
    led.unplot(x, y)

def end_of_game():
    basic.show_icon(IconNames.SAD)

def on_forever():
    global end
    x = randint(0, 4)
    y = 0
    if end == 1:
        end_of_game()
    else:
        while y < 5:
            draw_matrix()
            animate_tetris_dot(x, y)
            if matrix[x][y+1] == 0 and y != 4:
                y = y + 1
            elif y == 0:
                end = 1
                break
            else: 
                matrix[x][y] = 1
                break


basic.forever(on_forever)
