/*
create table of manykit_userproject
*/

-- ----------------------------
-- table structure for `manykit_userproject`
-- ----------------------------
DROP TABLE IF EXISTS `manykit_userproject`;
-- CREATE TABLE `manykit_userproject` (
--   `id` int(32) unsigned NOT NULL,
--   `projectid` int(32) unsigned NOT NULL AUTO_INCREMENT,
--   `userid` varchar(32) NOT NULL DEFAULT '0',
--   `name` text,
--   `desc` longtext,
--   `content` longblob,
--   PRIMARY KEY (`projectid`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=11562 DEFAULT CHARSET=utf8;
-- CREATE INDEX manykit_userproject_id ON `manykit_userproject` (id);

CREATE TABLE `manykit_userproject` (
  `id` int(32) unsigned NOT NULL AUTO_INCREMENT,
  -- 文件名
  `name` varchar(64) NOT NULL DEFAULT 'null' COMMENT '文件名',
  -- 标题
  `title` text COMMENT '标题',
  -- 描述
  `desc` longtext COMMENT '描述',
  -- 文件内容
  `content` longblob COMMENT '文件内容',
  -- 观看的总人数
  `looktotal` varchar(64) NOT NULL DEFAULT 0 COMMENT '观看的总人数',
  -- 封面图
  `imgBuffer` longblob COMMENT '封面图',
  -- 封面图名字
  `imgname` text COMMENT '封面图名字',
  -- 封面图id
  `surfaceplot` varchar(64) NOT NULL DEFAULT 1 COMMENT '封面图id',
  -- 赞过的人
  `praise` longtext COMMENT '赞过的人',
  -- 赞过的总人数
  `praisetotal` varchar(64) NOT NULL DEFAULT 0 COMMENT '赞过的总人数',
  -- 收藏
  `collect` longtext COMMENT '收藏',
  -- 收藏过的总人数
  `collecttotal` varchar(64) NOT NULL DEFAULT 0 COMMENT '收藏过的总人数',
  -- 文件状态 0 未发布 1 已发布 2 暂时删除
  `state` int(16) unsigned NOT NULL DEFAULT '0' COMMENT '文件状态',
  -- 上传时间
  `create_time` datetime COMMENT '创建时间',
  -- 更新时间
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  -- 发布时间
  `publish_time` datetime COMMENT '发布时间',
  -- 删除时间
  `recycle_time` datetime COMMENT '删除时间',
  -- 用户id
  `userid` int(16) unsigned NOT NULL DEFAULT '0' COMMENT '用户id',

  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8;
CREATE INDEX manykit_userproject_name ON `manykit_userproject` (name);

-- ----------------------------
-- records of manykit_userproject
-- ----------------------------
-- INSERT INTO `manykit_userproject` VALUES ('1001', '10001', '1', 'hello', '', '');
-- -- INSERT INTO `manykit_userproject` VALUES ('1001', '10002', '1', 'hello1', '', '');
-- INSERT INTO `manykit_userproject` VALUES ('1001', 'many', '1', 'hello1', '','0','','1');
-- INSERT INTO `manykit_userproject` VALUES ('1002', '123', '1', 'hello1', '','0','2018-03-28 10:10:10','1');
-- INSERT INTO `manykit_userproject` VALUES ('1002', '123', '1', 'hello1', '', '','0', '','0','0','','1');
-- INSERT INTO `manykit_userproject` VALUES ('1002', '123', '1', 'hello1', '','','1', '','0', '','0','0','2018-03-28 17:12:15','1');