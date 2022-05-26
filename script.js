const toDOList = new Vue({
    el: '#list',
    data : {
        toDO : [
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
    }
}) 