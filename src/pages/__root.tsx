import {createRootRoute, Outlet, useMatch, useNavigate} from '@tanstack/react-router'
import {Fragment, useEffect} from "react";
import {SignedIn, SignedOut, SignIn, useAuth} from "@clerk/clerk-react";
import Navbar from "@/components/navbar.tsx";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";

export const Route = createRootRoute({
    component: Page,
    notFoundComponent: () => {
        if(import.meta.env.DEV) {
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
        if(isLoaded && !userId && !match) {
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
                <ProtectedLayout />
            </SignedIn>
        </Fragment>
    )
}

function ProtectedLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>

            <main className="flex-1">
                <Outlet/>
            </main>

            <footer className="bg-background border-t">
                <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
                    <p className="text-sm text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-muted-foreground hover:text-primary">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </footer>
            <TanStackRouterDevtools/>
        </div>
    )
}

