import Separator from "./Separator";
import { SpecificSeparatorProps } from "./types";

export default function HorizontalSeparator(props: SpecificSeparatorProps) {
    return <Separator type="horizontal" {...props}/>;
}