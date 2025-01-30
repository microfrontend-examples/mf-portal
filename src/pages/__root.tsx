import {Fragment} from "react";
import Navbar from "@/components/navbar.tsx";
import {SignedIn, SignedOut, SignIn} from "@clerk/clerk-react";
import {Outlet} from "react-router";

export function Page() {
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

export default function ProtectedLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>

            <main className="flex-1" id="single-spa:main">
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
        </div>
    )
}

