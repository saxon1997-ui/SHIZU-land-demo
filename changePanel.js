// 更新宠物面板信息的函数
function updatePetPanel(petName, petHp, petPower) {
    // 获取宠物名称元素
    const petNameElement = document.getElementById('pet-name');
    if (petNameElement) {
        petNameElement.textContent = petName;
    }

    // 获取宠物生命值元素
    const petHpElement = document.getElementById('pet-hp-value');
    if (petHpElement) {
        petHpElement.textContent = petHp;
    }

    // 获取宠物战斗力元素
    const petPowerElement = document.getElementById('pet-power-value');
    if (petPowerElement) {
        petPowerElement.textContent = petPower;
    }

    // 更新全局的宠物数据
    petData.hp = petHp;
    petData.power = petPower;
}

// 更新角色面板的函数
function updateCharacterPanel() {
    console.log('Updating panel...');
    // 更新数值
    document.getElementById('hp-value').textContent = characterData.hp;
    document.getElementById('power-value').textContent = characterData.power; 
    document.getElementById('gold-value').textContent = characterData.gold;
    
    // 更新经验
    const weaponContainer = document.getElementById('weapon-container');
    weaponContainer.innerHTML = characterData.weapon
        .map(weapon => `<div class="weapon-item">${weapon}</div>`)
        .join('');
    
    // 更新物品
    const inventoryContainer = document.getElementById('inventory-container');
    inventoryContainer.innerHTML = characterData.inventory
        .map(item => `<div class="inventory-item">${item}</div>`)
        .join('');
}
// 移除物品的函数
function removeItem(itemName) {
    // 找到物品在数组中的索引
    const index = characterData.inventory.indexOf(itemName);
    if (index !== -1) {
        // 如果找到物品，从数组中移除
        characterData.inventory.splice(index, 1);
        // 更新面板
        updateCharacterPanel();
    }
}
//更换标题的函数
function setChapterTitle(title) {
    const titleElement = document.getElementById('chapter-title');
    // 修改为使用 innerHTML 解析 HTML 实体
    titleElement.innerHTML = title;
}

//更换宠物名称的函数
function changePetName(newName) {
    const petNameElement = document.getElementById('pet-name');
    if (petNameElement) {
    petNameElement.textContent = newName;
    }
}

// 隐藏宠物面板的函数
function hidePetPanel() {
    const petPanel = document.getElementById('pet-panel');
    petPanel.classList.remove('show');
}

function hidecharacterpanel() {
    const characterpanel = document.getElementById('character-panel');
    characterpanel.classList.remove('show');
}