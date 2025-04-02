"use client";

import { postSIngleProduct } from "@/app/actions/products/postSIngleProduct";
import { useRouter } from "next/navigation";
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
console.log('BASE_URL', BASE_URL);

const ProductAddForm = () => {
    // const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;

    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const productName = form.productName.value

        const payload = { productName };

        // const res = await fetch(`${BASE_URL}/api/items`, {
        //     method: 'POST',
        //     body: JSON.stringify(payload),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        // const result = await res.json()

        const result = await postSIngleProduct(payload)
        // console.log(result);
        form.reset();
        // alert("Product Added")
        router.push('/products')
        // router.refresh()
    }
    return (
        <div>
            <form className="" onSubmit={handleSubmit}>
                <input className="border" type="text" name="productName" placeholder="Product Name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProductAddForm;