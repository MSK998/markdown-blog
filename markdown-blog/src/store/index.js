import {createStore} from 'vuex'
import articles from './articles'
import archives from './archives'
import editor from './editor'

export default createStore({
    modules: {
        articles,
        archives,
        editor
    }
})