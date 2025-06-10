import {useParams} from "react-router";
import {useEffect} from "react";
import {getHotelsById} from "../../store/thunks/hotelsThunk.js";
import {useDispatch, useSelector} from "react-redux";

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
    console.log(error);
    console.log(hotel);
    // <img src={hotel.image} className={styles.hotel_image} alt="hotel" />
    return (
        <div className={styles.hotel_container}>

            <div className={styles.hotel_info_container}>

                <p className={styles.hotel_info}>Name: {hotel.name ? hotel.name : "нету"} </p>
                <p className={styles.hotel_info}>Address: {hotel.address ? hotel.address : "нету"} </p>
                <p className={styles.hotel_info}>City: {hotel.city ? hotel.city : "нету"} </p>
                <p className={styles.hotel_info}>Country code: {hotel.country_code ? hotel.country_code : "нету"}</p>
                <p className={styles.hotel_info}>Hotel rating: {hotel.hotel_rating} </p>
                <p className={styles.hotel_info}>Phone number: {hotel.phone_number ? hotel.phone_number : "нету"} </p>
                <p className={styles.hotel_info}>State: {hotel.state ? hotel.websites : "нету"} </p>
                <p className={styles.hotel_info}> Websites: {hotel.websites ? hotel.websites : "нету"} </p>
            </div>

        </div>
    )


}
export default Hotel;