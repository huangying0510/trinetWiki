$(function(){
    SendXMLHttpRequest()
})



    //发送HTTP请求的函数
function SendXMLHttpRequest() {
$.ajax({
    type: "POST",
    dataType: "json",
    crossDomain: true,
    url: 'https://81xbldtmjh.execute-api.us-east-2.amazonaws.com/wi2_dev/resouse',
    data:{
              "ip": "11.111.111.111",
              "bssid": "9c:1c:12:70:1e:d0",
              "key3": "value3"
    },
    contentType: "application/json",
    success: function (data) {
        console.log(data);
    },
    error: function (error) {
        console.log(error);
    }
});
}