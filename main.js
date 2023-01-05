let ss = `
010-9765-4587
hello world
saco2020a@gmail.com
https:// www.google.com
All work and no play makes Jack a dull boy
abbcccdddd
pray
proxy__
`

// console.log(
//   ss.match(/[fox]/g)
// )
// //단어 fox가 아니고, f,o,x다 찾는다

// console.log(
//   ss.match(/[a]{3,}/g)
// )
// //패턴을 두개 이어서 사용 물론 가능하다.
// //[a부터 z가 들어간 문자중]{5개 이상 연속되는}/문자열 내 모든 문자들 선택

// console.log(
//   ss.match(/\w/g)
// )
// //각종 알파벳과 언더바까지 도출되는 것을 확인할 수 있다

// console.log(
//   ss.match(/\bp\w{1,}\b/g)
// )
// //쉽게말하면, p로 시작하는 단어,
// // \b로 경계설정, p\W{1,} p로 시작하고 63개의 문자 1개가 연속된다. \b로 경계마침
// //그러니까 경계없이 p로 시작되는 1개이상의 문자를 가진 문자. = f로 시작하는 단어.

console.log(
  ss.match(/(?<=@)/g)
)