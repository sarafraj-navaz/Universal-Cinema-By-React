// import React from 'react'
// import Navbar from './components/Navbar'
// import Section from './components/Section'
// import Aside from './components/Aside'
// import Article from './components/Article'
// import Footer from './components/Footer'
// import Main from './components/Main'

// const App = () => {
//   return (
  
//     <div>
//         <Navbar></Navbar>
//         <div style={{display: 'flex'}}>
//             <Section></Section>
//             <Main></Main>
//             <Aside></Aside>
//         </div>
//      <Article></Article> 
//      <Footer></Footer>
//     </div>
//   )
// }

// export default App
import React,{useState} from 'react'

const App = () => {
  let [count, setcount] =useState(0)
  let handleClick =() =>{
    setcount(count+1)
  }
  return (
    <div>
       <h1>function base component :count={count}</h1>
       <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App