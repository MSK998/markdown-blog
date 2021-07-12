import {createStore} from 'vuex'
import articles from './articles'
import archives from './archives'

export default createStore({
    modules: {
        articles,
        archives
    }
})