<template>
    <div class="sql-table">
        <draggable v-model="inlist"
                   handle=".handle"
                   @change="(()=>{})" :move="checkMove">
            <transition-group>
                <div class="sql-rows" v-for="(item, index) in inlist" :key="item.__ob__.dep.id">
                    <div class="button-group" style="width: 115px;">
                        <el-button class="handle" icon="el-icon-sort" circle></el-button>
                        <el-button @click="inlist.splice(index+1, 0, addRow())" type="primary" icon="el-icon-plus"
                                   circle></el-button>
                        <el-button v-if="inlist.length > 1" @click="inlist.splice(index, 1)" type="danger" icon="el-icon-delete"
                                   circle></el-button>
                    </div>
                    <slot :item="item" :index="index"></slot>
                </div>
            </transition-group>
        </draggable>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';

    export default {
        props: {
            list: Array,
            addRow: Function
        },
        computed: {
            inlist: {
                get() {
                    return this.list
                },
                set(val) {
                  this.$emit('change', val);
                }
            }
        },
        components: {
            draggable
        },
        methods: {
            checkMove(evt) {
                return !('alias' in evt.draggedContext.element) ||
                    (evt.draggedContext.index !== 0 && evt.draggedContext.futureIndex !== 0)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .sql-table {
        display: flex;
        flex-direction: column;
        line-height: 40px;

        .sql-rows {
            display: flex;
            align-items: flex-start;
        }

        .el-button {
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            background: #fff;
            border: 1px solid #dcdfe6;
            border-color: #dcdfe6;
            color: #606266;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            outline: none;
            margin: 0;
            transition: .1s;
            font-weight: 500;
        }

        .el-button.is-circle {
            border-radius: 50%;
            padding: 9px;
        }

        .el-button--primary {
            color: #fff;
            background-color: #409eff;
            border-color: #409eff;
        }

        .el-button--danger {
            color: #FFF;
            background-color: #F56C6C;
            border-color: #F56C6C;
        }

        .el-input .el-input__inner {
            height: 32px;
            line-height: 32px;
        }
    }
</style>
