StartupEvents.registry('item', event => {
    event.create('wood_brick')
        .food(food => {
            food.nutrition(0)
            food.saturation(0)
            food.alwaysEdible(true)
        })
    event.create('wood_residue')
    event.create('stone_stick')
    event.create('stone_gear')
    event.create('wood_gear')
    event.create('wire_mesh_filter')
    event.create('void_matter')
    event.create('clean_void_matter')
})

