import React from 'react';
import useWindowDimensions from '../hooks/windowDimensions';

const Biography = () => {
	const { height, width } = useWindowDimensions();

	return (
		<div style={{ color: '#2D2D2D', fontFamily: 'Raleway, sans-serif' }}>
			<>
				<br />
				<br />
				<br />
				<br />
				<br id="middle" />
				<br />
				<br />
				<br />
				<br />
			</>
			<h1 style={{ fontWeight: 'bold' }}>Visual Artist & Abstract Painter {width > 500 && <br />} In Vancouver BC</h1>
			<p style={{ width: width < 700 ? '100%' : '60%' }}>
				Benjamin Garner is a Vancouver-based visual artist and graduate of Emily Carr University of Art and Design. His practice, though not limited to, consists primarily of painting and
				silkscreen print. Influenced by meta-physical ideologies and esoteric belief systems, his work explores the nuances of Eastern philosophy, religion and the occult as they try convey
				the unknown mysteries of the universe in relation to the human condition and its spirit.
			</p>
		</div>
	);
};

export default Biography;
