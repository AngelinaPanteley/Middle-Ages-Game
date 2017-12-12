//
// Enemy Wall
//

function AttackWall(game, enemy, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'attack-wall');

    this.speed = enemy.speed;
    this.enemy = enemy;
    // anchor
    this.anchor.set(1, 0.7);

    // physic properties
    this.game.physics.enable(this);
    this.body.collideWorldBounds = true;
    this.body.velocity.x = this.speed;
    this.body.allowGravity = false;
}

// inherit from Phaser.Sprite
AttackWall.prototype = Object.create(Phaser.Sprite.prototype);
AttackWall.prototype.constructor = AttackWall;

AttackWall.prototype.update = function () {
    // check against walls and reverse direction if necessary
    if (this.enemy.body.touching.right || this.enemy.body.blocked.right) {
        this.body.velocity.x = -this.speed; // turn left
    }
    else if (this.enemy.body.touching.left || this.enemy.body.blocked.left) {
        this.body.velocity.x = this.speed; // turn right
    }
};

AttackWall.prototype.die = function () {
    this.body.enable = false;
    this.kill();
};
