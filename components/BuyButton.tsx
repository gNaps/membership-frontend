import { useRouter } from 'next/router'
//import { loadStripe } from '@stripe/stripe-js'
import { API_URL } from '../utils/urls'
import styles from '../styles/BuyButton.module.css'
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

//const stripePromise = loadStripe(STRIPE_PK)

export default function BuyButton ({ product }) {
    const { user, getToken } = useContext(AuthContext);

    const router = useRouter()

    const handleBuy = async (e) => {
        const token = await getToken()
        e.preventDefault()
        console.log(token)
    }

    const redirectToLogin = async () => {
        router.push('/login')
    }

    return(
        <>
            {user &&
                <button className={styles.buy} onClick={handleBuy}>BUY</button>
            }
            {!user &&
                <button className={styles.buy} onClick={redirectToLogin}>Login to Buy</button>
            }
        </>
    )
}