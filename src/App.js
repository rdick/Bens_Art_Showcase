import './App.css';
import { Button, Container, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { useState } from 'react';
import PictureCard from './components/PictureCard';
import { photos } from './photos';

function App() {
	// Photos Loaded => Display Photos
	return (
		<div className="App">
			<Container>
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<a href="https://ryandick.netlify.app/">
						<Button color={'danger'} size={'lg'} style={{ marginBottom: '2em', width: 300 }}>
							Learn More About Ryan?
						</Button>
					</a>
				</div>
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
