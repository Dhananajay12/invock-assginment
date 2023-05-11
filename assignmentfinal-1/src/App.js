import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './redux/githubRedux/Action';
import { Box, Card, CardContent, TextField, Typography } from '@material-ui/core';

/*eslint linebreak-style: ["error", "windows"]*/

function App() {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();

	const user = useSelector(state => state?.userProfile);

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
		dispatch(fetchUser(event.target.value));
	};

	return (
		<Card >
			<CardContent>
				<TextField value={inputValue} onChange={handleInputChange} label="Search" />
				{user && (
					<Box style={{ marginTop: "1rem", border: "1px solid grey", width: "20rem" }} >
						<Typography variant="h6">{user.name}</Typography>
						<Typography variant="subtitle1">{user.company}</Typography>
						<Typography variant="subtitle2">{user.email}</Typography>
						<img src={user.avatar_url} style={{ width: "20rem" }} alt="profile" />
						<Typography variant="subtitle2">{user.followers} followers</Typography>
						<Typography variant="subtitle2">{user.following} following</Typography>
					</Box>
				)}
			</CardContent>
		</Card>
	);
}

export default App;
