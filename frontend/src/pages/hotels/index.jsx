import {useDispatch, useSelector} from "react-redux";
import {Box, Container, List, Pagination, Typography} from "@mui/material";
import Form from "./components/form";
import {getHotels} from "@thunks/hotelsThunk.js";

import styles from "./Hotels.module.css";
import HotelListItem from "@pages/hotels/components/HotelListItem/index.jsx";


const Hotels = () => {

    const {hotels, pagination} = useSelector((state) => state.hotels);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const handleChangePage = (page) => {
        dispatch(getHotels({filters: filter, currentPage: page,}));

    }

    if (hotels === null || hotels.length === 0) {
        return (
            <Box className={styles.section_hotels} component={'section'} sx={{height: '100vh', alignItems: 'stretch'}}>
                <Container className={styles.wrapper_hotels}
                           sx={{
                               alignItems: {lg: 'start', xs: 'center'},
                               flex: 1,
                               flexDirection: {lg: 'row', xs: 'column-reverse'},
                               justifyContent: {lg: 'space-between', xs: 'start'}
                           }}>
                    <Box sx={{alignItems: 'center'}}>
                        <Typography variant='h5'
                                    sx={{
                                        mt: {lg: 8, xs: 0}, ml: {lg: 10, xs: 0}
                                    }}>
                            Not found
                            hotels
                        </Typography>
                    </Box>
                    <Form/>
                </Container>
            </Box>);
    }

    return (

        <Box className={styles.section_hotels} component={'section'} sx={{display: 'flex'}}>
            <Container className={styles.wrapper_hotels} direction='row'
                       sx={{
                           flexDirection: {lg: 'row', xs: 'column-reverse'},
                           alignItems: {lg: 'start', xs: 'center'},
                           px: 0
                       }}>

                <List className={styles.container_hotels}>
                    <HotelListItem />
                </List>
                <Form/>

            </Container>
            <Pagination count={pagination.totalPages} onChange={(event, value) => handleChangePage(value)}/>
        </Box>);
}
export default Hotels