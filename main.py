x = 0
def animate_tetris_dot(x: number, y: number):
    led.plot(x, y)
    basic.pause(500)
    led.unplot(x, y)

def on_forever():
    x = randint(0, 4)
    y = 0
    while y < 5:
        animate_tetris_dot(x, y)
        y += 1
basic.forever(on_forever)
