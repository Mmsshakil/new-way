
const DynamicProduct = ({ params }) => {
    console.log(params);
    return (
        <div>
            <h1>this is dynamic product page: {params.id}</h1>
        </div>
    );
};

export default DynamicProduct;