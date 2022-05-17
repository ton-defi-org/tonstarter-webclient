import { Page } from "components";
import { useTranslation } from "react-i18next";

const TransferOwnership = () => {
  const {t} = useTranslation()
  return <Page>{t('transfer-ownership')}</Page>;
};

export { TransferOwnership };
