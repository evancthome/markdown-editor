function Input({ placeholder, onChange, markdownText }) {
  return (
    <textarea
      placeholder={placeholder}
      value={markdownText}
      onChange={onChange}
      className='prose col-start-2 col-end-7 row-span-5 overflow-auto resize-none rounded-lg scrollbar scrollbar-thumb-indigo-700 scrollbar-track-indigo-400 shadow-lg shadow-gray-700 p-4 h-full w-full border-gray-900 border-solid border-2 bg-indigo-100 placeholder:text-slate-600 focus:outline-none'
    ></textarea>
  )
}

export default Input
