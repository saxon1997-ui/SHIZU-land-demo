// 结束游戏的函数
function endGame() {
  const content = document.getElementById('content');
  content.innerHTML = `
  <p>游戏结束，但你可以重新开始。</p>
  <button class="choice-btn" onclick="restartGame()">新游戏</button>
  `;
  hidecharacterpanel()
  hidePetPanel();
  updateCharacterPanel();
}
  
// 重新开始游戏的函数
function restartGame() {
// 重置全局数据
  localStorage.removeItem('gameData');  
  characterData = {
    hp: 100,
    power: 5,
    gold: 0,
    weapon: [],
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
      } catch (error) {
          alert('从存档点继续失败，请检查数据是否损坏！');
      }
  } else {
      restartGame(); // 如果没有存档，直接开始新游戏
  }
}
