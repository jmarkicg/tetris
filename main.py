def animate_tetris_dot(x: number, y: number):
    led.plot(x, y)
    basic.pause(500)
    led.unplot(x, y)

def draw_matrix(matrix: array):
    for i in range(5):
        for j in range(5):
            if matrix[i][j] == 1:
                led.plot(i, j)
            else: 
                led.unplot(i, j)
def on_forever():
    matrix = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    x = randint(0, 4)
    y = 0
    while y < 5:
        draw_matrix(matrix)
        animate_tetris_dot(x, y)
        if matrix[x][y+1] == 0 and y != 4:
            y += 1
        else: 
            matrix[x][y] = 1
            break
basic.forever(on_forever)
