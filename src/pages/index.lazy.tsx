/**
 * @see https://v0.dev/t/wsUuRV4Tf5p
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

 import { Archivo } from 'next/font/google'
 import { Libre_Franklin } from 'next/font/google'

 archivo({
 subsets: ['latin'],
 display: 'swap',
 })

 libre_franklin({
 subsets: ['latin'],
 display: 'swap',
 })

 To read more about using these font, please visit the Next.js documentation:
 - App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 - Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
 **/

import {createLazyFileRoute, useNavigate} from '@tanstack/react-router'
import {Card, CardContent,} from "@/components/card.tsx";
import {Fragment} from "react";
import Placeholder from "/placeholder.svg";

export const Route = createLazyFileRoute('/')({
    component: Index,
})

const data = [
    {
        title: "Application 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: Placeholder,
        route: '/application-1'
    },
    {
        title: "Application 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: Placeholder,
        route: '/application-2'
    },
    {
        title: "Application 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: Placeholder,
        route: '/application-3'
    },
    {
        title: "Application 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: Placeholder,
        route: '/application-4'
    },
    {
        title: "Application 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: Placeholder,
        route: '/application-5'
    },
    {
        title: "Application 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: Placeholder,
        route: '/application-6'
    },

]

function Index() {
    const navigate = useNavigate();

    return (
        <Fragment>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-3xl font-semibold tracking-tight sm:grow-0 text-center mt-6">
                Applications
            </h1>
            <section id="features" className="py-10 md:py-16">
                <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3 md:px-6">
                    {data.map(({image, description, title, route}, index) => (
                        <Card key={index} onClick={() => navigate({to: route})} className="cursor-pointer">
                            <img
                                src={image}
                                alt="Feature 1"
                                width={400}
                                height={300}
                                className="rounded-t-lg object-cover w-full h-48"
                                style={{aspectRatio: "400/300", objectFit: "cover"}}
                            />
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold">{title}</h3>
                                <p className="text-muted-foreground">{description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </Fragment>
    )
}
