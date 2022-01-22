import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './styles.scss';
import TranslateIcon from '@mui/icons-material/Translate';

export default function Language() {

  const [Language, setLanguage] = useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className='languages'>
      <FormControl fullWidth>
        <InputLabel id="select-label"><TranslateIcon /></InputLabel>
        <Select
          defaultValue={'pl'}
          labelId="select-label"
          id="simple-select"
          value={Language}
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
