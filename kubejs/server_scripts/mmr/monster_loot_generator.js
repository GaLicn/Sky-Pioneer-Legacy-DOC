MMREvents.machines(event => {
    // 怪物战利品生成器
    event.create("modular_machinery_reborn:monster_loot_generator")
        .color("#00000052")
        .structure(
            MMRStructureBuilder.create()
                .pattern([["aaa", "cab", "aaa"], ["dmd", "d d", "ddd"], ["ddd", "d d", "ddd"], ["ddd", "ded", "ddd"]])
                .keys({ "a": "naturesaura:sky_ingot_block", "b": "#modular_machinery_reborn:inputbus", "c": "#modular_machinery_reborn:outputbus", "d": "minecraft:glass", "e": "minecraft:redstone_block" })
        )
})

// 怪物战利品生成器 - 每5秒生成怪物战利品
ServerEvents.recipes(event => {
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:monster_loot_generator", 100)
        .requireItem('naturesaura:sky_sword', 0, 50, 10)
        .produceItem('minecraft:rotten_flesh', 0.4, 105, 10)
        .produceItem('minecraft:bone', 0.2, 125, 10)
        .produceItem('minecraft:gunpowder', 0.2, 145, 10)
        .produceItem('minecraft:spider_eye', 0.1, 165, 10)
        .produceItem('minecraft:ender_pearl', 0.1, 185, 10)
        .produceItem('minecraft:ghast_tear', 0.05, 205, 10)
})