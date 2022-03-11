function shortestStr(str: string, requireAlphabets: string) {
  const requireCharArr = [...new Set(requireAlphabets.split(""))];
  let shortestStr: null | string = null;
  const charArr = str.split("");
  charArr.forEach((_, startIndex) => {
    charArr.forEach((_, endIndex) => {
      if (endIndex < startIndex) return;
      const currentStr = charArr.slice(startIndex, endIndex + 1).join("");
      if (requireCharArr.every((alphabet) => currentStr.includes(alphabet))) {
        if (shortestStr === null || currentStr.length < shortestStr.length) {
          shortestStr = currentStr;
        }
      }
    });
  });

  return shortestStr;
}

export default shortestStr;
