import classNames from './Card.module.css'
import { CSSProperties } from 'react'
import VerticalSeparator from '../Separator/VerticalSeparator'
import Image from 'next/image'

export interface CardProps {
    align?: 'left' | 'right'
    title: string
    descriptions: string[]
    imageSource: string
}

// TODO: Move to CSS as Class
const leftAlignedStyle = {
    flexDirection: 'row',
    backgroundPositionX: "right",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
} satisfies CSSProperties

// TODO: Move to CSS as Class
const rightAlignedStyle = {
    flexDirection: 'row-reverse',
    backgroundPositionX: "left",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
} satisfies CSSProperties

export default function Card({ align, title, descriptions, imageSource }: CardProps) {

    let style: CSSProperties = align === 'left' ? leftAlignedStyle : rightAlignedStyle
    // style = { ...style, backgroundImage: `url('${imageSource}')` }

    let textStyle: CSSProperties = align === 'left' ? {
        padding: "16px 32px",
        // paddingRight: "32px",
    } : {
        padding: "16px 32px",
        // paddingLeft: "32px"
    }

    return <div className={classNames.container} style={style}>
        <div className={classNames.text} style={textStyle}>
            <h2 className={classNames.title}>{title}</h2>

            <div className={classNames.description}>
                {descriptions.map((description, index) => (<><p>{description}</p>{index !== descriptions.length - 1 && <VerticalSeparator size="16px" />}</>))}
            </div>
        </div>

    <div className={classNames.imageContainer} style={{
        backgroundImage: `url('${imageSource}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }}>

    </div>

        {/* <img src={imageSource} alt={title} style={{ width: "100%", height: "auto" }} /> */}


        {/* <div style={{ maxWidth: "50%", position: "relative" }}>

            <Image
                src={imageSource}
                alt={title}

                // fill
                // sizes="(max-width: 768px) 300px, (max-width: 1000px) 360px, 200px"
            />
        </div> */}
    </div>
}