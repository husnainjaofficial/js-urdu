const name = "Husnain"
const repocount = 2

// console.log(name + repocount + " Value");          => Husnain2 Value

console.log(`My name is ${name}.My Github repo count is ${repocount}.`);

const gameName = new String('Husnainfc')

//  console.log(gameName.length);            => 9
//  console.log(gameName.__proto__);         => {}
//  console.log(gameName[2]);                => s
//  console.log(gameName.indexOf("i"));       => 5
//  console.log(gameName.charAt(1));         => u


const newString = gameName.substring(0,5)
//  console.log(newString);                   => Husn  (it only gives from 0 to 4 not including 5)

const anotherString = gameName.slice(-8, 6)
//  console.log(anotherString);

const newStringOne = "    Husnain    "
//  console.log(newStringOne);
//  console.log(newStringOne.trim());            => It trims the extra spaces

const url = "https://husnain.com/husnain&20javed"
//   console.log(url.replace('&20', '-'));            => To replace the url value

const gamecode = "Husnain-javed-fc"
//  console.log(gamecode.split('-'));                 => It splits the value on the basis of given Expression i.e "-"
