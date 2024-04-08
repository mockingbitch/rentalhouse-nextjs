'use client'

import { useState, useCallback } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { emailIcon, eyeIcon, googleIcon, facebookIcon } from "@/assets/images/icon";
import { useLoginMutation } from '@/services/auth-service';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';

interface UserAuth {
    email: string;
    password: string;
}

const LoginForm = () => {
    const dispatch = useDispatch();
    const [signIn, { isLoading }] = useLoginMutation();
    const { email } = useSelector((state: RootState) => state.auth);
    const [data, setData] = useState<UserAuth>();

    const handleOnChange = (event: any) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;
        setData((values: any) => ({ ...values, [targetName]: targetValue }));
    }

    const handleLogin = async () => {
        try {
            await signIn().unwrap();
        } catch (e: unknown) {
            if (e instanceof Error) {
                console.log(e.message);
            }
        }
    };

    return (
        <form>
            <div className="mb-12">
                <h3 className="text-3xl font-extrabold dark:text-black">Sign in</h3>
                <p className="text-sm mt-4 dark:text-gray-700">
                    Do not have an account?
                    <Link
                        href='/register'
                        className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                    >
                        Register here
                    </Link>
                </p>
            </div>
            <div>
                <Label className="text-xs block mb-2 dark:text-black">Email</Label>
                <div className="relative flex items-center">
                    <Input
                        name="email"
                        type="text"
                        className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none dark:text-black"
                        placeholder="Enter email"
                        onChange={ e => handleOnChange(e) }
                    />
                    <Image src={ emailIcon } className="w-[18px] h-[18px] absolute right-2" alt="Email icon"/>
                </div>
            </div>
            <div className="mt-8">
                <Label className="text-xs block mb-2 dark:text-black">Password</Label>
                <div className="relative flex items-center">
                    <Input
                        name="password"
                        type="password"
                        className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none dark:text-black"
                        placeholder="Enter password"
                        onChange={ e => handleOnChange(e) }
                    />
                    <Image src={ eyeIcon } className="w-[18px] h-[18px] absolute right-2 cursor-pointer" alt="Eye icon"/>
                </div>
            </div>
            <div className="flex items-center justify-between gap-2 mt-5">
                <div className="flex items-center">
                    <Input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:text-black"
                    />
                    <Label htmlFor="remember-me" className="ml-3 block text-sm dark:text-black">
                        Remember me
                    </Label>
                </div>
                <div>
                    <a
                        href=""
                        className="text-blue-600 font-semibold text-sm hover:underline"
                    >
                        Forgot Password?
                    </a>
                </div>
            </div>
            <div className="mt-12">
                <Button
                    type="button"
                    className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    onClick={ handleLogin }
                >
                    Sign in
                </Button>
            </div>
            <p className="my-8 text-sm text-gray-400 text-center">
                or continue with
            </p>
            <div className="space-x-8 flex justify-center">
                <span>
                    <Image src={ googleIcon } className="inline cursor-pointer" alt="Google icon"/>
                </span>
                <span>
                    <Image src={ facebookIcon } className="cursor-pointer" alt="Facebook icon"/>
                </span>
            </div>
        </form>
    );
}

export default LoginForm;