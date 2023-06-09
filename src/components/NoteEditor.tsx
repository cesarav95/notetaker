import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';

const NoteEditor = ({

}) => {
  const [code, setCode] = React.useState<string>('');
  const [title, setTitle] = React.useState<string>('');

  return (
    <div className='card mt-5 border border-gray-200 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>
          <input type="text"
            placeholder='Note title'
            className='input-primary input input-lg w-full font-bold'
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)} />
        </h2>
        <CodeMirror
          value={code}
          width="500px"
          height="30vh"
          minWidth="100%"
          minHeight="30vh"
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          onChange={(value) => setCode(value)}
          className="border border-gray-300"
        />
      </div>
    </div>
  )
}

export default NoteEditor