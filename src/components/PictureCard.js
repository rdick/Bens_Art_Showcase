import { memo, useState } from 'react';
// Components
import { useToasts } from 'react-toast-notifications';
import { CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { motion } from 'framer-motion';
// Icons
import { IoHeartSharp, IoHeartOutline } from 'react-icons/io5';
import { AiFillPushpin, AiOutlinePushpin, AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai';
import { HiOutlineShare, HiShare } from 'react-icons/hi';
//Hooks
import useWindowDimensions from '../hooks/windowDimensions';

const PictureCard = memo(({ title, explanation, url, date }) => {
	const [seeMore, setSeeMore] = useState(false);
	const [pinPhoto, setPinPhoto] = useState(false);
	const [pictureLiked, setPictureLiked] = useState(false);
	const [sharedLink, setSharedLink] = useState(false);
	const { height, width } = useWindowDimensions();
	const { addToast } = useToasts();

	// Expand Photo and Read All Text
	const togglePhotoExpansion = () => {
		setSeeMore(!seeMore);
	};

	// Pin Photo - Set Picture as Background of Text and Pop Up
	const handlePinning = () => {
		let pop_up_pinning_text, pop_up_color;
		if (!pinPhoto) {
			setPinPhoto(true);
			pop_up_pinning_text = `Pinned Photo - ${title}`;
			pop_up_color = `success`;
		} else {
			setPinPhoto(false);
			pop_up_pinning_text = `Unpinned Photo - ${title}`;
			pop_up_color = `error`;
		}

		addToast(pop_up_pinning_text, {
			appearance: pop_up_color,
			autoDismiss: true,
		});
	};

	// Liking a Photo - Heart Color Change and Pop Up
	const handleLiking = () => {
		setPictureLiked(!pictureLiked);

		const pop_up_liked_text = !pictureLiked ? `Liked - ${title}` : `Unliked - ${title}`;
		const pop_up_color = !pictureLiked ? `success` : `error`;

		addToast(pop_up_liked_text, {
			appearance: pop_up_color,
			autoDismiss: true,
		});
	};

	// Share a Photo - Copy Image Url and Pop Up
	const handleSharing = (e) => {
		let reader = new FileReader();
		let file = e.target;

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result,
			});
		};

		reader.readAsDataURL(file);

		setSharedLink(true);
		// Copy Photo URL
		navigator.clipboard.writeText(url);
		addToast(`Copied Link - ${title}`, {
			appearance: 'info',
			autoDismiss: true,
		});

		// Sharing Icon Stays Highlighted for 1 sec after pushing
		setTimeout(() => {
			setSharedLink(false);
		}, 1000);
	};

	// // If Photo URL is a Video Filter It Out
	// const filterToKeepPhotosOnly = (url) => {
	// 	if (url.includes('youtube') || url.includes('vimeo')) {
	// 		return '/no_photo_available.png';
	// 	} else {
	// 		return url;
	// 	}
	// };

	return (
		<motion.div layout data-isOpen={seeMore} className="card card-additions">
			<div style={{ display: width > 700 && 'flex' }}>
				<div style={{ position: 'absolute', right: '0px' }}>
					<div style={{ opacity: '0.5', backgroundColor: 'rgba(255,255,255,.7)' }}>
						{seeMore ? <AiOutlineFullscreenExit onClick={togglePhotoExpansion} size={20} /> : <AiOutlineFullscreen onClick={togglePhotoExpansion} size={20} />}
					</div>
				</div>
				<CardImg top style={seeMore ? { maxHeight: height - 100, width: width < 700 ? '100%' : '50%' } : { objectFit: 'fill', width: '100%', height: '300px' }} src={url} alt={url} />
				{seeMore && (
					<CardBody>
						<CardTitle tag="h5" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: seeMore ? '' : 'nowrap' }}>
							{title}
						</CardTitle>
						<CardSubtitle tag="h6" className="mb-2 text-muted">
							{date}
						</CardSubtitle>
						<CardText className={seeMore ? '' : 'card-text-hidden'}>{explanation}</CardText>
						{/* <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-around', marginRight: 10 }}> */}
						{/* {pinPhoto ? <AiFillPushpin onClick={handlePinning} size={'2.0em'} color={'#28A744'} /> : <AiOutlinePushpin onClick={handlePinning} size={'2.0em'} color={'#28A744'} />} */}
						{/* {pictureLiked ? <IoHeartSharp onClick={handleLiking} size={'2.0em'} color={'red'} /> : <IoHeartOutline onClick={handleLiking} size={'2.0em'} color={'red'} />} */}
						{/* {sharedLink ? <HiShare size={'2.0em'} color={'#007bff'} /> : <HiOutlineShare onClick={handleSharing} size={'2.0em'} color={'#007bff'} />} */}
						{/* </div> */}
					</CardBody>
				)}
			</div>
		</motion.div>
	);
});

export default PictureCard;
