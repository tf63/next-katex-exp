import { NavSidebar } from '@/components/layout/nav-sidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <main className="h-full p-8 md:pr-[400px]">{children}</main>
            <div className="fixed right-0 top-0 z-30 hidden h-full w-[400px] p-10 md:flex">
                <NavSidebar />
            </div>
        </div>
    )
}

export default MainLayout
