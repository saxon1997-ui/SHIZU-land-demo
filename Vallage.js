window.Vallage = {
    name: 'Vallage',
    // 初始化章节内容
    initialize: function() {
        // 设置章节标题
        setChapterTitle('分&emsp;支&emsp;诡异村庄');
        
        // 设置初始内容
        const initialHTML = `
            <p>村庄坐落在群山环抱的幽谷之中</p>
            <p>仿佛是被世界遗忘的角落</p>
            <p>沿着泥路前行，两旁的房屋低矮而破败</p>
            <p>屋顶的瓦片残缺不全，像张牙舞爪的怪物</p>
            <p>你感到脊背发凉，开始怀疑是否应该来这</p>
            <button class="choice-btn" onclick="handleChoice('z1')">原路返回</button>
            <button class="choice-btn" onclick="handleChoice('z2')">继续往前</button>
            <button class="choice-btn" onclick="handleChoice('z3')">选一家敲门询问</button>
        `;
        const content = document.getElementById('content');
        content.innerHTML = initialHTML;
        updateCharacterPanel();
    },
    handleChoice: function(choice) {
        const content = document.getElementById('content');
        if (choice === 'z1' || choice === 'z21' ) {
            content.innerHTML = `
                <p>你本能想赶紧离开这里，转身就走</p>
                <p>但越走你发现越不对劲</p>
                <p>似乎是遭到了鬼打墙</p>
                <p>你拿出指针，希望能给你引导</p>
                <p>可指针竟然在飞速旋转</p>
                <p>正当你你心中生出懊悔之时</p>
                <p>你发现在不远处站着一位佝偻老太</p>
                <button class="choice-btn" onclick="handleChoice('z11')">上前询问</button>
                <button class="choice-btn" onclick="handleChoice('z12')">选择远离</button>
            `;
        } else if (choice === 'z2') {
            content.innerHTML = `
                <p>你走了不久，就发现了一座石像喷泉</p>
                <p>女神像早已污秽不堪，看不出原来的模样</p>
                <p>在池子里流动着的，是褐色的恶臭液体</p>
                <p>一股强烈的呕吐冲动冲上你的脑门</p>
                <p>你只想赶紧离开</p>
                <p>你发现了远处有个很大的黑色建筑</p>
                <p>在建筑附近有片湖泊</p>
                <button class="choice-btn" onclick="handleChoice('z21')">原路返回</button>
                <button class="choice-btn" onclick="handleChoice('z22')">往远处大建筑走</button>
            `;
        } else if (choice === 'z3') {
            content.innerHTML = `
                <p>道路两旁的石屋看上去区别不大</p>
                <p>不过你还是挑选了一个看上去新一些的</p>
                <p>你急促的敲门声在这座死寂的村庄回响着</p>
                <p>吱呀一声，门开了</p>
                <p>开门的是一个普通的中年人，他双目无神</p>
                <p>抬头看你时，让你心中一阵发毛</p>
                <button class="choice-btn" onclick="handleChoice('z31')">开口询问</button>
                <button class="choice-btn" onclick="handleChoice('z32')">扭头就走</button>
            `;
        } else if (choice === 'z11') {
            content.innerHTML = `
                <p>虽然这个老太给你非常不妙的感觉</p>
                <p>但你没有更多的办法，硬着头皮上前</p>
                <p>你问：请问这是什么地方？怎么出去？</p>
                <p>老太并没有抬头，背着手站在原地</p>
                <p>你的寒毛完全竖起，又问了一遍</p>
                <p>你看着她脸上纵横的褶皱，她依然没有说话</p>
                <p>也没有动</p>
                <button class="choice-btn" onclick="handleChoice('z111')">再次开口</button>
                <button class="choice-btn" onclick="handleChoice('z12')">选择远离</button>
            `;
        } else if (choice === 'z12') {
            content.innerHTML = `
                <p>你转身走开，但还没走几步，背后一阵发凉</p>
                <p>你连忙回头，顿时鸡皮疙瘩起了一身</p>
                <p>因为这位老太，就站在你的身后</p>
                <p>你看着她，倒退着往后走</p>
                <p>她站在原地没有移动，你突然懂了</p>
                <p>这好像就是三二一木头人，你必须看着她</p>
                <p>你身上被冷汗打湿，但你只能慢慢后退</p>
                <p>可就在这时，你感觉你撞到了什么东西</p>
                <button class="choice-btn" onclick="handleChoice('z121')">转身看</button>
                <button class="choice-btn" onclick="handleChoice('z122')">不转身，准备换个方向走</button>
            `;
        } else if (choice === 'z22' || choice === 'z1113') {
            content.innerHTML = `
                <p>一路上你没有看到任何人，只有石屋坐落在路的两侧</p>
                <p>你并不能知晓到底有没有人</p>
                <p>这令你更加害怕</p>
                <p>走近了之后你才看清楚</p>
                <p>那是一座巨大的黑色石碑</p>
                <p>而石碑上有很多精美的异兽浮雕，似虎似熊</p>
                <p>和刚才恶臭发烂的石像温泉截然不同</p>
                <p>就在此时，你身上的指针开始发热了</p>
                <button class="choice-btn" onclick="handleChoice('z221')">拿出指针</button>
            `;
        } else if (choice === 'z31') {
            content.innerHTML = `
                <p>“请问...”</p>
                <p>你刚开口，但接下来的话全部卡在喉咙里</p>
                <p>因为一把银色匕首插在了你的胸膛上</p>
                <p>你根本就没有看清对方到底怎么出手的</p>
                <p>你失去了力气，缓缓跪坐在地</p>
                <p>你最后看到的，是那人木然离去的背影</p>
                <button class="choice-btn" onclick="endGame()">游戏结束</button>
                <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
            `;
        } else if (choice === 'z32') {
            content.innerHTML = `
                <p>你警觉大作，只想赶紧离开</p>
                <p>但还没等你退后，你就愣住了</p>
                <p>因为一把银色匕首插在了你的胸膛上</p>
                <p>你根本就没有看清对方到底怎么出手的</p>
                <p>你失去了力气，缓缓跪坐在地</p>
                <p>你最后看到的，是那人木然离去的背影</p>
                <button class="choice-btn" onclick="endGame()">游戏结束</button>
                <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
            `;   
        } else if (choice === 'z111') {
            content.innerHTML = `
                <p>你用了更大的音量，但努力保持着礼貌</p>
                <p>终于，老太动了。她缓缓抬起头</p>
                <p>浑浊的眼睛看得你很不自在</p>
                <p>她低沉地笑了起来，声音像是破了的风箱</p>
                <p>嘿嘿嘿嘿嘿</p>
                <p>进来了，你还想出去？</p>
                <p>细皮嫩肉的，是那位最好的养分啊</p>
                <p>她自顾自的离开了，留下了一脸惊惧的你</p>
                <p>天色已经逐渐变暗，你两旁的房屋灯火逐渐亮起</p>
                <p>跋涉一天的你，留给你的选择不多了</p>
                <button class="choice-btn" onclick="handleChoice('z1111')">往老太离开的方向走</button>
                <button class="choice-btn" onclick="handleChoice('z1112')">选择一户人家敲门</button>
                <button class="choice-btn" onclick="handleChoice('z1113')">往远处大建筑走</button>
            `;
        } else if (choice === 'z121') {
            content.innerHTML = `
                <p>你转过身去，你更是被吓了一跳</p>
                <p>一个皮肤黝黑，身高至少2m的巨汉挡住了你的路</p>
                <p>他脸上没有任何表情，但他全身肌肉虬结</p>
                <p>让你非常没有安全感</p>
                <p>突然，你胸口一凉</p>
                <p>你吃力地回头，只看到老太那张枯萎的脸</p>
                <p>她用刀刺穿了你的胸腔，却一脸陶醉地看着你</p>
                <p>你有一种强烈的恶心感，因为她的眼神</p>
                <p>像是在欣赏一道绝妙的美食</p>
                <p>很快，你的意识就开始模糊了起来...</p>
                <button class="choice-btn" onclick="endGame()">游戏结束</button>
                <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
            `;
        } else if (choice === 'z122') {
            content.innerHTML = `
                <p>虽然你不知道身后是什么</p>
                <p>但是你面对怪异的老太也丝毫不敢放松</p>
                <p>正当你准备继续后退时</p>
                <p>你的视角竟然开始天旋地转起来</p>
                <p>你最后看到的，是你缓缓倒下的</p>
                <p>没有头的身体...</p>
                <button class="choice-btn" onclick="endGame()">游戏结束</button>
                <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
            `;
        } else if (choice === 'z221') {
            if (characterData.inventory.includes('白纸契约')) {
                content.innerHTML = `
                <p>你发现指针竟然直指石碑，会跟随你的移动调整角度</p>
                <p>你疑惑万分，难道你这么快就找到了神秘人？</p>
                <p>这时，从指针里传来声音</p>
                <p>“没想到你这么快就遇到了一座石碑，或许天意如此”</p>
                <p>“我尽量长话短说，石碑之下封印着我的同族”</p>
                <p>“是昔日的魔神之一，而这个村庄历代镇压这里”</p>
                <p>“我希望你能打破这个封印，释放出祂”</p>
                <p>“届时我将赐予你无尽的力量，让你成为我们”</p>
                <p>“我们将重新统治始祖大陆...”</p>
                <p>你有些懵，但当你仔细感受之后</p>
                <p>感受到石碑下有一种同源的力量波动</p>
                <p>不过天色已经很暗了，你需要尽快找到休息的地方</p>
                <button class="choice-btn" onclick="handleChoice('z2211')">去往湖边</button>
                <button class="choice-btn" onclick="handleChoice('z2212')">在附近找地方休息</button>
            `;
            }
            else {
                content.innerHTML = `
                <p>你发现指针在飞速旋转，越靠近石碑转的越快</p>
                <p>你疑惑万分，这时，从指针里传来声音</p>
                <p>“没想到你这么快就遇到了一座石碑，或许天意如此”</p>
                <p>“这里封印着魔神之一，他们曾经四处屠戮”</p>
                <p>“让始祖大陆生灵涂炭，这个村庄历代镇压封印”</p>
                <p>“我已经感受到这个封印有些松动”</p>
                <p>“希望你能加固封印，届时我会给你丰厚的回报”</p>
                <p>你有些懵，但当你仔细感受之后</p>
                <p>感受到石碑下有一丝力量涌动让你厌恶至极</p>
                <p>不过天色已经很暗了，你需要尽快找到休息的地方</p>
                <p>button class="choice-btn" onclick="handleChoice('z2211')">去往湖边</button>
                <button class="choice-btn" onclick="handleChoice('z2213')">在附近找地方休息</button>
            `;
            }
        } else if (choice === 'z1111') {
            content.innerHTML = `
                <p>你压制住内心的恐惧，朝着老太离开的方向走</p>
                <p>不久后，你看到了一座两层楼的木屋</p>
                <p>在这座全是平房石屋的地方显得突兀</p>
                <p>你意识到这老太并不简单</p>
                <button class="choice-btn" onclick="handleChoice('z11111')">敲门</button>
                <button class="choice-btn" onclick="handleChoice('z11112')">离开</button>
            `;
        } else if (choice === 'z1112') {
            content.innerHTML = `
                <p>道路两旁的石屋看上去区别不大</p>
                <p>不过你还是挑选了一个看上去新一些的</p>
                <p>你轻轻敲门，不希望弄出太大的声响</p>
                <p>不久，门开了。是一个拿着烛台的中年男子</p>
                <p>他的表情有些扭曲，他看向你</p>
                <p>时而愤怒，时而惶恐</p>
                <p>你有些不知所措，两人就这样对视着</p>
                <p>终于。他开口了，“时间...时间不对！”</p>
                <p>“你...走，你先去石碑...”</p>
                <p>说完，不等你反应，砰的一声把门关上了</p>
                <button class="choice-btn" onclick="handleChoice('z11121')">前往所谓的石碑</button>
            `;
        } else if (choice === 'z2211') {
                content.innerHTML = `
                <p>不久后，你来到了湖边，微微有湖浪拍案</p>
                <p>你的心中稍有感宁静，但很快你就听到了动静</p>
                <p>你回头看去，发现一队拿着火把的人正往湖边走来</p>
                <p>出于谨慎，你躲在了一旁草丛中</p>
                <p>那一队人在保持着奇怪的阵型</p>
                <p>你这才注意到他们脚下有一块白色的石台</p>
                <p>他们用火把各自点燃了各自脚下的烛台</p>
                <p>一共十一个人，他们都身着白袍</p>
                <p>嘴里念念有词，像是在完成什么仪式</p>
                <p>你心中有所猜想，觉得这是在加固封印</p>
                <button class="choice-btn" onclick="handleChoice('z22111')">继续观望</button>
                <button class="choice-btn" onclick="handleChoice('z22112')">先行离开</button>
            `;
        } else if (choice === 'z2212') {
                content.innerHTML = `
                <p>正当你准备找点树枝铺个简单的床时</p>
                <p>发现一队拿着火把的人径直朝石碑走来</p>
                <p>正当你感觉到不妙时，一个白色身影突然出现在你身旁</p>
                <p>你吓了一大跳，此刻你只想逃离这里</p>
                <p>可是你肩膀一下子被按住了</p>
                <p>你发现你竟然挣脱不了</p>
                <p>“你身上有魔神的气息啊...”</p>
                <p>突然你感觉到心口一凉</p>
                <p>不知何时，你的胸口上插着一把银色的匕首</p>
                <p>而你的意识渐渐开始模糊起来了...</p>
                <button class="choice-btn" onclick="endGame()">游戏结束</button>
                <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
            `;
        } else if (choice === 'z2213') {
            content.innerHTML = `
                <p>正当你准备找点树枝铺个简单的床时</p>
                <p>发现一队拿着火把的人径直朝石碑走来</p>
                <p>正当你感觉到不妙时，一个白色身影突然出现在你身旁</p>
                <p>你吓了一大跳，此刻你只想逃离这里</p>
                <p>可是你肩膀一下子被按住了</p>
                <p>你发现你竟然挣脱不了</p>
                <p>“嗯？”那白袍人脸上充满惊喜</p>
                <p>“你身上有古神的气息？你是使者吗？”</p>
                <p>“你是来帮助我们的吗？”</p>
                <p>一个中年男人竟然手舞足蹈起来</p>
                <p>你回答说</p>
                <button class="choice-btn" onclick="handleChoice('z22131')">好的，我会帮助你们</button>
                <button class="choice-btn" onclick="handleChoice('z22132')">我有什么好处吗？</button>
                <button class="choice-btn" onclick="handleChoice('z22133')">太危险了，我不会帮你们</button>
            `;
        } else if (choice === 'z11111') {
            content.innerHTML = `
                <p>你发现门并没有关紧，轻轻一敲就开了</p>
                <p>你站在门口往屋内看去</p>
                <p>屋内并没有你想象中的阴森，就是普通的住所</p>
                <p>可你没见到老太的踪影，只有烛台在摇曳火光</p>
                <button class="choice-btn" onclick="handleChoice('z111111')">大声呼喊</button>
                <button class="choice-btn" onclick="handleChoice('z11112')">离开</button>
            `;
        } else if (choice === 'z11112') {
            content.innerHTML = `
                <p>你有些无奈，只好先离开再做打算</p>
                <p>可还没等你离开庭院，你就听到了身后有动静</p>
                <p>你急忙回头，老太又突然出现在屋门口</p>
                <p>她盯着你看，满是褶皱的脸突然裂开</p>
                <p>她笑了起来，让你一阵发毛</p>
                <p>“你身上确实有那位的气息”</p>
                <p>“差点唬到老身了”</p>
                <p>当你还在回味这句话时，你眼前一花</p>
                <p>你先是看到了老太枯萎的脸</p>
                <p>低头才看到了插在你胸上的金色匕首</p>
                <p>你有些难以置信，可你的视线越来越模糊...</p>
                <button class="choice-btn" onclick="endGame()">游戏结束</button>
                <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
            `; 
        } else if (choice === 'z11121') {
            content.innerHTML = `
                <p>你确实看到远处有一个高耸的黑色建筑</p>
                <p>你选择去往那里。一路上村庄安静得可怕</p>
                <p>每个石屋中都闪烁着火光却不闻人声</p>
                <p>很快，你到了。那是一座巨大的黑色石碑</p>
                <p>而石碑上有很多精美的异兽浮雕，似虎似熊</p>
                <p>和刚才恶臭发烂的石像温泉截然不同</p>
                <p>就在此时，你身上的指针开始发热了</p>
                <button class="choice-btn" onclick="handleChoice('z221')">前往所谓的石碑</button>
            `;   
        } else if (choice === 'z22111') {
            let buttons = '<button class="choice-btn" onclick="handleChoice(\'z221111\')">先行离开</button>';
            if (characterData.inventory.includes('白纸契约')) {
                buttons += '<button class="choice-btn" onclick="handleChoice(\'z221112\')">继续观望</button>';
                buttons += '<button class="choice-btn" onclick="handleChoice(\'z221113\')">破坏仪式</button>';
            }
            else {
                buttons += '<button class="choice-btn" onclick="handleChoice(\'z221114\')">帮助他们</button>';
                buttons += '<button class="choice-btn" onclick="handleChoice(\'z221115\')">继续观望</button>';
            }
            content.innerHTML = `
                <p>一开始还好，随着白袍们的吟唱</p>
                <p>他们面色逐渐难看起来，像是在遭受痛苦</p>
                <p>11个烛台的火光扭曲着，愈发妖异</p>
                <p>像是11张在张嘴尖叫的鬼脸</p>
                <p>像是有什么东西压住了他们</p>
                <p>除了正中间的人还站立着，其他人都半跪在地</p>
                <p>但每一个人都没有停止吟唱，依然坚持着</p>
                <p>可你有预感，他们坚持不了太久了</p>
                ${buttons}
            `;
        } else if (choice === 'z22112' || choice === 'z221111') {
            content.innerHTML = `
                <p>你觉得封印和你无关，能否重新加固并不重要</p>
                <p>现在只想离开这里，找个地方休息</p>
                <p>但你还没走出多远，一个巨大的黑影就将你拦住了</p>
                <p>天色原因你看不是很清楚</p>
                <p>你只感觉到一阵强风吹过</p>
                <p>然后就陷入了无尽的黑暗...</p>
                <button class="choice-btn" onclick="endGame()">游戏结束</button>
                <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
            `;
        } else if (choice === 'z22131') {
            content.innerHTML = `
                <p>闻言，那人脸上的惊喜更胜，急忙招呼队伍</p>
                <p>“大家快来，古神终于派使者来帮我们了”</p>
                <p>“长老今天和我们说，湖边的一处封印出了问题”</p>
                <p>“今晚我们要不惜一切带价重新加固封印”</p>
                <p>“本来心底没底的，但好在你来了”</p>
                <p>“不过还好你是晚上遇见我们的，不然...”</p>
                <p>“那我们就出发吧？”</p>
                <p>你看着他，还有他身后10位白袍</p>
                <p>他们都用兴奋的目光看着你</p>
                <p>你点头称是，准备和他们一起去加固封印</p>
                <button class="choice-btn" onclick="handleChoice('z221311')">跟随前往湖泊</button>
            `;
        } else if (choice === 'z22132') {
            content.innerHTML = `
                <p>男子突然有些拮据，不好意思地说</p>    
                <p>“我没有什么积蓄，来大家凑一凑”</p>
                <p>你就看到一队白袍从身上东摸西摸</p>
                <p>最后，领队和你说，我这里就20金币了</p>
                <p>“如果你愿意帮忙，我全都给你”</p>
                <p>“之后我还会向长老会为你申请一柄符文匕首”</p>
                <p>“是神兵利器来的!”</p>
                <p>“现在你愿意帮我们了吗？”</p>
                <button class="choice-btn" onclick="handleChoice('z221321')">帮助他们</button>
                <button class="choice-btn" onclick="handleChoice('z221322')">不给予帮助</button>
            `;
        } else if (choice === 'z22133' || choice === 'z221322') {
            content.innerHTML = `
                <p>闻言，他脸上露出浓浓的失望之色</p>
                <p>“那也没关系，不过要请你离开我们村子”</p>
                <p>“因为加固封印的仪式是绝对不能被打扰的”</p>
                <p>你也乐得如此，顺着他的指示离开了村庄</p>
                <button class="choice-btn" onclick="handleChoice('b0')">离开</button>
            `;
        } else if (choice === 'z111111') {
            content.innerHTML = `
                <p>说实话，你也不知道你哪来的勇气</p>
                <p>敢去招惹这个诡异老太，和送人头的行为无异</p>
                <p>如你所愿，老太突然出现在屋门口</p>
                <p>她盯着你看，满是褶皱的脸突然裂开</p>
                <p>她笑了起来，让你一阵发毛</p>
                <p>“你身上确实有那位的气息”</p>
                <p>“差点唬到老身了”</p>
                <p>当你还在回味这句话时，你眼前一花</p>
                <p>你先是看到了老太枯萎的脸</p>
                <p>低头才看到了插在你胸上的金色匕首</p>
                <p>你有些难以置信，可你的视线越来越模糊...</p>
                <button class="choice-btn" onclick="endGame()">游戏结束</button>
                <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
            `;
        } else if (choice === 'z221112') {
            content.innerHTML = `
                <p>“咚、咚、咚、咚、咚、咚”</p>
                <p>你感受到一股强烈的能量</p>
                <p>正在有节奏地冲击着封印</p>
                <p>而每一次撞击都让白袍们更加痛苦</p>
                <p>血液从他们嘴中咕咕冒出，染红了祭坛</p>
                <p>此时场中唯一还站着的人像是下了某种决心</p>
                <p>大吼了一声你听不懂的话语</p>
                <p>而其他白袍都有了动作</p>
                <p>他们迅速从腰间抽出匕首，划破了自己的手腕</p>
                <p>一时间场面一片凌乱，可是撞击的声音却愈发微弱</p>
                <p>除了站在中间的白袍，其他人都已瘫倒在地</p>
                <p>你明白，你苦苦等待的时机来了</p>
                <button class="choice-btn" onclick="handleChoice('z2211121')">迅速出手!</button>
                <button class="choice-btn" onclick="handleChoice('z2211122')">离开</button>
            `;
        } else if (choice === 'z221113') {
            const { enemies, reward } = battleScenes['Vallage_monk_2'];
            let result = fight(enemies);
            if (result) {
                characterData.power += reward.power;
                characterData.gold += reward.gold;
                characterData.inventory.push(reward.item);
                const content = document.getElementById('content');
                content.innerHTML = `
                    <p>你积蓄力量，双腿猛然发力</p>
                    <p>你如离弦之箭冲了出去，白袍注意到你</p>
                    <p>他脸上露出惊愕之色</p>
                    <p>但你没有给他任何反应的时间，你和他交手了</p>
                    <p>此时另外一人也勉强站起身，和你战在一起</p>
                    <p>你勉强击杀了二人，你获得了系统提示</p>
                    <p>战斗胜利！你获得了战斗力加成：${reward.power}，金币：${reward.gold}，物品：${reward.item}</p>
                    <p>你注意到他手中的银色匕首</p>
                    <button class="choice-btn" onclick="handleChoice('z22111211')">捡起匕首</button>
                `;
            } else {
                if (characterData.inventory.includes('绿宝石')) {
                    characterData.gold += reward.gold;
                    content.innerHTML = `
                    <p>虽然两位白袍修士状态不好</p>
                    <p>但你也愈发难以招架</p>
                    <p>你血流不止，你越来越力不从心</p>
                    <p>你的视线愈发模糊</p>
                    <p>就在此时，从你胸口爆发出一阵炫目的绿光</p>
                    <p>等你回过神来，你的伤口已经完全愈合了</p>
                    <p>而两位白袍已经倒在地上没有生机</p>
                    <p>你收到了系统提示：你获得了金币：${reward.gold}，物品：${reward.item}</p>
                    <p>你注意到他手中的银色匕首</p>
                    <button class="choice-btn" onclick="handleChoice('z2211131')">捡起匕首</button>
                `;
            } else {
                content.innerHTML = `
                    <p>虽然两位白袍修士状态不好</p>
                    <p>但你也愈发难以招架</p>
                    <p>你血流不止，你越来越力不从心</p>
                    <p>你的视线愈发模糊</p>
                    <p>你血战至死</p>
                    <button class="choice-btn" onclick="endGame()">游戏结束</button>
                    <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
                `;
                }
            }
        } else if (choice === 'z221114') {
            content.innerHTML = `
                <p>你知道不能再无动于衷了，你起身前往祭坛</p>
                <p>那群人看到你的出现，先是惊愕</p>
                <p>紧接着每个人的脸上都涌现出惊喜</p>
                <p>居中的白袍开口“你是古神的使者！”</p>
                <p>“抱歉，时间紧急，需要借一点你的鲜血”</p>
                <p>在得到你的肯首之后，他当即拿匕首</p>
                <p>在你的食指尖划破一道小口</p>
                <p>他捏住你的手指对着祭坛中心</p>
                <p>你的鲜血从你指尖滴落</p>
                <p>一股黑红色的能量波动从祭坛中溢出</p>
                <p>但令你们惊喜的是，冲击祭坛的声音愈发微弱</p>
                <p>正当所有人都惊喜的时候，异变发生了</p>
                <button class="choice-btn" onclick="handleChoice('z2211141')">做好准备</button>
            `;    
        } else if (choice === 'z221115') {
            content.innerHTML = `
                <p>“咚、咚、咚、咚、咚、咚”</p>
                <p>你感受到一股强烈的能量</p>
                <p>正在有节奏地冲击着封印</p>
                <p>而每一次撞击都让白袍们更加痛苦</p>
                <p>血液从他们嘴中咕咕冒出，染红了祭坛</p>
                <p>此时场中唯一还站着的人像是下了某种决心</p>
                <p>大吼了一声你听不懂的话语</p>
                <p>而其他白袍都有了动作</p>
                <p>他们迅速从腰间抽出匕首，划破了自己的手腕</p>
                <p>一时间场面一片凌乱，可是撞击的声音却愈发微弱</p>
                <p>除了站在中间的白袍，其他人都已瘫倒在地</p>
                <p>你觉得你是时候离开了</p>
                <button class="choice-btn" onclick="handleChoice('z2211122')">离开</button>
            `;
        } else if (choice === 'z221311') {
            content.innerHTML = `
                <p>你们来到了湖边，你发现了一个白色祭坛</p>
                <p>在火光的照射下，你看清祭坛上刻画了一个五芒星</p>
                <p>“队伍有11位白袍，10位站到了阵法上”</p>
                <p>在得到你的肯首之后，他当即拿匕首</p>
                <p>在你的食指尖划破一道小口</p>
                <p>他捏住你的手指对着祭坛中心</p>
                <p>你的鲜血从你指尖滴落</p>
                <p>其他人也将阵脚的烛台点燃</p>
                <p>开始吟唱起来</p>
                <p>他们示意你离开祭坛</p>
                <button class="choice-btn" onclick="handleChoice('z2213111')">站在一旁</button>
            `;
        } else if (choice === 'z221321') {
            content.innerHTML = `
                <p>闻言，领队把金币塞到你手上，继续说到</p>
                <p>“长老今天和我们说，湖边的一处封印出了问题”</p>
                <p>“今晚我们要不惜一切带价重新加固封印”</p>
                <p>“本来心底没底的，但好在你来了”</p>
                <p>“不过还好你是晚上遇见我们的，不然...”</p>
                <p>“那我们就出发吧？”</p>
                <p>你看着他，还有他身后10位白袍</p>
                <p>他们都用兴奋的目光看着你</p>
                <p>你点头称是，准备和他们一起去加固封印</p>
                <button class="choice-btn" onclick="handleChoice('z221311')">跟随前往湖泊</button>
            `;
        } else if (choice === 'z2211121') {
            const { enemies, reward } = battleScenes['Vallage_monk_1'];
            let result = fight(enemies);
            if (result) {
                characterData.power += reward.power;
                characterData.gold += reward.gold;
                characterData.inventory.push(reward.item);
                const content = document.getElementById('content');
                content.innerHTML = `
                    <p>你积蓄力量，双腿猛然发力</p>
                    <p>你如离弦之箭冲了出去，白袍注意到你</p>
                    <p>他脸上露出惊愕之色</p>
                    <p>但你没有给他任何反应的时间，你和他交手了</p>
                    <p>他已经失血过多，完全不是你的对手</p>
                    <p>当你扭断他的脖子之后，收到了系统提示</p>
                    <p>战斗胜利！你获得了战斗力加成：${reward.power}，金币：${reward.gold}，物品：${reward.item}</p>
                    <p>你注意到他手中的银色匕首</p>
                    <button class="choice-btn" onclick="handleChoice('z22111211')">捡起匕首</button>
                `;
            } else {
                content.innerHTML = `
                    <p>正常来说你这么选是必过的</p>
                    <p>你怎么能打不过呢？</p>
                    <button class="choice-btn" onclick="endGame()">游戏结束</button>
                    <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
                `;
            }
        } else if (choice === 'z2211122') {
            content.innerHTML = `
                <p>你注意远处来了一队人马，每人都拿着火把</p>
                <p>你趁乱离开了，你一路畅通</p>
                <p>没有受到任何阻拦</p>
                <p>至于魔神、封印？这些都和你无关</p>
                <button class="choice-btn" onclick="handleChoice('b0')">离开村庄</button>
            `;
        } else if (choice === 'z2211141' ) {
            content.innerHTML = `
                <p>一股浓烈的黑雾在从祭坛中涌出</p>
                <p>化成了二十多个形状各异的怪物</p>
                <p>怪物围住祭坛，战斗一触即发</p>
                <p>为首的白袍说，“看来是古神使者的血液”</p>
                <p>“刺激到了魔神，他想要殊死一搏”</p>
                <p>“撑过这一波，或许我们就能解放了！”</p>
                <p>“兄弟们，上啊！”</p>
                <button class="choice-btn" onclick="handleChoice('z22111411')">加入战斗</button>
            `;
        } else if (choice === 'z2213111') {
            content.innerHTML = `
                <p>很快，你就听到了咚咚的撞击声</p>
                <p>但每位白袍都镇定自若，你也放心下来</p>
                <p>突然，撞击声变得急迫起来</p>
                <p>一股浓烈的黑红色武器从祭坛中涌出</p>
                <p>化成了十多个形状各异的怪物</p>
                <p>为首的白袍说，“看来是古神使者的血液”</p>
                <p>“刺激到了魔神，他想要殊死一搏”</p>
                <p>“撑过这一波，或许我们就能解放了！”</p>
                <p>“兄弟们，上啊！”</p>
                <button class="choice-btn" onclick="handleChoice('z22131111')">加入战斗</button>
            `;    
        } else if (choice === 'z22111211' || choice === 'z2211131') {
            content.innerHTML = `
                <p>你注意到你的人物面板又有了变化</p>
                <p>但正当你准备打扫战利品之时</p>
                <p>本来弱下去撞击封印的声音，此刻又响起来</p>
                <p>“咚、咚、咚”像复苏的心脏，愈发有力</p>
                <p>你发现远处有一大堆火光朝此处逼近</p>
                <p>想必是村庄察觉不对，支援过来了</p>
                <p>你看到了他们，为首的是一名佝偻老太</p>
                <p>在她身侧有一个2m高肌肉爆炸的巨汉</p>
                <p>他们身后还跟着几十号白袍</p>
                <p>老太看着满身血迹的你，嘶吼出声</p>
                <p>“混蛋!你知道你做了什么吗？”</p>
                <p>面对如此阵仗，你却没感受到一丝害怕</p>
                <p>你开口说</p>
                <button class="choice-btn" onclick="handleChoice('z221112111')">嘿嘿，魔神必将重返始祖大陆！</button>
                <button class="choice-btn" onclick="handleChoice('z221112212')">封印将被冲破，你们赶紧离开吧</button>
            `;
        } else if (choice === 'z22111411') {
            const { enemies, reward } = battleScenes['Vallage_monster_2'];
            let result = fight(enemies);
            if (result) {
                characterData.power += reward.power;
                characterData.inventory.push(reward.item);
                const content = document.getElementById('content');
                content.innerHTML = `
                    <p>虽然魔物看着令人发憷</p>
                    <p>但你依然能应付得过来</p>
                    <p>你赤手空拳，但你力量惊人</p>
                    <p>很快你就料理了你面前的魔物</p>
                    <p>甚至能腾出手去帮助别人</p>
                    <p>很快，你们将魔物清理干净</p>
                    <p>你也收到了系统提示</p>
                    <p>战斗胜利！你获得了战斗力加成：${reward.power}，物品：${reward.item}</p>
                    <p>此时，你指针一热</p>
                    <button class="choice-btn" onclick="handleChoice('z221114111')">拿起指针</button>
                `;
            } else {
                content.innerHTML = `
                    <p>你疲于应对魔物，勉强击杀了一只后</p>
                    <p>又被另外一只缠住，很快你便难以为继</p>
                    <p>你倒在了血泊之中</p>
                    <button class="choice-btn" onclick="endGame()">游戏结束</button>
                    <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
                `;
            }
        } else if (choice === 'z22131111') {
            const { enemies, reward } = battleScenes['Vallage_monster_1'];
            let result = fight(enemies);
            if (result) {
                characterData.power += reward.power;
                characterData.inventory.push(reward.item);
                const content = document.getElementById('content');
                content.innerHTML = `
                    <p>虽然魔物看着令人发憷</p>
                    <p>但你依然能应付得过来</p>
                    <p>你赤手空拳，但你力量惊人</p>
                    <p>很快你就料理了你面前的魔物</p>
                    <p>甚至能腾出手去帮助别人</p>
                    <p>很快，你们将魔物清理干净</p>
                    <p>你也收到了系统提示</p>
                    <p>战斗胜利！你获得了战斗力加成：${reward.power}，物品：${reward.item}</p>
                    <p>此时，你指针一热</p>
                    <button class="choice-btn" onclick="handleChoice('z221114111')">拿起指针</button>
                `;
            } else {
                content.innerHTML = `
                    <p>你疲于应对魔物，勉强击杀了一只后</p>
                    <p>又被另外一只缠住，很快你便难以为继</p>
                    <p>你倒在了血泊之中</p>
                    <button class="choice-btn" onclick="endGame()">游戏结束</button>
                    <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
                `;
            }
        } else if (choice === 'z221112111') {
            content.innerHTML = `
                <p>老太大吼：我死也不会放过你！</p>
                <p>你没有想到一个老太竟然身手如此敏捷</p>
                <p>只是一瞬间，就冲到了你的面前</p>
                <p>银光一闪，你下意识地用刚捡的匕首挡住了攻击</p>
                <p>更多人朝你冲来，就在此时，大地突然震动起开</p>
                <p>所有人都开始东倒西歪起来</p>
                <p>老太的脸上充满了绝望</p>
                <p>只见脚下的祭坛裂痕越来越多</p>
                <p>最终，祭坛直接崩裂开来，一股黑红色的能量波倾泻而出</p>
                <p>一声声肆意的狂啸响彻这片土地</p>
                <p>“终于哈哈哈哈哈终于出来了！”</p>
                <p>仅仅只是一瞬间，老太、巨人和白袍门僵住在了原地</p>
                <button class="choice-btn" onclick="handleChoice('z2211121111')">为他们“求情”</button>
                <button class="choice-btn" onclick="handleChoice('z2211121112')">冷眼旁观</button>
            `;
        } else if (choice === 'z221112212') {
            content.innerHTML = `
                <p>老太看了你一眼，表情涌起不甘</p>
                <p>她枯手一挥，大叫：“撤！”</p>
                <p>眨眼间，这一队人就消失地无影无踪了</p>
                <p>那股红黑色的能力逐渐凝固成型</p>
                <p>一个身高1m9，身着黑色燕尾服的帅气男子出现在祭坛之上</p>
                <p>祂神色冷峻，但你却倍感亲切</p>
                <p>祂冷眼看像你，瞳孔深邃，邪魅一笑，“你是祂的人”</p>
                <p>“按理说我应该奖励你，但你放跑了村民”</p>
                <p>“没想到祂竟然找了一个如此假善之人”</p>
                <p>“你以为他们逃得了吗？”</p>
                <p>“你还有任务在身，赶紧上路吧”</p>
                <p>一阵黑风吹过，魔神消失不见了</p>
                <p>而这座村早已空无一人，你只能继续上路了</p>
                <button class="choice-btn" onclick="handleChoice('b0')">离开</button>
            `;
        } else if (choice === 'z221114111' ) {
            const panel = document.getElementById('pet-panel');
            panel.style.display = 'block';
            setTimeout(() => panel.classList.add('show'), 10);
            updatePetPanel('鬼雾黑狼', 40, 15);
            content.innerHTML = `
                <p>一股黑雾从怪物身上飘出</p>
                <p>径直朝你而来，还没等你反应过来</p>
                <p>指针就将其吸收了，你也注意到面板的变化</p>
                <p>指针发出声音“看来你成功加固了封印”</p>
                <p>“这是给你的小小奖励，他可以为你出战”</p>
                <p>你抬头看向众人，他们并无异样，脸上尽是兴奋</p>
                <p>显然只有你才能感知这一切</p>
                <p>很快，又有一队人马来到这里</p>
                <p>为首的老太看着你，顿时泪流满面</p>
                <p>“感谢伟大的古神派出使者”</p>
                <p>“我们守护封印太久，神志早已被侵蚀”</p>
                <p>“白天我们终日浑噩，到了晚上才会清醒”</p>
                <p>“感谢使者大人，封印至少百年无恙”</p>
                <p>“或许我们也能过上正常的生活”</p>
                <button class="choice-btn" onclick="handleChoice('z2211141111')">点头致意</button>
            `;   
        } else if (choice === 'z2211121111') {
            content.innerHTML = `
                <p>你开口：“伟大的魔神大人”</p>
                <p>“如今您刚突破封印，还需要一些手下为您办事”</p>
                <p>“他们都是个中好手，不如您给他们种下奴印”</p>
                <p>听闻此言，那股红黑色的能力逐渐凝固成型</p>
                <p>一个身高1m9，身着黑色燕尾服的帅气男子出现在祭坛之上</p>
                <p>祂神色冷峻，村民们噤若寒蝉，但你却倍感亲切</p>
                <p>祂看了看你，瞳孔深邃，邪魅一笑，“你是祂的人”</p>
                <p>“确实有点能耐”</p>
                <p>村民闻言，纷纷破口大骂，因为他们死都不想被奴役</p>
                <p>然而魔神轻轻挥手，黑红色的能量波纷纷涌入村民体内</p>
                <p>很快，他们不再怒吼，而是直接跪倒在地</p>
                <p>齐声道：“参见魔神大人”</p>
                <p>魔神看向了你，大手一挥，“此间事了”</p>
                <p>“你还有任务在身，赶紧上路吧，这个给你，算是奖励”</p>
                <button class="choice-btn" onclick="handleChoice('z22111211111')">道谢</button>
            `;
        } else if (choice === 'z2211121112') {
            const panel = document.getElementById('pet-panel');
            panel.style.display = 'block';
            setTimeout(() => panel.classList.add('show'), 10);
            updatePetPanel('白袍修士', 50, 15);
            content.innerHTML = `
                <p>很快，村民们都没有了气息</p>
                <p>那股红黑色的能力逐渐凝固成型</p>
                <p>一个身高1m9，身着黑色燕尾服的帅气男子出现在祭坛之上</p>
                <p>祂神色冷峻，但你却倍感亲切</p>
                <p>祂看了看你，瞳孔深邃，邪魅一笑，“你是祂的人”</p>
                <p>“确实有点能耐，此间事了”</p>
                <p>“你还有任务在身，赶紧上路吧，这个给你，算是奖励”</p>
                <p>只见一团黑雾从一个白袍尸体上飞出</p>
                <p>你发现你的面板有了变化</p>
                <p>“你还尚未起势，这是战灵，能够帮你战斗”</p>
                <p>“快去吧，祂还在等你”</p>
                <p>你连忙鞠躬道谢，离开了村庄</p>
                <button class="choice-btn" onclick="handleChoice('b0')">离开</button>
            `;
        } else if (choice === 'z2211141111' ) {
            content.innerHTML = `
                <p>老太上前，从腰间抽出一把金色匕首</p>
                <p>“使者大人，我也老了，这把匕首送您”</p>
                <p>“希望能再未来给您带来帮助”</p>
                <p>刚才带队的白袍说，“使者大人”</p>
                <p>“这个是我传家的护身宝物”</p>
                <p>“送给您了，非常感谢您的帮助”</p>
                <p>你低头看去，那是一枚红色的宝石</p>
                <p>拒绝的话都到了嘴边，但你说不出口</p>
                <p>你只能向他们道谢</p>
                <p>老太再次开口，“我们还有一些善后工作”</p>
                <p>“我们要张开结界了，招待不周，请见谅，”</p>
                <p>你明白你该离开了，和他们道别</p>
                <button class="choice-btn" onclick="handleChoice('b0')">离开</button>
            `;  
        } else if (choice === 'z22111211111') {
            const panel = document.getElementById('pet-panel');
            panel.style.display = 'block';
            setTimeout(() => panel.classList.add('show'), 10);
            updatePetPanel('黑尸魂', 50, 20);
            content.innerHTML = `
                <p>你连忙鞠躬道谢，只见一股黑雾朝你飞来</p>
                <p>你没有任何不适，甚至有些舒服</p>
                <p>你惊喜地发现你的面板又有了变化</p>
                <p>“你还尚未起势，这是战灵，能够帮你战斗”</p>
                <p>“快去吧，祂还在等你”</p>
                <p>你再次道谢，离开了村庄</p>
                <button class="choice-btn" onclick="handleChoice('b0')">离开</button>
            `;
        }
        this.updateData(choice);
    },
    updateData: function(choice) {        
        switch(choice) {
            case 'z2211131':
                removeItem('绿宝石');
                characterData.weapon.push('符文匕首');
                characterData.power += 12;
                characterData.hp += 100;
            case 'z221114':
                characterData.hp -= 5;
                break;
            case 'z221321':
                characterData.gold += 20;
                break;
            case 'z22111211': 
                characterData.weapon.push('符文匕首');
                characterData.power += 10;
                break;
            case 'z2211121112':
            case 'z22111211111':
                characterData.inventory.push('邪之印记');
                break;
            case 'z2211141111':
                characterData.inventory.push('红宝石');
                characterData.weapon.push('金色符文匕首');
                characterData.power += 15;
                break;
        }
        updateCharacterPanel();
    }
}