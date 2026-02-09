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

})