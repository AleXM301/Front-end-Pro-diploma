import {Stack, Typography} from "@mui/material";
import FeaturedHotelsCards from "@pages/home/components/FeaturedHotelsCards.jsx";

const FeaturedHotels = () => {

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
               <FeaturedHotelsCards/>
            </Stack>
        </Stack>
    );
}
export default FeaturedHotels;