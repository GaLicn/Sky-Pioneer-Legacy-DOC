MMREvents.machines(event => {
    // 焦炉
    event.create("modular_machinery_reborn:advance_cook_oven")
        .color("#FF272727")
        .structure(
            MMRStructureBuilder.create()
                .pattern([["aaa", "baa", "aaa"], ["ama", "dac", "aaa"], ["aaa", "aaa", "aaa"]])
                .keys({ "a": "immersiveengineering:cokebrick", "b": "#modular_machinery_reborn:fluidoutputhatch", "c": "#modular_machinery_reborn:inputbus", "d": "#modular_machinery_reborn:outputbus" })
        )
})

ServerEvents.recipes(event => {
    // 焦炉 - 原木 制作 木炭 和 焦油
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:advance_cook_oven", 200)
        .requireItem('#minecraft:logs', 50, 10)
        .produceItem('mekanism:block_charcoal', 105, 10)
        .produceFluid('1000x immersiveengineering:creosote', 125, 10)
})