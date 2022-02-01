function Input({ placeholder, onChange, markdownText }) {
  return (
    <textarea
      placeholder={placeholder}
      value={markdownText}
      onChange={onChange}
      className='prose overflow-auto resize-none rounded-lg shadow-lg shadow-gray-700 p-4 h-full w-full border-gray-900 border-solid border-2 bg-indigo-100 placeholder:text-slate-600 focus:outline-none'
    ></textarea>
  )
}

export default Input
