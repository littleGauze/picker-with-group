// Write your package code here!
import {Picker} from 'meteor/meteorhacks:picker';
import bodyParser from 'body-parser';

const HTTP_METHODS = ['POST', 'GET', 'DELETE', 'PUT'];

Picker.middleware(bodyParser.json());
Picker.middleware(bodyParser.text());
Picker.middleware(bodyParser.urlencoded({extended: false}));

_.extend(Picker.constructor.prototype, {
    setPath: function (path) {
        path = path.replace(/^\/+/, '');
        this._path = path;
    },
    setRoot: function (name = 'app') {
        let self = this;
        if (self._root) {
            return self._root;
        }
        HTTP_METHODS.forEach(function (method) {
            let pickerIns = self[method] = self.filter(function (req, res) {
                return method === req.method;
            });
            pickerIns.setPath(name);
        });

        self._root = self;
        return self;
    },
    setGroups: function (groups = [], parentMethod) {
        let self  = this;
        let registerRoutes = [];
        groups.map(function ({method, group, routes, subGroups}) {
            method = method || parentMethod || 'POST';
            method = method.toUpperCase();
            let ins = self[method];
            let path = ins._path + group;
            let groupReg = new RegExp('^\\/' + ins._path);
            let pickerIns = ins.filter(function (req, res) {
                return (method === req.method) && groupReg.test(req.url)
            });
            pickerIns.setPath(path);
            pickerIns[method] = pickerIns;

            _.keys(routes).forEach(function (key) {
                let routePath = ['/', path, key].join('');
                registerRoutes.push([method, routePath].join(' => '));
                pickerIns.route(routePath, routes[key]);
            });

            if (subGroups) {
                registerRoutes = registerRoutes.concat(pickerIns.setGroups(subGroups, method));
            }
        });

        return registerRoutes;
    }
});

export {Picker};