"use client";
import loginAuth from '../../../hooks/loginAuth'
import Login from '../../../components/Login'
import React from 'react'

const LoginPage = () => {
  loginAuth()
  return (
    <>
    <Login />
   
    </>
  )
}

export default LoginPage

