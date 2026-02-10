ServerEvents.recipes((event) => {
    const { naturesaura } = event.recipes
    //愉悦印记
    naturesaura.tree_ritual('naturesaura:token_joy', ['kubejs:wood_brick', '#minecraft:small_flowers', 'minecraft:torch', 'minecraft:apple', 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]', 'naturesaura:gold_leaf'], 'oak_sapling', 100)
    //自然祭坛
    naturesaura.tree_ritual('naturesaura:nature_altar', ['minecraft:stone', 'minecraft:stone', 'minecraft:stone', 'kubejs:wood_brick', 'naturesaura:token_joy', 'naturesaura:gold_leaf'], 'oak_sapling', 100)
    //锭模具催化剂
    naturesaura.tree_ritual('kubejs:ingot_mold_catalyst', ['kubejs:wood_brick', 'naturesaura:token_joy', 'naturesaura:gold_leaf', 'naturesaura:gold_brick', 'naturesaura:infused_stone'], 'oak_sapling', 100)
    //虚空物质锭
    naturesaura.altar('kubejs:void_matter_ingot', 'kubejs:crushed_void_matter', 1000, 40, 'kubejs:ingot_mold_catalyst')
    //干净的虚空物质锭
    naturesaura.altar('kubejs:clean_void_matter_ingot', 'kubejs:crushed_clean_void_matter', 1000, 40, 'kubejs:ingot_mold_catalyst')
    //灌注铁锭
    naturesaura.altar('naturesaura:infused_iron', 'kubejs:void_matter_ingot', 1000, 40, 'kubejs:ingot_mold_catalyst')
    //嬗变催化剂
    naturesaura.tree_ritual('naturesaura:conversion_catalyst', ['naturesaura:token_joy', 'naturesaura:gold_powder', 'naturesaura:gold_leaf', 'naturesaura:infused_stone', 'naturesaura:infused_iron_block', 'minecraft:iron_block'], 'oak_sapling', 100)
    //下界催化剂
    naturesaura.tree_ritual('kubejs:nether_catalyst', ['naturesaura:infused_iron_block', 'naturesaura:gold_leaf', 'minecraft:netherrack', 'naturesaura:sky_ingot_block', 'minecraft:nether_brick', 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:nether"}]'], 'oak_sapling', 200)
    //污染黄金
    naturesaura.altar('naturesaura:tainted_gold', 'kubejs:clean_void_matter_ingot', 1000, 40, 'kubejs:nether_catalyst')
    //干净的虚空物质粉末
    naturesaura.altar('kubejs:clean_void_matter_dust', 'kubejs:clean_void_matter', 1000, 40, 'naturesaura:crushing_catalyst')
    //慷慨之粉
    naturesaura.tree_ritual('32x naturesaura:effect_powder[naturesaura:effect_powder_data={effect:"naturesaura:ore_spawn"}]', ['naturesaura:gold_powder', 'naturesaura:gold_powder', 'minecraft:iron_block', 'minecraft:gold_block'], 'oak_sapling', 100)
    //虚空物质粉
    naturesaura.altar('kubejs:void_matter_dust', 'kubejs:void_matter', 1000, 40, 'naturesaura:crushing_catalyst')
    //粉碎催化剂
    naturesaura.tree_ritual('naturesaura:crushing_catalyst', ['naturesaura:infused_stone', 'minecraft:flint', 'naturesaura:gold_brick', 'minecraft:iron_ingot', 'minecraft:gold_ingot'], 'oak_sapling', 100)
    //羽毛
    naturesaura.altar('minecraft:feather', 'minecraft:egg', 1000, 20, 'naturesaura:conversion_catalyst')
    //愤怒印记
    naturesaura.tree_ritual('naturesaura:token_anger', ['minecraft:ender_pearl', 'naturesaura:gold_leaf', 'minecraft:gunpowder', 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:nether"}]', 'minecraft:ghast_tear', 'minecraft:spider_eye'], 'oak_sapling', 100)
    //悲伤印记
    naturesaura.tree_ritual('naturesaura:token_sorrow', ['minecraft:bone', 'naturesaura:gold_leaf', 'minecraft:rotten_flesh', 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]', 'minecraft:sugar', 'minecraft:ghast_tear'], 'oak_sapling', 100)
})