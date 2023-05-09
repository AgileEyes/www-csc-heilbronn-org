import classNames from './Socials.module.css'
import Image from "next/image"

export default function Socials() {
    return <div className={classNames.container}>
        <a href="https://instagram.com/csc_heilbronn" target="_blank" rel="noopener noreferrer">
            <Image src="/images/socials/instagram.svg" width={32} height={32} alt='Instagram' />
        </a>
        <a href="https://twitter.com/CscHeilbronn" target="_blank" rel="noopener noreferrer">
            <Image src="/images/socials/twitter.svg" width={32} height={32} alt='Twitter' />
        </a>
        <a href="https://t.me/+8fJFyuGYnmc5Yjgy" target="_blank" rel="noopener noreferrer">
            <Image src="/images/socials/telegram.svg" width={32} height={32} alt='Telegram' />
        </a>
        <a href="https://www.facebook.com/CSCHeilbronn" target="_blank" rel="noopener noreferrer">
            <Image src="/images/socials/facebook.svg" width={32} height={32} alt='Facebook' />
        </a>
    </div>
}