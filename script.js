function check(input, key) {
    if (input.value == key)
        input.classList.add("correct");
    else
        input.classList.remove("correct");
}
