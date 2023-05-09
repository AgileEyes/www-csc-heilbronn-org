import Separator from "./Separator";
import { SpecificSeparatorProps } from "./types";

export default function VerticalSeparator(props: SpecificSeparatorProps) {
    return <Separator type="vertical" {...props} />
}