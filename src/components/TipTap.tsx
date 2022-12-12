import React from 'react'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import StarterKit from '@tiptap/starter-kit'


const MenuBar = ({ editor, tableFeature=true }) => {
    if (!editor) {
      return null
    }

    const buttonClasses = "border border-black text-black font-semibold mt-1 mr-2 px-2 py-1 rounded-lg";
    const activeButtonClasses = "border bg-black text-white font-bold mt-1 mr-2 px-2 py-1 rounded-lg"
  
    return (
      <>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? activeButtonClasses : buttonClasses}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? activeButtonClasses : buttonClasses}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? activeButtonClasses : buttonClasses}
        >
          strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive('code') ? activeButtonClasses : buttonClasses}
        >
          code
        </button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()}
            className={buttonClasses}
        >
          clear marks
        </button>
        <button onClick={() => editor.chain().focus().clearNodes().run()}
            className={buttonClasses}
        >
          clear nodes
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? activeButtonClasses : buttonClasses}
        >
          paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? activeButtonClasses : buttonClasses}
        >
          h1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? activeButtonClasses : buttonClasses}
        >
          h2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? activeButtonClasses : buttonClasses}
        >
          h3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? activeButtonClasses : buttonClasses}
        >
          h4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? activeButtonClasses : buttonClasses}
        >
          bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? activeButtonClasses : buttonClasses}
        >
          ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? activeButtonClasses : buttonClasses}
        >
          code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? activeButtonClasses : buttonClasses}
        >
          blockquote
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className={buttonClasses}
        >
          horizontal rule
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}
            className={buttonClasses}
        >
          hard break
        </button>
        <button onClick={() => editor.chain().focus().undo().run()}
            className={buttonClasses}
        >
          undo
        </button>
        <button onClick={() => editor.chain().focus().redo().run()}
            className={buttonClasses}
        >
          redo
        </button>
        {
            tableFeature ? (
            <>
            <button
                onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
                }
                className={buttonClasses}
              >
                insertTable
              </button>
              <button onClick={() => editor.chain().focus().addColumnBefore().run()}
                className={buttonClasses}
              >
                addColumnBefore
              </button>
              <button onClick={() => editor.chain().focus().addColumnAfter().run()}
                className={buttonClasses}
              >addColumnAfter</button>
              <button onClick={() => editor.chain().focus().deleteColumn().run()}
                className={buttonClasses}
              >deleteColumn</button>
              <button onClick={() => editor.chain().focus().addRowBefore().run()}
                className={buttonClasses}
              >addRowBefore</button>
              <button onClick={() => editor.chain().focus().addRowAfter().run()}
                className={buttonClasses}
              >addRowAfter</button>
              <button onClick={() => editor.chain().focus().deleteRow().run()}
                className={buttonClasses}
              >deleteRow</button>
              <button onClick={() => editor.chain().focus().deleteTable().run()}
                className={buttonClasses}
              >deleteTable</button>
              <button onClick={() => editor.chain().focus().mergeCells().run()}
                className={buttonClasses}
              >mergeCells</button>
              <button onClick={() => editor.chain().focus().splitCell().run()}
                className={buttonClasses}
              >splitCell</button>
              <button onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
                className={buttonClasses}
              >
                toggleHeaderColumn
              </button>
              <button onClick={() => editor.chain().focus().toggleHeaderRow().run()}
                className={buttonClasses}
              >
                toggleHeaderRow
              </button>
              <button onClick={() => editor.chain().focus().toggleHeaderCell().run()}
                className={buttonClasses}
              >
                toggleHeaderCell
              </button>
              <button onClick={() => editor.chain().focus().setCellAttribute('colspan', 2).run()}
                className={buttonClasses}
              >
                setCellAttribute
              </button>
              <button onClick={() => editor.chain().focus().fixTables().run()}
                className={buttonClasses}
              >fixTables</button>
              </>
            ) : null
        }
      </>
    )
  }

const Tiptap = (props: {content:string, onChange: (e: any) => void}) => {
  const editor = useEditor({
    onUpdate({ editor }) {
      const e = {
        target: {
          name: 'contentHTML',
          value: editor.getHTML()
      }}
      props.onChange(e)
      // The content has changed.
    },
    extensions: [
        TableHeader,
        TableCell,
        TableRow,
        Table.configure({
            resizable: true,
        }),
        Highlight,
        TextAlign,
        StarterKit.configure({
            heading: {
                levels: [1, 2, 3, 4],
            }
        }),
    ],
    content: props.content,
    editorProps: {
        attributes: {
          
          spellcheck: 'true',
          class: 'prose prose-sm sm:prose lg:prose-lg m-5 focus:outline-none text-black',
        },
    },
  })

  return (
    <div className='m-4'>
        <MenuBar editor={editor} />
        <EditorContent editor={editor} className="border border-grey-200" />
    </div>

  )
}

export default Tiptap;