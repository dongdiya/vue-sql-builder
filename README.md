# vue-sql-builder

## 安装
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

### tables信息应至少为一下格式：
```
tables: [
          {
            "name": "addresses",
            "fields": [{
              "name": "postalCode"            
    }, {
              "name": "createdAt",
              "type": "timestamp with time zone",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": false
            }, {
              "name": "updatedAt",
              "type": "timestamp with time zone",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": false
            }, {
              "name": "countryCode",
              "type": "character varying(255)",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": true
            }, {
              "name": "apartmentNo",
              "type": "character varying(255)",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": true
            }, {
              "name": "id",
              "type": "integer",
              "default": "nextval('addresses_id_seq'::regclass)",
              "constraint": "PRIMARY KEY",
              "fkTargetTables": [],
              "nullable": false
            }, {
              "name": "city",
              "type": "character varying(255)",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": true
            }, {
              "name": "streetAddress",
              "type": "character varying(255)",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": true
            }, {
              "name": "state",
              "type": "character varying(255)",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": true
            }]
          }, {
            "name": "timeoffs",
            "fields": [{
              "name": "startDate",
              "type": "timestamp with time zone",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": true
            }, {
              "name": "updatedAt",
              "type": "timestamp with time zone",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": false
            }, {
              "name": "id",
              "type": "integer",
              "default": "nextval('timeoffs_id_seq'::regclass)",
              "constraint": "PRIMARY KEY",
              "fkTargetTables": [],
              "nullable": false
            }, {
              "name": "createdAt",
              "type": "timestamp with time zone",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": false
            }, {
              "name": "endDate",
              "type": "timestamp with time zone",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": true
            }]
          }, {
            "name": "roleHistories",
            "fields": [{
              "name": "updatedAt",
              "type": "timestamp with time zone",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": false
            }, {
              "name": "startDate",
              "type": "timestamp with time zone",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": true
            }, {
              "name": "endDate",
              "type": "timestamp with time zone",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": true
            }, {
              "name": "id",
              "type": "integer",
              "default": "nextval('\"roleHistories_id_seq\"'::regclass)",
              "constraint": "PRIMARY KEY",
              "fkTargetTables": [],
              "nullable": false
            }, {
              "name": "createdAt",
              "type": "timestamp with time zone",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": false
            }]
          }, {
            "name": "departments",
            "fields": [{
              "name": "name",
              "type": "character varying(255)",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": true
            }, {
              "name": "updatedAt",
              "type": "timestamp with time zone",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": false
            }, {
              "name": "createdAt"
            }, {
              "name": "id"
            }, {
              "name": "description",
              "type": "text",
              "default": null,
              "constraint": null,
              "fkTargetTables": [],
              "nullable": true
            }]
          }],
```

### 联系方式
dongdiya007@163.com