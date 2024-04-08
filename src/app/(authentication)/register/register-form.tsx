import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { emailIcon, eyeIcon, googleIcon, facebookIcon } from "@/assets/images/icon";

const RegisterForm = () => {
    return (
        <form>
            <div className="mb-12">
                <h3 className="text-3xl font-extrabold dark:text-black">Sign up</h3>
                <p className="text-sm mt-4 dark:text-gray-700">
                    Already have an account?
                    <Link
                        href='/login'
                        className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                    >
                        Login here
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
                    />
                    <Image src={ eyeIcon } className="w-[18px] h-[18px] absolute right-2 cursor-pointer" alt="Eye icon"/>
                </div>
            </div>
            <div className="mt-8">
                <Label className="text-xs block mb-2 dark:text-black">Confirm password</Label>
                <div className="relative flex items-center">
                    <Input
                        name="password"
                        type="password"
                        className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none dark:text-black"
                        placeholder="Confirm password"
                    />
                    <Image src={ eyeIcon } className="w-[18px] h-[18px] absolute right-2 cursor-pointer" alt="Eye icon"/>
                </div>
            </div>
            <div className="mt-12">
                <Button
                    type="button"
                    className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                    Sign up
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

export default RegisterForm;