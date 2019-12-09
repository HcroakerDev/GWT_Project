-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: gwt_db
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` varchar(1000) NOT NULL,
  `subjectURL` varchar(45) DEFAULT NULL,
  `posted` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (15,'Test Post 1','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare commodo bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur consectetur augue sed risus lacinia fermentum. In sit amet hendrerit turpis. Pellentesque molestie sapien quis nulla aliquam, quis volutpat justo ultrices. Quisque sagittis, enim sed sodales sollicitudin, ligula turpis placerat ex, a dignissim enim ligula id nisi. Nullam at diam diam. Aliquam erat volutpat. Suspendisse pharetra nisi lacus, eget viverra erat mollis nec. Fusce gravida enim eget velit suscipit pretium. Sed quis dui ac lacus imperdiet rhoncus sit amet et ligula. Aliquam et mi iaculis, interdum nunc sit amet, pretium augue. Nulla tristique porta aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a velit a sapien varius volutpat. Duis dui mauris, porttitor at tellus vel, bibendum eleifend mauris.',NULL,'2019-12-09 01:19:55','lifestyle'),(16,'Global Video','Mauris venenatis ornare orci. Nullam molestie, ligula quis feugiat fermentum, urna lorem pulvinar ipsum, vitae cursus felis lacus at sapien. Nunc sit amet velit a erat commodo molestie vel quis nisl. Duis vestibulum et diam faucibus tincidunt. Nullam placerat vehicula vehicula. Aliquam ultrices egestas libero, in venenatis purus lobortis sed. Praesent luctus mauris in molestie auctor. Fusce volutpat lorem sit amet ex efficitur, vel suscipit quam tristique. Vestibulum quis ullamcorper lacus, quis auctor velit. Nullam pharetra commodo magna, ac finibus massa. Aenean nec odio tempor, interdum arcu at, lacinia ante. Aenean blandit ex id turpis ultrices mattis. Etiam vitae eros at nibh molestie ullamcorper.','https://www.youtube.com/embed/bApwtujc0bo','2019-12-09 01:20:49','video'),(17,'Test Post 3','Ut turpis sem, vestibulum sed sollicitudin nec, dignissim a nibh. Phasellus sollicitudin ex nec lacinia ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent consequat, ipsum non euismod porta, sapien ligula suscipit arcu, ac dictum purus neque sit amet sem. Phasellus finibus sit amet velit at auctor. Morbi lacinia laoreet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In luctus faucibus rhoncus. Praesent facilisis porttitor mauris quis volutpat.',NULL,'2019-12-09 01:21:46','travel'),(18,'Test Post 4','In sit amet ipsum a purus interdum condimentum ut quis ipsum. Curabitur tristique, dui ac fermentum luctus, nulla nisi porttitor est, commodo viverra urna metus sed nibh. Mauris ut elementum lectus. In sed turpis id libero malesuada viverra. Pellentesque auctor ex ante, consequat euismod turpis dignissim in. Integer posuere lacus et risus lobortis feugiat. Nulla egestas lectus non nisi rutrum condimentum. Cras consectetur sapien rutrum, consequat eros id, efficitur lorem. Cras sed pulvinar nibh.',NULL,'2019-12-09 01:23:19','lifestyle'),(19,'Test Post 5','Donec rutrum ex dolor, nec vestibulum orci bibendum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam eu orci a purus vehicula euismod. Suspendisse gravida nibh et neque lobortis, quis tincidunt est ornare. Nulla gravida pretium ante. Etiam ac turpis vulputate, porttitor quam id, cursus urna. Nulla odio nisi, aliquam vitae mauris in, tempor porta velit. Nam a ligula ac ligula viverra rutrum id nec sem.','https://www.youtube.com/embed/hIrP0KdDZ0A','2019-12-09 09:18:05','travel'),(20,'Test post 6','In sit amet ipsum a purus interdum condimentum ut quis ipsum. Curabitur tristique, dui ac fermentum luctus, nulla nisi porttitor est, commodo viverra urna metus sed nibh. Mauris ut elementum lectus. In sed turpis id libero malesuada viverra. Pellentesque auctor ex ante, consequat euismod turpis dignissim in. Integer posuere lacus et risus lobortis feugiat. Nulla egestas lectus non nisi rutrum condimentum. Cras consectetur sapien rutrum, consequat eros id, efficitur lorem. Cras sed pulvinar nibh.',NULL,'2019-12-09 10:03:00','travel'),(21,'Test post 7','Mauris venenatis ornare orci. Nullam molestie, ligula quis feugiat fermentum, urna lorem pulvinar ipsum, vitae cursus felis lacus at sapien. Nunc sit amet velit a erat commodo molestie vel quis nisl. Duis vestibulum et diam faucibus tincidunt. Nullam placerat vehicula vehicula. Aliquam ultrices egestas libero, in venenatis purus lobortis sed. Praesent luctus mauris in molestie auctor. Fusce volutpat lorem sit amet ex efficitur, vel suscipit quam tristique. Vestibulum quis ullamcorper lacus, quis auctor velit. Nullam pharetra commodo magna, ac finibus massa. Aenean nec odio tempor, interdum arcu at, lacinia ante. Aenean blandit ex id turpis ultrices mattis. Etiam vitae eros at nibh molestie ullamcorper.',NULL,'2019-12-09 10:40:40','lifestyle'),(25,'Test Post 8','Donec rutrum ex dolor, nec vestibulum orci bibendum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam eu orci a purus vehicula euismod. Suspendisse gravida nibh et neque lobortis, quis tincidunt est ornare. Nulla gravida pretium ante. Etiam ac turpis vulputate, porttitor quam id, cursus urna. Nulla odio nisi, aliquam vitae mauris in, tempor porta velit. Nam a ligula ac ligula viverra rutrum id nec sem.','https://www.youtube.com/embed/thnMl3a6s9w','2019-12-09 12:06:03','travel');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-09 12:38:20
