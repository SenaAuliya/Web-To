"use client"
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: "/dashboard",
      });

      if (!result?.error) {
        // Redirect to dashboard on successful login
        router.push("/dashboard");
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-10 w-full h-screen  justify-center  items-center">

      <form onSubmit={handleLogin} className="bg-secondary py-16 px-9 border-primary shadow-lg border-[2px]">
      <h2 className="text-center text-4xl font-semibold">Login</h2>
       
       <div className="flex flex-col gap-1 mb-5 w-[300px]">
       <label className="text-xl font-medium">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
          required
        />
       </div>

        <div className="flex flex-col gap-1 mb--5">
        <label className="text-xl font-medium">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
    <Button className="rounded-none mt-5" variant={"default"} type="submit">Log In</Button>
      </form>
    </div>
  );
};

export default Login;
