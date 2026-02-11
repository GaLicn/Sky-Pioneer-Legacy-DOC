ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "     ",
            " AAA ",
            " AAA ",
            " AAA ",
            "     "
        ],
        "key": {
            "A": {
                "item": "minecraft:tall_grass"
            }
        },
        "result": {
            "id": "kubejs:wood_gear",
            "count": 9
        },
        "tier": 2
    })
})
