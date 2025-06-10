import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getHotels} from "../../store/thunks/hotelsThunk.js";
import styles from "./Hotels.module.css";
import {NavLink} from "react-router";
import staricon from "../../assets/star.svg"
const Hotels = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHotels());
    }, [dispatch]);

    const hotels = useSelector((state) => state.hotels);

    console.log(hotels);
    return (

        <div className={styles.wrapper_hotels}>
            <div className={styles.container_hotels}>
                {hotels.hotels.map(hotel => (
                   <NavLink to={`/hotel/${hotel.id}`} key={hotel.id}>
                       <div key={hotel.id} className={styles.hotel} >
                           {hotel.image ?  <img className={styles.hotel_image} src={hotel.image} alt="hotel.image"/> : <div className={styles.post_not_img}> not image</div>}
                           <div className={styles.hotel_info}>
                               <p className={styles.hotel_city}>City: {hotel.city}</p>
                               <h4 className={styles.hotel_title}>{hotel.name}</h4>
                               <p className={styles.hotel_address}>Address: {hotel.address}</p>
                               <p className={styles.hotel_rating}>
                                   <img className={styles.rating_star} src={staricon} alt={`Rating`}/>
                                   {hotel.hotel_rating}</p>


                           </div>
                       </div>
                   </NavLink>
                ))}
            </div>
        </div>
    );

}
export default Hotels