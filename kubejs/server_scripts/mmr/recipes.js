// 模块化机械重生 - 配方定义
ServerEvents.recipes(event => {
    // 原始虚空物质采集器 - 每5秒生成一个铁锭
    event.recipes.modular_machinery_reborn.machine_recipe("modular_machinery_reborn:primitive_void_collector", 100)
        .produceItem("kubejs:void_matter", 120, 10)
})
