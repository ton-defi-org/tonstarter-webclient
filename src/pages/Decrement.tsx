import React from "react";
import { Page } from "components";
import { useTranslation } from "react-i18next";

const Decrement = () => {
  const {t}  =useTranslation()
  return <Page>{t('decrement')}</Page>;
};

export { Decrement };
