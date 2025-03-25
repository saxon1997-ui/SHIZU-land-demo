// puzzle.js
let timerInterval = null;
let timeLeft = 0;
let puzzleActive = true;

window.PuzzleModule = {
    // 谜题数据
    
    puzzles: {
        templeEntrance: {
            id: 'templeEntrance',
            sequence: ['blue', 'red', 'yellow'],
            next:'b12',
            description: `
            石门前有五枚颜色各异的符文<br>
            <br>
            门前的石碑上写着：水滋润大地，火守卫生命，金斩尽邪祟
            `,
            description_passed: '你获得了古藤的滋润，生命值+30',
            success: {
                message: '⚡藤蔓发出轰鸣声，缓缓打开',
                reward: { hp: 30 }
            },
            failure: {
                message: '❌错误的顺序！藤蔓猛烈扭动，抽打在你身上',
                penalty: { hp: -10 }
            }
        },
        power_1: {
            id: 'power_1',
            sequence: ['yellow', 'wood','blue','red','dirt','dirt','wood','blue','yellow','red'],
            description:'金木水火土，土木水金火',
            description_passed: '你获得了古藤的滋润，生命值+30',
            timeLimit: 10,
            next:'b411',
            success: {
                message: '✨石碑发出耀眼的光芒！',
                reward: {  hp: 30 }
            },
            failure: {
                message: '❌挑战失败，你被藤蔓抽打！',
                penalty: { hp: -10 }
            }
        },
        mental_1: {
            id: 'mental_1',
            sequence: ['yellow', 'yellow','yellow'],
            description:'“火克？，？生水，？克木”',
            description_passed: '你获得了古藤的滋润，生命值+30',
            next:'b421',
            success: {
                message: '✨石碑发出耀眼的光芒！',
                reward: {  hp: 30 }
            },
            failure: {
                message: '❌挑战失败，你被藤蔓抽打！',
                penalty: { hp: -10 }
            }
        },
        power_2: {
            id: 'power_2',
            sequence: ['blue','red','wood','dirt','yellow', 'blue','yellow','wood','blue','dirt','dirt','dirt','yellow','dirt','red','blue','blue','wood','red','yellow'],
            description:`
            水火木土金，水金木水土<br>
            <br>
            土土金土火，水水木火金<br>
            `,
            description_passed: '你获得了古藤的滋润，生命值+30',
            timeLimit: 20,
            next:'b411111',
            success: {
                message: '✨石碑发出耀眼的光芒！',
                reward: {  hp: 30 }
            },
            failure: {
                message: '❌挑战失败，你被藤蔓抽打！',
                penalty: { hp: -10 }
            }
        },
        mental_2: {
            id: 'mental_2',
            sequence: ['yellow','yellow','blue','red','wood','dirt'],
            description:`
            兄弟各持刀，夫妻互不容<br>
            <br>
            木匠独雕刻，卖与憨厚郎<br>
            `,
            description_passed: '你获得了古藤的滋润，生命值+30',
            next:'b421111',
            success: {
                message: '✨石碑发出耀眼的光芒！',
                reward: {  hp: 30 }
            },
            failure: {
                message: '❌挑战失败，你被藤蔓抽打！',
                penalty: { hp: -10 }
            }
        },
    },

    // 初始化谜题
    initializePuzzle: function(puzzleId) {
        const puzzle = this.puzzles[puzzleId];
        if (!puzzle) {
            console.error(`谜题 ${puzzleId} 不存在！`);
            return;
        }
    
        // 重置谜题状态
        puzzleActive = true;
        this.enableColorButtons();
        window.currentSequence = [];
        window.currentPuzzle = puzzleId;
    
        const content = document.getElementById('content');
        content.innerHTML = `
            <p>${puzzle.description}</p>
            <div class="puzzle-buttons">
                ${this.createColorButton('red', '🔥')}
                ${this.createColorButton('blue', '💧')}
                ${this.createColorButton('yellow', '🪙')}
                ${this.createColorButton('wood', '🪵')}
                ${this.createColorButton('dirt', '🪨')}
            </div>
        `;
    
        if (puzzle.timeLimit !== undefined) {
            this.startTimer(puzzle.timeLimit);
        } else {
            this.resetTimer();
        }
    },
    // 创建颜色按钮
    createColorButton: function(color, emoji) {
        return `
            <button class="color-btn ${color}" 
                    onclick="PuzzleModule.handlePuzzleClick('${color}')"
                    data-tooltip="点击${emoji}">
                ${emoji}
            </button>
        `;
    },
    // 处理按钮点击
    handlePuzzleClick: function(color) {
        const puzzle = this.puzzles[window.currentPuzzle];
        
        // 如果有时间限制且时间耗尽，或者谜题已失败，则直接返回
        if (!puzzleActive || (puzzle.timeLimit !== undefined && timeLeft <= 0)) return;
        
        const content = document.getElementById('content');
        
        // 添加当前点击的颜色到序列中
        window.currentSequence.push(color);
        
        if (window.currentSequence.length === puzzle.sequence.length) {
            if (this.validateSequence(window.currentSequence, puzzle.sequence)) {
                content.innerHTML += `
                    <p class="puzzle-success">${puzzle.success.message}</p>
                    <p>${puzzle.description_passed}</p>
                    <button class="choice-btn" onclick="handleChoice('${puzzle.next}')">继续前进</button>
                `;
                this.applyReward(puzzle.success.reward);
                this.resetTimer();
            } else {
                content.innerHTML += `
                    <p class="puzzle-fail">${puzzle.failure.message}</p>
                    <button class="choice-btn" onclick="PuzzleModule.initializePuzzle('${puzzle.id}')">重新尝试</button>
                `;
                this.applyPenalty(puzzle.failure.penalty);
                this.resetTimer();
                puzzleActive = false; // 设置为不活跃状态
                this.disableColorButtons(); // 禁用按钮
            }
            window.currentSequence = []; // 重置序列
        }
    },
    startTimer: function(timeLimit) {
        clearInterval(timerInterval);
        timeLeft = timeLimit;
        const timerDisplay = document.getElementById('timer-display');
        if (timerDisplay) {
            timerDisplay.textContent = timeLeft;
            timerDisplay.classList.remove('hidden'); 
        }
    
        timerInterval = setInterval(() => {
            timeLeft -= 1;
            if (timerDisplay) {
                timerDisplay.textContent = timeLeft;
            }
    
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                this.handleTimeOut();
            }
        }, 1000);
    },
    
    // 时间耗尽处理
    handleTimeOut: function() {
        const puzzle = this.puzzles[window.currentPuzzle];
        const content = document.getElementById('content');
        content.innerHTML += `
            <p class="puzzle-fail">${puzzle.failure.message}</p>
            <button class="choice-btn" onclick="PuzzleModule.resetPuzzle('${puzzle.id}')">重新尝试</button>
        `;
        this.applyPenalty(puzzle.failure.penalty);
    },
    disableColorButtons: function() {
        const buttons = document.querySelectorAll('.color-btn');
        buttons.forEach(button => {
            button.disabled = true;
            button.style.opacity = '0.5';
            button.style.cursor = 'not-allowed';
        });
    },
    // 启用颜色按钮
    enableColorButtons: function() {
        const buttons = document.querySelectorAll('.color-btn');
        buttons.forEach(button => {
            button.disabled = false;
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
        });
    },
    // 重置倒计时
    resetTimer: function() {
        clearInterval(timerInterval); // 清除计时器
        timeLeft = 0; // 重置剩余时间
        const timerDisplay = document.getElementById('timer-display');
        if (timerDisplay) {
            timerDisplay.textContent = '';
            timerDisplay.classList.add('hidden'); 
        }
    },
    // 验证点击顺序
    validateSequence: function(sequence, correctSequence) {
        return sequence.every((color, index) => color === correctSequence[index]);
    },

    // 应用奖励
    applyReward: function(reward) {
        if (reward.hp) characterData.hp += reward.hp;
        if (reward.power) characterData.power += reward.power;
        if (reward.item && !characterData.inventory.includes(reward.item)) {
            characterData.inventory.push(reward.item);
        }
        updateCharacterPanel();
    },

    // 应用惩罚
    applyPenalty: function(penalty) {
        if (penalty.hp) characterData.hp += penalty.hp;
        updateCharacterPanel();
        checkHealth(); // 检查生命值
    },

    // 重置谜题
    resetPuzzle: function(puzzleId) {
        this.resetTimer(); // 确保计时器重置
        puzzleActive = true; // 重置为活跃状态
        this.enableColorButtons(); // 启用按钮
        window.currentSequence = []; // 清空当前序列
        this.initializePuzzle(puzzleId); // 重新初始化谜题
    },
};