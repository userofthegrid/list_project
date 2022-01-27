import {useContext} from 'react';
import {v4 as uuidv4} from "uuid";
import {Context} from '../Store';

const FormLogic = () => {

    const { inpState } = useContext(Context);
    const { setInpState } = useContext(Context);
    const { albums } = useContext(Context);
    const { setAlbums } = useContext(Context);

    const handleInpChange = (e) => {
        const inpValue = e.target.value;
        setInpState({
            ...inpState,
            [e.target.name]: inpValue
        });
    }

    const onAddAlbumSubmit = (event) => {
        event.preventDefault();
        setAlbums([...albums, {id: uuidv4(), title: inpState.title, year: inpState.year, tracks: inpState.tracks, image: inpState.image, favourite: false, timeNow: Date.now()}]);
        setInpState({
            title: "",
            year: "",
            tracks: "",
            image: ""
        })
        window.location.reload(false);
    };

    return { inpState, handleInpChange, onAddAlbumSubmit }
}

export default FormLogic;