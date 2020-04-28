
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
$(function(){ 
    var buildId=getQueryVariable("buildId"); 
    console.log(buildId)

    $.ajax({
        url : "http://localhost:8888/interface/room/rooms_in_build",	//请求url
        type : "GET",	//请求类型  post|get
        data:{
            "buildId":buildId
        },
     // data : "key=value&key1=value2",	//后台用 request.getParameter("key");
        dataType : "json",  //返回数据的 类型 text|json|html--
        success : function(tmp){	//回调函数 和 后台返回的 数据
        //	var users = JSON.parse(data);
            var tBody = $("#room");
            for(var i=0; i<tmp.length; i++){  //通过遍历，创建行数据
                // var str=""
                // if(tmp.tradeState==0) str="已售"
                // else if(tmp.tradeState==1) str="空置"
                // else str="可招商"
                //         <a class="collapse-item" href="login.html">未受理</a>
                // var url="http://localhost:8888/interface/room/rooms_in_build?buildId="+tmp[i].buildId
                var tr = $("<tr><td>"+tmp[i].roomName+"</td><td>"+tmp[i].buildName+"</td><td>"+tmp[i].roomHigh+"</td><td>"+tmp[i].roomArea+"</td><td>"+tmp[i].tradeState
                +"</td><td>"+tmp[i].roomPrice+"</td><td>"+tmp[i].roomState+"</td><td>"+tmp[i].timeToUse+"</td><td>"+tmp[i].enterpriseName+"</td></tr>")
                tBody.append(tr);
            }
        }
    });
});
