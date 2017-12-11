// =============================================================================
// Loading state
// =============================================================================

const LoadingState = {};

LoadingState.init = function () {
    // keep crispy-looking pixels
    this.game.renderer.renderSession.roundPixels = true;
};

LoadingState.preload = function () {
    this.game.load.json('level:0', 'data/level00.json');
    this.game.load.json('level:1', 'data/level01.json');

    this.game.load.image('font:numbers', 'images/numbers.png');

    this.game.load.image('icon:coin', 'images/coin_icon.png');
    this.game.load.image('background', 'images/3.gif');
    this.game.load.image('invisible-wall', 'images/invisible_wall.png');
    this.game.load.image('dragon-wall', 'images/invisible_dragon-wall.png');
    this.game.load.image('ground', 'images/ground.png');
    this.game.load.image('grass:10x1', 'images/grass_10x1.png');
    this.game.load.image('grass:8x1', 'images/grass_8x1.png');
    this.game.load.image('grass:6x1', 'images/grass_6x1.png');
    this.game.load.image('grass:4x1', 'images/grass_4x1.png');
    this.game.load.image('grass:3x1', 'images/grass_3x1.png');
    this.game.load.image('grass:2x1', 'images/grass_2x1.png');
    this.game.load.image('grass:1x1', 'images/grass_1x1.png');
    this.game.load.image('key', 'images/key.png');
    this.game.load.image('heart', 'images/heart.png');

    this.game.load.spritesheet('decoration', 'images/decor.png', 42, 42);
    this.game.load.spritesheet('hero', `images/hero${this.hero}.png`, 24, 31);
    this.game.load.spritesheet('coin', 'images/coin.png', 16, 16);
    this.game.load.spritesheet('chest', 'images/chest.png', 28, 17);
    this.game.load.spritesheet('goblin', 'images/goblin.png', 24, 32);
    this.game.load.spritesheet('dragon', 'images/dragon.png', 66, 55);
    this.game.load.spritesheet('dragon-flame', 'images/dragon-flame.png', 19, 14);
    this.game.load.spritesheet('door', 'images/door.png', 96, 96);
    this.game.load.spritesheet('icon:key', 'images/key_icon.png', 14, 25);
    this.game.load.spritesheet('icon:heart', 'images/heart_icon.png', 19, 17);

    this.game.load.audio('sfx:jump', 'audio/jump.wav');
    this.game.load.audio('sfx:coin', 'audio/coin.wav');
    this.game.load.audio('sfx:chest', 'audio/coin.wav');
    this.game.load.audio('sfx:key', 'audio/key.wav');
    this.game.load.audio('sfx:heart', 'audio/key.wav');
    this.game.load.audio('sfx:stomp', 'audio/stomp.wav');
    this.game.load.audio('sfx:door', 'audio/door.wav');
    this.game.load.audio('bgm', ['audio/bgm.mp3', 'audio/bgm.ogg']);
};

LoadingState.create = function () {
    this.game.state.start('play', true, false, {level: 0});
};
