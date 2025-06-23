import {Box, List, ListItem, Stack, Typography} from "@mui/material";

import reactSvg from '@assets/react.svg'
import reduxSvg from '@assets/redux-logo.svg'
import reactRouter from '@assets/react-router.svg'
import materialUI from '@assets/material-ui.svg'

import styles from './About.module.css'

const About = () => {
    return (
        <Box className={styles.about_section}>
            <Stack spacing={3}>
                <Typography variant="h3" fontWeight="bold" sx={{color: 'black'}}>
                    About This Project
                </Typography>

                <Typography variant="body1">
                    This is a training project developed to practice building modern React applications using Redux
                    Toolkit, React Router, and Redux Thunk.
                </Typography>

                <Typography variant="body1">
                    The goal of this app is to help users find hotels based on destination and rating, using a simple
                    and intuitive interface.
                </Typography>

                <Typography variant="body1">
                    Technologies used in this project include:
                </Typography>

                <List>
                    <ListItem><img className={styles.about_image} src={reactSvg} alt={'reactSvg'}/>
                        <strong>React</strong> – for building the user interface</ListItem>
                    <ListItem><img className={styles.about_image} src={reduxSvg} alt={'reduxSvg'}/>
                        <strong>Redux Toolkit</strong> – for global state management</ListItem>
                    <ListItem><img className={styles.about_image} src={reactRouter} alt={'reactRouter'}/>
                        <strong>React Router</strong> – for client-side routing</ListItem>
                    <ListItem><img className={styles.about_image} src={reduxSvg} alt={'reactRouter'}/><
                        strong>Redux Thunk</strong> – for handling asynchronous actions</ListItem>
                    <ListItem><img className={styles.about_image} src={materialUI} alt={'reactRouter'}/>
                        <strong>Material UI</strong> – for styling and layout</ListItem>
                </List>

                <Typography variant="body1">
                    This project was built for educational purposes as part of a front-end learning path.
                </Typography>

                <Typography variant="body1">
                    Thank you for visiting!
                </Typography>
            </Stack>
        </Box>
    );
};

export default About;
