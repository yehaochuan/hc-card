import axios from 'axios'


axios.interceptors.response.use(function (response) {
    // console.log(response);
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return error.response
  });


export default axios;