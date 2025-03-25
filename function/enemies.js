const initialBattleScenes = {
    wolves: {
        enemies: Array.from({ length: 4 }, () => ({ hp: 20, power: 10 })),
        kind:'beast',
        reward: {
            power:2,
            gold: 5,
        }
    },
    bandits: {
        enemies: Array.from({ length: 2 }, () => ({ hp: 50, power: 5 })),
        reward: {
            gold: 100,
            item:'盗贼弯刀'
        }
    },
    knight: {
        enemies: [{ hp: 200, power: 10 }],
        reward: {
            gold: 50,
            item:'骑士铠甲'
        }
    },
    Vallage_monk_1: {
        enemies: [{ hp: 30, power: 10 }],
        reward: {
            power:1,
            gold: 20,
            item:'红宝石'
        }
    },
    Vallage_monk_2: {
        enemies: Array.from({ length: 2 }, () => ({ hp: 50, power: 15 })),
        reward: {
            power:2,
            gold:40,
            item:'红宝石'
        }
    },
    Vallage_monster_1: {
        enemies: [{ hp: 40, power: 15 }],
        reward: {
            power:1,
            item:'魔核（小）'
        }
    },
    Vallage_monster_2: {
        enemies: Array.from({ length: 2 }, () => ({ hp: 40, power: 15 })),
        reward: {
            power:2,
            item:'魔核（小）'
        }
    },
    Forest_monster_1: {
        enemies: Array.from({ length: 5 }, () => ({ hp: 35, power: 10 })),
        reward: {
            power:5,
            hp:100,
            item:['魔核（中）','初试者勋章']
        }
    },
    Temper_1_1: {
        enemies:[{ hp: 150, power: 20 }],
        reward: {
            power:2,
            gold: 30,
            item:'魔核（中）'
        }
    }
};

// 获取初始战斗场景的函数
function getInitialBattleScenes() {
    return JSON.parse(JSON.stringify(initialBattleScenes)); // 深拷贝初始数据
}

let battleScenes = getInitialBattleScenes();