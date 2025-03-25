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
    document.getElementById('global-death-count').textContent = globalDeathCount;

    // 更新武器
    const weaponContainer = document.getElementById('weapon-container');
    if (characterData.weapon) {
        weaponContainer.innerHTML = `
            <div class="inventory-item" style="border-color: ${characterData.weapon.quality?.color || '#666'}">
                <img src="${characterData.weapon.image}" class="item-icon">
                <span class="item-name">${characterData.weapon.name}</span>
                <button onclick="ItemSystem.unequipWeapon()">卸下</button>
            </div>
        `;
    } else {
        weaponContainer.innerHTML = '<p>未装备武器</p>';
    }
  

    // 使用新的物品显示方法
    ItemSystem.updateInventoryDisplay();
}   
 // 更新物品
function updateInventoryDisplay() {
        const container = document.getElementById('inventory-container');
        container.innerHTML = characterData.inventory
            .map(item => {
                // 检查是否是新的物品系统格式
                if (typeof item === 'object' && item.name) {
                    return ItemSystem.createItemElement(item.name);
                }
                // 处理旧格式的物品
                return ItemSystem.createItemElement(item);
            })
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

function changeBackground(scene) {
    const backgroundImages = {
        Prologue: 'url(images/background/prologue.jpg)',
        snow: 'url(images/background/snow.jpg)',
        cabin: 'url(images/background/cabin.jpg)',
        god: 'url(images/background/god.jpg)',
        cabin_inner: 'url(images/background/cabin_inner.jpg)',
        Chapter1: 'url(images/background/Chapter1.jpg)',
        Vallage: 'url(images/background/vallage.jpg)',
        Chapter1_2: 'url(images/background/Chapter1_2.jpg)',
        default: 'url(images/background/default.jpg)',
        jitan: 'url(images/background/jitan.png)',
        cabin2: 'url(images/background/cabin2.png)',
        shibei: 'url(images/background/shibei.png)',
        Thanks: 'url(images/background/Thanks.png)',
        temper: 'url(images/background/temper.png)',
    };
    const imagePath = backgroundImages[scene];
    if (imagePath) {
        document.body.style.backgroundImage = imagePath;
    } else {
        document.body.style.backgroundImage = backgroundImages.default;
    }
}