import HeaderSignIn from "@/components/header/header-signin";

const LayoutSignIn = ({children}: Readonly<{children: React.ReactNode;}>) => {
    return (
        <>
            <HeaderSignIn />
                <main>
                    { children }
                </main>
            {/* <Footer/> */}
        </>
    );
}

export default LayoutSignIn;