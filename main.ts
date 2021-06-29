// Depending on what you are sending You may have to alter the pause between icons - if too low the receiving device may not have time to display the new icon correctly
// 
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 8; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(500)
    }
    basic.showIcon(IconNames.Happy)
})
// Set Radio Group to be the same as the receiving Device(s)
// 
radio.setGroup(42)
basic.showString("Press A to send")
basic.forever(function () {
    for (let Loop1 = 0; Loop1 <= 4; Loop1++) {
        for (let Loop2 = 0; Loop2 <= 4; Loop2++) {
            if (led.point(Loop1, Loop2)) {
                radio.sendString("" + convertToText(Loop1) + convertToText(Loop2) + convertToText(1))
            } else {
                radio.sendString("" + convertToText(Loop1) + convertToText(Loop2) + convertToText(0))
            }
            // You may need to alter the value of this pause - if too low display is corrupted. On my setup 18 is the lowest reliable value!
            // 
            basic.pause(18)
        }
    }
})
