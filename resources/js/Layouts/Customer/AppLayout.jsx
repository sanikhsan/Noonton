import SidebarLayout from "./SidebarLayout";
import TopbarLayout from "./TopbarLayout";

export default function AppLayout({auth, children}) {
    return (
        <>
        {/* Desktop Only */}
        <div className="mx-auto max-w-screen hidden lg:block">

            {/* Sidebar Section */}
            <SidebarLayout auth={auth} />
            {/* Sidebar Section */}

            {/* Content Section */}
            <div className="ml-[300px] px-[50px]">
                <div className="py-10 flex flex-col gap-[50px]">

                    {/* Top Bar Section */}
                    <TopbarLayout user={auth.user} />
                    {/* Top Bar Section */}

                    {/* Main Section */}
                    <main>{children}</main>
                    {/* Main Section */}

                </div>
            </div>
            {/* Content Section */}

        </div>

        {/* Desktop Only Info */}
        <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
            <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                Sorry, this page only supported on 1024px screen or above
            </div>
        </div>
        {/* Desktop Only Info */}
        </>
    );
}