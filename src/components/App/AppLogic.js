import React, { useState, useEffect } from "react";
import '../../i18n';

const AppLogic = () => {

    const [langState, setLangState] = useState('pl');
    const initialState = JSON.parse(localStorage.getItem("albums")) || [];
    const [inpState, setInpState] = React.useState({
        title: "",
        year: "",
        tracks: "",
        image: ""
    })
    const [albums, setAlbums] = useState(initialState);
    const [sorting, setSorting] = useState(!localStorage.getItem('sorting') ? JSON.stringify({sortBy: 'title', forceUpdate: 0}) : localStorage.getItem('sorting'));
    const [listLayout, setListLayout] = useState('layout--list');

    useEffect(() => {
        localStorage.setItem("albums", JSON.stringify(albums));
    }, [albums]);

    return { langState, setLangState, inpState, setInpState, albums, setAlbums, sorting, setSorting, listLayout, setListLayout }
}

export default AppLogic;