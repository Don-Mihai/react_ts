import styles from './Book.module.scss';

export interface BookI {
    id: number;
    title: string;
    description?: string;
    price: number;
}

interface Props {
    data: BookI;
    handleDelete: (id: number) => void;
}

const Book = ({ data, handleDelete }: Props) => {
    const { title, description, price, id } = data;

    return (
        <div className={styles.container}>
            <div onClick={() => handleDelete(id)} className={styles.close}>
                X
            </div>
            <img src="https://rusbuk.ru/uploads/books/458912/027016ba318dc0291dcfccda7d500027c3b39631Max.jpg" alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default Book;
