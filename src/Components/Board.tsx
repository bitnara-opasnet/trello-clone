import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";


const Wrapper = styled.div`
    width: 300px;
    padding: 20px 10px;
    padding-top: 10px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 300px;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

interface IBoradProps {
    toDos: string[];
    boardId: string;
}


function Board({ toDos, boardId }: IBoradProps) {
    return (
        <Droppable droppableId={boardId}>
        {(magic) => (
            <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
                <Title>{boardId}</Title>
                {toDos.map((toDo, index) => (
                    <DragabbleCard  key={toDo} index={index} toDo={toDo} />
                ))}
                {magic.placeholder}
            </Wrapper>
        )}
    </Droppable>
    );
};

export default Board;