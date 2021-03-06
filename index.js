function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value
}

function addNewElementAsLi(){
  let employeeInfo = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeInfo}</li>`)
}

function resetInput(){
  document.querySelector('input').value = ''
}

function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(event){
    addNewElementAsLi()
    resetInput()
  })
}

function clearEmployeeListOnLinkClick(){
  let a = document.querySelector('a')
  let ul = document.querySelector('ul')
  a.addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}
