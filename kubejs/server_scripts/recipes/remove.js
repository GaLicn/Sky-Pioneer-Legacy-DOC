// 移除配方
ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:furnace' }) //熔炉
    event.remove({ output: 'integrateddynamics:squeezer' })  //挤压机
    event.remove({ output: 'integrateddynamics:drying_basin' })//烘干池
    event.remove({ output: 'modular_machinery_reborn:inputbus_tiny' }) //微型输入总线
    event.remove({ output: 'modular_machinery_reborn:outputbus_tiny' }) //微型输出总线
    event.remove({ output: 'naturesaura:gold_fiber' })//闪耀纤维
    event.remove({ output: 'naturesaura:gold_powder' })//金叶粉
    event.remove({ output: 'naturesaura:wood_stand' })//木基座
    event.remove({ output: 'naturesaura:token_joy' })//愉悦印记
    event.remove({ output: 'naturesaura:nature_altar' })//自然祭坛
    event.remove({ output: 'naturesaura:gold_brick' })//黄金石砖
    event.remove({ id: 'naturesaura:altar/infused_iron' })//灌注铁锭
    event.remove({ output: 'minecraft:smoker' })//烟熏炉
    event.remove({ output: 'mekanism:basic_fluid_tank' })//基础流体储罐
    event.remove({ output: 'naturesaura:conversion_catalyst' })//嬗变催化剂
    event.remove({ output: 'naturesaura:calling_spirit' })//呼唤之魂
    event.remove({ output: 'naturesaura:offering_table' })//祭祀台
    event.remove({ output: 'naturesaura:tainted_gold' })//污染黄金
    event.remove({ output: 'naturesaura:effect_powder[naturesaura:effect_powder_data={effect:"naturesaura:ore_spawn"}]' })//慷慨之粉
    event.remove({ output: 'naturesaura:crushing_catalyst' })//粉碎催化剂
    event.remove({ output: 'naturesaura:aura_cache' })//灵气缓存
    event.remove({ output: 'actuallyadditions:placer' })//方块放置器
    event.remove({ output: 'clickmachine:click_machine' })//自动点击器
    event.remove({ output: 'modular_machinery_reborn:inputbus_small' })//小型输入总线
    event.remove({ output: 'modular_machinery_reborn:outputbus_small' })//小型输出总线
    event.remove({ output: 'naturesaura:token_anger' })//愤怒印记
    event.remove({ output: 'naturesaura:token_sorrow' })//悲伤印记
})
