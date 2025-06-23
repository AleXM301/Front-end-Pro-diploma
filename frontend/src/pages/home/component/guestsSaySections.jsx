import {Avatar, Box, Card, CardContent, Rating, Stack, Typography} from "@mui/material";
import guestsSayAvatar from "@assets/guests_say_avatar.jpg";


const GuestsSaySection = () => {
    const guestsSays = [
        {
            img: 241214,
            avatar: guestsSayAvatar,
            name: 'Guests',
            from: 'Barcelona, Spain',
            rating: 5,
            comment: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay  provides."
        },
        {
            img: 241214,
            avatar: guestsSayAvatar,
            name: 'Guests',
            from: 'Barcelona, Spain',
            rating: 5,
            comment: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay  provides."
        },
        {
            img: 241214,
            avatar: guestsSayAvatar,
            name: 'Guests',
            from: 'Barcelona, Spain',
            rating: 5,
            comment: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay  provides."
        },
    ]

    return (
        <Stack spacing={11} py={10} alignItems={'center'} component={'section'} bgcolor={'#F6F9FC'}>
            <Stack spacing={1} sx={{px: {xs: 3}}}>
                <Typography variant={'h3'} sx={{fontWeight: 500, fontSize: 40,}}>What Our Guests Say</Typography>
                <Typography>
                    Discover why discerning travelers choose QuickStay for their luxury accommodations around
                    the world.
                </Typography>
            </Stack>
            <Stack sx={{flexDirection:{lg:'row',xs:'column'},gap:2,  px: {xs: 3}}}>
                {guestsSays.map(guestsSay => (
                    <Card key={guestsSay.id} sx={{borderRadius: '12px', p: 2}}>
                        <CardContent>
                            <Stack direction={'row'} spacing={2} sx={{mb: 2}}>
                                <Avatar src={guestsSay.avatar} alt={guestsSay.name}
                                        sx={{width: '50px', height: '50px'}}/>
                                <Box>
                                    <Typography>{guestsSay.name}</Typography>
                                    <Typography sx={{color: '#374151A1'}}>{guestsSay.from}</Typography>
                                </Box>
                            </Stack>
                            <Rating sx={{mb: 2}} value={guestsSay.rating} readOnly/>
                            <Typography sx={{maxWidth: '360px', color: '#374151A1'}}> {guestsSay.comment}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Stack>

    )

}
export default GuestsSaySection