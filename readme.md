## scqTable

data:数据  
tableHeader:表头

    <scqTable :data='data' :tableHeader='tableHeader'></scqTable>

    tableHeader:{
      label: "add",   //同element-ui
      prop: "address",//同element-ui
      slot: "slot1",  //slot的标识
      fixed: true     //同element-ui
    }
    data              //同element-ui
