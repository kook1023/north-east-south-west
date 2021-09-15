input.onButtonPressed(Button.A, function () {
    sprite.move(1)
    Secrite.move(1)
})
input.onButtonPressed(Button.B, function () {
    sprite.turn(Direction.Right, 90)
    Secrite.turn(Direction.Right, 90)
})
let Secrite: game.LedSprite = null
let sprite: game.LedSprite = null
if (randint(1, 3) == 1) {
    basic.showArrow(ArrowNames.East)
    sprite = game.createSprite(2, 2)
    Secrite = game.createSprite(1, 2)
} else {
    if (randint(1, 3) == 2) {
        basic.showArrow(ArrowNames.West)
        sprite = game.createSprite(1, 2)
        Secrite = game.createSprite(2, 2)
    } else {
        if (randint(1, 3) == 3) {
            basic.showArrow(ArrowNames.North)
            sprite = game.createSprite(2, 1)
            Secrite = game.createSprite(2, 2)
        } else {
            basic.showArrow(ArrowNames.South)
            sprite = game.createSprite(2, 2)
            Secrite = game.createSprite(2, 1)
        }
    }
}
basic.forever(function () {
    if (Secrite.isTouchingEdge()) {
        sprite.delete()
        Secrite.delete()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            `)
        basic.pause(350)
        if (randint(1, 3) == 1) {
            basic.showArrow(ArrowNames.East)
            sprite = game.createSprite(2, 2)
            Secrite = game.createSprite(1, 2)
        } else {
            if (randint(1, 3) == 2) {
                basic.showArrow(ArrowNames.West)
                sprite = game.createSprite(1, 2)
                Secrite = game.createSprite(2, 2)
            } else {
                if (randint(1, 3) == 3) {
                    basic.showArrow(ArrowNames.North)
                    sprite = game.createSprite(2, 1)
                    Secrite = game.createSprite(2, 2)
                } else {
                    basic.showArrow(ArrowNames.South)
                    sprite = game.createSprite(2, 2)
                    Secrite = game.createSprite(2, 1)
                }
            }
        }
    } else {
    	
    }
    if (sprite.isTouchingEdge()) {
        sprite.delete()
        Secrite.delete()
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # . . . #
            # # # # #
            `)
        if (randint(1, 4) == 1) {
            basic.showArrow(ArrowNames.East)
            sprite = game.createSprite(2, 2)
            Secrite = game.createSprite(1, 2)
        } else {
            if (randint(1, 4) == 2) {
                basic.showArrow(ArrowNames.West)
                sprite = game.createSprite(1, 2)
                Secrite = game.createSprite(2, 2)
            } else {
                if (randint(1, 4) == 3) {
                    basic.showArrow(ArrowNames.North)
                    sprite = game.createSprite(2, 1)
                    Secrite = game.createSprite(2, 2)
                } else {
                    basic.showArrow(ArrowNames.South)
                    sprite = game.createSprite(2, 2)
                    Secrite = game.createSprite(2, 1)
                }
            }
        }
    } else {
    	
    }
})
