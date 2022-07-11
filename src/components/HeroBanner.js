import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/baki.jpg'

const HeroBanner = () => {
	return (
		<Box sx={{
			mt: { xs: '70px' },
			ml: { sm: '50px' }
		}} position="relative" p="20px">

			<Typography color="#FF2625" fontWeight="600" fontSize="80px" >
				Exercise DB
			</Typography>
			<Typography fontWeight="700"
				sx={{ fontSize: { lg: '44px', xs: '40px' } }}
				mb={6}
				mt={5}>
				Do the hard stuff <br /> Even if you don't feel like it.
			</Typography>
			<Typography fontWeight="700"
				sx={{ fontSize: { lg: '44px', xs: '40px' } }}
				mb={6}
				mt={5}>
				Explore 1000+ different <br /> exercises for various <br /> body parts
			</Typography>

			<Button variant="contained" href="#exercises"
			>Explore Exercises</Button>

			<img src={HeroBannerImage} alt="" className='hero-banner-img' style={{marginTop:"-200px"}}/>
		</Box>
	)
}

export default HeroBanner
