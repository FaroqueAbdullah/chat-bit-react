export const addCurrentTextWindowID = (id) => {
    return {
        type: 'ADD_TEXT_WINDOW_ID',
        id
    }
}

export const addNewText = (id, msg) => {
    return {
        type: 'ADD_NEW_TEXT',
        id,
        msg
    }
}