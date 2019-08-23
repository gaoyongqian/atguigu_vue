<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <TodoHeader/>
            <TodoList/>
            <TodoFooter/>
        </div>
    </div>
</template>

<script>
    import TodoHeader from './TodoHeader.vue'
    import TodoList from './TodoList.vue'
    import TodoFooter from './TodoFooter.vue'
    import storageUtil from '../util/storageUtil'

    export default {

        mounted() {
          // 发送命令给action：异步获取保存todos数据并显示
          this.$store.dispatch('reqTodos')

        },

        watch: { // 深度监视
            todos: {
                deep: true, //深度监视
                handler: function (value) {
                    // 将todos最新的值的json数据，保存到localStorage
                    // window.localStorage.setItem('todos_key', JSON.stringify(value))
                    storageUtil.saveTodos(value)
                }
            }
        },

        components: {
            TodoHeader,
            TodoList,
            TodoFooter
        }
    }
</script>

<style>
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>
