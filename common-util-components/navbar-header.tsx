import {Navbar, NavbarItem, NavbarSection} from "@/components/navbar";
import React from "react";
import {navItems} from "@/common-util-components/navItems";

export default function NavbarHeader() {
    return <Navbar>
        <NavbarSection className="max-lg:hidden">
            {navItems.map(({label, url}) => (
                <NavbarItem key={label} href={url}>
                    {label}
                </NavbarItem>
            ))}
        </NavbarSection>
    </Navbar>
}