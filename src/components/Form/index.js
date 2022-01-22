import React from 'react';
import {v4 as uuidv4} from "uuid";
import Button from '../Button';
import './styles.scss';
import TextField from '@mui/material/TextField';

const Form = ({title, setTitle, year, setYear, tracks, setTracks, image, setImage, albums, setAlbums}) => {

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
        setAlbums([...albums, {id: uuidv4(), title: title, year: year, tracks: tracks, image: image, favourite: false}]);
        setTitle('');
        setYear('');
        setTracks('');
        setImage('');
    };
     

    return (
        <div className='container-form'>
            <h2 className='form__title'>Nowy album</h2>

            <p className='form__information'>
                W formularzu poniżej możesz dodać informacje dotyczące
                albumu, który chcesz dodać do swojej listy.
            </p>

            <form 
                className='form__album-add'
                onSubmit={onAddAlbumSubmit}
            >
                <TextField
                    className='add-task__input add-task__input--long'

                    label='Nazwa albumu'
                    variant="outlined" 
                    size="smalll"
                    value={title}
                    sx={{ mb: 2.5 }}
                    onChange={onAlbumChange}
                />
                <TextField
                    className='add-task__input add-task__input--short'
                    label='Rok wydania'
                    variant="outlined" 
                    size="smalll"
                    value={year}
                    sx={{ mb: 2.5 }}
                    onChange={onYearChange}
                />
                <TextField
                    className='add-task__input add-task__input--short'
                    label='Liczba utworów'
                    variant="outlined" 
                    size="smalll"
                    value={tracks}
                    sx={{ mb: 2.5 }}
                    onChange={onTracksChange}
                />
                <TextField
                    className='add-task__input add-task__input--long'
                    label='Link do okładki'
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
                    Dodaj album
                </Button>
            </form>
        </div>
    );
}

export default Form;