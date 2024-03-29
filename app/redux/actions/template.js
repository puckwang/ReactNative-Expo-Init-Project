export const types = {
    GET_TITLE: 'GET_TITLE',
    GET_TITLE_SUCCESS: 'GET_TITLE_SUCCESS'
};

export const actionCreators = {
    getTitle: (text) => {
        return {type: types.GET_TITLE, payload: text}
    }
}