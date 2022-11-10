import axios from "axios";

export default function exec(opt, scb, fcb) {
    let baseUrl = "http://127.0.0.1:8080/";
    let headers = {
        'Accept': '*/*',
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache-Control': 'no-cache',
    };
    if(opt.needAuth){
        //admin token
    }
    let opt1={
        method: opt.type.toLowerCase(),
        url: baseUrl+opt.url,
        headers: headers,
        timeout: opt.timeout ? opt.timeout : 15000
    };
    if(opt.type==='get'){
        opt1.params=opt.params
    }else{
        opt1.data=opt.params;
    }
    axios(opt1).then(function (response) {
        if(response.status===200){
            scb && scb(response.data);
        }else{
            fcb && fcb({errMsg:"服务器出错("+response.status+")"});
        }
    }).catch(function (error) {
        fcb && fcb(error.message);
    });
}