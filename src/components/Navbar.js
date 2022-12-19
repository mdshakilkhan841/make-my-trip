import { HiOutlineBell } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";


const Navbar = () => {
    
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <header className='bg-[#1F2937] p-3 shadow'>
                <div className="max-w-[1240px] mx-auto flex justify-between items-center text-[#e2e4e9]">
                    {
                        toggle?
                        <MdClose className="text-3xl md:hidden block bg-[#111827]" onClick={()=>setToggle(!toggle)}/>
                        :
                        <MdMenu className="text-3xl md:hidden block" onClick={()=>setToggle(!toggle)}/>
                    }
                    <ul className="hidden md:flex gap-10">
                        <li className="p-2 hover:bg-[#111827] cursor-pointer">
                            Dashboard
                        </li>
                        <li className="p-2 hover:bg-[#111827] cursor-pointer">
                            Master Price
                        </li>
                        <li className="p-2 hover:bg-[#111827] cursor-pointer">
                            Custom Price
                        </li>
                        <li className="p-2 hover:bg-[#111827] cursor-pointer">
                            Calendar
                        </li>
                        <li className="p-2 hover:bg-[#111827] cursor-pointer">
                            Reports
                        </li>
                    </ul>
                    <div className='flex gap-8 text-3xl cursor-pointer'>
                        <HiOutlineBell />
                        <CgProfile />

                    </div>

                    {/* Menu for responsive */}
                    <ul className={`duration-300 md:hidden w-full text-white fixed bg-[rgb(31,41,55)] top-[54px]  ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                        <li className="p-2 pl-5 hover:bg-[#111827]">
                            Dashboard
                        </li>
                        <li className="p-2 pl-5 hover:bg-[#111827]">
                            Master Price
                        </li>
                        <li className="p-2 pl-5 hover:bg-[#111827]">
                            Custom Price
                        </li>
                        <li className="p-2 pl-5 hover:bg-[#111827]">
                            Calendar
                        </li>
                        <li className="p-2 pl-5 hover:bg-[#111827]">
                            Reports
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );

};
export default Navbar