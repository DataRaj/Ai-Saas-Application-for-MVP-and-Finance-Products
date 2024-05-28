"use client"

import { promises } from "fs"
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react"

type modalProviderProps = {
    children: ReactNode
}

export type modaldata= {
}

type modalContextType = {
    data: modaldata
    isOpen: boolean
    setOpen: (modal: ReactNode, fetchData?: ()=> Promise<any>) => void
    setClose : ()=> void 
}

const modalConetext = createContext<modalContextType>({
    data:{},
    isOpen: false,
    setOpen:(modal: ReactNode, fetchData?: ()=> Promise<any>) => {},
    setClose: ()=>{}
})

const ModalProvider: React.FC<modalProviderProps> = ({ children}) =>{
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState<modaldata>({});
    const [showingModal, setShowingModal] = useState<ReactNode>(null);
    const [isMount, setIsMount] = useState<Boolean | null>(null);
    
    useEffect(()=>{
        setIsMount(true)

    },[])
    async function setOpen(modal:ReactNode,fetchData?: ()=>Promise<any>){
        if(modal){
            if(fetchData){
                setData({...data, ...(await fetchData())}|| {})
            }
            setShowingModal(modal)
            setIsOpen(true)
        }
    }

    function setClose(){
        setOpen(false)
        setData({})
    }

    if(!isMount) return null
    return(
        <modalConetext.Provider value={{data,setOpen,setClose, isOpen}}></modalConetext.Provider>
    )
}

export function useModal(){
    const modal = useContext(modalConetext)
    if(!modal){
        throw new Error("Modal must be used within the modal provider ")
    }
    return modal
}