import CustomAppBar from "@/components/AppBar";

export default function Layout({children}) {
    return (
        <section>
            <CustomAppBar />
            {children}
        </section>
    );
}