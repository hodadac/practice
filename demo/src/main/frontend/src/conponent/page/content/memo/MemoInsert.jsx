import React, {useState} from 'react';

function MemoInsert(props){
    const [content,setContent] = useState("");
    const [memberId, setMemberId] = useState("");
    const handleContent = (e) => {
        setContent(e.target.value);
    };


    const onClickText = async () => {
        console.log("Content: ", content);
        console.log("memberId:", memberId);
        const memo = {
            memberId,
            content
        };
        try {
            const response: Response = await fetch('/api/memo/insert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(memo),
            });
            if(response.ok){
                alert('Registration success');
                console.log(response.text())
            }else{
                alert('Registration fail')
            }
        }catch (error){
            console.error('Error',error)
        }

    }

    return(
        <>
            <div>
                <font>memoInsert</font>
                <br/>
                <input
                    type="hidden"
                    value={memberId}
                />
                <br/>
                <textarea
                    name="input_text"
                    value={content}
                    onChange={handleContent}
                />
                <button type="button" onClick={onClickText}>등록</button>
            </div>
        </>
    )
}

export default MemoInsert;