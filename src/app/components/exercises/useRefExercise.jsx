import React from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = React.useRef(true);

    const hundleButton = () => {
        blockRef.current.style.height = "150px";
        blockRef.current.style.width = "80px";
        blockRef.current.querySelector("small").textContent = "text";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Текст</small>
            </div>

            <button onClick={hundleButton} className="btn btn-primary">
                Кнопка
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
