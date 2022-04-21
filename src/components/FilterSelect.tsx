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
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="select-filter">Sort</InputLabel>
          <Select
            labelId="select-filter"
            id="select-filter"
            value={value}
            label="Sort"
            onChange={(e) => handleChange(e.target.value)}
          >
            <MenuItem value={"Allmovies"}>All movies</MenuItem>
            <MenuItem value={"rating"}>Rating</MenuItem>
            <MenuItem value={"alphabetically"}>Alphabetically</MenuItem>
          </Select>
        </FormControl>
      </Box>
    )
}

export default FilterSelect