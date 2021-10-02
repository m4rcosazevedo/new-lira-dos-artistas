import { useTranslation } from 'react-i18next'

type Props = {
  path: string
}

export default ({ path }: Props): JSX.Element => {
  const { t } = useTranslation()

  return t(path)
}
