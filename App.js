import React from 'react'
import { SectionList, Text } from 'react-native'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

import { Group } from './src/components/Group'
import SectioTitle from './src/components/SectionTitle'

const DATA = [
	{
		title: '14 september',
		data: [
			{
				time: '12:30',
				diagnosis: 'delete tooth',
				active: true,
				user: {
					avatar:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGkDMhKmvBlOWrrU1CB1mp8HOvqOhakr0ag&usqp=CAU',
					fullName: 'Baby Yoda',
				},
			},
			{
				time: '13:00',
				diagnosis: 'delete tooth',
				user: {
					avatar:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGkDMhKmvBlOWrrU1CB1mp8HOvqOhakr0ag&usqp=CAU',
					fullName: 'Baby Yoda',
				},
			},
		],
	},
	{
		title: '16 september',
		data: [
			{
				time: '12:30',
				diagnosis: 'delete tooth',
				active: true,
				user: {
					avatar:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGkDMhKmvBlOWrrU1CB1mp8HOvqOhakr0ag&usqp=CAU',
					fullName: 'Baby Yoda',
				},
			},
			{
				time: '13:00',
				diagnosis: 'delete tooth',
				user: {
					avatar:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGkDMhKmvBlOWrrU1CB1mp8HOvqOhakr0ag&usqp=CAU',
					fullName: 'Baby Yoda',
				},
			},
		],
	},
	{
		title: '14 september',
		data: [
			{
				time: '12:30',
				diagnosis: 'delete tooth',
				active: true,
				user: {
					avatar:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGkDMhKmvBlOWrrU1CB1mp8HOvqOhakr0ag&usqp=CAU',
					fullName: 'Baby Yoda',
				},
			},
			{
				time: '13:00',
				diagnosis: 'delete tooth',
				user: {
					avatar:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGkDMhKmvBlOWrrU1CB1mp8HOvqOhakr0ag&usqp=CAU',
					fullName: 'Baby Yoda',
				},
			},
		],
	},
	{
		title: '16 september',
		data: [
			{
				time: '12:30',
				diagnosis: 'delete tooth',
				active: true,
				user: {
					avatar:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGkDMhKmvBlOWrrU1CB1mp8HOvqOhakr0ag&usqp=CAU',
					fullName: 'Baby Yoda',
				},
			},
			{
				time: '13:00',
				diagnosis: 'delete tooth',
				user: {
					avatar:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGkDMhKmvBlOWrrU1CB1mp8HOvqOhakr0ag&usqp=CAU',
					fullName: 'Baby Yoda',
				},
			},
		],
	},
]

export default function App() {
	return (
		<Container>
			<SectionList
				sections={DATA}
				keyExtractor={(item, index) => index}
				renderItem={({ item }) => <Group {...item} />}
				renderSectionHeader={({ section: { title } }) => (
					<SectioTitle>{title}</SectioTitle>
				)}
			/>
			<PlusButton>
				<Ionicons name="add" size={36} color="#fff" />
			</PlusButton>
		</Container>
	)
}

const PlusButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 64px;
	border-radius: 50px;
	background-color: #2a86ff;
	position: absolute;
	right: 25px;
	bottom: 25px;
	shadow-color: #2a86ff;
	shadow-opacity: 0.7;
	shadow-radius: 3.5px;
	elevation: 5;
`

const Container = styled.View`
	flex: 1;
	margin-top: 50px;
`
