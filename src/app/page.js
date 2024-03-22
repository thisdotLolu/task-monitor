'use client'
import { AppContext } from "../contexts/AppContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Home() {
  const router = useRouter()
  const {user,setUser} = useContext(AppContext)

  useEffect(()=>{
    if(!user){
      router.push('/signup')
    }  
  },[])

  return (
    <main className="">
      
    </main>
  );
}
