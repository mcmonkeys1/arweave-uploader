import Arweave from "arweave"

const arweave = Arweave.init({ host: 'arweave.net', protocol: 'https', timeout: 60000, })

export const sleep = async (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

export const getStatus = async (txid: string) => (await arweave.transactions.getStatus(txid)).status
