import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, TextField, Typography } from '@material-ui/core';
import './App.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { Autocomplete } from '@mui/material';
import { setBalance, setParties } from './redux/githubRedux/Action';
import partiesData from './parties.json';
import balanceData from './balance.json';


function App() {

	const [bookStepsStore, setBookStepsStore] = useState(0);
	const [selectedName, setSelectedName] = useState('');

	const dispatch = useDispatch();
	const parties = useSelector(state => state.parties);
	const balance = useSelector(state => state.balance);

	const selectedParty = parties.find(party => party.id === selectedName);
	const currentbalance = balance.find(party => party.id === selectedName);

	const flatProps = {
		options: parties,
		getOptionLabel: (option) => (<div>
			<Typography color='textSecondary' component='p' >{option.name} - ({option.country})</Typography>
			<Typography variant='caption' color='textSecondary'>{option.address}</Typography>
		</div>)
	};

	useEffect(() => {
		dispatch(setParties(partiesData));
		dispatch(setBalance(balanceData))
	}, []);

	const handleNameChange = (event, newValue) => {

		if (newValue) {
			setSelectedName(newValue.id);
			setBookStepsStore(2);
		} else {
			setSelectedName('');
		}
	};

	const onClickChnageCard = () => {
		window.location.reload();
	}

	return (
		<>
			{bookStepsStore === 0 && <Box style={{ marginTop: '1rem', display: 'flex', marginLeft: '1rem', color: '#4964DA', cursor: 'pointer' }} onClick={() => setBookStepsStore(1)} > <AccountCircleIcon mt={2} />  <Typography> + add Party Details</Typography> </Box>}
			{bookStepsStore === 1 && <Box style={{ marginTop: '1rem', display: 'flex', marginLeft: '1rem', color: 'grey', cursor: 'pointer', width: '400px' }} > <AccountCircleIcon mt={2} sx={{ fontSize: '35px', marginTop: '1rem', marginRight: '1rem' }} />
				<Autocomplete
					{...flatProps}
					id='flat-demo'
					sx={{ width: 450 }}
					value={selectedName || null}
					onChange={handleNameChange}
					renderInput={(params) => (
						<TextField {...params} style={{ fontSize: '12px' }} label='Enter Party Name' variant='standard' />
					)}
				/>

			</Box>}

			{selectedParty && (
				<Box style={{ display: 'flex', marginTop: '1rem', marginLeft: '1rem' }}>

					<Card variant='outlined' style={{ display: 'flex' }}>
						<AccountCircleIcon mt={2} sx={{ fontSize: '35px', marginTop: '2rem', color: 'grey', marginLeft: '1rem' }} />
						<CardContent>
							<Typography component='p' >
								{selectedParty.name}
							</Typography>
							<Typography color='textSecondary'>
								{selectedParty.address}
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								Current Balance: {currentbalance.balance}
							</Typography>
						</CardContent>
						<CloseIcon mt={2} onClick={() => onClickChnageCard()} sx={{ fontSize: '35px', marginTop: '2rem', marginRight: '1rem', color: 'grey' }} />
					</Card>

				</Box>
			)
			}

		</>
	);
}

export default App;
