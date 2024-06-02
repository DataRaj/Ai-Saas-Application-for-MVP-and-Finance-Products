import { CardItem } from "@/components/global/3d-card"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { DeleteIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type props  ={
    name:string
    description: string
    publish: boolean | null
    id:string
}

const WorkFlow = ({description, id, name, publish}:props) =>{
    return <Card className=" flex w-full items-center justify-between">
        <CardHeader className="flex gap-4 flex-col">
            <Link href={`/workflow/editor/${id}`}>
                <div className="flex flex-row gap-2">
                    <Image 
                    src={'/notion.png'}
                    alt="notion"
                    height={30}
                    width={30}
                    className="object-contain"/>
                    <Image 
                    src={'/googleDrive.png'}
                    alt="Google Drive"
                    height={30}
                    width={30}
                    className="object-contain"/>
                     <Image 
                    src={'/discord.png'}
                    alt="discord"
                    height={30}
                    width={30}
                    className="object-contain"/>
                     <Image 
                    src={'/slack.png'}
                    alt="slack"
                    height={30}
                    width={30}
                    className="object-contain"/>
                </div>
                <div className="">
                    <CardTitle className=" text-lg">{name}</CardTitle>
                    <CardDescription>{description} </CardDescription>
                </div>
            </Link>
        </CardHeader>
        <div className="flex flex-col gap-4 p-2 items-center">
            <Label
            htmlFor="airplane-mode"
            className=" text-muted-foreground"
            >
                On
            </Label>
            <Switch id="airplane-mode" />
        </div>
    </Card>
}

export default WorkFlow