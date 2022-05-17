import React from "react";
import { Page } from "components";
import { useTranslation } from "react-i18next";

const Deposit = () => {
  const {t} = useTranslation()
  return <Page>{t('deposit')}</Page>;
};

export { Deposit };
