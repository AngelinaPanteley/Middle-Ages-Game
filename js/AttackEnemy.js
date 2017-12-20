//
// Attacking enemy
//

function AttackEnemy(game, x, y) {}

// inherit from Phaser.Sprite
AttackEnemy.prototype = Object.create(Phaser.Sprite.prototype);
AttackEnemy.prototype.constructor = AttackEnemy;

AttackEnemy.prototype.update = function () {
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
    // check attack walls and reverse direction if necessary
    if (this.wallRight.body.touching.right ||
        this.wallRight.body.touching.left ||
        this.wallRight.body.touching.top  ||
        this.wallRight.body.touching.bottom) {

        this.velocity = Math.abs(this.velocity);
        this.scale.x = 1;
    }
    else if (this.wallLeft.body.touching.right ||
        this.wallLeft.body.touching.left ||
        this.wallLeft.body.touching.top ||
        this.wallLeft.body.touching.bottom) {

        this.velocity = - Math.abs(this.velocity);
        this.scale.x = -1;
    }
};

AttackEnemy.prototype.die = function () {
    this.body.enable = false;
    this.wallLeft.die();
    this.wallRight.die();

    this.animations.play('die').onComplete.addOnce(function () {
        this.kill();
    }, this);
};
