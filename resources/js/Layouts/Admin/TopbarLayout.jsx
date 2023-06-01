import { useState, useRef } from "react";
import { Link } from "@inertiajs/react";

export default function Topbar({user}) {
    // Untuk Menu DropDown
    const [dropDownOpen, setDropDownOpen] = useState(true);
    const dropDownTarget = useRef();

    const dropDownAction = () => {
        if (dropDownOpen) {
            dropDownTarget.current.classList.remove('hidden');
        } else {
            dropDownTarget.current.classList.add('hidden');
        }
        setDropDownOpen(!dropDownOpen);
    }
    return (
        <div className="flex justify-between items-center">
            <input type="text" className="top-search" placeholder="Search movie, cast, genre"
                style={{backgroundImage: '/icons/ic_search.svg'}} />
            <div className="flex items-center gap-4">
                <span className="text-black text-sm font-medium">Welcome, {user.name}</span>

                <div className="collapsible-dropdown flex flex-col gap-2 relative">
                    <div
                        className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button cursor-pointer"
                        onClick={dropDownAction}>
                        <img src="/images/avatar.png" className="rounded-full object-cover w-full" alt="" />
                    </div>
                    <div className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden shadow-lg"
                        ref={dropDownTarget}>
                        <Link href={route('admin.dashboard.index')} as="button" className="transition-all hover:bg-sky-100 p-4 text-left">Dashboard</Link>
                        <a href="#!" className="transition-all hover:bg-sky-100 p-4">Profile</a>
                        <Link href={route('logout')} method="post" as="button" className="transition-all hover:bg-sky-100 p-4 text-left">Sign Out</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}