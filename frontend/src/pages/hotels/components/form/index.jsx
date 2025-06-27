import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";

import {Stack, FormControl, InputLabel, Select, MenuItem, Typography, Box, Rating} from "@mui/material";

import {getHotels} from "@thunks/hotelsThunk.js"
import  {setFilter} from "@slices/hotelsFilterSlice.js";

import styles from './Forms.module.css';

const Form = () => {

    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotels({filters: filter}));
    }, [ dispatch,filter]);

    const {destinations} = useSelector(state => state.destinations);

    const handleChange = (key) => (event) => {
        if (filter.rating === event.target.value) {
            return dispatch(setFilter({key, value: ''}));
        }
        dispatch(setFilter({key, value: event.target.value}));
    };

    return (
        <>
            <Stack className={styles.filters_container} spacing={1}>
                <Box className={styles.filters_typography}>
                    <Typography className={styles.filters_title}>
                        Filter
                    </Typography>
                </Box>
                <Stack className={styles.filters_forms} spacing={2}>

                    <FormControl variant="standard" fullWidth>
                        <InputLabel htmlFor="filters">
                            Destination
                        </InputLabel>
                        <Select
                            variant={"standard"}
                            labelId="filter"
                                value={filter.destination}
                                onChange={handleChange("destination")}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            {
                                destinations.map((destination) => (
                                    <MenuItem key={destination.id} value={destination.label}>
                                        {destination.label}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>

                    <FormControl variant="standard" fullWidth>
                        <Typography className={styles.filters_rating_title}>Rating</Typography>
                        <Rating
                            value={filter.rating}
                            onChange={handleChange("rating")}
                            precision={0.5}
                            sx={{fontSize: {lg:24,xs:33}}}
                        />
                    </FormControl>

                </Stack>
            </Stack>
        </>
    )
}
export default Form;