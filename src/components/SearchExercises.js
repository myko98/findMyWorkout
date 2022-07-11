import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'

import { HorizontalScrollbar } from '../components/HorizontalScrollbar'

import Icon from '../assets/icons/gym.png'
import Back from '../assets/images/back.jpg'
import Cardio from '../assets/images/cardio.jpg'
import Chest from '../assets/images/chest.jpg'
import LowerArms from '../assets/images/lower_arms.png'
import LowerLegs from '../assets/images/lower_legs.png'
import Neck from '../assets/images/neck.jpg'
import Shoulders from '../assets/images/shoulders.png'
import UpperArms from '../assets/images/upper arm.jpg'
import UpperLegs from '../assets/images/upper legs.jpg'
import Waist from '../assets/images/waist.jpg'

const bodyPartsImages = [Icon, Back, Cardio, Chest, LowerArms, LowerLegs, Neck, Shoulders, UpperArms, UpperLegs, Waist]
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

	const [search, setSearch] = useState("")
	const [bodyParts, setbodyParts] = useState([])
	const [bodyPartsObjects, setBodyPartsObjects] = useState([])

	useEffect(() => {
		const fetchExercisesData = async () => {
			let bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

			bodyPartsData = ['all',...bodyPartsData]

			let counter = 0

			// objectOfParts is an array of objects that contains the name of the body part and the image of that part
			// image is needed for horizontal scroll bar in SearchExercises
			const objectOfParts = bodyPartsData.map((item) => {

				let muscleObject = { name: item, img: bodyPartsImages[counter] }
				counter = counter + 1
				return (
					muscleObject
				)
			})

			setbodyParts(['all', ...bodyPartsData])
			setBodyPartsObjects(objectOfParts)
		}

		fetchExercisesData();

	}, [])
	const handleSearch = async () => {
		if (search) {
			const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

			const searchedExercises = exercisesData.filter(
				(exercise) => exercise.name.toLowerCase().includes(search)
					|| exercise.target.toLowerCase().includes(search)
					|| exercise.equipment.toLowerCase().includes(search)
					|| exercise.bodyPart.toLowerCase().includes(search)
			)

			setSearch("")
			setExercises(searchedExercises)
		}
	}

	return (
		<Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
			<Typography fontWeight="700" sx={{
				fontSize: { lg: '44px', xs: '30px' }
			}}
				mb="50px" textAlign="center">
				Awesome Exercises You <br /> you should know
			</Typography>
			<Box position="relative" mb="72px">
				<TextField
					sx={{
						input: { fontweight: '700', border: 'none', borderRadius: '4px' },
						width: { lg: '800px', xs: '350px' }, backgroundColor: "#fff",
						
						outline: 'none',
					}}
					height="76px"
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
					placeholder="Search Exercises"
					type="text" />
				<Button className="search-btn"
					sx={{
						bgcolor: "#FF2625",
						color: "#fff",
						textTransform: 'none',
						width: { lg: '175px', xs: '80px' },
						fontSize: { lg: '20px', xs: '14px' },
						height: '56px',
						position: 'absolute',
						right: '0'
					}}
					onClick={handleSearch}>
					Search
				</Button>
			</Box>
			<Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
				<HorizontalScrollbar data={bodyPartsObjects}
					bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts ></HorizontalScrollbar>
			</Box>
		</Stack>
	)
}

export default SearchExercises
