import style from "./Home.module.css"
import location from "../../assets/location.svg"
import the_grand_resort from "../../assets/The_Grand_Resort.png"

const Home = () => {

    return (
        <>
            <section className={style.hero_wrapper}>
                <div className={style.hero_container}>
                    <div className={style.hero_text}>
                        <p>The Ultimate Hotel Experience</p>
                        <h1 className={style.hero_title}>Discover Your Perfect<br/>
                            Getaway Destination</h1>
                        <p>Unparalleled luxury and comfort await at the world's most exclusive<br/>
                            hotels and resorts. Start your journey today.</p>
                    </div>
                </div>
            </section>

            <section className={style.featured__section}>
                <div className={style.featured__container}>
                    <div className={style.featured__header}>
                        <h2 className={style.featured__title}>Featured Hotels</h2>
                        <p className={style.secondary_text}>
                            Discover our handpicked selection of exceptional properties around the world, offering
                            unparalleled luxury and unforgettable experiences
                        </p>
                    </div>
                    <div className={style.featured__cards}>

                        <article className={style.featured__card}>
                            <img src={the_grand_resort} alt={`s`}/>
                            <div className={style.featured__card_info}>
                                <p className={style.featured__title}>The Grand Resort</p>
                                <p className={style.secondary_text}>
                                    <img src={location} alt={`location image`}/>
                                    Maldives</p>
                                <div className={style.featured__details}>
                                    <h3>$450</h3>   <p className={style.secondary_text}>/ night</p>
                                </div>
                            </div>
                        </article>

                    </div>
                    <button className={style.featured__button} type={"submit"}>View All Hotels</button>
                </div>
            </section>

            <section className={style.exclusive__section}>
                <div className={style.exclusive__container}>
                    <div className={style.exclusive__header}>
                        <h2 className={style.exclusive__title}>Exclusive Offers</h2>
                        <p className={style.secondary_text}> Take advantage of our limited-time offers and special
                            packages to enhance your stay and create unforgettable memories.</p>
                    </div>
                    <div className={style.exclusive__cards}>
                        <article className={style.exclusive__card}>
                            <p>Summer Escape Package</p>
                            <p>Enjoy a complimentary night and daily breakfast</p>
                            <p>Expires Aug 31</p>

                        </article>
                        <article className={style.exclusive__card}>
                            <p>Summer Escape Package</p>
                            <p>Enjoy a complimentary night and daily breakfast</p>
                            <p>Expires Aug 31</p>

                        </article>
                        <article className={style.exclusive__card}>
                            <p>Summer Escape Package</p>
                            <p>Enjoy a complimentary night and daily breakfast</p>
                            <p>Expires Aug 31</p>

                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;