import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

export const Group = ({ user, active, time, diagnosis }) => {
	return (
		<GroupItem>
			<Avatar
				source={{
					uri: user.avatar,
				}}
			/>
			<View style={{ flex: 1 }}>
				<FullName>{user.fullName}</FullName>
				<GrayText>{diagnosis}</GrayText>
			</View>
			<GroupDate active={active}>{time}</GroupDate>
		</GroupItem>
	)
}

Group.defaulProps = {
	title: 'Untitled',
	items: [],
}

const GroupDate = styled.Text`
	background-color: ${(props) => (props.active ? '#2a86ff' : '#e9f5ff')};
	color: ${(props) => (props.active ? '#fff' : '#4294ff')};
	border-radius: 18px;
	font-weight: bold;
	font-size: 14px;
	width: 70px;
	height: 32px;
	text-align: center;
	line-height: 28px;
`

const GrayText = styled.Text`
	font-size: 16px;
	color: #8b979f;
`

const FullName = styled.Text`
	font-weight: bold;
	font-size: 16px;
`

const Avatar = styled.Image`
	border-radius: 50px;
	height: 40px;
	width: 40px;
	margin-right: 15px;
`

const GroupItem = styled.TouchableOpacity`
	padding: 20px;
	flex-direction: row;
	align-items: center;
	border-bottom-color: #f3f3f3;
	border-bottom-width: 1px;
`
