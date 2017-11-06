
define(['jquery','template','./utils'],function($,template){
    var pagesize = 2;

    var reg = /\?[a-z]+=(\d+)/;
    var search = location.search || '';
    // 进行匹配查找
    var page = reg.exec(search) && reg.exec(search)[1];
    // 设定默认页码
    page = page || 1;
    

    $.ajax({
        url : '/api/product/queryProductDetailList',
        type : 'get',
        data : {page : page,pageSize : pagesize},
        success : function(info){
            //console.log(info);
            var total = info.total;
            var pagelength = Math.ceil(total/pagesize);

            var html= template('tpl',info);

            var ht = template('ye',{
                pagelength :pagelength,
                page : page
            })

            $('.goods').html(html);

            $('.pagination').html(ht)

        }
    })

})