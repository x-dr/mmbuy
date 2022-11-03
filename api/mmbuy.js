import axios from "axios";

/**
 * 
 * @param {*} params - {url, method, headers, body}
 * @returns 
 */

const requestPromise = async (params) => {
// async function requestPromise(params) {
    return axios({
        url: params.url,
        method: params.method,
        headers: params.headers || headers,
        data: new URLSearchParams(params.body),
        validateStatus: status => {
            return status >= 200 && status < 400;
        },
        maxRedirects: 0
    })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(params.url, err)

            // throw Error(err)
            return err;
        })
}
/**
 * 
 * @param {string} p_url - url id
 */
const get_history = async (p_url) => {
    const res1 = await requestPromise({
        url: `https://apapia-history.manmanbuy.com/ChromeWidgetServices/WidgetServices.ashx`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 - mmbWebBrowse - ios'
        },
        method: 'POST',
        body: {
            'methodName': 'getHistoryTrend',
            'p_url': p_url
        }
        })

        return res1.data;
   
}



// get_history('https://item.m.jd.com/product/1000080000000000000.html').then(res => {

// console.log(get_history('100038004359'));

export default get_history

