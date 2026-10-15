// Web Audio API Synthesizer with sweet purrs, chirps, and meow pops
class CatSoundFx {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.init();
      this.playPurr();
    }
    return this.enabled;
  }

  // Cute chirp / paw pop sound
  playPop(freq = 640) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.6, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.16, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch (e) {}
  }

  // Playful Purr vibration sound
  playPurr() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      const masterGain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(75, this.ctx.currentTime);

      lfo.frequency.setValueAtTime(24, this.ctx.currentTime); // Purr flutter rate
      lfoGain.gain.setValueAtTime(30, this.ctx.currentTime);

      lfo.connect(osc.frequency);

      masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 0.1);
      masterGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.7);

      osc.connect(masterGain);
      masterGain.connect(this.ctx.destination);

      lfo.start();
      osc.start();
      lfo.stop(this.ctx.currentTime + 0.7);
      osc.stop(this.ctx.currentTime + 0.7);
    } catch (e) {}
  }

  // Sweet chime sound for success / order / modal
  playChime() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6 arpeggio
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);

        const startTime = this.ctx.currentTime + idx * 0.06;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.12, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.35);
      });
    } catch (e) {}
  }
}

export const catAudio = new CatSoundFx();
// Also export alias for compatibility
export const sweetAudio = catAudio;
