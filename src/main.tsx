import ReactDOM from 'react-dom/client'
import {Root} from "@/root.tsx";

// Render the app
const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(<Root />)
}
