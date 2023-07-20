input.onButtonPressed(Button.A, function () {
    시간 += 1
    basic.showNumber(시간)
})
input.onGesture(Gesture.Shake, function () {
    시간 = 0
    basic.showNumber(시간)
})
input.onButtonPressed(Button.B, function () {
    while (시간 > 0) {
        basic.pause(60000)
        시간 += -1
    }
    for (let index = 0; index < 2; index++) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    }
})
let 시간 = 0
시간 = 0
basic.showNumber(시간)
