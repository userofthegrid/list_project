import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './styles.scss';

export default function Language() {

  const [Language, setLanguage] = useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className='languages'>
      <FormControl fullWidth>
        <InputLabel sx={{ fontSize: 14 }} id="select-label">Język</InputLabel>
        <Select
          defaultValue={'pl'}
          labelId="select-label"
          id="simple-select"
          value={Language}
          label="Język"
          onChange={handleChange}
          sx={{ fontSize: 14 }}
        >
          <MenuItem value={'pl'} sx={{ fontSize: 14 }}>Polish</MenuItem>
          <MenuItem value={'en'} sx={{ fontSize: 14 }}>English</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
