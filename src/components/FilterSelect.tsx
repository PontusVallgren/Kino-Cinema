import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Sort } from "../types";

type FilterSelectProps = {
  handleChange: (value: string) => void;
  value: string;
};

const FilterSelect: React.FC<FilterSelectProps> = ({ handleChange, value }) => {
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl color='info' fullWidth>
        <InputLabel color='info' id='select-sort'>
          Sortera
        </InputLabel>
        <Select
          labelId='select-sort'
          id='select-sort'
          value={value}
          label='Sortera'
          onChange={(e) => handleChange(e.target.value)}
        >
          <MenuItem value={Sort.ALL}>Alla filmer</MenuItem>
          <MenuItem value={Sort.RATING}>Högsta rating</MenuItem>
          <MenuItem value={Sort.ORDER}>Sortera A-Z</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterSelect;
