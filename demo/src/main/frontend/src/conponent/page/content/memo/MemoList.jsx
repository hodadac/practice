import React, {useState, useEffect, memo} from 'react';

function MemoList(){
    const [memoList , setMemoList] = useState("");

    useEffect(()=>{
        fetch("/api/memo",{
            method:"GET"
        }).then((res) => res.json())
            .then(data => {
                console.log(data)
                console.log(typeof data);
                setMemoList(data);
            })

    })

    return(
        <>
            <div>
                {Array.isArray(memoList)
                    ? memoList.map(element => {
                        return <font>{element["content"]}</font>;
                    })
                    : null}
                <font>memoLists</font>
            </div>
        </>
    )
}

export default MemoList;