export default {
    pro:()=>{
        return new Promise((reslove,reject)=>{
            window.setTimeout(()=>{
                if(1==2){
                    reslove(1);
                }else{
                    reject("接口异常!");
                }
            },100)
        })
    }
}