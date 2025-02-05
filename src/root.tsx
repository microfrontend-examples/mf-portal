// Import the generated route tree
import {StrictMode} from "react";
import './globals.css'
import {ClerkProvider} from "@clerk/clerk-react";
import {createRouter, RouterProvider} from "@tanstack/react-router";
import {routeTree} from "@/routeTree.gen";

const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

export const Root = (props: { clerkPubKey: string }) => {
    return (
        <StrictMode>
            <ClerkProvider publishableKey={props.clerkPubKey} afterSignOutUrl="/">
                <RouterProvider router={router} basepath='/portal' />
            </ClerkProvider>
        </StrictMode>
    )
}
