/**
 * 表单验证
 */

//验证账号
export const checkAccount = (rule,value,callback)=>{
    if(!value){
        callback(new Error('请输入账号'))
    }
    // else if(!/^[0-9a-zA-Z\u4E00-\u9FA5]{3,6}$/.test(value)){
    //     callback(new Error('3 ~ 5位字母/数字/文字'))
    // }
    else{
        callback()
    }
};

//验证密码
/* export const checkPassword = (rule,value,callback)=>{
    if(!value){
        callback(new Error('请输入密码'))
    }else if(!/^[0-9a-zA-Z]{6,12}$/.test(value)){
        callback(new Error('6 ~ 12位字母/数字'))
    }else{
        callback()
    }
}; */
export const checkPassword = (rule,value,callback)=>{
    if(!value){
        callback(new Error('请输入密码'))
    }else{
        callback()
    }
};

/* //验证确认密码
export const checkQuitPass = (rule, value, callback) =>{
    if (!value) {
      callback(new Error("请再次输入密码"));
    } else if (value !== this.passForm.pass) {
      callback(new Error("两次输入密码不一致!"));
    } else {
      callback();
    }
  }, */