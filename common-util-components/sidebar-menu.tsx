import {Sidebar, SidebarBody, SidebarItem, SidebarSection} from "@/components/sidebar";
import React from "react";
import {navItems} from "@/common-util-components/navItems";


export default function SidebarMenu() {
    return (
        <Sidebar>
            <SidebarBody>
                <SidebarSection>
                    {navItems.map(({label, url}) => (
                        <SidebarItem key={label} href={url}>
                            {label}
                        </SidebarItem>
                    ))}
                </SidebarSection>
            </SidebarBody>
        </Sidebar>
    )
}