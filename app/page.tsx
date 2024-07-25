import {StackedLayout} from '@/components/stacked-layout'
import React from "react";
import NavbarHeader from "@/components/utils/navbar-header";
import SidebarMenu from "@/components/utils/sidebar-menu";

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