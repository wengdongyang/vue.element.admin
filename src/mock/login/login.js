/*
 * @Author: wdy
 * @Date:   2018-06-13 10:23:33
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-26 15:04:11
 */
const login = {
  sessionId: '@guid',
  userType: 'admin'
};
const userPower = {
  // 左侧菜单
  menu: [{
    icon: 'fa-file-text',
    name: '题卷列表',
    path: 'paperList',
    children: [{
      name: '普通题卷列表',
      path: 'normalPaperList'
    }, {
      name: '随机题卷列表',
      path: 'randomPaperList'
    }]
  }, {
    icon: 'fa-map-o',
    name: '活动列表',
    path: 'activityList'
  }, {
    icon: 'fa-question',
    name: '题库',
    path: 'questionBank'
  }, {
    icon: 'fa-file-image-o',
    name: '广告图片',
    path: 'advertisingPicture'
  }, {
    icon: 'fa-database',
    name: '数据标准化',
    path: 'dataStandardization',
    children: [{
      name: '类目',
      path: 'type'
    }, {
      name: '属性',
      path: 'attribute'
    }, {
      name: '属性值',
      path: 'attributeValue'
    }, {
      name: '颜色',
      path: 'color'
    }, {
      name: '颜色组',
      path: 'colorGroup'
    }, {
      name: '尺码域',
      path: 'sizeArea'
    }, {
      name: '尺码',
      path: 'size'
    }, {
      name: '尺码组',
      path: 'sizeGroup'
    }, {
      name: '审核',
      path: 'audit'
    }]
  }, {
    icon: 'fa-asterisk',
    name: '系统参数',
    path: 'systemParameter'
  }, {
    icon: 'fa-tag',
    name: '参数标签',
    path: 'parameterTags'
  }, {
    icon: 'fa-tags',
    name: '参数组合',
    path: 'parameterGroup'
  }, {
    icon: 'fa-dot-circle-o',
    name: '投票活动',
    path: 'votingActivity'
  }],
  // 异步路由
  asynRouter: [{
    path: '/paperList',
    children: [{
      path: 'normalPaperList'
    }, {
      path: 'randomPaperList'
    }]
  }, {
    path: '/activityList',
    children: [{
      path: 'index'
    }]
  }, {
    path: '/questionBank',
    children: [{
      path: 'index'
    }]
  }, {
    path: '/advertisingPicture',
    children: [{
      path: 'index'
    }]
  }, {
    path: '/dataStandardization',
    children: [{
      path: 'type'
    }, {
      path: 'attribute'
    }, {
      path: 'attributeValue'
    }, {
      path: 'color'
    }, {
      path: 'colorGroup'
    }, {
      path: 'sizeArea'
    }, {
      path: 'size'
    }, {
      path: 'sizeGroup'
    }, {
      path: 'audit'
    }]
  }, {
    path: '/systemParameter',
    children: [{
      path: 'index'
    }]
  }, {
    path: '/parameterTags',
    children: [{
      path: 'index'
    }]
  }, {
    path: '/parameterGroup',
    children: [{
      path: 'index'
    }]
  }, {
    path: '/votingActivity',
    children: [{
      path: 'index'
    }]
  }]
}

export {
  login,
  userPower
}
