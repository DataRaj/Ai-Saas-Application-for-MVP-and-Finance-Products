import React from 'react'
import { CardBody, CardContainer, CardItem } from './3d-card'

type customCardProps = {
    head: string,
    price:number,
    tagline: string,
    benifits: string[]

}
export default function Custom_3d_card(props:customCardProps) {
  return (
    <CardContainer className='inter-var'>
    <CardBody className='bg-gray-50 relative  bottom-1 group/card dark:hover:shadow-2xl
     dark:hover:shadow-neutral-500/[0.1] dark:bg-black h-auto
      dark:border-white border-black/[0.1] w-full md:!w-[450px] rounded-xl p-6 border'>
      <CardItem
      translateZ="50"
      className="text-xl font-bold text-neutral-600
      dark:text-white"

      >
        {props.head}
        <h2 className='text-5xl'>$ {props.price}</h2>
      </CardItem>
      <CardItem
      translateZ={'60'}
      className='text-sm max-w-sm mt-2 font-bold text-neutral-600
      dark:text-white'
      >
        {props.tagline}
        <ul className='my-4 flex flex-col gap-2'>
            {
                props.benifits.map((line, index) => (<li key={index} className='flex items-center gap-2'>
                    {line}
          </li>
        ))}
        </ul>
      </CardItem>
      
     </CardBody>
  </CardContainer>
  )
}
