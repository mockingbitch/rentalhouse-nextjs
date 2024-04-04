import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const LayoutSignIn = ({children}: Readonly<{children: React.ReactNode;}>) => {
    return (
        <>
            <Header />
                { children }
            <Footer/>
        </>
    );
}

export default LayoutSignIn;