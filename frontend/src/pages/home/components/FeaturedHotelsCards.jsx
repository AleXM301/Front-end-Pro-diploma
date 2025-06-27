import featuredHotelsMock from "@/moks/featuredHotels.mock.js";
import {Box, Card, CardContent, Rating, Stack, Typography} from "@mui/material";
import location from "@assets/location.svg";

const FeaturedHotelsCards = () => (
    <>
        {
            featuredHotelsMock.map(featuredHotel => (
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
    </>
)

export default FeaturedHotelsCards