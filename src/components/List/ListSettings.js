import React from "react";
import List from '../../assets/list.svg';
import Grid from '../../assets/grid.svg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './styles.scss';
import './gridLayout.scss';

export default function ListSettings({sorting, setSorting, listLayout, setListLayout}) {

  const sortChange = (event) => {
    setSorting(event.target.value);
  };

  const viewList = () => {
    localStorage.setItem("listLayout", 'layout--list');
    setListLayout(localStorage.getItem('listLayout'));
  }

  const viewGrid = () => {
    localStorage.setItem("listLayout", 'layout--grid');
    setListLayout(localStorage.getItem('listLayout'));
  }

  return (
    <div className='list__settings'>
      <h3 className='settings__list-title'>Lista albumów</h3>
      <div className='settings__options'>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 135 }}>
          <InputLabel id="select-standard-label">Sortuj po</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={sorting}
            onChange={sortChange}
            label=""
          >
            <MenuItem value={'date'}>Data dodania</MenuItem>
            <MenuItem value={'id'} defaultChecked>ID albumu</MenuItem>
            <MenuItem value={'title'}>Nazwa albumu</MenuItem>
          </Select>
        </FormControl>

        <button className={`${listLayout === 'layout--list' ? 'options__btn options__btn--active' : 'options__btn'}`} onClick={viewList}>
          <img src={List} alt='Display as list' />
        </button>

        <button className={`${listLayout === 'layout--grid' ? 'options__btn options__btn--active' : 'options__btn'}`} onClick={viewGrid}>
          <img src={Grid} alt='Display as grid' />
        </button>
      </div>
    </div>
  );
}
