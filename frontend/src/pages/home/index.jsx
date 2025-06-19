import location from "../../assets/location.svg"
import the_grand_resort from "../../assets/the_grand_resort.jpg"
import {Box, Card, CardContent, Container, Stack, Typography} from "@mui/material";
import HeroBg from "../../assets/image.png"


const Home = () => {

    const FeaturedHotels = [
        {
            img: the_grand_resort,
            name: 'The Grand Resort',
            country: 'Maldives',
            rating: '4',
            cell: '450'

        },
        {
            img: the_grand_resort,
            name: 'The Grand Resort',
            country: 'Maldives',
            rating: '4',
            cell: '450'

        }
    ]


    return (
        <>
            <Box component={'section'}
                 sx={{
                     backgroundImage: `linear-gradient(0deg, #00000066, 0px, #00000066), url(${HeroBg})`,
                     width: '100%',
                     height: '100vh',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center',
                     backgroundAttachment: 'fixed',
                     backgroundSize: 'cover',
                     pt: '64px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',


                 }}>

                <Container component={'div'} sx={{color: 'white', justifyContent: 'center',}}>
                    <Typography variant="h1" component="h1" sx={{
                        fontWeight: '800',
                        fontSize: '60px',
                        lineHeight: '57px',
                        maxWidth: '598px',
                    }}>
                        Discover Your Perfect
                        Getaway Destination
                    </Typography>
                    <Typography component="p" sx={{}}>
                        Unparalleled luxury and comfort await at the world's most exclusive
                        hotels and resorts. Start your journey today</Typography>
                </Container>
            </Box>


            <Stack component={'section'} sx={{
                spacing: 10,
                px: '96px',
                py: '80px',
                bgcolor: '#F6F9FC',
                width: '100%',
                alignItems: 'center',
            }}>

                <Stack component={'div'} sx={{alignItems: 'center', mb: 8,}}>

                    <Typography mb={1} typography={'h2'} fontWeight={500} fontSize={'40px'}>Featured
                        Hotels
                    </Typography>
                    <Typography component="p" fontWeight={400} fontSize={'16px'}>
                        Discover our handpicked selection of exceptional properties around
                        the world, offering unparalleled luxury and unforgettable experiences
                    </Typography>
                </Stack>

                <Stack component={'div'} sx={{alignItems: 'center', flexDirection:'row', mb: 8, gap: '16px'}}>
                    {FeaturedHotels.map(FeaturedHotel => (
                            <Card key={FeaturedHotel.id} >
                                <CardContent sx={{p:0}}>

                                    <Box component={'img'} src={FeaturedHotel.img}
                                         sx={{
                                             width: 280,
                                             borderTopLeftRadius: 8,
                                             borderTopRightRadius: 8,
                                         }}
                                         alt={FeaturedHotel.name}/>

                                    <Stack spacing={1} sx={{px:2, py:3}}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}>
                                            <Typography component="p">{FeaturedHotel.name}</Typography>
                                            <Typography component="p">{FeaturedHotel.rating}</Typography>
                                        </Box>
                                        <Typography
                                            component="p">
                                            <img src={location} alt={location}/>
                                            {FeaturedHotel.country}
                                        </Typography>
                                        <Typography component="p"> ${FeaturedHotel.cell}/night</Typography>


                                    </Stack>

                                </CardContent>

                            </Card>

                        )
                    )
                    }
                </Stack>
            </Stack>


            <Stack spacing={'48px'} component={'section'} width={'100%'} alignItems={"center"} py={'80px'} px={'128px'}>
                <Stack spacing={1}>
                    <Typography variant={'h3'}>Exclusive Offers</Typography>
                    <Typography>Take advantage of our limited-time offers and special packages to enhance your stay and
                        create unforgettable memories.
                    </Typography>
                </Stack>
                <Stack>
                    <Card>
                        <CardContent>ipodhuvsdoivosiubvdoiib</CardContent>
                    </Card>
                </Stack>
            </Stack>

            <Stack spacing={11} py={10} alignItems={'center'} component={'section'} bgcolor={'#F6F9FC'}>
                <Stack spacing={1}>
                    <Typography variant={'h3'} sx={{fontWeight: 500, fontSize: 40,}}>What Our Guests Say</Typography>
                    <Typography>
                        Discover why discerning travelers choose QuickStay for their luxury accommodations around
                        the world.
                    </Typography>
                </Stack>
                <Box>
                    <Card>
                        <CardContent>
                            poisvgoibvoifboindbo
                        </CardContent>
                    </Card>
                </Box>
            </Stack>


        </>
    )
}
export default Home;