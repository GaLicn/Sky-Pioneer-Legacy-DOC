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
})
