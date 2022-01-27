import React from 'react';
import Translate from '../../hooks/Translate';
import ListSettingsLogic from './ListSettingsLogic'
import List from '../../assets/list.svg';
import Grid from '../../assets/grid.svg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './styles.scss';
import './gridLayout.scss';

const ListSettings = () => {

  const { t } = Translate();
  const { sorting, listLayout, sortChange, viewList, viewGrid } = ListSettingsLogic();

  return (
    <div className='list__settings'>
      <h3 className='settings__list-title'>{t("listName")}</h3>
      <div className='settings__options'>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 135 }}>
          <InputLabel id="select-standard-label">{t("sortList.label")}</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={!JSON.parse(sorting).sortBy ? 'title' : JSON.parse(sorting).sortBy}
            onChange={sortChange}
            label=""
          >
            <MenuItem value={'date'}>{t("sortList.option1")}</MenuItem>
            <MenuItem value={'id'} defaultChecked>{t("sortList.option2")}</MenuItem>
            <MenuItem value={'title'}>{t("sortList.option3")}</MenuItem>
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

export default ListSettings;