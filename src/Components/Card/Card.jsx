import React, { useRef } from 'react';
import Classes from './Card.module.css';
import { useDrag, useDrop } from 'react-dnd';

const Card = (props) => {
    const ref = useRef(null);
    const {id, name, index, moveCard} = props.card;

    const [, drop] = useDrop({
        accept: 'card',
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            } 

            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex;
        }
    })

    const [{ opacity }, drag] = useDrag({
        item: { type: 'card', id, index },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0 : 1,
        })
    })

    drag(drop(ref));

    return <div
        style={{ opacity }}
        ref={ref}
        className={Classes.Card}
    >
        {name}
    </div>
}

export default Card;