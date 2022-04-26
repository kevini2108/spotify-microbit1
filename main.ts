radio.onReceivedStringDeprecated(function (receivedString) {
    serial.writeLine("" + (receivedString))
    basic.showIcon(IconNames.Diamond)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
radio.setGroup(55)
