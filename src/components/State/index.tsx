const State = () => {
    let counter = 0;

    console.log(counter);
    return (
        <div>
            <button>+</button>
            {counter}
            <button>-</button>
        </div>
    );
};
export default State;
