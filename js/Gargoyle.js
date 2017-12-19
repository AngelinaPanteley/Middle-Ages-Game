//
// Gargoyle (enemy)
//

function Gargoyle(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'gargoyle');

    // anchor
    this.anchor.set(0.5);
    // animation
    this.animations.add('fly', [0, 1, 2, 3], 8, true);
    this.animations.add('die', [4, 5, 6, 7, 8], 12);
    this.animations.play('fly');

    // physic properties
    this.game.physics.enable(this);
    this.body.collideWorldBounds = true;
    this.body.velocity.x = Enemy.SPEED;
}

// inherit from Phaser.Sprite
Gargoyle.prototype = Object.create(Enemy.prototype);
Gargoyle.prototype.constructor = Gargoyle;

