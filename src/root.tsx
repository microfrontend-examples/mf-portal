// Import the generated route tree
import {StrictMode} from "react";
import './globals.css'
import {ClerkProvider} from "@clerk/clerk-react";
import {BrowserRouter, Route, Routes} from "react-router";
import Index from "@/pages/index.tsx";
import About from "@/pages/dashboard.tsx";
import {Page} from "@/pages/__root.tsx";
import Application from "@/pages/applications.tsx";


export const Root = (props: { clerkPubKey: string }) => {
    return (
        <StrictMode>
            <ClerkProvider publishableKey={props.clerkPubKey} afterSignOutUrl="/">
                <BrowserRouter basename="portal">
                    <Routes>
                        <Route element={<Page />}>
                            <Route index element={<Index />} />
                            <Route path="dashboard" element={<About />} />
                            <Route path="/*" element={<Application />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ClerkProvider>
        </StrictMode>
    )
}
