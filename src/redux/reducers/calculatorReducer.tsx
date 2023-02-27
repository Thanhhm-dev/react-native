import { CHANGE_STYLE, INIT_STATE } from '../../contants/redux'


const calculatorReducer = (state = INIT_STATE, action: { type: string, data: any }) => {
    switch (action.type) {
        case CHANGE_STYLE:
            let tmpItems: { style: {}, text: string }[];
            if (action.data.id) {
                tmpItems = [...state]
                let element = {
                    style: action.data.style,
                    text: tmpItems[action.data.id].text
                }
                tmpItems.splice(action.data.id, 1, element)
            } else {
                tmpItems = INIT_STATE
            }
            
            return tmpItems
        default:
            return state
    }

}

export default calculatorReducer