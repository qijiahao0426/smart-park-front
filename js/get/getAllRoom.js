$(function(){
    $.ajax({
        url : "http://localhost:8888/interface/room/all_room",	//请求url
        type : "GET",	//请求类型  post|get
     // data : "key=value&key1=value2",	//后台用 request.getParameter("key");
        dataType : "json",  //返回数据的 类型 text|json|html--
        success : function(rooms){	//回调函数 和 后台返回的 数据
        //	var users = JSON.parse(data);
            var tBody = $("#tb");
            for(var i=0; i<rooms.length; i++){  //通过遍历，创建行数据
                var str=""
                if(rooms.tradeState==0) str="已售"
                else if(rooms.tradeState==1) str="空置"
                else str="可招商"
                var tr = $("<tr><td>"+rooms[i].roomName+"</td><td>"+rooms[i].buildName+"</td><td>"+rooms[i].parkName+"</td><td>"+str+"</td><td>"+rooms[i].area+"</td></tr>")
                tBody.append(tr);
            }
        }
    });
});
