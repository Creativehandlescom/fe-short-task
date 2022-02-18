import * as React from 'react';
import { FlashMessageContext } from './flash-message-provider';

type FlashMessageProps = {};

function usePrevious<T>(value: T): T | undefined {
	const ref = React.useRef<T>();
	React.useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}

const FlashMessage = (props: FlashMessageProps) => {
	const { message, setMessage } = React.useContext(FlashMessageContext);
	const previousMessage = usePrevious(message);

	React.useEffect(() => {
		let destroyTimeoutId: ReturnType<typeof setTimeout> | null = null;
		if (message !== previousMessage) {
			destroyTimeoutId = setTimeout(() => setMessage(null), 4000);
		}

		return () => {
			if (destroyTimeoutId !== null) {
				clearTimeout(destroyTimeoutId);
			}
		};
	}, [message, previousMessage]);

	return message !== null ? (
		<div className={`alert ${message.type === 'error' ? 'alert-danger' : 'alert-success'}`} role="alert">
			{message.text}
		</div>
	) : null;
};

export default FlashMessage;
