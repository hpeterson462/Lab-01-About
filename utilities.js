export function translateToAYes(word) {
  const firstLetter = word.charAt(0).toLowerCase;
  if (firstLetter === 'y') {
    return 'yes';
  } else {
    return 'no';
  }
}

