window.Thanks = {
    name: 'Thanks',
    // 初始化章节内容
    initialize: function() {
        // 设置章节标题
        setChapterTitle('致&emsp;谢&emsp;感谢您游玩demo！');
        changeBackground('Thanks');
        // 设置初始内容
        const playTimeMs = GameTimer.getPlayTime();
        const minutes = Math.floor(playTimeMs / 60000);
        const seconds = ((playTimeMs % 60000) / 1000).toFixed(1);
        const initialHTML = `
            <p>非常感谢您的游玩!</p>
            <p>您的游戏时长为：游玩时间：${minutes}分${seconds}秒</p>
            <p>您的死亡次数为：${globalDeathCount}</p>
            <p>如您有任何建议，请联系邮箱 shizuland@sina.com</p>
            <p>非常感谢您的支持！</p>
            <p>如果您需要获取更多信息</p>
            <p>或亲切问候（打赏）作者</p>
            <p>请扫描下方二维码关注公众号</p>
            <div class="gamebox">
                <img src="images/qrcode.jpg" alt="公众号二维码" style="max-width: 200px; height: auto;">
            </div>
            <p>另：黑纸契约和白纸契约在村庄直线中有不同的剧情</p>
            <button class="choice-btn" onclick="restartGame()">新游戏</button>
        `;
        const content = document.getElementById('content');
        content.innerHTML = initialHTML;
        updateCharacterPanel();
    }
}