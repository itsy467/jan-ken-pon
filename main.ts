let PTGplayer = 0
let PTGmicrobit = 0
input.onPinPressed(TouchPin.P0, function () {
    PTGplayer = 1
})
input.onButtonPressed(Button.A, function () {
    PTGmicrobit = randint(1, 3)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(750)
    if (PTGmicrobit == 1) {
        basic.showString("P")
    } else {
        if (PTGmicrobit == 2) {
            basic.showString("T")
        } else {
            basic.showString("G")
        }
    }
})
input.onPinPressed(TouchPin.P2, function () {
    PTGplayer = 3
})
input.onButtonPressed(Button.AB, function () {
    if (PTGplayer + PTGmicrobit == 3 && PTGplayer > PTGmicrobit || PTGplayer + PTGmicrobit == 5 && PTGplayer > PTGmicrobit || PTGplayer + PTGmicrobit == 4 && PTGplayer < PTGmicrobit) {
        basic.showString("You Win!")
    }
    if (PTGmicrobit == PTGplayer) {
        basic.showString("AIKO")
    }
    if (PTGplayer + PTGmicrobit == 3 && PTGplayer < PTGmicrobit || PTGplayer + PTGmicrobit == 5 && PTGplayer < PTGmicrobit || PTGplayer + PTGmicrobit == 4 && PTGplayer > PTGmicrobit) {
            basic.showString("You Lose...")
    }    
input.onButtonPressed(Button.B, function () {
    PTGmicrobit = 0
    PTGplayer = 0
    basic.showString("RESET!")
})
input.onPinPressed(TouchPin.P1, function () {
    PTGplayer = 2
})
