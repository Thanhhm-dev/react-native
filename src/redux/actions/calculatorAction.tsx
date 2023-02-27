import { CHANGE_STYLE } from '../../contants/redux'

export const changeStyleAction = (dispatch: Function) => {
    return async (data: any) => {
        dispatch({
            type: CHANGE_STYLE,
            data,
        });
    }
}
