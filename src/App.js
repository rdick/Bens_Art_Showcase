import './App.css';
import { Button, Container } from 'reactstrap';
import { useState } from 'react';
import PictureCard from './components/PictureCard';
import { photos } from './photos';
import MainNavbar from './components/MainNavbar';
import Biography from './components/Biography';

function App() {
	// Photos Loaded => Display Photos
	return (
		<div className="App">
			<Container>
				<MainNavbar fixed="top" />
			</Container>
			<Container>
				<Biography />
			</Container>
			<Container>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'space-around' }}>
					{photos.map((photo) => {
						return <PictureCard title={photo.title} url={photo.image} explanation={photo.description} date={photo.date_created} />;
					})}
				</div>
			</Container>
		</div>
	);
}

export default App;
