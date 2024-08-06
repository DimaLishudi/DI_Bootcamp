const initialState = [];

function generateID() {
    return Date.now();
}

export function todoReducer(state = initialState, action) {
    const { type, id, text } = action;
    switch (type) {
        case "add":
            return [...state, {id: generateID(), text, isCompleted: false}];
        case "toggle": 
        {
            const new_state = [...state];
            const idx = new_state.findIndex((value) => value.id === id);
            new_state[idx] = {
                ...new_state[idx],
                isCompleted: !new_state[idx].isCompleted
            };
            return new_state;
        }
        case "remove":
            return [...state.filter((value) => value.id !== id)];
        default:
            return state
    }   
}