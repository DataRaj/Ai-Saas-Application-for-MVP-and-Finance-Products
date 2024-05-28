'use client'

import React from 'react'
import UploadCareButton from './uploadcare-button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '../../ui/button'
type props = {
    userImage: string  | null
    onUpload?:any
    onDelete?:any

}
const ProfilPicture = ({userImage, onDelete, onUpload}: props) => {
    const router = useRouter()
    const onRemoveImage = async () =>{
        const response = await onDelete();
        if(response) router.refresh()
    }
  return (
    <div className=' flex flex-col'>
      <p className=' text-white text-lg'> 
      Profile Picture
      </p> 
      <div className=' flex h-[30vh] flex-col items-center justify-center'>
        {
            userImage ?
            <>
            <div className=' relative w-2/12 h-full'>
                <Image src={userImage}
                alt='user_Image'
                fill />

            </div>
            <Button 
            onClick={onRemoveImage}
            className=' bg-transparent text-white/70 hover:bg-transparent
             hover:text-white'
            />
            </>
            : <UploadCareButton onUpload={onUpload}/>
        }
      </div>
    </div>
  )
}

export default ProfilPicture
