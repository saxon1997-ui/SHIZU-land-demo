const ItemSystem = (function() {
    // 物品品质配置      
    const ITEM_QUALITY = {
        ORANGE: { color: "#FF6A00", name: "传说" },
        PURPLE: { color: "#A020F0", name: "史诗" },
        BLUE:   { color: "#0078D7", name: "稀有" },
        GREEN:  { color: "#ffffff", name: "普通" }
    };

    // 物品数据库
    const ITEM_DATABASE = {
        // 武器
        "符文匕首": {
            type: "weapon",
            quality: ITEM_QUALITY.BLUE,
            power: 10,
            image: "images/items/dagger1.png",
            description: "刻有古老符文的匕首，对恶灵类生物造成120%伤害",
            effect: {
                type: "damageMultiplier",
                target: "evil",
                multiplier: 1.2
            },
            sellGold: 20, 
        },
        "金色符文匕首": {
            type: "weapon",
            quality: ITEM_QUALITY.PURPLE,
            power: 15,
            image: "images/items/dagger2.png",
            description: "刻有古老符文的匕首，对恶灵类生物造成150%伤害",
            effect: {
                type: "damageMultiplier",
                target: "evil",
                multiplier: 1.5
            },
            sellGold: 50, 
        },
        "生锈短刀": {
            type: "weapon",
            quality: ITEM_QUALITY.GREEN,
            power: 5,
            image: "images/items/trash1.png",
            description: "路边捡的垃圾",
            sellGold: 1,
        },
        
        "简易长矛": {
            type: "weapon",
            quality: ITEM_QUALITY.GREEN,
            power: 5,
            image: "images/items/trash2.png",
            description: "自制的简易长矛",
            sellGold: 1,
        },
        //物品
        "绿宝石": {
            type: "item",
            quality: ITEM_QUALITY.PURPLE,
            image: "images/items/green_gem.png",
            description: "蕴含神秘能量的宝石，可以在某些关头救命，集齐五色宝石将有好事发生",
            sellGold: 500,
        },

        "红宝石": {
            type: "item",
            quality: ITEM_QUALITY.PURPLE,
            image: "images/items/red_gem.png",
            description: "蕴含神秘能量的宝石，可以增强属性,集齐五色宝石将有好事发生",
            sellGold: 500,
        },
        
        "黄宝石": {
            type: "item",
            quality: ITEM_QUALITY.PURPLE,
            image: "images/items/yellow_gem.png",
            description: "蕴含神秘能量的宝石，可以增强属性，集齐五色宝石将有好事发生",
            sellGold: 500,
        },

        "白纸契约": {
            type: "quest",
            quality: ITEM_QUALITY.ORANGE,
            image: "images/items/score.png",
            description: "来自古神的契约",
        },
        '黑纸契约': {
            type: "quest",
            quality: ITEM_QUALITY.ORANGE,
            image: "images/items/score.png",
            description: "来自魔神的契约",
        },
        "邪之印记": {
            type: "quest",
            quality: ITEM_QUALITY.ORANGE,
            image: "images/items/mark.png",
            description: "来自邪神的印记，代表祂对你的认可",
        },
        '指针': {
            type: "quest",
            quality: ITEM_QUALITY.GREEN,
            image: "images/items/compass.png",
            description: "一个神秘的指针，永远指向某个方向"
        },
        '打火石': {
            type: "item",
            quality: ITEM_QUALITY.GREEN,
            image: "images/items/stone.png",
            description: "一次性的生火道具",
            sellGold: 1,
        },
        "鹿皮": {
            type: "item",
            quality: ITEM_QUALITY.GREEN,
            image: "images/items/leather.png",
            description: "休息时额外恢复20生命值",
            sellGold: 1,
        },
        "魔核（小）": {
            type: "item",
            quality: ITEM_QUALITY.GREEN,
            image: "images/items/magic_core.png",
            description: "一个普通的魔核，可出售",
            sellGold: 20,
        },
        "魔核（中）": {
            type: "item",
            quality: ITEM_QUALITY.BLUE,
            image: "images/items/magic_core.png",
            description: "一个中型的魔核，可出售",
            sellGold: 100,
        },
        "初试者勋章": {
            type: "quest",
            quality: ITEM_QUALITY.BLUE,
            image: "images/items/medal1.png",
            description: "一块白色玉牌，象征着身份，也有一些妙用",
        },
    }
    const DEFAULT_ITEM_ICON = "images/items/default.png";
    function addItem(itemName, quantity = 1) {
        // 如果 itemName 是对象，提取 name 属性
        if (typeof itemName === 'object' && itemName.name) {
            itemName = itemName.name;
        }
        
        if (Array.isArray(itemName)) {
            itemName.forEach(item => addItem(item, quantity));
            return;
        }
    
        // 查找物品数据
        const itemData = ITEM_DATABASE[itemName];
        if (!itemData) {
            console.warn(`物品数据未找到：${itemName}`);
            return;
        }
    
        // 检查是否已经存在
        const existingItem = characterData.inventory.find(item => {
            if (typeof item === 'object' && item.name) {
                return item.name === itemName;
            }
            return item === itemName;
        });
    
        if (existingItem) {
            // 如果已经存在，增加数量
            if (typeof existingItem === 'object') {
                existingItem.quantity = (existingItem.quantity || 1) + quantity;
            }
        } else {
            // 新物品
            const newItem = {
                name: itemName,
                quantity: quantity,
                ...itemData
            };
            characterData.inventory.push(newItem);
        }
        updateCharacterPanel();
    }
    // 装备武器
    function equipWeapon(weaponName) {
        const weapon = ITEM_DATABASE[weaponName];
        if (!weapon) return;

        // 卸下当前武器
        if (characterData.weapon) {
            characterData.power -= characterData.weapon.power || 0;
        }

        // 装备新武器
        characterData.weapon = {
            name: weaponName,  // 添加名称属性
            ...weapon
        };

        characterData.inventory = characterData.inventory.filter(item => {
            if (typeof item === 'object') {
                return item.name !== weaponName;
            }
            return item !== weaponName;
        });
        
        characterData.power += weapon.power || 0;
        updateCharacterPanel();
    }

    function hasItem(itemName) {
        return characterData.inventory.some(item => {
            if (typeof item === 'object' && item.name) {
                return item.name === itemName;
            }
            return item === itemName;
        });
    }
    
    // 卸下武器
    function unequipWeapon() {
        if (!characterData.weapon) return;
        characterData.power -= characterData.weapon.power || 0;
        // 改为调用addItem方法
        ItemSystem.addItem(characterData.weapon.name);
        characterData.weapon = null;
        updateCharacterPanel();
    }

    // 更新物品显示
    function updateInventoryDisplay() {
        const container = document.getElementById("inventory-container");
        container.innerHTML = characterData.inventory
            .map(item => createItemElement(item))
            .join("");
    }

    // 创建物品DOM元素
    function createItemElement(itemName) {
        // 如果 itemName 是对象，提取 name 属性
        if (typeof itemName === 'object' && itemName.name) {
            itemName = itemName.name;
        }
    
        // 查找物品数据
        const item = ITEM_DATABASE[itemName];
        if (!item) {
            console.warn(`物品数据未找到：${itemName}`);
            return `
                <div class="inventory-item" 
                     style="border-color: #666; color: #fff;">
                    <span class="item-name">${itemName}</span>
                    <span class="item-quantity">x1</span>
                </div>
            `;
        }
    
        // 确保 quality 存在，否则使用默认值
        const quality = item.quality || ITEM_QUALITY.GREEN;
        const borderColor = quality.color || "#666";
    
        // 查找背包中的物品实例
        const inventoryItem = characterData.inventory.find(i => {
            if (typeof i === 'object' && i.name) {
                return i.name === itemName;
            }
            return i === itemName;
        });
        
        const quantity = (inventoryItem && inventoryItem.quantity) || 1;
        const itemIcon = item.image || DEFAULT_ITEM_ICON;
        return `
            <div class="inventory-item" 
                style="border-color: ${borderColor}"
                data-item="${itemName}"
                onclick="showItemDetail('${itemName}')">
                <img src="${itemIcon}" class="item-icon" onerror="this.src='${DEFAULT_ITEM_ICON}'">
                <span class="item-name">${itemName}</span>
                <span class="item-quantity">x${quantity}</span>
                ${item.type === 'weapon' ? 
                `<button onclick="ItemSystem.equipWeapon('${itemName}')">装备</button>` : ''}
            </div>
        `;
    }
    function showDictionary() {
        const panel = document.getElementById('dictionary-panel');
        panel.classList.add('show');
        updateDictionaryDisplay();
    }
    
    // 隐藏物品词典
    function hideDictionary() {
        document.getElementById('dictionary-panel').classList.remove('show');
    }
    
    // 更新词典显示
    function updateDictionaryDisplay() {
        const container = document.getElementById('dictionary-items-container');
        container.innerHTML = '';
        
        // 添加所有已拥有的物品
        characterData.inventory.forEach(item => {
            const itemName = typeof item === 'object' ? item.name : item;
            const itemData = ITEM_DATABASE[itemName];
            if (itemData) {
                const itemElement = document.createElement('div');
                itemElement.className = 'inventory-item';
                itemElement.style.borderColor = itemData.quality?.color || "#666";
                itemElement.innerHTML = `
                    <img src="${itemData.image}" class="item-icon">
                    <span class="item-name">${itemName}</span>
                `;
                itemElement.onclick = () => showItemDetail(itemName);
                container.appendChild(itemElement);
            }
        });
        
        // 添加所有武器
        if (characterData.weapon) {
            const weaponElement = document.createElement('div');
            weaponElement.className = 'inventory-item';
            weaponElement.style.borderColor = characterData.weapon.quality?.color || "#666";
            weaponElement.innerHTML = `
                <img src="${characterData.weapon.image}" class="item-icon">
                <span class="item-name">${characterData.weapon.name}</span>
            `;
            weaponElement.onclick = () => showItemDetail(characterData.weapon.name);
            container.appendChild(weaponElement);
        }
    }
    
    // 显示物品详情
    function showItemDetail(itemName) {
        const item = ITEM_DATABASE[itemName];
        if (!item) return;
        
        // 正确获取详情面板元素
        const detailPanel = document.getElementById('item-detail-panel');
        if (!detailPanel) {
            console.error('详情面板元素未找到！');
            return;
        }
    
        // 清空面板内容（防止重复添加）
        detailPanel.innerHTML = `
            <h3 id="item-detail-name">${itemName}</h3>
            <img id="item-detail-icon" class="item-icon" src="${item.image}">
            <p id="item-detail-description">${item.description}</p>
            <p id="item-detail-quality">品质: ${item.quality?.name || '普通'}</p>
            <p id="item-detail-price">${item.sellGold ? `售价: ${item.sellGold}金币` : '不可售卖'}</p>
            <button onclick="ItemSystem.hideItemDetail()">关闭</button>
        `;
    
        // 设置边框颜色
        detailPanel.style.borderColor = item.quality?.color || ITEM_QUALITY.GREEN.color;
        
        // 显示/隐藏面板
        document.getElementById('dictionary-items-container').style.display = 'none';
        detailPanel.style.display = 'block';
    }
    
    // 隐藏物品详情
    function hideItemDetail() {
        const detailPanel = document.getElementById('item-detail-panel');
        if (detailPanel) {
            detailPanel.style.display = 'none';
            detailPanel.style.borderColor = '';
        }
        const itemsContainer = document.getElementById('dictionary-items-container');
        if (itemsContainer) {
            itemsContainer.style.display = 'block';
        }
    }

    return {
        ITEM_DATABASE,
        equipWeapon,
        unequipWeapon,
        applyWeaponEffects,
        updateInventoryDisplay,
        addItem,
        createItemElement,
        hasItem,
        showDictionary,
        hideDictionary,
        showItemDetail,
        hideItemDetail,
        updateDictionaryDisplay
    };
})();