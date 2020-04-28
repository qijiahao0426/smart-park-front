$(function(){
    $.ajax({
        url : "http://localhost:8888/interface/enterprise/all_enterprise",	//请求url
        type : "GET",	//请求类型  post|get
     // data : "key=value&key1=value2",	//后台用 request.getParameter("key");
        dataType : "json",  //返回数据的 类型 text|json|html--
        success : function(tmp){	//回调函数 和 后台返回的 数据
        //	var users = JSON.parse(data);
            var tBody = $("#unenterprise");
            for(var i=0; i<tmp.length; i++){  //通过遍历，创建行数据
                // var str=""
                // if(tmp.tradeState==0) str="已售"
                // else if(tmp.tradeState==1) str="空置"
                // else str="可招商"
                if(tmp[i].leaveReason==null) continue;
                var tr = $("<tr><td>"+tmp[i].enterpriseName+"</td><td>"+tmp[i].roomName+"</td><td>"+tmp[i].enterPriseLe+"</td><td>"+tmp[i].contractNumber+"</td><td>"+tmp[i].contact+"</td><td>"+tmp[i].contactPhone
                +"</td><td>"+tmp[i].leaveTime+"</td><td>"+tmp[i].leaveReason+"</td></tr>")
                tBody.append(tr);
            }
        }
    });
});
