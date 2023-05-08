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

function titleCased(){
    return tutorials.map(words => {
     let x =  words.split(" ")
     let a = x.map(z=> z[0].toUpperCase()+z.slice(1))
     let b = a.join(" ")
     console.log(b);
     return b
 
     });
    
    } 
