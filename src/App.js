import './App.css'
import { useState } from 'react'
import Input from './components/Input'
import Output from './components/Output'

function App() {
  const [markdownText, setMarkdownText] = useState('')
  const [isFullPage, setIsFullPage] = useState(false)

  const onChange = (e) => {
    setMarkdownText(e.target.value)
  }

  const onClick = () => {
    setIsFullPage(!isFullPage)
  }

  return (
    <div className='grid justify-center gap-4 grid-cols-12 grid-rows-6 h-screen overflow-hidden bg-indigo-800 text-gray-50'>
      <h1 className='self-center text-center col-start-4 col-end-9 p-2 sm:p-0 text-2xl font-bold'>
        Awesome Markdown Editor
      </h1>
      <button
        onClick={onClick}
        className='col-start-10 col-span-2 self-center mx-8 mt-2 bg-teal-400 hover:bg-teal-300 font-semibold py-1 px-4 rounded-full'
      >
        {!isFullPage ? 'Full page' : 'Close'}
      </button>
      {!isFullPage && (
        <Input
          onChange={onChange}
          text={markdownText}
          placeholder='Write markdown here! You can use TeX expressions too! Just put them between $&#39;s, like this $f(x) = x$'
        />
      )}
      <Output text={markdownText} isFullPage={isFullPage} />
    </div>
  )
}

export default App
