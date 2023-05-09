import Card, { CardProps } from "../Card/Card"
import VerticalSeparator from "../Separator/VerticalSeparator"
import classNames from './Cards.module.css'

export interface CardsProps {
    cards: CardProps[]
}
export default function Cards({ cards }: CardsProps) {
    return (
        <div className={classNames.container}>
            {cards.map((cardProp, index) => (
                <>
                    <Card key={index} {...cardProp} align={index % 2 === 0 ? "left" : "right"} />
                    {index !== cards.length - 1 && <VerticalSeparator size='32px' />}
                </>
            ))}
        </div>
    )
}