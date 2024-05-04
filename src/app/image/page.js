import Image from "next/image";

import Img1 from "../../assests/img1.jpg"


const ImagePage = () => {
    return (
        <div>
            <h1 className="mx-auto text-6xl">This is image component</h1>
            <Image
                src="https://i.ibb.co/HGhC8Cr/36bc1b26-02d4-475d-b69a-c4d0adcf6299.jpg"
                width={400}
                height={400}
                alt="this is image"
            ></Image>

            <h1>this image from assests</h1>
            <Image
            src={Img1}
            width={400}
            height={400}
            alt="image from assests"
            ></Image>
        </div>
    );
};

export default ImagePage;