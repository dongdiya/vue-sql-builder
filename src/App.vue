<template>
  <div id="app">
    <el-row>
      <el-col :span="4">from</el-col>
      <el-col :span="20">
        <From/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">select</el-col>
      <el-col :span="20">
        <Select/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">where</el-col>
      <el-col :span="20">
        <Where/>
      </el-col>
    </el-row>
    <el-row>
      <SQL></SQL>
    </el-row>
  </div>
</template>

<script>
import From from './components/From.vue'
import Select from './components/Select'
import Where from "./components/Where";
import Query from './classes/query'
import SQL from './components/SQLConsole'
let tables = [
  {
    "name": "addresses",
    "fields": [{
      "name": "postalCode",
      "type": "character varying(255)",
      "default": null,
      "constraint": null,
      "fkTargetTables": [],
      "nullable": true
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
      "name": "createdAt",
      "type": "timestamp with time zone",
      "default": null,
      "constraint": null,
      "fkTargetTables": [],
      "nullable": false
    }, {
      "name": "id",
      "type": "integer",
      "default": "nextval('departments_id_seq'::regclass)",
      "constraint": "PRIMARY KEY",
      "fkTargetTables": [],
      "nullable": false
    }, {
      "name": "description",
      "type": "text",
      "default": null,
      "constraint": null,
      "fkTargetTables": [],
      "nullable": true
    }]
  }, {
    "name": "ratings",
    "fields": [{
      "name": "id",
      "type": "integer",
      "default": "nextval('ratings_id_seq'::regclass)",
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
      "name": "rating",
      "type": "numeric",
      "default": null,
      "constraint": null,
      "fkTargetTables": [],
      "nullable": true
    }, {
      "name": "year",
      "type": "integer",
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
    }]
  }, {
    "name": "roles",
    "fields": [{
      "name": "createdAt",
      "type": "timestamp with time zone",
      "default": null,
      "constraint": null,
      "fkTargetTables": [],
      "nullable": false
    }, {
      "name": "id",
      "type": "integer",
      "default": "nextval('roles_id_seq'::regclass)",
      "constraint": "PRIMARY KEY",
      "fkTargetTables": [],
      "nullable": false
    }, {
      "name": "description",
      "type": "character varying(255)",
      "default": null,
      "constraint": null,
      "fkTargetTables": [],
      "nullable": true
    }, {
      "name": "title",
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
    }]
  }, {
    "name": "presiden_blackhat",
    "fields": [{
      "name": "filename",
      "type": "text",
      "default": null,
      "constraint": null,
      "fkTargetTables": [],
      "nullable": true
    }]
  }];
export default {
  name: 'app',
  components: {
    From, SQL, Select, Where
  },
  data() {
    return {
      tables: [],
      query: Query.build({tables})
    }
  },
  created() {
    this.$store.commit('init', tables)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
