import {Button, Card, CardActions, CardContent, Stack, Typography} from "@mui/material";

import ExclusiveOffers from "@assets/exclusive_offers.jpg";


const OffersSection = () => {
    return (

        <Stack spacing={'48px'} component={'section'} width={'100%'} alignItems={"center"}
               sx={{py: {lg: '80px', xs: '80'}}}>
            <Stack spacing={1} sx={{px: {xs: 3}}}>
                <Typography variant={'h3'}>Exclusive Offers</Typography>
                <Typography>Take advantage of our limited-time offers and special packages to enhance your stay and
                    create unforgettable memories.
                </Typography>
            </Stack>
            <Stack spacing={2} sx={{
                flexDirection: {lg: 'row', xs: 'column'},
                px: 3
            }}>
                <Card sx={{borderRadius: '12px'}}>
                    <CardContent sx={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%), 
                                            url(${ExclusiveOffers})`,
                        width: {lg: '373px', xs: 'auto'},
                        height: {lg: '225px', xs: 'auto'},
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'stretch',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <Stack justifyContent="space-between" width={'100%'} height={'100%'}
                               sx={{pt: {lg: 7, xs: 'auto'}}}>
                            <Stack spacing={2}>
                                <Typography>Summer Escape Package</Typography>
                                <Typography>Enjoy a complimentary night and daily breakfast</Typography>
                                <Typography>Expires Aug 31</Typography>
                            </Stack>

                            <CardActions sx={{p: 0}}>
                                <Button variant="standart"
                                        href={"/hotels"}
                                        color="primary"
                                        sx={{p: 0}}>View Offers</Button>
                            </CardActions>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </Stack>

    )
}
export default OffersSection