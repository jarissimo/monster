input.onButtonPressed(Button.A, function () {
    abwehr = 0
    basic.setLedColor(0x00ff00)
})
input.onButtonPressed(Button.B, function () {
    abwehr = 1
    basic.setLedColor(0xff0000)
})
let abwehr = 0
let monster = 0
let level = 0
for (let index = 0; index < 10; index++) {
    monster = randint(0, 1)
    abwehr = -1
    if (monster == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . # .
            . . # . .
            . . . # #
            `)
    } else if (monster == 1) {
        basic.showLeds(`
            . . . # .
            . # # . .
            # # # # #
            . # . . .
            . . . . .
            `)
    } else {
    	
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    control.waitMicros(3000000)
    if (monster == abwehr) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
    }
}
basic.forever(function () {
	
})
