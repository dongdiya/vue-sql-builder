<template>
    <div class="vue-query-builder">
        <div class="vue-query-table">
            <el-row type="flex" align="middle">
                <el-col :span="4">from</el-col>
                <el-col :span="20">
                    <From/>
                </el-col>
            </el-row>
            <el-row type="flex" align="middle">
                <el-col :span="4">select</el-col>
                <el-col :span="20">
                    <Select/>
                </el-col>
            </el-row>
            <el-row type="flex" align="middle">
                <el-col :span="4">where</el-col>
                <el-col :span="20">
                    <Where/>
                </el-col>
            </el-row>
        </div>
        <SQL></SQL>
    </div>
</template>

<script>
    import From from '@/components/From.vue';
    import Select from '@/components/Select';
    import Where from "@/components/Where";
    import SQL from '@/components/SQLConsole';
    export default {
        name: 'QueryBuilder',
        components: {
            From, SQL, Select, Where
        },
        props: {
            list: Array
        },
        data() {
            return {
                tables: [],
            }
        },
        watch: {
            list: {
                immediate: true,
                handler(val) {
                    if (val && val.length > 0) {
                        this.$store.dispatch('init', val)
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .vue-query-builder {
        position: relative;
        .vue-query-table {
            padding-bottom: 100px;
            .el-row {
                border: solid #dadada;
                border-width: 1px 1px 0px 1px;
                &:last-child {
                    margin-bottom: 0;
                    border-bottom-width: 1px;
                }
                .el-col+.el-col {
                    padding: 0 10px;
                    border-left: 1px solid #dadada;
                }
            }
        }
    }
</style>
