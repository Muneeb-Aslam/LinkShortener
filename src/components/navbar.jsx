import MainNav from './MainUl';
import ResNav from './ResUl';
import menu from '/images/menu.png'
import React from 'react';


export default function Navbar() {
    const [toggleNav, settoggleNav] = React.useState(false);
    function togglebtn(){
        return settoggleNav((prev)=>{
            return !prev
        })
    }

    return (
        <nav className="bg-green h-16 w-full flex justify-between items-center px-8 py-4">
            <div className="text-white font-bold text-lg md:text-3xl leading-none text-center">
                Link Shortener
            </div>
            <MainNav />
            <img src={menu} alt="" className="flex md:hidden w-8 rounded-md p-2 bg-gray cursor-pointer" onClick={togglebtn}/>
            {toggleNav && <ResNav closebtn={togglebtn}/>}
        </nav>
    );
}
