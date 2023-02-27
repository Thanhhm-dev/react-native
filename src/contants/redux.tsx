import Style from '../components/Button/style'

export const CHANGE_STYLE = 'CHANGE_STYLE'
export const INIT_STATE: { style: {}, text: string }[] = [
    { style: Style.firstRow, text: 'C' },
    { style: Style.firstRow, text: '+/-' },
    { style: Style.firstRow, text: '%' },
    { style: Style.lastChild, text: '÷' },
    { style: {}, text: '7' },
    { style: {}, text: '8' },
    { style: {}, text: '9' },
    { style: Style.lastChild, text: 'x' },
    { style: {}, text: '4' },
    { style: {}, text: '5' },
    { style: {}, text: '6' },
    { style: Style.lastChild, text: '-' },
    { style: {}, text: '1' },
    { style: {}, text: '2' },
    { style: {}, text: '3' },
    { style: Style.lastChild, text: '+' },
    { style: Style.buttonZero, text: '0' },
    { style: {}, text: ',' },
    { style: Style.lastChild, text: '=' },
]
