import { Store } from "r-state-tree";
import { createElement, createContext, ReactNode, useContext } from "react";

const StoreContext = (createContext(undefined) as unknown) as React.Context<
	Store
>;

export function StoreProvider({
	store,
	children,
}: {
	store: Store;
	children: ReactNode;
}): JSX.Element {
	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
}

export function useStore<T extends Store>(): T {
	return useContext(StoreContext) as T;
}
