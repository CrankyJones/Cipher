$(document).ready(function() {
const sentence = prompt("Tell me anything. (Must be one sentence)");
  console.log(sentence);

  function firstLast() {
    const first = sentence.charAt(0);
    const last = sentence.charAt(sentence.length-1);
    const flLetters = (first + last).toUpperCase();
    alert (flLetters);
    }
  function flipFlop() {
    const first = sentence.charAt(0);
    const last = sentence.charAt(sentence.length-1);
    const lfLetters = (last + first).toUpperCase();
    alert(lfLetters);
  }
  firstLast();
  flipFlop();
});