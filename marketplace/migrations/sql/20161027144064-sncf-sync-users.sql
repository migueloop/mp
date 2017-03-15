-- MySQL dump 10.13  Distrib 5.7.14, for Linux (x86_64)
--
-- Host: localhost    Database: marketplace_sncf
-- ------------------------------------------------------
-- Server version	5.7.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SequelizeMeta`
--

drop database if exists marketplace_sncf;

create database marketplace_sncf;

use marketplace_sncf;

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `SequelizeMeta_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20160420153406-proabono.js'),('20160426163482-acl_setup.js'),('20160503094102-bundle.js'),('20160510134174-delete-user.js'),('20160511125936-admin-profile-company.js'),('20160518122420-acl-uservoice.js'),('20160524130284-orders-permissions.js'),('20160531172735-assignment-permissions.js'),('20160531172778-assignment.js'),('20160603122034-add-change-product-owner-permission.js'),('20160609163900-assignment-posystem.js'),('20160616132203-add-product-type.js'),('20160620153658-assigment_order-remove-add-columns.js'),('20160630122221-enable-product-features.js'),('20160712125324-product_timeline.js'),('20160713130351-populate_timelines_steps_1.js'),('20160714135677-modify_includes_po_from_product_timeline_steps_executor.js'),('20160719130114-add_timeline_to_products.js'),('20160720120204-add-product-assignment-options.js'),('20160824142451-add-external-workflow-for-assignment-orders.js'),('20160829095191-fix-timeline-executor_id-column.js'),('20160906171834-add-stock-table.js'),('20160912121125-add-gdpid-assignment-order.js'),('20160926152675-add-product-follow-ups.js'),('20160927114155-follow-ups.js'),('20160928164055-assignment-order-followups-add-demo-cols.js'),('20160929160383-remove-follow-up-state-column.js'),('20160929181981-add-follow-up-id-to-assignment-order-follow-up.js'),('20161004125267-tidy-follow-ups.js'),('20161004132680-add-timeline-type-column.js'),('20161004135248-add-follow-up-timeline-data.js'),('20161005123924-update-timeline-data.js'),('20161005165097-force-timeline-steps-unique.js'),('20161005174808-fix-product-follow-ups-data.js'),('20161007131127-update-timeline-step-data.js'),('20161011103623-comments-table.js'),('20161012114145-notifications.js'),('20161027095035-user-foreignkeys.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activity_field`
--

DROP TABLE IF EXISTS `activity_field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activity_field` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_field`
--

LOCK TABLES `activity_field` WRITE;
/*!40000 ALTER TABLE `activity_field` DISABLE KEYS */;
/*!40000 ALTER TABLE `activity_field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `alias` varchar(55) DEFAULT NULL,
  `baseline` varchar(225) DEFAULT NULL,
  `description` text,
  `summary` text,
  `created_by` int(11) DEFAULT NULL,
  `creation_date` bigint(32) NOT NULL,
  `last_update` bigint(32) DEFAULT NULL,
  `publication_date` bigint(32) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `logo` int(11) DEFAULT NULL,
  `main_picture` int(11) DEFAULT NULL,
  `editor_information` int(11) DEFAULT NULL,
  `type` enum('Article','Interview','WhiteBook') DEFAULT 'Article',
  `editor_homepage` varchar(150) DEFAULT NULL,
  `editor_legal_mentions` varchar(150) DEFAULT NULL,
  `editor_description` text,
  `editor_logo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_article_editor_idx` (`created_by`),
  KEY `fk_article_item_state_idx` (`state`),
  KEY `fk_article_logo_idx` (`logo`),
  KEY `fk_article_main_picture_idx` (`main_picture`),
  KEY `fk_article_editor_logo_idx` (`editor_logo`),
  CONSTRAINT `fk_article_editor` FOREIGN KEY (`created_by`) REFERENCES `user_profile` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_article_editor_logo` FOREIGN KEY (`editor_logo`) REFERENCES `item_resource` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_article_item_state` FOREIGN KEY (`state`) REFERENCES `item_state` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_article_logo` FOREIGN KEY (`logo`) REFERENCES `item_resource` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_article_main_picture` FOREIGN KEY (`main_picture`) REFERENCES `item_resource` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'Donnez un titre à votre article!','Donnez-un-titre-a-votre-article!-1','','','',2,1472495116648,1472495116648,0,3,NULL,NULL,NULL,'Article',NULL,NULL,NULL,NULL),(2,'Donnez uåTITLE titre à votre article!','Donnez-uaTITLE-titre-a-votre-article!-2','','{\"entityMap\":{},\"blocks\":[{\"key\":\"cn08c\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]}]}','',2,1473070888824,1473070888824,0,2,NULL,NULL,NULL,'Article','fsfssdsf','kl;kk\';',NULL,NULL),(3,'Donnez un titre à votre article!','Donnez-un-titre-a-votre-article!-3','','','',7,1473346367428,1473346367428,0,2,NULL,NULL,NULL,'Article',NULL,NULL,NULL,NULL),(4,'TESTING','TESTING-4','','{\"entityMap\":{},\"blocks\":[{\"key\":\"3mtqh\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]}]}','',2,1474358692713,1474358692713,0,2,NULL,NULL,NULL,'Article',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_corner`
--

DROP TABLE IF EXISTS `article_corner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article_corner` (
  `id_article` int(11) NOT NULL,
  `id_corner` int(11) NOT NULL,
  `highlight_article` int(11) NOT NULL,
  PRIMARY KEY (`id_article`,`id_corner`),
  KEY `fk_article_corner_idx` (`highlight_article`),
  KEY `fk_corner_article` (`id_corner`),
  CONSTRAINT `fk_article_corner` FOREIGN KEY (`id_article`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_corner_article` FOREIGN KEY (`id_corner`) REFERENCES `corner` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_corner`
--

LOCK TABLES `article_corner` WRITE;
/*!40000 ALTER TABLE `article_corner` DISABLE KEYS */;
INSERT INTO `article_corner` VALUES (2,1,0),(2,2,0),(2,3,0);
/*!40000 ALTER TABLE `article_corner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_keyword`
--

DROP TABLE IF EXISTS `article_keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article_keyword` (
  `id_article` int(11) NOT NULL,
  `id_keyword` int(11) NOT NULL,
  PRIMARY KEY (`id_article`,`id_keyword`),
  KEY `fk_keyword_article_idx` (`id_keyword`),
  CONSTRAINT `fk_article_keyword` FOREIGN KEY (`id_article`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_keyword_article` FOREIGN KEY (`id_keyword`) REFERENCES `keyword` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_keyword`
--

LOCK TABLES `article_keyword` WRITE;
/*!40000 ALTER TABLE `article_keyword` DISABLE KEYS */;
INSERT INTO `article_keyword` VALUES (2,2);
/*!40000 ALTER TABLE `article_keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_link`
--

DROP TABLE IF EXISTS `article_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article_link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_article` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_article_idx` (`id_article`),
  CONSTRAINT `fk_article_link` FOREIGN KEY (`id_article`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_link`
--

LOCK TABLES `article_link` WRITE;
/*!40000 ALTER TABLE `article_link` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_resource`
--

DROP TABLE IF EXISTS `article_resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article_resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_article` int(11) NOT NULL,
  `id_resource` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_article_resource_idx` (`id_article`),
  KEY `fk_resource_article_idx` (`id_resource`),
  CONSTRAINT `fk_article` FOREIGN KEY (`id_article`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_resource` FOREIGN KEY (`id_resource`) REFERENCES `item_resource` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_resource`
--

LOCK TABLES `article_resource` WRITE;
/*!40000 ALTER TABLE `article_resource` DISABLE KEYS */;
INSERT INTO `article_resource` VALUES (1,2,20),(2,2,21),(3,4,22);
/*!40000 ALTER TABLE `article_resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assignment`
--

DROP TABLE IF EXISTS `assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assignment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_po_system` varchar(255) DEFAULT NULL,
  `id_assigned_to` int(11) DEFAULT NULL,
  `id_assigned_by` int(11) DEFAULT NULL,
  `id_state` int(11) DEFAULT NULL,
  `id_workflow_instance` varchar(255) DEFAULT NULL,
  `assigned_at` bigint(32) DEFAULT NULL,
  `created_at` bigint(32) NOT NULL,
  `alias` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_assigned_to` (`id_assigned_to`),
  KEY `id_assigned_by` (`id_assigned_by`),
  KEY `id_state` (`id_state`),
  CONSTRAINT `assignment_ibfk_1` FOREIGN KEY (`id_assigned_to`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assignment_ibfk_2` FOREIGN KEY (`id_assigned_by`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assignment_ibfk_3` FOREIGN KEY (`id_state`) REFERENCES `item_state` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=195 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
INSERT INTO `assignment` VALUES (148,'0db3165ee',5,7,5,'57e01d75fe7daa2500c4ff99',1474304887720,1474304887720,'sncf-assignment-148',''),(149,'c72b2bc72',3,2,5,'57e0f1dbfe7daa2500c4ff9a',1474359751777,1474359751777,'sncf-assignment-149',''),(150,'a29490ed1',13,2,2,NULL,1474365923289,1474365923289,'sncf-assignment-150',''),(151,'7cfbf0830',4,2,2,NULL,1474366187254,1474366187254,'sncf-assignment-151',''),(152,'fd12a682c',5,2,3,NULL,1474453367877,1474453367877,'sncf-assignment-152',''),(153,'4a8896ae9',5,2,5,'57e25ff4fe7daa2500c4ff9c',1474453472690,1474453472690,'sncf-assignment-153',''),(154,'377565bbb',5,7,5,'57e29b3bfe7daa2500c4ff9d',1474468596761,1474468596761,'sncf-assignment-154',''),(155,'ed3f0bb20',6,2,5,'57e29fb6fe7daa2500c4ff9e',1474469740755,1474469740755,'sncf-assignment-155',''),(156,'412e74262',5,7,4,NULL,1474582575301,1474582575301,'sncf-assignment-156',''),(157,'3f3c88906',5,4,4,NULL,1474583473569,1474583473569,'sncf-assignment-157',''),(158,'6db9cf579',7,7,5,'57ea6b0cfe7daa2500c4ffa6',1474583990392,1474583990392,'sncf-assignment-158',''),(159,'34fbad6c1',5,7,5,'57ea4012fe7daa2500c4ffa2',1474969357499,1474969357499,'sncf-assignment-159',''),(160,'ec5d9c628',6,4,5,'57ea408ffe7daa2500c4ffa3',1474969696501,1474969696501,'sncf-assignment-160',''),(161,'8fec4d9fa',5,2,5,'57ea6af1fe7daa2500c4ffa5',1474979876764,1474979876764,'sncf-assignment-161',''),(162,'46b4d3de5',5,4,5,'57ea6a69fe7daa2500c4ffa4',1474980380487,1474980380488,'sncf-assignment-162',''),(163,'f24d7f5b1',2,2,5,'57ea6d38fe7daa2500c4ffa7',1474981115340,1474981115340,'sncf-assignment-163',''),(164,'3e1513863',2,2,2,NULL,1474981115435,1474981115435,'sncf-assignment-164',''),(165,'518e6d3d1',2,2,2,NULL,1474981115999,1474981115999,'sncf-assignment-165',''),(166,'9025fb27d',2,2,2,NULL,1474981116110,1474981116110,'sncf-assignment-166',''),(167,'a6088fc49',2,2,2,NULL,1474981116234,1474981116234,'sncf-assignment-167',''),(168,'c7fc01c16',2,2,2,NULL,1474981116583,1474981116583,'sncf-assignment-168',''),(169,'cceee7114',2,2,5,'57f23254fe7daa2500c4ffa8',1475490349289,1475490349289,'sncf-assignment-169',''),(170,'1e1a3977e',5,7,5,'57f2448dfe7daa2500c4ffaa',1475494563989,1475494563989,'sncf-assignment-170',''),(171,'2f3152603',2,2,5,'57f25376fe7daa2500c4ffab',1475498847960,1475498847960,'sncf-assignment-171',''),(172,'44fe99460',2,2,5,'57f25492fe7daa2500c4ffac',1475499136055,1475499136055,'sncf-assignment-172',''),(173,'8c60bebd0',5,7,5,'57f26ac3fe7daa2500c4ffad',1475504770247,1475504770247,'sncf-assignment-173',''),(174,'8e86292dc',6,7,5,'57f26df6fe7daa2500c4ffae',1475505603966,1475505603966,'sncf-assignment-174',''),(175,'32492a8c5',6,7,5,'57f26f6efe7daa2500c4ffaf',1475505901227,1475505901227,'sncf-assignment-175',''),(176,'afa8ea52b',6,4,5,'57f27471fe7daa2500c4ffb0',1475507266066,1475507266066,'sncf-assignment-176',''),(177,'f31ebfffd',5,7,5,'57f295e8fe7daa2500c4ffb1',1475515827705,1475515827705,'sncf-assignment-177',''),(178,'e3f642be4',5,7,5,'57f607c05c30042600157c56',1475741543711,1475741543711,'sncf-assignment-178',''),(179,'c6ef008e7',13,2,2,NULL,1475746058873,1475746058873,'sncf-assignment-179',''),(180,'fa51ad0d5',10,2,2,NULL,1475746065885,1475746065885,'sncf-assignment-180',''),(181,'8bfb447e4',2,2,2,NULL,1475747259062,1475747259062,'sncf-assignment-181',''),(182,'e06b1cb71',4,2,2,NULL,1475747845234,1475747845234,'sncf-assignment-182',''),(183,'040a59731',4,2,2,NULL,1475747845498,1475747845498,'sncf-assignment-183',''),(184,'67c10ed0a',2,2,2,NULL,1475748041679,1475748041679,'sncf-assignment-184',''),(185,'369794db4',2,2,2,NULL,1475748044222,1475748044222,'sncf-assignment-185',''),(186,NULL,2,2,2,NULL,1475748068923,1475748068923,NULL,''),(187,'4a4757587',3,2,2,NULL,1475763817313,1475763817313,'sncf-assignment-187',''),(188,'494cfba93',5,2,2,NULL,1475764461496,1475764461496,'sncf-assignment-188',''),(189,'910b4224c',2,2,4,NULL,1475764955485,1475764955485,'sncf-assignment-189',''),(190,'d4051a732',2,2,3,NULL,1475765763108,1475765763109,'sncf-assignment-190',''),(191,'6252ea1b8',5,7,5,'57f7629a5c30042600157c5b',1475830281534,1475830281534,'sncf-assignment-191',''),(192,'8fa255868',6,7,5,'57fb75135c30042600157c5e',1476097013693,1476097013693,'sncf-assignment-192',''),(193,'abe9b9c9e',5,7,5,'57fb77305c30042600157c5f',1476097792497,1476097792497,'sncf-assignment-193',''),(194,'8796a3caa',2,2,2,NULL,1477323447631,1477323447631,'sncf-assignment-194','');
/*!40000 ALTER TABLE `assignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assignment_order`
--

DROP TABLE IF EXISTS `assignment_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assignment_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_po_system` varchar(255) DEFAULT NULL,
  `id_assignment` int(11) NOT NULL,
  `id_product` int(11) DEFAULT NULL,
  `id_bundle` int(11) DEFAULT NULL,
  `id_state` int(11) DEFAULT NULL,
  `timeline_type` varchar(255) DEFAULT NULL,
  `completed` tinyint(1) DEFAULT '0',
  `options` text,
  `created_at` bigint(32) NOT NULL,
  `id_gdp` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_assignment` (`id_assignment`),
  KEY `id_product` (`id_product`),
  KEY `id_bundle` (`id_bundle`),
  KEY `id_state` (`id_state`),
  CONSTRAINT `assignment_order_ibfk_1` FOREIGN KEY (`id_assignment`) REFERENCES `assignment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `assignment_order_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `assignment_order_ibfk_3` FOREIGN KEY (`id_bundle`) REFERENCES `bundle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `assignment_order_ibfk_4` FOREIGN KEY (`id_state`) REFERENCES `item_state` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=394 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order`
--

LOCK TABLES `assignment_order` WRITE;
/*!40000 ALTER TABLE `assignment_order` DISABLE KEYS */;
INSERT INTO `assignment_order` VALUES (332,'abbcd86dd',148,83,NULL,4,NULL,0,'',1474304887737,'-1'),(333,'90fb1731e',149,NULL,28,4,NULL,0,'',1474359751783,NULL),(334,'a09babcd8',149,109,28,4,NULL,1,'',1474359751826,'0'),(335,'0d6fae841',149,110,28,4,NULL,1,'sim=std_mini_sim_2ff&sms_alert=on',1474359751826,'0'),(336,'a69e98418',150,109,NULL,4,NULL,0,'',1474365923302,NULL),(337,'40e83024e',151,110,NULL,4,NULL,0,'sim=std_mini_sim_2ff',1474366187263,NULL),(338,'36182e095',152,NULL,22,4,NULL,0,'',1474453367888,NULL),(339,'e9b410bd1',152,83,22,4,NULL,0,'international_options%5B%5D=from_abroad&international_options%5B%5D=to_abroad',1474453367913,NULL),(340,'5bdf5caed',152,96,22,4,NULL,0,'',1474453367913,NULL),(341,'4ca594075',153,NULL,19,4,NULL,0,'',1474453472696,NULL),(342,'0188051cd',153,83,19,4,NULL,0,'international_options%5B%5D=from_abroad&international_options%5B%5D=to_abroad',1474453472716,'0'),(343,'7b10275f3',153,84,19,4,NULL,1,'international_options%5B%5D=from_abroad&international_options%5B%5D=to_abroad',1474453472716,'0'),(344,'f8d3f73a1',154,84,NULL,4,NULL,0,'sim=std_mini_sim_2ff&sms_alert=on&international_options%5B%5D=from_abroad&internet_options=anitvirus',1474468596768,'0'),(345,'22bdc6fbf',155,111,NULL,4,NULL,1,'activation_date=za',1474469740766,'0'),(346,'74b163b66',156,32,NULL,4,NULL,0,'',1474582575327,NULL),(347,'8d3c62164',157,83,NULL,4,NULL,0,'',1474583473580,NULL),(348,'4789aca97',158,83,NULL,4,NULL,0,'',1474583990404,'-1'),(349,'022d7afde',159,NULL,8,4,NULL,0,'',1474969357507,NULL),(350,'1bd14bf23',159,83,8,4,NULL,0,'',1474969357534,'0'),(351,'1cb8c14b6',159,84,8,4,NULL,0,'',1474969357534,'0'),(352,'f40562e28',160,NULL,8,4,NULL,0,'',1474969696507,NULL),(353,'6d367bdf4',160,83,8,4,NULL,0,'',1474969696530,'0'),(354,'b60304dbf',160,84,8,4,NULL,0,'',1474969696530,'0'),(355,'042fe848e',161,35,NULL,4,NULL,0,'',1474979876770,'0'),(356,'14d45e29a',162,84,NULL,4,NULL,1,'sim=std_mini_sim_2ff&international_options%5B%5D=from_abroad&international_options%5B%5D=to_abroad',1474980380507,'0'),(357,'482647df8',163,30,NULL,4,NULL,1,'',1474981115348,'-1'),(358,'1d852e441',164,30,NULL,4,NULL,0,'',1474981115444,NULL),(359,'8aa6940e6',165,30,NULL,4,NULL,0,'',1474981116003,NULL),(360,'3744a7f5e',166,30,NULL,4,NULL,0,'',1474981116115,NULL),(361,'19b9594d7',167,30,NULL,4,NULL,0,'',1474981116239,NULL),(362,'27edc1ffc',168,30,NULL,4,NULL,0,'',1474981116589,NULL),(363,'c52989d90',169,84,NULL,4,NULL,1,'activation_date=2016-10-12&sim=full_size_sim&international_options%5B%5D=from_abroad',1475490349305,'0'),(364,'978d04d41',170,35,NULL,4,NULL,0,'',1475494563997,'0'),(365,'f3334d019',171,32,NULL,4,NULL,0,'',1475498847969,'0'),(366,'8a7b69bda',172,113,NULL,4,NULL,1,'',1475499136061,'0'),(367,'40245f0ac',173,113,NULL,4,NULL,0,'',1475504770259,'0'),(368,'20f326d98',174,35,NULL,4,NULL,0,'',1475505603981,'0'),(369,'f1b6372f6',175,113,NULL,4,NULL,1,'',1475505901232,'0'),(370,'a434d6894',176,114,NULL,4,NULL,1,'sim=std_mini_sim_2ff&internet_options=unlimited_data',1475507266574,'0'),(371,'5eb803c67',177,114,NULL,4,NULL,1,'',1475515827716,'0'),(372,'8c8153726',178,116,NULL,4,NULL,1,'sim=micro_sim_3ff&international_options%5B%5D=from_abroad',1475741543717,'0'),(373,'1697b7d1d',179,NULL,2,4,NULL,0,'',1475746058884,NULL),(374,'c9b52b83a',180,NULL,2,4,NULL,0,'',1475746065890,NULL),(375,'594f44ca9',181,113,NULL,4,NULL,0,'',1475747259068,NULL),(376,'d2c487caf',182,31,NULL,4,NULL,0,'',1475747845243,NULL),(377,'734e5cc3a',183,31,NULL,4,NULL,0,'',1475747845503,NULL),(378,'a30f2482a',184,30,NULL,4,NULL,0,'',1475748041691,NULL),(379,'0eb9084ea',185,30,NULL,4,NULL,0,'',1475748044226,NULL),(380,'cab5b63e5',187,30,NULL,4,NULL,0,'',1475763817339,NULL),(381,'ad0e76a5e',188,31,NULL,4,NULL,0,'',1475764461503,NULL),(382,'1b3481767',189,30,NULL,4,NULL,0,'',1475764955502,NULL),(383,'0f4a9c31e',190,121,NULL,4,NULL,0,'activation_date=2017-11-11&sim=full_size_sim&sms_alert=on&internet_options=unlimited_data',1475765763116,NULL),(384,'3be8f6a4c',191,124,NULL,4,NULL,1,'',1475830281542,'0'),(385,'2cdee95f8',192,NULL,30,4,NULL,0,'',1476097013699,NULL),(386,'99a962643',192,128,30,4,NULL,1,'activation_date=24%2F10%2F2016&sim=nano_sim_4ff&sms_alert=on&international_options%5B%5D=from_abroad&internet_options=anitvirus',1476097013721,'0'),(387,'7581728f2',192,129,30,4,NULL,0,'',1476097013739,'0'),(388,'db441918b',193,NULL,30,4,NULL,0,'',1476097792502,NULL),(389,'a12a0a3f8',193,128,30,4,NULL,1,'international_options%5B%5D=from_abroad',1476097792514,'0'),(390,'1f76e2ea4',193,128,30,4,NULL,0,'international_options%5B%5D=from_abroad',1476097792514,'0'),(391,'26168fa88',193,129,30,4,NULL,0,'',1476097792514,'0'),(392,'f22016d89',193,130,30,4,NULL,1,'sms_alert=on',1476097792514,'0'),(393,'4fa49909e',194,33,NULL,4,NULL,0,'',1477323447756,NULL);
/*!40000 ALTER TABLE `assignment_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assignment_order_follow_ups`
--

DROP TABLE IF EXISTS `assignment_order_follow_ups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assignment_order_follow_ups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_assignment_order` int(11) NOT NULL,
  `id_workflow_instance` varchar(255) DEFAULT NULL,
  `created_at` bigint(32) NOT NULL DEFAULT '1475047299102',
  `deleted_at` bigint(32) DEFAULT NULL,
  `id_timeline` varchar(255) NOT NULL,
  `id_follow_up_task` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_assignment_order` (`id_assignment_order`),
  CONSTRAINT `assignment_order_follow_ups_ibfk_1` FOREIGN KEY (`id_assignment_order`) REFERENCES `assignment_order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order_follow_ups`
--

LOCK TABLES `assignment_order_follow_ups` WRITE;
/*!40000 ALTER TABLE `assignment_order_follow_ups` DISABLE KEYS */;
INSERT INTO `assignment_order_follow_ups` VALUES (1,343,'XYZ',1475047299102,NULL,'sav_vol_and_perte','a new follow up'),(2,343,'XYZ',1475047299102,NULL,'sav_casse','test follow up'),(3,343,'XYZ',1475047299102,NULL,'sav_casse','test follow up'),(4,366,'XYZ',1475047299102,NULL,'sav_casse','A Train follow up'),(5,370,'XYZ',1475047299102,NULL,'sav_vol_and_perte','SAV'),(6,370,'XYZ',1475047299102,NULL,'sav_vol_and_perte','SAV'),(7,370,'XYZ',1475047299102,NULL,'sav_vol_and_perte','SAV'),(8,371,'XYZ',1475047299102,NULL,'sav_vol_and_perte','SAV'),(9,363,'XYZ',1475047299102,NULL,'sav_vol_and_perte','a new follow up'),(10,371,'XYZ',1475047299102,NULL,'sav_vol_and_perte','SAV'),(11,371,'XYZ',1475047299102,NULL,'sav_vol_and_perte','SAV'),(12,371,'57f4d4165c30042600157c53',1475047299102,NULL,'sav_vol_and_perte','SAV'),(13,371,'57f4d42c5c30042600157c54',1475047299102,NULL,'sav_vol_and_perte','SAV'),(14,371,'57f4d43a5c30042600157c55',1475047299102,NULL,'sav_vol_and_perte','SAV'),(15,372,'57f60c025c30042600157c57',1475047299102,NULL,'sav_casse','sav'),(16,343,'57f61d305c30042600157c58',1475047299102,NULL,'sav_casse','test follow up'),(17,343,'57f629045c30042600157c59',1475047299102,NULL,'sav_casse','test follow up'),(18,343,'57f6375a5c30042600157c5a',1475047299102,NULL,'sav_vol_and_perte','a new follow up'),(19,384,'57f765695c30042600157c5c',1475047299102,NULL,'sav_vol_and_perte','1'),(20,384,'57f765795c30042600157c5d',1475047299102,NULL,'line_suspension','2'),(21,392,'57fba9685c30042600157c60',1475047299102,NULL,'sim_card','1'),(22,389,'57fba9725c30042600157c61',1475047299102,NULL,'chgt_options','2'),(23,389,'57fbb0685c30042600157c62',1475047299102,NULL,'line_suspension','1'),(24,389,'57fbb0695c30042600157c63',1475047299102,NULL,'sim_card','3'),(25,389,'57fbb06a5c30042600157c64',1475047299102,NULL,'chgt_options','2'),(26,389,'57fbb06b5c30042600157c65',1475047299102,NULL,'chgt_options','2'),(27,389,'57fbb06c5c30042600157c66',1475047299102,NULL,'chgt_options','2');
/*!40000 ALTER TABLE `assignment_order_follow_ups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bundle`
--

DROP TABLE IF EXISTS `bundle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bundle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `baseline` varchar(150) DEFAULT NULL,
  `description` text,
  `created_by_id` int(11) NOT NULL,
  `creation_date` bigint(20) NOT NULL,
  `last_update` bigint(20) DEFAULT NULL,
  `publication_date` bigint(20) DEFAULT NULL,
  `state_id` int(11) NOT NULL,
  `alias` varchar(110) DEFAULT NULL,
  `logo_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fx_bundle_state_idx` (`state_id`),
  KEY `fx_bundle_logo_idx` (`logo_id`),
  CONSTRAINT `fx_bundle_logo` FOREIGN KEY (`logo_id`) REFERENCES `item_resource` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fx_bundle_state` FOREIGN KEY (`state_id`) REFERENCES `item_state` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle`
--

LOCK TABLES `bundle` WRITE;
/*!40000 ALTER TABLE `bundle` DISABLE KEYS */;
INSERT INTO `bundle` VALUES (1,'ADC - Kit nouvel arrivant','Une dotation complète et opérationnelle.','Ce kit comprend :\n. un SAMSUNG Galaxy Xcover3\n. un carte SIM et une ligne voix associé',2,1464870237649,1464870237649,NULL,2,'ADC--Kit-nouvel-arrivant-1',1),(2,' Sirius NG - Kit Ipad AIR paramétré 2','Une dotation complète et opérationnelle.','Ce kit comprend :\n. un iPad Air\n. une ligne voix nationale\n. création d\'une boite aux lettres\n. le paramétrage de l\'EMM',2,1464870435747,1464870435747,NULL,1,' Sirius-NG--Kit-Ipad-AIR-parametre-2-2',3),(3,'Bundle de demo','c\'est el plus beau bundle',NULL,7,1465373092385,1465373092385,NULL,3,'Bundle-de-demo-3',NULL),(4,'Donnez un titre à votre package',NULL,NULL,7,1466456756889,1466456756889,NULL,3,'Donnez-un-titre-a-votre-package-4',NULL),(5,'Donnez un titre à votre package',NULL,NULL,7,1467042135006,1467042135006,NULL,3,'Donnez-un-titre-a-votre-package-5',NULL),(6,'Gerard Package',NULL,NULL,7,1469626122586,1469626122586,NULL,3,'Gerard-Package-6',16),(7,'JP package','blabla le package de JP',NULL,7,1469655861131,1469655861131,NULL,3,'JP-package-7',17),(8,'Package A+','This is a basline','This is a description for the package.',2,1469693941856,1469693941856,NULL,2,'Package-A+-8',18),(9,'Package',NULL,'Pack 1',7,1469719137823,1469719137823,NULL,3,'Package-9',19),(10,'pack Ben',NULL,NULL,7,1469721196360,1469721196360,NULL,3,'pack-Ben-10',NULL),(11,'Donnez un titre à votre package',NULL,NULL,7,1470083195254,1470083195254,NULL,3,NULL,NULL),(12,'Donnez un titre à votre package',NULL,NULL,7,1470083301934,1470083301934,NULL,3,NULL,NULL),(13,'Donnez un titre à votre package',NULL,NULL,2,1470083426761,1470083426761,NULL,3,NULL,NULL),(14,'Donnez un titre à votre package',NULL,NULL,2,1470083461477,1470083461477,NULL,3,NULL,NULL),(15,'Donnez un titre à votre package',NULL,NULL,2,1470084004996,1470084004996,NULL,3,'Donnez-un-titre-a-votre-package-15',NULL),(16,'demo charles',NULL,NULL,7,1470208833202,1470208833202,NULL,3,'demo-charles-16',NULL),(17,'Pack de Test JP',NULL,NULL,2,1470318440297,1470318440297,NULL,3,'Pack-de-Test-JP-17',8),(18,'Package Test #2 JP',NULL,NULL,2,1470325199475,1470325199475,NULL,3,'Package-Test-#2-JP-18',10),(19,'Package Test 3 JP',NULL,NULL,7,1470327243126,1470327243126,NULL,3,'Package-Test-3-JP-19',11),(20,'Pack with both new products',NULL,NULL,7,1470388032729,1470388032729,NULL,3,'Pack-with-both-new-products-20',12),(21,'Donnez un titre à votre package',NULL,NULL,2,1471503747143,1471503747143,NULL,3,'Donnez-un-titre-a-votre-package-21',NULL),(22,'Bundle Test 2',NULL,'Description',2,1472495130586,1472495130586,NULL,3,'Bundle-Test-2-22',14),(23,'',NULL,NULL,7,1472546036491,1472546036491,NULL,3,'Donnez-un-titre-a-votre-package-23',NULL),(24,'Donnez un titre à votre package',NULL,NULL,7,1472546068096,1472546068096,NULL,3,'Donnez-un-titre-a-votre-package-24',NULL),(25,'lsùejaz',NULL,NULL,7,1472654391719,1472654391719,NULL,3,'lsuejaz-25',NULL),(26,'Donnez un titre à votre package',NULL,NULL,7,1473345558543,1473345558543,NULL,3,'Donnez-un-titre-a-votre-package-26',NULL),(27,'package du 09',NULL,NULL,7,1473345567243,1473345567243,NULL,3,'package-du-09-27',NULL),(28,'TESTING BUNDLE',NULL,NULL,2,1474359392879,1474359392879,NULL,3,'TESTING-BUNDLE-28',15),(29,'My bundle',NULL,NULL,2,1475745014775,1475745014775,NULL,3,'My-bundle-29',NULL),(30,'Pack de validation',NULL,NULL,7,1476078483298,1476078483298,NULL,1,'Pack-de-validation-30',24);
/*!40000 ALTER TABLE `bundle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bundle_component`
--

DROP TABLE IF EXISTS `bundle_component`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bundle_component` (
  `id_bundle` int(11) NOT NULL,
  `id_component` int(11) NOT NULL,
  `show_order` tinyint(1) NOT NULL DEFAULT '-1',
  PRIMARY KEY (`id_bundle`,`id_component`,`show_order`),
  KEY `fx_bundle_component_component_idx` (`id_component`),
  CONSTRAINT `fx_bundle_component_bundle` FOREIGN KEY (`id_bundle`) REFERENCES `bundle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fx_bundle_component_component` FOREIGN KEY (`id_component`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle_component`
--

LOCK TABLES `bundle_component` WRITE;
/*!40000 ALTER TABLE `bundle_component` DISABLE KEYS */;
INSERT INTO `bundle_component` VALUES (1,30,0),(9,30,1),(29,31,0),(1,32,1),(2,32,1),(29,33,1),(2,35,0),(3,35,0),(3,36,1),(2,39,3),(2,40,2),(6,49,1),(6,50,0),(7,51,0),(10,51,1),(16,51,1),(7,52,1),(9,52,0),(10,52,0),(16,52,0),(17,81,0),(18,81,0),(17,82,1),(8,83,0),(18,83,1),(19,83,0),(22,83,1),(27,83,2),(8,84,1),(19,84,1),(27,84,1),(20,86,0),(20,87,1),(22,96,0),(27,101,0),(28,109,0),(28,110,1),(30,128,0),(30,128,3),(30,129,1),(30,130,2);
/*!40000 ALTER TABLE `bundle_component` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bundle_corner`
--

DROP TABLE IF EXISTS `bundle_corner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bundle_corner` (
  `id_bundle` int(11) NOT NULL,
  `id_corner` int(11) NOT NULL,
  PRIMARY KEY (`id_bundle`,`id_corner`),
  KEY `fx_bundle_corner_corner_idx` (`id_corner`),
  CONSTRAINT `fx_bundle_corner_bundle` FOREIGN KEY (`id_bundle`) REFERENCES `bundle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fx_bundle_corner_corner` FOREIGN KEY (`id_corner`) REFERENCES `corner` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle_corner`
--

LOCK TABLES `bundle_corner` WRITE;
/*!40000 ALTER TABLE `bundle_corner` DISABLE KEYS */;
INSERT INTO `bundle_corner` VALUES (1,1),(2,1),(3,1),(7,1),(8,1),(22,1),(6,2),(9,2),(22,2),(27,2),(30,2),(6,3),(9,3),(22,3),(6,4),(8,4),(22,4),(8,5),(16,5),(18,5),(19,5),(20,5),(22,5);
/*!40000 ALTER TABLE `bundle_corner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bundle_keyword`
--

DROP TABLE IF EXISTS `bundle_keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bundle_keyword` (
  `id_bundle` int(11) NOT NULL,
  `id_keyword` int(11) NOT NULL,
  PRIMARY KEY (`id_bundle`,`id_keyword`),
  KEY `fx_bundle_keyword_keyword_idx` (`id_keyword`),
  CONSTRAINT `fx_bundle_keyword_bundle` FOREIGN KEY (`id_bundle`) REFERENCES `bundle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fx_bundle_keyword_keyword` FOREIGN KEY (`id_keyword`) REFERENCES `keyword` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle_keyword`
--

LOCK TABLES `bundle_keyword` WRITE;
/*!40000 ALTER TABLE `bundle_keyword` DISABLE KEYS */;
INSERT INTO `bundle_keyword` VALUES (2,1),(6,1),(22,1),(6,2),(8,2),(9,2),(22,2),(1,10),(22,10),(2,16),(8,16),(22,16),(22,19),(22,35),(22,42),(22,48);
/*!40000 ALTER TABLE `bundle_keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bundle_resource`
--

DROP TABLE IF EXISTS `bundle_resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bundle_resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_bundle` int(11) NOT NULL,
  `id_resource` int(11) NOT NULL,
  `show_carousel` tinyint(1) DEFAULT '0',
  `carousel_order` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fx_bundle_resource_bundle_idx` (`id_bundle`),
  KEY `fx_bundle_resource_resource_idx` (`id_resource`),
  CONSTRAINT `fx_bundle_resource_bundle` FOREIGN KEY (`id_bundle`) REFERENCES `bundle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fx_bundle_resource_resource` FOREIGN KEY (`id_resource`) REFERENCES `item_resource` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle_resource`
--

LOCK TABLES `bundle_resource` WRITE;
/*!40000 ALTER TABLE `bundle_resource` DISABLE KEYS */;
INSERT INTO `bundle_resource` VALUES (1,1,1,0,NULL),(2,1,2,1,NULL),(3,2,3,0,NULL),(4,2,4,1,NULL),(5,8,5,0,NULL),(6,8,6,0,NULL),(7,8,7,0,NULL),(8,17,8,0,NULL),(9,17,9,0,NULL),(10,18,10,0,NULL),(11,19,11,0,NULL),(12,20,12,0,NULL),(13,8,13,0,NULL),(14,22,14,1,NULL),(15,28,15,1,NULL),(16,6,16,1,NULL),(17,7,17,1,NULL),(18,8,18,1,NULL),(19,9,19,1,NULL),(21,30,24,0,NULL);
/*!40000 ALTER TABLE `bundle_resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `siret` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `usecase` text COMMENT 'Usages of the app that will be posted on the marketplace',
  `created_by` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `siret_UNIQUE` (`siret`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `fk_company_created` FOREIGN KEY (`created_by`) REFERENCES `user_profile` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'DD','00000000000000',NULL,'',1),(2,'admin','0998877665451234576345',NULL,NULL,1),(3,'bob2 Cie','123456789098765433',NULL,NULL,3),(4,'SNCF TRACTION','12345667788899990000000',NULL,NULL,4),(5,'Alisson &Cie','3445567788999999999999999999999',NULL,NULL,5),(6,'Alice & Cie','34567890°09876543456789555666',NULL,NULL,6),(7,'SNCF-Traction','345678987654456787654567898765456789',NULL,NULL,7),(8,'Orange ','45567899009877654332356788',NULL,NULL,8),(9,'ORANGE','345678909876543456789',NULL,NULL,9),(10,'ORANGE','234567899654345678987654',NULL,NULL,10),(12,'Supplier & Cie','345679087654345678909876547',NULL,NULL,12),(13,'Support & Co','56789876543234567898765434567',NULL,NULL,13),(14,'Digital Dimension','345678987534567890',NULL,NULL,14);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_activity_field`
--

DROP TABLE IF EXISTS `company_activity_field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_activity_field` (
  `id_company` int(11) NOT NULL,
  `id_activity_field` int(11) NOT NULL,
  PRIMARY KEY (`id_company`,`id_activity_field`),
  KEY `fk_companies_has_company_activity_field_idx` (`id_activity_field`),
  KEY `fk_companies_has_activity_field_companies1_idx` (`id_company`),
  CONSTRAINT `fk_activity_field_company` FOREIGN KEY (`id_activity_field`) REFERENCES `activity_field` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_company_activity_field` FOREIGN KEY (`id_company`) REFERENCES `company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_activity_field`
--

LOCK TABLES `company_activity_field` WRITE;
/*!40000 ALTER TABLE `company_activity_field` DISABLE KEYS */;
/*!40000 ALTER TABLE `company_activity_field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_platform`
--

DROP TABLE IF EXISTS `company_platform`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_platform` (
  `id_company` int(11) NOT NULL,
  `id_platform` int(11) NOT NULL,
  PRIMARY KEY (`id_company`,`id_platform`),
  KEY `fk_companies_has_operating_system_operating_system1_idx` (`id_platform`),
  KEY `fk_companies_has_operating_system_companies1_idx` (`id_company`),
  CONSTRAINT `fk_companies_has_operating_system_companies1` FOREIGN KEY (`id_company`) REFERENCES `company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_companies_has_operating_system_operating_system1` FOREIGN KEY (`id_platform`) REFERENCES `platform` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_platform`
--

LOCK TABLES `company_platform` WRITE;
/*!40000 ALTER TABLE `company_platform` DISABLE KEYS */;
/*!40000 ALTER TABLE `company_platform` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `corner`
--

DROP TABLE IF EXISTS `corner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `corner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `alias` varchar(50) DEFAULT NULL,
  `description` text,
  `created_by` int(11) DEFAULT NULL,
  `creation_date` bigint(32) DEFAULT NULL,
  `last_update` bigint(32) DEFAULT NULL,
  `logo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `alias_UNIQUE` (`alias`),
  KEY `fk_corner_created_idx` (`created_by`),
  CONSTRAINT `fk_corner_created` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corner`
--

LOCK TABLES `corner` WRITE;
/*!40000 ALTER TABLE `corner` DISABLE KEYS */;
INSERT INTO `corner` VALUES (1,'TRACTION','TRACTION-1','',2,1463570857648,1472556966872,'logo-1.jpg'),(2,'NOMADE','NOMADE-2','',2,1463570874016,1463570887635,'logo-2.jpg'),(3,'MOVE','MOVE-3','',2,1463570891482,1463571294081,'logo-3.jpg'),(4,'TRANSILIEN','TRANSILIEN-4','',2,1463570905034,1463570914000,'logo-4.jpg'),(5,'VOYAGE','VOYAGE-5','',2,1463570918528,1463571262930,'logo-5.jpg'),(8,'My new corner','My-new-corner-8','',2,1475745160925,1475745160930,''),(9,'Corner test','Corner-test-9','test description',2,1475753110647,1476690537486,'logo-9.png');
/*!40000 ALTER TABLE `corner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `corner_keyword`
--

DROP TABLE IF EXISTS `corner_keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `corner_keyword` (
  `id_corner` int(11) NOT NULL,
  `id_keyword` int(11) NOT NULL,
  PRIMARY KEY (`id_corner`,`id_keyword`),
  KEY `fk_keyword_corner_idx` (`id_keyword`),
  CONSTRAINT `fk_corner_keyword` FOREIGN KEY (`id_corner`) REFERENCES `corner` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_keyword_corner` FOREIGN KEY (`id_keyword`) REFERENCES `keyword` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corner_keyword`
--

LOCK TABLES `corner_keyword` WRITE;
/*!40000 ALTER TABLE `corner_keyword` DISABLE KEYS */;
INSERT INTO `corner_keyword` VALUES (1,1),(2,1),(1,2),(2,2),(1,10),(1,16),(1,19),(1,35),(9,35),(1,42),(1,48);
/*!40000 ALTER TABLE `corner_keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `corners`
--

DROP TABLE IF EXISTS `corners`;
/*!50001 DROP VIEW IF EXISTS `corners`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `corners` AS SELECT 
 1 AS `id`,
 1 AS `name`,
 1 AS `alias`,
 1 AS `description`,
 1 AS `created_by`,
 1 AS `creation_date`,
 1 AS `last_update`,
 1 AS `logo`,
 1 AS `keywords`,
 1 AS `products`,
 1 AS `articles`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `editor_highlight_product`
--

DROP TABLE IF EXISTS `editor_highlight_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `editor_highlight_product` (
  `id_product` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `highlight_product_order` int(11) NOT NULL,
  PRIMARY KEY (`id_user`,`highlight_product_order`),
  KEY `fk_bestproduct_editor` (`id_product`),
  CONSTRAINT `fk_bestproduct_editor` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_editor_bestproduct` FOREIGN KEY (`id_user`) REFERENCES `user_profile` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `editor_highlight_product`
--

LOCK TABLES `editor_highlight_product` WRITE;
/*!40000 ALTER TABLE `editor_highlight_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `editor_highlight_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `editors`
--

DROP TABLE IF EXISTS `editors`;
/*!50001 DROP VIEW IF EXISTS `editors`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `editors` AS SELECT 
 1 AS `id_user`,
 1 AS `title`,
 1 AS `alias`,
 1 AS `description`,
 1 AS `last_update`,
 1 AS `image`,
 1 AS `validated_by`,
 1 AS `activated`,
 1 AS `id_company`,
 1 AS `keywords`,
 1 AS `products`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `external_workflows`
--

DROP TABLE IF EXISTS `external_workflows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `external_workflows` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_assignment_order` int(11) NOT NULL,
  `id_workflow` varchar(255) NOT NULL,
  `id_external` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_assignment_order` (`id_assignment_order`),
  CONSTRAINT `external_workflows_ibfk_1` FOREIGN KEY (`id_assignment_order`) REFERENCES `assignment_order` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `external_workflows`
--

LOCK TABLES `external_workflows` WRITE;
/*!40000 ALTER TABLE `external_workflows` DISABLE KEYS */;
INSERT INTO `external_workflows` VALUES (4,334,'57e0f234fe7daa2500c4ff9b','S160920_0001'),(5,350,'57f23a9bfe7daa2500c4ffa9','S161003_0001');
/*!40000 ALTER TABLE `external_workflows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feature`
--

DROP TABLE IF EXISTS `feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feature` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feature`
--

LOCK TABLES `feature` WRITE;
/*!40000 ALTER TABLE `feature` DISABLE KEYS */;
/*!40000 ALTER TABLE `feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `general_setting`
--

DROP TABLE IF EXISTS `general_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `general_setting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(45) DEFAULT NULL,
  `value` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key_UNIQUE` (`key`),
  KEY `key_search` (`key`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `general_setting`
--

LOCK TABLES `general_setting` WRITE;
/*!40000 ALTER TABLE `general_setting` DISABLE KEYS */;
INSERT INTO `general_setting` VALUES (1,'seo:title','GFCv2'),(3,'seo:tagline','SNCF'),(4,'seo:description','.....');
/*!40000 ALTER TABLE `general_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_carousel`
--

DROP TABLE IF EXISTS `home_carousel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `home_carousel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(300) DEFAULT NULL,
  `content` text,
  `mainPicture` varchar(200) DEFAULT NULL,
  `detailPagePicture` varchar(100) DEFAULT NULL,
  `buttonText` varchar(45) DEFAULT NULL,
  `link` varchar(200) DEFAULT NULL,
  `secondaryPictureALT` varchar(150) DEFAULT NULL,
  `mainPictureALT` varchar(150) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_carousel`
--

LOCK TABLES `home_carousel` WRITE;
/*!40000 ALTER TABLE `home_carousel` DISABLE KEYS */;
INSERT INTO `home_carousel` VALUES (1,NULL,NULL,'carousel-sncf.jpg',NULL,NULL,NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `home_carousel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_resource`
--

DROP TABLE IF EXISTS `item_resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `original_name` varchar(100) DEFAULT NULL,
  `name_custom` varchar(100) DEFAULT NULL,
  `creation_date` bigint(32) DEFAULT NULL,
  `is_hidden` tinyint(1) DEFAULT NULL,
  `home_order` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_resource`
--

LOCK TABLES `item_resource` WRITE;
/*!40000 ALTER TABLE `item_resource` DISABLE KEYS */;
INSERT INTO `item_resource` VALUES (1,'image/jpeg','1.jpg','logo sncf - KIT.jpg','logo sncf - KIT.jpg',1464945270058,0,NULL),(2,'image/png','2.png','bundle.png','bundle.png',1464945435449,0,NULL),(3,'image/jpeg','3.jpg','logo sncf - KIT.jpg','logo sncf - KIT.jpg',1466153906789,0,NULL),(4,'image/png','4.png','bundle.png','bundle.png',1466153922265,0,NULL),(5,'image/jpeg','5.jpg','product.jpg','product.jpg',1469694051860,0,NULL),(6,'image/jpeg','6.jpg','product.jpg','product.jpg',1469694063421,0,NULL),(7,'image/jpeg','7.jpg','product.jpg','product.jpg',1469694729006,0,NULL),(8,'image/png','8.png','places-folder-python-icon.png','places-folder-python-icon.png',1470318469303,0,NULL),(9,'image/png','9.png','Solved_rubiks_cube.png','Solved_rubiks_cube.png',1470318556639,0,NULL),(10,'image/png','10.png','apps-ubuntuone-icon.png','apps-ubuntuone-icon.png',1470325244375,0,NULL),(11,'image/png','11.png','Solved_rubiks_cube.png','Solved_rubiks_cube.png',1470327279381,0,NULL),(12,'image/png','12.png','apps-thunderbird-icon.png','apps-thunderbird-icon.png',1470388202452,0,NULL),(13,'image/jpeg','13.jpg','ultimate-guide-to-your-product-launch.jpg','ultimate-guide-to-your-product-launch.jpg',1470638611689,0,NULL),(14,'image/jpeg','14.jpg','total-product-marketing.jpg','total-product-marketing.jpg',1472495147855,0,NULL),(15,'image/jpeg','15.jpg','product.jpg','product.jpg',1474359502660,0,NULL),(16,'image/jpeg','16.jpg','sncf-1.jpg','sncf-1.jpg',1475492895859,0,NULL),(17,'image/jpeg','17.jpg','sncf-1.jpg','sncf-1.jpg',1475493009908,0,NULL),(18,'image/jpeg','18.jpg','sncf-4.jpg','sncf-4.jpg',1475493031850,0,NULL),(19,'image/jpeg','19.jpg','sncf-4.jpg','sncf-4.jpg',1475493061955,0,NULL),(20,'image/jpeg','sncf-3.jpg','sncf-3.jpg','sncf-3.jpg',1475493111093,0,NULL),(21,'image/jpeg','sncf-1.jpg','sncf-1.jpg','sncf-1.jpg',1475493115397,0,NULL),(22,'image/jpeg','22.jpg','68.jpg','68.jpg',1475493359363,0,NULL),(24,'image/png','24.png','places-folder-dropbox-icon.png','places-folder-dropbox-icon.png',1476091496121,0,NULL);
/*!40000 ALTER TABLE `item_resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_state`
--

DROP TABLE IF EXISTS `item_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `state_UNIQUE` (`state`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_state`
--

LOCK TABLES `item_state` WRITE;
/*!40000 ALTER TABLE `item_state` DISABLE KEYS */;
INSERT INTO `item_state` VALUES (3,'deleted'),(2,'draft'),(4,'pending'),(1,'published'),(5,'validated');
/*!40000 ALTER TABLE `item_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keyword`
--

DROP TABLE IF EXISTS `keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keyword` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
INSERT INTO `keyword` VALUES (10,'ADC'),(1,'Apple'),(48,'email'),(42,'emm'),(35,'ligne'),(19,'matériel'),(2,'Samsung'),(16,'Sirius NG');
/*!40000 ALTER TABLE `keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `language`
--

DROP TABLE IF EXISTS `language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `language` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `abbreviation` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `abbreviation_UNIQUE` (`abbreviation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language`
--

LOCK TABLES `language` WRITE;
/*!40000 ALTER TABLE `language` DISABLE KEYS */;
/*!40000 ALTER TABLE `language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_comments`
--

DROP TABLE IF EXISTS `log_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `body` text NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_workflow` varchar(255) NOT NULL,
  `created_at` bigint(32) NOT NULL,
  `deleted_at` bigint(32) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `log_comments_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_comments`
--

LOCK TABLES `log_comments` WRITE;
/*!40000 ALTER TABLE `log_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `log_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL COMMENT 'User email who sent the message',
  `sex` char(1) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `company` varchar(45) DEFAULT NULL,
  `subject` varchar(100) DEFAULT NULL,
  `message` text,
  `creation_date` bigint(32) DEFAULT NULL,
  `treated_at` bigint(32) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_message_product_idx` (`id_product`),
  CONSTRAINT `fk_message_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (4,35,'jpchamarande@gmail.com','M','chamarande','jean-pierre','','DD','J\'ai une question technique/fonctionnelle','test JP 10/06 à 17:26',1465572409802,NULL);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message_subject`
--

DROP TABLE IF EXISTS `message_subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message_subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `is_admin` tinyint(4) DEFAULT NULL COMMENT 'null if the subject is applicable for Product Message and Admin message\ntrue if is onlu for admin message\nfalse if is only for product message',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message_subject`
--

LOCK TABLES `message_subject` WRITE;
/*!40000 ALTER TABLE `message_subject` DISABLE KEYS */;
INSERT INTO `message_subject` VALUES (1,'renseignements','Je souhaite des renseignements',NULL),(2,'court terme','J\'ai un projet à court terme (- de 2 mois)',NULL),(3,'question technique','J\'ai une question technique/fonctionnelle',NULL),(4,'avoir un devis','Je souhaite avoir un devis',NULL),(5,'Autres','Autres',NULL);
/*!40000 ALTER TABLE `message_subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `id_subject` int(11) DEFAULT NULL,
  `subject_reference` varchar(255) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `viewed_at` bigint(32) DEFAULT NULL,
  `clicked_at` bigint(32) DEFAULT NULL,
  `hidden_at` bigint(32) DEFAULT NULL,
  `created_at` bigint(32) NOT NULL,
  `deleted_at` bigint(32) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permission` (
  `id_role` int(11) NOT NULL,
  `id_permission` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `read` tinyint(1) DEFAULT NULL,
  `write` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_role`,`id_permission`),
  KEY `fk_permission_role_idx` (`id_permission`),
  CONSTRAINT `fk_permission_role` FOREIGN KEY (`id_permission`) REFERENCES `feature` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_role_permission` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission`
--

LOCK TABLES `permission` WRITE;
/*!40000 ALTER TABLE `permission` DISABLE KEYS */;
/*!40000 ALTER TABLE `permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission_role`
--

DROP TABLE IF EXISTS `permission_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permission_role` (
  `id_permission` varchar(255) DEFAULT NULL,
  `id_role` int(11) DEFAULT NULL,
  KEY `fk_role_permissions` (`id_role`),
  CONSTRAINT `fk_role_permissions` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission_role`
--

LOCK TABLES `permission_role` WRITE;
/*!40000 ALTER TABLE `permission_role` DISABLE KEYS */;
INSERT INTO `permission_role` VALUES ('CREATE_PRODUCT',2),('EDIT_USER_CORNER_OWN',2),('CREATE_PRODUCT',4),('EDIT_PRODUCT',4),('REQUEST_PUBLICATION_PRODUCT',4),('VALIDATE_PUBLICATION_PRODUCT',4),('PUBLISH_PRODUCT',4),('UNPUBLISH_PRODUCT',4),('DELETE_PRODUCT',4),('READ_USERS',4),('READ_USERS_DETAILS',4),('CREATE_BUNDLE',4),('EDIT_BUNDLE_OWN',4),('USERVOICE_BO_ACCESS',4),('ASSIGNMENTS_LIST_ALL_INFO',17),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',17),('VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',2),('ASSIGNMENTS_LIST_ALL_INFO',2),('ASSIGNMENTS_LIST_BASIC_INFO',17),('EDIT_ASSIGNMENT',4),('CREATE_ASSIGNMENT',4),('VALIDATE_ASSIGNMENT',17),('READ_USERS_DETAILS',17),('READ_USERS',17),('REQUEST_VALIDATION_ASSIGNMENT',17),('CREATE_ASSIGNMENT',17),('EDIT_ASSIGNMENT',17),('CANCEL_PENDING_ASSIGNMENT',17),('UNPUBLISH_PRODUCT',17),('DELETE_PRODUCT',17),('VALIDATE_PUBLICATION_PRODUCT',17),('REQUEST_PUBLICATION_PRODUCT',17),('EDIT_PRODUCT_OWN',17),('CREATE_CORNER',2),('EDIT_CORNER',2),('DELETE_CORNER',2),('EDIT_USER_CORNER',2),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',2),('READ_USERS',2),('CHANGE_PRODUCT_OWNER',2),('EDIT_PRODUCT',2),('REQUEST_PUBLICATION_PRODUCT',2),('UNPUBLISH_PRODUCT',2),('DELETE_PRODUCT',2),('VALIDATE_PUBLICATION_BUNDLE',17),('CREATE_CORNER',4),('EDIT_CORNER',4),('DELETE_CORNER',4),('EDIT_USER_CORNER',4),('EDIT_USER_CORNER_OWN',4),('CAN_ACCESS_GDP',17),('CAN_ACCESS_BI360',17),('USERVOICE_LIVE_CHAT',17),('EDIT_BUNDLE',17),('PUBLISH_BUNDLE',17),('MICHEL_BI360_CHART',17),('CAN_ACCESS_GDP2',17),('CREATE_PRODUCT',6),('CREATE_CORNER',6),('EDIT_CORNER',6),('EDIT_USER_CORNER',6),('READ_USERS',6),('USERVOICE_LIVE_CHAT',6),('VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',6),('ASSIGNMENTS_LIST_ALL_INFO',6),('EDIT_ASSIGNMENT_OWN',18),('REQUEST_VALIDATION_ASSIGNMENT_OWN',18),('VALIDATE_ASSIGNMENT',18),('CANCEL_PENDING_ASSIGNMENT',18),('CANCEL_PENDING_ASSIGNMENT_OWN',18),('ASSIGNMENTS_LIST_ALL_INFO',18),('CAN_ACCESS_GDP',18),('CAN_ACCESS_GDP2',18),('CREATE_PRODUCT',19),('EDIT_PRODUCT',19),('CHANGE_PRODUCT_OWNER',19),('REQUEST_PUBLICATION_PRODUCT',19),('UNPUBLISH_PRODUCT',19),('DELETE_PRODUCT',19),('CREATE_BUNDLE',19),('EDIT_BUNDLE_OWN',19),('REQUEST_PUBLICATION_BUNDLE_OWN',19),('UNPUBLISH_BUNDLE_OWN',19),('DELETE_BUNDLE_OWN',19),('CREATE_STOCK',19),('EDIT_STOCK',19),('EDIT_STOCK_OWN',19),('REQUEST_PUBLICATION_STOCK',19),('VALIDATE_PUBLICATION_STOCK',19),('PUBLISH_STOCK',19),('DELETE_STOCK',19),('DELETE_STOCK_OWN',19),('READ_USERS',19),('GERARD_BI360_CHART',19),('USERVOICE_BO_ACCESS',19),('CREATE_ASSIGNMENT',19),('EDIT_ASSIGNMENT_OWN',19),('REQUEST_VALIDATION_ASSIGNMENT',19),('REQUEST_VALIDATION_ASSIGNMENT_OWN',19),('CANCEL_PENDING_ASSIGNMENT_OWN',19),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',19),('VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',19),('ASSIGNMENTS_LIST_ALL_INFO',19),('ASSIGNMENTS_LIST_BASIC_INFO',19),('CAN_ACCESS_GDP',19),('CAN_ACCESS_BI360',19),('UNPUBLISH_STOCK',19),('USERVOICE_LIVE_CHAT',1),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',1),('ASSIGNMENTS_LIST_BASIC_INFO',1),('CREATE_ARTICLE',5),('EDIT_ARTICLE_OWN',5),('REQUEST_PUBLICATION_ARTICLE',5),('UNPUBLISH_ARTICLE_OWN',5),('DELETE_ARTICLE_OWN',5),('EDIT_USER_CORNER_OWN',5),('CREATE_ROLES',5),('EDIT_ROLES_PERMISSION',5),('READ_USERS',5),('READ_USERS_DETAILS',5),('VIEW_ALL_FOLLOW_UPS',5),('CREATE_PRODUCT',16),('EDIT_PRODUCT',16),('CHANGE_PRODUCT_OWNER',16),('REQUEST_PUBLICATION_PRODUCT',16),('UNPUBLISH_PRODUCT',16),('DELETE_PRODUCT',16),('CREATE_BUNDLE',16),('EDIT_BUNDLE',16),('EDIT_BUNDLE_OWN',16),('REQUEST_PUBLICATION_BUNDLE',16),('VALIDATE_PUBLICATION_BUNDLE',16),('PUBLISH_BUNDLE',16),('UNPUBLISH_BUNDLE',16),('DELETE_BUNDLE',16),('DELETE_BUNDLE_OWN',16),('READ_USERS',16),('GERARD_BI360_CHART',16),('USERVOICE_LIVE_CHAT',16),('USERVOICE_BO_ACCESS',16),('VIEW_ALL_FOLLOW_UPS',16),('VIEW_ALL_ASSIGNMENTS',16),('CREATE_ASSIGNMENT',16),('EDIT_ASSIGNMENT_OWN',16),('REQUEST_VALIDATION_ASSIGNMENT',16),('REQUEST_VALIDATION_ASSIGNMENT_OWN',16),('CANCEL_PENDING_ASSIGNMENT_OWN',16),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',16),('ASSIGNMENTS_LIST_ALL_INFO',16),('ASSIGNMENTS_LIST_BASIC_INFO',16),('CAN_ACCESS_GDP',16),('CAN_ACCESS_BI360',16),('CREATE_ARTICLE',3),('EDIT_ARTICLE',3),('EDIT_ARTICLE_OWN',3),('REQUEST_PUBLICATION_ARTICLE_OWN',3),('REQUEST_PUBLICATION_ARTICLE',3),('VALIDATE_PUBLICATION_ARTICLE',3),('PUBLISH_ARTICLE',3),('PUBLISH_ARTICLE_OWN',3),('UNPUBLISH_ARTICLE',3),('UNPUBLISH_ARTICLE_OWN',3),('DELETE_ARTICLE',3),('DELETE_ARTICLE_OWN',3),('CREATE_PRODUCT',3),('EDIT_PRODUCT',3),('EDIT_PRODUCT_OWN',3),('CHANGE_PRODUCT_OWNER',3),('REQUEST_PUBLICATION_PRODUCT',3),('REQUEST_PUBLICATION_PRODUCT_OWN',3),('VALIDATE_PUBLICATION_PRODUCT',3),('PUBLISH_PRODUCT',3),('PUBLISH_PRODUCT_OWN',3),('UNPUBLISH_PRODUCT',3),('UNPUBLISH_PRODUCT_OWN',3),('DELETE_PRODUCT',3),('DELETE_PRODUCT_OWN',3),('OFFER_PRODUCT',3),('CREATE_BUNDLE',3),('EDIT_BUNDLE',3),('EDIT_BUNDLE_OWN',3),('REQUEST_PUBLICATION_BUNDLE_OWN',3),('REQUEST_PUBLICATION_BUNDLE',3),('VALIDATE_PUBLICATION_BUNDLE',3),('PUBLISH_BUNDLE',3),('PUBLISH_BUNDLE_OWN',3),('UNPUBLISH_BUNDLE',3),('UNPUBLISH_BUNDLE_OWN',3),('DELETE_BUNDLE',3),('DELETE_BUNDLE_OWN',3),('CREATE_STOCK',3),('EDIT_STOCK',3),('EDIT_STOCK_OWN',3),('REQUEST_PUBLICATION_STOCK_OWN',3),('REQUEST_PUBLICATION_STOCK',3),('VALIDATE_PUBLICATION_STOCK',3),('PUBLISH_STOCK',3),('PUBLISH_STOCK_OWN',3),('UNPUBLISH_STOCK',3),('UNPUBLISH_STOCK_OWN',3),('DELETE_STOCK',3),('CREATE_CORNER',3),('EDIT_CORNER',3),('DELETE_CORNER',3),('EDIT_USER_CORNER',3),('EDIT_USER_CORNER_OWN',3),('CREATE_ROLES',3),('EDIT_ROLES_PERMISSION',3),('EDIT_USER_ROLE',3),('READ_USERS',3),('READ_USERS_DETAILS',3),('VALIDATE_USERS',3),('CREATE_USER',3),('EDIT_USER',3),('EDIT_GENERAL_SETTINGS',3),('GERARD_BI360_CHART',3),('MICHEL_BI360_CHART',3),('USERVOICE_LIVE_CHAT',3),('USERVOICE_BO_ACCESS',3),('VIEW_ALL_FOLLOW_UPS',3),('VIEW_ALL_ASSIGNMENTS',3),('CREATE_ASSIGNMENT',3),('EDIT_ASSIGNMENT',3),('EDIT_ASSIGNMENT_OWN',3),('REQUEST_VALIDATION_ASSIGNMENT',3),('REQUEST_VALIDATION_ASSIGNMENT_OWN',3),('VALIDATE_ASSIGNMENT',3),('VALIDATE_ASSIGNMENT_OWN',3),('CANCEL_PENDING_ASSIGNMENT',3),('CANCEL_PENDING_ASSIGNMENT_OWN',3),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',3),('VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',3),('ASSIGNMENTS_LIST_ALL_INFO',3),('ASSIGNMENTS_LIST_BASIC_INFO',3),('CAN_ACCESS_GDP',3),('CAN_ACCESS_GDP2',3),('CAN_ACCESS_BI360',3),('DELETE_STOCK_OWN',3),('CREATE_ARTICLE',20),('EDIT_ARTICLE',20),('EDIT_ARTICLE_OWN',20),('REQUEST_PUBLICATION_ARTICLE_OWN',20),('REQUEST_PUBLICATION_ARTICLE',20),('VALIDATE_PUBLICATION_ARTICLE',20),('PUBLISH_ARTICLE',20),('PUBLISH_ARTICLE_OWN',20),('UNPUBLISH_ARTICLE',20),('UNPUBLISH_ARTICLE_OWN',20),('DELETE_ARTICLE',20),('CREATE_PRODUCT',20),('EDIT_PRODUCT',20),('EDIT_PRODUCT_OWN',20),('CHANGE_PRODUCT_OWNER',20),('REQUEST_PUBLICATION_PRODUCT',20),('REQUEST_PUBLICATION_PRODUCT_OWN',20),('VALIDATE_PUBLICATION_PRODUCT',20),('PUBLISH_PRODUCT',20),('PUBLISH_PRODUCT_OWN',20),('UNPUBLISH_PRODUCT',20),('UNPUBLISH_PRODUCT_OWN',20),('DELETE_PRODUCT',20),('DELETE_PRODUCT_OWN',20),('OFFER_PRODUCT',20),('CREATE_BUNDLE',20),('EDIT_BUNDLE',20),('EDIT_BUNDLE_OWN',20),('REQUEST_PUBLICATION_BUNDLE_OWN',20),('REQUEST_PUBLICATION_BUNDLE',20),('VALIDATE_PUBLICATION_BUNDLE',20),('PUBLISH_BUNDLE',20),('PUBLISH_BUNDLE_OWN',20),('UNPUBLISH_BUNDLE',20),('UNPUBLISH_BUNDLE_OWN',20),('DELETE_BUNDLE',20),('DELETE_BUNDLE_OWN',20),('CREATE_STOCK',20),('EDIT_STOCK',20),('EDIT_STOCK_OWN',20),('REQUEST_PUBLICATION_STOCK_OWN',20),('REQUEST_PUBLICATION_STOCK',20),('VALIDATE_PUBLICATION_STOCK',20),('PUBLISH_STOCK',20),('PUBLISH_STOCK_OWN',20),('UNPUBLISH_STOCK',20),('UNPUBLISH_STOCK_OWN',20),('DELETE_STOCK',20),('DELETE_STOCK_OWN',20),('CREATE_CORNER',20),('EDIT_CORNER',20),('DELETE_CORNER',20),('EDIT_USER_CORNER',20),('EDIT_USER_CORNER_OWN',20),('CREATE_ROLES',20),('EDIT_ROLES_PERMISSION',20),('EDIT_USER_ROLE',20),('READ_USERS',20),('READ_USERS_DETAILS',20),('VALIDATE_USERS',20),('CREATE_USER',20),('EDIT_USER',20),('EDIT_GENERAL_SETTINGS',20),('GERARD_BI360_CHART',20),('MICHEL_BI360_CHART',20),('USERVOICE_LIVE_CHAT',20),('USERVOICE_BO_ACCESS',20),('VIEW_ALL_FOLLOW_UPS',20),('VIEW_ALL_ASSIGNMENTS',20),('CREATE_ASSIGNMENT',20),('EDIT_ASSIGNMENT',20),('EDIT_ASSIGNMENT_OWN',20),('REQUEST_VALIDATION_ASSIGNMENT',20),('REQUEST_VALIDATION_ASSIGNMENT_OWN',20),('VALIDATE_ASSIGNMENT',20),('VALIDATE_ASSIGNMENT_OWN',20),('CANCEL_PENDING_ASSIGNMENT',20),('CANCEL_PENDING_ASSIGNMENT_OWN',20),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',20),('VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',20),('ASSIGNMENTS_LIST_ALL_INFO',20),('ASSIGNMENTS_LIST_BASIC_INFO',20),('CAN_ACCESS_GDP',20),('CAN_ACCESS_GDP2',20),('CAN_ACCESS_BI360',20);
/*!40000 ALTER TABLE `permission_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `platform`
--

DROP TABLE IF EXISTS `platform`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `platform` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platform`
--

LOCK TABLES `platform` WRITE;
/*!40000 ALTER TABLE `platform` DISABLE KEYS */;
/*!40000 ALTER TABLE `platform` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  `alias` varchar(66) DEFAULT NULL,
  `type` enum('MobileApp','SaaS','MaterialNDevice','Service','Line') DEFAULT NULL,
  `state` enum('draft','pending','published','deleted') DEFAULT 'draft',
  `version` varchar(20) DEFAULT NULL,
  `baseline` text,
  `description` text,
  `created_by` int(11) DEFAULT NULL,
  `creation_date` bigint(32) DEFAULT NULL,
  `last_update` bigint(32) DEFAULT NULL,
  `publication_date` bigint(32) DEFAULT NULL,
  `submit_observation` text,
  `logo` int(11) DEFAULT NULL,
  `specification` int(11) DEFAULT NULL,
  `editor_description` text,
  `editor_logo` int(11) DEFAULT NULL,
  `editor_homepage` varchar(100) DEFAULT NULL,
  `editor_legal_mentions` varchar(100) DEFAULT NULL,
  `id_billing` int(11) DEFAULT NULL,
  `billing_token` varchar(255) DEFAULT NULL,
  `id_timeline` int(11) DEFAULT NULL,
  `id_assignment_option_form` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `alias_UNIQUE` (`alias`),
  KEY `fk_user_product_idx` (`created_by`),
  KEY `product_state_key` (`state`),
  KEY `fk_product_logo` (`logo`),
  KEY `fk_product_editor_logo` (`editor_logo`),
  KEY `fk_product_specification` (`specification`),
  KEY `id_timeline_foreign_idx` (`id_timeline`),
  CONSTRAINT `fk_product_editor` FOREIGN KEY (`created_by`) REFERENCES `user_profile` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_product_editor_logo` FOREIGN KEY (`editor_logo`) REFERENCES `resource` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_product_logo` FOREIGN KEY (`logo`) REFERENCES `resource` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_product_specification` FOREIGN KEY (`specification`) REFERENCES `resource` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `id_timeline_foreign_idx` FOREIGN KEY (`id_timeline`) REFERENCES `timeline` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (12,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!12','MobileApp','deleted','','','A description here',1,1463578953067,1463579056757,NULL,'',NULL,NULL,'',NULL,'','',1034,'43ecd929984d-bad4-68fe-c48a-4c2e85d61ae9',1,NULL),(13,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!13','MobileApp','deleted','','','A description here',1,1463579044186,1463579147897,NULL,'',NULL,NULL,'',NULL,'','',1035,'c3e9176cce4e-fff5-3207-af6d-3c991001371a',1,NULL),(14,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!14','MobileApp','deleted','','','A description here',1,1463579287322,1463579391304,NULL,'',NULL,NULL,'',NULL,'','',1036,'2b5fc5a389f8-4eef-6aa7-9379-9155d918004b',1,NULL),(15,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!15','MobileApp','deleted','','','A description here',1,1463579416942,1463579520631,NULL,'',NULL,NULL,'',NULL,'','',1037,'fc0decbdac8d-f3b7-f21a-6638-7eab4b997497',1,NULL),(16,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!16','MobileApp','deleted','','','A description here',1,1463579458614,1463579562311,NULL,'',NULL,NULL,'',NULL,'','',1038,'ad2327a0f662-b502-96a4-c444-16a9289d67b2',1,NULL),(17,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!17','MobileApp','deleted','','','A description here',1,1463579549626,1463579653311,NULL,'',NULL,NULL,'',NULL,'','',1039,'9c9aa213013f-efa9-30f5-4935-003e22c8a201',1,NULL),(18,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!18','MobileApp','deleted','','','A description here',1,1463579649913,1463579753611,NULL,'',NULL,NULL,'',NULL,'','',1040,'8ba40ace1eef-a7ab-d5fc-0868-478fdbc28d0b',1,NULL),(19,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!19','MobileApp','deleted','','','A description here',1,1463579755785,1463579859472,NULL,'',NULL,NULL,'',NULL,'','',1041,'f65fdf03e911-08a8-e84f-6e53-5993cd847f5c',1,NULL),(20,'Test','Test-20','MobileApp','deleted','','','A description here',1,1463580257992,1463582512136,NULL,'',NULL,NULL,'',NULL,'','',1045,'b39d3ed15538-ff58-df41-fa2d-0ac1a9c20051',1,NULL),(21,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!21','MobileApp','deleted','','','A description here',1,1463582582137,1463582685851,NULL,'',NULL,NULL,'',NULL,'','',1046,'196b3e54c716-a099-0e83-3a79-39fce25e0857',1,NULL),(22,'Lalala','Lalala-22','MobileApp','deleted','','','A description here',1,1463582769473,1463585202323,NULL,'',NULL,NULL,'',NULL,'','',1047,'b9b02b7623ca-a8c1-52c6-e381-1e332a8191bd',1,NULL),(23,'Update','Update-23','MobileApp','deleted','','','A description here',1,1463584930983,1463585059596,NULL,'',NULL,NULL,'',NULL,'','',1048,'131fd08fbcb4-86b8-66fa-c07c-b99c9dfcfd58',1,NULL),(24,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!24','MobileApp','deleted','','','A description here',1,1463585116762,1463585220489,NULL,'',NULL,NULL,'',NULL,'','',1049,'deeacd93c47d-d444-0346-c67a-a552abd6876f',1,NULL),(25,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!25','MobileApp','deleted','','','A description here',1,1463585122773,1463585226501,NULL,'',NULL,NULL,'',NULL,'','',1164,'fbb8aa6c07a8-6913-5a45-c48e-61d9975145b9',1,NULL),(26,'Feature','Feature-26','MobileApp','deleted','','','A description here',1,1464173202183,1464174480975,NULL,'',NULL,NULL,'',NULL,'','',1165,'17e38592574e-fc43-cece-75ea-df7108fe8e9d',1,NULL),(27,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!27','MobileApp','deleted','','','A description here',1,1464173242550,1464173243277,NULL,'',NULL,NULL,'',NULL,'','',1166,'a7841d311f24-4180-2d91-4c53-8a3368e9f023',1,NULL),(28,'test 28','test-28-28','MobileApp','deleted','','','A description here',1,1464174506991,1464174559092,NULL,'',NULL,NULL,'',NULL,'','',1167,'bed00d4b6cb9-5126-603d-1e89-af5870362b71',1,NULL),(29,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!29','MobileApp','deleted','','','A description here',1,1464174532633,1464174533290,NULL,'',NULL,NULL,'',NULL,'','',1168,'1d3693003209-1e4f-adb6-708a-4716ae6a011a',1,NULL),(30,' SAMSUNG Galaxy Xcover 3',' SAMSUNG-Galaxy-Xcover-3-30','MaterialNDevice','published','','Un smartphone pour les baroudeurs','<p>Le&nbsp;Samsung Galaxy Xcover 3&nbsp; est un smartphone ultra résistant conçu pour les sportifs et les baroudeurs, protégé contre les éléments, il vous accompagnera dans toutes vos expéditions. Le Galaxy Xcover 3 de Samsung est certifié IP67 pour une résistance extrême !</p><p>Il est doté d’un écran tactile de 4.5 pouces offrant une résistance hors du commun, d’un processeur ARM Cortex-A53 Quad-Core cadencé à 1.2 GHz épaulé par 1.5 Go de Ram, et est animé par le système d’exploitation Android 4.4.</p>',12,1464853557014,1467367896113,NULL,'',2,6,'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',9,'','',1303,'3b60046591bc-07fd-c4ce-e6b6-1c587d49d32a',2,NULL),(31,'SFR - SIM triple découpe ','SFR--SIM-triple-decoupe--31','MaterialNDevice','published','v.1','Une carte universelle et réutilisable','<p>Cette carte SIM présente non seulement l\'intérêt d\'être prédécoupée à la fois aux formats 2FF, 3FF et 4FF, mais aussi de bénéficier de chutes réutilisables. Le possesseur d\'un iPhone 5 ou ultérieur peut ainsi extraire une nano SIM du support plastique puis la repositionner s\'il bascule sur un téléphone recourant à un autre format, et réciproquement. Le crédit du fabricant est d\'être parvenu à concevoir un support à épaisseur variable, d\'autant plus que le format nano est infiniment moins épais que les deux autres formats.<br></p>',8,1464869312691,1466612462123,NULL,'',11,NULL,'',10,'','',1300,'abacfacb7474-06d7-da6c-6449-4975a9dd7f2b',1,NULL),(32,'SFR - Ligne Voix Nationale','SFR--Ligne-Voix-Nationale-32','Line','published','','Création de ligne Voix Nationale','<p>EN FRANCE, 99% DE LA POPULATION COUVERTE</p><p>Opérateur historique, SFR vous assure une couverture géographique optimale.</p><p>Un réseau qui vous couvre 99% de la population couverte en 2G/3G+ et 64% en 4G : pas besoin d’en dire plus</p>',8,1464869731351,1466495297642,NULL,'',13,NULL,'',17,'','',1301,'34d1103ae374-784e-4417-acfb-08959d9da9d2',1,NULL),(33,'Carte SIM Paramétrée','Carte-SIM-Parametree-33','Service','published','','Carte SIM Paramétrée (sans ouverture de ligne)','<p>Digital Dimension s\'occupe de la relation avec l\'opérateur pour que votre caret SIM soit configuré et prête à fonctionner.<br></p>',8,1464869741238,1466678290390,NULL,'',18,NULL,'',21,'','',1302,'b95e6e29be9d-f3c4-8aa8-c740-43a565b7d13e',1,NULL),(34,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!34','MobileApp','deleted','','','A description here',1,1464876104313,1464876234659,NULL,'',NULL,NULL,'',NULL,'','',1304,'fa970eb4ce49-9d69-91de-8cb2-489d482bd874',1,NULL),(35,'IPAD Air 2 bis','IPAD-Air-2-bis-35','MaterialNDevice','published','','6,1 mm. Et vous mesurez à peine tout ce qu’il sait faire.','<p>6,1 mm. Et vous mesurez à peine tout ce qu’il sait faire.<br></p>',12,1464946860471,1466495303091,NULL,'',22,NULL,'',NULL,'','',1307,'0df390012a44-e8d6-9b94-91a6-2421b440fd70',1,NULL),(36,'BOUYGUES  - SIM triple découpe ','BOUYGUES---SIM-triple-decoupe--36','MaterialNDevice','published','','Une carte universelle et réutilisable','<p>Cette carte SIM présente non seulement l\'intérêt d\'être prédécoupée à la fois aux formats 2FF, 3FF et 4FF, mais aussi de bénéficier de chutes réutilisables. Le possesseur d\'un iPhone 5 ou ultérieur peut ainsi extraire une nano SIM du support plastique puis la repositionner s\'il bascule sur un téléphone recourant à un autre format, et réciproquement. Le crédit du fabricant est d\'être parvenu à concevoir un support à épaisseur variable, d\'autant plus que le format nano est infiniment moins épais que les deux autres formats.</p>',9,1465314061869,1466457208528,NULL,'',25,NULL,'',NULL,'','',1364,'e031cc0ebfb1-fc31-f7ca-fa2d-118110420d2d',1,NULL),(37,'Kit Batterie iPad Air','Kit-Batterie-iPad-Air-37','Service','draft','','En cas de signes de faiblesse, changez votre batterie','<p>Ce kit vous permet de changer vous-même la batterie de votre iPad Air (WiFi &amp; 3G) afin de résoudre un problème de charge ou d\'autonomie sur votre iPad Air. Ce pack comprend la Batterie d\'origine et les Outils.</p>',12,1466148174335,1472823006413,NULL,'',27,NULL,'',NULL,'','',1365,'9bdab05a8d8c-4aac-44d9-ffc9-f14e49e2cd7f',1,NULL),(38,'Support  Utilisateur','Support--Utilisateur-38','Line','draft','','Un support à votre service','<p>Notre équipe Support est joignable de 9h à 18h.</p><p>Nous nous engageons à vous répondre dans l\'heure.</p><p>Notre satisfaction est une priorité !<br></p>',13,1466154177743,1472654525341,NULL,'',34,NULL,'',NULL,'','',1366,'9a3779c55b13-75aa-241a-bf8b-59a8aae251c6',2,1),(39,'Préparation EMM','Preparation-EMM-39','Service','published','','Un équipement entièrement paramétré pour l\'utiliser immédiatement','<p>Notre équipe va paramétrer votre équipement afin qu\'il soit parfaitement opérationnel lors de sa remise.</p><p>Vous n\'aurez plus qu\'à l\'utiliser.</p>',13,1466455880562,1466456655528,NULL,'',35,NULL,'',NULL,'','',1367,'c24afc08b0e3-58e0-a0ea-38ff-63d7c0100257',1,NULL),(40,'Création de boîte aux lettres','Creation-de-boite-aux-lettres-40','MobileApp','published','','Une boîte aux lettres installée et prête à l\'usage','Nous allons créer un Boite aux lettres électronique et préparer les paramétrages à intégrer dans voter terminal.<p>Vous n\'aurez plus qu\'à l\'utiliser.</p>',13,1466456023975,1466456665225,NULL,'',37,NULL,'',NULL,'','',1368,'a33c8fe87298-f4e7-84c8-0150-94e86c0cde1f',1,NULL),(41,'Delete me','Delete-me-41','MobileApp','deleted','','','A description here',7,1467015402753,1467015585700,NULL,'',NULL,NULL,'',NULL,'','',1393,'e1976620dfd0-2778-0323-f5e6-8db045460f0f',1,NULL),(42,'Delete me','Delete-me-42','MobileApp','deleted','','','A description here',2,1467023917177,1467024235913,NULL,'',NULL,NULL,'',NULL,'','',1394,'21203f35afe3-b6ed-9839-30d1-49af90a0f905',1,NULL),(43,'Carte sim pré-param.','Carte-sim-preparam.-43','Line','published','','c\'est el produit de la démo','<p>ipsum lurum<br></p>',9,1467041314931,1467041424306,NULL,'',39,NULL,'',NULL,'','',1395,'e731d93658ce-b846-6a82-828e-0a51b8b9f854',1,NULL),(44,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!44','MobileApp','deleted','','','A description here',7,1467043418356,1467043418451,NULL,'',NULL,NULL,'',NULL,'','',1401,'01a386dd6169-b638-b6dc-eca9-18ec7e847b93',1,NULL),(45,'Assignation','Assignation-45','Service','deleted','','','A description here',7,1467210080498,1467210252695,NULL,'',NULL,NULL,'',NULL,'','',1403,'f4bcb6007754-702a-cee0-431b-7084832e10b8',1,NULL),(46,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!46','MobileApp','deleted','','','A description here',7,1467293207730,1467293067422,NULL,'',NULL,NULL,'',NULL,'','',1406,'abbab3bd1874-6b4b-a2f4-da5c-285cbb9b09b4',1,NULL),(47,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!47','MobileApp','deleted','','','A description here',7,1469003276858,1469003277841,NULL,'',NULL,NULL,'',NULL,'','',NULL,'f14f7aea0eef-e683-e265-24d0-efa93abe7393',NULL,NULL),(48,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!48','MobileApp','deleted','','','A description here',2,1469446728992,1469446959928,NULL,'',NULL,NULL,'',NULL,'','',NULL,'5132cb4aac22-7a89-4c39-7834-f3508d71ef7e',NULL,NULL),(49,'Gerard Device','Gerard-Device-49','MaterialNDevice','deleted','','','A description here',7,1469625928766,1469626423937,NULL,'',NULL,NULL,'',NULL,'','',NULL,'9ad9ece592ff-24be-e615-a521-397a3bda637c',2,NULL),(50,'Gerard Line','Gerard-Line-50','MobileApp','deleted','','','A description here',7,1469626265223,1469626511724,NULL,'',NULL,NULL,'',NULL,'','',NULL,'2f7c68ca4fdc-955c-6b80-5a17-1d75bf0f3a8c',1,NULL),(51,'Device JP','Device-JP-51','MaterialNDevice','deleted','','Device JP ','A description here',7,1469654063307,1469654200820,NULL,'',NULL,NULL,'',NULL,'','',NULL,'20c22e9757e5-6f37-ebd0-51f8-497044ade48a',2,NULL),(52,'Ligne JP','Ligne-JP-52','MobileApp','deleted','','blabla la ligne JP','A description here',7,1469655760334,1469655798609,NULL,'',NULL,NULL,'',NULL,'','',NULL,'77dd1969c218-fd4d-1a7b-488a-ee9555fa8f0f',1,NULL),(53,'Barcelone','Barcelone-53','MaterialNDevice','deleted','','Be hungry be foolish','<p>Réfléchir n\'est jamais nuisible<br></p>',12,1469718688783,1469718933605,NULL,'',43,NULL,'',NULL,'','',NULL,'f0caebea9cca-dbb3-840c-4199-2a1211c85f83',NULL,1),(54,'line JP','line-JP-54','Line','deleted','','','A description here',7,1469720699523,1469720796545,NULL,'',NULL,NULL,'',NULL,'','',NULL,'a1a9bc9e6c5d-31da-257c-10ff-11e27fc9e349',1,2),(55,'device JP','device-JP-55','MobileApp','deleted','','','A description here',7,1469720933379,1470321620777,NULL,'',NULL,NULL,'',NULL,'','',NULL,'305c296847fe-6e88-c23e-890c-60983704d64b',2,NULL),(75,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!75','MobileApp','deleted','','','A description here',2,1470083979154,1470084297409,NULL,'',44,NULL,'',NULL,'','',NULL,'58356cc88634-0045-2092-eacf-87e7cfdb577d',NULL,NULL),(76,'Produit JP1','Produit-JP1-76','MaterialNDevice','deleted','','','A description here',7,1470084671977,1470084861425,NULL,'',NULL,NULL,'',NULL,'','',NULL,'b61a99f69dcd-0671-d5f8-c255-f9637000649c',2,2),(79,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!79','MobileApp','deleted','','','A description here',2,1470091954761,1470092213357,NULL,'',45,NULL,'',NULL,'','',NULL,'f5217ad3bc1a-10f6-c174-dc82-81142b42c5df',NULL,NULL),(80,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!80','MobileApp','deleted','','','A description here',7,1470208828830,1470208829073,NULL,'',NULL,NULL,'',NULL,'','',NULL,'dac63afb360a-0486-a472-d63a-1629f68ecb1c',NULL,NULL),(81,'TL Ligne & form_1','TL-Ligne-&-form_1-81','Line','deleted','','','A description here',12,1470306390865,1470314109653,NULL,'',46,NULL,'',NULL,'','',NULL,'4fb785cee872-31cb-272d-3109-92a52e6328e2',1,NULL),(82,'TL Device & form_2','TL-Device-&-form_2-82','MobileApp','deleted','','','A description here',1,1470306579028,1470318253413,NULL,'',49,NULL,'',NULL,'','',NULL,'1b4af6f1090f-4262-549a-886f-10f840196569',2,NULL),(83,'TL Device & form_2','TL-Device-&-form_2-83','MaterialNDevice','deleted','','','A description here',7,1470324862362,1475492546166,NULL,'',70,NULL,'',NULL,'','',NULL,'ccc5e0b0e3f5-2f16-7e2b-056e-8bfa82ea630e',2,2),(84,'TL Ligne & form_1','TL-Ligne-&-form_1-84','Line','deleted','','','A description here',1,1470327032058,1475492623325,NULL,'',72,NULL,'',NULL,'','',NULL,'cf69e8defc73-2b7a-4fe0-9e36-d52d12dc7d2e',1,1),(85,'TEST PRODUCT 01','TEST-PRODUCT-01-85','MobileApp','deleted','','','A description here',2,1470384920764,1470384989159,NULL,'',NULL,NULL,'',NULL,'','',NULL,'329af59bf885-6ab7-2901-01ca-0c14a916aec6',1,1),(86,'TL Line & form_2 & owner:ODILE','TL-Line-&-form_2-&-owner:ODILE-86','MaterialNDevice','deleted','','','A description here',8,1470384948654,1475492727813,NULL,'',77,NULL,'',NULL,'','',NULL,'f41194ed0efb-3ad3-fcc9-a48c-41b35a2fac45',1,2),(87,'owner:GERARD / players:ODILE','owner:GERARD--players:ODILE-87','Line','deleted','','','A description here',7,1470387499376,1475492701209,NULL,'',75,NULL,'',NULL,'','',NULL,'d8674f0b3443-dc89-473e-cd50-2bf9337a8685',1,NULL),(88,'ower:Gerard/player:Fabrice','ower:Gerardplayer:Fabrice-88','MaterialNDevice','deleted','','','A description here',7,1470400102535,1475492751542,NULL,'',79,NULL,'',NULL,'','',NULL,'f0122afca254-c3eb-9da2-3d82-253aebd8710d',2,NULL),(89,'owner:gerard/player:odile','owner:gerardplayer:odile-89','MaterialNDevice','deleted','','','A description here',7,1470401139055,1475492782723,NULL,'',81,NULL,'',NULL,'','',NULL,'1945dcfd29a9-596a-7302-0f75-c1ea52cc9101',2,NULL),(90,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!90','MobileApp','deleted','','','A description here',7,1470402802008,1470402802287,NULL,'',NULL,NULL,'',NULL,'','',NULL,'479e199a2fe0-d94b-ed65-db2d-bca569321362',NULL,NULL),(91,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!91','MobileApp','deleted','','','<p>A description here</p>',7,1470402923785,1470403842213,NULL,'',NULL,NULL,'',NULL,'','',NULL,'0dccbbdd2ac1-589d-0d39-5cdf-e575afd2375c',NULL,NULL),(92,'John Product','John-Product-92','MobileApp','deleted','0.1','Pharse','A description here',2,1470656017151,1470656326829,NULL,'',58,58,'',NULL,'','',NULL,'f575a200df87-2293-4aa9-5421-40b83635da94',1,NULL),(93,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!93','MobileApp','draft','','','A description here',NULL,1472463340070,1472463340421,NULL,'',NULL,NULL,'',NULL,'','',NULL,'943415d33b70-3021-c488-afad-006786971efe',NULL,NULL),(94,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!94','MobileApp','draft','','','A description here',NULL,1472463346509,1472463346856,NULL,'',NULL,NULL,'',NULL,'','',NULL,'69005e6c374b-5e34-c18e-18ee-ff84e993d575',NULL,NULL),(95,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!95','MobileApp','draft','','','A description here',NULL,1472493256469,1472493256532,NULL,'',NULL,NULL,'',NULL,'','',NULL,'6a8aa93bf6a9-612c-0cc4-2ef4-e85bc6046da4',NULL,NULL),(96,'Test product ','Test-product--96','MobileApp','deleted','','Summary Title','<p>Description&nbsp;</p>',2,1472494254110,1474464553807,NULL,'',59,NULL,'',NULL,'','',NULL,'7d2c170b0b2a-4e63-c39c-ca98-d320af7c895d',1,1),(97,'DEVICE / FORM2','DEVICE--FORM2-97','MobileApp','deleted','','','A description here',7,1472546030372,1475492815283,NULL,'',83,NULL,'',NULL,'','',NULL,'ac9520e4a973-4a76-7152-31b8-cc3d7de361ba',2,2),(98,'John Line','John-Line-98','MobileApp','deleted','','','A description here',2,1472732511558,1472811106061,NULL,'',NULL,NULL,'',NULL,'','',NULL,'a8912e78f5f0-59e8-5559-1afa-0ae7e0ae21c3',1,NULL),(99,'Product Test','Product-Test-99','MobileApp','deleted','1.0','summary','A description here',2,1472826558284,1474464549433,NULL,'',NULL,NULL,'',NULL,'','',NULL,'744f9e9a622b-1c1c-d70a-2a07-342b380adea6',1,NULL),(100,'John&JP-TLline-form1','John&JPTLlineform1-100','MobileApp','deleted','','','A description here',7,1473242599542,1473346111679,NULL,'',NULL,NULL,'',NULL,'','',NULL,'2c11d87e8643-3e59-452e-5eeb-1e028af9d53f',1,1),(101,'demo du 08 sept LIGNE','demo-du-08-sept-LIGNE-101','MobileApp','deleted','','','blablabla<br>',7,1473344803123,1473348017642,NULL,'',NULL,NULL,'',NULL,'','',NULL,'0d3ebf3463fc-12e2-049e-3516-d4b90c18fcd6',1,1),(102,'demo 2 du 08','demo-2-du-08-102','Service','deleted','','','A description here',7,1473347829965,1473351405016,NULL,'',NULL,NULL,'',NULL,'','',NULL,'e7b95e5fc692-58b2-ff1d-a4dc-44b7bdfde39d',NULL,NULL),(103,'demo du 12 opérateur ORANGE','demo-du-12-operateur-ORANGE-103','MobileApp','deleted','','','A description here',7,1473674140716,1474464489004,NULL,'',NULL,NULL,'',NULL,'','',NULL,'c32677a60304-84a3-90de-17e1-f089d76f2dde',1,1),(104,'demo EMM','demo-EMM-104','Line','deleted','','','A description here',7,1473682495798,1474464493076,NULL,'',NULL,NULL,'',NULL,'','',NULL,'018651fc22b3-f178-9b1b-4a08-2a1cd4663369',1,1),(105,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!105','MobileApp','deleted','','','A description here',7,1473687073476,1473687074370,NULL,'',NULL,NULL,'',NULL,'','',NULL,'d36c9e5efa8e-a895-72f4-4b39-081ec596ecaf',NULL,NULL),(106,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!106','MobileApp','deleted','','','A description here',2,1473762886578,1473762906557,NULL,'',NULL,NULL,'',NULL,'','',NULL,'f2860b53d263-7ba7-05a3-200f-e1ffde63deb6',NULL,NULL),(107,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!107','MobileApp','deleted','','','A description here',7,1474293071593,1474293071982,NULL,'',NULL,NULL,'',NULL,'','',NULL,'3c74eb56b395-28c4-4da0-25f7-ef7d2027bca5',NULL,NULL),(108,'TESTING','TESTING-108','MobileApp','deleted','','','A description here',2,1474358713270,1474464457246,NULL,'',NULL,NULL,'',NULL,'','',NULL,'76b1a3d06407-1213-11af-782b-69572e71f789',NULL,NULL),(109,'TESTING DEVICE','TESTING-DEVICE-109','MaterialNDevice','deleted','','','A description here',2,1474359120157,1474464449748,NULL,'',63,NULL,'',NULL,'','',NULL,'e1a3868295ef-ebb3-6229-a476-09b5d705c4d1',2,NULL),(110,'TESTING LINE','TESTING-LINE-110','Line','deleted','','','A description here',2,1474359242579,1474464445971,NULL,'',64,NULL,'',NULL,'','',NULL,'a409fd19c3de-2305-a009-4380-2d07559449fb',1,1),(111,'demu du 21','demu-du-21-111','MobileApp','deleted','','demo du 21','elgrlkjrmq<br>',7,1474467537170,1475492842953,NULL,'',85,NULL,'',NULL,'','',NULL,'0cdb890f01fb-a18f-85fd-ed28-fc0cd666492b',1,1),(112,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!112','MobileApp','deleted','','','A description here',7,1474981568500,1474981569722,NULL,'',NULL,NULL,'',NULL,'','',NULL,'aefc56621a40-df44-8e70-118c-f95838a32ca3',NULL,NULL),(113,'The A Train','The-A-Train-113','MobileApp','deleted','','','A description here',2,1475498977977,1476083481548,NULL,'',87,NULL,'',NULL,'','',NULL,'7ed74fd9c823-a701-3f7d-a3a8-53a7c8c80cf3',1,NULL),(114,'Porduit U Orange','Porduit-U-Orange-114','MobileApp','deleted','','','A description here',7,1475506816764,1476083498849,NULL,'',89,NULL,'',NULL,'','',NULL,'ca36d9745f79-57d1-fc12-53e4-a951fde211b0',1,1),(115,'mail bird','mail-bird-115','MobileApp','deleted','','','A description here',7,1475510092074,1475510313954,NULL,'',90,NULL,'',NULL,'','',NULL,'70bd5038e714-d8a9-8e30-743b-3a780f8a7962',NULL,NULL),(116,'produit du 06/10','produit-du-0610-116','MobileApp','deleted','','','A description here',7,1475739781781,1476083462149,NULL,'',91,NULL,'',NULL,'','',NULL,'e9d08a393ad1-91d5-f7b4-cf76-acd9d451905b',1,1),(117,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!117','MobileApp','deleted','','','A description here',2,1475745464884,1475745471939,NULL,'',NULL,NULL,'',NULL,'','',NULL,'74c4ff4de135-8902-a8d1-d57f-a503f406abf9',NULL,NULL),(118,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!118','MobileApp','deleted','','','A description here',2,1475750017268,1475750017831,NULL,'',NULL,NULL,'',NULL,'','',NULL,'9f4b27c666e7-6c33-8c39-f442-26ef57e56d1c',NULL,NULL),(119,'gemmaLine','gemmaLine-119','Line','deleted','','','<p>new product created by Gemma</p>',2,1475752608379,1475752995174,NULL,'',93,92,'',NULL,'','',NULL,'af60dabddb75-8673-73ca-21c9-9a39e3c900cb',1,NULL),(120,'gemmaProduct','gemmaProduct-120','MobileApp','deleted','','','A description here',2,1475753169004,1475753362209,NULL,'',94,NULL,'',NULL,'','',NULL,'00b0a697df12-f390-453e-f7a6-e060ed61c368',1,NULL),(121,'Gemma\'s line','Gemma\'s-line-121','Line','deleted','','It\'s a test line','<p>a test product</p>',2,1475760926874,1475836818388,NULL,'',95,NULL,'',NULL,'','',NULL,'87ee9e992123-faac-c705-271c-acc93f200f49',1,1),(122,'gemma_spider','gemma_spider-122','MobileApp','deleted','','','A description here',2,1475765939443,1475836824840,NULL,'',NULL,NULL,'',NULL,'','',NULL,'122ce87e5f23-b300-042c-0427-73e83ed416fb',NULL,NULL),(123,'gemma_mob','gemma_mob-123','MobileApp','deleted','','','A description here',2,1475766039377,1475766086608,NULL,'',96,NULL,'',NULL,'','',NULL,'6f99ed689163-cbda-5bab-5d8f-66aab2c9e49c',NULL,NULL),(124,'Philippe','Philippe-124','MobileApp','deleted','','','A description here',7,1475828738603,1476083439222,NULL,'',97,NULL,'',NULL,'','',NULL,'bfb5f090f29d-6fa4-1337-6a59-0d87d7441af0',1,NULL),(125,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!125','MobileApp','deleted','','','A description here',7,1476090213739,1476090242406,NULL,'',98,NULL,'',NULL,'','',NULL,'6e878e2eca2c-0e05-9bc5-d081-0848784dc15d',NULL,NULL),(126,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!126','MobileApp','deleted','','','A description here',7,1476090193717,1476090213763,NULL,'',NULL,NULL,'',NULL,'','',NULL,'a50ef5364e9c-b27e-3bc4-7753-081bfe6e697e',NULL,NULL),(127,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!127','MobileApp','deleted','','','A description here',7,1476090197848,1476090217899,NULL,'',NULL,NULL,'',NULL,'','',NULL,'27856d83eb29-5fbe-5856-934b-e48744879ae1',NULL,NULL),(128,'Orange ','Orange--128','Line','published','','','A description here',7,1476090669325,1476090850287,NULL,'',99,NULL,'',NULL,'','',NULL,'9ef14d9c2cc2-5cb6-a684-be39-804d636b1d46',1,1),(129,'Purple bird','Purple-bird-129','MobileApp','published','','','A description here',7,1476090859909,1476091281480,NULL,'',100,NULL,'',NULL,'','',NULL,'53f69b446651-4785-354c-c255-cd2f39a8eea3',2,NULL),(130,'blue circle','blue-circle-130','MaterialNDevice','published','','','A description here',7,1476097499655,1476097641512,NULL,'',101,NULL,'',NULL,'','',NULL,'0fa1c251a91a-faa1-e5b3-e9dd-2a270719ee57',1,2);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_available_feature`
--

DROP TABLE IF EXISTS `product_available_feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_available_feature` (
  `id_feature` varchar(255) NOT NULL,
  `id_product` int(11) NOT NULL,
  PRIMARY KEY (`id_feature`,`id_product`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `product_available_feature_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_available_feature`
--

LOCK TABLES `product_available_feature` WRITE;
/*!40000 ALTER TABLE `product_available_feature` DISABLE KEYS */;
INSERT INTO `product_available_feature` VALUES ('PRODUCT_EDITOR',12),('PRODUCT_FEATURES',12),('PRODUCT_RESOURCES',12),('PRODUCT_SUMMARY',12),('PRODUCT_EDITOR',13),('PRODUCT_FEATURES',13),('PRODUCT_RESOURCES',13),('PRODUCT_SUMMARY',13),('PRODUCT_EDITOR',14),('PRODUCT_FEATURES',14),('PRODUCT_RESOURCES',14),('PRODUCT_SUMMARY',14),('PRODUCT_EDITOR',15),('PRODUCT_FEATURES',15),('PRODUCT_RESOURCES',15),('PRODUCT_SUMMARY',15),('PRODUCT_EDITOR',16),('PRODUCT_FEATURES',16),('PRODUCT_RESOURCES',16),('PRODUCT_SUMMARY',16),('PRODUCT_EDITOR',17),('PRODUCT_FEATURES',17),('PRODUCT_RESOURCES',17),('PRODUCT_SUMMARY',17),('PRODUCT_EDITOR',18),('PRODUCT_FEATURES',18),('PRODUCT_RESOURCES',18),('PRODUCT_SUMMARY',18),('PRODUCT_EDITOR',19),('PRODUCT_FEATURES',19),('PRODUCT_RESOURCES',19),('PRODUCT_SUMMARY',19),('PRODUCT_EDITOR',20),('PRODUCT_FEATURES',20),('PRODUCT_RESOURCES',20),('PRODUCT_SUMMARY',20),('PRODUCT_EDITOR',21),('PRODUCT_FEATURES',21),('PRODUCT_RESOURCES',21),('PRODUCT_SUMMARY',21),('PRODUCT_EDITOR',22),('PRODUCT_FEATURES',22),('PRODUCT_RESOURCES',22),('PRODUCT_SUMMARY',22),('PRODUCT_EDITOR',23),('PRODUCT_FEATURES',23),('PRODUCT_RESOURCES',23),('PRODUCT_SUMMARY',23),('PRODUCT_EDITOR',24),('PRODUCT_FEATURES',24),('PRODUCT_RESOURCES',24),('PRODUCT_SUMMARY',24),('PRODUCT_EDITOR',25),('PRODUCT_FEATURES',25),('PRODUCT_RESOURCES',25),('PRODUCT_SUMMARY',25),('PRODUCT_EDITOR',26),('PRODUCT_FEATURES',26),('PRODUCT_RESOURCES',26),('PRODUCT_SUMMARY',26),('PRODUCT_EDITOR',27),('PRODUCT_FEATURES',27),('PRODUCT_RESOURCES',27),('PRODUCT_SUMMARY',27),('PRODUCT_EDITOR',28),('PRODUCT_FEATURES',28),('PRODUCT_RESOURCES',28),('PRODUCT_SUMMARY',28),('PRODUCT_EDITOR',29),('PRODUCT_FEATURES',29),('PRODUCT_RESOURCES',29),('PRODUCT_SUMMARY',29),('PRODUCT_EDITOR',30),('PRODUCT_FEATURES',30),('PRODUCT_RESOURCES',30),('PRODUCT_SUMMARY',30),('PRODUCT_RESOURCES',31),('PRODUCT_SUMMARY',31),('PRODUCT_RESOURCES',32),('PRODUCT_SUMMARY',32),('PRODUCT_EDITOR',33),('PRODUCT_FEATURES',33),('PRODUCT_RESOURCES',33),('PRODUCT_SUMMARY',33),('PRODUCT_EDITOR',34),('PRODUCT_FEATURES',34),('PRODUCT_RESOURCES',34),('PRODUCT_SUMMARY',34),('PRODUCT_FEATURES',35),('PRODUCT_SUMMARY',35),('PRODUCT_EDITOR',36),('PRODUCT_FEATURES',36),('PRODUCT_RESOURCES',36),('PRODUCT_SUMMARY',36),('PRODUCT_EDITOR',37),('PRODUCT_FEATURES',37),('PRODUCT_RESOURCES',37),('PRODUCT_SUMMARY',37),('PRODUCT_EDITOR',38),('PRODUCT_FEATURES',38),('PRODUCT_RESOURCES',38),('PRODUCT_SUMMARY',38),('PRODUCT_SUMMARY',39),('PRODUCT_SUMMARY',40),('PRODUCT_EDITOR',41),('PRODUCT_FEATURES',41),('PRODUCT_RESOURCES',41),('PRODUCT_SUMMARY',41),('PRODUCT_EDITOR',42),('PRODUCT_FEATURES',42),('PRODUCT_RESOURCES',42),('PRODUCT_SUMMARY',42),('PRODUCT_EDITOR',43),('PRODUCT_FEATURES',43),('PRODUCT_RESOURCES',43),('PRODUCT_SUMMARY',43),('PRODUCT_EDITOR',44),('PRODUCT_FEATURES',44),('PRODUCT_RESOURCES',44),('PRODUCT_SUMMARY',44),('PRODUCT_EDITOR',45),('PRODUCT_FEATURES',45),('PRODUCT_RESOURCES',45),('PRODUCT_SUMMARY',45),('PRODUCT_EDITOR',46),('PRODUCT_FEATURES',46),('PRODUCT_RESOURCES',46),('PRODUCT_SUMMARY',46),('PRODUCT_EDITOR',51),('PRODUCT_FEATURES',51),('PRODUCT_RESOURCES',51),('PRODUCT_EDITOR',52),('PRODUCT_FEATURES',52),('PRODUCT_RESOURCES',52),('PRODUCT_FEATURES',53),('PRODUCT_SUMMARY',53),('PRODUCT_SUMMARY',76),('PRODUCT_SUMMARY',81),('PRODUCT_SUMMARY',83),('PRODUCT_SUMMARY',84),('PRODUCT_SUMMARY',86),('PRODUCT_SUMMARY',87),('PRODUCT_SUMMARY',88),('PRODUCT_EDITOR',89),('PRODUCT_FEATURES',89),('PRODUCT_RESOURCES',89),('PRODUCT_SUMMARY',89),('PRODUCT_EDITOR',96),('PRODUCT_FEATURES',96),('PRODUCT_RESOURCES',96),('PRODUCT_SUMMARY',97),('PRODUCT_EDITOR',98),('PRODUCT_FEATURES',98),('PRODUCT_RESOURCES',98),('PRODUCT_SUMMARY',98),('PRODUCT_EDITOR',99),('PRODUCT_FEATURES',99),('PRODUCT_RESOURCES',99),('PRODUCT_SUMMARY',99),('PRODUCT_SUMMARY',100),('PRODUCT_SUMMARY',101),('PRODUCT_SUMMARY',102),('PRODUCT_SUMMARY',103),('PRODUCT_SUMMARY',104),('PRODUCT_SUMMARY',108),('PRODUCT_SUMMARY',109),('PRODUCT_SUMMARY',110),('PRODUCT_SUMMARY',111),('PRODUCT_SUMMARY',112),('PRODUCT_SUMMARY',113),('PRODUCT_SUMMARY',114),('PRODUCT_SUMMARY',115),('PRODUCT_SUMMARY',116),('PRODUCT_SUMMARY',117),('PRODUCT_SUMMARY',118),('PRODUCT_SUMMARY',119),('PRODUCT_SUMMARY',120),('PRODUCT_SUMMARY',121),('PRODUCT_SUMMARY',122),('PRODUCT_SUMMARY',123),('PRODUCT_SUMMARY',124),('PRODUCT_SUMMARY',125),('PRODUCT_SUMMARY',128),('PRODUCT_SUMMARY',129),('PRODUCT_SUMMARY',130);
/*!40000 ALTER TABLE `product_available_feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_corner`
--

DROP TABLE IF EXISTS `product_corner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_corner` (
  `id_product` int(11) NOT NULL,
  `id_corner` int(11) NOT NULL,
  `highlight_product` int(11) DEFAULT '0',
  PRIMARY KEY (`id_product`,`id_corner`),
  KEY `fk_corner_product_idx` (`id_corner`),
  CONSTRAINT `fk_corner_product` FOREIGN KEY (`id_corner`) REFERENCES `corner` (`id`),
  CONSTRAINT `fk_product_corner` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_corner`
--

LOCK TABLES `product_corner` WRITE;
/*!40000 ALTER TABLE `product_corner` DISABLE KEYS */;
INSERT INTO `product_corner` VALUES (30,1,0),(30,2,0),(31,1,0),(31,2,0),(31,3,0),(32,1,0),(32,2,0),(32,3,0),(33,1,0),(35,1,0),(36,1,0),(37,1,0),(38,1,0),(39,1,0),(40,1,0),(43,1,0),(45,1,0),(50,1,0),(50,2,0),(50,3,0),(50,4,0),(51,1,0),(52,1,0),(53,5,0),(54,5,0),(55,5,0),(76,5,0),(81,5,0),(82,5,0),(83,5,0),(84,5,0),(86,5,0),(87,5,0),(89,5,0),(91,2,0),(91,3,0),(92,1,0),(92,2,0),(92,3,0),(92,4,0),(96,1,0),(96,2,0),(96,3,0),(99,1,0),(99,2,0),(99,3,0),(99,4,0),(103,2,0),(111,2,0),(115,2,0),(117,2,0),(119,8,0),(120,5,0),(120,9,0),(121,8,0),(121,9,0),(122,9,0),(123,9,0),(128,2,0),(129,2,0),(130,1,0),(130,2,0);
/*!40000 ALTER TABLE `product_corner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_feature`
--

DROP TABLE IF EXISTS `product_feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_feature` (
  `id_product` int(11) NOT NULL,
  `order` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id_product`,`order`),
  CONSTRAINT `fk_product_feature` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_feature`
--

LOCK TABLES `product_feature` WRITE;
/*!40000 ALTER TABLE `product_feature` DISABLE KEYS */;
INSERT INTO `product_feature` VALUES (30,1,'ezze','<p>	•	Processeur :&nbsp;ARM Cortex-A53 Quad-Core cadencé à 1.2 GHz</p><p>	•	Système :&nbsp;Android 4.4 KitKat</p><p>	•	Ecran :&nbsp;4.5 pouces, résolution de 480 x 800 pixels</p><p>	•	RAM :&nbsp;1.5 Go</p><p>	•	APN :&nbsp;5 MP avec auto focus, flash LED, caméra frontale 2 MP</p><p>	•	Stockage :&nbsp;8 Go, extension par MicroSDHC jusqu\'à 32 Go</p><p>	•	Connectivité :&nbsp;BT 4.0, GPS, Wi-Fi 802.11 b/g/n, Wi-Fi Direct, micro-USB, jack 3.5mm</p><p>	•	Batterie de 2200 mAh</p><p>	•	Dimensions :&nbsp;132.9 x 70.1 x 10 mm pour 154 g</p>'),(35,1,'Une meilleure expérience à chaque toucher','<p>L’iPad mini 4 tourne sous iOS 9 : le système d’exploitation mobile le plus intuitif, avancé et sécurisé au monde. Et si iOS 9 semble taillé sur mesure pour l’iPad, c’est tout sauf un hasard. Avec ses apps améliorées et ses nouvelles fonctionnalités comme Slide Over, Split View et Image dans l’image, il fait rimer productivité avec simplicité. Que vous souhaitiez consulter vos messages en répondant à des e‑mails ou créer une présentation tout en regardant un match, iOS 9 vous permettra d’exploiter l’iPad comme jamais.</p>'),(35,2,'Caméra et appareil photo géniaux.','<p>L’appareil photo iSight de l’iPad Air 2 possède des optiques dernier cri, un capteur amélioré et un puissant processeur de signal d’image développé par Apple. Il propose des fonctionnalités comme la photo panoramique, la vidéo en accéléré et au ralenti ainsi que les modes rafale et retardateur. La caméra FaceTime HD avant a également été repensée. Dotée d’un capteur perfectionné et de pixels plus grands, elle offre de meilleures performances en conditions de faible éclairage. Le bénéfice est clair et net. Vos photos, vidéos — ainsi que vos appels vidéo et selfies — sont tout simplement spectaculaires. </p>'),(35,3,'Une grande puissance.','<p>L’iPad Air 2 est plus fin. Et plus puissant. Sa puce A8X lui confère une puissance CPU et des performances graphiques nettement supérieures à celles de la génération précédente. Et avec son architecture 64 bits de pointe, l’iPad Air 2 est maintenant aussi performant que bon nombre d’ordinateurs de bureau. Pour autant, il demeure remarquablement économe en énergie. Son autonomie de 10 heures vous permet de travailler, de jouer et de surfer sur le Web toute la journée.</p>'),(37,1,'Référence','<p>diphone-657</p>'),(37,2,'Modèles iPhone/iPad/iPod ','<p>A1474, A1475, A1476</p>'),(37,3,'Détails du KIT','<p>Kit Batterie iPad Air Originale (WiFi &amp; 3G) + Outils iPad</p>'),(53,1,'Cartouche 1','<p>Test</p>'),(53,2,'Cartouche 2',''),(92,1,'John','<p>John Test</p>');
/*!40000 ALTER TABLE `product_feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_follow_ups`
--

DROP TABLE IF EXISTS `product_follow_ups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_follow_ups` (
  `id_product` int(11) NOT NULL,
  `id_follow_up_task` varchar(255) NOT NULL,
  `id_timeline` varchar(255) NOT NULL,
  `id_step` varchar(255) NOT NULL,
  `include_product_owner` tinyint(1) DEFAULT '0',
  `role_ids` varchar(255) DEFAULT NULL,
  `user_ids` varchar(255) DEFAULT NULL,
  KEY `id_product` (`id_product`),
  CONSTRAINT `product_follow_ups_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_follow_ups`
--

LOCK TABLES `product_follow_ups` WRITE;
/*!40000 ALTER TABLE `product_follow_ups` DISABLE KEYS */;
INSERT INTO `product_follow_ups` VALUES (84,'a new follow up','sav_vol_and_perte','device_wiping',0,'',''),(84,'a new follow up','sav_vol_and_perte','line_suspension',1,'3',''),(84,'a new follow up','sav_vol_and_perte','device_preparation',1,'3',''),(84,'a new follow up','sav_vol_and_perte','device_delivery',1,'3',''),(84,'test follow up','sav_casse','device_diagnostic',0,'3',''),(84,'test follow up','sav_casse','device_repair',0,'3',''),(84,'test follow up','sav_casse','sc_device_delivery',0,'3',''),(84,'new follow up','line_suspension','ls_request_in_progress',1,'',''),(84,'new follow up','line_suspension','line_suspended',1,'',''),(113,'A Train follow up','sav_casse','device_diagnostic',0,'','13'),(113,'A Train follow up','sav_casse','device_repair',0,'','13'),(113,'A Train follow up','sav_casse','sc_device_delivery',0,'','13'),(114,'SAV','sav_vol_and_perte','device_wiping',0,'',''),(114,'SAV','sav_vol_and_perte','line_suspension',0,'','13'),(114,'SAV','sav_vol_and_perte','device_preparation',0,'','13'),(114,'SAV','sav_vol_and_perte','device_delivery',0,'','13'),(116,'sav','sav_casse','device_diagnostic',0,'','8'),(116,'sav','sav_casse','sc_device_delivery',0,'','8'),(116,'sav','sav_casse','device_repair',0,'','8'),(116,'sim','sim_card','sim_code_created',0,'','12'),(116,'sim','sim_card','sim_received',0,'','12'),(116,'sim','sim_card','sim_activated',0,'','12'),(124,'1','sav_vol_and_perte','device_wiping',0,'',''),(124,'1','sav_vol_and_perte','line_suspension',0,'','13'),(124,'1','sav_vol_and_perte','device_preparation',0,'','13'),(124,'1','sav_vol_and_perte','device_delivery',0,'','13'),(124,'2','line_suspension','ls_request_in_progress',0,'','12'),(124,'2','line_suspension','line_suspended',0,'','12'),(128,'1','line_suspension','ls_request_in_progress',0,'','8'),(128,'1','line_suspension','line_suspended',0,'','8'),(128,'2','chgt_options','request_in_progress',0,'','8'),(128,'2','chgt_options','new_options_active',0,'','8'),(128,'3','sim_card','sim_code_created',0,'','8'),(128,'3','sim_card','sim_received',0,'','8'),(128,'3','sim_card','sim_activated',0,'','8'),(129,'1','sav_vol_and_perte','device_wiping',0,'',''),(129,'1','sav_vol_and_perte','line_suspension',0,'','13'),(129,'1','sav_vol_and_perte','device_preparation',0,'','13'),(129,'1','sav_vol_and_perte','device_delivery',0,'','13'),(129,'2','sav_casse','device_diagnostic',0,'','13'),(129,'2','sav_casse','sc_device_delivery',0,'','13'),(129,'2','sav_casse','device_repair',0,'','13'),(130,'1','sav_casse','device_diagnostic',0,'','8'),(130,'1','sav_casse','sc_device_delivery',0,'','8'),(130,'1','sav_casse','device_repair',0,'','8');
/*!40000 ALTER TABLE `product_follow_ups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_keyword`
--

DROP TABLE IF EXISTS `product_keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_keyword` (
  `id_product` int(11) NOT NULL,
  `id_keyword` int(11) NOT NULL,
  PRIMARY KEY (`id_product`,`id_keyword`),
  KEY `fk_keyword_product_idx` (`id_keyword`),
  CONSTRAINT `fk_keyword_product` FOREIGN KEY (`id_keyword`) REFERENCES `keyword` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_product_keyword` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_keyword`
--

LOCK TABLES `product_keyword` WRITE;
/*!40000 ALTER TABLE `product_keyword` DISABLE KEYS */;
INSERT INTO `product_keyword` VALUES (35,1),(37,1),(92,1),(96,1),(99,1),(30,2),(91,2),(92,2),(96,2),(99,2),(30,10),(31,10),(32,10),(33,10),(37,10),(38,10),(39,10),(40,10),(96,10),(99,10),(35,16),(36,16),(38,16),(39,16),(40,16),(43,16),(92,16),(30,19),(31,19),(35,19),(36,19),(37,19),(32,35),(33,35),(39,42),(40,48);
/*!40000 ALTER TABLE `product_keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_language`
--

DROP TABLE IF EXISTS `product_language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_language` (
  `id_product` int(11) NOT NULL,
  `id_language` int(11) NOT NULL,
  PRIMARY KEY (`id_product`,`id_language`),
  KEY `fk_products_has_language_language1_idx` (`id_language`),
  KEY `fk_products_has_language_products1_idx` (`id_product`),
  CONSTRAINT `fk_products_has_language_language1` FOREIGN KEY (`id_language`) REFERENCES `language` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_has_language_products1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_language`
--

LOCK TABLES `product_language` WRITE;
/*!40000 ALTER TABLE `product_language` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_link`
--

DROP TABLE IF EXISTS `product_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) NOT NULL,
  `name` enum('ANDROID','APPLE','WINDOWS','REGULAR_LINK') DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_type_idx` (`id_product`),
  CONSTRAINT `fk_product_type` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_link`
--

LOCK TABLES `product_link` WRITE;
/*!40000 ALTER TABLE `product_link` DISABLE KEYS */;
INSERT INTO `product_link` VALUES (4,30,'REGULAR_LINK','http://www.samsung.com/fr/business/business-products/smartphones/smartphones/SM-G388FDSAXEF','/public/images/customUrls/map-marker.png'),(5,35,'REGULAR_LINK','http://www.apple.com/fr/ipad-air-2/','/public/images/customUrls/map-marker.png'),(7,53,'REGULAR_LINK','http://apple.com','/public/images/customUrls/map-marker.png'),(8,53,'REGULAR_LINK','http://orange.fr','/public/images/customUrls/map-marker.png'),(15,102,'REGULAR_LINK','gfdg','/public/images/customUrls/envelope.png');
/*!40000 ALTER TABLE `product_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_timeline_step_executors`
--

DROP TABLE IF EXISTS `product_timeline_step_executors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_timeline_step_executors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `executor_type` enum('user','role','product_owner') NOT NULL,
  `id_executor` int(11) DEFAULT NULL,
  `id_timeline_step` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_timeline_step` (`id_timeline_step`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `product_timeline_step_executors_ibfk_1` FOREIGN KEY (`id_timeline_step`) REFERENCES `timeline_steps` (`id`) ON DELETE CASCADE,
  CONSTRAINT `product_timeline_step_executors_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=216 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_timeline_step_executors`
--

LOCK TABLES `product_timeline_step_executors` WRITE;
/*!40000 ALTER TABLE `product_timeline_step_executors` DISABLE KEYS */;
INSERT INTO `product_timeline_step_executors` VALUES (7,'user',7,3,50),(8,'user',7,2,50),(9,'user',7,4,50),(10,'user',7,7,49),(11,'user',2,7,49),(12,'user',7,8,49),(13,'user',2,8,49),(14,'user',7,9,49),(15,'user',2,9,49),(16,'user',2,10,49),(17,'user',7,10,49),(18,'user',2,11,49),(19,'user',7,11,49),(20,'user',7,12,49),(21,'user',2,12,49),(25,'user',8,2,52),(26,'user',8,3,52),(27,'user',8,4,52),(28,'user',7,11,51),(29,'user',12,7,51),(30,'user',12,8,51),(31,'user',7,10,51),(32,'user',12,9,51),(33,'user',5,12,51),(34,'user',6,12,51),(35,'user',8,2,54),(36,'user',8,3,54),(37,'user',8,4,54),(38,'user',13,7,55),(39,'user',13,8,55),(40,'user',13,9,55),(41,'user',13,7,76),(42,'user',13,8,76),(43,'user',13,9,76),(44,'user',13,11,76),(45,'user',13,10,76),(46,'user',13,12,76),(47,'user',12,7,82),(48,'user',12,8,82),(49,'user',12,9,82),(50,'user',12,10,82),(51,'user',12,11,82),(52,'user',12,12,82),(53,'user',12,7,83),(54,'user',12,8,83),(55,'user',12,9,83),(56,'user',12,11,83),(57,'user',12,10,83),(58,'user',12,12,83),(59,'user',8,2,84),(60,'user',8,3,84),(61,'user',8,4,84),(62,'user',8,2,85),(63,'user',8,3,85),(64,'user',8,4,85),(68,'user',8,2,86),(69,'user',8,3,86),(70,'user',12,3,86),(71,'user',8,4,86),(72,'user',8,2,87),(73,'user',8,3,87),(74,'user',8,4,87),(75,'user',12,7,88),(76,'user',12,8,88),(77,'user',12,10,88),(78,'user',12,11,88),(79,'user',12,9,88),(80,'user',12,12,88),(81,'user',8,7,89),(82,'user',8,8,89),(83,'user',8,9,89),(84,'user',8,10,89),(85,'user',8,11,89),(86,'user',8,12,89),(87,'user',14,2,39),(88,'user',14,3,39),(89,'user',14,4,39),(93,'role',3,4,96),(94,'role',3,2,96),(95,'product_owner',NULL,2,96),(96,'role',3,3,96),(97,'product_owner',NULL,3,96),(98,'product_owner',NULL,4,96),(99,'role',3,2,98),(100,'product_owner',NULL,2,98),(101,'role',3,3,98),(102,'product_owner',NULL,3,98),(103,'role',3,4,98),(104,'product_owner',NULL,4,98),(105,'user',12,7,97),(106,'user',12,8,97),(107,'user',12,9,97),(108,'user',12,10,97),(109,'user',12,11,97),(110,'user',12,12,97),(111,'user',8,2,100),(112,'user',8,3,100),(113,'user',8,4,100),(120,'user',8,2,101),(121,'user',8,3,101),(122,'user',8,4,101),(129,'role',3,4,99),(130,'role',3,2,99),(131,'product_owner',NULL,2,99),(132,'role',3,3,99),(133,'product_owner',NULL,3,99),(134,'product_owner',NULL,4,99),(135,'user',8,2,103),(136,'user',8,3,103),(137,'user',8,4,103),(138,'user',8,2,104),(139,'user',8,3,104),(140,'user',8,4,104),(141,'role',3,9,109),(142,'role',3,7,109),(143,'product_owner',NULL,7,109),(144,'role',3,8,109),(145,'product_owner',NULL,8,109),(146,'product_owner',NULL,9,109),(147,'role',3,10,109),(148,'product_owner',NULL,10,109),(149,'role',3,12,109),(150,'product_owner',NULL,12,109),(151,'role',3,11,109),(152,'role',3,2,110),(153,'role',3,3,110),(154,'role',3,4,110),(155,'user',8,2,111),(156,'user',8,3,111),(157,'user',8,4,111),(170,'user',2,9,30),(171,'user',2,7,30),(172,'role',3,7,30),(173,'user',2,8,30),(174,'role',3,8,30),(175,'role',3,9,30),(176,'role',3,10,30),(177,'user',2,10,30),(178,'user',2,11,30),(179,'role',3,11,30),(180,'user',2,12,30),(181,'role',3,12,30),(182,'user',2,2,113),(183,'user',2,3,113),(184,'user',2,4,113),(185,'user',8,2,114),(186,'user',8,3,114),(187,'user',8,4,114),(188,'user',13,2,116),(189,'user',13,3,116),(190,'user',13,4,116),(191,'role',20,2,119),(192,'role',4,3,119),(193,'role',3,3,119),(194,'role',3,4,119),(195,'user',2,4,121),(196,'user',2,2,121),(197,'role',20,2,121),(198,'user',5,3,121),(199,'role',1,3,121),(200,'role',18,4,121),(201,'user',8,2,124),(202,'user',8,3,124),(203,'user',8,4,124),(204,'user',8,2,128),(205,'user',8,3,128),(206,'user',8,4,128),(207,'user',13,7,129),(208,'user',13,8,129),(209,'user',13,9,129),(210,'user',13,10,129),(211,'user',13,11,129),(212,'user',13,12,129),(213,'user',12,2,130),(214,'user',12,3,130),(215,'user',12,4,130);
/*!40000 ALTER TABLE `product_timeline_step_executors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `products`
--

DROP TABLE IF EXISTS `products`;
/*!50001 DROP VIEW IF EXISTS `products`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `products` AS SELECT 
 1 AS `id`,
 1 AS `name`,
 1 AS `alias`,
 1 AS `type`,
 1 AS `state`,
 1 AS `version`,
 1 AS `baseline`,
 1 AS `description`,
 1 AS `created_by`,
 1 AS `creation_date`,
 1 AS `last_update`,
 1 AS `publication_date`,
 1 AS `submit_observation`,
 1 AS `logo`,
 1 AS `specification`,
 1 AS `editor_description`,
 1 AS `editor_logo`,
 1 AS `editor_homepage`,
 1 AS `editor_legal_mentions`,
 1 AS `editor`,
 1 AS `company`,
 1 AS `links`,
 1 AS `corners`,
 1 AS `features`,
 1 AS `keywords`,
 1 AS `languages`,
 1 AS `resources`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rating` (
  `id_product` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `created_date` bigint(32) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `like` tinyint(1) DEFAULT NULL,
  `comment` text,
  `answer` text,
  `answer_date` bigint(32) DEFAULT NULL,
  PRIMARY KEY (`id_product`,`id_user`),
  KEY `fk_user_like_idx` (`id_user`),
  CONSTRAINT `fk_product_like` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_like` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resource`
--

DROP TABLE IF EXISTS `resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `home_order` int(11) DEFAULT NULL COMMENT '0 will not show this resource in the slideshow and\n1…n is the position on the slideshow',
  `is_hidden` tinyint(1) DEFAULT NULL,
  `original_name` varchar(100) DEFAULT NULL,
  `creation_date` varchar(45) DEFAULT NULL,
  `name_custom` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_resource_idx` (`id_product`),
  CONSTRAINT `fk_product_resource` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource`
--

LOCK TABLES `resource` WRITE;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
INSERT INTO `resource` VALUES (2,30,'image/jpeg','2.jpeg',NULL,NULL,'samsung.jpeg',NULL,'samsung.jpeg'),(3,30,'image/jpeg','3.jpeg',1,NULL,' SAMSUNG Galaxy Xcover 3 2.jpeg',NULL,'recto/verso'),(4,30,'image/jpeg','4.jpeg',2,NULL,' SAMSUNG Galaxy Xcover 3 3.jpeg',NULL,'Galaxy Xcover 3'),(5,30,'image/jpeg','5.jpeg',3,NULL,' SAMSUNG Galaxy Xcover 3.jpeg',NULL,'Galaxy Xcover 3'),(6,30,'application/force-download','6.pdf',NULL,NULL,'SM-G388F_UM_Open_Lollipop_Fre_Rev.1.0_151207.pdf',NULL,' Manuel de l\'utilisateur'),(7,30,'video/mp4','7.mp4',NULL,NULL,'Samsung Galaxy Xcover 3- Born to survive.mp4',NULL,'Born to survive'),(9,30,'image/png','9.png',NULL,NULL,'Capture d’écran 2016-06-02 à 10.11.46.png',NULL,'Traction'),(10,31,'image/jpeg','10.jpg',NULL,NULL,'micro-sim-nano-sim-cutter.jpg',NULL,'formats'),(11,31,'image/jpeg','11.jpg',NULL,NULL,'sfr.jpg',NULL,'logo'),(12,31,'image/jpeg','12.jpg',1,NULL,'SIM triple découpe.jpg',NULL,'SIM triple'),(13,32,'image/jpeg','13.jpg',NULL,NULL,'sfr.jpg',NULL,'logo'),(16,32,'image/jpeg','16.jpg',1,NULL,'couvertuer nationale SFR.jpg',NULL,'couvertuer nationale SFR'),(17,32,'image/jpeg','17.jpg',NULL,NULL,'compa opérateurs.jpg',NULL,''),(18,33,'image/png','18.png',NULL,NULL,'DD mobilite.png',NULL,'DD mobilite.png'),(19,33,'image/jpeg','19.jpg',1,NULL,'visuelsCentre-de-services.jpg',NULL,'visuelsCentre-de-services.jpg'),(21,33,'image/jpeg','21.jpg',NULL,NULL,'salon-JP.jpg',NULL,'salon-JP.jpg'),(22,35,'image/png','22.png',NULL,NULL,'Silver-apple-logo.png',NULL,'Silver-apple-logo.png'),(23,35,'image/png','23.png',NULL,NULL,'Silver-apple-logo.png',NULL,'Silver-apple-logo.png'),(24,35,'image/jpeg','24.jpg',1,NULL,'apple air2.jpg',NULL,'apple air2.jpg'),(25,36,'image/png','25.png',NULL,NULL,'nouveau-logo-bouygues-telecom-300x300.png',NULL,'nouveau-logo-bouygues-telecom-300x300.png'),(27,37,'image/png','27.png',NULL,NULL,'Silver-apple-logo.png',NULL,'Silver-apple-logo.png'),(29,37,'image/jpeg','29.jpg',1,NULL,'batteie.jpg',NULL,'batteie.jpg'),(30,36,'image/jpeg','30.jpg',1,NULL,'SIM triple découpe.jpg',NULL,'SIM triple découpe.jpg'),(32,38,'image/jpeg','32.jpg',1,NULL,'technical_support_services.jpg',NULL,'technical_support_services.jpg'),(34,38,'image/png','34.png',NULL,NULL,'support-sncf3.png',NULL,'support-sncf3.png'),(35,39,'image/png','35.png',NULL,NULL,'support-sncf3.png',NULL,'support-sncf3.png'),(36,39,'image/jpeg','36.jpg',1,NULL,'emm.jpg',NULL,'emm.jpg'),(37,40,'image/png','37.png',NULL,NULL,'support-sncf3.png',NULL,'support-sncf3.png'),(38,40,'image/jpeg','38.jpg',1,NULL,'mail.jpg',NULL,'mail.jpg'),(39,43,'image/jpeg','39.jpg',NULL,NULL,'sfr.jpg',NULL,'sfr.jpg'),(40,43,'image/jpeg','40.jpg',1,NULL,'micro-sim-nano-sim-cutter.jpg',NULL,'micro-sim-nano-sim-cutter.jpg'),(41,53,'image/jpeg','41.JPG',1,NULL,'_DSC3301.JPG',NULL,'_DSC3301.JPG'),(42,53,'image/jpeg','42.jpg',2,NULL,'11954681_10207930603367048_8798226838160447789_n.jpg',NULL,'11954681_10207930603367048_8798226838160447789_n.jpg'),(43,53,'image/jpeg','43.jpg',NULL,NULL,'waves.jpg',NULL,'waves.jpg'),(44,75,'image/jpeg','44.jpg',NULL,NULL,'ultimate-guide-to-your-product-launch.jpg',NULL,'ultimate-guide-to-your-product-launch.jpg'),(45,79,'image/jpeg','45.jpg',NULL,NULL,'ultimate-guide-to-your-product-launch.jpg',NULL,'ultimate-guide-to-your-product-launch.jpg'),(46,81,'image/png','46.png',NULL,NULL,'apps-eclipse-icon.png',NULL,'apps-eclipse-icon.png'),(47,81,'image/png','47.png',1,NULL,'apps-scan-monitor-icon.png',NULL,'apps-scan-monitor-icon.png'),(48,82,'image/png','48.png',1,NULL,'WebcamMax-logo.png',NULL,'WebcamMax-logo.png'),(49,82,'image/png','49.png',NULL,NULL,'apps-pidgin-icon.png',NULL,'apps-pidgin-icon.png'),(57,38,'image/jpeg','57.jpg',NULL,NULL,'ultimate-guide-to-your-product-launch.jpg',NULL,'ultimate-guide-to-your-product-launch.jpg'),(58,92,'image/jpeg','58.jpg',1,NULL,'ultimate-guide-to-your-product-launch.jpg',NULL,'ultimate-guide-to-your-product-launch.jpg'),(59,96,'image/jpeg','59.jpg',1,NULL,'total-product-marketing.jpg',NULL,'total-product-marketing.jpg'),(61,102,'image/jpeg','61.jpg',1,NULL,'13880245_542319619286676_6364055531723508213_n.jpg',NULL,'13880245_542319619286676_6364055531723508213_n.jpg'),(62,102,'image/jpeg','62.jpg',2,NULL,'ultimate-guide-to-your-product-launch.jpg',NULL,'ultimate-guide-to-your-product-launch.jpg'),(63,109,'image/png','63.png',1,NULL,'hp.png',NULL,'hp.png'),(64,110,'image/png','64.png',1,NULL,'headphones.png',NULL,'headphones.png'),(70,83,'image/jpeg','70.jpg',NULL,NULL,'sncf-1.jpg',NULL,'sncf-1.jpg'),(71,83,'image/jpeg','71.jpg',1,NULL,'sncf-1.jpg',NULL,'sncf-1.jpg'),(72,84,'image/jpeg','72.JPG',NULL,NULL,'sncf-2.JPG',NULL,'sncf-2.JPG'),(73,84,'image/jpeg','73.JPG',1,NULL,'sncf-2.JPG',NULL,'sncf-2.JPG'),(74,86,'image/jpeg',NULL,NULL,NULL,'sncf-3.jpg',NULL,'sncf-3.jpg'),(75,87,'image/jpeg','75.jpg',NULL,NULL,'sncf-1.jpg',NULL,'sncf-1.jpg'),(76,87,'image/jpeg','76.jpg',1,NULL,'sncf-1.jpg',NULL,'sncf-1.jpg'),(77,86,'image/jpeg','77.jpg',NULL,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(78,86,'image/jpeg','78.jpg',1,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(79,88,'image/jpeg','79.JPG',NULL,NULL,'sncf-2.JPG',NULL,'sncf-2.JPG'),(80,88,'image/jpeg','80.JPG',1,NULL,'sncf-2.JPG',NULL,'sncf-2.JPG'),(81,89,'image/jpeg','81.jpg',NULL,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(82,89,'image/jpeg','82.jpg',1,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(83,97,'image/jpeg','83.JPG',NULL,NULL,'sncf-2.JPG',NULL,'sncf-2.JPG'),(84,97,'image/jpeg','84.JPG',1,NULL,'sncf-2.JPG',NULL,'sncf-2.JPG'),(85,111,'image/jpeg','85.jpg',NULL,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(86,111,'image/jpeg','86.jpg',1,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(87,113,'image/jpeg','87.jpg',NULL,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(88,113,'image/jpeg','88.jpg',1,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(89,114,'image/png','89.png',NULL,NULL,'apps-ubuntuone-icon.png',NULL,'apps-ubuntuone-icon.png'),(90,115,'image/png','90.png',NULL,NULL,'apps-thunderbird-icon.png',NULL,'apps-thunderbird-icon.png'),(91,116,'image/png','91.png',NULL,NULL,'apps-eclipse-icon.png',NULL,'apps-eclipse-icon.png'),(92,119,'application/pdf','92.pdf',NULL,NULL,'pdf-sample.pdf',NULL,'pdf-sample.pdf'),(93,119,'image/jpeg','93.jpg',NULL,NULL,'hormiga-patas.jpg',NULL,'hormiga-patas.jpg'),(94,120,'image/jpeg','94.jpg',NULL,NULL,'hormiga-patas.jpg',NULL,'hormiga-patas.jpg'),(95,121,'image/jpeg','95.jpg',NULL,NULL,'hormiga-patas.jpg',NULL,'hormiga-patas.jpg'),(96,123,'image/jpeg','96.jpg',NULL,NULL,'download.jpg',NULL,'download.jpg'),(97,124,'image/png','97.png',NULL,NULL,'panic-button.png',NULL,'panic-button.png'),(98,125,'image/png','98.png',NULL,NULL,'apps-clementine-icon.png',NULL,'apps-clementine-icon.png'),(99,128,'image/png','99.png',NULL,NULL,'apps-clementine-icon.png',NULL,'apps-clementine-icon.png'),(100,129,'image/png','100.png',NULL,NULL,'apps-pidgin-icon.png',NULL,'apps-pidgin-icon.png'),(101,130,'image/png','101.png',NULL,NULL,'apps-chromium-browser-icon.png',NULL,'apps-chromium-browser-icon.png');
/*!40000 ALTER TABLE `resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (3,'admin'),(6,'Ecosystème'),(2,'editor'),(1,'End-user'),(18,'fleet manager'),(20,'gemma_role'),(4,'Gerard2'),(16,'Gestionnaire'),(19,'Gestionnaire2'),(5,'Manager'),(17,'Manager2');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `created_at` bigint(32) NOT NULL DEFAULT '1473339882',
  PRIMARY KEY (`id`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,30,4,1460239200),(2,35,5,1460239200),(3,32,1000,1476223200),(4,35,1,1465509600),(5,30,30,1465509600);
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timeline`
--

DROP TABLE IF EXISTS `timeline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `timeline` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'assignment-order',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline`
--

LOCK TABLES `timeline` WRITE;
/*!40000 ALTER TABLE `timeline` DISABLE KEYS */;
INSERT INTO `timeline` VALUES (1,'line','assignment-order'),(2,'device','assignment-order'),(13,'sav_vol_and_perte','follow-up'),(14,'sav_casse','follow-up'),(15,'line_suspension','follow-up'),(16,'chgt_options','follow-up'),(17,'sim_card','follow-up');
/*!40000 ALTER TABLE `timeline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timeline_steps`
--

DROP TABLE IF EXISTS `timeline_steps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `timeline_steps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `manual` tinyint(1) NOT NULL DEFAULT '0',
  `order` int(11) NOT NULL DEFAULT '-1',
  `id_timeline` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `id_timeline` (`id_timeline`),
  CONSTRAINT `timeline_steps_ibfk_1` FOREIGN KEY (`id_timeline`) REFERENCES `timeline` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline_steps`
--

LOCK TABLES `timeline_steps` WRITE;
/*!40000 ALTER TABLE `timeline_steps` DISABLE KEYS */;
INSERT INTO `timeline_steps` VALUES (1,'tl_step_bdc_sent',0,1,1),(2,'tl_step_released_sim_to_user',1,2,1),(3,'tl_step_activated_line',1,3,1),(4,'tl_step_fleet_updated_line_1',1,4,1),(5,'tl_step_bdc_envoye',0,1,2),(6,'tl_step_fleet_updated_device_1',0,2,2),(7,'tl_step_order_received',1,3,2),(8,'tl_step_fleet_updated_device_2',1,4,2),(9,'tl_step_intregation_request',1,5,2),(10,'tl_step_integration_achieved',1,6,2),(11,'tl_step_released_terminal_to_user',1,7,2),(12,'tl_step_user_confirms_reception',1,8,2),(42,'device_wiping',0,1,13),(43,'line_suspension',1,2,13),(44,'device_preparation',1,3,13),(45,'device_delivery',1,4,13),(46,'device_diagnostic',0,1,14),(47,'device_repair',1,2,14),(48,'device_ready',1,3,14),(49,'sc_device_delivery',1,4,14),(50,'ls_request_in_progress',1,1,15),(51,'line_suspended',1,2,15),(52,'request_in_progress',1,1,16),(53,'new_options_active',1,2,16),(54,'sim_code_created',1,1,17),(55,'sim_received',1,2,17),(56,'sim_activated',1,3,17);
/*!40000 ALTER TABLE `timeline_steps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `creation_date` bigint(32) DEFAULT NULL,
  `display_name` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `auth_provider` enum('local','facebook','linkedin') NOT NULL,
  `last_connection` bigint(32) DEFAULT NULL,
  `sex` char(1) DEFAULT NULL,
  `id_role` int(11) NOT NULL DEFAULT '1',
  `phone` varchar(45) DEFAULT NULL,
  `contact_mail` varchar(45) DEFAULT NULL,
  `token` varchar(400) DEFAULT NULL,
  `social_id` varchar(32) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `social_UNIQUE` (`social_id`),
  KEY `fk_user_role_idx` (`id_role`),
  CONSTRAINT `fk_user_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'bob@intuiteev.io','ab266fcf5ce45fe51f8b770bec3d2631f20e019eb81e8a9d6c09688ded42b099',1463498233476,'Bob','Bob','','local',NULL,'F',2,'','',NULL,NULL,NULL),(2,'dede@intuiteev.io','c0d36ffae5749313da9553cec19f3cb98b2ea9bf3f4e92dcfe071c4d72a2ae29',1463498233476,'Dede','Dede','','local',NULL,'F',3,'','',NULL,NULL,NULL),(3,'bob2@intuiteev.io','f20dc737bf90cdbb513a1c65c0665c771ddc6ee482a55b74ba7759ba84897566',1463852372513,'bob2','bob junior','bob2','local',1463852372513,'M',2,'','',NULL,NULL,NULL),(4,'michel@intuiteev.io','388fe8b56526e4793347d87513441a118c8cd886b6d666ebb428c501b22c4ae5',1464960749783,'Michel-Mgr','Michel','Manager','local',1464960749783,'M',17,'','',NULL,NULL,NULL),(5,'alisson@intuiteev.io','3a2e6e87aab6f2d9e7980fbed49901247881890a6970c8efb88dd23205ecd843',1465285433336,'Alisson','Alisson','Parker','local',1465285433336,'F',1,'','',NULL,NULL,NULL),(6,'alice@intuiteev.io','365d1ffcab792bdb96c133c96c452864987d21bc8886ce2fc50c3968ebd6b5cb',1465291546671,'Alice','Alice','Irish','local',1465291546671,'F',1,'','',NULL,NULL,NULL),(7,'gerard@intuiteev.io','408717c3330187fddb0cb63bf706b6a1ca2820bcf5ca4ebe6112dbe8e34a0884',1465293900203,'Gérard','Gérard','Fleet','local',1465293900203,'M',16,'','',NULL,NULL,NULL),(8,'odile@intuiteev.io','d55080049566c8845a4dcd148d0ee4a64a166ef07bb90bed017baee5915f0ec0',1465305936017,'Odile','Odile','Deray','local',1465305936017,'F',6,'','',NULL,NULL,NULL),(9,'odette@intuiteev.io','e4d4369b064f86dd0867cc0eca7b8cf1384b72b6bb3cd659b60ca31815388787',1465311974378,'Odette','Odette','Dela','local',1465311974378,'M',6,'','',NULL,NULL,NULL),(10,'odette2@intuiteev.io','ce97087361bc028c0e8b0974af58ce5ceaa09d67d9eeb24f8060c30632060666',1465312021364,'Odette2','Odette2','Dela','local',1465312021364,'F',1,'','',NULL,NULL,NULL),(12,'fabrice@intuiteev.io','3619c3952485967a1f9404dcfb30e65dc617c96b396e7c87c917690712561cc2',1466090467342,'Fabrice','Fabrice','Supplier','local',1466090467342,'M',6,'','',NULL,NULL,NULL),(13,'stephane@intuiteev.io','6213222bef4532bd879f97177c4466f03881514ba65ee6eeab227ed1ede27092',1466090558282,'Stéphane','Stéphane','Support','local',1466090558282,'M',6,'','',NULL,NULL,NULL),(14,'delphine@intuiteev.io','70bec20491a9e727e45537c3be17955f9e03e2479cce2dd184ffe471c5ded2a8',1466772100535,'Delphine','Delphine','Weiskopf','local',1466772100535,'F',1,'','',NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profile`
--

DROP TABLE IF EXISTS `user_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_profile` (
  `id_user` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `alias` varchar(50) DEFAULT NULL,
  `description` text,
  `last_update` bigint(32) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `validated_by` int(11) DEFAULT NULL,
  `activated` tinyint(1) DEFAULT '0',
  `id_company` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `alias_editor_UNIQUE` (`alias`),
  KEY `fk_user_corner_idx` (`id_user`),
  KEY `fk_user_validated_idx` (`validated_by`),
  KEY `fk_user_company_idx` (`id_company`),
  CONSTRAINT `fk_user_company` FOREIGN KEY (`id_company`) REFERENCES `company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_corner` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_validated` FOREIGN KEY (`validated_by`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
INSERT INTO `user_profile` VALUES (1,'Bob 23','Bob-23-1',NULL,1475663859851,NULL,NULL,1,1),(2,'Dede','Dede-2','Lorem Ipsum',NULL,NULL,2,1,2),(3,'bob junior Corner','bob-junior-Corner-3',NULL,1466092871970,NULL,2,1,3),(4,'Michel Corner','MichelMgr-Corner-4',NULL,NULL,NULL,2,1,4),(5,'Alisson Corner','Alisson-Corner-5',NULL,NULL,NULL,2,1,5),(6,'Alice Corner','Alice-Corner-6',NULL,NULL,NULL,2,1,6),(7,'Gérard Corner','Gerard-Corner-7',NULL,NULL,NULL,2,1,7),(8,'Odile Corner','Odile-Corner-8',NULL,NULL,NULL,2,1,8),(9,'Odette Corner','Odette-Corner-9',NULL,NULL,NULL,2,1,9),(10,'Odette2 Corner','Odette2-Corner-10',NULL,NULL,NULL,2,1,10),(12,'Fabrice Corner','Fabrice-Corner-12',NULL,NULL,NULL,2,1,12),(13,'Stéphane Corner','Stephane-Corner-13',NULL,NULL,NULL,2,1,13),(14,'Delphine Corner','Delphine-Corner-14',NULL,NULL,NULL,2,1,14);
/*!40000 ALTER TABLE `user_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `corners`
--

/*!50001 DROP VIEW IF EXISTS `corners`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `corners` AS select `corner`.`id` AS `id`,`corner`.`name` AS `name`,`corner`.`alias` AS `alias`,`corner`.`description` AS `description`,`corner`.`created_by` AS `created_by`,`corner`.`creation_date` AS `creation_date`,`corner`.`last_update` AS `last_update`,`corner`.`logo` AS `logo`,concat('[',coalesce(group_concat(distinct concat('{"id": ',`keyword`.`id`,', "name": "',replace(coalesce(`keyword`.`name`,''),'"','\''),'"}') separator ','),''),']') AS `keywords`,concat('[',coalesce(group_concat(distinct concat('{"id": ',`product`.`id`,', "name": "',replace(coalesce(`product`.`name`,''),'"','\''),'", "highlight_product": ',`product_corner`.`highlight_product`,'}') separator ','),''),']') AS `products`,concat('[',coalesce(group_concat(distinct concat('{"id": ',`article`.`id`,', "title": "',replace(coalesce(`article`.`title`,''),'"','\''),'"}') separator ','),''),']') AS `articles` from ((((((`corner` left join `corner_keyword` on((`corner_keyword`.`id_corner` = `corner`.`id`))) left join `keyword` on((`corner_keyword`.`id_keyword` = `keyword`.`id`))) left join `product_corner` on((`product_corner`.`id_corner` = `corner`.`id`))) left join `product` on((`product_corner`.`id_product` = `product`.`id`))) left join `article_corner` on((`article_corner`.`id_corner` = `corner`.`id`))) left join `article` on((`article_corner`.`id_article` = `article`.`id`))) group by `corner`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `editors`
--

/*!50001 DROP VIEW IF EXISTS `editors`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `editors` AS select `user_profile`.`id_user` AS `id_user`,`user_profile`.`title` AS `title`,`user_profile`.`alias` AS `alias`,`user_profile`.`description` AS `description`,`user_profile`.`last_update` AS `last_update`,`user_profile`.`image` AS `image`,`user_profile`.`validated_by` AS `validated_by`,`user_profile`.`activated` AS `activated`,`user_profile`.`id_company` AS `id_company`,concat('[',coalesce(group_concat(distinct concat('{"id": ',`product`.`id`,', "name": "',replace(coalesce(`product`.`name`,''),'"','\''),'"}') separator ','),''),']') AS `keywords`,concat('[',coalesce(group_concat(distinct concat('{"id": ',`product`.`id`,', "name": "',replace(coalesce(`product`.`name`,''),'"','\''),'", "highlight_product": ',coalesce(`editor_highlight_product`.`highlight_product_order`,'""'),'}') separator ','),''),']') AS `products` from ((`user_profile` left join `product` on((`user_profile`.`id_user` = `product`.`created_by`))) left join `editor_highlight_product` on((`editor_highlight_product`.`id_product` = `product`.`id`))) group by `user_profile`.`id_user` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `products`
--

/*!50001 DROP VIEW IF EXISTS `products`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `products` AS select `product`.`id` AS `id`,`product`.`name` AS `name`,`product`.`alias` AS `alias`,`product`.`type` AS `type`,`product`.`state` AS `state`,`product`.`version` AS `version`,`product`.`baseline` AS `baseline`,`product`.`description` AS `description`,`product`.`created_by` AS `created_by`,`product`.`creation_date` AS `creation_date`,`product`.`last_update` AS `last_update`,`product`.`publication_date` AS `publication_date`,`product`.`submit_observation` AS `submit_observation`,`product`.`logo` AS `logo`,`product`.`specification` AS `specification`,`product`.`editor_description` AS `editor_description`,`product`.`editor_logo` AS `editor_logo`,`product`.`editor_homepage` AS `editor_homepage`,`product`.`editor_legal_mentions` AS `editor_legal_mentions`,coalesce(group_concat(distinct concat('{"title": "',`user_profile`.`title`,'", "alias":"',replace(`user_profile`.`alias`,'"','\\"'),'"}') separator ','),'') AS `editor`,coalesce(group_concat(distinct concat('{"id": ',`company`.`id`,', "name":"',replace(`company`.`name`,'"','\\"'),'"}') separator ','),'') AS `company`,concat('[',coalesce(group_concat(distinct concat('{"name": "',`product_link`.`name`,'", "url":"',replace(`product_link`.`url`,'"','\\"'),'", "image":"',replace(`product_link`.`image`,'"','\\"'),'"}') separator ','),''),']') AS `links`,concat('[',coalesce(group_concat(distinct concat('{"id":',`corner`.`id`,', "name":"',replace(`corner`.`name`,'"','\\"'),'"}') separator ','),''),']') AS `corners`,concat('[',coalesce(group_concat(distinct concat('{"order":',`product_feature`.`order`,', "name":"',`product_feature`.`name`,'", "description": "',replace(`product_feature`.`description`,'"','\\"'),'"}') separator ', '),''),']') AS `features`,concat('[',coalesce(group_concat(distinct concat('{"id": ',`keyword`.`id`,', "name":"',replace(`keyword`.`name`,'"','\\"'),'"}') separator ','),''),']') AS `keywords`,concat('[',coalesce(group_concat(distinct concat('{"id": ',`language`.`id`,', "name": "',replace(coalesce(`language`.`name`,''),'"','\\"'),'", "abbreviation": "',replace(`language`.`abbreviation`,'"','\\"'),'"}') separator ','),''),']') AS `languages`,concat('[',coalesce(group_concat(distinct concat('{"id": ',`resource`.`id`,',"id_product": ',`product`.`id`,', "name":"',replace(coalesce(`resource`.`name`,''),'"','\\"'),'", "type":"',`resource`.`type`,'", "home_order":',replace(coalesce(`resource`.`home_order`,'null'),'"','\\"'),', "is_hidden":',replace(coalesce(`resource`.`is_hidden`,0),'"','\\"'),', "original_name":"',replace(coalesce(`resource`.`original_name`,''),'"','\\"'),'", "name_custom":"',replace(coalesce(`resource`.`name_custom`,''),'"','\\"'),'", "creation_date":"',coalesce(`resource`.`creation_date`,''),'"}') separator ','),''),']') AS `resources` from (((((((((((`product` join `user_profile` on((`user_profile`.`id_user` = `product`.`created_by`))) join `company` on((`company`.`id` = `user_profile`.`id_company`))) left join `product_feature` on((`product_feature`.`id_product` = `product`.`id`))) left join `product_corner` on((`product_corner`.`id_product` = `product`.`id`))) left join `corner` on((`corner`.`id` = `product_corner`.`id_corner`))) left join `product_keyword` on((`product_keyword`.`id_product` = `product`.`id`))) left join `keyword` on((`keyword`.`id` = `product_keyword`.`id_keyword`))) left join `product_language` on((`product_language`.`id_product` = `product`.`id`))) left join `language` on((`language`.`id` = `product_language`.`id_language`))) left join `resource` on((`resource`.`id_product` = `product`.`id`))) left join `product_link` on((`product_link`.`id_product` = `product`.`id`))) group by `product`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-10-28 13:37:51
