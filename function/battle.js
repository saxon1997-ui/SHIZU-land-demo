// 战斗函数
function fight(enemies) {
    let currentPlayerHP = characterData.hp;
    let currentPetHP = petData.hp; 

    for (let i = 0; i < enemies.length; i++) {
        let currentEnemyHP = enemies[i].hp;
        let damage = characterData.power;
        damage = ItemSystem.applyWeaponEffects(enemies, damage);
        
        console.log(`开始与新敌人战斗，敌人初始生命值: ${currentEnemyHP}`);

        while (currentPlayerHP > 0 && currentEnemyHP > 0) {
            // 玩家和宠物优先攻击血量最少的敌人
            let weakestEnemyIndex = getWeakestEnemyIndex(enemies);
            let weakestEnemy = enemies[weakestEnemyIndex];

            // 玩家攻击敌人
            weakestEnemy.hp -= damage;
            console.log(`玩家攻击敌人，敌人剩余生命值: ${weakestEnemy.hp}`);
            if (weakestEnemy.hp <= 0) {
                console.log('敌人被击败！');
                enemies.splice(weakestEnemyIndex, 1);
                if (enemies.length === 0) {
                    break;
                }
                weakestEnemy = enemies[getWeakestEnemyIndex(enemies)];
            }

            // 宠物攻击敌人
            if (currentPetHP > 0) {
                weakestEnemy.hp -= petData.power;
                console.log(`宠物攻击敌人，敌人剩余生命值: ${weakestEnemy.hp}`);
                if (weakestEnemy.hp <= 0) {
                    console.log('敌人被宠物击败！');
                    enemies.splice(weakestEnemyIndex, 1);
                    if (enemies.length === 0) {
                        break;
                    }
                    weakestEnemy = enemies[getWeakestEnemyIndex(enemies)];
                }
            }

            // 每只敌人轮流攻击
            for (let enemy of enemies) {
                let target;
                if (currentPetHP > 0) {
                    // 如果宠物还活着，随机选择攻击玩家或宠物
                    target = Math.random() < 0.5 ? 'player' : 'pet';
                } else {
                    // 如果宠物已经死亡，只能攻击玩家
                    target = 'player';
                }
            
                if (target === 'player') {
                    currentPlayerHP -= enemy.power;
                    console.log(`敌人攻击玩家，玩家剩余生命值: ${currentPlayerHP}`);
                    if (currentPlayerHP <= 0) {
                        console.log('玩家被击败！');
                        characterData.hp = currentPlayerHP;
                        break;
                    }
                } 
                
                else {
                    if (currentPetHP > 0) {
                        currentPetHP -= enemy.power;
                        console.log(`敌人攻击宠物，宠物剩余生命值: ${currentPetHP}`);
                        if (currentPetHP <= 0) {
                            console.log('宠物被击败！');
                        }
                    }
                }
            }
        }

        if (currentPlayerHP <= 0) {
            console.log("玩家战败！");
            return false;
        }
    }
    characterData.hp = currentPlayerHP;
    return true;
}

// 获取血量最少的敌人索引
function getWeakestEnemyIndex(enemies) {
    let weakestIndex = 0;
    for (let i = 1; i < enemies.length; i++) {
        if (enemies[i].hp < enemies[weakestIndex].hp) {
            weakestIndex = i;
        }
    }
    return weakestIndex;
}

    // 在战斗系统中应用武器特效
function applyWeaponEffects(enemies, damage) {
    const weapon = characterData.equippedWeapon;
    if (!weapon || !weapon.effect) return damage;

    // 村庄怪物双倍伤害
    if (weapon.effect.type === "damageMultiplier" && 
        enemies.kind.includes===weapon.effect.target) {
        return damage * weapon.effect.multiplier;
    }
    return damage;
}