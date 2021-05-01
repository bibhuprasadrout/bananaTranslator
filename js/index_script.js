let userInput = document.querySelector('#user-input')
let translate = document.querySelector('#translate')
let output = document.querySelector('#output')

// function

function processData(char,index,inputStringArr){
  if(index === 0){
    inputStringArr[index] = 'b'
  }else if(index%5 === 0){
    inputStringArr[index] = 'b'
  }else if(index%7 === 0){
    inputStringArr[index] = 'N'
  }else if(index%11 === 0){
    inputStringArr[index] = 'n'
  }else{
    inputStringArr[index] = 'a'
  }
}
 
function translated(){
  let inputString = userInput.value
  let inputStringArr = inputString.split('')
  inputStringArr.forEach(processData)
  inputString = inputStringArr.toString().replace(/,/g ,'') 
  // using regular expression within the replace method to remove all occurance of ',' ; in the new string that was created from an array.
  output.innerText = inputString
}

// event listener
translate.addEventListener('click', translated)
