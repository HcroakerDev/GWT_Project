CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` varchar(1000) NOT NULL,
  `subjectURL` varchar(255) DEFAULT NULL,
  `posted` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
)