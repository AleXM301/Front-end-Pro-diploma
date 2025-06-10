const logger = store => next => action => {
    console.group(`Action: ${action.type}`);
    console.log(` -> Dispatching: ${action.payload}`);

    console.log("Prev state store:", store.getState());
    const result = next(action);
    console.log("New state store:", store.getState());

    console.groupEnd();
    return result;
}

export default logger;