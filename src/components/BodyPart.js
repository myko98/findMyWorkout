import React from 'react'
import { Stack, Typography } from '@mui/material'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
	return (
		<Stack
			type="button"
			alignItems="center"
			justifyContent="center"
			className="bodyPart-card"
			sx={{
				borderTop: bodyPart === item ? '4px solid #ff2625' : '',
				backgrounColor: '#fff',
				borderBottomLeftRadius: '20px',
				width: '270px',
				height: '280px',
				cursor: 'pointer',
				gap: '47px'

			}}
			onClick={() => {
				setBodyPart(item)
				window.scrollTo({top: 1080, left: 100, behavior: 'smooth'})
			}}
		>
			<img src={item.img} alt="dumbell" style={{ width: '80px', height: '80px' }} />
			<Typography fontSize='24px' fontWeight="bold" color="#3A1212" textTransform="capitalize">{item.name}</Typography>
		</Stack >
	)
}

export default BodyPart
