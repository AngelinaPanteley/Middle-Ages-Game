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
    this.body.velocity.x = Gargoyle.SPEED;
}

Gargoyle.SPEED = 100;

// inherit from Phaser.Sprite
Gargoyle.prototype = Object.create(Phaser.Sprite.prototype);
Gargoyle.prototype.constructor = Gargoyle;

Gargoyle.prototype.update = function () {
    // check against walls and reverse direction if necessary
    if (this.body.touching.right || this.body.blocked.right) {
        this.body.velocity.x = -Gargoyle.SPEED; // turn left
        this.scale.x = -1;
    }
    else if (this.body.touching.left || this.body.blocked.left) {
        this.body.velocity.x = Gargoyle.SPEED; // turn right
        this.scale.x = 1;
    }
};

Gargoyle.prototype.die = function () {
    this.body.enable = false;

    this.animations.play('die').onComplete.addOnce(function () {
        this.kill();
    }, this);
};
