import { ConnectionsProvider } from '@/provider/connection-provider'
import EditorProvider from '@/provider/editor-provider'
import React from 'react'
import EditorCanvas from './_components/editor-canvas'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas />
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  )
}

export default Page