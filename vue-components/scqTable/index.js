import scqTable from "./src/main.vue"

scqTable.install = function(Vue) {
  Vue.component(scqTable.name, scqTable);
};

export default scqTable