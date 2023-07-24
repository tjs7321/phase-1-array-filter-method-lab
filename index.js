function findMatching(array, string) {
    let newArray = []
    for (let driver of array) {
        if (driver.toLowerCase() === string.toLowerCase()) {
            newArray.push(driver)
        }
    }
    return newArray
}

function fuzzyMatch(array, string) {
    let newArray = []
    for (let driver of array) {
        if ((driver.toLowerCase()).startsWith(string.toLowerCase())) {
            newArray.push(driver)
        }
    }
    return newArray
}

function matchName(array, string) {
    let newArray = []
    for (let driver of array) {
        if (driver.name.toLowerCase() === string.toLowerCase()) {
            newArray.push(driver)
        }
    }
    return newArray
}