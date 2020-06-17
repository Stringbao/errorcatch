
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
        document.cookie = 'LA_F_T_10000001=1576811087940; LA_C_Id=_ck19122011044719496030802686171; LA_M_W_10000001=_ck19122011044719496030802686171%7C10000001%7C%7C%7C; _ga=GA1.3.1185750602.1576811088; leid=1.avlf7D6U5vc; LA_C_C_Id=_sk201808080540580.94830000.3461; LA_R_C_10000001=22; LA_R_T_10000001=1592400784913; LA_V_T_10000001=1592400784913; _gid=GA1.3.510325806.1592400785; LA_V_T_N_S_10000001=1592400787518; Hm_lvt_449bab53f5226e3131aacf1f92e55044=1592400788; muduapi_MUDUTVSESSIONID=6433e52e-4947-466a-a4a6-8dae966a1a89; muduapi_Token=eb4676b3-a153-4110-be96-b679586d357b; 165404_93223713_lj819e5m_=1%2C; sce=1; muduapi_concurrent_checkout_result_166706_202006172157=0; _gat=1; muduapi_AnalyticSession=22cdfd0a-dd48-45e3-a6c2-6284ca273bb9; cerpreg-passport="|2|1592402307|1594994307|bGVub3ZvSWQ6MTE6MTAxNTI0NzI2NjZ8bG9naW5OYW1lOjExOjE4NjAxMDAzNjYwfG1lbWJlcklkOjEwOjE1OTQ5OTQzMDd8Z3JvdXBDb2RlOjE6MXxpc0xlbm92bzo1OmZhbHNl|ex+rfhSzn4murNq7Hcsx0x5JT/RGEphUM0P02Oksx2xSRKryNyUZvTM5HRa0uzSOXh9AyZOVREbeQjhx1hU+7SfqS7rjJvHMijkCbwPjUd2X9WFUhLQq5y7yKLEmdqMqr0MFqvQi6DkXflrPorGgEccSRXskXafRBWNRZP+jSLC87m5SkMQMa/ZXGIsjje+1qrMN2XxVgkI0955neZ74DOzJCExhk8zU3F7h5dwb3Pud/zkw3TFx8gYTIj05sqB8X3iVk5fmdbhvenezwO86Z7UWuR2wFRGekp+oGa6eH1Len2gYoyf/bBvjpJ9/axjX8lZTaLZICJsY4RZsAIueQQ==|"; LA_V_T_N_10000001=1592402307941; Hm_lpvt_449bab53f5226e3131aacf1f92e55044=1592402308; muduapi_concurrent_checkout_result_166706_202006172158=0; XSRF-TOKEN=eyJpdiI6IllNQWdVR1p5R3R2S0JUZm5JWXVcL3pRPT0iLCJ2YWx1ZSI6IjdUXC9tTURZSkdtTGhmNU5Wb0F6UEpiTXA1SjM0YUIxUTc0ZFdJMnpvd21ZV2hrQXJ2QVNqNVpDZXdXYmpNdVB0QjJHVlJXZlJcL25tSG92aE92VVRSbGc9PSIsIm1hYyI6IjljODJhMGRiM2VjMWRkNTVmY2IxYjMxNTc1MmQ4YWYxZmJhNzU2NjQ4M2EwYmQwNTMzMDU2MjhjNjAzNzFlMDYifQ%3D%3D';
        debugger
        let params = {
            clubid: 67,
            type: 0,
            message: 1231231,
            _token: "auqgvREnK8baIOelumT7oEjLbTHZ3LyAm7d32o99"
        }

        $.ajax({
            url:"/sendmsg",
            type:"post",
            data:params,
            success:function(res){
                debugger
            }
        })

        
    })
})
