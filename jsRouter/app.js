window.onload = function () {
    var Router = function (el, routerConf) {
        var self = this;
        self.el = el;
        self.routerConf = routerConf;
        this.hashchange();
        window.onhashchange = self.hashchange.bind(self);
    }

    Router.prototype.hashchange = function (arg) {
        var self = this;
        var routerHTML = self.routerConf[location.hash.replace('#', '')];

        if (routerHTML === undefined) {
            routerHTML = (self.routerConf['/'] === undefined) ? '对不起，没有该路由！' : self.routerConf['/'] ;
        }
        self.el.innerHTML = routerHTML;
    }

    var homeHTML = '<object type="text/x-scriptlet" data="alert.html" width=100% height=300></object>';
    var detailHTML = '<h2>detail</h2>';
    var routerConf = {
        '/': homeHTML,
        '/home': homeHTML,
        '/detail': detailHTML
    };
    var router = new Router(document.querySelector('#app'), routerConf);
};
