import { useState } from 'react';

enum GROUP_NAMES {
    CRIMINAL = 'Вы уже претсупная групировка!',
    USUAL = 'Ладно, ладно, вы не преступаня гурпировка',
}

enum TABS {
    HOME,
    CONTACTS,
    ABOUT,
}

const State = () => {
    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState<string[]>(['пользователь 1', 'пользователь 2']);
    const [isCriminal, setIsCriminal] = useState<boolean>(true);
    const [selectedTab, setSelectedTab] = useState(TABS.HOME);
    const isManyUsers: boolean = users.length > 4;

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

    const changeCriminal = () => {
        setIsCriminal(!isCriminal);
    };

    return (
        <div>
            <button onClick={increase}>+</button>
            {counter}
            <button onClick={decrease}>-</button>
            {users.map(user => (
                <h2>{user}</h2>
            ))}
            <button onClick={addUser}>Добавить пользователя в тетрадь</button>
            {isManyUsers ? <h3>{isCriminal ? GROUP_NAMES.CRIMINAL : GROUP_NAMES.USUAL}</h3> : ''}
            {isManyUsers ? <button onClick={changeCriminal}>Нет! Мы не преступная групировка!</button> : ''}
            <button onClick={() => setSelectedTab(TABS.HOME)}>Главная</button>
            <button onClick={() => setSelectedTab(TABS.ABOUT)}>О нас</button>
            <button onClick={() => setSelectedTab(TABS.CONTACTS)}>КОнтакты</button>
            <br />
            {selectedTab === TABS.HOME ? 'главная страница' : ''}
            {selectedTab === TABS.CONTACTS ? 'страница контактов' : ''}
            {selectedTab === TABS.ABOUT ? 'страница о нас' : ''}
        </div>
    );
};
export default State;
