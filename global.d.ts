import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'

export type ParagraphElement = {
  type: 'paragraph'
  children: CustomText[]
}

export type TitleElement = {
  type: 'title'
  children: CustomText[]
}

export type CustomElement = ParagraphElement | TitleElement

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
  }
}
