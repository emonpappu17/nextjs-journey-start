import dbConnect from "@/lib/dbConnect";
import { redirect } from "next/navigation";
import { getProducts } from "../actions/products/getProducts";
export const dynamic = 'force-dynamic'

const ProductsPage = async () => {
    // const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env
    // console.log('NEXT_PUBLIC_SERVER_ADDRESS', NEXT_PUBLIC_SERVER_ADDRESS);
    // console.log('from server', process.env);

    // const res = await fetch(`https://learing-nextjs-seven.vercel.app/api/items`,
    //     {
    //         cache: "force-cache"   // bole ditasi data ta cache korte na hoe ai page abr refresh dile notun kore data fetch kirbe
    //     }
    // )

    // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`,
    //     {
    //         cache: "force-cache"   // bole ditasi data ta cache korte na hoe ai page abr refresh dile notun kore data fetch kirbe
    //     }
    // )

    // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`
    //     // {
    //     //     cache: "force-cache"   // bole ditasi data ta cache korte na hoe ai page abr refresh dile notun kore data fetch kirbe
    //     // }
    // )

    // const data = await res.json();


    // console.log('check data', data);
    // if (data.length > 3) {
    //     redirect("/")   //redirect shudu server component a use kora jay
    // }
    const data = await getProducts();
    return (
        <ul className="text-center mt-8">
            {
                data?.map((singleProduct) => {
                    return <li key={singleProduct._id}>
                        {singleProduct?.productName}
                    </li>
                })
            }
        </ul>
    );
};

export default ProductsPage;