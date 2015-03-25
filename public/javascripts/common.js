function getArticle(type,offset,limit,callback){
    $.ajax({
        url:'/articles',
        type:'get',
        data:{offset:offset,limit:limit,type:type},
        success:callback
    })
};