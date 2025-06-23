import {useParams} from "react-router";
import {useEffect} from "react";
import {Box, Rating, Stack, Typography} from "@mui/material";
import {getHotelsById} from "@thunks/hotelsThunk.js";
import {useDispatch, useSelector} from "react-redux";
import locationIcon from "@assets/location.svg"

import styles from "./hotel.module.css";


const Hotel = () => {

    const {hotel, loading, error} = useSelector(state => state.hotel);
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotelsById(id));
    }, [dispatch, id]);

    if (loading) {
        return (<p>Loading...</p>)
    }
    if (error) {
        return (<p>{error}</p>)
    }
    return (
        <Stack className={styles.hotel_container} sx={{ px:{lg:'50px',xs:0} }}>
            <Box>

                <Box className={styles.first_info}>
                    <Typography variant="h4" >{hotel.name}</Typography>
                    <Rating value={hotel.hotel_rating} readOnly></Rating>
                    <Typography className={styles.hotel_city} > <img src={locationIcon} alt={"location icon"}/> {hotel.city}</Typography>
                </Box>
                <Stack className={styles.hotel_images_container} direction="row" spacing={2}>
                    <img className={styles.hotel_hero_image} src={hotel.image} alt="hotel image"/>
                    <Box className={styles.hotel_second_images} sx={{display:{lg:'flex', xs:'none'}}}>
                        <img src={hotel.image} alt="hotel image"/>
                        <img src={hotel.image} alt="hotel image"/>
                        <img src={hotel.image} alt="hotel image"/>
                        <img src={hotel.image} alt="hotel image"/>
                    </Box>
                </Stack>

               <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between" }}>
                   <Typography>Experience Luxury Like Never Before</Typography>
                   <Typography ><strong>$299/night</strong></Typography>
               </Stack>

                <Box className={styles.hotel_container_detail_info} sx={{p:{lg:3,xs:0}}}>
                    <Typography className={styles.hotel_detail_info_title}> <strong>Detail info</strong></Typography>
                   <Box className={styles.hotel_detail_info} >
                       <Typography>Name hotel: {hotel.name ?? "none"}</Typography>
                       <Typography>City: {hotel.city ?? "none"}</Typography>
                       <Typography>Address: {hotel.address ?? "none"}</Typography>
                       <Typography>Phone number: {hotel.phone_number ?? "none"}</Typography>
                       <Typography>Website: {hotel.website ?? "none"}</Typography>
                   </Box>
                </Box>
            </Box>
        </Stack>
    )
}
export default Hotel;