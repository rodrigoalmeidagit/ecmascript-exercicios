var array = [1, 2, 3, 3, 4, 5]

function removeDuplicatas(array) {
  return array.reduce((previous, current) => {
    console.log('previousCurrent', previous, current);
    if (!previous.find(prevItem => {
      return prevItem === current;
    })) {
      previous.push(current)
    }
    return previous
  }, [])
}


console.log(removeDuplicatas(array));