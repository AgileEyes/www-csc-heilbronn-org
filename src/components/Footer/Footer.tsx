import Link from 'next/link'
import classNames from './Footer.module.css'

export default function Footer({ }) {
    return <div className={classNames.container}>
        <div className={classNames.copyright}>Copyright © CSC Heilbronn 2023</div>
        <div className={classNames.additionalLinks}>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutzerklärung</Link>
        </div>
    </div>
}