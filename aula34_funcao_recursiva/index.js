function recursiva(max) {
    console.log(max)
    if (max >= 50) return;
    max++;
    recursiva(max)
}
recursiva(-10)
