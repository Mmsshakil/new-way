
// this is call metadata for perticularly for this page
export const metadata = {
    title: "Contact",
    description: "This is contact page",
};



const Layout = ({ children }) => {
    return (
        <div>
            <h1>Navbar</h1>
            {children}
            <h1>footer</h1>
        </div>
    );
};

export default Layout;