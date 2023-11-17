import icons from './icons'

const { BsStarFill, BsStar, BsStarHalf } = icons

export const createSlug = string => string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(' ').join('-')

export const formatMoney = number => Number(number?.toFixed(1)).toLocaleString()

export const renderStarfromNumber = (number, size) => {
    if (!Number(number)) return
    const start = []
    for (let i = 0; i < +number; i++) start.push(<BsStarFill color='orange' size={size || 16} />)
    for (let i = 5; i > +number; i--) start.push(<BsStar color='yellow' size={size || 16} />)

    return start
}
export const validate = (payload, setInvalidFields) => {
    let invalids = 0
    const formatPayload = Object.entries(payload)
    for (let arr of formatPayload) {
        if (arr[1].trim() === '') {
            invalids++
            setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Required this field.' }])
        }
    }
    // for (let arr of formatPayload) {
    //     switch (arr[0]) {
    //         case 'email':
    //             const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //             if (!arr[1].match(regex))
    //                 invalids++
    //             setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Email invalid.' }])
    //             break;
    //         case 'passsword':
                
    //             if (arr[1].length<6)
    //                 invalids++
    //             setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Password needs more than 6 characters' }])
    //             break;
    //         default:
    //             break;
    //     }
    // }
    return invalids
}