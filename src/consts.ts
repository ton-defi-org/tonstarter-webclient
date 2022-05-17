import ChinaLogo from "assets/china.png";
import UsLogo from "assets/usa.png";

const ROUTES = {
  connect: "/connect",
  actionsList: "/",
  deposit: "/deposit",
  withdraw: "/withdraw",
  increment: "/increment",
  decrement: "/decrement",
  transferOwnership: "/transfer-ownership",
};

const ACTIONS = [
  {
    key: "deposit",
    route: ROUTES.deposit,
  },
  {
    key: "withdraw",
    route: ROUTES.withdraw,
  },
  {
    key: "increment",
    route: ROUTES.increment,
  },
  {
    key: "decrement",
    route: ROUTES.decrement,
  },
  {
    key: "transfer-ownership",
    route: ROUTES.transferOwnership,
  },
];

const supportedLanguages = [
  {
    lang: "en",
    image: UsLogo,
  },
  {
    lang: "cn",
    image: ChinaLogo,
  },
];

// const TON_WALLET_EXTENSION_URL  = 'https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd'

export { ROUTES, ACTIONS, supportedLanguages };
