export function addToDoAction(text) {
    return {
        type: "add",
        text,
    }
}

export function toggleToDoAction(id) {
    return {
        type: "toggle",
        id,
    }
}

export function removeToDoAction(id) {
    return {
        type: "remove",
        id,
    }
}
