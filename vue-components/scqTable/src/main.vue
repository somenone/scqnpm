<template>
  <Table
    :data="data||null"
    :border="border||true"
    :height="height||null"
    :max-height="maxHeight||null"
    :stripe="stripe||false"
    :lazy="lazy||true"
    :load="defaultLoad"
    style="width:100%;"
    @selection-change="defultSelChange"
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    :row-key="rowKey"
  >
    <TableColumn
      v-for="(item,index) in tableHeader"
      :key="index"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      :type="item.type"
      :fixed="item.fixed"
      :sortable="item.sortable"
    >
      <slot :name="item.slot"></slot>
    </TableColumn>
  </Table>
</template>

<script>
import { Table, TableColumn } from "element-ui";
export default {
  name: "scqTable",
  props: [
    "data",
    "tableHeader",
    "load",
    "lazy",
    "stripe",
    "height",
    "max-height",
    "border",
    "selection-change",
    "row-key",
  ],
  components: {
    Table,
    TableColumn,
  },
  data() {
    return {
    };
  },
  methods: {
    defultSelChange(val){
    this.$emit("selection-change",val)

      console.log(val);
    },
    defaultLoad(tree,treeNode,resolve){
      this.$emit("load", tree, treeNode,resolve)
    }
  },
  mounted(){
  }
};
</script>