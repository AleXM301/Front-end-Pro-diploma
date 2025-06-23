import {useDispatch, useSelector} from "react-redux";

import {NavLink} from "react-router";
import {Box, Container, List, ListItem, Pagination, Rating, Typography} from "@mui/material";
import Forms from "./component/forms.jsx";
import {getHotels} from "@thunks/hotelsThunk.js";

import styles from "./Hotels.module.css";


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
                                        mt: {lg: 8, xs: 0},
                                        ml: {lg: 10, xs: 0}
                                    }}>
                            Not found
                            hotels
                        </Typography>
                    </Box>
                    <Forms/>
                </Container>
            </Box>
        );
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

                    {hotels.map(hotel => (
                        <ListItem key={hotel.id} sx={{px: 0}}>
                            <NavLink className={styles.hotel_link} to={`/hotel/${hotel.id}`} key={hotel.id}>
                                <Box key={hotel.id} className={styles.hotel} sx={{
                                    display: 'flex',
                                    flexDirection: {lg: 'row', xs: 'column'},
                                    px: {lg: '10px', xs: 2}
                                }}>
                                    {hotel.image ?
                                        <img className={styles.hotel_image} src={hotel.image} alt="hotel.image"/> :
                                        <div className={styles.post_not_img}> not image</div>
                                    }
                                    <div className={styles.hotel_info}>
                                        <p className={styles.hotel_city}>City: {hotel.city}</p>
                                        <h4 className={styles.hotel_title}>{hotel.name}</h4>
                                        <p className={styles.hotel_address}>Address: {hotel.address}</p>
                                        <Rating value={hotel.hotel_rating} precision={0.5} readOnly/>

                                    </div>
                                </Box>
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
                <Forms/>

            </Container>
            <Pagination count={pagination.totalPages} onChange={(event, value) => handleChangePage(value)}/>
        </Box>
    );
}
export default Hotels