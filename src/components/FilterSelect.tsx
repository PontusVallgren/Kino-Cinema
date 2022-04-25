import {NextPage} from "next"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

type FilterSelectProps = {
    handleChange: (value: string) => void,
    value: string
}

const FilterSelect: NextPage<FilterSelectProps> = ({handleChange, value}) => {
    return (
        <Box  sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-filter">Sortera</InputLabel>
          <Select
            labelId="demo-simple-select-filter"
            id="demo-simple-select-filter"
            value={value}
            label="Sort"
            onChange={(e) => handleChange(e.target.value)}
          >
          <MenuItem value={"all"}>Alla filmer</MenuItem>
          <MenuItem value={"rating"}>Högsta rating</MenuItem>
          <MenuItem value={"order"}>Sortera A-Z</MenuItem>
          </Select>
        </FormControl>
      </Box>
    )
}

export default FilterSelect