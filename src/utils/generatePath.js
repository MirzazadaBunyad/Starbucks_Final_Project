function generatePath(str) {
    return str.toLowerCase().split(" ").join("-")
}
export { generatePath };