function getArticle(type, offset, limit, callback) {
    $.ajax({
        url: '/articles',
        type: 'get',
        data: {offset: offset, limit: limit, type: type},
        success: callback
    });
};
function pagination(meta, doc) {
    doc.html('');
    var current = (meta.offset / meta.limit) + 1;
    var total = Math.ceil(meta.total / meta.limit);
    if (total <= 1) {
        doc.append('<a data-num="1">1</a>')
    } else {
        var start = 0;
        var end = 0;
        if (current - 4 <= 0) {
            start = 1;
        } else {
            start = current - 4;
        }
        if (current + 4 > total) {
            end = total - current;
        } else {
            end = current + 4;
        }
        if(current != 1){
            doc.append('<a data-num="prev">上一页</a>');
        }
        for (var i = start; i <= end; i++) {
            if(i == current){
                doc.append('<a class="current" data-num="'+i+'">'+i+'</a>')
            }else{
                doc.append('<a data-num="' + i + '">'+i+'</a>')
            }
        }
        if(current != total){
            doc.append('<a data-num="next">下一页</a>');
        }
    }

}