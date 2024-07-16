import { NavSidebar } from '@/components/layout/nav-sidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full rounded-2xl bg-base-200 text-slate-800 text-opacity-65 shadow-md">
            <main className="h-full overflow-scroll rounded-lg  p-8 md:mr-[400px]">{children}</main>
            <div className="h-sidebar fixed right-[5px] top-[20px] z-30 hidden w-[400px] overflow-scroll p-5 md:flex">
                <NavSidebar />
            </div>
        </div>
    )
}

export default MainLayout
// /* Rectangle 13 */

// box-sizing: border-box;

// position: absolute;
// width: 194px;
// height: 641px;
// left: 59px;
// top: 64px;

// background: linear-gradient(315deg, #DE94FF 0%, #A1B1FF 100%);
// box-shadow: 4px 10px 25px rgba(219, 150, 255, 0.4);
// border-radius: 30px 0px 0px 30px;
