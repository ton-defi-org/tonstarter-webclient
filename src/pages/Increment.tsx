import { Page } from 'components'
import { useTranslation } from 'react-i18next'

const Increment = () => {
  const {t} = useTranslation()
  return (
    <Page>{t('increment')}</Page>
  )
}

export {Increment}