import React from 'react'
import styled from 'styled-components/native'

import { Group } from './components/Group'

export default function App() {
	return (
		<Container>
			<Group
				title="14 september"
				items={[
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
				]}
			/>
		</Container>
	)
}

const Container = styled.View`
	flex: 1;
	margin-top: 50px;
`
