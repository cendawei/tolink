/**
 * Created by cendawei on 2017/4/13.
 */
var u = navigator.userAgent;
if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    window.location.href = 'http://www.sina.cn'
} else {
    window.location.href = 'http://www.baidu.com'
}