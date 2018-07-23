/*
create table of manykit_auth
*/

-- ----------------------------
-- table structure for `manykit_auth`
-- ----------------------------
DROP TABLE IF EXISTS `manykit_auth`;
CREATE TABLE `manykit_auth` (
  `id` int(16) unsigned NOT NULL DEFAULT '0',
  `userid` varchar(32) NOT NULL DEFAULT '',
  `identity_type` varchar(16) DEFAULT NULL,
  `identifier` varchar(32) NOT NULL DEFAULT '',
  `credential` varchar(32) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- records of manykit_account
-- ----------------------------
