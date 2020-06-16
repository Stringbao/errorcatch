
let errorCatch_tool = {
    responseText(data){
        let tmp = typeof data == "string"?data:data.toString();
        let res = {
            link:window.location.href,
            msg:tmp
        }
        console.log(res);
        return res;
    },
    getPathByDom(dom){
        let tagName = dom.tagName.toLowerCase();
        let path = "";
        switch(tagName){
            case "link":
                path = dom.getAttribute("href");
                break;
            case "script":
                path = dom.getAttribute("src");
                break;
            case "img":
                path = dom.getAttribute("src");
                break;
        }
        return path;
    },
    getInfoByEvent(e){
        let res = null;
        if(e.message){
            res = this.responseText(e.message);
        }else{
            let target = e.target;
            let tagName = target.tagName.toLowerCase();
            res = this.responseText(this.getPathByDom(target) + " laod error!");
        }
    },
    catchEvent(){
        //静态资源加载异常, 代码异常
        window.addEventListener("error", event => {
            this.getInfoByEvent(event);
            return true;
        }, true);

        //promise 异常未被处理
        window.addEventListener('unhandledrejection',event => {
            this.responseText(event.reason);
        });
    },
    init(){
        this.catchEvent();
    }
}
export default errorCatch_tool;