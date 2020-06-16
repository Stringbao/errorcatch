
import "@css/login";
import "babel-polyfill";
import services from "../services/login.js";

$(function () {
    services.pro().then(x=>{

    })

    try {
        abc();
    } catch (error) {
        nec_fe_core_tool.error_tool.responseText(error);
    }
})
