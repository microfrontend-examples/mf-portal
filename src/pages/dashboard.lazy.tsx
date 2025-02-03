import {createLazyFileRoute} from '@tanstack/react-router'
import {Charts} from "@/components/charts.tsx";
import Main from "@/components/main.tsx";

export const Route = createLazyFileRoute('/dashboard')({
    component: About,
})

function About() {
    return (
        <Main>
            <Charts />
        </Main>
    )
}
