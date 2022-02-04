import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

function Output({ text, isFullPage }) {
  return (
    <ReactMarkdown
      className={
        isFullPage
          ? 'col-start-2 col-span-10 row-span-5 prose prose-hr:border-gray-700 overflow-auto border-gray-900 border-solid border-2 shadow-lg shadow-gray-700 marker:text-gray-700 bg-indigo-100 rounded-lg p-4 scrollbar scrollbar-thumb-indigo-700 scrollbar-track-indigo-400'
          : 'col-start-7 col-end-12 row-span-5 prose prose-hr:border-gray-700 overflow-auto border-gray-900 border-solid border-2 shadow-lg shadow-gray-700 marker:text-gray-700 bg-indigo-100 rounded-lg p-4 scrollbar scrollbar-thumb-indigo-700 scrollbar-track-indigo-400'
      }
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {text}
    </ReactMarkdown>
  )
}

export default Output
