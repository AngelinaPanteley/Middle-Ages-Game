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
    this.game.load.json('level:2', 'data/level02.json');
    this.game.load.json('level:3', 'data/level03.json');
    this.game.load.json('level:4', 'data/level04.json');
    this.game.load.json('level:5', 'data/level05.json');
    this.game.load.json('level:6', 'data/level06.json');
    this.game.load.json('level:7', 'data/level07.json');
    this.game.load.json('level:8', 'data/level08.json');
    this.game.load.json('level:9', 'data/level09.json');

    this.game.load.image('font:numbers', 'images/numbers.png');
    this.game.load.image('icon:coin', 'images/coin_icon.png');
    this.game.load.image('background', 'images/canva-bg.gif');
    this.game.load.image('invisible-wall', 'images/invisible_wall.png');
    this.game.load.image('attack-wall', 'images/attack-wall.png');
    this.game.load.image('ground', 'images/ground.png');
    this.game.load.image('stone:1', 'images/stone1.png');
    this.game.load.image('stone:2', 'images/stone2.png');
    this.game.load.image('stone:3', 'images/stone3.png');
    this.game.load.image('stone:4', 'images/stone4.png');
    this.game.load.image('bridge:1', 'images/bridge1.png');
    this.game.load.image('bridge:2', 'images/bridge2.png');
    this.game.load.image('bridge:3', 'images/bridge3.png');
    this.game.load.image('bridge:4', 'images/bridge4.png');
    this.game.load.image('grass:10x1', 'images/grass_10x1.png');
    this.game.load.image('grass:8x1', 'images/grass_8x1.png');
    this.game.load.image('grass:6x1', 'images/grass_6x1.png');
    this.game.load.image('grass:4x1', 'images/grass_4x1.png');
    this.game.load.image('grass:3x1', 'images/grass_3x1.png');
    this.game.load.image('grass:2x1', 'images/grass_2x1.png');
    this.game.load.image('grass:1x1', 'images/grass_1x1.png');
    this.game.load.image('key', 'images/key.png');
    this.game.load.image('heart', 'images/heart.png');

    this.game.load.spritesheet('hero', `images/hero${this.hero}.png`, 24, 31);
    this.game.load.spritesheet('coin', 'images/coin.png', 16, 16);
    this.game.load.spritesheet('chest', 'images/chest.png', 28, 17);
    this.game.load.spritesheet('goblin', 'images/goblin.png', 24, 32);
    this.game.load.spritesheet('gargoyle', 'images/gargoyle.png', 33, 32);
    this.game.load.spritesheet('dragon', 'images/dragon.png', 66, 55);
    this.game.load.spritesheet('dragon-flame', 'images/dragon-flame.png', 19, 14);
    this.game.load.spritesheet('wizard', 'images/wizard.png', 24, 32);
    this.game.load.spritesheet('wizard-flame', 'images/wizard-flame.png', 19, 14);
    this.game.load.spritesheet('door', 'images/door.png', 96, 96);
    this.game.load.spritesheet('icon:key', 'images/key_icon.png', 14, 25);
    this.game.load.spritesheet('icon:heart', 'images/heart_icon.png', 19, 17);
    this.game.load.spritesheet('water', 'images/water.png', 1236, 86);

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
