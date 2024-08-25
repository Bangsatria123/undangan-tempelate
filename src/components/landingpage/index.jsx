import React from "react";
import bg from "../images/wedding/1.jpg";

const LandingPage = () => {
	
	const name = ["Fulan", "Fulana"];
	const reciever = ["Budi"]
	const date = "25 mei 2025"
	var typography = "Tanpa Mengurangi Rasa Hormat. Kami Mengudang Bapak/Ibu/Saudara/i Untuk Hadir di Acara Pernikahan Kami"
    
	return (
		<div  className='h-screen bg-slate-900 text-white font-bold justify-center items-center relative'>
			<div id='' className='z-50 flex justify-center pt-20 opacity-100'>
				<div className='flex flex-col justify-center items-center text-center'>
					<h1 className='text-lg justify-center items-center uppercase'>
						the wedding of
					</h1>
					<h1 className='qwitcher text-6xl    '>
						{name[0]} <span className='text-5xl '>&</span> {name[1]}
					</h1>
                    <h1 className="text-xl font-semibold">{date}</h1>
				</div>
			</div>
            <div className="flex flex-col mt-44 z-50 opacity-100 ">
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="text-7xl justify-center items-center text-center flex qwitcher">{reciever[0]} sekeluarga</h1>
                    <h1 className="text-lg font-normal text-center mx-3">{typography}</h1>
                </div>
                 
            </div>
			<img
				src={bg}
				alt=''
				className='absolute z-0 opacity-40 top-0 right-0 h-screen bgImg'
			/>
		</div>
	);
};

export default LandingPage;
