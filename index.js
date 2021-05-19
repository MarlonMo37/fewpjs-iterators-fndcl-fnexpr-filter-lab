// Code your solution here
function findMatching(array, string) {
    return array.filter(d =>
        d.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(array, string) {
    return array.filter( d =>
        d.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}

function matchName(array, string) {
    return array.filter( d =>
        d.name === string
    )
}