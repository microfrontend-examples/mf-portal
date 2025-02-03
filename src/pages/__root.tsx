import {createRootRoute, Outlet, useMatch, useNavigate} from '@tanstack/react-router'
import {Fragment, useEffect} from "react";
import Navbar from "@/components/navbar.tsx";
import {SignedIn, SignedOut, SignIn, useAuth} from "@clerk/clerk-react";

export const Route = createRootRoute({
    component: Page,
    notFoundComponent: () => {
        if (import.meta.env.DEV && import.meta.env.MODE !== 'development-spa') {
            return <div className="text-center text-2xl font-semibold text-red-500">
                This route is for other applications micro frontends to mount their routes.
            </div>
        }

        return null
    }
})

function Page() {
    const {userId, isLoaded} = useAuth()
    const navigate = useNavigate();
    const match = useMatch({from: "/", shouldThrow: false})

    useEffect(() => {
        if (isLoaded && !userId && !match) {
            console.log('Masoooook')
            void navigate({to: "/"})
        }
    }, [match, isLoaded, userId, navigate]);

    return (
        <Fragment>
            <SignedOut>
                <div className="w-full h-screen flex items-center justify-center px-4">
                    <SignIn/>
                </div>
            </SignedOut>
            <SignedIn>
                <ProtectedLayout/>
            </SignedIn>
        </Fragment>
    )
}

function ProtectedLayout() {
    return (
        <div className="flex flex-col min-h-screen portal">
            <Navbar/>

            <Outlet/>
        </div>
    )
}

