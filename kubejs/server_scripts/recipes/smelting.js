ServerEvents.recipes(event => {
    // 木砖烧制草木灰
    event.smelting('4x sky_pioneer_legacy:grass_ash', 'kubejs:wood_brick')
    // 烟熏炉烧制铁锭
    event.smoking('1x minecraft:iron_ingot', 'kubejs:faded_infused_iron')
})