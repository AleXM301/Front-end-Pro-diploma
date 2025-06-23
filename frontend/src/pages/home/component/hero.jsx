import HeroBg from "@assets/hero_background.png";
import {Box, Container, Typography} from "@mui/material";

const HeroSection = () => (
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
                fontSize: {lg: '60px', xs: '48px'},
                lineHeight: '57px',
                maxWidth: '598px',
                mb: '20px',
            }}>
                Discover Your Perfect
                Getaway Destination
            </Typography>
            <Typography component="p" sx={{fontSize: '20px',}}>
                Unparalleled luxury and comfort await at the world's most exclusive
                hotels and resorts. Start your journey today</Typography>
        </Container>
    </Box>
)
export default HeroSection;