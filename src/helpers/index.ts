import { WALLET_ADDRESS } from "consts";

const connectWithExtension = async () => {
  const provider = (window as any).ton;
  if (!provider) {
    throw new Error("please install wallet extension");
  }
  const accounts = await provider.send("ton_requestAccounts");
  return accounts[0];
};

const getParamsFromUrl = (name: string) => {
  const query = new URLSearchParams(window.location.search);
  return query.get(name);
};

const updateAddressInLocalStorage = (address: string | null) => {
  if (!address) {
    localStorage.removeItem(WALLET_ADDRESS);
  } else {
    localStorage.setItem(WALLET_ADDRESS, address);
  }
};

const getAddressFromLocalStorage = () => {
  return localStorage.getItem(WALLET_ADDRESS);
};

export { connectWithExtension, getParamsFromUrl, updateAddressInLocalStorage, getAddressFromLocalStorage };
