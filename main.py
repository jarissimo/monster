def on_button_pressed_a():
    global abwehr
    abwehr = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global abwehr
    abwehr = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

abwehr = 0
monster = 0
level = 0
for index in range(10):
    monster = randint(0, 1)
    abwehr = 0
    if monster == 0:
        basic.show_leds("""
            . . . . .
            . # # # .
            # . . # .
            . . # . .
            . . . # #
            """)
    if monster == 1:
        basic.show_leds("""
            . . . . .
            . # # . .
            # # # # #
            . # . . .
            . . . . .
            """)
    control.wait_micros(30000)
    if monster == abwehr:
        basic.set_led_color(0x00ff00)
    else:
        basic.set_led_color(0xff0000)

def on_forever():
    pass
basic.forever(on_forever)
