import React from 'react';
import Translate from '../../hooks/Translate';
import Button from '../Button';
import TextField from '@mui/material/TextField';
import FormLogic from './FormLogic';
import './styles.scss';

const Form = () => {
     
    const { t } = Translate();
    const { inpState, handleInpChange, onAddAlbumSubmit } = FormLogic();

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
                    name="title"
                    value={inpState.title}
                    sx={{ mb: 2.5 }}
                    onChange={handleInpChange}
                />
                <TextField
                    className='add-task__input add-task__input--short'
                    label={t("inputs.year")}
                    variant="outlined" 
                    size="smalll"
                    name="year"
                    value={inpState.year}
                    sx={{ mb: 2.5 }}
                    onChange={handleInpChange}
                />
                <TextField
                    className='add-task__input add-task__input--short'
                    label={t("inputs.tracks")}
                    variant="outlined" 
                    size="smalll"
                    name="tracks"
                    value={inpState.tracks}
                    sx={{ mb: 2.5 }}
                    onChange={handleInpChange}
                />
                <TextField
                    className='add-task__input add-task__input--long'
                    label={t("inputs.image")}
                    variant="outlined" 
                    size="smalll"
                    name="image"
                    value={inpState.image}
                    onChange={handleInpChange}
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