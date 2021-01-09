import Head from 'next/head'
import Link from 'next/link'
import { useContext, useState, useEffect } from "react";

import { API_URL } from '../utils/urls'
import AuthContext from "../context/AuthContext";

import styles from '../styles/Home.module.css'

export default function Home() {

  const { user, logoutUser, getToken} = useContext(AuthContext)

  //const { products, loading } = useProducts(user, getToken)

  return (
    <div>
      <Head>
        <title>Build an Ecommerce with NextJS, Magic, Strapi and Stripe</title>
        <meta name="description" content="Learn how to build a FullStack Ecommerce in this 2 hours and a half free video sponsored by Magic" />
      </Head>

      {/* {products.map(product => (
        <div className={styles.product}>
          {product.download === 'Please purchase this product, get in touch with support for help'
            ? (
              <button>
                Compra
              </button>
            ) : (
              <p>{product.download}</p>
            )
          } 
        </div>
      ))}*/}
    </div>
  )
}