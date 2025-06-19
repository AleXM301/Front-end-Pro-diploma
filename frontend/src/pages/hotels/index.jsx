import {useSelector} from "react-redux";

import {NavLink} from "react-router";
import {Box, Container, Typography} from "@mui/material";
import Forms from "./component/forms.jsx";

import starIcon from "../../assets/star.svg"

import styles from "./Hotels.module.css";

const Hotels = () => {

    const {hotels} = useSelector((state) => state.hotels);
    if (hotels === null || hotels.length === 0) {
        console.error("No hotels found.");
        return (
            <Container className={styles.wrapper_hotels} component={'section'} direction='row' alignItems={'center'}
                       sx={{alignItems: 'center', flex: 1}}>
                <Box sx={{alignItems: 'center'}}>
                    <Typography variant='h5'>Not found hotels</Typography>
                </Box>
                <Forms/>
            </Container>
        );
    }

    return (

        <Container className={styles.wrapper_hotels} component={'section'} direction='row' alignItems={'center'}>

            <Box className={styles.container_hotels}>

                {hotels.map(hotel => (
                    <NavLink to={`/hotel/${hotel.id}`} key={hotel.id}>
                        <div key={hotel.id} className={styles.hotel}>
                            {hotel.image ? <img className={styles.hotel_image} src={hotel.image} alt="hotel.image"/> :
                                <div className={styles.post_not_img}> not image</div>}
                            <div className={styles.hotel_info}>
                                <p className={styles.hotel_city}>City: {hotel.city}</p>
                                <h4 className={styles.hotel_title}>{hotel.name}</h4>
                                <p className={styles.hotel_address}>Address: {hotel.address}</p>
                                <p className={styles.hotel_rating}>
                                    <img className={styles.rating_star} src={starIcon} alt={`Rating`}/>
                                    {hotel.hotel_rating}
                                </p>


                            </div>
                        </div>
                    </NavLink>
                ))}
            </Box>
            <Forms/>
        </Container>
    );

}
export default Hotels