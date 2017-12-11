//
// Dragon Flame
//

function DragonFlame(game, dragon, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'dragon-flame');

    this.speed = dragon.speed;
    this.dragon = dragon;
    // anchor
    this.anchor.set(1, 0);

    // animation
    this.animations.add('fly', [0, 0, 1, 1, 1, 1], 12, true);
    this.animations.play('fly');

    // physic properties
    this.game.physics.enable(this);
    this.body.collideWorldBounds = false;
    this.body.velocity.x = this.speed;
    this.body.allowGravity = false;
}

// inherit from Phaser.Sprite
DragonFlame.prototype = Object.create(Phaser.Sprite.prototype);
DragonFlame.prototype.constructor = DragonFlame;

DragonFlame.prototype.die = function () {
    this.body.enable = false;
    this.kill();
};
