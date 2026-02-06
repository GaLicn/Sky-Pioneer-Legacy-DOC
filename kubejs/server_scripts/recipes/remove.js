// 移除配方
ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:furnace' }) //熔炉
    event.remove({ output: 'integrateddynamics:squeezer' })  //挤压机
})
