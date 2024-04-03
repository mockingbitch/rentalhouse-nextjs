import LayoutDefault from "@/app/layouts/layout-default";

const LoginLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
    return (
        <LayoutDefault children = {children} />
    );
}

export default LoginLayout;