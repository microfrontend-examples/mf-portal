import ReactDOM from 'react-dom/client'
import {Root} from "@/root.tsx";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

// Render the app
const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(<Root clerkPubKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}/>)
}
