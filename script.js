const toDOList = new Vue({
    el: '#app',
    data : {
        newTodo : {
            text : "",
            done : false
        },
        toDo : [
            {
                text : "fare il bucato",
                done : false
            },
            {
                text : "fare la spesa",
                done : true
            },
            {
                text : "fare da mangiare",
                done : false
            },
            {
                text : "fare la lavatrice",
                done : true
            }
        ]
    },
    methods : {
        newItem(){
            if(this.newTodo !== ""){
                this.toDo.push(this.newTodo)
                this.newTodo = ""
            }
        },
        deleteItem(index) {
            this.toDo.splice(index,1)
        },
        underline(toDo) {
            if(toDo.done === false){
                toDo.done = true
            }
            else {
                toDo.done = false
            }
        }
    }
}) 