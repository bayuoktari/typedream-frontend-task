import React from 'react'
import { RenderLeafProps } from 'slate-react'

export default function Leaf({ leaf, children, attributes }: RenderLeafProps) {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underlined) {
    children = <u>{children}</u>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  return <span {...attributes}>{children}</span>
}
