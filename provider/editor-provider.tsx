'use client'

import { EditorCanvasCardType, editorNodeType } from '@/lib/type'
import React, {useEffect,useReducer,useState, useContext, Dispatch} from 'react'
type EditorNode = editorNodeType
export type Editor ={
  elements : EditorNode[],
  edges:{
    id: string,
    source: string,
    target: string
  }[],
  selectedNode: editorNodeType
}

const EditorProvider = () => {
  return (
    <div>
      
    </div>
  )
}

export default EditorProvider
