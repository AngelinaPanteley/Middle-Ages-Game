//
// Goblin (enemy)
//

function Goblin(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'goblin');

    // anchor
    this.anchor.set(0.5);
    // animation
    this.animations.add('crawl', [0, 1, 2, 3, 4, 5, 6, 7], 8, true);
    this.animations.add('die', [8, 9, 8, 9, 8, 9, 8, 9, 8, 9], 12);
    this.animations.play('crawl');

    // physic properties
    this.game.physics.enable(this);
    this.body.collideWorldBounds = true;
    this.body.velocity.x = Goblin.SPEED;
}

Goblin.SPEED = 100;

// inherit from Phaser.Sprite
Goblin.prototype = Object.create(Phaser.Sprite.prototype);
Goblin.prototype.constructor = Goblin;

Goblin.prototype.update = function () {
    // check against walls and reverse direction if necessary
    if (this.body.touching.right || this.body.blocked.right) {
        this.body.velocity.x = -Goblin.SPEED; // turn left
        this.scale.x = -1;
    }
    else if (this.body.touching.left || this.body.blocked.left) {
        this.body.velocity.x = Goblin.SPEED; // turn right
        this.scale.x = 1;
    }
};

Goblin.prototype.die = function () {
    this.body.enable = false;

    this.animations.play('die').onComplete.addOnce(function () {
        this.kill();
    }, this);
};
