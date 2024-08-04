import {createLazyFileRoute} from '@tanstack/react-router'
import {Charts} from "@/components/charts.tsx";

export const Route = createLazyFileRoute('/dashboard')({
    component: About,
})

function About() {
    return <Charts />
}
