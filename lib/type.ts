import { ConnectionProviderProps } from "@/provider/connection-provider";
import { number, z } from "zod";

export const EditUserProfileSchema = z.object({
    email: z.string().email('Required'),
    name: z.string().min(1,'Required')
})

export const WorkFlowFormSchema = z.object({
    name: z.string().min(1,'required'),
    description: z.string().min(1,'required'),
})

type ConnectionTypes = "Google Drive" | "Discord" | "Slack" | "Notion"

export type Connection ={
    title:ConnectionTypes
    description: string
    image: string
    connectionKey: keyof ConnectionProviderProps
    accessKeyToken?: string
    alwaysTrue?: boolean
    slackSpecial?: boolean
}

export type EditorCanvasType = 
    | 'Email'
    | 'Condition'
    | 'AI'
    | 'Slack'
    | 'Google Drive'
    | 'Notion'
    | 'Custom Webhook'
    | 'Google Calender'
    | 'Trigger'
    | 'Action'
    | 'Wait';

export type EditorCanvasCardType ={
    title: string
    description: string
    completed:boolean
    current: boolean
    metadata : any
    type: EditorCanvasType
}

export type editorNodeType={
    id: string
    type: EditorCanvasCardType['type']
    position: {
        x: number,
        y: number
    }
    data: EditorCanvasCardType;
} 