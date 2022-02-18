import * as React from 'react';

type FlashMessageProviderProps = {
	readonly children: React.ReactNode;
};

export type FlashMessage = {
	readonly text: string;
	readonly type: 'success' | 'error';
};

type FlashMessageContextType = {
	readonly message: FlashMessage | null;
	readonly setMessage: (message: FlashMessage | null) => void;
};

export const FlashMessageContext = React.createContext<FlashMessageContextType>({
	message: null,
	setMessage: () => {},
});

const FlashMessageProvider = ({ children }: FlashMessageProviderProps) => {
	const [message, setMessage] = React.useState<FlashMessage | null>(null);
	return (
		<FlashMessageContext.Provider
			value={{
				message,
				setMessage,
			}}
		>
			{children}
		</FlashMessageContext.Provider>
	);
};

export default FlashMessageProvider;
