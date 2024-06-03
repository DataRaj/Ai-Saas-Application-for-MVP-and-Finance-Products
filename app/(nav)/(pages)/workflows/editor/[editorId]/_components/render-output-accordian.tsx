import { ConnectionProviderProps } from '@/provider/connection-provider'
import { EditorState } from '@/provider/editor-provider'
import { useFuzzieStore } from '@/store'
import React from 'react'
import ContentBasedOnTitle from './content-based-on-title'

type Props = {
  state: EditorState
  nodeConnection: any
}

const RenderOutputAccordion = ({ state, nodeConnection }: Props) => {
  const {
    googleFile,
    setGoogleFile,
    selectedSlackChannels,
    setSelectedSlackChannels,
  } = useFuzzieStore()
  return (
    <ContentBasedOnTitle
      nodeConnection={nodeConnection}
      newState={state}
      file={googleFile}
      setFile={setGoogleFile}
      selectedSlackChannels={selectedSlackChannels}
      setSelectedSlackChannels={setSelectedSlackChannels}
    />
  )
}

export default RenderOutputAccordion