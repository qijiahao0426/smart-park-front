$(function(){
    $.ajax({
        url : "http://localhost:8888/interface/tax/push",	//请求url
        type : "GET",	//请求类型  post|get
     // data : "key=value&key1=value2",	//后台用 request.getParameter("key");
        dataType : "json",  //返回数据的 类型 text|json|html--
        success : function(tmp){	//回调函数 和 后台返回的 数据
        //	var users = JSON.parse(data);
            var tBody = $("#push");
            for(var i=0; i<tmp.length; i++){  //通过遍历，创建行数据
                // var str=""
                // if(tmp.tradeState==0) str="已售"
                // else if(tmp.tradeState==1) str="空置"
                // else str="可招商"
                var tr = $("<tr><td>"+tmp[i].pushTime+"</td><td>"+tmp[i].enterpriseName+"</td><td>"+tmp[i].tax+"</td><td>"+tmp[i].personNumber+"</td><td>"+tmp[i].increase+"</td></tr>")
                tBody.append(tr);
            }
        }
    });
});
