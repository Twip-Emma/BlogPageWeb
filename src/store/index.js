/*
 * @Author: 七画一只妖
 * @Date: 2021-11-13 13:19:50
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-15 20:37:10
 * @Description: file content
 */

import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

const actions = {
    //注册新用户
    createNewUser(_, value) {
        axios.post("/api/register/newUser", value).then(
            response => {
                console.log(response.data)
            },
            error => {
                console.log(error.message)
            }
        )
    },

    //登录、并获取文章
    getInfo(context, userInfo) {
        axios.post("http://localhost:5000/login/goTo", userInfo).then(
            (resp) => {
                console.log(resp.data)
                axios.post("http://localhost:5000/article/getUserAllArticle").then(
                    (response) => {
                        context.commit("_setArticleList", response.data)
                    },
                    (error) => {
                        console.log(error.message);
                    }
                );
            },
            (error) => {
                console.log(error.message);
            }
        );
    },

    //获取文章详细信息以及所有评论
    getArticleInfoAndComment(context, article) {
        axios.post("/api/tool/findUserName", {
            userId: article.userId,
        }).then(
            (response) => {
                console.log(response.data);
                context.commit("_setArticle", article)
            },
            (error) => {
                console.log(error.message);
            }
        );
        axios.post("/api/article/getAllComment", article.articleId).then(
            (response) => {
                console.log("请求所有评论成功：" + JSON.stringify(response.data));
                context.commit("_setCommentInArticle", response.data)
            },
            (error) => {
                console.log(error.message);
            }
        );
    },

    //对文章的点赞点踩处理
    updateArticleEl(context, value) {
        axios.post("/api/article/articleElChange", value).then(
            (response) => {
                if (response.data === "操作失败") {
                    alert("你不能对本篇文章重复评价！！");
                } else {
                    if (value.type === "A") {
                        context.commit("_setArticleElChange", "articleGoodEl")
                    } else {
                        context.commit("_setArticleElChange", "articleBadEl")
                    }
                }
            },
            (error) => {
                console.log(error.message);
            }
        );
    },

    //对评论的点赞点踩处理
    updateCommentEl(context, value) {
        axios.post("/api/article/commentElChange", value).then(
            (req) => {
                if (req.data === "操作失败") {
                    alert("你不能对该评论重复评价！！");
                } else {
                    if (value.type === "A") {
                        context.commit("_setCommentElChange", { type: "commentGoodEl", index: value.commentId })
                    } else {
                        context.commit("_setCommentElChange", { type: "commentBadEl", index: value.commentId })
                    }
                }
            },
            (error) => {
                console.log(error.message);
            }
        );
    },

    //你对这篇文章写了新评论
    createNewComment(context, value) {
        axios.post("/api/article/newComment", value).then(

            () => {
                //发送一个新评论之后再次请求该文章全部评论
                axios.post("/api/article/getAllComment", value.articleId).then(
                    (response) => {
                        console.log("请求所有评论成功：" + JSON.stringify(response.data));
                        context.commit("_setCommentInArticle", response.data)
                    },
                    (error) => {
                        console.log(error.message);
                    }
                );

            },
            (error) => {
                console.log(error.message);
            }
        );
    },

    //你发表了新文章
    createNewArticle(context, value) {
        axios.post("/api/article/newArticle", value).then(
            () => {
                axios.post("http://localhost:5000/article/getUserAllArticle").then(
                    (response) => {
                        context.commit("_setArticleList", response.data)
                    },
                    (error) => {
                        console.log(error.message);
                    }
                );
            },
            (error) => {
                console.log(error.message);
            }
        );
    },
}




const mutations = {
    // 更新articleList
    _setArticleList(state, value) {
        state.articleList = value
    },

    // 加载一篇文章正文
    _setArticle(state, value) {
        state.articleInfo = value
    },

    // 加载一篇文章的所有评论
    _setCommentInArticle(state, value) {
        state.allcomment = value
    },

    // 更新文章的点赞点踩数量
    _setArticleElChange(state, value) {
        state.articleInfo[value] += 1
    },

    //更新评论的点赞点踩数量
    _setCommentElChange(state, value) {
        state.allcomment.forEach(element => {
            if (element.commentId === value.index) {
                element[value.type] = Number(element[value.type]) + 1
            }
        });
    }
}
const state = {
    articleList: [],
    articleInfo: {},
    allcomment: [],
}
const getters = {
}

export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters
})