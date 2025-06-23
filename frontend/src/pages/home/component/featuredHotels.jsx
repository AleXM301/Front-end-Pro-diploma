import {Box, Card, CardContent, Rating, Stack, Typography} from "@mui/material";
import location from "@assets/location.svg";
import the_grand_resort from "@assets/the_grand_resort.jpg";

const FeaturedHotels = () => {

    const featuredHotelsData = [
        {
            id: 1,
            img: the_grand_resort,
            name: 'The Grand Resort',
            country: 'Maldives',
            rating: '4.5',
            cell: '450'

        }, {
            id: 2,
            img: the_grand_resort,
            name: 'The Grand Resort',
            country: 'Maldives',
            rating: '4.5',
            cell: '450'

        }, {
            id: 3,
            img: the_grand_resort,
            name: 'The Grand Resort',
            country: 'Maldives',
            rating: '4.5',
            cell: '450'

        }, {
            id: 4,
            img: the_grand_resort,
            name: 'The Grand Resort',
            country: 'Maldives',
            rating: '4.5',
            cell: '450'

        },
    ]
    return (
        <Stack component={'section'} sx={{
            py: {lg: '80px', xs: '40px'},
            bgcolor: '#F6F9FC',
            width: '100%',
            alignItems: 'center',
        }}>
            <Stack component={'div'} sx={{alignItems: 'center', mb: 8, px: {xs: 3}}}>

                <Typography mb={1} typography={'h2'} fontWeight={500} fontSize={'40px'}>Featured
                    Hotels
                </Typography>
                <Typography component="p" fontWeight={400} fontSize={'16px'}>
                    Discover our handpicked selection of exceptional properties around
                    the world, offering unparalleled luxury and unforgettable experiences
                </Typography>
            </Stack>

            <Stack component={'div'}
                   sx={{alignItems: 'center', flexDirection: {lg: 'row', xs: 'column'}, mb: 8, gap: '25px'}}>
                {
                    featuredHotelsData.map(featuredHotel => (
                        <Card key={featuredHotel.id}>
                            <CardContent sx={{p: 0}}>

                                <Box component={'img'} src={featuredHotel.img}
                                     sx={{
                                         maxWidth: '280px',
                                         borderTopLeftRadius: 8,
                                         borderTopRightRadius: 8,
                                     }}
                                     alt={featuredHotel.name}/>

                                <Stack spacing={1} sx={{px: 2, py: 3}}>
                                    <Typography component="p">{featuredHotel.name}</Typography>

                                    <Rating value={featuredHotel.rating} readOnly precision={0.5}/>
                                    <Typography
                                        component="p">
                                        <img src={location} alt={'location'}/>
                                        {featuredHotel.country}
                                    </Typography>
                                    <Typography component="p" sx={{fontSize: '20px'}}>
                                        <strong>{featuredHotel.cell} /night</strong> </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    ))
                }
            </Stack>
        </Stack>
    );
}
export default FeaturedHotels;