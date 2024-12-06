import { useState } from 'react';
import Book from '../../components/Book';
import { books as initialBooks } from '../../utils';
import styles from './Home.module.scss';
import State from '../../components/State';

const Home = () => {
    const [books, setBooks] = useState(initialBooks);

    const handleDelete = (id: number) => {
        const newBooks = books.filter(book => book.id !== id);
        setBooks(newBooks);
    };

    const handleAddBook = () => {
        const newBook = {
            id: books.length + 1,
            title: 'Новая книга',
            description: 'Описание',
            price: 100,
        };

        setBooks([...books, newBook]);
    };

    return (
        <div>
            <h2>Список прочитанных книг:</h2>
            <div className={styles.books}>
                {books.map(book => {
                    return <Book key={book.id} data={book} handleDelete={handleDelete} />;
                })}
                <button onClick={handleAddBook}>Добавить книгу в мозг</button>
            </div>
            <State />
        </div>
    );
};

export default Home;
