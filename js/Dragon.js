//
// Dragon (enemy)
//

function Dragon(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'dragon');
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

    this.wallRight = new AttackWall(game, this, x+135, y);
    this.wallLeft = new AttackWall(game, this, x-35, y);
}

// inherit from AttackEnemy
Dragon.prototype = Object.create(AttackEnemy.prototype);
Dragon.prototype.constructor = Dragon;
