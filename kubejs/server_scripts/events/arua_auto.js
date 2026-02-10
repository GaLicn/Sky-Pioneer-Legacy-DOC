BlockEvents.rightClicked(event => {
    const { block, item, level } = event

    if (level.isClientSide()) return
    if (block.id !== 'kubejs:clean_void_matter_block') return
    if (item.id !== 'kubejs:aura_wand') return

    // 消耗方块
    block.set('minecraft:air')

    // 为区块添加灵气
    AuraChunk.storeAura(level, block.pos, 20000)//前期平均每tick500
})