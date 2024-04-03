import LayoutSignIn from "@/app/layouts/layout-signin";

const LoginLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
    return (
        <LayoutSignIn children={ children } />
    );
}

export default LoginLayout;