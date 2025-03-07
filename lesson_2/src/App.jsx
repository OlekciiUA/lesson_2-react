import img from './assets/img/03.jpg';
import './App.css';
import React from 'react';

function App() {
  function consoleLog(e) {
    console.log(e.target.value)
  }

  const h1 = React.createElement('h1', { className: 'h1' }, 'hello');
  const p = React.createElement('p', { className: 'p' }, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, vitae? Ab esse architecto ratione hic reiciendis, ducimus minus iste corrupti itaque eos quibusdam at, suscipit earum accusantium sit modi ad!');
  const img1 = React.createElement('img', { className: 'img', src: '../src/assets/img/03.jpg' }, null);

  //если вводить src: './assets/img/03.jpg' то картинка не отображается, почему?

  const form = React.createElement('form', { className: 'form'}, [
    React.createElement('input', {
      className: 'input',
      type: 'text',
      placeholder: "enter text",
      onChange: e => consoleLog(e),
      key: 'input' ,
    }, null)
  ]);


  return (
    <>
      {h1}
      {p}
      {img1}
      {form}


      <h1>hello </h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, vitae? Ab esse architecto ratione hic reiciendis, ducimus minus iste corrupti itaque eos quibusdam at, suscipit earum accusantium sit modi ad!</p>
      <img src={img} alt="error" className='img1' />


      <form className='form'>
        <input type="text" key={'input'} placeholder='enter text' className='input' onChange={(e) => console.log(e.target.value)} />
      </form>
    </>
  )
}

export default App
