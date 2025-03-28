window.Prologue = {
    name: 'Prologue',
    characterData: { 
        hp: 100, 
        power: 5,
        gold: 0,
        weapon: [],
        inventory: ['绿宝石'],
    },
    petData: {
        hp: 0,
        power: 0
    },
    // 初始化章节内容
    initialize: function() {
        MusicManager.playBGM('prologue'); 
        // 设置章节标题
        setChapterTitle('序&emsp;章&emsp;极速坠落');
        changeBackground('Prologue');
        // 设置初始内容
        const initialHTML = `
            <p>等你清醒的时候，你绝望地发现你正在空中快速坠落</p>
            <p>留给你思考的时间并不多了...</p>
            <button class="choice-btn" onclick="handleChoice('c1')">尽量伸展四肢延缓坠落时间，并仔细观察下方沉寂的大陆</button>
            <button class="choice-btn" onclick="handleChoice('c2')">大声呼叫“系统”，试图领取穿越礼包</button>
            <button class="choice-btn" onclick="handleChoice('c3')">闭上眼睛</button>
            <button class="choice-btn" onclick="handleChoice('c4')">摸索你的上衣口袋</button>
        `;
        const content = document.getElementById('content');
        content.innerHTML = initialHTML;
        updateCharacterPanel();
    },
    // 处理选择
    handleChoice: function(choice) {
        const content = document.getElementById('content');

        if (choice === 'c1') {
            content.innerHTML = `
                <p>你努力睁开双眼，剧烈的风让你涕泗横流</p>
                <p>你似乎看清了下方...</p>
                <button class="choice-btn" onclick="handleChoice('c11')">努力飞向雪地</button>
                <button class="choice-btn" onclick="handleChoice('c12')">努力飞向森林</button>
                <button class="choice-btn" onclick="handleChoice('c13')">努力飞向平原</button>
            `;
        } else if (choice === 'c2') {
            content.innerHTML = `
                <p>没有任何东西回应你，场面一度十分尴尬</p>
                <p>你坠落的速度还在加快，你已经完全无法睁开双眼</p>
                <button class="choice-btn" onclick="handleChoice('c3')">闭上眼睛</button>
                <button class="choice-btn" onclick="handleChoice('c4')">摸索上衣口袋</button>
            `;
        } else if (choice === 'c3') {
            content.innerHTML = `
                <p>猛烈的风在你耳边狂啸，你很快陷入一片黑暗之中...</p>
                <button class="choice-btn" onclick="endGame()">结束游戏</button>
            `;
        } else if (choice === 'c4') {
            content.innerHTML = `
                <p>你从你的上衣口袋中摸出一块绿色宝石...</p>
                <p>你突然福至心灵，有了应对之策...</p>
                <p>此刻的恐惧，赋予你从未有过的力量...</p>
                <button class="choice-btn" onclick="handleChoice('c41')">你大声吼叫：宝石，请赐予我力量！</button>
                <button class="choice-btn" onclick="handleChoice('c42')">你用尽全力，想要捏碎宝石！</button>
            `;
        } else if (choice === 'c11') {
            changeBackground('snow');
            content.innerHTML = `
                <p>你祈祷坠落进松软的雪地，你只有一次机会调整体态了</p>
                <button class="choice-btn" onclick="handleChoice('c111')">你舒展身体，选择使用平躺的姿势着陆</button>
                <button class="choice-btn" onclick="handleChoice('c112')">你蜷缩身体，选择使用侧卧的姿势着陆</button>
                <button class="choice-btn" onclick="handleChoice('c113')">你双手环抱，选择使用直立的姿势着陆</button>
                <button class="choice-btn" onclick="handleChoice('c114')">你双手伸直，选择使用跳水的姿势着陆</button>
            `;
        } else if (choice === 'c12') {
            content.innerHTML = `
                <p>你寄希望于树枝能缓冲你坠落的势头</p>
                <p>但每条树枝都像铁棍一般狠狠地抽打在你的身上</p>
                <p>剧烈的疼痛让你反复晕厥，最后你落到了土地上</p>
                <p>在你逐渐模糊的视线中，你看到了一只不知名的野兽向你缓缓走来</p>
                <p>它喘着热气，唾液从尖牙垂落...</p>
                <button class="choice-btn" onclick="endGame()">结束游戏</button>
            `;
        } else if (choice === 'c13') {
            content.innerHTML = `
                <p>我说白了，选择在平原着陆，直接重开吧</p>
                <p>（指游戏）</p>
                <button class="choice-btn" onclick="endGame()">结束游戏</button>
            `;
        } else if (choice === 'c41') {
            content.innerHTML = `
                <p>你的声音响彻天际，但回应你的只有无声拥抱你的陆地...</p>
                <button class="choice-btn" onclick="endGame()">结束游戏</button>
            `; 
        } else if (choice === 'c42') {
            content.innerHTML = `
                <p>一股刺目的光芒从你手上爆开，你下意识地闭上双眼</p>
                <p>但你惊奇地发现，坠落感消失了，随之消失的还有耳边的风</p>
                <p>睁开眼，你发现你被光芒包裹着，你竟然悬浮在了空中</p>
                <p>你眼前一花，回过神来，你发现你站在一片雪原之中</p>
                <p>寒风刺骨，你注意到很远的半山腰上有座木屋</p>
                <button class="choice-btn" onclick="handleChoice('c421')">前往木屋</button>
                <button class="choice-btn" onclick="handleChoice('c422')">认为危险，远离木屋</button>
            `;
        } else if (choice === 'c111') {
            content.innerHTML = `
                <p>由于你选择了最正确的姿势，尽量增大了受力面积</p>
                <p>你竟然安全着陆，但巨大的冲击使你一阵眩晕</p>
                <p>你在深深的雪坑中躺了良久</p>
                <p>松软蓬松的雪被你压实，如水泥般坚硬</p>
                <p>你花了很长时间才从雪坑中爬出来</p>
                <p>你注意到很远的半山腰上有座木屋</p>
                <button class="choice-btn" onclick="handleChoice('c1111')">前往木屋</button>
                <button class="choice-btn" onclick="handleChoice('c1112')">环顾四周</button>
                <button class="choice-btn" onclick="handleChoice('c1113')">认为危险，远离木屋</button>
                <button class="choice-btn" onclick="handleChoice('c1114')">在原地休息</button>
            `;
        } else if (choice === 'c112') {
            content.innerHTML = `
                <p>由于你选择了正确的姿势，保护了重要器官，你没有立刻晕厥</p>
                <p>但剧痛传遍全身，你在深深的雪坑中躺了良久</p>
                <p>松软蓬松的雪被你压实，如水泥般坚硬</p>
                <p>你花了很长时间才从雪坑中爬出来，你眼前逐渐发黑</p>
                <button class="choice-btn" onclick="handleChoice('c1121')">你开始摸索全身，希望找到有用的东西</button>
                <button class="choice-btn" onclick="handleChoice('c1122')">你认准一个方向，拖着疲惫的身体往前走</button>
                <button class="choice-btn" onclick="handleChoice('c1123')">你准备在原地休息，再做打算</button>
                <button class="choice-btn" onclick="handleChoice('c1124')">你觉得疼痛难忍，开始后悔选择在雪地着陆</button>
            `;
        } else if (choice === 'c113' || choice === 'c114') {
            content.innerHTML = `
                <p>由于你选择了完全错误的姿势，你甚至没有感觉到疼痛</p>
                <p>就陷入了无尽的黑暗之中...</p>
                <button class="choice-btn" onclick="endGame()">结束游戏</button>
            `;
        } else if (choice === 'c422') {
            content.innerHTML = `
                <p>你在茫茫无边的雪地中走着，疼痛和疲惫冲刷着你</p>
                <p>你感觉寒风刺骨，暴风雪似乎在酝酿</p>
                <p>你有些后悔，与其漫无目的地走</p>
                <p>还不如目标明确，直接前往木屋</p>
                <p>就在你陷入茫然之时,你福至心灵</p>
                <p>觉得自己踩在什么东西上面</p>
                <button class="choice-btn" onclick="handleChoice('c4221')">你准备用最后的力气刨开脚下的雪地</button>
                <button class="choice-btn" onclick="handleChoice('c4222')">你准备原地休息</button>
            `;
        } else if (choice === 'c1111' || choice === 'c11121' || choice === 'c1122' || choice === 'c421') {
            changeBackground('cabin');
            content.innerHTML = `
                <p>在寒风中，天色渐暗。你来到了一座木屋前,发现并没有人活动的痕迹</p>
                <p>进屋后你更是验证了自己想法，木屋中没有任何食物</p>
                <p>但幸运的是，木屋内留有打火石以及柴火，木床上甚至还有一张鹿皮毯</p>
                <button class="choice-btn" onclick="handleChoice('c11111')">疲惫感一阵阵袭来，你瘫倒在那张暖和的毯子上</button>
                <button class="choice-btn" onclick="handleChoice('c11112')">强忍着困意，将壁炉点燃</button>
                <button class="choice-btn" onclick="handleChoice('c11113')">危机感涌上心头，你选择裹上鹿皮离开木屋</button>
                <button class="choice-btn" onclick="handleChoice('c11114')">环视木屋，想寻找一些有用的物品</button>
            `;
        } else if (choice === 'c1112') {
            content.innerHTML = `
                <p>你环顾四周，你发现不远处有个东西在反光</p>
                <p>你快步上前，你发现了一袋金币</p>
                <p>但疲惫又寒冷的你来不及多思考</p>
                <p>你没有仔细清点，将金币袋子挂在腰间</p>
                <p>同时你注意到你上衣口袋有枚绿色宝石</p>
                <button class="choice-btn" onclick="handleChoice('c11121')">前往木屋</button>
                <button class="choice-btn" onclick="handleChoice('c11122')">认为危险，远离木屋</button>
            `;
        } else if (choice === 'c1113' ) {
            content.innerHTML = `
                <p>你在茫茫无边的雪地中走着，疼痛和疲惫冲刷着你</p>
                <p>你感觉寒风刺骨，暴风雪似乎在酝酿</p>
                <button class="choice-btn" onclick="handleChoice('c11131')">你无法再前行，准备就地休息</button>
                <button class="choice-btn" onclick="handleChoice('c11132')">你摸索全身，希望找到有用的东西</button>
            `;
        } else if (choice === 'c1114' || choice === 'c1123' ) {
            content.innerHTML = `
                <p>你找了块大石头，清空了上面的积雪</p>
                <p>坐在石头上，疲惫感逐渐袭来</p>
                <p>你并没有抵抗睡意，沉沉地睡去了</p>
                <p>在梦里，有人焦急地说，暴风雪就要来了</p>
                <p>可你并没有感觉到寒冷，像是沐浴在春风中...</p>
                <button class="choice-btn" onclick="endGame()">结束游戏</button>
            `;
        } else if (choice === 'c1121' || choice === 'c11132') {
            content.innerHTML = `
                <p>你在你的上衣口袋中找到一枚绿色宝石</p>
                <p>这是你身上唯一的物品，它散发着细微的光</p>
                <p>你心里升起一股明悟，你知道你应该怎么做了</p>
                <button class="choice-btn" onclick="handleChoice('c11211')">你用尽全身力气，捏碎宝石</button>
            `;
        } else if (choice === 'c1124' ) {
            content.innerHTML = `
                <p>后悔的情绪在你心中涌动</p>
                <p>你心里升起一股明悟，你知道你应该怎么做了</p>
                <button class="choice-btn" onclick="endGame()">结束游戏</button>
            `;
        } else if (choice === 'c11111') {
            content.innerHTML = `
                <p>在梦中，你听到了微弱的声音一直重复：来...找...我。你只觉得莫名其妙</p>
                <p>你想要寻找声音的来源，但只觉得眼前越来越亮。你醒来了</p>
                <p>你活动了一下僵硬的身体，你这才发现，不远处的桌子上有一张白纸</p>
                <button class="choice-btn" onclick="handleChoice('c111111')">你准备拿起那张纸看看</button>
                <button class="choice-btn" onclick="handleChoice('c111112')">一股厌恶感涌上心头，导致你并不想触碰白纸</button>
            `;
        } else if (choice === 'c11112') {
            content.innerHTML = `
                <p>点燃炉火你感到十分暖和，安然睡去</p>
                <p>第二天，你醒来了，因为炉火的原因，你睡得很好</p>
                <p>你发现不远处的桌子上有一张白纸</p>
                <button class="choice-btn" onclick="handleChoice('c111121')">你准备拿起那张纸看看</button>
                <button class="choice-btn" onclick="handleChoice('c111122')">你感觉到不对，但也准备拿起来看看</button>
            `;
        } else if (choice === 'c11113') {
            content.innerHTML = `
                <p>虽然你裹着鹿皮出发，但气温愈发降低</p>
                <p>你走了很久，也没找到合适的落脚点</p>
                <p>因为缺乏户外生存知识，你没注意到暴风雪正在酝酿</p>
                <p>你的脚印，很快也被风雪掩盖了</p>
                <p>被一同掩盖的，还有你</p>
                <button class="choice-btn" onclick="endGame()">结束游戏</button>
            `;
        } else if (choice === 'c11114') {
            content.innerHTML = `
                <p>一番寻找后，你发现木屋中没有任何别的东西</p>
                <p>你也精疲力尽，你就这样躺在床上睡去了</p>
                <p>你就这样躺在床上睡去了</p>
                <p>在梦中，你听到了微弱的声音一直重复：来...找...我</p>
                <p>你想要寻找声音的来源，但只觉得眼前越来越亮。你醒来了</p>
                <p>你醒来后，活动了下僵硬的身体，恐惧袭上心头</p>
                <p>因为不远处的桌子上有一张白纸</p>
                <p>而你很确定，昨天桌上并没有这张纸</p>
                <button class="choice-btn" onclick="handleChoice('c111141')">你感觉到万分不对，你只想逃离这里</button>
                <button class="choice-btn" onclick="handleChoice('c111142')">你感觉到不对，但你准备拿起来看看</button>
            `;
        } else if (choice === 'c11122' ) {
            content.innerHTML = `
                <p>你在茫茫无边的雪地中走着，疼痛和疲惫冲刷着你</p>
                <p>你感觉寒风刺骨，暴风雪似乎在酝酿</p>
                <p>你有些后悔，与其漫无目的地走</p>
                <p>还不如目标明确，直接前往木屋</p>
                <p>就在你陷入茫然之时，你胸口的两枚宝石突然发热</p>
                <p>你福至心灵，觉得自己踩在什么东西上面</p>
                <button class="choice-btn" onclick="handleChoice('c111221')">你准备用最后的力气刨开脚下的雪地</button>
                <button class="choice-btn" onclick="handleChoice('c111223')">你的第六感告诉你，你可以捏碎绿色宝石</button>
            `;
        } else if (choice === 'c11131' || choice === 'c4222') {
            content.innerHTML = `
                <p>可能你心里也清楚，在此地休息意味着放弃</p>
                <p>很快你就进入梦中，在梦里，你泡着热水澡</p>
                <p>还一边喝着温热可口的浓汤</p>
                <button class="choice-btn" onclick="endGame()">结束游戏</button>
            `;
        } else if (choice === 'c11211' || choice === 'c111222' || choice === 'c111223') {
            content.innerHTML = `
                <p>一股光芒从宝石中爆发而出，将你全身包裹</p>
                <p>暖意在你身上绽开，寒冷、疲惫、疼痛都随之消失</p>
                <p>你觉得你终于可以休息了，这种安心的感觉前所未有</p>
                <p>第二天，你在一个木屋中醒来</p>
                <p>你躺在鹿皮上，所以你没有任何不适感</p>
                <p>你发现，不远处的桌子上有一张白纸</p>
                <button class="choice-btn" onclick="handleChoice('c111111')">你准备拿起那张纸看看</button>
                <button class="choice-btn" onclick="handleChoice('c112111')">一股厌恶感涌上心头，导致你并不想触碰白纸</button>
            `;
        } else if (choice === 'c111112' || choice === 'c111141' || choice === 'c112111') {
            changeBackground('god');
            content.innerHTML = `
                <p>你将木屋中的鹿皮、打火石打包好，认为它们会有帮助</p>
                <p>你出发了，你愈发感觉到木屋很不对劲</p>
                <p>但其实你根本就不知道要去哪，以及你为什么来到这里</p>
                <p>正当你茫然无措时，在雪地里，一座石像耸立于你身前</p>
                <p>你根本没注意到你是怎么走到石像前的</p>
                <p>你的寒毛瞬间倒立，这座女神像使你一阵眩目</p>
                <p>而在神像之下，放着两张纸，一张黑色的，一张白色的</p>
                <button class="choice-btn" onclick="handleChoice('c1111121')">木屋中的就是白色的，你本来就没打算碰</button>
                <button class="choice-btn" onclick="handleChoice('c1111122')">你没有犹豫，拿起了黑色的纸</button>
            `;
        } else if (choice === 'c111111' || choice === 'c1112212' || choice === 'c111121' || choice === 'c111122' || choice === 'c111142') {
            content.innerHTML = `
                <p>你惊讶地发现，虽然纸上不是写的汉字，但是你依然能够理解</p>
                <p>“你好，旅人，欢迎来到始祖大陆，我相信到此为止你都在做正确的选择”</p>
                <p>“所以我决定和你签订契约”</p>
                <p>“我知道你对目前的一切都还混沌，但在信上我无法透露更多”</p>
                <p>“桌上有个指针，它会一直指引你，来找我吧，到时候这一切都将明了”</p>
                <button class="choice-btn" onclick="handleChoice('c1111111')">你有些不明所以，并不打算理会</button>
                <button class="choice-btn" onclick="handleChoice('c1111112')">你准备按照信中的指示，去寻找神秘人</button>
            `;
        } else if (choice === 'c111221' || choice === 'c4221') {
            content.innerHTML = `
                <p>你用尽全身力气，你惊喜地发现你挖出了一个地下室入口</p>
                <p>你没有任何选择，暴风雪已经来临，你只能打开板门，进入地下室</p>
                <p>让你更加惊喜的是，地下室的温度竟然非常属实</p>
                <p>虽然空间不大，但是并不闷，而且有床</p>
                <p>甚至还有照明的夜光石、肉干和水</p>
                <p>你没有考虑太多，开始了进食</p>
                <p>冷静下来的你，发现桌上有两张纸</p>
                <p>一张黑色，一张白色</p>
                <p>你的直觉告诉你，你只能触碰其中之一</p>
                <button class="choice-btn" onclick="handleChoice('c1112211')">潜意识告诉你，你应该选择黑色</button>
                <button class="choice-btn" onclick="handleChoice('c1112212')">白色代表纯洁，你选择白色</button>
            `;
        } else if (choice === 'c1111111' || choice === 'c1111112') {
            content.innerHTML = `
                <p>正当你打算放下这封信时，信突然自燃起来，你吓了一跳</p>
                <p>想要丢掉它，但它似乎黏住了你的手</p>
                <p>在你惊恐目光下，信在你的手里燃烧着</p>
                <p>但令你意外的是，你并没有任何灼烧之感,反而一股暖流充斥着你的身体</p>
                <p>突然，你发现你的视野里的左边多了一个东西</p>
                <p>穿越前酷爱网文的你，已经了然，这是你的属性面板!</p>
                <p>始祖大陆，你的正式冒险开始了！</p>
                <button class="choice-btn" onclick="handleChoice('d0')">开始冒险</button>
            `;
            const panel = document.getElementById('character-panel');
            panel.style.display = 'block';
            setTimeout(() => panel.classList.add('show'), 10);
        } else if (choice === 'c1111121' || choice === 'c1111122' || choice === 'c1112211') {
            content.innerHTML = `
                <p>你惊讶地发现，虽然纸上不是写的汉字，但是你依然能够理解</p>
                <p>“你好，旅人，欢迎来到始祖大陆，我相信到此为止你都在做正确的选择”</p>
                <p>“我理解这一切对你来说都还难以理解，但是我真的很需要你的帮助”</p>
                <p>“桌上有个指针，它会一直指引你，来找我吧，我将告诉你一切”</p>
                <p>“但是首先，请允许我给予你一些帮助”</p>
                <p>黑色的纸张在你手中化为灰烬，一股暖流充斥你的身体</p>
                <p>突然，你发现你的视野里的左边多了一个东西</p>
                <p>穿越前酷爱网文的你，已经了然，这是你的属性面板!</p>
                <p>始祖大陆，你的正式冒险开始了！</p>
                <button class="choice-btn" onclick="handleChoice('d0')">开始冒险</button>
            `;
            const panel = document.getElementById('character-panel');
            panel.style.display = 'block';
            setTimeout(() => panel.classList.add('show'), 10);
        }
        this.updateData(choice);
    },
    updateData: function(choice) {        
        switch(choice) {
            case 'c111': 
                characterData.hp -= 50;
                break;
            case 'c112': 
                characterData.hp -= 80;
                break;
            case 'c1112': 
                characterData.gold += 20;
                break;
            case 'c11111': 
            case 'c11114':
                characterData.hp += 30;
                break;
            case 'c11112': 
            case 'c111221':
            case 'c4221':
                characterData.hp += 50;
                break;    
            case 'c111223': 
            case 'c42':
            case 'c11211':
                removeItem('绿宝石');
                characterData.power += 2;
                characterData.hp += 50;
                break;
            case 'c1111111': 
            case 'c1111112':
                ItemSystem.addItem('白纸契约');
                ItemSystem.addItem('指针');
                characterData.power += 10;
                characterData.hp += 50;
                break;
            case 'c111112': 
            case 'c111141': 
            case 'c112111': 
                ItemSystem.addItem('鹿皮');
                ItemSystem.addItem('打火石');
                break;
            case 'c1111122':
            case 'c1111121':
            case 'c1112211':
                ItemSystem.addItem('黑纸契约');
                ItemSystem.addItem('指针');
                characterData.power += 10;
                characterData.hp += 50;
                break;
        }
        updateCharacterPanel();
    }
}