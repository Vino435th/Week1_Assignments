let s = " fly me to the moon ";

let tr = s.slice(1,19);
console.log(tr)

let sp = tr.split(" ")
console.log(sp)

let lastWord = sp[4]
console.log(lastWord)

let lenghtLastword = lastWord.length;
console.log(`The last word length is ${lenghtLastword}`)
