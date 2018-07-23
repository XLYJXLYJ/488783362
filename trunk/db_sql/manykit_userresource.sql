/*
create table of manykit_userresource
*/

-- ----------------------------
-- table structure for `manykit_userresource`
-- ----------------------------
DROP TABLE IF EXISTS `manykit_userresource`;
CREATE TABLE `manykit_userresource` (
  `id` int(32) unsigned NOT NULL AUTO_INCREMENT,
  `type` int(16) NOT NULL DEFAULT '0' COMMENT '类型',
  `filetype` text COMMENT '文件类型',
  `name` text COMMENT '后缀名',
  -- 模型地址
  `modelsrc` text COMMENT '模型地址',
  -- 模型类型
  `mimetype` text COMMENT '模型类型',
  -- 标题
  `title` text COMMENT '标题',
  `tags` text COMMENT 'tags',
  -- 描述
  `desc` longtext COMMENT '描述',
  -- 文件内容
  `content` longblob COMMENT '文件内容',
  -- 观看的总人数
  `looktotal` varchar(64) NOT NULL DEFAULT 0 COMMENT '观看的总人数',
  -- 封面图
  `imgBuffer` longblob COMMENT '封面图',
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
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  -- 发布时间
  `publish_time` datetime COMMENT '发布时间',
  -- 删除时间
  `recycle_time` datetime COMMENT '删除时间',
  -- 用户id
  `userid` int(16) unsigned NOT NULL DEFAULT '0' COMMENT '用户id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8;
CREATE INDEX manykit_userresource_id ON `manykit_userresource` (id);

-- ----------------------------
-- records of manykit_userresource
-- ----------------------------
