import React from 'react';
import Image from 'next/image';
import styles from './productSummaryRightBar.module.css';
import { IoIosPricetag } from 'react-icons/io';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';

interface ProductSummaryRightBarProps {
    product: any,
    setProductSummaryIsOpen: (val: boolean) => void,
    setProductDeleteIsOpen: (val: boolean) => void
    setProductEditIsOpen: (val: boolean) => void
}

function ProductSummaryRightBar({ product, setProductSummaryIsOpen, setProductDeleteIsOpen, setProductEditIsOpen }: ProductSummaryRightBarProps): JSX.Element {

    const handleDelete = (): void => {
        setProductDeleteIsOpen(true);
        setProductSummaryIsOpen(false);
    }

    const handleEdit = (): void => {
        setProductEditIsOpen(true);
        setProductSummaryIsOpen(false);
    }

    return (
        <>
            <div className={styles.imgContainer}>
                <Image className={styles.img} width={80} height={80} src={(product?.picture !== "") ? product?.picture : 'https://picsum.photos/id/110/300/300'} alt={''} />
            </div>
            <h3 className={styles.productName}>{product?.name}</h3>
            <p className={styles.stock}>{product?.stock?.toLocaleString('de-DE')} Available</p>
            <section className={styles.sectionInfo}>
                <div className={styles.infoRow}>
                    <div className={styles.titleInfoContainer}>
                        <IoIosPricetag />
                        <p className={styles.infoTitle}>Price</p>
                    </div>
                    <p className={styles.infoText}>${product?.price?.toLocaleString('de-DE')}</p>
                </div>
                <div className={styles.infoRow}>
                    <div className={styles.titleInfoContainer}>
                        <BiSolidCategoryAlt />
                        <p className={styles.infoTitle}>Category</p>
                    </div>
                    <p className={styles.infoText}>{product?.category}</p>
                </div>
            </section>
            <h3 className={styles.productDescriptionTitle}>Description</h3>
            <p className={styles.productDescriptionText}>
                {product?.description}
            </p>
            <div className={styles.buttonsContainer}>
                <button onClick={handleDelete} className={styles.deleteButton}><MdDelete />Delete</button>
                <button onClick={handleEdit} className={styles.editButton}><FaPencilAlt />Edit</button>
            </div>
        </>
    )
}

export default ProductSummaryRightBar;