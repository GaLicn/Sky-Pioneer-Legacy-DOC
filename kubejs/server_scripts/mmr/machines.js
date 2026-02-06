// 模块化机械重生 - 机器定义
MMREvents.machines(event => {
    // 原始虚空物质采集器
    event.create("modular_machinery_reborn:primitive_void_collector")
        .color("#FF2D0052")
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
