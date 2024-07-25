import {StackedLayout} from "@/components/stacked-layout";
import NavbarHeader from "@/components/utils/navbar-header";
import {SidebarHeader} from "@/components/sidebar";
import React from "react";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/button";

export default function Events() {
    return (
        <StackedLayout
            navbar={<NavbarHeader/>}
            sidebar={<SidebarHeader/>}
        >
            <SignedOut>
                <Button><SignInButton/></Button>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </StackedLayout>
    )
}