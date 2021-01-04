import React from 'react'
import { SectionList, Text } from 'react-native'
import styled from 'styled-components/native'

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
		</Container>
	)
}

const Container = styled.View`
	flex: 1;
	margin-top: 50px;
`
