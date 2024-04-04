import LayoutSignIn from "@/app/layouts/layout-signin";

const LoginLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
    return (
        // eslint-disable-next-line react/no-children-prop
        <LayoutSignIn children={ children } />
    );
}

export default LoginLayout;