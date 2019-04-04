var BASE_URL = getHost();
// 判断开发环境还是生产环境
function getHost() {
    var hostname = location.hostname;
    var pathname = location.pathname;
    var contextPath = pathname.split("/")[1];
    var port = location.port;
    var protocol = location.protocol;
    return protocol + "//" + hostname + ":" + port;
}

console.log(BASE_URL);

var ROLES = {
    admin: 'admin',
    head_office: 'head_office',
    branch_office: 'branch_office',
    agency: 'agency',
    distributor: 'distributor',
    supervisor: 'supervisor',
    pressureor: 'pressureor',
    foreman: 'foreman',
    proprietor:'proprietor'
};

var pageSize = 20;

function setCookie(key, value) {
    if (key == null) return;
    if (value == null || $.trim(value).length == 0) {
        $.AMUI.utils.cookie.unset(key);
    }
    $.AMUI.utils.cookie.set(key, value);
}
