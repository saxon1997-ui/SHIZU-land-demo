// 音乐管理器
const MusicManager = {
    currentBGM: null,
    volume: 0.5,
    init() {
        // 初始化音频
        this.currentBGM = document.getElementById('bgm-prologue');
        this.currentBGM.volume = this.volume;
        this.currentBGM.play().catch(e => console.log("Autoplay blocked:", e));

        // 音量控制按钮
        const toggleBtn = document.getElementById('music-toggle');
        toggleBtn.addEventListener('click', () => {
            this.toggleMute();
        });

        // 音量滑块
        const volumeSlider = document.getElementById('volume-control');
        volumeSlider.addEventListener('input', (e) => {
            this.setVolume(parseFloat(e.target.value));
        });
    },

    playBGM(chapter) {
        const bgm = document.getElementById(`bgm-${chapter}`);
        if (this.currentBGM) this.currentBGM.pause();
        bgm.volume = this.volume;
        bgm.play();
        this.currentBGM = bgm;
    },

    setVolume(vol) {
        this.volume = vol;
        if (this.currentBGM) this.currentBGM.volume = vol;
        document.getElementById('volume-control').value = vol;
        document.getElementById('music-toggle').textContent = vol > 0 ? '🔊' : '🔇';
    },

    toggleMute() {
        this.setVolume(this.volume > 0 ? 0 : 0.5);
    }
};

const SFXManager = {
    sounds: {},
    volume: 0.7,
    isMuted: false,
    lastVolume: 0.7,

    init() {
        this.sounds = {
            click: this.loadSound('audio/sfx/button-click.mp3'),
            hover: this.loadSound('audio/sfx/button-hover.mp3'),
        };
        this.preloadSounds();

        const sfxToggle = document.getElementById('sfx-toggle');
        const sfxVolumeSlider = document.getElementById('sfx-volume-control');

        if (sfxToggle && sfxVolumeSlider) {
            sfxVolumeSlider.value = this.volume;
            sfxToggle.addEventListener('click', () => {  // 箭头函数保持 this
                this.toggleMute();
                this.updateUI();
            });
            sfxVolumeSlider.addEventListener('input', (e) => {  // 箭头函数保持 this
                this.setVolume(parseFloat(e.target.value));
                this.updateUI();
            });
        }
    },

    loadSound(path) {
        try {
            const sound = new Audio(path);
            sound.addEventListener('error', () => {
                console.error(`Failed to load sound: ${path}`);
            });
            sound.load();
            return sound;
        } catch (e) {
            console.error(`Failed to load sound: ${path}`, e);
            return null;
        }
    },

    preloadSounds() {
        Object.values(this.sounds).forEach(sound => {
            if (!sound) return;
            sound.volume = this.volume;
            sound.addEventListener('error', () => {
                console.log("音效预加载失败:", sound.src);
            });
            sound.load();
        });
    },

    play(type) {
        if (!this.sounds[type]) {
            console.error(`Sound "${type}" not found!`);
            return;
        }
        const sound = this.sounds[type];
        sound.currentTime = 0;
        sound.volume = this.volume;
        sound.play().catch(e => console.log("音效播放失败:", e));
    },

    setVolume(vol) {
        this.volume = vol;
        Object.values(this.sounds).forEach(sound => {
            if (sound) sound.volume = vol;
        });
        this.updateUI();
    },

    toggleMute() {
        if (this.volume > 0) {
            this.lastVolume = this.volume; // 保存当前音量
            this.setVolume(0); // 静音
        } else {
            this.setVolume(this.lastVolume || 0.7); // 恢复音量（默认 0.7）
        }
    },

    updateUI() {
        document.getElementById('sfx-volume-control').value = this.volume;
        document.getElementById('sfx-toggle').textContent = this.volume > 0 ? '🔔' : '🔕';
    },
};

// 初始化音频系统
function initAudio() {
    MusicManager.init();
    SFXManager.init();
}

// 在页面加载时初始化
window.addEventListener('DOMContentLoaded', initAudio);