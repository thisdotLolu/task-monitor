'use client'
import { AppContext } from '../contexts/AppContext';
import auth from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';

function SignInComponent() {
    const [emailAddress,setEmailAddress] = useState('');
    const [password,setPassword] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const router = useRouter()
    const {user,setUser} = useContext(AppContext)


    const handleTogglePreview = () => {
        setShowPreview(prev => !prev);
    };

    const handleSignIn=async()=>{
        try{
          await signInWithEmailAndPassword(auth,emailAddress,password)
          .then(async(userCredential)=>{
           console.log(userCredential)
           setUser(userCredential.user);
           router.push('/dashboard')
          }).catch((error)=>{
          console.log(error)
          toast.error('cannot sign in')
          })
        }        
        catch(error){
          toast.error('cannot sign in')
          throw Error (error, 'could not log user in')
        }
      }
  return (
    <div className='mx-auto flex flex-col justify-center items-start py-8 w-[400px]'>
        <p className='text-white font-semibold text-[1.3rem] mb-[30px]'>Sign In</p>

        <form className='w-full'>
        <label htmlFor="email"
        className='my-4'
        >
            <p className='text-white text-[.8rem]'>Email Address</p>
            <input
            value={emailAddress}
            onChange={(e)=>setEmailAddress(e.target.value)}
            id='email'
            type='text'
            placeholder='Enter email'
            className='border bg-transparent p-2 placeholder:text-[.8rem] rounded-md w-full text-white mb-5'
            />
        </label>

        <label 
        htmlFor="password">
            <p className='text-white text-[.8rem]'>Password</p>
            <div className='w-full flex items-center'>
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id='password'
            type={showPreview ? 'text' : 'password'}
            placeholder='Create password'
            className='placeholder:text-[.8rem] border bg-transparent p-2 rounded-md w-full text-white mb-4'
            />
        <span 
        onClick={handleTogglePreview}
        className='ml-2 text-white cursor-pointer p-3 rounded-md hover:bg-[rgba(255,255,255,0.2)] mb-4 text-[0.8rem]'>{showPreview ? 'HIDE' : 'SHOW'}</span>
        </div>
            
        </label>
       
        </form>

        <button 
        onClick={handleSignIn}
        className='p-3 text-[.8rem] mt-4 rounded-md text-white mx-auto bg-[black]'>
            Sign in
        </button>
        <p className='text-white w-full text-sm text-center mt-3'>Don't have an account? <Link  className='hover:underline' href='/signup'>Sign Up</Link></p>
    </div>
  )
}

export default SignInComponent;