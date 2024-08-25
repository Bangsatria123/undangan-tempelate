import LandingPage from "./components/landingpage";
import MainContent from "./components/Main";
import Carousels from "./components/utils/Carousels";

function App() {
	return (
		<div className=' max-w-[500px] min-w-[375] text-white '>
			<div className=''>
				<LandingPage />
			</div>
			<div className="py-4 w-full z-50 -mt-5 absolute backdrop-blur-[10px] rounded-sm  "></div>
			<div className='flex justify-center absolute top-full '>
				<Carousels />
			</div>
			<div className=''>
				<MainContent />
			</div>

			{/* BUTTON TO MAIN */}
			<div id="href" className="absolute top-[35rem] left-[85px] mt-5 p-3 flex justify-center items-center">
                    <a href="#main" className=" opacity-70 bg-black rounded-xl flex p-3 text-white ">
                        <h1  className="text-xl">Buka Undangan</h1>
                    </a>
                </div>
		</div> 
	);
}

export default App;
