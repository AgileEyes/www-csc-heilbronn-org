'use client'

import Link from 'next/link'
import Image from "next/image"
import classNames from "./Navigation.module.css"
import { usePathname } from 'next/navigation'

interface MenuItemProps {
    href: string
    title: string
}
interface MenuItemPropsInternal extends MenuItemProps {
    isActive: boolean
}
function MenuItem({ href, title, isActive }: MenuItemPropsInternal) {
    const additionalProps = href.startsWith("http") ? {
        target: "_blank",
        rel: "noopener noreferrer"
    } : undefined

    return <Link
        href={href}
        className={isActive ? classNames.itemActive : undefined}
        {...additionalProps}>
        {title}
    </Link>
}

interface MenuProps {
    items: MenuItemProps[]
}
function Menu({ items }: MenuProps) {
    const pathName = usePathname()

    return <ul className={classNames.items}>
        {items.map(item => <li key={item.title}>
            <MenuItem
                href={item.href}
                title={item.title}
                isActive={item.href === pathName} />
        </li>)}
    </ul>
}

export default function Navigation() {
    return <nav className={classNames.container}>


        <Image src="/images/logo/logo_128.png" alt="CSC Heilbronn Logo" width={92} height={92} />

        <span className={classNames.title}>CSC Heilbronn</span>

        <input id="menu" type="checkbox" className={classNames.burgerInput} />
        <label htmlFor="menu">
            <Image className={classNames.burger} src="/images/navigation/burger.svg" width={32} height={32} alt="Burger Menu" />
        </label>
        <Menu items={[
            { href: "/", title: "Verein" },
            { href: "http://link.csc-heilbronn.org/form/mitgliedsanfrage", title: "Mitglied werden" },
            { href: "/satzung", title: "Satzung" },
            { href: "/partners", title: "Partner" },
            { href: "https://linktr.ee/csc_heilbronn", title: "Kontakt" },
        ]} />
    </nav>
}