import React from 'react';
import Input from '../Input';
import Button from '../Button'
import './Form.scss';

export default function index() {
  return (
    <div className='container-form'>
        <h2 className='form__title'>Nowy album</h2>

        <p className='form__information'>
        W formularzu poniżej możesz dodać informacje dotyczące
        albumu, który chcesz dodać do swojej listy.
        </p>

        <form className='form__album-add'>
        <Input 
            children='Nazwa albumu'
            type='text'
            inpName='album-name'
        />
        <Input 
            children='Rok wydania'
            inpStyle='inp--small'
            type='text'
            inpName='album-year'
        />
        <Input 
            children='Liczba utworów'
            inpStyle='inp--small'
            type='text'
            inpName='album-track-number'
        />
        <Input 
            children='Link do okładki'
            type='text'
            inpName='album-img'
        />

        <Button>Dodaj album</Button>
        </form>
    </div>
  );
}
