const base = {
    get() {
        return {
            url : "http://localhost:8080/ketangdianmingxitong/",
            name: "ketangdianmingxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ketangdianmingxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "课堂点名系统"
        } 
    }
}
export default base
