import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const LayoutDefault = ({children}: Readonly<{children: React.ReactNode;}>) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default LayoutDefault;