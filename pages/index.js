import Head from 'next/head'
import styles from '../styles/Home.module.css'
import WalletButton from '../components/WalletButton.js'

export default function Home() {
    return (
        <main className={styles.container}>
            <Head>
                <title>Connect Wallet</title>
                <meta name="description" content="Connect Wallet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Connect Wallet</h1>
            <WalletButton />
        </main>
    )
}
