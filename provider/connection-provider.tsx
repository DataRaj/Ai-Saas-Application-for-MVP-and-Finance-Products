'use client'

import React, { Dispatch, SetStateAction, createContext, useContext } from 'react'
export type ConnectionProviderProps ={
  discordNode: {
    webhookURL: string,
    content: string,
    webhookName: string,
    buildName: string
  }
  setDiscordNode: Dispatch<SetStateAction<any>>
  googleNode: {}[]

  setGoogleNode: Dispatch<SetStateAction<any>>
  notionNode : {
    accessToken: string
     databaseId: string
     workspaceName: string
     content: string
    //  {
    //   name:string
    //   kind:string
    //   type:string

    //  }
  }
  workflowTemplate: {
    discord?: string
    notion?:string
    slack?:string
  }

  setNotionNode: Dispatch<SetStateAction<any>>
  slackNode:{
    appId: string
    authedUserId:string
    authedUserToken:string
    slackAccessToken:String
    botUserId: string
    teamId: string
    teamName:string
    content:string
  }
  setSlackNode : Dispatch<SetStateAction<any>>
  setWorkFlowTemplate: Dispatch<SetStateAction<{
    discord?:string
    notion?:string
    slack?:string
  }>>
  isLoading:boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}
const InitialValues: ConnectionProviderProps = {
  discordNode: {
    webhookURL: '',
    content: '',
    webhookName: '',
    buildName: '',
  },
  googleNode: [],
  notionNode: {
    accessToken: '',
    databaseId: '',
    workspaceName: '',
    content: '',
  },
  workflowTemplate: {
    discord: '',
    notion: '',
    slack: '',
  },
  slackNode: {
    appId: '',
    authedUserId: '',
    authedUserToken: '',
    slackAccessToken: '',
    botUserId: '',
    teamId: '',
    teamName: '',
    content: '',
  },
  isLoading: false,
  setGoogleNode: () => undefined,
  setDiscordNode: () => undefined,
  setNotionNode: () => undefined,
  setSlackNode: () => undefined,
  setIsLoading: () => undefined,
  setWorkFlowTemplate: () => undefined,
}

const ConnectionProvider = createContext(InitialValues);
const {provider} = ConnectionProvider


// const ConnectionProvider = (props: ConnectionProviderProps) => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ConnectionProvider
