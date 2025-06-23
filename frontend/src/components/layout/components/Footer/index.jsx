import {Box, Stack, Typography,} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import {Link} from "react-router";
import ROUTES from "@config/routes.js";

import styles from "./Footer .module.css"

const Footer = () => {
    return (

        <Box className={styles.footer} component={'footer'}>
            <Box className={styles.footer_wrapper}
                 sx={{
                     flexDirection: {lg: 'row', xs: 'column'},
                     alignItems: {lg: 'start', xs: 'center'},
                     gap: {lg: '200px', xs: '0'}, px: {ls: 4, xs: 0},
                     width: '100%'
                 }}>
                <Stack className={styles.footer_info} spacing={2} sx={{alignItems: {lg: 'start', xs: 'center'}}}>
                    <h1>Footer</h1>
                    <Typography>
                        Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas
                        and
                        private islands.
                    </Typography>
                    <Link to='https://github.com/AleXM301'><GitHubIcon/></Link>

                </Stack>
                <Stack className={styles.footer_page}
                       sx={{flexDirection: {lg: 'row', xs: 'column'}, gap: {lg: '200px', xs: '28px'}, p: {xs: 0},}}>
                    <Stack spacing={2} sx={{alignItems: {lg: 'start', xs: 'center'}}}>
                        <Typography>
                            <strong className={styles.strong_text}>Page</strong>
                        </Typography>
                        <Stack className={styles.footer_nav} spacing={1}>
                            <Link to={ROUTES.HOME}>Home</Link>
                            <Link to={ROUTES.HOTELS}>hotels</Link>
                            <Link to={ROUTES.ABOUT}> about</Link>
                        </Stack>
                    </Stack>

                    <Stack spacing={2} sx={{alignItems: {lg: 'start', xs: 'center'}}}>
                        <Typography>
                            <strong className={styles.strong_text}>Support</strong>
                        </Typography>
                        <Stack className={styles.footer_support} spacing={1}
                                sx={{alignItems: {lg: 'start', xs: 'center'}}}>
                            <Typography to='/'>Help Center</Typography>
                            <Typography to='/hotels'>Safety Information</Typography>
                            <Typography to='/about'> Cancellation</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )

}
export default Footer;