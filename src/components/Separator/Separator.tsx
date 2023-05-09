import classNames from './Separator.module.css'

export interface SeparatorProps {
    type: 'horizontal' | 'vertical',
    size: string
}

export default function Separator({ type, size }: SeparatorProps) {
    const property = type === 'horizontal' ? 'width' : 'height'
    const style = {
        [property]: size
    }
    return <div className={classNames.container} style={style} />
}