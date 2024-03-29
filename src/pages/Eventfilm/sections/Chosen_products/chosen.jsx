/* eslint-disable jsx-a11y/alt-text */
import Bild from "./../../../../assets/images/eventfilm/Bild.png"


function ChosenProducts() {
	return (
		<section className="w-full flex justify-center flex-col items-center py-[6rem] items-center">
			<div className="w-[85%] flex gap-12 items-center justify-center flex">
				<div className="w-full flex flex-col justify-center w-[50%] lg:w-[100%] text-left">
					<h3 className="text-[54px] font-acumin font-bold">We Capture the Moment.</h3>
					<p className="text-[22px] font-normal font-acumin">Xpand It Media fångar ögonblicken som bara <br/>
					händer en gång. Med eventfilm skapas en <br/>
					highlight över företagse- ventet, bröllopsfilmen, <br/>
					summertouren, eller liknande.</p>
					<button className="bg-[#1E1E1E] rounded-[32px] w-[188px] h-[46px] text-white text-[20px] mt-[1rem]">Testa oss</button>
				</div>
				<div className="w-[40%] flex justify-center">
					<img src={Bild}/>
				</div>
			</div>
		</section>
	);
}

export default ChosenProducts;
