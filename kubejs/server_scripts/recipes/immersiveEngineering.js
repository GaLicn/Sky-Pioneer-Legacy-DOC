ServerEvents.recipes(event => {
    //轻型工程块
    event.custom({
        type: 'immersiveengineering:blueprint',
        category: 'components',
        inputs: [
            {
                basePredicate: { item: 'immersiveengineering:sheetmetal_iron' },
                count: 4
            },
            {
                item: 'minecraft:copper_ingot',
            },
            {
                basePredicate: { item: 'immersiveengineering:component_iron' },
                count: 4
            }
        ],
        result: {
            id: 'immersiveengineering:light_engineering',
            count: 4
        }
    })

    //红石工程块
    event.custom({
        type: 'immersiveengineering:blueprint',
        category: 'components',
        inputs: [
            {
                basePredicate: { item: 'immersiveengineering:sheetmetal_iron' },
                count: 4
            },
            {
                item: 'minecraft:copper_ingot',
            },
            {
                basePredicate: { item: 'minecraft:redstone' },
                count: 4
            }
        ],
        result: {
            id: 'immersiveengineering:rs_engineering',
            count: 4
        }
    })

    //重型工程块
    event.custom({
        type: 'immersiveengineering:blueprint',
        category: 'components',
        inputs: [
            {
                basePredicate: { item: 'immersiveengineering:sheetmetal_steel' },
                count: 4
            },
            {
                item: 'minecraft:gold_ingot',
            },
            {
                basePredicate: { item: 'immersiveengineering:component_steel' },
                count: 4
            }],
        result: {
            id: 'immersiveengineering:heavy_engineering',
            count: 4
        }
    })
})
