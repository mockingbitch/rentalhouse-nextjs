'use client'
import LayoutSignIn from "@/app/layouts/layout-signin";
import React from "react";
import {Providers} from "@/components/store-provider";

const LoginLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
    return (
        <Providers>
            <LayoutSignIn>
                {children}
            </LayoutSignIn>
        </Providers>
    );
}

export default LoginLayout;