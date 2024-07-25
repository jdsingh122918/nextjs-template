import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import React from "react";
import {StackedLayout} from "@/components/stacked-layout";
import NavbarHeader from "@/common-util-components/navbar-header";
import {SidebarHeader} from "@/components/sidebar";

export default function Events() {
    return (
        <StackedLayout
            navbar={<NavbarHeader/>}
            sidebar={<SidebarHeader/>}
        >
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </StackedLayout>
    )
}