const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function stuff(item) {
    let spacelessObjects = item.split(" ");
    let capitalWords = spacelessObjects.map(function capitaliseWords(words) {
        return words[0].toUpperCase() + words.slice(1);  
    })
    let combinedSentence = capitalWords.join(" ");
    return combinedSentence
  });
} 


  console.log(titleCased());
