import ProfileForm from '@/components/forms/profile-form'
import ProfilPicture from './_components/profile-picture'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

type props = {

}
async function SettingPage() {
  const authUser = await currentUser()
  if(!authUser) return null;
  const user = await db.user.findUnique({ where: { clerkId: authUser.id } }) //added null handle just for testing but for production, null should be prohibitated strictly
  const RemoveProfileImage = async (props:props) =>{
    'use server'
    const response = await db.user.update({
      where: {
        clerkId : authUser.id   //added null handle just for testing but for production, null should be prohibitated strictly
      },
      data: {
        profileImage: "",
      }
    })
    return response;
  }
  const uploadProfileImage = async (image: string) => {
    'use server'
    const id = authUser.id //added null handle just for testing but for production, null should be prohibitated strictly
    const response = await db.user.update({
      where: {
        clerkId: id,
      },
      data: {
        profileImage: image,
      },
    })

    return response
  }
  return (
    <div className='flex flex-col gap-4'>
      <h1 className=' sticky top-0 z-10 flex items-center justify-between
       border-b bg-background/50 p-6 text-4xl backdrop-blur-lg'>
        <span>setting</span>
       </h1>
       <div className="gap-10 flex flex-col p-6">
        <div>
          <h2 className=' font-bold text-2xl '>
            User Profile
          </h2>
          <p className=' text-base text-white/50'>
            Add or update your information
            </p> 
        </div>
        <ProfilPicture 
        userImage={user?.profileImage || ''}
        onDelete={RemoveProfileImage}
        onUpload={uploadProfileImage}
        />
       </div>
      <ProfileForm />
    </div>
  )
}

export default SettingPage;
