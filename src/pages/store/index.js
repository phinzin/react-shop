import React from 'react';
import Layout from '../../components/layout';
import ProductsGrid from "./ProductsGrid"
const Store = () =>(
        <Layout title="Store" description="This is the Store page" >
        <div >
            <div className="text-center mt-5">
                <h1>Store</h1>
                <p>This is the Store Page.</p>
            </div>
            <ProductsGrid/>
        </div>
        </Layout>
)
export default Store;