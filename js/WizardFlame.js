//
// Wizard Flame
//

function WizardFlame(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'wizard-flame');
    // anchor
    this.anchor.set(1, 0);

    // animation
    this.animations.add('fly', [0, 0, 1, 1, 1, 1], 12, true);
    this.animations.play('fly');

    // physic properties
    this.game.physics.enable(this);
    this.body.collideWorldBounds = false;

    this.body.allowGravity = false;
}

// inherit from Phaser.Sprite
WizardFlame.prototype = Object.create(Phaser.Sprite.prototype);
WizardFlame.prototype.constructor = WizardFlame;

WizardFlame.prototype.die = function () {
    this.body.enable = false;
    this.kill();
};
