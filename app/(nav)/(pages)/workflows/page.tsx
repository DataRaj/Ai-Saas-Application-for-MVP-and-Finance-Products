import Workflows from "@/components/icons/workflows"
import WorkFlow from "@/app/(nav)/(pages)/workflows/_components/workflow"
import WorkFlowButton from "@/app/(nav)/(pages)/workflows/_components/workflow-button"
import { boolean } from "zod"

type props ={

}

const WorkFlows =(props:props)=>{
    return(
        <div className="flex flex-col relative gap-4">
            <h1 className=" text-4xl sticky top-0 p-6 z-[10] bg-background/50
             backdrop-blur-lg flex items-center justify-between border-b">
                WorkFlows
                <WorkFlowButton/>
             </h1>
             <WorkFlow description='writing automation application' name='automation workflow' id='e13123nw123' publish={false} />
        </div>
    )
}
export default WorkFlows