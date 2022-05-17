import { createContext, ReactNode, useState } from "react";
import { getAddressFromLocalStorage, updateAddressInLocalStorage } from "helpers";

interface State {
  address: string | null;
  updateAddress: (value: string | null) => void;
  isTelegram: boolean;
  setIsTelegram: (value: boolean) => void;
}

const Context = createContext({} as State);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState<string | null>(getAddressFromLocalStorage());
  const [isTelegram, setIsTelegram] = useState(false)

  

    const updateAddress = (value: string | null) => {
      updateAddressInLocalStorage(value)
      setAddress(value)
    }

  return (
    <Context.Provider value={{ address, updateAddress, isTelegram, setIsTelegram }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
