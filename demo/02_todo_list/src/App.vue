<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!--<TodoHeader @addTodo="addTodo"/>--><!-- 给TodoHeader标签对象绑定addTodo事件监听 -->
            <TodoHeader ref="header"/>
            <TodoList :todos="todos"/>
            <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
        </div>
    </div>
</template>
<!--
绑定事件监听 ----订阅消息
触发事件 ----发布消息

-->
<script>
    import PubSub from 'pubsub-js'
    import TodoHeader from './components/TodoHeader.vue'
    import TodoList from './components/TodoList.vue'
    import TodoFooter from './components/TodoFooter.vue'
    import storageUtil from './util/storageUtil'

    export default {

        data() {
            return {
                // 从localStorage读取todos
                // todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
                todos: storageUtil.readTodos()
            }
        },

        mounted() { // 执行异步代码
            // 给<TodoHeader /> 绑定addTodo事件监听
            // this.$on('addTodo', this.addTodo) // 给App绑定了监听（不对）
            this.$refs.header.$on('addTodo', this.addTodo)

            // 订阅消息
            PubSub.subscribe('deleteTodo', (msg, index) => {
                this.deleteTodo(index)
            })

        },

        methods: {
            addTodo(todo) {
                this.todos.unshift(todo)
            },

            deleteTodo(index) {
                this.todos.splice(index, 1)
            },

            //删除所有选中的
            deleteCompleteTodos() {
                this.todos = this.todos.filter(todo => !todo.complete)
            },

            //全选/全不选
            selectAllTodos(check) {
                this.todos.forEach(todo => todo.complete = check)
            }
        },

        watch: { // 深度监视
            todos: {
                deep: true, //深度监视
                // handler: function (value) {
                //     // 将todos最新的值的json数据，保存到localStorage
                //     // window.localStorage.setItem('todos_key', JSON.stringify(value))
                //     storageUtil.saveTodos(value)
                // }
                handler: storageUtil.saveTodos
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
