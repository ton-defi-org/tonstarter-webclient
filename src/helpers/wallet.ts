import { Address } from "ton";

export enum WalletConnectorType {
  UNIVERSAL_DEEP_LINKS,
  TON_HUB,
  BROWSER_EXTENSION,
}

export interface WalletConnector {
  type: WalletConnectorType;
  address?: Address;
}

export async function connect(type: WalletConnectorType): Promise<WalletConnector> {
  const res = {
    type,
  };
  return res;
}
