console.log("Chess Eval Bar Auto loaded on", window.location.href);

// Function to force the eval bar to be visible
function showEvalBar() {
  // Container for the eval bar
  const evalWrapper = document.querySelector("#board-layout-evaluation");
  const evalBar = document.querySelector("wc-evaluation-bar");

  if (evalWrapper) {
    evalWrapper.style.display = "block";
    evalWrapper.style.visibility = "visible";
    evalWrapper.style.opacity = "1";
  }

  if (evalBar) {
    evalBar.style.display = "block";
    evalBar.style.visibility = "visible";
    evalBar.style.opacity = "1";
  }

  // Optional: force the eval text to show
  const evalScore = document.querySelector(".evaluation-bar-score");
  if (evalScore) {
    evalScore.style.display = "inline";
    evalScore.style.visibility = "visible";
    evalScore.style.opacity = "1";
  }
}

// Run once after the page loads
showEvalBar();

// Watch for DOM changes in case the board reloads (new game)
const observer = new MutationObserver(showEvalBar);
observer.observe(document.body, { childList: true, subtree: true });
