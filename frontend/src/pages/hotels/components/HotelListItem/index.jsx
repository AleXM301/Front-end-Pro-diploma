import {Box, ListItem, Rating} from "@mui/material";
import {NavLink} from "react-router";
import {useSelector} from "react-redux";

import styles from "@pages/hotels/components/HotelListItem/HotelListItem.module.css"

const HotelListItem = () => {
    const {hotels} = useSelector((state) => state.hotels);
    return (
        <>
            {
                hotels.map(hotel => (
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
                ))
            }</>
    )
}
export default HotelListItem;