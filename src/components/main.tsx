import React from 'react';
import {cn} from "@/lib/utils.ts";

function Main({className, ...props}: React.ComponentPropsWithoutRef<"main">){
    return (
        <main className={cn("flex-1 pt-16", className)} {...props} />
    );
};

export default Main;