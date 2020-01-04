import ZButton from './components/button/index';

const install = function(Vue, opts = {}) {
    Vue.component(ZButton.name, ZButton);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    version: '2.8.2',
    ZButton,
    install
};
