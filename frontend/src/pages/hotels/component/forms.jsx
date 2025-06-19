import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";

import {Stack, FormControl, InputLabel, Select, MenuItem, Typography, Box} from "@mui/material";

import {getDestinations} from "../../../store/thunks/destinationsThunk.js";
import {getHotels} from "../../../store/thunks/hotelsThunk.js";
import {setFilter} from "../../../store/slices/hotelsFilterSlice.js";

import styles from './Forms.module.css';

const Forms = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDestinations());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getHotels(filter));
    }, [dispatch, filter]);

    const {destinations} = useSelector(state => state.destinations);

    const handleChange = (key) => (event) => {
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
                <Box className={styles.filters_form}>

                    <FormControl variant="standard" fullWidth>
                        <InputLabel htmlFor="filters">
                            Destination
                        </InputLabel>
                        <Select labelId="filter"
                                value={filter.destinations}
                                onChange={handleChange("destination")}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            {
                                destinations.map((destination) => (
                                    <MenuItem key={destination.id} value={destination.label}>
                                        {destination.label}</MenuItem>))
                            }
                        </Select>
                    </FormControl>

                    <FormControl variant="standard" fullWidth>

                        <InputLabel htmlFor="Rating">
                            Rating
                        </InputLabel>

                        <Select
                            labelId="Rating"
                            value={filter.rating}
                            onChange={handleChange("rating")}>

                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
        </>)
}
export default Forms;