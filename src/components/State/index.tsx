const State = () => {
    let counter = 0;

  

    const increase = () => {
        counter++;
        console.log(counter);
    };

    const decrease = () => {
        counter--;
        console.log(counter);
    };

    return (
        <div>
            <button onClick={increase}>+</button>
            {counter}
            <button onClick={decrease}>-</button>
        </div>
    );
};
export default State;
