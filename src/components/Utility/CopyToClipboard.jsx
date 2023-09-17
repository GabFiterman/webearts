import { useRef, useEffect, useState } from 'react';
import ClipboardJS from 'clipboard';
import './copyToClipboard.scss';

function CopyToClipboardButton(props) {
    const { textToCopy, textToShow } = props;
    const [typeText, setTypeText] = useState(null);
    const [showConfirmMessage, setShowConfirmMessage] = useState(false);

    const buttonRef = useRef(null);

    useEffect(() => {
        // If textToShow is null
        textToShow ? setTypeText(textToShow) : setTypeText(textToCopy);

        const clipboard = new ClipboardJS(buttonRef.current, {
            text: () => textToCopy,
        });

        clipboard.on('success', (event) => {
            // NOTE: Event Emit
            // props.onCopy('sucess', event);

            setShowConfirmMessage(true);
            setTimeout(() => {
                setShowConfirmMessage(false);
            }, 1200);

            event.clearSelection();
        });

        clipboard.on('error', (event) => {
            // NOTE: Event Emit
            // props.onCopy('error', event);
            throw new Error('ERRO AO COPIAR O TEXTO: ' + event);
        });
        return () => {
            clipboard.destroy();
        };
    }, [textToCopy, textToShow]);

    return (
        <div className="CopyTo">
            <button
                className="CopyTo__button"
                ref={buttonRef}
                data-clipboard-text={textToCopy}
            >
                {typeText}
            </button>

            {showConfirmMessage ? (
                <p className="CopyTo__successMessage">Copiado com sucesso!</p>
            ) : undefined}
        </div>
    );
}

export default CopyToClipboardButton;
