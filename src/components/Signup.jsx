import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {Link} from "react-router-dom";
import Eyel from "../assets/images/Eyeleft.webp";
import Eyer from "../assets/images/Eyeright.webp";
import { useNavigate } from "react-router-dom";
import usecartstore from "./Statemanagement";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const setIslogin = usecartstore((state) => state.setIslogin)
  const setUsername = usecartstore((state) => state.setUsername)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,   
    formState: { errors },
  } = useForm();

  const onSubmit = (data,e) => {
    e.preventDefault();
    console.log(data);
    setUsername(data.username)
    setIslogin(true)
    navigate("/");
  };

  return (
    <Card className="w-full max-w-sm flex justify-center m-auto">
      <CardHeader>
        <CardTitle className="font-bold text-xl">Sign Up to your account</CardTitle>
        <CardDescription>
          Enter your email below to sign up to your account
        </CardDescription>
        <CardAction>
          <Button variant="link" asChild><Link to="/login">Login</Link></Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
               <Label>Username</Label>
                            <Input
                              id="username"
                              type="text"
                              placeholder="Username"
                              {...register("username", {
                                required: true,
                                
                              })}
                            />
                            {errors.username && (
                              <p className="text-red-500">
                                Please enter a your name 
                              </p>
                            )}
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/,
                })}
              />
              {errors.email && (
                <p className="text-red-500">
                  Please enter a valid email address
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Enter Password</Label>
                
              </div>
            
              <div className="relative">
                <Input
                  id="password"
                  type="text"
                  className="pr-10"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message:
                        "Password must be at least 8 characters long",
                    },
                  })}
                />

              </div>

              {errors.password && (
                <p className="text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center mt-3">
                <Label htmlFor="password">Re-Enter The Password</Label>
                
              </div>
            
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="pr-10 mt-3"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message:
                        "Password must be at least 8 characters long",
                    },
                  })}
                />
                <img
                  src={showPassword ? Eyel : Eyer}
                  alt="Toggle password"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 mt-2 -translate-y-1/2 w-5 h-5 cursor-pointer"
                />
              </div>

              {errors.password && (
                <p className="text-red-500">
                  {errors.password.message}
                </p>
              )}
        

          <CardFooter className="flex-col gap-3 mt-5 w-full">
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <Button variant="outline" className="w-full">
              Sign Up with Google
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
