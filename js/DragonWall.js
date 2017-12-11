//
// Dragon Wall
//

function DragonWall(game, dragon, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'dragon-wall');

    this.speed = dragon.speed;
    this.dragon = dragon;
    // anchor
    this.anchor.set(1, 0.7);

    // physic properties
    this.game.physics.enable(this);
    this.body.collideWorldBounds = true;
    this.body.velocity.x = this.speed;
    this.body.allowGravity = false;
}

// inherit from Phaser.Sprite
DragonWall.prototype = Object.create(Phaser.Sprite.prototype);
DragonWall.prototype.constructor = DragonWall;

DragonWall.prototype.update = function () {
    // check against walls and reverse direction if necessary
    if (this.dragon.body.touching.right || this.dragon.body.blocked.right) {
        this.body.velocity.x = -this.speed; // turn left
    }
    else if (this.dragon.body.touching.left || this.dragon.body.blocked.left) {
        this.body.velocity.x = this.speed; // turn right
    }
};

DragonWall.prototype.die = function () {
    this.body.enable = false;
    this.kill();
};
