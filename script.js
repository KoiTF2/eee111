document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
        if (input.value == input.getAttribute("key"))
            input.classList.add("correct");
        else
            input.classList.remove("correct");
    });
});
