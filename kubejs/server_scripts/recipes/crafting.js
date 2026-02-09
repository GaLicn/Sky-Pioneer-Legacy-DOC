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

    //闪耀纤维
    event.shaped('1x naturesaura:gold_fiber', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#minecraft:leaves',
        B: 'kubejs:crushed_clean_void_matter',
        C: 'kubejs:plant_fiber'
    })

    //烘干池
    event.shaped('1x integrateddynamics:drying_basin', [
        'A A',
        'A A',
        'AAA'
    ], {
        A: 'kubejs:compressed_oak_planks',
    })

    //植物球
    event.shaped('1x kubejs:plant_ball', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: '#minecraft:leaves'
    })

    //木基座
    event.shaped('1x naturesaura:wood_stand', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'naturesaura:gold_powder',
        B: 'minecraft:stripped_oak_log'
    })

    //黄金石砖
    event.shapeless('1x naturesaura:gold_brick', [
        '1x minecraft:stone_bricks',
        '1x naturesaura:gold_fiber',
        '1x naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]'
    ])
})
