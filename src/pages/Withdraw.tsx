import React from 'react'
import { Page } from 'components'
import { useTranslation } from 'react-i18next'

const Withdraw = () => {
  const {t} = useTranslation()
  return (
    <Page>{t('withdraw')}</Page>
  )
}

export {Withdraw}