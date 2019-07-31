import 'phaser';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    console.log('Preload');
}

function create ()
{
    console.log('Create');
}

function update (time, delta)
{
    console.log(delta);
}
