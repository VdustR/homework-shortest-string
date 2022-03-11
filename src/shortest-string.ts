function shortestStr(str: string, requireAlphabets: string) {
  const requireCharArr = [...new Set(requireAlphabets.split(""))];
  const indexArr = Object.fromEntries(
    requireCharArr.map((alphabet) => [alphabet, -1])
  );
  let length = Infinity;
  let startIndex = -1;
  let endIndex = -1;
  let findAllChars = false;
  str.split("").forEach((char, index) => {
    if (!requireCharArr.includes(char)) return;
    indexArr[char] = index;
    if (!findAllChars && Object.values(indexArr).every((index) => index >= 0)) {
      findAllChars = true;
    }
    if (findAllChars) {
      const indexNumbers = Object.values(indexArr);
      let maxIndex = Math.max(...indexNumbers);
      let minIndex = Math.min(...indexNumbers);
      const currentLength = maxIndex - minIndex + 1;
      if (currentLength < length) {
        length = currentLength;
        startIndex = minIndex;
        endIndex = maxIndex;
      }
    }
  });
  if (length === Infinity) {
    return null;
  }
  return str.substring(startIndex, endIndex + 1);
}

export default shortestStr;
