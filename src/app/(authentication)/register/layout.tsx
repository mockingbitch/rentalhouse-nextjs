import LayoutSignIn from "@/app/layouts/layout-signin";
import React from "react";

const RegisterLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
    return (
        <LayoutSignIn>
            {children}
        </LayoutSignIn>
    );
}

export default RegisterLayout;