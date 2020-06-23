import { createElement } from "react";
import { graph } from "r-state-tree";
import * as lobxReact from "lobx-react";
const graphOptions = { graph };

export function observer(
	fn: Parameters<typeof lobxReact.observer>[0]
): ReturnType<typeof lobxReact.observer> {
	return lobxReact.observer(fn, graphOptions);
}

export function Observer(
	props: Parameters<typeof lobxReact.Observer>[0]
): ReturnType<typeof lobxReact.Observer> {
	return <lobxReact.Observer graph={graph} {...props} />;
}
