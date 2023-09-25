import React, {useState} from 'react';

function MemoInsert(){
    const [text,setText] = useState("");
    const handleText = (e) => {
        setText(e.target.value);
    };

    const onClickText = async () => {
        console.log("Text: ", text);
        const memo = {
            text
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
                <p>memoInsert</p>
                <textarea
                    name="input_text"
                    value={text}
                    onChange={handleText}
                />
                <button type="button" onClick={onClickText}>등록</button>
            </div>
        </>
    )
}

export default MemoInsert;