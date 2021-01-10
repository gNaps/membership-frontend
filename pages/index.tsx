import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useContext, useState, useEffect } from 'react';
import useSWR from 'swr';

import { API_URL } from '../utils/urls';
import AuthContext from '../context/AuthContext';

import styles from '../styles/Home.module.css';

export default function Home({ products }) {
    const { user, logoutUser, getToken } = useContext(AuthContext);

    /**
     * Reload products if user is logged
     */
    if (user) {
        const fetcher = (url) =>
            fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => res.json());
        const { data, error } = useSWR(`${API_URL}/membership-light/products`, fetcher);

        if (data) {
            products = data;
        }
    }

    return (
        <div>
            <Head>
                <title>Build an Ecommerce with NextJS, Magic, Strapi and Stripe</title>
                <meta
                    name="description"
                    content="Learn how to build a FullStack Ecommerce in this 2 hours and a half free video sponsored by Magic"
                />
            </Head>

            {products.map((product) => (
                <div className={styles.product} key={product.id}>
                    {product.download ===
                    'Please purchase this product, get in touch with support for help' ? (
                        <button>Compra</button>
                    ) : (
                        <p>{product.download}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const product_res = await fetch(`${API_URL}/membership-light/products/`);
    const products = await product_res.json();

    return {
        props: {
            products
        }
    };
};
