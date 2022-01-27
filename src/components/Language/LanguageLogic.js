import { useContext } from "react";
import { Context } from '../Store';

const LanguageLogic = () => {
  
    const { langState } = useContext(Context);
    const { setLangState } = useContext(Context);

    const handleChange = (event) => {
        setLangState(event.target.value)
    };
  
    return { langState, handleChange }
}

export default LanguageLogic;
