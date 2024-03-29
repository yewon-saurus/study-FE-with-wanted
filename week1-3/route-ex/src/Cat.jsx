import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Cat() {
    const nav = useNavigate();
    const { name } = useParams();

    const [number, setNumber] = useState(0);
    const addNumber = (num) => {
        setNumber(number + num);
        console.log(number);
    };

    return (
        <div>
            Cat {name} 이에요
            <div>
            <button onClick={() => {
                if (number < 5) {
                    addNumber(1);
                }
                else {
                    nav("/dog");
                }
            }}>강아지 화면으로 가기</button>
            </div>
        </div>
    );
}

export default Cat;