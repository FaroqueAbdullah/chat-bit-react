const initState = {
    connects: [
        {name: 'Aaaaaa', status: 'online', id: 'preview/Aaaaaa', email: 'aaaa@gmail.com', mobile: '01700000000', country: 'BD', location: 'Dhaka, Bangladesh' },
        {name: 'Bbbbbb', status: 'engaged', id: 'preview/Bbbbbb', email: 'bbbbb@gmail.com', mobile: '0111111111', country: 'IN', location: 'Delhi, India'},
        {name: 'Cccccc', status: 'online', id: 'preview/Cccccc', email: 'ccccc@gmail.com', mobile: '01555555555', country: 'IN', location: 'Delhi, India' },
        {name: 'Dddddd', status: 'engaged', id: 'preview/Dddddd', email: 'ddddd@gmail.com', mobile: '01777777777', country: 'BD', location: 'Dhaka, Bangladesh' },
        {name: 'Eeeeee', status: 'engaged', id: 'preview/Eeeeee', email: 'eeeee@gmail.com', mobile: '01786786856', country: 'US', location: 'New York, USA' },
        {name: 'Ffffff', status: 'online', id: 'preview/Ffffff', email: 'fffff@gmail.com', mobile: '0141454245425', country: 'US', location: 'Boston, USA' },
        {name: 'Gggggg', status: 'online', id: 'preview/Gggggg', email: 'ggggg@gmail.com', mobile: '014213423134', country: 'CA', location: 'Torento, Canada' },
        {name: 'Hhhhhh', status: 'queued', id: 'preview/Hhhhhh', email: 'hhhhh@gmail.com', mobile: '017xxxxxxxxx', country: 'CA', location: 'Torento, Canada' },
        {name: 'Iiiiii', status: 'queued', id: 'preview/Iiiiii', email: 'iiiii@gmail.com', mobile: '017xxxxxxxxx', country: 'IN', location: 'Mumbai, India' },
        {name: 'Oooooo', status: 'agent', id: 'preview/Oooooo', email: 'ooooo@gmail.com', mobile: '0166666666666', country: 'CN', location: 'Beijing, China' },
    ],
    text: [
        {
            id: 'preview/Aaaaaa',
            name: 'Aaaaaa',
            msg: [
                {text:'Hello', sender: false, timestamp: '1617034897'},
                {text:'How are you?', sender: false, timestamp: '1617034898'},
                {text:'Hi', sender: true, timestamp: '1617034899'},
                {text:'I am fine', sender: true, timestamp: '1617034900'},
                {text:'What about you?', sender: true, timestamp: '1617034901'},
                {text:'I am also fine', sender: false, timestamp: '1617034902'},
                {text:'Good to hear from you', sender: true, timestamp: '1617034903'},
                {text:'Same to you', sender: false, timestamp: '1617034905'},
            ]
        },
        {
            id: 'preview/Bbbbbb',
            name: 'Bbbbbb',
            msg: [
                {text:'Hello', sender: false, timestamp: '1617034897'},
                {text:'How are you?', sender: false, timestamp: '1617034898'},
                {text:'Hi', sender: false, timestamp: '1617034899'},
                {text:'I am fine', sender: true, timestamp: '1617034900'},
                {text:'What about you?', sender: true, timestamp: '1617034901'},
                {text:'I am also fine', sender: true, timestamp: '1617034902'},
                {text:'fsaffsfgdfsfg', sender: true, timestamp: '1617034903'},
                {text:'Same to yousadfsadf', sender: true, timestamp: '1617034905'},
                {text:'Hello', sender: false, timestamp: '1617034897'},
                {text:'How are you?', sender: false, timestamp: '1617034898'},
                {text:'Hi', sender: true, timestamp: '1617034899'},
                {text:'I am fine', sender: true, timestamp: '1617034900'},
                {text:'What about you?', sender: true, timestamp: '1617034901'},
                {text:'I am also fine', sender: false, timestamp: '1617034902'},
                {text:'Good to hear from you', sender: true, timestamp: '1617034903'},
                {text:'Same to you', sender: false, timestamp: '1617034905'},
                {text:'Hello', sender: false, timestamp: '1617034897'},
                {text:'How are you?', sender: false, timestamp: '1617034898'},
                {text:'Hi', sender: true, timestamp: '1617034899'},
                {text:'I am fine', sender: true, timestamp: '1617034900'},
                {text:'What about you?', sender: true, timestamp: '1617034901'},
                {text:'I am also fine', sender: false, timestamp: '1617034902'},
                {text:'Good to hear from you', sender: true, timestamp: '1617034903'},
                {text:'Same to you', sender: false, timestamp: '1617034905'},
                {text:'I am fine', sender: true, timestamp: '1617034900'},
                {text:'What about you?', sender: true, timestamp: '1617034901'},
                {text:'I am also fine', sender: false, timestamp: '1617034902'},
                {text:'Good to hear from you', sender: true, timestamp: '1617034903'},
                {text:'Same to you', sender: false, timestamp: '1617034905'},
                {text:'Hello', sender: false, timestamp: '1617034897'},
                {text:'How are you?', sender: false, timestamp: '1617034898'},
                {text:'Hi', sender: true, timestamp: '1617034899'},
                {text:'I am fine', sender: true, timestamp: '1617034900'},
                {text:'What about you?', sender: true, timestamp: '1617034901'},
                {text:'I am also fine', sender: false, timestamp: '1617034902'},
                {text:'Good to hear from you', sender: true, timestamp: '1617034903'},
                {text:'Same to you', sender: false, timestamp: '1617034905'},
            ]
        },
        {
            id: 'preview/Cccccc',
            name: 'Cccccc',
            msg: [
                {text:'Hello', sender: false, timestamp: '1617034897'},
                {text:'Hi', sender: false, timestamp: '1617034899'}
            ]
        },
        {
            id: 'preview/Dddddd',
            name: 'Dddddd',
            msg: [
                {text:'Hi', sender: true, timestamp: '1617034899'},
                {text:'I am fine', sender: false, timestamp: '1617034900'},
                {text:'What about you?', sender: false, timestamp: '1617034901'},
                {text:'I am also fine', sender: true, timestamp: '1617034902'},
                {text:'fsaffsfgdfsfg', sender: true, timestamp: '1617034903'},
                {text:'Same to yousadfsadf', sender: false, timestamp: '1617034905'},
            ]
        },
        {
            id: 'preview/Eeeeee',
            name: 'Eeeeee',
            msg: []
        },
        {
            id: 'preview/Ffffff',
            name: 'Ffffff',
            msg: [
                {text:'Hello', sender: false, timestamp: '1617034897'},
                {text:'How are you?', sender: false, timestamp: '1617034898'},
                {text:'Hi', sender: true, timestamp: '1617034899'},
                {text:'I am fine', sender: true, timestamp: '1617034900'},
                {text:'What about you?', sender: true, timestamp: '1617034901'},
                {text:'I am also fine', sender: false, timestamp: '1617034902'},
                {text:'Good to hear from you', sender: true, timestamp: '1617034903'},
                {text:'Same to you', sender: false, timestamp: '1617034905'},
            ]
        },
        {
            id: 'preview/Gggggg',
            name: 'Gggggg',
            msg: [
                {text:'Hi', sender: true, timestamp: '1617034899'},
                {text:'What about you?', sender: true, timestamp: '1617034901'},
                {text:'I am also fine', sender: false, timestamp: '1617034902'},
                {text:'Good to hear from you', sender: true, timestamp: '1617034903'},
                {text:'Same to you', sender: false, timestamp: '1617034905'},
            ]
        },
        {
            id: 'preview/Hhhhhh',
            name: 'Hhhhhh',
            msg: [
                {text:'Hello', sender: false, timestamp: '1617034897'},
            ]
        },
        {
            id: 'preview/Iiiiii',
            name: 'Iiiiii',
            msg: [
                {text:'What about you?', sender: true, timestamp: '1617034901'},
                {text:'I am fine', sender: false, timestamp: '1617034902'},
                {text:'Good to hear from you', sender: true, timestamp: '1617034903'},
                {text:'Same to you', sender: false, timestamp: '1617034905'},
            ]
        },
        {
            id: 'preview/Oooooo',
            name: 'Oooooo',
            msg: []
        },
        
    ],
    currentTextWindow: null
}

function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues)
}

const rootReducer = ( state= initState , action) => {

    switch(action.type) {
        case 'ADD_TEXT_WINDOW_ID':
            return updateObject(state, { currentTextWindow: action.id })
        case 'ADD_NEW_TEXT':
            const oldMsgOfId = state.text.find( data => data.id === action.id)
            const addNewMsgWithOld = { ...oldMsgOfId , msg: [...oldMsgOfId.msg , action.msg]}

            const othersMsgs = state.text.filter( data => data.id !== action.id)
            const allText = [...othersMsgs, addNewMsgWithOld]

            return updateObject(state, { text: allText })
        default:
          return state
      }
}

export default rootReducer;