import Mock from 'mockjs'
import {param2Obj} from '../utils'

const nameList = []
const count = 100

for (let i = 0; i < count; i++) {
  nameList.push(Mock.mock({
    name: '@first'
  }))
}
nameList.push({name: 'mockPan'})

export default {
  searchUser: config => {
    const {name} = param2Obj(config.url)
    const mockNameList = nameList.filter(item => {
      const lowerCaseName = item.name.toLowerCase()
      if (name && lowerCaseName.indexOf(name.toLowerCase()) < 0) {
        return false
      }
      return true
    })
    return {items: mockNameList}
  }
}
