import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import "./hideScrollbar.css";

import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'

import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'


const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext);

	return (
		<Typography onClick={() => scrollPrev()} className="right-arrow">
			<img src={LeftArrowIcon} alt="right-arrow" />
		</Typography>
	);
};

const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);

	return (
		<Typography onClick={() => scrollNext()} className="left-arrow">
			<img src={RightArrowIcon} alt="right-arrow" />
		</Typography>
	);
};

export const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
			{data.map((item) => (
				

				<Box
					key={item.name}
					itemId={item.name}
					title={item.name}
					m="0 40px">
					{isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}></BodyPart>
					: <ExerciseCard exercise={item} />}

				</Box>
			))}
		</ScrollMenu>
	)
}
