
import "@css/login";
import "babel-polyfill";
import services from "../services/login.js";

$(function () {
    services.pro().then(x=>{

    })

    try {
        let s = abctest + "123";
    } catch (error) {
        fe_core_tool.error_tool.responseText(error);
    }

    $("#btn1").click(function(){
        document.cookie = "LA_F_T_10000001=1576811087940; LA_C_Id=_ck19122011044719496030802686171; LA_M_W_10000001=_ck19122011044719496030802686171%7C10000001%7C%7C%7C; _ga=GA1.3.1185750602.1576811088; leid=1.avlf7D6U5vc; LA_C_C_Id=_sk201808080540580.94830000.3461; cerpreg-passport='|2|1591930566|1594522566|bGVub3ZvSWQ6MTE6MTAwNTgwNDU2NzZ8bG9naW5OYW1lOjExOjE4NjExNzAxODY3fG1lbWJlcklkOjEwOjE1OTQ1MjI1NjZ8Z3JvdXBDb2RlOjE6MXxpc0xlbm92bzo1OmZhbHNl|l+V4gcpkDosugAxz9sy2C5xqeJX0dv7xoQKjiouxmtbVDC4LRNfZ0VZc9ocSqbYa6OmW9Pp3wxNntDZJT4aG7zhMonGF+LjSw8D58drdPxV00VjBQm3PXnyYDG0svDlM6m8D2K50qfiWMgRwWt4zPiqrH62NLq2yMLQXf/Ij5LNiPnuc3YfMk/rp9vJYzk8q60Nkj+w5mpFao8QC+OtOm2zIN+vC+gekRa4WHqgD5N0PmTPutnCDy8NfgHGhLqfEKVgfZTkGPptBif1JEZri3oVk6drvmtEGbHQF9BE/XSN44iWR1mDVTI72hutneLjwHl9sRijiYNElCrBfGhAk2A==|'; LA_R_C_10000001=22; LA_R_T_10000001=1592400784913; LA_V_T_10000001=1592400784913; _gid=GA1.3.510325806.1592400785; LA_V_T_N_S_10000001=1592400787518; LA_V_T_N_10000001=1592400787518; Hm_lvt_449bab53f5226e3131aacf1f92e55044=1592400788; Hm_lpvt_449bab53f5226e3131aacf1f92e55044=1592400788; muduapi_MUDUTVSESSIONID=6433e52e-4947-466a-a4a6-8dae966a1a89; muduapi_Token=eb4676b3-a153-4110-be96-b679586d357b; muduapi_AnalyticSession=7f8a0081-c0ac-4beb-b013-8b2e3739fb91; 165404_93223713_lj819e5m_=1%2C; XSRF-TOKEN=eyJpdiI6ImhqNUtQUTBubnJwQ0pvOEFEWmg1UlE9PSIsInZhbHVlIjoiOHFnTmllYjF0WVdCb0N0WFJ4STVEbXdDTDFJQzNoa21SN1VDZm1DYTFrR0o0VFN5cWVHY0NyQWJzeVwvbkRHeVhFNnhtbHNidnFjblk3S25LaHJ3SitRPT0iLCJtYWMiOiI2ZWIwZmQ4YTc2YjUwMDRlNTdmNWY0OTkzYmMwNDBlMzE4ODZjODc4NDc3MWZjYzMzMjAxNTM3MTdkNDhkOTJiIn0%3D";
        debugger
        fe_core_tool.ajax.postFetch("/sendmsg",{
            clubid: "67",
            type: "0",
            message: "1231231",
            _token: "auqgvREnK8baIOelumT7oEjLbTHZ3LyAm7d32o99"
        }).then(x=>{
            debugger
        })
    })
})
