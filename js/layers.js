addLayer("p", {
    name: "声望", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "p", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00FF00",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "声望", // Name of prestige currency
    baseResource: "点数", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal:膨胀资源层 static: 非膨胀资源层 使用时要加双引号
    exponent: 1, // Prestige currency exponent 初始值0.5
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
       
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    upgrades: {
        11:{ title: "",
         description: "首先，我要新建一个层级",
         cost:new Decimal(5),
        }, 
        12:{ title: "",
            description: "接着，我突然意识到一个问题",
            cost:new Decimal(5),
            unlocked(){return hasUpgrade("p",11)},  
           }, 
        13:{ title: "",
            description: "那就是，我能在受到健忘症的影响下做一个树吗？",
            cost:new Decimal(5),
            unlocked(){return hasUpgrade("p",12)},  
           },    
                                                                          
       },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "p: 进行声望重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
addLayer("a", {
    name: "声望", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "p", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked() { return true},
		points: new Decimal(0),
    }},
    color: "#00FF00",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "声望", // Name of prestige currency
    baseResource: "点数", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal:膨胀资源层 static: 非膨胀资源层 使用时要加双引号
    exponent: 1, // Prestige currency exponent 初始值0.5
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
       
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    upgrades: {
        11:{ title: "",
         description: "所以，我要新建一个层级",
         cost:new Decimal(4),
        }, 
        12:{ title: "",
            description: "于是我复制了模板",
            cost:new Decimal(4),
            unlocked(){return hasUpgrade("a",11)},      
           }, 
        13:{ title: "",
            description: "接着，我突然意识到一个问题",
            cost:new Decimal(4),
            unlocked(){return hasUpgrade("a",12)},  
           }, 
        14:{ title: "",
            description: "那就是，我能在受到健忘症的影响下做一个树吗？",
            cost:new Decimal(4),
            unlocked(){return hasUpgrade("a",13)},  
           },    
                                                                          
       },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "a: 进行声望重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("p",13)}
})
addLayer("b", {
    name: "声望", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "p", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked() { return true},
		points: new Decimal(0),
    }},
    color: "#00FF00",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "声望", // Name of prestige currency
    baseResource: "点数", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal:膨胀资源层 static: 非膨胀资源层 使用时要加双引号
    exponent: 1, // Prestige currency exponent 初始值0.5
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
       
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    upgrades: {
        11:{ title: "",
         description: "我选择新建一个层级",
         cost:new Decimal(3),
        }, 
        12:{ title: "",
            description: "于是我复制了模板",
            cost:new Decimal(3),
            unlocked(){return hasUpgrade("b",11)},      
           }, 
        13:{ title: "",
            description: "接着，我想做一个升级",
            cost:new Decimal(3),
            unlocked(){return hasUpgrade("b",12)},  
           }, 
        14:{ title: "",
            description: "我先写升级的标题",
            cost:new Decimal(0),
            unlocked(){return hasUpgrade("b",13)},  
           },    
        15:{ title: "点数膨胀",
            description: "",
            cost:new Decimal(3),
            unlocked(){return hasUpgrade("b",14)},  
           },     
        16:{ title: "",
            description: "然后是描述",
            cost:new Decimal(0),
            unlocked(){return hasUpgrade("b",15)},  
           },    
        17:{ title: "",
            description: "点数生产x2",
            cost:new Decimal(3),
            unlocked(){return hasUpgrade("b",16)},  
           },       
        18:{ title: "所以，我能在有健忘症的情况下做一个树吗（endgame）",
            description: "",
            cost:new Decimal(3),
            unlocked(){return hasUpgrade("b",17)},  
           },                                                                                                                                          
       },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "b: 进行声望重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("a",14)}
})