function isAnagram(str,str1){
 let  s =  str.toLowerCase().split('').sort().join('')
 let s1 =  str1.toLowerCase().split('').sort().join('')

 return s === s1;

}
console.log(isAnagram('listen','silent'))
console.log(isAnagram('hello','World'))