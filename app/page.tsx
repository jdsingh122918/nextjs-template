import {StackedLayout} from '@/components/stacked-layout'
import React from "react";
import NavbarHeader from "@/common-util-components/navbar-header";
import SidebarMenu from "@/common-util-components/sidebar-menu";

export default function Home() {
    return (
        <StackedLayout
            navbar={<NavbarHeader/>}
            sidebar={<SidebarMenu/>}
        >
            {"Hello Home"}
        </StackedLayout>
    )
}