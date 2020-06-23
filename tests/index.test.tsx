import { createElement } from "react";
import { act, render, cleanup } from "@testing-library/react";
import { Store, createStore, mount, observable, action } from "r-state-tree";
import { observer, StoreProvider, useStore } from "../src";

afterEach(cleanup);

test("Can provide reactive store via context", () => {
	class S extends Store {
		@observable counter = 0;
		@action inc() {
			this.counter++;
		}
	}
	let renderCount = 0;

	const s = mount(createStore(S));

	function Parent() {
		return (
			<StoreProvider store={s}>
				<Child />
			</StoreProvider>
		);
	}

	const Child = observer(function Child() {
		const us = useStore() as S;
		expect(us).toBe(s);
		renderCount++;

		return <div>{us.counter}</div>;
	});

	render(<Parent />);
	expect(renderCount).toBe(1);

	act(() => s.inc());
	expect(renderCount).toBe(2);
});
