import React, { useEffect, useState } from "react";
import Cd from "../utils/Countdown";
import "animate.css"


const MainContent = () => {
	const name = ["Fulan", "Fulana"];
	const days = "Minggu,  20 Mei 2025"
	const [scroll, setScroll] = useState(false);

	useEffect (()=>{
		const handleScroll = () => {
            if (window.scrollY > 300) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
		window.addEventListener("scroll" , handleScroll)
		return () => {
            window.removeEventListener('scroll', handleScroll);}
	},[]);
	const a = 'text-4xl text-center qwitcher animate__animated animate__fadeInUp  overflow-hidden ';
	const b  = "flex gap-2 *:text-center *:text-5xl justify-center animate__animated animate__fadeIn "
	const c  = "flex gap-2 justify-center  text-center animate__animated animate__fadeIn "
	const d = "mx-2 text-2xl text-center animate__animated animate__fadeIn animate__delay-1s"


	return (
		<div id='main' className='h-screen opacity-100 bg-slate-900 flex flex-col justify-between pb-20'>
			<div className='flex flex-col w-full justify-center pt-20 gap-2'>
				<div id="1" className=' flex flex-col gap-2 '>
					<h1 className={scroll ? a : "hidden" }>THE WEDDING!</h1>
				</div>
				<div id="2" className={scroll ? b : "hidden"}>
					<h1 className="">
						{name[0]}
					</h1>
					<h1 className="">
						&
					</h1>
					<h1 className="">
						{name[1]}
					</h1>
				</div>
				<div className={scroll ? c : "hidden"}>
					<h1 className="text-xl">
						{days}
					</h1>
				</div>
			</div>
			<div id="cd" className={scroll ? d : "hidden"}>
				<Cd /> 
			</div>
		</div>
	);
};

export default MainContent;
