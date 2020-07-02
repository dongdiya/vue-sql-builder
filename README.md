## vue-sql-builder

origin from [sequelease](https://github.com/genius-gemini/sequelease)

### 安装
```
npm install vue-sql-builder
```

### 使用
```
import sqlbuilder from 'vue-sql-builder'

```

### 全局注册（若项目使用了vuex，请通过store参数传递）
```
Vue.use(sqlbuilder,{store: yourvuexinstance[, namespace: 'sqlNamespace']})
```

### 使用：向list属性传递库表信息
```
<QueryBuilder :list="tables"></QueryBuilder>
```

### tables信息应至少为以下结构：
```
tables: [{
            "name": "表名",
            "fields": [{
                              "name": "字段名"            
                        }, 
                         ...
                        {
                              "name": "field1"
                        }]
          }, ...
         ]
```

### 备注
待完成：生成SQL语句方法、复制、清除等功能；
dongdiya007@163.com
