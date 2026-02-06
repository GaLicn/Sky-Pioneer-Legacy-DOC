// 自定义机器配方
ServerEvents.recipes(event => {
    // 岩浆 - 挤压机
    event.custom({
        type: 'integrateddynamics:squeezer',
        input_item: {
            item: 'kubejs:wood_residue'
        },
        output_fluid: {
            id: 'minecraft:lava',
            amount: 250
        }
    })
})
