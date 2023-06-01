import { AdminOtherMenu, AdminMenu } from "@/Components/Admin/AdminMenuList";
import { Link } from "@inertiajs/react";
import AdminMenuItem from "@/Components/Admin/AdminMenuItem";

export default function Sidebar({auth}) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <Link href='/slicing/dashboard'>
                    <img src="/images/moonton.svg" alt=""/>
                </Link>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {AdminMenu.map((menu, index) => (
                            <AdminMenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={menu.link &&  route().current(menu.link)}

                            />
                        ))}
                    </div>

                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {AdminOtherMenu.map((menu, index) => (
                            <AdminMenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={menu.link && route().current(menu.link)}
                                method={menu.method}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}