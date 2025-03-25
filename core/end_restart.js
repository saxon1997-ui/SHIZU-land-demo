// 结束游戏的函数
const WelcomeScreen = {
  init() {
      const welcomeScreen = document.getElementById('welcome-screen');
      
      // 点击任意位置关闭欢迎界面
      welcomeScreen.addEventListener('click', () => {
          // 淡出动画
          welcomeScreen.style.transition = 'opacity 0.5s ease';
          welcomeScreen.style.opacity = '0';
          
          // 动画结束后移除元素并初始化游戏
          setTimeout(() => {
              welcomeScreen.remove();
              this.startGame();
          }, 500);
      });
  },

  startGame() {
      // 初始化音乐系统（此时用户已交互，可以安全播放）
      MusicManager.init();
      SFXManager.init();
      
      // 开始游戏主逻辑
      initGame();
  }
};

// 修改原来的initGame()调用
document.addEventListener('DOMContentLoaded', () => {
  WelcomeScreen.init(); // 改为先显示欢迎界面
});
function endGame() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <p class="game-over-text">💀 你的生命值已耗尽...</p>
    <p class="game-over-text">游戏结束！</p>
    <button class="choice-btn" onclick="restartGame()">新游戏</button>
    <button class="choice-btn" onclick="restartChapter()">从存档点开始</button>
  `;
  globalDeathCount += 1;
  sessionStorage.setItem('globalDeathCount', globalDeathCount);
  hidecharacterpanel()
  hidePetPanel();
  updateCharacterPanel();
}
  
// 重新开始游戏的函数
function restartGame() {
// 重置全局数据
  globalDeathCount += 1;
  sessionStorage.setItem('globalDeathCount', globalDeathCount);
  localStorage.removeItem('gameData');  
  characterData = {
    hp: 100,
    power: 5,
    gold: 0,
    weapon: null,
    inventory: ['绿宝石']
    };

    petData = {
    hp: 0,
    power: 0
    };

    battleScenes = getInitialBattleScenes();
    hidePetPanel();
    hidecharacterpanel()
    updateCharacterPanel();

    currentChapter = Prologue;
    currentChapter.initialize();
  }

function saveGameData() {
  const gameData = {
      characterData: characterData,
      petData: petData,
      currentChapter: currentChapter.name
  };
  localStorage.setItem('gameData', JSON.stringify(gameData));
  alert('存档成功！');
}

function restartChapter() {
  const savedData = localStorage.getItem('gameData');
  if (savedData) {
      try {
          const gameData = JSON.parse(savedData);

          // 检查 gameData 是否包含必要的字段
          if (!gameData.characterData || !gameData.currentChapter) {
              alert('存档数据损坏，无法继续！');
              return;
          }

          // 恢复角色数据
          characterData = gameData.characterData;
          petData = gameData.petData;
          hidePetPanel();

          // 恢复当前章节
          currentChapter = window[gameData.currentChapter];
          if (!currentChapter) {
              alert('章节数据丢失，无法继续！');
              return;
          }

          // 初始化当前章节
          battleScenes = getInitialBattleScenes();
          currentChapter.initialize();
          updateCharacterPanel();
          console.log('从存档点继续成功！');
          globalDeathCount += 1;
          sessionStorage.setItem('globalDeathCount', globalDeathCount);
      } catch (error) {
          alert('从存档点继续失败，请检查数据是否损坏！');
      }
  } else {
      restartGame(); // 如果没有存档，直接开始新游戏
  }
}
function checkHealth() {
  if (characterData.hp <= 0) {
      endGame();
  }
}