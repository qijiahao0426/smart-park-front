$(function(){
    $.ajax({
        url : "http://localhost:8888/interface/build/all_build",	//请求url
        type : "GET",	//请求类型  post|get
     // data : "key=value&key1=value2",	//后台用 request.getParameter("key");
        dataType : "json",  //返回数据的 类型 text|json|html--
        success : function(tmp){	//回调函数 和 后台返回的 数据
        //	var users = JSON.parse(data);
            var tBody = $("#room_manager");
            for(var i=0; i<tmp.length; i++){  //通过遍历，创建行数据
                // var str=""
                // if(tmp.tradeState==0) str="已售"
                // else if(tmp.tradeState==1) str="空置"
                // else str="可招商"
                //         <a class="collapse-item" href="login.html">未受理</a>
                // var url="http://localhost:8888/interface/room/rooms_in_build?buildId="+tmp[i].buildId
                var url="http://localhost:8888/room_manager.html?buildId="+tmp[i].buildId;
                var c=$("<a class='collapse-item' href="+url+">"+tmp[i].buildName+"</a>")
                tBody.append(c);
            }
        }
    });
});
