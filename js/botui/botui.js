/*！
 * Sakura 
 * @fixed Javid
 * @url https://javidxi.xyz
 * @date 2020.03.25
 */
function bot_ui_ini() {
    var botui = new BotUI("hello-mashiro");
    botui.message.add({
        delay: 800,
        content: "こんにちは, 新来的小伙伴！"
    }).then(function () {
        botui.message.add({
            delay: 1200,
            content: "这里是 Javid👀"
        }).then(function () {
            botui.message.add({
                delay: 1200,
                content: "一个开朗又害羞的男孩纸…"
            }).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{
                        text: "然后呢? 😃",
                        value: "sure"
                    }, {
                        text: "磨磨唧唧！ 🙄",
                        value: "skip"
                    }]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
            botui.message.add({
                delay: 600,
                content: "😘"
            }).then(function () {
                secondpart()
            })
        },
        end = function () {
            botui.message.add({
                delay: 600,
                content: "![...](https://cdn.jsdelivr.net/gh/Javid-Xi/cdn@2.2.0/img/material/rp-dora1.jpg)"
            })
        },
        secondpart = function () {
            botui.message.add({
                delay: 1500,
                content: "目前是某211的大学生👦"
            }).then(function () {
                botui.message.add({
                    delay: 1500,
                    content: "平时可能比较逗比…（少しだけ~😜）"
                }).then(function () {
                    botui.message.add({
                        delay: 1500,
                        content: "有时候也喜欢一个人静静的听歌…（曾经的半个烧友💽）"
                    }).then(function () {
                        botui.message.add({
                            delay: 1500,
                            content: "研究方向是嵌入式相关，主攻Linux和C/C++，略懂Java和Python"
                        }).then(function () {
                            botui.message.add({
                                delay: 1300,
                                content: "目前为了建站又开始折腾HTML/CSS/JavaScript/PHP了😅"
                            }).then(function () {
                                botui.message.add({
                                    delay: 1800,
                                    content: "兴趣也是很广泛啦"
                                }).then(function () {
                                    botui.action.button({
                                        delay: 1100,
                                        action: [{
                                            text: "现在在做什么呢 🤔",
                                            value: ""
                                        }]
                                    }).then(function (a) {
                                        thirdpart()
                                    })
                                })
                            })
                        })
                    })
                })
            })
        },
        thirdpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "学学日语和英语，刷刷Leetcode😷"
            }).then(function () {
                botui.message.add({
                    delay: 1200,
                    content: "研究研究SLAM和自主导航算法"
                }).then(function () {
                    botui.message.add({
                        delay: 1200,
                        content: "闲了建建站，溜溜狗"
                    }).then(function () {
                        botui.message.add({
                            delay: 1500,
                            content: "(欧冠没了好无聊呀~~~😣)"
                        }).then(function () {
                            botui.action.button({
                                delay: 1100,
                                action: [{
                                    text: "未来有什么计划呢？ 🤔",
                                    value: "sure2"
                                }, {
                                    text: "为什么要做网站呢？",
                                    value: "sure3"
                                }]
                            }).then(function (a) {
                                "sure2" == a.value && sure2();
                                "sure3" == a.value && sure3()
                            })
                        })
                    })
                })
            })
        };
        var sure2 = function () {
            botui.message.add({
                delay: 1000,
                content: "未来打算出国留学"
            }).then(function() {
                botui.message.add({
                    delay: 1500,
                    content: "目前有几个我比较中意的机器人实验室非常想去😁"
                }).then(function() {
                    botui.message.add({
                        delay: 1500,
                        content: "现在也在努力提升自己，尤其是我的英语😂"
                    }).then(function() {
                        botui.message.add({
                            delay: 1500,
                            content: "自己不懂的和要学的太多了"
                        }).then(function() {
                            botui.message.add({
                                delay: 1500,
                                content: "各位以后还请多多指教啊😊"
                            }).then(function() {
                                botui.action.button({
                                    delay: 1100,
                                    action: [{
                                        text: "加油哈👊！另外很想知道为什么叫Javid呢？🤔",
                                        value: ""
                                    }]
                                }).then(function() {
                                    fourpart()
                                })
                            })
                        })
                    })
                })
            })
        },
            sure3 = function () {
                botui.message.add({
                    delay: 1000,
                    content: "这个原因是多方面的😂😂"
                }).then(function() {
                    botui.message.add({
                        delay: 1500,
                        content: "一方面是看了某前端大佬的视频，受到的启发；"
                    }).then(function() {
                        botui.message.add({
                            delay: 1500,
                            content: "一方面是自己很早就打算建一个个人博客网站来记录自己的成长；"
                        }).then(function() {
                            botui.message.add({
                                delay: 1500,
                                content :"还有一方面是听到某学姐说他一个师兄，因为会做网站，教授帮忙给申了一笔高额奖学金还给找了个兼职😂"
                            }).then(function() {
                                botui.message.add({
                                    delay: 1500,
                                    content: "其实最主要的还是自己从小就是一个对未知领域很感兴趣的人，尤其是对未知的技能。"
                                }).then(function() {
                                    botui.message.add({
                                        delay: 1500,
                                        content: "毕竟技多不压身嘛，趁年轻多学点😁"
                                    }).then(function() {
                                        botui.action.button({
                                            delay: 1100,
                                            action: [{
                                                text: "加油呀！！另外很想知道为什么叫Javid呢？🤔",
                                                value: ""
                                            }]
                                        }).then(function() {
                                            fourpart()
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            },
            fourpart = function () {
                botui.message.add({
                    delay: 1500,
                    content: "以我幼儿园水平英语就只能挤出这么个单词了..."
                }).then(function () {
                    botui.message.add({
                        delay: 1200,
                        content: "凑合看吧😂"
                    }).then(function () {
                        botui.action.button({
                            delay: 1600,
                            action: [{
                                text: "挺好听的呢😃",
                                value: "sure"
                            }, {
                                text: "是有点难听🙄",
                                value: "skip"
                            }]
                        }).then(function (a) {
                            "sure" == a.value && sure1();
                            "skip" == a.value && end1()
                        })
                    })
                })
            }
            var sure1 = function () {
                botui.message.add({
                    delay: 600,
                    content: "😘💕💓"
                }).then(function () {
                    fifthpart()
                })
            },
            end1 = function () {
                botui.message.add({
                    delay: 600,
                    content: "![...](https://cdn.jsdelivr.net/gh/Javid-Xi/cdn@2.2.0/img/material/rp-dora1.jpg)"
                })
            },
            fifthpart = function () {
                botui.message.add({
                    delay: 1200,
                    content: "啊哈哈哈哈哈哈hhhh，谢谢啦"
                }).then(function () {
                    botui.message.add({
                        delay: 1500,
                        content: "下面就请愉快的地欣赏我的博客吧！"
                    }).then(function () {
                        botui.message.add({
                            delay: 1300,
                            content: "ゆっくりみましょう！😁"
                        }).then(function(){
                            botui.message.add({
                                delay: 800,
                                content: "![...](https://cdn.jsdelivr.net/gh/Javid-Xi/cdn@2.2.0/img/material/rp-dora2.gif)"
                            })
                        })
                    })
                })
            }
}
