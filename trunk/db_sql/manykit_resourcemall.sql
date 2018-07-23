/*
create table of manykit_resourcemall
*/

-- ----------------------------
-- table structure for `manykit_resourcemall`
-- ----------------------------
DROP TABLE IF EXISTS `manykit_resourcemall`;
CREATE TABLE `manykit_resourcemall` (
  `id` int(32) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL DEFAULT 'null',
  `type` varchar(32) NOT NULL DEFAULT 'null',
  `content` longblob,
  `onenav` varchar(32) NOT NULL DEFAULT '0',
  `twonav` varchar(32) NOT NULL DEFAULT '0',
  `threenav` varchar(32) NOT NULL DEFAULT '0',
  `fournav` varchar(32) NOT NULL DEFAULT '0',
  `price` varchar(32) NOT NULL DEFAULT '0',
  -- 采集过的用户
  `collectUser` longtext,
   -- 采集过的用户总人数
  `collectTotal` varchar(32) NOT NULL DEFAULT '0',
  -- `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8;
CREATE INDEX manykit_resourcemall_id ON `manykit_resourcemall` (id);

-- ----------------------------
-- records of manykit_resourcemall
-- ----------------------------
