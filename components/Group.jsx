import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

export const Group = ({ title, items }) => {
	return (
		<GroupBlock>
			<GroupTitle>{title}</GroupTitle>
			{items.map((item, index) => (
				<GroupItem key={index}>
					<Avatar
						source={{
							uri: item.user.avatar,
						}}
					/>
					<View style={{ flex: 1 }}>
						<FullName>{item.user.fullName}</FullName>
						<GrayText>{item.diagnosis}</GrayText>
					</View>
					<GroupDate active={item.active}>{item.time}</GroupDate>
				</GroupItem>
			))}
		</GroupBlock>
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
	padding: 20px 0;
	flex-direction: row;
	align-items: center;
	border-bottom-color: #f3f3f3;
	border-bottom-width: 1px;
`

const GroupTitle = styled.Text`
	font-weight: bold;
	font-size: 22px;
	color: #000;
`

const GroupBlock = styled.View`
	padding: 0 20px;
	margin-bottom: 25px;
`
