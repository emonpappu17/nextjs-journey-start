import { redirect } from "next/navigation";

const ProductsPage = async () => {
    const res = await fetch("http://localhost:3000/api/items",
        {
            cache: "force-cache"   // bole ditasi data ta cache korte na hoe ai page abr refresh dile notun kore data fetch kirbe
        }
    )
    const data = await res.json();
    // if (data.length > 3) {
    //     redirect("/")   //redirect shudu server component a use kora jay
    // }
    return (
        <ul className="text-center mt-8">
            {
                data?.map((singleProduct) => {
                    return <li key={singleProduct._id}>
                        {singleProduct?.productName}
                    </li>
                })
            }
            {/* <p>{JSON.stringify(data)}</p> */}
        </ul>
    );
};

export default ProductsPage;