import {SignIn} from "@clerk/clerk-react"

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <SignIn></SignIn>
    </div>
  )
}

export default LoginPage