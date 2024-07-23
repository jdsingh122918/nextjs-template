import {StackedLayout} from "@/components/stacked-layout";
import NavbarHeader from "@/common-util-components/navbar-header";
import {SidebarHeader} from "@/components/sidebar";
import React from "react";

export default function Events() {
    return (
        <StackedLayout
            navbar={<NavbarHeader/>}
            sidebar={<SidebarHeader/>}
        >
            {"Hello Login"}
        </StackedLayout>
    )
}