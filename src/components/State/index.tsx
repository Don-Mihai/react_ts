import { useState } from 'react';

const State = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['пользователь 1', 'пользователь 2']);

    const increase = () => {
        setCounter(prev => prev + 1);
        setCounter(prev => prev + 1);
        setCounter(prev => prev + 1);
    };

    const decrease = () => {
        setCounter(counter - 1);
    };

    const addUser = () => {
        setUsers([...users, 'новый пользователь']);
    };

    console.log(users);

    return (
        <div>
            <button onClick={increase}>+</button>
            {counter}
            <button onClick={decrease}>-</button>
            {users.map(user => (
                <h2>{user}</h2>
            ))}
            <button onClick={addUser}>Добавить пользователя в тетрадь</button>
        </div>
    );
};
export default State;
