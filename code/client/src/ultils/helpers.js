import icons from './icons'

const { BsStarFill, BsStar,BsStarHalf } = icons

export const createSlug = string => string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(' ').join('-')

export const formatMoney = number => Number(number.toFixed(1)).toLocaleString()

export const renderStarfromNumber = (number) => {
    if(!Number(number)) return 
    const start = []
    for (let i = 0; i < +number; i++) start.push(<BsStarFill color='orange'/>)
    for (let i = 5; i > +number; i--) start.push(<BsStar color='yellow' />)

    return start
}