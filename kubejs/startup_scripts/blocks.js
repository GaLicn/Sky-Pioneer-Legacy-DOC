StartupEvents.registry('block', event => {
    event.create('compressed_oak_planks')
        .hardness(2.0)
        .resistance(2.0)
        .tagBlock('minecraft:mineable/axe')
        .requiresTool(false)

    // 锭模具催化剂
    event.create('ingot_mold_catalyst')
        .hardness(2.0)
        .resistance(2.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true)

})