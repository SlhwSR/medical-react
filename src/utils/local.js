/**
 * 本地存储函数
 */
const local ={
    //获取本地存储数据
    get(key){
        return JSON.parse(localStorage.getItem(key))
    },

    //设置本地存储数据
    set(key,val){
        localStorage.setItem(key,JSON.stringify(val))
    },

    //删除本地存储数据
    remove(key){
        localStorage.removeItem(key)
    },

    //清空本地存储
    clear(){
        localStorage.clear()
    }
}

//暴露出去
export default local