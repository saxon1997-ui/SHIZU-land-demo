window.Chapter1 = {
    name: 'Chapter1',
    // 初始化章节内容
    initialize: function() {
        // 设置章节标题
        setChapterTitle('第一章&emsp;藤蔓森林');
        
        // 设置初始内容
        const initialHTML = `
            <p>你真切感受到一股力量在你体内涌动</p>
            <p>这一点你在你的角色面板上得到了印证</p>
            <p>你决定按照指引前去寻找写信的神秘人</p>
            <p>在此之前，你获得了一次存档的机会</p>
            <button class="choice-btn" onclick="handleChoice('d1')">立即出发</button>
            <button class="choice-btn" onclick="saveGameData()">点击存档</button>
            <button class="choice-btn" onclick="handleChoice('d2')">稍作休整</button>
        `;
        const content = document.getElementById('content');
        content.innerHTML = initialHTML;
        updateCharacterPanel();
    },
    handleChoice: function(choice) {
        const content = document.getElementById('content');
        if (choice === 'd1') {
            content.innerHTML = `
                <p>你觉得此地不宜久留，清点物品后立刻出发了</p>
                <p>这个指针外形酷似指南针，永远指着一个方向</p>
                <p>经过一天的跋涉，你已经精疲力尽，你需要尽快找到歇脚的地方</p>
                <p>在指针的方向上，前方不远处有条溪水</p>
                <p>但你同样也注意到，在一侧竟然隐隐能看到一个村庄</p>
                <button class="choice-btn" onclick="handleChoice('d11')">前往小溪休息</button>
                <button class="choice-btn" onclick="handleChoice('z0')">前往村庄探索</button>
            `;
        } else if (choice === 'd2') {
            content.innerHTML = `
                <p>正当你盘算下一步如何时，剧烈的破空声突然炸响</p>
                <p>你感到空气开始浓稠起来，有些呼吸困难</p>
                <p>紧接着一个黑影出现在了你的身前</p>
                <p>你并看不清他的摸样，只觉得全身都在颤栗着</p>
                <p>他开口：你选择了他吗？</p>
                <p>你的疑惑刚还在你脑海浮现之时，却感到愈发难以呼吸</p>
                <p>你眼前开始模糊，最后只听到了一声长长的叹息</p>
                <button class="choice-btn" onclick="endGame()">结束游戏</button>
                <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
            `;
        } else if (choice === 'd11') {
            let buttons = '<button class="choice-btn" onclick="handleChoice(\'d111\')">直接休息</button>';
            if (characterData.inventory.includes('打火石')) {
                buttons += '<button class="choice-btn" onclick="handleChoice(\'d112\')">生火，并去抓鱼</button>';
            }
            else {
                buttons += '<button class="choice-btn" onclick="handleChoice(\'d113\')">你没有生火条件，摘点浆果</button>';
            }
            content.innerHTML = `
                <p>夕阳将潺潺溪水映成绸缎，小溪两侧花朵丛生</p>
                <p>你感到今日的跋涉是值得的，你准备布置一下扎营的地方</p>
                <p>你捡了一些干树枝,铺上几层新鲜松枝，简单做了一个床</p>
                <p>你觉得应该生一些火，再准备一些食材</p>
                ${buttons}
            `;
        } else if (choice === 'd111') {
            content.innerHTML = `
                <p>你饥肠辘辘，但因为太懒，所以决定直接入睡</p>
                <p>但你很快，你就被一阵骚动惊醒了</p>
                <p>此刻已是深夜，月亮高高悬挂</p>
                <p>而在黑暗中，你惊恐地发现有无数猩红的眼球</p>
                <p>你狼群已经将你包围，你能做的，只有——</p>
                <button class="choice-btn" onclick="handleChoice('d1111')">背水一战！！！</button>
                `;
        } else if (choice === 'd112') {
            content.innerHTML = `
                <p>因为你有打火石，附近干树枝也很多</p>
                <p>很快你就生起了火堆，现在就差鱼了</p>
                <p>你将两根长直的干木棍绑在一起</p>
                <p>你用一块较为锋利的石头将一头削尖</p>
                <p>一根简易长矛就完成了，让你惊讶的是</p>
                <p>你发现你的武器栏中竟然多了这一件武器</p>
                <p>同时你的战斗力+5，你哭笑不得</p>
                <button class="choice-btn" onclick="handleChoice('d1121')">下小溪叉鱼</button>
                `;
        } else if (choice === 'd113') {
            content.innerHTML = `
                <p>没走多久，你就发现了一片浆果丛</p>
                <p>这些浆果外形和蓝莓有些相似</p>
                <p>你没多想，饥寒交迫的你只想赶紧弄点吃的</p>
                <p>还在翻找浆果的你，突然又有新的发现</p>
                <p>地上竟然有一把破旧的短刀，你拿了起来</p>
                <p>你发现你的武器栏中竟然多了这一件武器</p>
                <p>同时你的战斗力+5，你哭笑不得</p>
                <button class="choice-btn" onclick="handleChoice('d1131')">返回营地</button>
                `;            
        } else if (choice === 'd1111') {
            const { enemies, reward } = battleScenes['wolves'];
            let result = fight(enemies);
            if (result) {
                characterData.power += reward.power;
                characterData.gold += reward.gold;
                characterData.inventory.push(reward.item);
                const content = document.getElementById('content');
                content.innerHTML = `
                    <p>虽然并不轻松，但数值的积累还是让你勉强取胜</p>
                    <p>战斗胜利！你获得了战斗力加成：${reward.power}，金币：${reward.gold}，物品：${reward.item}</p>
                    <button class="choice-btn" onclick="handleChoice('d11111')">继续冒险</button>
                `;
            } else {
                if (characterData.inventory.includes('绿宝石')) {
                    characterData.gold += reward.gold;
                    content.innerHTML = `
                    <p>面对群狼，你完全没有招架之力</p>
                    <p>你身上的伤口逐渐增多</p>
                    <p>你血流不止，你越来越力不从心</p>
                    <p>你的视线愈发模糊</p>
                    <p>就在此时，从你胸口爆发出一阵炫目的绿光</p>
                    <p>等你回过神来，你的伤口已经完全愈合了</p>
                    <p>一地狼藉。狼的尸体四分五裂</p>
                    <p>你收到了系统提示：你获得了金币：${reward.gold}，物品：${reward.item}</p>
                    <button class="choice-btn" onclick="handleChoice('d11112')">继续冒险</button>
                    `;
                }
                else {
                content.innerHTML = `
                    <p>面对群狼，你完全没有招架之力</p>
                    <p>你身上的伤口逐渐增多</p>
                    <p>你的视线愈发模糊</p>
                    <p>你血战至死</p>
                    <button class="choice-btn" onclick="endGame()">游戏结束</button>
                    <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
                `;
                }
            }
        } else if (choice === 'd1121') {
            content.innerHTML = `
                <p>虽然你没有任何经验，但在你${characterData.power}战斗力的加持下</p>
                <p>叉鱼似乎变得很简单，仅仅几次尝试后</p>
                <p>你就叉到了两条肥美的鱼，简单处理一下</p>
                <p>你就将它们架在火上烧烤了</p>
                <p>鱼很快烤好，天色也渐渐变暗</p>
                <p>很快你就开始享用你的战利品</p>
                <p>美中不足的就是缺点盐味</p>
                <p>但同时你也关注到了你面板生命值的变化</p>
                <p>简单收拾一下，你准备休息了</p>
                <button class="choice-btn" onclick="handleChoice('d11211')">休息</button>
                `;
        } else if (choice === 'd1131') {
            content.innerHTML = `
                <p>你坐在你的草床上，看着手里一捧浆果</p>
                <p>小心翼翼吃了一颗，你惊喜地发现自己的数值有变化</p>
                <p>这证明了这种浆果是完全可食用的</p>
                <p>并且危机关头还可以用来回复生命值</p>
                <p>不过因为你很饿了，将手中的浆果全部食用</p>
                <p>你满意地看到增加了20点的生命值</p>
                <p>准备休息了</p>
                <button class="choice-btn" onclick="handleChoice('d11311')">休息</button>
                `;            
        } else if (choice === 'd11112' || choice === 'd11111') {
            content.innerHTML = `
                <p>你注意到的背包中多了个“狼灵”</p>
                <p>正当你迷惑之时，指针突然躁动起来</p>
                <p>从指针中传来声音</p>
                <p>“恭喜你获得你的第一个战灵”</p>
                <p>“他可以为你战斗，且不会死去”</p>
                <p>“除非你自己放弃它，妥善利用吧”</p>
                <button class="choice-btn" onclick="handleChoice('d111111')">你觉得非常疲惫，想要休息</button>
                <button class="choice-btn" onclick="handleChoice('d111112')">你觉得此地不宜久留，立刻出发</button>
                `;
            const panel = document.getElementById('pet-panel');
            panel.style.display = 'block';
            setTimeout(() => panel.classList.add('show'), 10);
            updatePetPanel('狼灵', 30, 10);
        } else if (choice === 'd11211' || choice === 'd11311') {
            content.innerHTML = `
                <p>你酣然入睡</p>
                <p>但你很快，你就被一阵骚动惊醒了</p>
                <p>此刻已是深夜，月亮高高悬挂</p>
                <p>而在黑暗中，你惊恐地发现有无数猩红的眼球</p>
                <p>你狼群已经将你包围，你能做的，只有——</p>
                <button class="choice-btn" onclick="handleChoice('d1111')">背水一战！！！</button>
                `;
        } else if (choice === 'd111111' ) {
            content.innerHTML = `
                <p>因为战斗的疲惫，你很快就沉沉睡去了</p>
                <p>但由于你根本没有处理狼群的尸体</p>
                <p>血腥味吸引过来了更强大的捕食者</p>
                <p>当你再次惊醒，你发现一个巨大的黑影</p>
                <p>你在痛苦和绝望中死去了</p>
                <button class="choice-btn" onclick="endGame()">游戏结束</button>
                <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
                `;
        } else if (choice === 'd111112' ) {
            content.innerHTML = `
                <p>清洗血迹后，你拖着疲惫的身体出发了</p>
                <p>你这才发现，天竟然将要拂晓</p>
                <p>你的身心都疲惫到了极点</p>
                <p>前方的森林似乎张开无情的巨口</p>
                <p>随时都可以将你无情啃食</p>
                <button class="choice-btn" onclick="handleChoice('b0')">进入森林</button>
                `;
        }
        this.updateData(choice);
    },
    updateData: function(choice) {        
        switch(choice) {
            case 'd112': 
                removeItem('打火石');
                characterData.weapon.push('简易长矛');
                characterData.power += 5;
                break;
            case 'd113': 
                characterData.weapon.push('生锈短刀');
                characterData.power += 5;
                break;
            case 'd1121':
                characterData.hp += 40;
                break;
            case 'd1131':
                characterData.hp += 20;
                break;
            case 'd11112': 
                removeItem('绿宝石');
                characterData.power += 2;
                characterData.hp += 100;
                break;
        }
        updateCharacterPanel();
    }
}