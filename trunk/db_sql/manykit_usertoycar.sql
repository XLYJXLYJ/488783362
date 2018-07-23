/*
create table of manykit_usertoycar
*/

-- ----------------------------
-- table structure for `manykit_usertoycar`
-- ----------------------------
DROP TABLE IF EXISTS `manykit_usertoycar`;

CREATE TABLE `manykit_usertoycar` (
  `id` int(32) unsigned NOT NULL AUTO_INCREMENT,
  -- 文件名
  `name` varchar(64) NOT NULL DEFAULT 'null',
  -- 标题
  `title` text,
  -- 描述
  `p_desc` longtext,
  -- 文件内容
  `content` longblob,
  -- 文件状态 0 未发布 1 已发布 2 暂时删除
  `state` int(16) unsigned NOT NULL DEFAULT '0',
  -- 文件类型 1 mini车 2 履带车
  `projecttype` int(16) unsigned NOT NULL DEFAULT '0',
  -- 用户id
  `userid` int(16) unsigned NOT NULL DEFAULT '0',
  -- 上传时间
  `create_time` timestamp,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11562 DEFAULT CHARSET=utf8;
CREATE INDEX manykit_usertoycar_name ON `manykit_usertoycar` (name);

-- ----------------------------
-- records of manykit_usertoycar
-- ----------------------------
INSERT INTO `manykit_usertoycar` VALUES ('1002', '123', '1', 'hello1', '','0','1','1','2018-04-03 11:42:17');