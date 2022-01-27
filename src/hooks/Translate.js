import {useEffect, useContext} from 'react';
import {Context} from '../components/Store';
import { useTranslation } from "react-i18next";

export default function Translate() {
  
    const { langState } = useContext(Context);

    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(langState);
    }, [i18n, langState]);
  
    return { t }
}
