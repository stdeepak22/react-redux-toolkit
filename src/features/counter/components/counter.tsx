import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementAsync } from '../counterSlice';
import { AppDispatch, RootState } from '../../../store';

function Counter() {
    const count = useSelector((st: RootState) => st.counter.value);
    const dispatch: AppDispatch = useDispatch();

    return (
        <div className="App">
            <h1>Redux Toolkit Demo</h1>
            <div>
                <h2>Counter: {count}</h2>
                <button onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <button onClick={() => dispatch(decrement())}>
                    Decrement
                </button>

                <button onClick={() => dispatch(incrementAsync(5))}>
                    Inc Async
                </button>
            </div>
        </div>
    );
}

export { Counter };