import neuronMethods from './neuron'

/*
  {
    "title": {
        "name": "DApp",
        "backgroundColor": "AAFFFFFF"
    },
    "left": {
        "name": "back",     // back：返回箭头  close：关闭叉号
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
  const o = {
    left: {
      name: 'back',
      action: 'jsFunction',
    },
    right: {
      isShow: false,
    },
  }
  const json = JSON.stringify(o)
  neuronMethods.setTitlebar(json)
}

const titlebarShow = () => {
  const o = {
    left: {
      name: 'back',
      action: 'jsFunction',
    },
    right: {
      isShow: true,
      action: 'jsFunction',
      type: 'share',
    },
  }
  const json = JSON.stringify(o)
  neuronMethods.setTitlebar(json)
}

export { titlebarNormal, titlebarShow }
