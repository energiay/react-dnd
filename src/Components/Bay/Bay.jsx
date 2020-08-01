import React, { useState, useEffect } from 'react'
import update from 'immutability-helper'

export default function Bay() {
    
    let [users, setUsers] = useState({
        board1: [
            {id: '1', name: 'user1'},
            {id: '2', name: 'user2'},
            {id: '3', name: 'user3'},
        ],
        board3: [
            {id: '7', name: 'user7'},
            {id: '8', name: 'user8'},
            {id: '9', name: 'user9'},
        ]
    })


    useEffect(() => {
        let newState = update(users, {
            board1: {$push: [{id:'...', name: '...'}]}
        })

        // newState = update(newState, {
        //     board1: {$unshift: [{id:'5', name: 'user5'}]}
        // })

        // newState = update(newState, {
        //     board1: {$splice: [[1, 2, {id:'6', name: 'user6'}, {id:'10', name: 'user10'}]]}
        // })

        // newState = update(newState, {$merge: {board2: users['board1']}})

        console.log(newState);
        setUsers(newState)
    }, []);
    
    console.log(users)
    return (
        <div>
            {users['board1'] && users['board1'].map((user,index) => <div key={index}>{user.name}</div>)}
            {users['board2'] && users['board2'].map((user,index) => <div key={index}>{user.name}</div>)}
            {users['board3'] && users['board3'].map((user,index) => <div key={index}>{user.name}</div>)}
        </div>
    )
}
