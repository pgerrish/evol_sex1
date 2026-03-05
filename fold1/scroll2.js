document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll("div.sourceCode");

  blocks.forEach((block) => {
    block.style.maxHeight = "300px";
    block.style.overflowY = "auto";
    block.style.border = "1px solid #ddd";
    block.style.padding = "0.5em";
  });
});
