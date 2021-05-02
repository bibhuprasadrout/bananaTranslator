let userInput = document.querySelector('#user-input')
let translate = document.querySelector('#translate')
let output = document.querySelector('#output')

// //  mock server
// let serverURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json'
let serverURL = 'https://api.funtranslations.com/translate/minion.json'

// function
function urlInput(inputText){
  return serverURL + '?text=' + inputText
}

function clickHandler() {
  let inputText = userInput.value
  console.log(inputText)
  fetch(urlInput(inputText))
  .then(response => response.json())
  .then(json => {
    console.log(json.contents.text)
    let translatedText = json.contents.translated
  output.innerText = translatedText})
}

// event listener
translate.addEventListener('click', clickHandler)

// function processData(char,index,inputStringArr){
//   if(index === 0){
//     inputStringArr[index] = 'b'
//   }else if(index%5 === 0){
//     inputStringArr[index] = 'b'
//   }else if(index%7 === 0){
//     inputStringArr[index] = 'N'
//   }else if(index%11 === 0){
//     inputStringArr[index] = 'n'
//   }else{
//     inputStringArr[index] = 'a'
//   }
// }
 
// function translated(){
//   let inputString = userInput.value
//   let inputStringArr = inputString.split('')
//   inputStringArr.forEach(processData)
//   inputString = inputStringArr.toString().replace(/,/g ,'') 
//   // using regular expression within the replace method to remove all occurance of ',' ; in the new string that was created from an array.
//   output.innerText = inputString
// }
