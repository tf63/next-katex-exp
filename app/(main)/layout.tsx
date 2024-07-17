import { NavSidebar } from '@/components/layout/nav-sidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full rounded-2xl bg-base-200 text-opacity-65 shadow-lg">
            <main className="h-full overflow-scroll rounded-lg  p-8 md:mr-[350px]">{children}</main>
            <div className="fixed right-[1.25rem] top-[1.25rem] z-30 hidden w-[350px] overflow-scroll p-5 pl-0 h-sidebar md:flex">
                <NavSidebar />
            </div>
        </div>
    )
}

export default MainLayout
