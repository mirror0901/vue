import Mock from 'mockjs'

const list = []
const count = 20

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    order_no: '@guid()',
    timestamp: +Mock.Random.data('T'),
    username: '@name()',
    price: '@float(1000,15000,0,2)',
    'status|1': ['success', 'pending']
  }))
}

export default {
  getList: () => {
    return {
      total: list.length,
      items: list
    }
  }
}
