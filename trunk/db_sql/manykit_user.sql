/*
create table of manykit_user
*/

-- ----------------------------
-- table structure for `manykit_user`
-- ----------------------------
DROP TABLE IF EXISTS `manykit_user`;
CREATE TABLE `manykit_user` (
  `id` int(32) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL DEFAULT 'null' COMMENT '用户名',
  `mail` varchar(64) NOT NULL DEFAULT 'null' COMMENT '邮箱',
  `realname` varchar(32) NOT NULL DEFAULT 'null' COMMENT '真实姓名',
  `password` varchar(32) NOT NULL DEFAULT 'null' COMMENT '密码',
  `sex` int(16) unsigned NOT NULL DEFAULT '0' COMMENT '性别',
  `age` varchar(32) NOT NULL DEFAULT 'null' COMMENT '年龄',
  `phone` varchar(32) NOT NULL DEFAULT 'null' COMMENT '手机号',
  -- 用户头像
  `imgBuffer` longblob COMMENT '头像',
  -- 关于我
  `aboutme` longtext COMMENT '关于我',
  -- 我正在做的事
  `doing` longtext COMMENT '我正在做的事',
  -- 我的收藏
  `mycollect` longtext COMMENT '我的收藏',
  -- 我的关注
  `myattention` longtext COMMENT '我的关注',
  -- 关注我的
  `attentionme` longtext COMMENT 'attentionme',
  -- 我收藏的素材（素材+场景+学习+游戏+音乐）
  `mymaterial` longtext COMMENT '我收藏的素材',
  -- 封面作品
  `coverworkid` varchar(64) NOT NULL DEFAULT 'null' COMMENT '封面作品',
  -- 注册激活码
  `cdkey` varchar(32) NOT NULL DEFAULT 'null' COMMENT '注册激活码',
  -- 找回密码验证码
  `code` varchar(32) NOT NULL DEFAULT 'null' COMMENT '找回密码验证码',
  -- 账号状态 0 未激活 1 已激活
  `state` varchar(32) NOT NULL DEFAULT 'null' COMMENT '账号状态',
  -- 3D(我的粉丝)
  `attentionme3D` longtext COMMENT '我的粉丝3D素材',
  -- 3D(我的关注)
  `myattention3D` longtext COMMENT '我的关注3D素材',
  -- 3D(我的标签)
  `mytags` longtext COMMENT '我的标签3D素材',
  -- 3D(我的收藏)
  `mycollect3D` longtext COMMENT '我的收藏',
  -- 消息通知
  `message` longtext COMMENT '消息通知',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  -- 用户类型 0 网站注册 1 qq用户 2 微信用户
  `type` int(16) NOT NULL DEFAULT '0' COMMENT '用户类型',
  -- 第三方用户id 0 网站注册 1 qq用户 2 微信用户
  `openid` int(32) NOT NULL DEFAULT '0' COMMENT '第三方用户id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8;
CREATE INDEX manykit_user_username ON `manykit_user` (username);

-- ----------------------------
-- records of manykit_user
-- ----------------------------
-- INSERT INTO `manykit_user` VALUES ('1001', 'many', 'manyxu@foxmail.com', '许多','123456', "1", "","","","","","","","","","","","","1",timestamp,);
-- INSERT INTO `manykit_user` VALUES ('1002', 'manyxu', 'manyxu@foxmail.com', 'manyxu', 'manyxu', "1", "","");
-- INSERT INTO `manykit_user` VALUES ('1003', 'xuduo', 'manyxu@foxmail.com', 'xuduo', 'xuduo', "1", "","","");
-- INSERT INTO `manykit_user` VALUES (null, 'manykit', 'manyxu@foxmail.com','manykit', 'manykit', "1", "","","");
