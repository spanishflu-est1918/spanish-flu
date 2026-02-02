// ══════════════════════════════════════════════════════════════
// SPANISH FLU RADIO - WinBox Floating Player
// ══════════════════════════════════════════════════════════════

(function() {
  let radioWindow = null;
  
  window.spawnRadio = function() {
    // If window exists, focus it
    if (radioWindow) {
      radioWindow.focus();
      return;
    }
    
    // Create the radio player
    radioWindow = new WinBox({
      title: "⌈ RADIO ⌋",
      class: ["amber-terminal"],
      width: "320px",
      height: "140px",
      x: "right",
      y: "bottom",
      right: 20,
      bottom: 20,
      background: "#0a0806",
      border: 1,
      html: `
        <div class="radio-player" style="padding: 20px; text-align: center;">
          <audio id="radio-audio" src="/assets/atb-9pm.mp3" autoplay loop></audio>
          <div class="radio-status" style="color: #b4641e; font-family: 'Courier New', monospace; margin-bottom: 15px;">ATB — 9PM (Till I Come)</div>
          <button onclick="document.getElementById('radio-audio').paused ? document.getElementById('radio-audio').play() : document.getElementById('radio-audio').pause()" style="background: #1a1510; color: #b4641e; border: 1px solid #b4641e; padding: 8px 20px; cursor: pointer; font-family: 'Courier New', monospace;">⏯ PLAY/PAUSE</button>
        </div>
      `,
      onclose: function() {
        radioWindow = null;
        return false; // Allow close
      }
    });
  };
  
})();
