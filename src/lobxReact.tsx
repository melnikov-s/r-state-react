import { createElement } from "react";
import { graph } from "r-state-tree";
import * as lobxReact from "lobx-react";
const graphOptions = { graph };

export function observer<P extends object>(
	baseComponent: React.FunctionComponent<P>
): React.FunctionComponent<P> {
	return lobxReact.observer(baseComponent, graphOptions);
}

export function Observer(props: {
	children?(): React.ReactElement<unknown>;
	render?(): React.ReactElement<unknown>;
}): JSX.Element {
	return <lobxReact.Observer graph={graph} {...props} />;
}
