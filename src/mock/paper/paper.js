/*
 * @Author: wdy
 * @Date:   2018-06-13 10:23:33
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-26 10:56:35
 */
const normalPaperList = {
  total: 400,
  'rows|20': [{
    'paperId|+1': 1,
    paperName: function () {
      return `正式题卷测试${this.paperId}`
    },
    paperType: 1,
    paperStatus: function () {
      return Math.round(Math.random())
    },
    createdDate: '@datetime',
    updatedDate: '@datetime'
  }]
};

const randomPaperList = {
  total: 400,
  'rows|20': [{
    'paperId|+1': 1,
    paperName: function () {
      return `随机题卷测试${this.paperId}`
    },
    paperType: 0,
    paperStatus: function () {
      return Math.round(Math.random())
    },
    createdDate: '@datetime',
    updatedDate: '@datetime'
  }]
};
export {
  normalPaperList,
  randomPaperList
}
