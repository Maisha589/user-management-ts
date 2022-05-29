import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User {
    name?: string,
    job?: string
}

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] = useState<User | null>({})
    const handleIncrease = (): void => {
        setCounter(counter + 1)
    }

    const handleserSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: "Adam",
            job: "Dev"
        }
        return (userData);
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {

    }

    return (
        <div>
            <h1>this is counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button>decrease</button>
        </div>
    );
};

export default Counter;