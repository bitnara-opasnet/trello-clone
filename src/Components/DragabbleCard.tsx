import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";


const Card = styled.div`
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px 10px;
    background-color: ${(props) => props.theme.cardColor};
`;

interface IDraggableCardProps {
    toDo: string;
    index: number
}


function DragabbleCard({toDo, index}: IDraggableCardProps) {
    return (
        <Draggable draggableId={toDo} index={index} key={toDo}>
        {(magic) => (
            <Card 
                ref={magic.innerRef} 
                {...magic.draggableProps}
                {...magic.dragHandleProps}
            >
                {toDo}
            </Card>
        )}
        </Draggable>
    );
};


export default React.memo(DragabbleCard);