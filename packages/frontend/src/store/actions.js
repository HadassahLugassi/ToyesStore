export const setIsManager = (v) => {
    return { type: 'setIsManagerType', payload: v }
}

export const setCurentUserName = (v) => {
    return { type: 'setCurentUserType', payload: v }
}
export const addProdToSal = (v) => {
    return { type: 'addProdToSalType', payload: v }
}

export const restartSal = (v) => {
    return { type: 'restartSalType', payload: v }
}

export const increaseProd = (v) => {
    return { type: 'increaseProdType', payload: v }
}
export const decreaseProd = (v) => {
    return { type: 'decreaseProdType', payload: v }
}

export const deleteProd = (v) => {

    return { type: 'deleteProdType', payload: v }
}
