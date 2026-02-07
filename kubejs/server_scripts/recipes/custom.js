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

    // 水 - 挤压机
    event.custom({
        type: 'integrateddynamics:squeezer',
        input_item: {
            item: 'minecraft:oak_leaves'
        },
        output_fluid: {
            id: 'minecraft:water',
            amount: 250
        }
    })

    // 木砖烧制草木灰
    event.smelting('4x sky_pioneer_legacy:grass_ash', 'kubejs:wood_brick')

    //干净虚空物质 - 干燥盆（只能用流体输入）
    event.custom({
            type: 'integrateddynamics:drying_basin',
            input_item: {
                item: 'kubejs:void_matter'
            },
            input_fluid: {
                id: 'minecraft:water',
                amount: 1000
            },
            duration: 200,
            output_item: {
                id: 'kubejs:clean_void_matter'
            }
        })
})
