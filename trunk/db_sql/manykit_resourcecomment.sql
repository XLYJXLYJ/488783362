/*
create table of manykit_resourcecomment(3D素材评论表)
*/

-- ----------------------------
-- table structure for `manykit_resourcecomment`
-- ----------------------------
DROP TABLE IF EXISTS `manykit_resourcecomment`;
CREATE TABLE `manykit_resourcecomment` (
  `id` int(32) unsigned NOT NULL AUTO_INCREMENT,
  `resourceid` int(16) NOT NULL COMMENT '3D素材ID',
  `commentatorid` int(16) NOT NULL COMMENT '评论人ID',
  `bycommentatorid` int(16) NOT NULL COMMENT '被评论人ID',
  -- 1 为评论作者 2 为 回复评论
  `type` int(16) NOT NULL COMMENT '评论类型',
  `index` varchar(128) NOT NULL COMMENT '评论3D素材',
  -- 评论
  `content` longtext COMMENT '评论内容',
  -- 评论时间
  `comment_time` datetime COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8;
CREATE INDEX manykit_resourcecomment_id ON `manykit_resourcecomment` (id);

-- ----------------------------
-- records of manykit_resourcecomment
-- ----------------------------
