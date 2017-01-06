/**
 * Created by zyy on 2017/1/6.
 */



(function () {
    $ = function(selector) {
        return document.querySelector(selector);
    }

    var timer = null;
    var nodeList;
    var BFindex; //广度优先遍历自增标志
    var rootnode = $('.level0');


    var Operation = {
        addClass: function addClass(element, className) {
            element.className = element.className ? [element.className, className].join(' ') : className;

        },

        removeClass: function (element, className) {
            var classNames = element.className.split(/\s+/);
            for (var i = 0, len = classNames.length; i < len; i++) {
                if (classNames[i] === className) {
                    classNames.splice(i, 1);
                    break;
                }
            }
            element.className = classNames.join(' ');

        },
        addEvent: function (element, type, listener) {

            if (element.addEventListener) {
                element.addEventListener(type, listener, false);
            }
            else if (element.attachEvent) {
                element.attachEvent('on' + type, listener);
            }
            return element;

        }

    }


    var TBT = {
        traverseDF: function (node) {
            if (node !== null) {
                nodeList.push(node);
                for (var i = 0; i < node.children.length; i++) {
                        arguments.callee(node.children[i]);
                }
            }
        },

        traverseBF: function (node) {
            nodeList[0] = rootnode;
            if (node !== null) {
                for (var i = 0; i < node.children.length; i++) {
                    nodeList.push(node.children[i]);
                }
                if (BFindex < nodeList.length) {
                    arguments.callee(nodeList[BFindex++]);
                }
            }

        },
        resetData :function () {
            if (nodeList !=null) {
                [].forEach.call(nodeList, function (item) {
                    Operation.removeClass(item, 'active');
                });
            }

        },

        startTraverse : function () {
            TBT.resetData();
            nodeList = [];
            BFindex = 1; //广度自增标志
            clearInterval(timer);

            switch (this.id){
                case 'DFtraverse' :
                    TBT.traverseDF(rootnode);
                    TBT.visit();
                    break;
                case 'DFsearch' :
                    TBT.traverseDF(rootnode);
                    TBT.visit($('input'));
                    break;
                case 'BFtraverse':
                    TBT.traverseBF(rootnode);
                    TBT.visit();
                    break;
                case 'BFsearch' :
                    TBT.traverseBF(rootnode);
                    TBT.visit($('input'));
                    break;
            }

        },

        visit: function (query) {
            var i = -1;
            var querytext = (query != null )? query.value :'';

            function search() {
                //如果前一个node的值与查询标志不同，则消除他的颜色
                if( (i > 0)  && ((nodeList[i-1].firstChild.nodeValue.trim().toLowerCase() != querytext.toLowerCase()) ||(querytext ===''))) {
                    Operation.removeClass(nodeList[i - 1], 'active');
                }
            }

            timer = setInterval(function () {
                i++;
                if (i < nodeList.length) {
                    search();
                    Operation.addClass(nodeList[i], 'active');
                }
                else {
                    clearInterval(timer);
                    search();
                }

            }, 500);
        },

        init: function () {
            Operation.addEvent($('#DFtraverse'), 'click', this.startTraverse);
            Operation.addEvent($('#BFtraverse'), 'click', this.startTraverse);
            Operation.addEvent($('#DFsearch'), 'click', this.startTraverse);
            Operation.addEvent($('#BFsearch'), 'click', this.startTraverse);
        }

    }

    TBT.init();

})();