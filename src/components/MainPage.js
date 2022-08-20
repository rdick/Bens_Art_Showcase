import React from 'react';
import { AiFillDownCircle } from 'react-icons/ai';
export const MainPage = () => {
	return (
		<>
			<div className="welcome-container">
				<h1 className="luxor-auctions">
					Benjamin Michael Garner{' '}
					<a href="#middle">
						<AiFillDownCircle size={60} />
					</a>
				</h1>
			</div>
			<div class="fill">
				<img src="IMG_0360.jpg" alt="Main Page" />
			</div>
		</>
	);
};
