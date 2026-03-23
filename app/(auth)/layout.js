import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center pb-5">      {children}
    </div>
  )
}

export default AuthLayout