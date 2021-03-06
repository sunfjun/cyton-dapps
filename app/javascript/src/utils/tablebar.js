import cytonMethods from './cyton'
import {
  log
} from './index'

/*
  {
    "title": {
        "name": "DApp",
        "backgroundColor": "AAFFFFFF"
    },
    "left": {
        "type": "back",     // back：返回箭头  close：关闭叉号
        "action": "jsFunction",
    },
    "right": {
        "isShow": true,
        "action": "jsFunction"
        "type": "menu" // menu：三横线折叠菜单  share：分享  something: 自定义
    },

}
*/

const titlebarNormal = () => {
  const config = {
    left: {
      type: 'back',
    },
    right: {
      isShow: false,
    },
  }
  const json = JSON.stringify(config)
  cytonMethods.setTitlebar(json)
}

const titlebarShow = () => {
  const config = {
    left: {
      type: 'back',
    },
    right: {
      isShow: true,
      type: 'share',
    },
  }
  const json = JSON.stringify(config)
  cytonMethods.setTitlebar(json)
}

export {
  titlebarNormal,
  titlebarShow
}
