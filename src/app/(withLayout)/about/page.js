import Link from "next/link";

// this is call metadata for perticularly for this page
export const metadata = {
    title: "About",
    description: "This is about page",
};



const AboutPage = () => {
    return (
        <div>
            <h1>this is about page</h1>

            <Link href="/">
                <button className="btn btn-primary">Home</button>
            </Link>

        </div>
    );
};

export default AboutPage;