import './App.css'
import { useState } from 'react'
import Input from './components/Input'
import Output from './components/Output'

function App() {
  const [markdownText, setMarkdownText] = useState('')

  const onChange = (e) => {
    setMarkdownText(e.target.value)
  }
  return (
    <div className='h-screen overflow-hidden bg-indigo-800 text-gray-50'>
      <h1 className='text-center text-2xl font-bold'>
        Awesome Markdown Editor
      </h1>
      <div className='flex justify-between container h-full mx-auto md:px-10 px-2 pt-4 pb-12'>
        <Input
          onChange={onChange}
          text={markdownText}
          placeholder='Write markdown here! You can use TeX expressions too! Just put them between $&#39;s, like this $f(x) = x$'
        />
        <Output text={markdownText} />
      </div>
    </div>
  )
}

export default App
