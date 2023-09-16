// Code your solution here
function findMatching(array, string) {
  const result = array.filter((name) => name.toLowerCase() === string.toLowerCase())
  return result
}

function fuzzyMatch(array, string) {
  const result = array.filter((name) =>
    name.substr(0,string.length) === string
  )
  return result
}

function matchName(array, string) {
  const result = array.filter((obj) =>
  string === obj.name
  )
  return result
}
