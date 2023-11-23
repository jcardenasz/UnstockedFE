import React, { useRef, type ReactNode } from 'react';
import styles from './rightBar.module.css';
import { IoIosCloseCircle } from "react-icons/io";

interface rightBarProps {
    children?: ReactNode,
    isOpen?: boolean,
    setIsOpen: (val: boolean) => void,
    title?: string,
}


function RightBar({ children, isOpen = false, setIsOpen, title = 'Title' }: rightBarProps): JSX.Element {

    const rightBarRef = useRef(null);



    const handleClose = (): void => {
        setIsOpen(false);
    }

    return (
        <>
            {isOpen ? (
                <>
                    <div className={styles.container} onClick={handleClose}>

                    </div>
                    <div className={styles.rightBar} ref={rightBarRef}>
                        <header className={styles.rightBarHeader}>
                            <h1 className={styles.title}>{title}</h1>
                            <button onClick={handleClose}>
                                <IoIosCloseCircle size={20} />
                            </button>
                        </header>
                        {children}
                    </div>
                </>

            ) : (
                <></>
            )}
        </>
    )
}

export default RightBar;