import React, {useState,useEffect} from 'react';

function MemoList(){
    const [memoList , setMemoList] = useState("");


    useEffect( async() =>{
            const response:Response = await fetch("/api/memo", {
                method: 'GET'
            });
            response.json().then(memos => {
                    console.log(memos);
                    setMemoList(memos);
                })
    }, []);


    return(
        <>
            <div>
                <p>memoList</p>
            </div>
        </>
    )
}

export default MemoList;