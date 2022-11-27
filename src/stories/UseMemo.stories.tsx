import React, {useCallback, useMemo} from 'react';
import {useState} from 'react';

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    //помещаем сложную вычислительную ф-цию внтурь useMemo, и ставим зависимость от нашей переменной
    //чтобы ф-ция браа значение из кэша,и не пересчитывалась при перерендере
    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random()
            }
            resultA = resultA * i;
        }

        return resultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }


    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users Secret")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(["dimych","valera","artem"])


    const newArray = useMemo( () => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    return <>
        <button onClick={ ()=>setCounter(counter+1) }>+</button>
        {counter}
        <Users users={newArray}/>
    </>
}




export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter,setCounter] = useState(0)
    const [books,setBooks] = useState(["react","js","redux"])






    const memoizedAddBook = useMemo(()=>{
        return () => {
            const newBooks = [...books,'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    },[books])
    //если нет зависимостей, то ф-ция запоминается навсегда


    const memoizedAddBook2 = useCallback(()=>{
        console.log(books)
            const newBooks = [...books,'Angular' + new Date().getTime()]
            setBooks(newBooks)
    },[books])


    return <>
        <button onClick={ ()=>setCounter(counter+1) }>+</button>
        {counter}
        <Book  addBook={memoizedAddBook2}/>
    </>
}

type BookSecretPropsType = {

    addBook:()=>void
}
const BooksSecret = (props: BookSecretPropsType ) => {
    console.log("Books Secret")
    return <div>
        <button onClick={ ()=>props.addBook() }>Add Book</button>

    </div>
}

const Book = React.memo(BooksSecret)

