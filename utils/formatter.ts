import { Editor } from 'slate'
import type { CustomEditor } from '../global'

export const isFormatActive = (editor: CustomEditor, format: string) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

export const toggleStyleActive = (editor: CustomEditor, format: string) => {
  const isActive = isFormatActive(editor, format)
  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}
