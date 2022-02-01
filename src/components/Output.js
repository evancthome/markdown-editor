import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

function Output({ text }) {
  return (
    <ReactMarkdown
      className='prose prose-hr:border-gray-700 overflow-auto border-gray-900 border-solid border-2 shadow-lg shadow-gray-700 marker:text-gray-700 bg-indigo-100 rounded-lg w-full p-4'
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {text}
    </ReactMarkdown>
  )
}

export default Output
