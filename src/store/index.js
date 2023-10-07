import { createStore } from 'vuex'
import blogModule from '../modules/blog/store/Mblog'

const store = createStore({
    modules: {
        blogModule
    }
})


export default store