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
      height: "220px",
      x: "right",
      y: "bottom",
      right: 20,
      bottom: 20,
      background: "#0a0806",
      border: 1,
      html: `
        <div class="radio-player">
          <iframe 
            src="https://www.youtube-nocookie.com/embed/5A9OIIapSko?autoplay=1" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
          </iframe>
          <div class="radio-status">ATB — 9PM (Till I Come)</div>
        </div>
      `,
      onclose: function() {
        radioWindow = null;
        return false; // Allow close
      }
    });
  };
  
  // Auto-spawn radio on page load (optional - comment out to disable)
  // window.addEventListener('load', function() {
  //   setTimeout(window.spawnRadio, 1000);
  // });
  
})();
