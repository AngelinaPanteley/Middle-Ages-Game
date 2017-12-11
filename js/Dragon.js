//
// Dragon (enemy)
//

function Dragon(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'dragon');
    this.game = game;
    this.speed = 150;
    // anchor
    this.anchor.set(0.5);
    // animation
    this.animations.add('fly', [0, 1, 2, 3, 0, 0, 0, 0, 0, 0], 12, true);
    this.animations.add('die', [4, 5, 4, 5, 4, 5, 4, 5, 4, 5], 12);
    this.animations.add('attack', [6, 7, 8], 6);
    this.animations.play('fly');

    // physic properties
    this.game.physics.enable(this);
    this.body.collideWorldBounds = true;
    this.body.velocity.x = this.speed;
    this.velocity = this.speed;

    this.wallRight = new DragonWall(game, this, x+135, y);
    this.wallLeft = new DragonWall(game, this, x-35, y);

    this.flame = null;
    this.flameCounter = 0;
}

// inherit from Phaser.Sprite
Dragon.prototype = Object.create(Phaser.Sprite.prototype);
Dragon.prototype.constructor = Dragon;

Dragon.prototype.update = function () {
    // check against walls and reverse direction if necessary
    if (this.body.touching.right || this.body.blocked.right) {
        this.body.velocity.x = -this.speed; // turn left
        this.velocity = -this.speed;
        this.scale.x = -1;
    }
    else if (this.body.touching.left || this.body.blocked.left) {
        this.body.velocity.x = this.speed; // turn right
        this.velocity = this.speed;
        this.scale.x = 1;
    }

    if (this.wallRight.body.touching.right || this.wallRight.body.blocked.right ||
        this.wallRight.body.touching.left || this.wallRight.body.blocked.left ||
        this.wallRight.body.touching.top || this.wallRight.body.blocked.top ||
        this.wallRight.body.touching.bottom || this.wallRight.body.blocked.bottom) {

        this.velocity = Math.abs(this.velocity);
        this.scale.x = 1;
    }
    else if (this.wallLeft.body.touching.right || this.wallLeft.body.blocked.right ||
        this.wallLeft.body.touching.left || this.wallLeft.body.blocked.left ||
        this.wallLeft.body.touching.top || this.wallLeft.body.blocked.top ||
        this.wallLeft.body.touching.bottom || this.wallLeft.body.blocked.bottom) {

        this.velocity = - Math.abs(this.velocity);
        this.scale.x = -1;
    }
};

Dragon.prototype.die = function () {
    this.body.enable = false;
    this.wallLeft.die();
    this.wallRight.die();

    this.animations.play('die').onComplete.addOnce(function () {
        this.kill();
    }, this);
};
