/* const element =  document.createElement('h1')
element.innerText = 'Hello, first deploy with react !!!'
const container = document.getElementById('root')
container.appendChild(element) */

// Work with JSX
import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  first_name: 'Marlon',
  last_name: 'García',
  ocupations: 'Teacher',
  age: 47,
  pothography: 'https://avatars1.githubusercontent.com/u/60376045?s=460&u=e0a843e701d1d571676809481bd966ec74f5660c&v=4'
}

function getUser(user){
  return `${user.first_name} ${user.last_name}`
}

function GetSalutationUser(user) {
  if (user) {
    return <h1>Hello "{getUser(user)}", first deploy made with react !!!</h1>
  }
    return <h1>Hello "strange", first deploy made with react !!!</h1>
}

/* const name = 'Marlon García' */
// const element = <div>{GetSalutationUser(user)}</div>

// works with children
const element = (
  <div>
    {GetSalutationUser(user)}
    <img src={user.pothography} />
  </div>
)

const container = document.getElementById('root')
// ReactDOM.render(what, __where__)
ReactDOM.render(element, container)
