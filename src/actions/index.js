const selectBut = (id) => {
    return {
        type: 'SELECT_BUTTONS',
        payload: id
    }
}

const setRequest = (id) => {
    return {
        type: 'SET_REQUEST',
        payload: id
    }
}

const setMainCard = (id) => {
    return {
        type: 'SET_MAIN_CARD',
        payload: id
    }
}

const setContent = (id) => {
    return {
        type: 'SET_CONTENT',
        payload: id.items,
        loadCount: id.totalCount
    }
}

const setBeginContent = (id) => {
    return {
        type: 'SET_BEGIN_CONTENT',
        payload: id.items
    }
}

const onError = () => {
    return {
        type: 'ON_ERROR'
    }
}

const upButtons = (count) => {
    return {
        type: 'UP_BUTTONS(PAGINATOR)',
        payload: count
    }
}

const upButtonsThree = (count) => {
    return {
        type: 'UP_BUTTONS_THREE(PAGINATOR)',
        payload: count
    }
}

const lowerButtons = () => {
    return {
        type: 'LOWER_BUTTONS(PAGINATOR)'
    }
}

const lowerButtonsThree = () => {
    return {
        type: 'LOWER_BUTTONS_THREE(PAGINATOR)'
    }
}

export {
    selectBut,
    upButtons,
    lowerButtons,
    upButtonsThree,
    lowerButtonsThree,
    setContent,
    setRequest,
    setMainCard,
    setBeginContent,
    onError
};