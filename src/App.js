import './App.css';
import { Button, Container } from 'reactstrap';
import { useState } from 'react';
import PictureCard from './components/PictureCard';
import { photos } from './photos';
import MainNavbar from './components/MainNavbar';
import Biography from './components/Biography';
import { MainPage } from './components/MainPage';

function App() {
	// Photos Loaded => Display Photos
	return (
		<div className="App">
			<MainNavbar />
			<MainPage />
			<Container>
				<Biography />
			</Container>
			<br />
			<br />
			<br />

			<Container>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'space-around' }}>
					{photos.map((photo) => {
						return <PictureCard title={photo.title} url={photo.image} explanation={photo.description} date={photo.date_created} />;
					})}
				</div>
			</Container>

			<br />
			<br />
			<br />
		</div>
	);
}

export default App;
