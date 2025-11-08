
    const textarea = document.getElementById("words");
    const counter = document.getElementById("count");

    textarea.addEventListener("input", () => {
      counter.innerHTML = textarea.value.length;
    });