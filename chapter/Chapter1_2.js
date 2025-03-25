window.Chapter1_2 = {
    name: 'Chapter1_2',
    // 初始化章节内容
    initialize: function() {
        MusicManager.playBGM('chapter1_2'); 
        // 设置章节标题
        setChapterTitle('第一章&emsp;藤蔓森林');
        changeBackground('Chapter1_2');
        // 设置初始内容
        const initialHTML = `
            <p>很快，你发现了一个废弃营地</p>
            <p>在这里你可以好好休息了</p>
            <button class="choice-btn" onclick="handleChoice('b1')">继续出发</button>
            <button class="choice-btn" onclick="handleChoice('b2')">休息并存档</button>
        `;
        const content = document.getElementById('content');
        content.innerHTML = initialHTML;
        updateCharacterPanel();
    },
    handleChoice: function(choice) {
        const content = document.getElementById('content');
        if (choice === 'b1') {
            content.innerHTML = `
                <p>你像是有什么急事要急着走</p>
                <p>这也能忍住不存档你也是个神人了</p>
                <p>因为长时间得不到休息</p>
                <p>你注意到你的生命值降低了</p>
                <p>经过一夜跋涉之后，你来到一座神庙前</p>
                <p>神庙被茂密的植被覆盖着，两侧的树木直通天际</p>
                <p>你变换方位，指针一直指向神庙</p>
                <p>虽然神庙透露出不详的气息</p>
                <p>但你明白，为了弄清真相，你只能继续前进</p>
                <button class="choice-btn" onclick="handleChoice('b11')">走到神庙前</button>
            `;
        } else if (choice === 'b2') {
            saveGameData()
            content.innerHTML = `
                <p>你一觉睡到了太阳高照</p>
                <p>收拾好行囊后，你又出发了</p>
                <p>经过一天跋涉之后，你来到一座神庙前</p>
                <p>神庙被茂密的植被覆盖着，两侧的树木直通天际</p>
                <p>你变换方位，指针一直指向神庙</p>
                <p>虽然神庙透露出不详的气息</p>
                <p>但你明白，为了弄清真相，你只能去一探究竟</p>
                <p>还在你思考之时，一根藤蔓朝你刺来</p>
                <p>你大惊失色，完全反应不及</p>
                <p>好在那根藤蔓只是浅浅刺进你的手臂</p>
                <p>它带着你的血液又缩了回去</p>
                <p>突然，整个神庙像是活了过来</p>
                <button class="choice-btn" onclick="handleChoice('b11')">走到神庙前</button>
            `;
        } else if (choice === 'b12') {
            changeBackground('temper')
            content.innerHTML = `
                <p>当你进入神庙后，藤蔓又将入口封闭了</p>
                <p>不过你并未在意</p>
                <p>你明白你只需要在意眼前的挑战</p>
                <p>你注意到墙上有六个暗淡无光的铭文</p>
                <p>你理解了，接下来还有6个关卡要闯</p>
                <button class="choice-btn" onclick="handleChoice('b31')">进入下一个房间</button>
            `;
        } else if (choice === 'b31') {
            content.innerHTML = `
                <p>像是感受到了你的到来</p>
                <p>房间开始震颤起来，差点使你跌倒</p>
                <p>周围很快平静了下来，一个苍老的声音响起</p>
                <p>“百年过去，试炼者终于又出现了”</p>
                <p>“希望你能成功通过试炼，成为我们之中的一员”</p>
                <p>“我是这座塔的守护考核官春分”</p>
                <p>“第一关，非常简单，需要验证一下”</p>
                <p>“你的身体是否可以容纳战灵”</p>
                <p>“这是我们的特殊能力，是我们立足的根本”</p>
                <p>“来，把手放上来”</p>
                <p>话音未落，房间中缓缓升起一个石台</p>
                <button class="choice-btn" onclick="handleChoice('b32')">把手放上去</button>
            `;
        } else if (choice === 'b32') {
            if (petData.hp > 30) {
                content.innerHTML = `
                    <p>苍老的声音充满欣慰</p>
                    <p>“你有一个非常不错的战灵”</p>
                    <p>“你很不错，这个是奖励你的”</p>
                    <p>“前往下一关吧”</p>
                    <p>你惊喜的发现自己的战灵变强了</p>
                    <p>连忙弯腰致谢</p>
                    <button class="choice-btn" onclick="handleChoice('b33')">进入下一个房间</button>
                `;
            } else if (petData.hp <= 30 && petData.hp > 0) {
                content.innerHTML = `
                    <p>苍老的声音没有情绪</p>
                    <p>“看来你满足了要求”</p>
                    <p>“前往下一关吧”</p>
                    <button class="choice-btn" onclick="handleChoice('b33')">进入下一个房间</button>
                `;
            } else if ( petData.hp === 0) {
                content.innerHTML = `
                    <p>苍老的声音充满了失望</p>
                    <p>“你明明拥有资质，但还没有拥有战灵”</p>
                    <p>“一味逃避，难成气候”</p>
                    <p>“我想，你还是离开吧”</p>
                    <p>你不知道该说什么，正准备离开时</p>
                    <p>一根手臂粗的藤蔓朝你刺来</p>
                    <p>你来不及反应，瘫倒在地</p>
                    <button class="choice-btn" onclick="endGame()">游戏结束</button>
                `;
            }
        } else if (choice === 'b33') {
            content.innerHTML = `
                <p>进入下一个房间后，你发现依然有个石台</p>
                <p>考核官开口道：“第二关依然很简单”</p>
                <p>“我们在你降临之时，赐予你一颗绿色宝石”</p>
                <p>“想必你也知道其作用如何”</p>
                <p>“如果它还在你身上，就把他放在石台上”</p>
                <button class="choice-btn" onclick="handleChoice('b34')">走向石台</button>
            `;
        } else if (choice === 'b34') {
            if (ItemSystem.hasItem('绿宝石'))
                content.innerHTML = `
                    <p>石台上有一个缺口，刚好和宝石契合</p>
                    <p>你将宝石插入了缺口中</p>
                    <p>宝石竟然散发出了丝丝亮光</p>
                    <p>考核官的话语中充满了喜悦</p>
                    <p>“看来你依旧保留他，这个送你了”</p>
                    <p>“当你集齐五色宝石，会有好事发生”</p>
                    <p>石台缓缓张开，升起一颗外形相同的黄色宝石</p>
                    <p>你小心翼翼地收好两枚宝石</p>
                    <p>“接下来可以给你两条路走”</p>
                    <p>话音刚落，你面前打开了两道门</p>
                    <p>“力之试炼和心之试炼，你可以自由选择”</p>
                    <p>“不过接下来的路就要你自己走了”</p>
                    <button class="choice-btn" onclick="handleChoice('b41')">前往力之试炼</button> 
                    <button class="choice-btn" onclick="handleChoice('b42')">前往心之试炼</button>
                `;
            else {
                content.innerHTML = `
                    <p>石台上有一个缺口，刚好和宝石契合</p>
                    <p>但你心里清楚你已经使用了宝石</p>
                    <p>你只能和考官说你没有宝石</p>
                    <p>考核官的话语中充满了失望</p>
                    <p>“没有就算了，接下来可以给你两条路走”</p>
                    <p>话音刚落，你面前打开了两道门</p>
                    <p>“力之试炼和心之试炼，你可以自由选择”</p>
                    <p>“不过接下来的路就要你自己走了”</p>
                    <button class="choice-btn" onclick="handleChoice('b41')">前往力之试炼</button> 
                    <button class="choice-btn" onclick="handleChoice('b42')">前往心之试炼</button>
                `;
            }
        } else if (choice === 'b41') {
            content.innerHTML = `
                <p>你并不清楚力之试炼究竟是考核什么</p>
                <p>不过当你来到下一个房间时</p>
                <p>又看到了和神庙入口同样的五行符文</p>
                <p>但和之前不同的是，石碑上的文字多得咋舌</p>
                <p>“金木水火土，土木水金火”</p>
                <button class="choice-btn" onclick="PuzzleModule.initializePuzzle('power_1')">开始试炼</button>
            `;
        } else if (choice === 'b42') {
            content.innerHTML = `
                <p>你并不清楚力之试炼究竟是考核什么</p>
                <p>不过当你来到下一个房间时</p>
                <p>又看到了和神庙入口同样的五行符文</p>
                <p>石碑上同样有一句谜语</p>
                <p>“火克？，？生水，？克木”</p>
                <button class="choice-btn" onclick="PuzzleModule.initializePuzzle('mental_1')">开始试炼</button>
            `;
        } else if (choice === 'b411') {
            content.innerHTML = `
                <p>有些惊险，但仅仅是衣角微脏</p>
                <p>你前往了下一个房间，还有三个试炼等着你</p>
                <p>一进门，你就感觉到一股非常危险的气息</p>
                <p>你掏出武器严阵以待</p>
                <p>一股黑雾席卷而来，在你面前凝聚成人形</p>
                <p>你明白，战斗在所难免</p>
                <button class="choice-btn" onclick="handleChoice('b4111')">开始战斗</button>
            `;
        } else if (choice === 'b421') {
            content.innerHTML = `
                <p>略微的思考之后，你解开了谜题</p>
                <p>你前往了下一个房间，还有三个试炼等着你</p>
                <p>一进门，你就感觉到一股非常危险的气息</p>
                <p>你掏出武器严阵以待</p>
                <p>一股黑雾席卷而来，在你面前凝聚成人形</p>
                <p>你明白，战斗在所难免</p>
                <button class="choice-btn" onclick="handleChoice('b4211')">开始战斗</button>
            `;
        } else if (choice === 'b4111') {
            const { enemies, reward } = battleScenes['Temper_1_1'];
            let result = fight(enemies);
            if (result) {
                characterData.power += reward.power;
                characterData.gold += reward.gold;
                ItemSystem.addItem(reward.item);
                const content = document.getElementById('content');
                content.innerHTML = `
                    <p>黑影和你缠斗在了一起</p>
                    <p>一股力量从你身体里涌出</p>
                    <p>是你的战灵！你惊讶地发现</p>
                    <p>战灵不仅会帮你攻击敌人</p>
                    <p>还会为你承担部分伤害</p>
                    <p>很快，黑影招架不住你俩的攻击</p>
                    <p>被你们联手打散，你获得了提示</p>
                    <p>战斗胜利！你获得了战斗力加成：${reward.power}，金币：${reward.gold}，物品：${reward.item}</p>
                    <button class="choice-btn" onclick="handleChoice('b41111')">前往下一个房间</button>
                `;
            } else {
                if (ItemSystem.hasItem('绿宝石')) {
                    characterData.gold += reward.gold;
                    content.innerHTML = `
                    <p>黑影和你缠斗在了一起</p>
                    <p>一股力量从你身体里涌出</p>
                    <p>是你的战灵！你惊讶地发现</p>
                    <p>战灵不仅会帮你攻击敌人</p>
                    <p>但因为你之前负伤过多</p>
                    <p>你血流不止，你越来越力不从心</p>
                    <p>你突然想到你可以使用绿宝石</p>
                    <p>可当你捏碎它，期待中的绿光并没有出现</p>
                    <p>考核官的声音出现：弱者不配使用宝石</p>
                    <p>“看来你终究还是不配成为我们”</p>
                    <p>“再见了”</p>
                    <button class="choice-btn" onclick="endGame()">游戏结束</button>
                    <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
                    `;
                }
                else {
                content.innerHTML = `
                    <p>黑影和你缠斗在了一起</p>
                    <p>一股力量从你身体里涌出</p>
                    <p>是你的战灵！你惊讶地发现</p>
                    <p>战灵不仅会帮你攻击敌人</p>
                    <p>但因为你之前负伤过多</p>
                    <p>你血流不止，你越来越力不从心</p>
                    <p>你在最后，只听见了一声常常的叹息</p>
                    <button class="choice-btn" onclick="endGame()">游戏结束</button>
                    <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
                `;
                }
            }
        } else if (choice === 'b4211') {
            const { enemies, reward } = battleScenes['Temper_1_1'];
            let result = fight(enemies);
            if (result) {
                characterData.power += reward.power;
                characterData.gold += reward.gold;
                ItemSystem.addItem(reward.item);
                const content = document.getElementById('content');
                content.innerHTML = `
                    <p>黑影和你缠斗在了一起</p>
                    <p>一股力量从你身体里涌出</p>
                    <p>是你的战灵！你惊讶地发现</p>
                    <p>战灵不仅会帮你攻击敌人</p>
                    <p>还会为你承担部分伤害</p>
                    <p>很快，黑影招架不住你俩的攻击</p>
                    <p>被你们联手打散，你获得了提示</p>
                    <p>战斗胜利！你获得了战斗力加成：${reward.power}，金币：${reward.gold}，物品：${reward.item}</p>
                    <button class="choice-btn" onclick="handleChoice('b42111')">前往下一个房间</button>
                `;
            } else {
                if (ItemSystem.hasItem('绿宝石')) {
                    characterData.gold += reward.gold;
                    content.innerHTML = `
                    <p>黑影和你缠斗在了一起</p>
                    <p>一股力量从你身体里涌出</p>
                    <p>是你的战灵！你惊讶地发现</p>
                    <p>战灵不仅会帮你攻击敌人</p>
                    <p>但因为你之前负伤过多</p>
                    <p>你血流不止，你越来越力不从心</p>
                    <p>你突然想到你可以使用绿宝石</p>
                    <p>可当你捏碎它，期待中的绿光并没有出现</p>
                    <p>考核官的声音出现：弱者不配使用宝石</p>
                    <p>“看来你终究还是不配成为我们”</p>
                    <p>“再见了”</p>
                    <button class="choice-btn" onclick="endGame()">游戏结束</button>
                    <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
                    `;
                }
                else {
                content.innerHTML = `
                    <p>黑影和你缠斗在了一起</p>
                    <p>一股力量从你身体里涌出</p>
                    <p>是你的战灵！你惊讶地发现</p>
                    <p>战灵不仅会帮你攻击敌人</p>
                    <p>但因为你之前负伤过多</p>
                    <p>你血流不止，你越来越力不从心</p>
                    <p>你在最后，只听见了一声常常的叹息</p>
                    <button class="choice-btn" onclick="endGame()">游戏结束</button>
                    <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
                `;
                }
            }
        } else if (choice === 'b41111') {
            content.innerHTML = `
                <p>令你有些头大的是，这一关又是五行符文</p>
                <p>当你看到石碑上的文字时</p>
                <p>你沉默了，一时间你有点不想触摸试炼开始的按键</p>
                <p>“水火木土金，水金木水土”</p>
                <p>“土土金土火，水水木火金”</p>
                <button class="choice-btn" onclick="PuzzleModule.initializePuzzle('power_2')">开始试炼</button>
            `;
        } else if (choice === 'b42111') {
            content.innerHTML = `
                <p>令你有些头大的是，这一关又是五行符文</p>
                <p>上面写着谜语，但好像有些复杂</p>
                <p>“兄弟各持刀，夫妻互不容”</p>
                <p>“木匠独雕刻，卖与憨厚郎”</p>
                <button class="choice-btn" onclick="PuzzleModule.initializePuzzle('mental_2')">开始试炼</button>
            `;
        } else if (choice === 'b421111') {
            content.innerHTML = `
                <p>你有些不敢相信，原来自己想的是对的</p>
                <p>当你还在回味时，你来到了最后一个试炼房间</p>
                <p>你感受到气氛非常压抑</p>
                <p>这时，五个黑影出现在你的面前</p>
                <p>你明白,这是你必须要面对的挑战</p>
                <p>战灵感受到你的战意，从你身体里浮现</p>
                <button class="choice-btn" onclick="handleChoice('b5')">战斗！</button>
            `;
        } else if (choice === 'b5') {
            const { enemies, reward } = battleScenes['Forest_monster_1'];
            let result = fight(enemies);
            if (result) {
                characterData.power += reward.power;
                characterData.hp += reward.hp;
                ItemSystem.addItem(reward.item);
                const content = document.getElementById('content');
                content.innerHTML = `
                    <p>五条黑影和你缠斗在了一起</p>
                    <p>战斗异常凶险艰辛</p>
                    <p>你深知在单对多时不能雨露均沾战法</p>
                    <p>你和你的战灵心意相通</p>
                    <p>将一个黑影扑杀后再杀向下一个</p>
                    <p>最后，虽然你浑身是伤，血流一地</p>
                    <p>但你还是获得了最后的胜利</p>
                    <p>你获得了提示，你也通过了试炼！</p>
                    <p>战斗胜利！你获得了战斗力加成：${reward.power}，生命值：${reward.hp}，物品：${reward.item}</p>
                    <button class="choice-btn" onclick="handleChoice('b51')">收拾战利品</button>
                `;
            } else {
                content.innerHTML = `
                    <p>五条黑影和你缠斗在了一起</p>
                    <p>但因为你势力单薄</p>
                    <p>被围攻之后并没有太多招架能力</p>
                    <p>虽然你和战灵拼死扑杀了两个</p>
                    <p>但你们并不能应付更多了</p>
                    <p>你心有不甘地死去了...</p>
                    <p>（如果尝试多次仍无法通关建议在第一章开始时前往村庄）</p>
                    <button class="choice-btn" onclick="endGame()">游戏结束</button>
                    <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
                `;
            }
        } else if (choice === 'b51') {
            content.innerHTML = `
                <p>你把玩着手里的【初试者勋章】</p>
                <p>这是一个白玉腰牌，拿在手里温润丝滑</p>
                <p>上面刻着【初试者】</p>
                <p>当你还在品味这是什么含义之时</p>
                <p>一股黑雾飘出，凝聚成一位青袍老者</p>
                <p>老者的脸上露出了满意的笑容</p>
                <p>“你很不错，虽然你只是通过了第一层考核”</p>
                <p>“但你已经获得了我们的认可”</p>
                <p>“这个玉牌代表了身份，也有诸多妙用”</p>
                <p>“比如在【监查商会】中，任意购物可以打8折”</p>
                <p>“还有一些别的用处，想必你之后会知晓”</p>
                <p>“此间事了，你可以继续上路了”</p>
                <p>话音刚落，整座神庙都震动起来，露出了出口</p>
                <button class="choice-btn" onclick="handleChoice('b6')">离开</button>
            `;
        } else if (choice === 'b6') {
            document.addEventListener('keydown', function(e) {
                if (e.key.toLowerCase() === 'd') {
                    ItemSystem.showDictionary();
                }
            });
            content.innerHTML = `
                <p>正当你准备离开之时，你就听到一声 “咦？”</p>
                <p>“你等会，等会”老者的声音竟有些急促</p>
                <p>你有些茫然地回头看向他</p>
                <p>“你身上还有那位的气息，倒是老夫眼拙了”</p>
                <p>“这样，这个给你，算做是老夫的投资”</p>
                <p>只见他伸手一点，一个光球从他手上浮现</p>
                <p>光球从他指尖飞出，直接钻入了你的身体</p>
                <p>你并没有感受到任何异样，而你的视野里多出了新的东西</p>
                <p>“这个东西对你肯定有用处，你得记得老夫”</p>
                <p>“老夫名号为【春分】，你可以走了”</p>
                <p>【系统提示：你解锁了“词典”功能，按“D”使用】</p>
                <p>你顾不上新奇，道谢后离开了神庙</p>
                <button class="choice-btn" onclick="handleChoice('b7')">离开</button>
            `;
        } else if (choice === 'b7') {
            content.innerHTML = `
                <p>你终于呼吸到森林中的新鲜空气了</p>
                <p>你拿出指针，发现它不再指向神庙</p>
                <p>你明白，这只是你的第一站而已</p>
                <p>你挂好玉牌，清点好物品，继续出发了</p>
                <p>而你的冒险，也只是刚刚开始而已...</p>
                <button class="choice-btn" onclick="handleChoice('T0')">继续</button>
            `;
        }
        this.updateData(choice);
    },
    updateData: function(choice) {        
        switch(choice) {
            case 'b1':
                characterData.hp -= 10;
                break;
            case 'b2':
                if (ItemSystem.hasItem('鹿皮')) {
                    characterData.hp += 50;
                }    
                else {
                    characterData.hp += 30;
                }
                break;
            case 'b11': 
                PuzzleModule.initializePuzzle('templeEntrance');
                break;
            case 'b32':
                if (petData.hp > 30) {
                    petData.hp += 10;
                    petData.power += 5;
                    updatePetPanel(petData.name, petData.hp, petData.power); 
                }
                break;  
            case 'b33':
                if (ItemSystem.hasItem('绿宝石')) {
                    ItemSystem.addItem('黄宝石');
                }        
                break;
        } 
        updateCharacterPanel();
    }
}