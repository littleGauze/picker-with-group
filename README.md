# picker-with-group
an simple encapsulation for meteorhacks:picker
###exsample
```javascript
Meteor.startup(() => {
    let registerRouters = Picker.setRoot('root').setGroups([
        {
            group: '/user',
            method: 'GET',
            routes: {
                '/': function (params, req, res, next) {
                    res.end('this is from /user/');
                },

                '/info': function (params, req, res, next) {
                    res.end('this is from /user/info');
                }
            },
            subGroups: [
                {
                    group: '/pay',
                    routes: {
                        '/wechat': function (params, req, res, next) {
                            res.end('this is from /user/pay/wechat');
                        },
                        '/alipay': function (params, req, res, next) {
                            res.end('this is from /user/pay/alipay');
                        }
                    }
                }
            ]
        },
        {
            group: '/user',
            routes: {
                '/': function (params, req, res, next) {
                    res.end('this msg from server by [GET]');
                }
            }
        }
    ]);

    console.log(' =========== registerRouters =========== ');
    console.log(registerRouters.join('\n'));
});
```
