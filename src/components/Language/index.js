import React from "react";
import LanguageLogic from './LanguageLogic'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TranslateIcon from '@mui/icons-material/Translate';
import './styles.scss';

export default function Language() {

  const { langState, handleChange } = LanguageLogic();

  return (

    <div className='languages'>
      <FormControl fullWidth>
        <InputLabel id="select-label"><TranslateIcon /></InputLabel>
        <Select
          defaultValue={'pl'}
          labelId="select-label"
          id="simple-select"
          value={langState}
          label="Język"
          onChange={handleChange}
        >
          <MenuItem value={'pl'}>Polski</MenuItem>
          <MenuItem value={'en'}>English</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
