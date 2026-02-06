StartupEvents.registry('creative_mode_tab', event => {
    event.create('kubejs_items')
        .displayName('KubeJS Items')
        .icon(() => Item.of('kubejs:wood_brick'))
        .content(() => [
            'kubejs:wood_brick',
            'kubejs:wood_residue',
            'kubejs:compressed_oak_planks',
            'kubejs:stone_stick',
            'kubejs:stone_gear',
            'kubejs:wood_gear'
        ])
})
