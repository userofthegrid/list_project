import {useEffect, useContext} from 'react';
import {Context} from '../Store';

const ListSettingsLogic = () => {
  
    const { sorting } = useContext(Context);
    const { setSorting } = useContext(Context);
    const { listLayout } = useContext(Context);
    const { setListLayout } = useContext(Context);

    const sortChange = (event) => {
        setSorting(JSON.stringify({sortBy: event.target.value, forceUpdate: 0}));
    };

    const viewList = () => {
        localStorage.setItem("listLayout", 'layout--list');
        setListLayout(localStorage.getItem('listLayout'));
    }

    const viewGrid = () => {
        localStorage.setItem("listLayout", 'layout--grid');
        setListLayout(localStorage.getItem('listLayout'));
    } 
  
    return { sorting, listLayout, sortChange, viewList, viewGrid };
}

export default ListSettingsLogic;