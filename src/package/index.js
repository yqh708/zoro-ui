import zoroButton from './zoro-button'

const components = [
    zoroButton
]

const install = function (Vue,opts = {}) {
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}

if(typeof window !=='undefined'&&window.Vue){
    install(window.vue)
}

export default {
    install,
    zoroButton
}
