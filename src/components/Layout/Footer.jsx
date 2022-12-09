import facebook from './../../assets/images/footer/facebook.png';
import linkdin from './../../assets/images/footer/linkdin.png';
import instagram from './../../assets/images/footer/instagram.png';

import React from "react";


function Footer() {
  // let headerdata;

  return (
    <>
      {/* Desktop header */}

      <footer className="flex flex-col w-full 2lg:hidden" id="footer">
      
        <div className="w-full flex justify-center py-8 bg-white">
          <div className="w-[85%] flex justify-between">
            <div className="flex gap-8">
              <img
                className="h-5 w-auto"
                src={instagram}
                alt="payment method visa"
              />

              <img
                className="h-5 w-auto"
                src={linkdin}
                alt="payment method mastercard"
              />

              <img
                className="h-5 w-auto"
                src={facebook}
                alt="payment method klarna"
              />
            </div>

            <div className='flex flex-row gap-6 '>
              <p className='font-acumin font-medium text-[20px]'>Reklamfilm</p>
              <p className='font-acumin font-medium text-[20px]'>Eventfilm</p>
              <p className='font-acumin font-medium text-[20px]'>Corporate</p>
              <p className='font-acumin font-medium text-[20px]'>Om oss</p>
              <p className='font-acumin font-medium text-[20px]'>Kontakt</p>
            </div>

            <p className="text-black text-[16px] font-roboto font-normal">
              ©2022, All right reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile header */}

      <footer className="hidden 2lg:flex flex-col w-full">
        <div className="bg-white py-8 w-full flex justify-center">
          <div className="w-[85%] flex justify-between">
            
            <div className="flex gap-12">
              <img
                className="h-5 w-auto"
                src={instagram}
                alt="payment method visa"
              />

              <img
                className="h-5 w-auto"
                src={linkdin}
                alt="payment method mastercard"
              />

              <img
                className="h-5 w-auto"
                src={facebook}
                alt="payment method klarna"
              />
            </div>

            <div>
              <p>Reklamfilm</p>
              <p>Eventfilm</p>
              <p>Corporate</p>
              <p>Om oss</p>
              <p>Kontakt</p>
            </div>

            <p className="text-black text-[16px] font-roboto font-normal">
              ©2022, All right reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
