const toggleButton = document.createElement("button");
toggleButton.innerText = "Toggle Theme";
document.body.prepend(toggleButton);

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    toggleButton.innerText = "Switch to Light Theme";
  } else {
    toggleButton.innerText = "Switch to Dark Theme";
  }
});

// Add styles for dark theme
const style = document.createElement("style");
style.innerHTML = `
  .dark-theme {
    background-color: #333;
    color: #fff;
  }
  .dark-theme header {
    background-color: #444;
  }
  .dark-theme footer {
    background-color: #444;
  }
`;
document.head.appendChild(style);
