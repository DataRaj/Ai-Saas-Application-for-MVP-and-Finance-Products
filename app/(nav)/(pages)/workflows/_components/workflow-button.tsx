import { Button } from '@/components/ui/button'
import { useModal } from '@/provider/modal-provider'
import { Plus } from 'lucide-react'
import React, { ReactNode } from 'react'

const WorkFlowButton = (props: {}) => {
  const {setOpen, setClose } = useModal() ;
  const handlClick = ()=>{}
    return (
    <div>
      <Button size={'icon'}
      onClick={handlClick}>
        <Plus/>
      </Button>
    </div>
  )
}

export default WorkFlowButton
