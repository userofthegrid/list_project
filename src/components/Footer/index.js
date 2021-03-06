import React, {useEffect, useContext} from 'react';
import {Context} from '../Store';
import { useTranslation } from "react-i18next";
import './styles.scss'

export default function Footer() {

  const { langState } = useContext(Context);

  const { t, i18n } = useTranslation();

  useEffect(() => {
      i18n.changeLanguage(langState);
  }, [i18n, langState]);

  return (
      <a className='footer' href='https://github.com/userofthegrid/list_project'>{t("footer")}</a>
  );
}
