import { createContext, ReactNode, useState } from "react";
import { Address } from "ton";

interface State {
  address?: Address;
  updateAddress: (value?: Address) => void;
  isTelegram: boolean;
  setIsTelegram: (value: boolean) => void;
}

const Context = createContext({} as State);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState<Address | undefined>();
  const [isTelegram, setIsTelegram] = useState(false)

  

    const updateAddress = (value?: Address) => {
      setAddress(value)
    }

  return (
    <Context.Provider value={{ address, updateAddress, isTelegram, setIsTelegram }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
