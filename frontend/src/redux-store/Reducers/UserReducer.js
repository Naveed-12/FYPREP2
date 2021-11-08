import react from 'react';

const UserReducer=(state=[],action)=>{
    switch (action.type){
        case 'ADDUSER':
            return [
                ...state,
                action.new_user
            ]
        default:
            return state
    }

}
export default UserReducer
