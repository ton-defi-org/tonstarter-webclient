import { Address } from "ton";

export enum WalletConnectorType {
  UNIVERSAL_DEEP_LINKS,
  TON_HUB,
  BROWSER_EXTENSION,
}

export const walletConnnectors = [
  {
    type: WalletConnectorType.BROWSER_EXTENSION,
    text: "web extension",
    isSupported: true,
  },
  {
    type: WalletConnectorType.UNIVERSAL_DEEP_LINKS,
    text: "universal deel-links",
    isSupported: false,
  },
  {
    type: WalletConnectorType.TON_HUB,
    text: "ton hub",
    isSupported: false,
  },
];

export interface WalletConnector {
  type: WalletConnectorType;
  address?: Address;
}

export async function connect(type: WalletConnectorType): Promise<WalletConnector> {
  switch (type) {
    case WalletConnectorType.BROWSER_EXTENSION:
      return connectWithExtension();

    default:
      break;
  }
  const res = {
    type,
  };
  return res;
}

const connectWithExtension = async (): Promise<WalletConnector> => {
  const provider = (window as any).ton;
  if (!provider) {
    throw new Error("please install wallet extension");
  }
  const adresses = await provider.send("ton_requestAccounts");
  return { type: WalletConnectorType.BROWSER_EXTENSION, address: adresses[0] };
};
