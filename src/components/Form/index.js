import React, {useEffect, useContext} from 'react';
import {v4 as uuidv4} from "uuid";
import Button from '../Button';
import './styles.scss';
import TextField from '@mui/material/TextField';
import {Context} from '../Store';
import { useTranslation } from "react-i18next";
import './styles.scss';

const Form = ({title, setTitle, year, setYear, tracks, setTracks, image, setImage, albums, setAlbums}) => {

    const [state] = useContext(Context);

    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(state);
    }, [i18n, state]);

    const onAlbumChange = (event) => {
        setTitle(event.target.value)
    };
    const onYearChange = (event) => {
        setYear(event.target.value)
    };
    const onTracksChange = (event) => {
        setTracks(event.target.value)
    };
    const onImageChange = (event) => {
        setImage(event.target.value)
    };

    const onAddAlbumSubmit = (event) => {
        event.preventDefault();
        setAlbums([...albums, {id: uuidv4(), title: title, year: year, tracks: tracks, image: image, favourite: false, timeNow: Date.now()}]);
        setTitle('');
        setYear('');
        setTracks('');
        setImage('');
    };
     

    return (
        <div className='container-form'>
            <h2 className='form__title'>{t("title")}</h2>

            <p className='form__information'>
                {t("description")}
            </p>

            <form 
                className='form__album-add'
                onSubmit={onAddAlbumSubmit}
            >
                <TextField
                    className='add-task__input add-task__input--long'
                    label={t("inputs.title")}
                    variant="outlined" 
                    size="smalll"
                    value={title}
                    sx={{ mb: 2.5 }}
                    onChange={onAlbumChange}
                />
                <TextField
                    className='add-task__input add-task__input--short'
                    label={t("inputs.year")}
                    variant="outlined" 
                    size="smalll"
                    value={year}
                    sx={{ mb: 2.5 }}
                    onChange={onYearChange}
                />
                <TextField
                    className='add-task__input add-task__input--short'
                    label={t("inputs.tracks")}
                    variant="outlined" 
                    size="smalll"
                    value={tracks}
                    sx={{ mb: 2.5 }}
                    onChange={onTracksChange}
                />
                <TextField
                    className='add-task__input add-task__input--long'
                    label={t("inputs.image")}
                    variant="outlined" 
                    size="smalll"
                    value={image}
                    onChange={onImageChange}
                />
                <Button 
                    btnStyle="btn--full-width btn--add-album"
                    type='submit'
                    onClick={onAddAlbumSubmit}
                >
                    {t("submit")}
                </Button>
            </form>
        </div>
    );
}

export default Form;