import { useState } from 'react';
import List from '../../assets/list.svg';
import Grid from '../../assets/grid.svg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './styles.scss';

export default function ListSettings() {

  const [sort, setAge] = useState('');

  const sortChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='list__settings'>
      <h3 className='settings__list-title'>Lista albumów</h3>
      <div className='settings__options'>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label" sx={{ fontSize: 14 }}>Sortuj po</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={sort}
            onChange={sortChange}
            label="Age"
            sx={{ fontSize: 14 }}
          >
            <MenuItem value={10} sx={{ fontSize: 14 }}>ID albumu</MenuItem>
            <MenuItem value={20} sx={{ fontSize: 14 }}>Data dodania</MenuItem>
            <MenuItem value={30} sx={{ fontSize: 14 }}>Nazwa albumu</MenuItem>
          </Select>
        </FormControl>

        <button className='options__btn options__btn--active'>
          <img src={List} alt='Display as list' />
        </button>

        <button className='options__btn'>
          <img src={Grid} alt='Display as grid' />
        </button>
      </div>
    </div>
  );
}
