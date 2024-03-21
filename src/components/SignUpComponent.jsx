'use client'
import React, { useState } from 'react'
import SelectComponent from './SelectComponent';
import { GoogleAuthProvider, createUserWithEmailAndPassword,sendEmailVerification, signInWithPopup } from 'firebase/auth';
import auth, { db, provider } from '../lib/firebase';
import { useRouter } from 'next/navigation';
import { doc, setDoc } from 'firebase/firestore';


const roles = [
    {listItem:'Administrator'},
    {listItem:'Citizen'},
    {listItem:'Central Officer'},
    {listItem:'District Engineering Officer'},
]


function SignUpComponent() {
    const [fullName,setFullName] = useState('');
    const [emailAddress,setEmailAddress] = useState('');
    const [role,setRole] = useState(roles[0]);
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const router = useRouter()


    const handleTogglePreview = () => {
        setShowPreview(prev => !prev);
    };

    const handleSignUp=async()=>{
        try{
          await createUserWithEmailAndPassword(auth,emailAddress,password)
          .then(async(userCredential)=>{
            console.log(userCredential)
            await setDoc(doc(db, 'users',userCredential.user.uid),{
                fullName,
                emailAddress,
                role
             });
             router.push('/')
          }).catch((error)=>{
          console.log(error)
          })
        }        
        catch(error){
          throw Error (error, 'could not log user in')
        }
      }
  return (
    <div className='mx-auto flex flex-col justify-center items-start py-8 w-[400px]'>
        <p className='text-white font-semibold text-[1.3rem] mb-[30px]'>Sign Up</p>

        <form className='w-full'>
        <label htmlFor="fullName">
            <p className='text-white text-[.8rem]'>Full Name</p>
            <input
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
            id='fullName'
            type='text'
            placeholder='Enter full name'
            className='border bg-transparent p-2 rounded-md w-full placeholder:text-[.8rem] text-white mb-5'
            />
        </label>
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

        <p className='text-white text-[.8rem]'>Select Role</p>
        <SelectComponent
        selected={role}
        setSelected={setRole}
        containerClassName='mb-4'
        list={roles}
        />
        <label 
        htmlFor="password"

        >
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
        <label htmlFor="password">
            <p className='text-white text-[.8rem]'>Confirm Password</p>
            <div className='w-full flex items-center'>
            <input
            id='password'
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            type={showPreview ? 'text' : 'password'}
            placeholder='Confirm password'
            className='placeholder:text-[.8rem] border bg-transparent p-2 rounded-md w-full text-white'
            />
             <span 
              onClick={handleTogglePreview}
             className='ml-2 text-white cursor-pointer p-3 rounded-md hover:bg-[rgba(255,255,255,0.2)] text-[0.8rem]'>{showPreview ? 'HIDE' : 'SHOW'}</span>
            </div>
            {(password !== confirmPassword) && <p className='text-red-600 text-[.7rem]'>Passwords do not match</p>}
        </label> 
        </form>

        <button 
        onClick={handleSignUp}
        className='p-3 text-[.8rem] mt-4 rounded-md text-white mx-auto bg-[black]'>
            Create Account
        </button>
        
    </div>
  )
}

export default SignUpComponent;