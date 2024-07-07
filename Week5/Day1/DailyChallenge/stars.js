
for (let width = 1; width <= 5; ++width) {
    let cur_line = ""
    for (let cur_pos = 1; cur_pos <= width; ++cur_pos) {
        cur_line += "* "
    }
    console.log(cur_line)
}


for (let width = 1; width <= 5; ++width) {
    let cur_line = "* ".repeat(width)
    console.log(cur_line)
}