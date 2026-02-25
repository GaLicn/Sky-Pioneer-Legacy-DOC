MMREvents.machines(event => {
    // 温室
    event.create("modular_machinery_reborn:greenhouse")
        .color("#FF4DFF00")
        .structure(
            MMRStructureBuilder.create()
                .pattern([["aamaa", "eaaad", "aaaaa", "caaab", "aaaaa"], ["fgggf", "ghhhg", "ghhhg", "ghhhg", "fgggf"], ["fgggf", "giiig", "giiig", "giiig", "fgggf"], ["fgggf", "gfffg", "gfffg", "gfffg", "fgggf"], ["fgggf", "gfffg", "gfffg", "gfffg", "fgggf"], ["fffff", "fgggf", "fgggf", "fgggf", "fffff"]])
                .keys({ "a": "minecraft:oak_planks", "b": "#modular_machinery_reborn:fluidinputhatch", "c": "#modular_machinery_reborn:fluidoutputhatch", "d": "#modular_machinery_reborn:inputbus", "e": "#modular_machinery_reborn:outputbus", "f": "minecraft:air", "g": "minecraft:glass", "h": "minecraft:dirt", "i": "minecraft:short_grass" })
        )
})

ServerEvents.recipes(event => {
    //橡木树苗 - 温室
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:greenhouse", 100)
        .requireItem('minecraft:oak_sapling', 0, 50, 10)
        .produceItem('4x minecraft:oak_log', 105, 10)
        .produceItem('3x minecraft:oak_leaves', 125, 10)
        .produceItem('minecraft:apple', 0.1, 145, 10)
        .produceItem('minecraft:stick', 0.2, 165, 10)

    // 虞美人
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:greenhouse", 100)
        .requireItem('minecraft:poppy', 0, 50, 10)
        .produceItem('minecraft:poppy', 105, 10)

    // 蓝花美耳草
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:greenhouse", 100)
        .requireItem('minecraft:cornflower', 0, 50, 10)
        .produceItem('minecraft:cornflower', 105, 10)

    // 矢车菊
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:greenhouse", 100)
        .requireItem('minecraft:blue_orchid', 0, 50, 10)
        .produceItem('minecraft:blue_orchid', 105, 10)

    // 蒲公英
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:greenhouse", 100)
        .requireItem('minecraft:dandelion', 0, 50, 10)
        .produceItem('minecraft:dandelion', 105, 10)

    // 绒球葱
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:greenhouse", 100)
        .requireItem('minecraft:allium', 0, 50, 10)
        .produceItem('minecraft:allium', 105, 10)

    // 兰花
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:greenhouse", 100)
        .requireItem('minecraft:blue_orchid', 0, 50, 10)
        .produceItem('minecraft:blue_orchid', 105, 10)

    //橙色郁金香
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:greenhouse", 100)
        .requireItem('minecraft:orange_tulip', 0, 50, 10)
        .produceItem('minecraft:orange_tulip', 105, 10)

    // 粉色郁金香
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:greenhouse", 100)
        .requireItem('minecraft:pink_tulip', 0, 50, 10)
        .produceItem('minecraft:pink_tulip', 105, 10)

    //铃兰
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:greenhouse", 100)
        .requireItem('minecraft:lily_of_the_valley', 0, 50, 10)
        .produceItem('minecraft:lily_of_the_valley', 105, 10)

    // 小麦
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:greenhouse", 100)
        .requireItem('minecraft:wheat_seeds', 0, 50, 10)
        .produceItem('minecraft:wheat_seeds', 105, 10)
        .produceItem('minecraft:wheat', 125, 10)
})