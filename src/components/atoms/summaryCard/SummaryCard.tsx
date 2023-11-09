import React from 'react';
import styles from './summaryCard.module.css';
import { BiMoney } from 'react-icons/bi';
import { AiOutlineStock } from 'react-icons/ai';

function SummaryCard({ title, value, type }: { title: string, value: number, type: string }): JSX.Element {

    const validationType = type === 'profit' ? styles.profit : styles.loss;
    const validationTypeText = type === 'profit' ? styles.profitText : styles.lossText;
    const logoStyle = `${styles.logo} ${validationType}`;
    const textStyle = `${styles.content} ${validationTypeText}`;

    return (
        <div className={styles.container}>
            <span>
                <div className={styles.balanceCard}>
                    <div className={logoStyle}>
                        {title !== 'Balance' ? <BiMoney size={30} /> : <AiOutlineStock size={30} />}
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={textStyle}>${value}</p>
                    </div>
                </div>
            </span>
        </div>
    )
}

export default SummaryCard;