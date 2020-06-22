const Mock = require('mockjs')
const appData = require('../../static/data/data.json')

Mock.mock('/api/appData', 'get', () => {
  return {
    code: 0,
    message: 'success',
    data: appData
  }
})

export default Mock
