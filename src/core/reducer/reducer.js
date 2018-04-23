/**
 * Created by kurosaki on 2018/4/20.
 */
const themeReducer = (state, action) => {
    if (!state) return {
        themeColor: 'red',
        userName:"Kurosaki"
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
            break
        case 'CHANGE_NAME':
            return { ...state, userName: action.userName }
            break
        default:
            return state
    }
}
export default themeReducer