"use client"

import { SessionProvider } from "next-auth/react";
import Login from "../ui/login/LoginForm";

export default function LoginPage(){
    return(
            <div>
            <Login/>
        </div>
    )
}