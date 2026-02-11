MMREvents.machines(event => {
    // 原始虚空物质采集器
    event.create("modular_machinery_reborn:primitive_void_collector")
        .color("#FF8000FF")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["m"],
                    ["o"]
                ])
                .keys({
                    "m": "modular_machinery_reborn:controller",
                    "o": "#modular_machinery_reborn:outputbus"
                })
        )
})

ServerEvents.recipes(event => {
    // 原始虚空物质采集器 - 每5秒生成虚空物质
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:primitive_void_collector", 100)
        .produceItem("kubejs:void_matter", 120, 10)
})

