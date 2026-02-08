// 普通合成配方
ServerEvents.recipes(event => {
    // 压缩橡木木板
    event.shapeless('kubejs:compressed_oak_planks', [
        '9x minecraft:oak_planks'
    ])

    //木砖
    event.shaped('kubejs:wood_brick', [
        'AAA'
    ], {
        A: 'kubejs:compressed_oak_planks'
    })

    // 石棍
    event.shaped('4x kubejs:stone_stick', [
        'C',
        'C'
    ], {
        C: 'minecraft:cobblestone'
    })

    // 石齿轮
    event.shaped('1x kubejs:stone_gear', [
        ' C ',
        'C C',
        ' C '
    ], {
        C: 'kubejs:stone_stick'
    })

    //熔炉
    event.shaped('1x minecraft:furnace', [
        'AAA',
        'ABA',
        'CCC'
    ], {
        A: 'minecraft:cobblestone',
        B: 'kubejs:stone_gear',
        C: 'kubejs:wood_brick'
    })

    //木齿轮
    event.shaped('1x kubejs:wood_gear', [
        ' A ',
        'A A',
        ' A '
    ], {
        A: 'minecraft:stick'
    })

    //挤压机
    event.shaped('1x integrateddynamics:squeezer', [
        'ABA',
        'C C',
        'ABA'
    ], {
        A: 'kubejs:wood_gear',
        B: '#minecraft:planks',
        C: 'minecraft:stick'
    })

    //木剪刀
    event.shaped('1x sky_pioneer_legacy:wooden_shears', [
        ' A ',
        'A  '
    ], {
        A: 'kubejs:wood_brick'
    })

    //线过滤网
    event.shapeless('1x kubejs:wire_mesh_filter', [
        '9x minecraft:string'
    ])

    //微型输入总线
    event.shaped('1x modular_machinery_reborn:inputbus_tiny', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: '#minecraft:planks',
        B: 'kubejs:wood_gear',
        C: 'minecraft:chest'
    })

    //微型输出总线
    event.shapeless('1x modular_machinery_reborn:outputbus_tiny', [
        '1x modular_machinery_reborn:inputbus_tiny'
    ])

    //原始虚空物质采集器
    event.shaped('1x modular_machinery_reborn:controller[modular_machinery_reborn:machine="modular_machinery_reborn:primitive_void_collector"]', [
        'AAA',
        'CBC',
        'AAA'
    ], {
        A: 'kubejs:compressed_oak_planks',
        B: 'kubejs:wire_mesh_filter',
        C: 'kubejs:stone_gear'
    })
})
