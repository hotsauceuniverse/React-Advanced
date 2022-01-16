import React from "react"
import { useState, useRef } from "react"
import Modal from "./components/modal";
import MyInput from "./components/MyInput";

// class Person extends React.PureComponent {
//   // shouldComponentUpdate(perviousProps) {
//   //   for(const key in this.props) {
//   //     if(perviousProps[key] !== this.props[key]) {
//   //       return true
//   //     }
//   //   }
//   //   return false
//   // }
//   render() {
//     console.log('Person render')
//     const {name, age} = this.props
//     return (
//       <p>
//         {name} / {age}
//       </p>
//     )
//   }
// }


// class App extends React.Component {
//   state = {
//     text: "" ,
//     persons: [
//       {id: 1, name:"Seyoung", age: 28},
//       {id: 2, name:"Anna", age: 19}
//     ]
//   }

//   render() {
//     const {text, persons} = this.state;
//     return (
//       <div>
//         <input type="text" value={text} onChange={this._change} />
//         <ul>{persons.map(person => {
//           return <Person {...person} key={person.id} />
//         })}
//         </ul>
//       </div>)
//   }
//   _change = e => {
//     this.setState({
//       ...this.state,
//       text: e.target.value
//     })
//   }
// }

// function App() {
//   const [visible, setVisible] = useState(false)

//   const open = () => {
//     setVisible(true)
//   }

//   const close = () => {
//     setVisible(false)
//   }

//   return (
//   <div>
//     <button onClick={open}>open</button>
//     {visible && (
//       <Modal>
//         <div 
//           style={{
//             width: '100vw', 
//             height: '100vh', 
//             background: 'rgba(0,0,0,0.5)'
//           }} 
//           onClick={close}>
//             Hello
//         </div>
//       </Modal>
//     )}
//   </div>
//   )
// }

function App() {
  const myInputRef = useRef();

  const click = () => {
    console.log(myInputRef.current.value)
  }

  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  )
}

export default App;
