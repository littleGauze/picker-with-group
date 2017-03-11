# picker-with-group
an simple encapsulation for meteorhacks:picker

## how to use it
meteor add littlegauze:picker-with-group

###exsample
```javascript
Meteor.startup(() => {
    let registerRouters = Picker.setRoot('root').setGroups([
        {
            group: '/user',
            method: 'GET', //default is POST
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
                    res.end('this msg from server by [POST]');
                }
            }
        }
    ]);

    console.log(' =========== registerRouters =========== ');
    console.log(registerRouters.join('\n'));
});
```
