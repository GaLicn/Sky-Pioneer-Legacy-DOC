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

    // 植物纤维
    event.custom({
        type: 'integrateddynamics:squeezer',
        input_item: {
            item: 'minecraft:short_grass'
        },
        output_items: [
            {
                item: {
                    id: 'kubejs:plant_fiber'
                }
            }
        ]
    })

    //粉碎的干净虚空物质
    event.custom({
        type: 'integrateddynamics:squeezer',
        input_item: {
            item: 'kubejs:clean_void_matter'
        },
        output_items: [
            {
                item: {
                    id: 'kubejs:crushed_clean_void_matter'
                }
            }
        ]
    })

    //金叶粉
    event.custom({
        type: 'integrateddynamics:squeezer',
        input_item: {
            item: 'naturesaura:gold_leaf'
        },
        output_items: [
            {
                item: {
                    id: 'naturesaura:gold_powder',
                    count: 4
                }
            }
        ]
    })

    //泥土
    event.custom({
        type: 'integrateddynamics:squeezer',
        input_item: {
            item: 'kubejs:plant_ball'
        },
        output_items: [
            {
                item: {
                    id: 'minecraft:dirt'
                }
            }
        ],
        duration: 40
    })

    // 木砖烧制草木灰
    event.smelting('4x sky_pioneer_legacy:grass_ash', 'kubejs:wood_brick')

    //干净虚空物质 - 干燥盆
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

    //沙子 - 干燥盆
    event.custom({
        type: 'integrateddynamics:drying_basin',
        input_item: {
            item: 'minecraft:dirt'
        },
        output_item: {
            id: 'minecraft:sand'
        },
        duration: 40
    })

})
