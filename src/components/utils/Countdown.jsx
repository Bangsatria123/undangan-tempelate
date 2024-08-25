import React from "react";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		// Render elemen ini jika countdown selesai
		return <div className='text-xl text-center'>Atas Kehadiran Dan Doa Restunyta Kami Ucapkan Terimakasih</div>;
	} else {
		// Render countdown
		return (
			<div className='flex justify-center items-center bg-black  bg-opacity-100 z-50 mx-auto text-3xl gap-3 h-20 '>
				<span>{days} :</span>
				<span>{hours} :</span>
				<span>{minutes} :</span>
				<span>{seconds}</span>
			</div>
		);
	}
};

const Cd = () => {
	const date = "2025-5-20 09:00:00";
	return (
		<div>
			<Countdown date={new Date(date)} renderer={renderer} />
		</div>
	);
};
export default Cd;
