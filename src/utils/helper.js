export function capitalizeEachWord(sentence) {
  if (typeof sentence !== "string" || sentence.length === 0) {
    console.error("Input is not a valid string");
    return "";
  }

  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
