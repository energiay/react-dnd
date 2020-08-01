import React, { useState } from 'react';
import Classes from './Container.module.css'
import Card from './../Card/Card'
import Bay from './../Bay/Bay'

const Container = () => {

    const [cards, setCards] = useState([
        {
          id: 1,
          name: 'Item 1',
        },
        {
          id: 2,
          name: 'Item 2',
        },
        {
          id: 3,
          name: 'Item 3',
        },
        {
          id: 4,
          name: 'Item 4',
        }
    ]);

    let moveCard = (dragIndex, hoverIndex) => {
        let newCards = JSON.parse( JSON.stringify(cards) );
        newCards[hoverIndex] = cards[dragIndex];
        newCards[dragIndex] = cards[hoverIndex];

        setCards(newCards);
    }

    return <div className={Classes.Container}>
        <div>
            <div>Список элементов</div>
            <div className={Classes.content}>
                {
                    cards.map((elem, index) => {
                        elem.index = index;
                        elem.moveCard = moveCard;
                        return <Card key={elem.id} card={elem}/>
                    })
                }
            </div>
        </div>
        <div>
            <div>Корзина</div>
            <Bay />
        </div>
    </div>
}

export default Container;
