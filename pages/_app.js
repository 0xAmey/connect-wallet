import '../styles/globals.css'

/* WAGMI */
import {
    chain,
    WagmiConfig,
    createClient,
    defaultChains,
    configureChains,
} from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
    alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }),
    publicProvider(),
])

const client = createClient({
    autoConnect: 'true',
    connectors: [
        new MetaMaskConnector({ chains }),
        new CoinbaseWalletConnector({
            chains,
            options: { appName: 'amey-connects-wallets!' },
        }),
        new WalletConnectConnector({ chains, options: { qrcode: true } }),
        new InjectedConnector({
            chains,
            options: {
                name: 'Injected',
                shimDisconnect: true,
            },
        }),
    ],
    provider,
})

function MyApp({ Component, pageProps }) {
    return (
        <WagmiConfig client={client}>
            {' '}
            {/*This is like a context provider, helps in sharing state across the program etc.*/}
            <Component {...pageProps} />
        </WagmiConfig>
    )
}
export default MyApp
