window.Chapter1_2 = {
    name: 'Chapter1_2',
    // 初始化章节内容
    initialize: function() {
        // 设置章节标题
        setChapterTitle('第一章&emsp;藤蔓森林');
        
        // 设置初始内容
        const initialHTML = `
            <p>很快，你发现了一个废弃营地</p>
            <p>在这里你可以好好休息了</p>
            <button class="choice-btn" onclick="handleChoice('b1')">继续出发</button>
            <button class="choice-btn" onclick="handleChoice('b2')">休息</button>
        `;
        const content = document.getElementById('content');
        content.innerHTML = initialHTML;
        updateCharacterPanel();
    },
    handleChoice: function(choice) {
        const content = document.getElementById('content');
        if (choice === 'b1') {
            content.innerHTML = `
                <p>你像是有什么大病要急着走</p>
                <p>当你被一群野兽拦住去路时，你后悔了</p>
                <p>提示：这是demo的最后一次战斗</p>
                <p>提示：如果战斗通过，则说明到目前为止</p>
                <p>提示：你的选择都相对正确</p>
                <button class="choice-btn" onclick="handleChoice('b11')">战斗</button>
            `;
        } else if (choice === 'b2') {
            content.innerHTML = `
                <p>你一觉睡到了太阳高照</p>
                <p>你继续出发了，很快，你被一群野兽拦住去路</p>
                <p>提示：这是demo的最后一次战斗</p>
                <p>提示：如果战斗通过，则说明到目前为止</p>
                <p>提示：你的选择都相对正确</p> 
                <button class="choice-btn" onclick="handleChoice('b11')">战斗</button>
            `;
        } else if (choice === 'b11') {
            const { enemies, reward } = battleScenes['Forest_monster_1'];
            let result = fight(enemies);
            if (result) {
                const content = document.getElementById('content');
                content.innerHTML = `
                    <p>你成功击败了魔物</p>
                    <p>战斗胜利！</p>
                    <p>感谢游玩demo版本！</p>
                    <button class="choice-btn" onclick="endGame()">游戏结束</button>
                    <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
                `;
            } else {
                content.innerHTML = `
                    <p>你被魔物击杀了！</p>
                    <p>战斗失败！</p>
                    <p>感谢游玩demo版本！</p>
                    <button class="choice-btn" onclick="endGame()">游戏结束</button>
                    <button class="choice-btn" onclick="restartChapter()">从存档点继续</button>
                `;
            }        
        }
        this.updateData(choice);
    },
    updateData: function(choice) {        
        switch(choice) {
            case 'b2':
                characterData.hp += 50;
                break;
        } 
        updateCharacterPanel();
    }
}