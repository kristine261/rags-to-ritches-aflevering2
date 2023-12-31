function createLevel () {
    tiles.setCurrentTilemap(tileMaps[levelCounter])
    counterList = [40, 30, 25]
    info.startCountdown(counterList[levelCounter])
    if (levelCounter == 0) {
        for (let index = 0; index < 15; index++) {
            Pant = sprites.create(img`
                ....................
                ....................
                ....................
                ....................
                ....................
                .......eeee.........
                .......e77e.........
                ........77..........
                ........77..........
                .......7777.........
                .......7777.........
                .......eeee.........
                .......eeee.........
                .......7777.........
                .......7777.........
                ....................
                ....................
                ....................
                ....................
                ....................
                `, SpriteKind.Food)
            tiles.placeOnRandomTile(Pant, assets.tile`transparency16`)
        }
        tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    } else if (levelCounter == 1) {
        for (let index = 0; index < 15; index++) {
            Pizza = sprites.create(img`
                .............beebbbb............
                ............eebbbb4bb...........
                ............eb344bb4bb..........
                ............e44334bb4bb.........
                ............eb433344b4be........
                ............4eb43344444be.......
                ...........bd4eb43333344bb......
                ..........b455d4443333444bb.....
                ..........4d5555d444333444bb....
                .........4555555dd4b4443444be...
                ........bd5555d555d4bb444444ee..
                ........b55ddd665555bb4b44444ee.
                .......bd5555677655554ebb44444eb
                .......43222558855555d4eeb44b4ee
                ......b422332ddd555222d4eebbb4be
                ......be22232ed55522332db4ebbbbe
                .....bde22222e555e22232edd4bbbbe
                .....b52e222e3555e22222eddd4ebee
                ....bd552eee355552e222e355544eee
                ....665dd5555555552eee355dd4deee
                ...6776555555555555555551554d4ee
                ...4885222555dddd6655551544d4eee
                ..b45522332555dd677611d444ddeee.
                ..4d5222232e55555881d44ddd4eee..
                .bdd5e22222e555115114d54d4ee....
                .b55d2e222e351144d1d55eeee......
                bd5ddd2eee3d444555dd4e..........
                b555115dddd55d544eede...........
                4511d444d5544ee...4de...........
                41d4555d4ee........44...........
                41554eede.......................
                44ee...4e.......................
                `, SpriteKind.Food)
            tiles.placeOnRandomTile(Pizza, sprites.vehicle.roadVertical)
        }
        tiles.placeOnRandomTile(mySprite, sprites.vehicle.roadVertical)
    } else {
        for (let index = 0; index < 15; index++) {
            Blomst = sprites.create(img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ...........444......
                ..........4eee4.....
                ..........44444.....
                ...........444......
                ............6.......
                ............6.......
                ...........66.6.....
                ...........6666.....
                ...........666......
                ...........66.......
                ...........6........
                ...........6........
                ...........6........
                ....................
                ....................
                `, SpriteKind.Food)
            tiles.placeOnRandomTile(Blomst, assets.tile`myTile`)
        }
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    }
}
info.onCountdownEnd(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
let Blomst: Sprite = null
let Pizza: Sprite = null
let Pant: Sprite = null
let counterList: number[] = []
let mySprite: Sprite = null
let tileMaps: tiles.TileMapData[] = []
let levelCounter = 0
levelCounter = 0
tileMaps = [tilemap`level18`, tilemap`level19`, tilemap`level20`]
let jerrys = sprites.create(img`
    . . . . . . . . . 
    . c . . . . . . . 
    . e e e e e e . . 
    . e e e c b e d . 
    . c e d d d c d . 
    . d b f d f d d . 
    . d d d d d d d . 
    . d d d 1 d d d . 
    . . d d d d d d . 
    . d d d d d d . . 
    . d d d d d . . . 
    . d d d d d . . . 
    . d d d d d . . . 
    . d c c c c . . . 
    . d c c c b . . . 
    . . c c c c . . . 
    . . c c c c . . . 
    `, SpriteKind.Player)
mySprite = jerrys
createLevel()
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
forever(function () {
    if (info.score() == 15) {
        levelCounter = 1
        createLevel()
    } else if (info.score() == 30) {
        levelCounter = 2
        createLevel()
    } else if (info.score() >= 45) {
        game.gameOver(true)
    }
})
