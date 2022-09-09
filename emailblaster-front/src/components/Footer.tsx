import React, { useEffect, useMemo, useState } from 'react';
import ItemsContainer from './ItemsContainer';
import SocialIcons from './SocialIcons';

export const Footer = () => {



    return (<>
 <footer className="bg-gray-900 text-white">
      <div className="flex justify-between items-center sm:px-12 px-4 bg-[#ffffff19] py-4">
        <div>
          
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        {/* <SocialIcons icons={Icons} /> */}
      </div>
    </footer>   
    </>
    )
}