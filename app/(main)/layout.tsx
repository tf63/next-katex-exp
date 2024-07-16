import { NavSidebar } from '@/components/layout/nav-sidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full rounded-2xl bg-base-200 text-opacity-65 shadow-lg">
            <main className="h-full overflow-scroll rounded-lg  p-8 md:mr-[350px]">{children}</main>
            <div className="h-sidebar fixed right-[5px] top-[20px] z-30 hidden w-[350px] overflow-scroll p-5 pl-0 md:flex">
                <NavSidebar />
            </div>
        </div>
    )
}

export default MainLayout
