var version = `#会员C端，会议／内容／裂变海报等
define('JS_VERSION', '1.28860');
#会员管理B端
define('JS_VERSION_SVIP','1.177807'); 
# 联合利华
define('JS_VERSION_EXPIRY', '1.10053');
# 素材管理
define('JS_VERSION_MATERIAL', '1.1006999');
# 自定义菜单管理
define('JS_VERSION_WECHATMENU', '1.22194');
# 关键词回复
define('JS_VERSION_WECHATREPLY', '1.10070');
# 群发项目
define('JS_VERSION_MASS', '1.10162');
# 调查问卷
define('JS_VERSION_SURVEY', '1.89147');
# 留言版APP版本号
define('JS_VERSION_MESSAGE', '1.10024');
# 门店管理APP版本号
define('JS_VERSION_SHOP', '1.10035');
# 微调研
define('JS_VERSION_RESEARCH', '1.10026');
# 微投票
define('JS_VERSION_VOTE', '1.10019');
# 喜帖 zaki 2014-2-10
define('JS_VERSION_INVITATIONS', '1.1008');
# 微预约
define('JS_VERSION_RESERVE', '1.100462');
# 微汽车
define('JS_VERSION_CAR', '1.110022');
# 微相册App版本号
define('JS_VERSION_ALBUM', '1.10012');
# 优惠券
define('JS_VERSION_COUPONS', '1.1006');
# 微房产
define('JS_VERSION_ESTATE', '1.10015');
# 微医疗
define('JS_VERSION_MEDICAL', '1.10019');
# 砸金蛋 zaki 2014-2-24
define('JS_VERSION_HITGLODEGG', '1.10040');
# 微会员
define('JS_VERSION_VIP','1.10053');
# 全景图
define('JS_VERSION_PANORAMIC', '1.10029');
# admin后台
define('JS_VERSION_SUPER', '1.10016');
# 微商城
define('JS_VERSION_MALL', '1.100053');
# 微信墙
define('JS_VERSION_WALL', '1.10029895');
# 微邀请
define('JS_VERSION_INVITE', '1.10031');
# 微商场
define('JS_VERSION_MARKET', '1.10029832');
# 数据统计
define('JS_VERSION_WEIBO' , '1.10053');
# 战役
define('JS_VERSION_BATTLE', '1.10006');

# 粉丝应用管理
define('JS_VERSION_FANS', '1.1006');

# 二维码
define('JS_VERSION_QRCODE','1.00477');

define('JS_VERSION_CUSTOMERS','1.17940');

define('SVIP_COOKIE_VERSION', "1.0091");

//scrm中的版本号

define('SCRM_JS_VERSION','1.60409');

define('SCRM_CS_VERSION','1.60409');

//自动化营销的版本号

//自动化营销版本号
define('MARKETING_CSS_VERSION', '1.00143');
define('MARKETING_JS_VERSION', '1.00143');`


version.replace(/\'1.*\'/g, (item) => {
  return item.replace(/\'/g)
  console.log(item);
  // item.replace(/\'/g, (item2) => {
  //   item
  // })
})
console.log(version)