input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # . . #
        # # # # .
        # # # # .
        . # . # .
        `)
    music.setTempo(93)
    music.playTone(147, music.beat(BeatFraction.Half))
    music.playTone(175, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(208, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(175, music.beat(BeatFraction.Half))
    music.playTone(147, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(131, music.beat(BeatFraction.Quarter))
    music.playTone(165, music.beat(BeatFraction.Quarter))
    music.playTone(147, music.beat(BeatFraction.Quarter))
})
basic.forever(function () {
	
})
