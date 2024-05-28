'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { EditUserProfileSchema } from '@/lib/type'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { FormInput, Loader2 } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function ProfileForm() {
    const [isloading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
      mode: 'onChange',
      resolver: zodResolver(EditUserProfileSchema),
      defaultValues: {
        name: '',
        email: ''
      }
    })
  return (
    <Form {...form}>
      <form action="" 
      className='flex flex-col gap-6' 
      onSubmit={()=>{}}
      >
        <FormField
        disabled={isloading}
        control={form.control}
        name='name'
        render={({field})=>(
          <FormItem>
            <FormLabel className='text-lg'>
              Enter full name
            </FormLabel>
            <FormControl>
              <Input placeholder='Name' {...field}>
              </Input>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
        /> 
        <FormField
        disabled={isloading}
        name='email'
        control={form.control}
        render={({field})=>(
          <FormItem>
            <FormLabel>
              Enter the Email
            </FormLabel>
            <FormControl>
              <Input 
              placeholder='Email'
              type='email'
              {...field}  
              ></Input>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
        />
        <Button className=' bg-purple-400 text-black hover:text-purple-400 hover:bg-black'>
          {
            isloading ? <>
            <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
            saving
            </> 
            : "saving User Settings"
          }
        </Button>
      </form>
    </Form>
  )
}

export default ProfileForm
