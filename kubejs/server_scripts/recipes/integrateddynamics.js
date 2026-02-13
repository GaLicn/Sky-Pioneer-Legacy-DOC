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
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        input_item: {
            item: 'kubejs:wood_residue'
        },
        output_fluid: {
            id: 'minecraft:lava',
            amount: 250
        },
        duration: 40
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
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        input_item: {
            item: 'minecraft:oak_leaves'
        },
        output_fluid: {
            id: 'minecraft:water',
            amount: 250
        },
        duration: 40
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
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        input_item: {
            item: 'minecraft:short_grass'
        },
        output_items: [
            {
                item: {
                    id: 'kubejs:plant_fiber'
                }
            }
        ],
        duration: 40
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
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        input_item: {
            item: 'kubejs:clean_void_matter'
        },
        output_items: [
            {
                item: {
                    id: 'kubejs:crushed_clean_void_matter'
                }
            }
        ],
        duration: 40
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
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
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
        ],
        duration: 40
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
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
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

    //粉碎的虚空物质
    event.custom({
        type: 'integrateddynamics:squeezer',
        input_item: {
            item: 'kubejs:void_matter'
        },
        output_items: [
            {
                item: {
                    id: 'kubejs:crushed_void_matter'
                }
            }
        ]
    })
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        input_item: {
            item: 'kubejs:void_matter'
        },
        output_items: [
            {
                item: {
                    id: 'kubejs:crushed_void_matter'
                }
            }
        ],
        duration: 40
    })


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
        duration: 40,
        output_item: {
            id: 'kubejs:clean_void_matter'
        }
    })
    event.custom({
        type: 'integrateddynamics:mechanical_drying_basin',
        input_item: {
            item: 'kubejs:void_matter'
        },
        input_fluid: {
            id: 'minecraft:water',
            amount: 1000
        },
        duration: 10,
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
    event.custom({
        type: 'integrateddynamics:mechanical_drying_basin',
        input_item: {
            item: 'minecraft:dirt'
        },
        output_item: {
            id: 'minecraft:sand'
        },
        duration: 40
    })

    //褪色的灌注铁
    event.custom({
        type: 'integrateddynamics:drying_basin',
        input_item: {
            item: 'naturesaura:infused_iron'
        },
        input_fluid: {
            id: 'minecraft:water',
            amount: 1000
        },
        duration: 100,
        output_item: {
            id: 'kubejs:faded_infused_iron'
        }
    })
    event.custom({
        type: 'integrateddynamics:mechanical_drying_basin',
        input_item: {
            item: 'naturesaura:infused_iron'
        },
        input_fluid: {
            id: 'minecraft:water',
            amount: 1000
        },
        duration: 40,
        output_item: {
            id: 'kubejs:faded_infused_iron'
        }
    })

    //褪色的污染黄金
    event.custom({
        type: 'integrateddynamics:drying_basin',
        input_item: {
            item: 'naturesaura:tainted_gold'
        },
        input_fluid: {
            id: 'minecraft:water',
            amount: 1000
        },
        duration: 100,
        output_item: {
            id: 'kubejs:faded_tainted_gold'
        }
    })
    event.custom({
        type: 'integrateddynamics:mechanical_drying_basin',
        input_item: {
            item: 'naturesaura:tainted_gold'
        },
        input_fluid: {
            id: 'minecraft:water',
            amount: 1000
        },
        duration: 40,
        output_item: {
            id: 'kubejs:faded_tainted_gold'
        }
    })

    //干净的虚空物质块 - 干燥盆
    event.custom({
        type: 'integrateddynamics:drying_basin',
        input_item: {
            item: 'kubejs:clean_void_matter_dust'
        },
        input_fluid: {
            id: 'minecraft:water',
            amount: 1000
        },
        duration: 40,
        output_item: {
            id: 'kubejs:clean_void_matter_block'
        }
    })
    event.custom({
        type: 'integrateddynamics:mechanical_drying_basin',
        input_item: {
            item: 'kubejs:clean_void_matter_dust'
        },
        input_fluid: {
            id: 'minecraft:water',
            amount: 1000
        },
        duration: 10,
        output_item: {
            id: 'kubejs:clean_void_matter_block'
        }
    })

    //粘土
    event.custom({
        type: 'integrateddynamics:mechanical_drying_basin',
        input_item: {
            item: 'minecraft:sand'
        },
        input_fluid: {
            id: 'minecraft:water',
            amount: 1000
        },
        output_item: {
            id: 'minecraft:clay'
        },
        duration: 40
    })

    //铜锭
    event.custom({
        type: 'integrateddynamics:mechanical_drying_basin',
        input_item: {
            item: 'kubejs:faded_tainted_gold',
        },
        input_fluid: {
            id: 'minecraft:lava',
            amount: 1000
        },
        output_item: {
            id: 'minecraft:copper_ingot'
        },
        duration: 40
    })
})
