export const supportedChainIds = [
    80001 // Polygon Mainnet
]

export const getChainName = (chainId: number) => {
    switch (chainId) {
        case 80001:
            return 'Polygon'
        default:
            return 'Unknown'
    }
}

export const getCurrencyName = (chainId: number) => {
    switch (chainId) {
        case 80001:
            return 'MATIC'
        default:
            return 'ETH'
    }
}

export const rpcUrl = (chainId: number) => {
    switch (chainId) {
        case 80001:
            return { http: 'https://polygon-mumbai.g.alchemy.com/v2/ksqleRX25aRSLQ9uawfAwVTlQ8gKLULj'}
        default:
            return null;

    }
}

export const getSwitchNetwork = (chainId: number) => {
    switch (chainId) {
        case 80001:
            return 1313161555
        case 1313161555:
            return 80001
        default:
            return 80001
    }
}