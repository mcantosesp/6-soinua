basic.forever(function () {
    if (input.soundLevel() < 40) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
