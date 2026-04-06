function findVowels(str) {
  const vowelList = "aeiouAEIOU";
  let count = 0;
  
  for (let char of str) {
    if (vowelList.includes(char)) {
      count++;
    }
  }
  return count;
}
