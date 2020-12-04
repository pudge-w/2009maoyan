// 封装请求
const prefix = "http://pudge.wang:3080/api";
const http = {
  get(url, params) {
    // console.log(params);
    if (params) {
      // params: {a: 1, b: 2}
      // 目标 url?a=1&b=2
      let arr = Object.keys(params); // [a, b]
      url += "?";
      arr = arr.map(item => {
        return item + "=" + params[item];
      }); // ['a=1', 'b=2']
      url += arr.join("&");
    }
    return fetch(prefix + url).then(response => response.json());
  },
  post() {}
};

export default http;
