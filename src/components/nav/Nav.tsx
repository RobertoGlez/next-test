import React from "react"
import { Disclosure } from '@headlessui/react'
import AuthButton from "../buttons/AuthSession"
import { useSession } from "next-auth/react"

interface NavMenuProps{
    style?: React.CSSProperties
}
export const NavMenu: React.FC<NavMenuProps> = ({
    
})=>{
    const { data: session } = useSession();
    return <div>
        <Disclosure as="nav" className="bg-gray-800" style={{
            display:'flex',
            padding:'10px',
            justifyContent:'right',
            alignItems:'center',
            gap:'15px'
        }}>
            {session && <div>
                <p>Bievenido, {session.user?.name}</p>
            </div>}
            <AuthButton/>
        </Disclosure>
    </div>
}