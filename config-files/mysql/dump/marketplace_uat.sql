-- MySQL dump 10.13  Distrib 5.7.13, for linux-glibc2.5 (x86_64)
--
-- Host: 0.0.0.0    Database: marketplace_airbus
-- ------------------------------------------------------
-- Server version	5.7.16

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
INSERT INTO `SequelizeMeta` VALUES ('20160420153406-proabono.js'),('20160426163482-acl_setup.js'),('20160503094102-bundle.js'),('20160510134174-delete-user.js'),('20160511125936-admin-profile-company.js'),('20160518122420-acl-uservoice.js'),('20160524130284-orders-permissions.js'),('20160531172735-assignment-permissions.js'),('20160531172778-assignment.js'),('20160603122034-add-change-product-owner-permission.js'),('20160609163900-assignment-posystem.js'),('20160616132203-add-product-type.js'),('20160620153658-assigment_order-remove-add-columns.js'),('20160630122221-enable-product-features.js'),('20160712125324-product_timeline.js'),('20160713130351-populate_timelines_steps_1.js'),('20160714135677-modify_includes_po_from_product_timeline_steps_executor.js'),('20160719130114-add_timeline_to_products.js'),('20160720120204-add-product-assignment-options.js'),('20160824142451-add-external-workflow-for-assignment-orders.js'),('20160829095191-fix-timeline-executor_id-column.js'),('20160906171834-add-stock-table.js'),('20160912121125-add-gdpid-assignment-order.js'),('20160926152675-add-product-follow-ups.js'),('20160927114155-follow-ups.js'),('20160928164055-assignment-order-followups-add-demo-cols.js'),('20160929160383-remove-follow-up-state-column.js'),('20160929181981-add-follow-up-id-to-assignment-order-follow-up.js'),('20161004125267-tidy-follow-ups.js'),('20161004132680-add-timeline-type-column.js'),('20161004135248-add-follow-up-timeline-data.js');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_resource`
--

LOCK TABLES `article_resource` WRITE;
/*!40000 ALTER TABLE `article_resource` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
INSERT INTO `assignment` VALUES (28,'750ac425e',5,7,5,'576bbb6b12bf5a100000c1fa',1466677325001,1466677325001,'sncf-assignment-28',''),(29,'1116ecd61',5,7,5,'576bbd1a12bf5a100000c1fb',1466678490606,1466678490606,'sncf-assignment-29',''),(30,'b59ce613c',14,7,5,'576d311412bf5a100000c1fc',1466773694683,1466773694683,'sncf-assignment-30',''),(31,'deb2b88a0',5,7,5,'577012c312bf5a100000c1fd',1466962001917,1466962001917,'sncf-assignment-31',''),(33,'7c8ea2c95',6,7,5,'57714cef12bf5a100000c1ff',1467042961134,1467042961134,'sncf-assignment-33',''),(34,'f7b1b9fb6',6,7,5,'57714ee912bf5a100000c200',1467043458803,1467043458803,'sncf-assignment-34',''),(35,'f77f502b1',2,7,5,'579873f4fe714710005288fc',1467367908853,1467367908853,'sncf-assignment-35',''),(36,'ccd10212b',5,7,5,'5776717112bf5a100000c201',1467379798701,1467379798701,'sncf-assignment-36',''),(37,'94011a5da',6,7,5,'577679e312bf5a100000c202',1467381959325,1467381959325,'sncf-assignment-37',''),(38,'1dfd21aaa',3,7,4,NULL,1467887477017,1467887477017,'sncf-assignment-38',''),(39,'43e07eb6d',3,7,2,NULL,1467887523634,1467887523634,'sncf-assignment-39',''),(40,'eb373d374',5,7,5,'578cbe1312bf5a100000c203',1468841409097,1468841409097,'sncf-assignment-40',''),(41,'077806ee6',7,7,5,'578de00012bf5a100000c204',1468915678975,1468915678976,'sncf-assignment-41',''),(42,'1675292c4',6,7,5,'578f1d2a4afe651000b3ec92',1468996865741,1468996865741,'sncf-assignment-42',''),(43,'be7b3b3fe',6,4,5,'578f26a0fe714710005288fa',1468999309004,1468999309004,'sncf-assignment-43',''),(44,'fb0ec4610',1,7,2,NULL,1469011641930,1469011641930,'sncf-assignment-44',''),(45,'67824b6c4',5,7,2,NULL,1469096135348,1469096135349,'sncf-assignment-45',''),(46,'7c787cde3',1,7,2,NULL,1469181019240,1469181019241,'airbus-assignment-46',''),(47,'21cc3d4a9',5,7,2,NULL,1469608643504,1469608643504,'airbus-assignment-47','');
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
) ENGINE=InnoDB AUTO_INCREMENT=179 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order`
--

LOCK TABLES `assignment_order` WRITE;
/*!40000 ALTER TABLE `assignment_order` DISABLE KEYS */;
INSERT INTO `assignment_order` VALUES (103,'49b5592f2',28,NULL,2,4,NULL,0,NULL,1466677325015,NULL),(104,'ad51be059',28,32,2,4,NULL,1,NULL,1466677325042,NULL),(105,'b9e30cb15',28,35,2,4,NULL,0,NULL,1466677325042,NULL),(106,'89f40fdbc',28,39,2,4,NULL,0,NULL,1466677325042,NULL),(107,'47b993af8',28,40,2,4,NULL,0,NULL,1466677325042,NULL),(108,'2a438cd9d',29,NULL,2,4,NULL,0,NULL,1466678490616,NULL),(109,'5b5e21435',29,32,2,4,NULL,1,NULL,1466678490628,NULL),(110,'e82e48622',29,35,2,4,NULL,0,NULL,1466678490628,NULL),(111,'3ed8e0555',29,39,2,4,NULL,0,NULL,1466678490628,NULL),(112,'b9bfe34fd',29,40,2,4,NULL,0,NULL,1466678490628,NULL),(113,'494364314',30,NULL,2,4,NULL,0,NULL,1466773694694,NULL),(114,'6355715f1',30,32,2,4,NULL,1,NULL,1466773694720,NULL),(115,'b3e46d982',30,35,2,4,NULL,0,NULL,1466773694720,NULL),(116,'a3a192cbb',30,39,2,4,NULL,0,NULL,1466773694720,NULL),(117,'15775d782',30,40,2,4,NULL,0,NULL,1466773694720,NULL),(118,'7058ae8fa',31,NULL,2,4,NULL,0,NULL,1466962001928,NULL),(119,'07166d651',31,32,2,4,NULL,1,NULL,1466962001953,NULL),(120,'9c4b3f229',31,35,2,4,NULL,1,NULL,1466962001953,NULL),(121,'2cdb0449f',31,39,2,4,NULL,0,NULL,1466962001953,NULL),(122,'99f8f6aa4',31,40,2,4,NULL,0,NULL,1466962001953,NULL),(128,'334ffdd07',33,NULL,2,4,NULL,0,NULL,1467042961144,NULL),(129,'c491429d3',33,35,2,4,NULL,0,NULL,1467042961160,NULL),(130,'8087d7640',33,39,2,4,NULL,0,NULL,1467042961160,NULL),(131,'6d85156c7',33,40,2,4,NULL,0,NULL,1467042961160,NULL),(132,'b4c1e0785',33,43,2,4,NULL,0,NULL,1467042961160,NULL),(133,'d3135a3b5',34,NULL,2,4,NULL,0,NULL,1467043458811,NULL),(134,'59cd6f8c7',34,32,2,4,NULL,1,NULL,1467043458826,NULL),(135,'8fe1f767d',34,35,2,4,NULL,0,NULL,1467043458826,NULL),(136,'c7edff234',34,39,2,4,NULL,0,NULL,1467043458826,NULL),(137,'07c3a4227',34,40,2,4,NULL,0,NULL,1467043458826,NULL),(138,'d63207242',35,43,NULL,4,NULL,0,NULL,1467367908863,NULL),(139,'48516a7ce',36,NULL,2,4,NULL,0,NULL,1467379798710,NULL),(140,'84aeec5af',36,32,2,4,NULL,1,NULL,1467379798734,NULL),(141,'c00ab7304',36,35,2,4,NULL,0,NULL,1467379798734,NULL),(142,'0d029f107',36,39,2,4,NULL,0,NULL,1467379798734,NULL),(143,'5d4205859',36,40,2,4,NULL,0,NULL,1467379798734,NULL),(144,'a0188515d',37,NULL,2,4,NULL,0,NULL,1467381959331,NULL),(145,'8fbb3f9cf',37,32,2,4,NULL,1,NULL,1467381959351,NULL),(146,'0abfa53a0',37,35,2,4,NULL,0,NULL,1467381959351,NULL),(147,'eb13dae67',37,39,2,4,NULL,0,NULL,1467381959351,NULL),(148,'0db3165ee',37,40,2,4,NULL,0,NULL,1467381959351,NULL),(149,'c72b2bc72',38,35,NULL,4,NULL,0,NULL,1467887477028,NULL),(150,'a29490ed1',39,37,NULL,4,NULL,0,NULL,1467887523644,NULL),(151,'7cfbf0830',40,NULL,2,4,NULL,0,NULL,1468841409116,NULL),(152,'fd12a682c',40,32,2,4,NULL,0,NULL,1468841409138,NULL),(153,'4a8896ae9',40,35,2,4,NULL,0,NULL,1468841409138,NULL),(154,'377565bbb',40,39,2,4,NULL,0,NULL,1468841409138,NULL),(155,'ed3f0bb20',40,40,2,4,NULL,0,NULL,1468841409138,NULL),(156,'412e74262',41,NULL,2,4,NULL,0,NULL,1468915678995,NULL),(157,'3f3c88906',41,32,2,4,NULL,0,NULL,1468915679012,NULL),(158,'6db9cf579',41,35,2,4,NULL,0,NULL,1468915679012,NULL),(159,'34fbad6c1',41,39,2,4,NULL,0,NULL,1468915679012,NULL),(160,'ec5d9c628',41,40,2,4,NULL,0,NULL,1468915679012,NULL),(161,'8fec4d9fa',42,NULL,2,4,NULL,0,NULL,1468996865751,NULL),(162,'46b4d3de5',42,32,2,4,NULL,0,NULL,1468996865762,NULL),(163,'f24d7f5b1',42,35,2,4,NULL,0,NULL,1468996865762,NULL),(164,'3e1513863',42,39,2,4,NULL,0,NULL,1468996865762,NULL),(165,'518e6d3d1',42,40,2,4,NULL,0,NULL,1468996865762,NULL),(166,'9025fb27d',43,36,NULL,4,NULL,0,NULL,1468999309016,NULL),(167,'a6088fc49',44,NULL,2,4,NULL,0,NULL,1469011641940,NULL),(168,'c7fc01c16',44,32,2,4,NULL,0,NULL,1469011641955,NULL),(169,'cceee7114',44,35,2,4,NULL,0,NULL,1469011641955,NULL),(170,'1e1a3977e',44,39,2,4,NULL,0,NULL,1469011641955,NULL),(171,'2f3152603',44,40,2,4,NULL,0,NULL,1469011641955,NULL),(172,'44fe99460',45,NULL,2,4,NULL,0,NULL,1469096135359,NULL),(173,'8c60bebd0',45,32,2,4,NULL,0,NULL,1469096135386,NULL),(174,'8e86292dc',45,35,2,4,NULL,0,NULL,1469096135386,NULL),(175,'32492a8c5',45,39,2,4,NULL,0,NULL,1469096135386,NULL),(176,'afa8ea52b',45,40,2,4,NULL,0,NULL,1469096135386,NULL),(177,'6f8b089bb',46,31,NULL,4,NULL,0,NULL,1469181019249,NULL),(178,'f67d972c5',47,31,NULL,4,NULL,0,NULL,1469608643515,NULL);
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
  `created_at` bigint(32) NOT NULL DEFAULT '1475047299105',
  `deleted_at` bigint(32) DEFAULT NULL,
  `id_timeline` varchar(255) NOT NULL,
  `id_follow_up_task` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_assignment_order` (`id_assignment_order`),
  CONSTRAINT `assignment_order_follow_ups_ibfk_1` FOREIGN KEY (`id_assignment_order`) REFERENCES `assignment_order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order_follow_ups`
--

LOCK TABLES `assignment_order_follow_ups` WRITE;
/*!40000 ALTER TABLE `assignment_order_follow_ups` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle`
--

LOCK TABLES `bundle` WRITE;
/*!40000 ALTER TABLE `bundle` DISABLE KEYS */;
INSERT INTO `bundle` VALUES (1,'ADC - Kit nouvel arrivant','Une dotation complète et opérationnelle.','Ce kit comprend :\n. un SAMSUNG Galaxy Xcover3\n. un carte SIM et une ligne voix associé',2,1464870237649,1464870237649,NULL,4,'ADC--Kit-nouvel-arrivant-1',1),(2,' Sirius NG - Kit Ipad AIR paramétré 2','Une dotation complète et opérationnelle.','Ce kit comprend :\n. un iPad Air\n. une ligne voix nationale\n. création d\'une boite aux lettres\n. le paramétrage de l\'EMM',2,1464870435747,1464870435747,NULL,1,' Sirius-NG--Kit-Ipad-AIR-parametre-2-2',3),(3,'Bundle de demo','c\'est el plus beau bundle',NULL,7,1465373092385,1465373092385,NULL,3,'Bundle-de-demo-3',NULL),(4,'Donnez un titre à votre package',NULL,NULL,7,1466456756889,1466456756889,NULL,3,'Donnez-un-titre-a-votre-package-4',NULL),(5,'Donnez un titre à votre package',NULL,NULL,7,1467042135006,1467042135006,NULL,3,'Donnez-un-titre-a-votre-package-5',NULL);
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
INSERT INTO `bundle_component` VALUES (1,30,0),(1,32,1),(2,32,1),(2,35,0),(3,35,0),(3,36,1),(2,39,3),(2,40,2);
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
INSERT INTO `bundle_corner` VALUES (1,1),(2,1),(3,1);
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
INSERT INTO `bundle_keyword` VALUES (2,1),(1,10),(2,16);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle_resource`
--

LOCK TABLES `bundle_resource` WRITE;
/*!40000 ALTER TABLE `bundle_resource` DISABLE KEYS */;
INSERT INTO `bundle_resource` VALUES (1,1,1,0,NULL),(2,1,2,1,NULL),(3,2,3,0,NULL),(4,2,4,1,NULL);
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
  CONSTRAINT `fk_corner_created` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corner`
--

LOCK TABLES `corner` WRITE;
/*!40000 ALTER TABLE `corner` DISABLE KEYS */;
INSERT INTO `corner` VALUES (1,'AIRBUS','AIRBUS-1','',2,1463570857648,1469182503210,'logo-1.jpg'),(2,'AIRBUS DEFENCE AND SPACE','AIRBUS-DEFENCE-AND-SPACE-2','',2,1463570874016,1469182535060,'logo-2.jpg'),(3,'AIRBUS HELICOPTERS','AIRBUS-HELICOPTERS-3','',2,1463570891482,1469180774017,'logo-3.jpg');
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
INSERT INTO `corner_keyword` VALUES (1,1),(2,1),(1,2),(2,2),(1,10),(1,16),(1,19),(1,35),(1,42),(1,48);
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `external_workflows`
--

LOCK TABLES `external_workflows` WRITE;
/*!40000 ALTER TABLE `external_workflows` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `general_setting`
--

LOCK TABLES `general_setting` WRITE;
/*!40000 ALTER TABLE `general_setting` DISABLE KEYS */;
INSERT INTO `general_setting` VALUES (1,'seo:title','LOGO Airbus'),(3,'seo:tagline','Airbus'),(4,'seo:description','.....');
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_carousel`
--

LOCK TABLES `home_carousel` WRITE;
/*!40000 ALTER TABLE `home_carousel` DISABLE KEYS */;
INSERT INTO `home_carousel` VALUES (1,NULL,NULL,'carousel-1.jpg',NULL,NULL,NULL,NULL,NULL,1),(2,NULL,NULL,'carousel-2.jpg',NULL,NULL,NULL,NULL,NULL,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_resource`
--

LOCK TABLES `item_resource` WRITE;
/*!40000 ALTER TABLE `item_resource` DISABLE KEYS */;
INSERT INTO `item_resource` VALUES (1,'image/jpeg','1.jpg','logo sncf - KIT.jpg','logo sncf - KIT.jpg',1464945270058,0,NULL),(2,'image/png','2.png','bundle.png','bundle.png',1464945435449,0,NULL),(3,'image/jpeg','3.jpg','logo sncf - KIT.jpg','logo sncf - KIT.jpg',1466153906789,0,NULL),(4,'image/png','4.png','bundle.png','bundle.png',1466153922265,0,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;
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
  `id_role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission_role`
--

LOCK TABLES `permission_role` WRITE;
/*!40000 ALTER TABLE `permission_role` DISABLE KEYS */;
INSERT INTO `permission_role` VALUES ('EDIT_ARTICLE',3),('VALIDATE_PUBLICATION_ARTICLE',3),('UNPUBLISH_ARTICLE',3),('DELETE_ARTICLE',3),('EDIT_PRODUCT',3),('PUBLISH_ARTICLE',3),('VALIDATE_PUBLICATION_PRODUCT',3),('PUBLISH_PRODUCT',3),('UNPUBLISH_PRODUCT',3),('DELETE_PRODUCT',3),('CREATE_BUNDLE',3),('EDIT_BUNDLE_OWN',3),('UNPUBLISH_BUNDLE_OWN',3),('DELETE_BUNDLE_OWN',3),('CREATE_CORNER',3),('EDIT_CORNER',3),('DELETE_CORNER',3),('EDIT_USER_CORNER',3),('CREATE_ROLES',3),('EDIT_ROLES_PERMISSION',3),('EDIT_USER_ROLE',3),('READ_USERS',3),('READ_USERS_DETAILS',3),('CREATE_USER',3),('EDIT_GENERAL_SETTINGS',3),('EDIT_USER',3),('CREATE_PRODUCT',2),('EDIT_USER_CORNER_OWN',2),('CREATE_PRODUCT',3),('CREATE_ARTICLE',5),('EDIT_ARTICLE_OWN',5),('DELETE_ARTICLE_OWN',5),('UNPUBLISH_ARTICLE_OWN',5),('EDIT_USER_CORNER_OWN',5),('REQUEST_PUBLICATION_ARTICLE',5),('CREATE_PRODUCT',4),('EDIT_PRODUCT',4),('REQUEST_PUBLICATION_PRODUCT',4),('VALIDATE_PUBLICATION_PRODUCT',4),('PUBLISH_PRODUCT',4),('UNPUBLISH_PRODUCT',4),('DELETE_PRODUCT',4),('READ_USERS',4),('READ_USERS_DETAILS',4),('REQUEST_PUBLICATION_BUNDLE_OWN',3),('CREATE_BUNDLE',4),('EDIT_BUNDLE_OWN',4),('READ_USERS',5),('READ_USERS_DETAILS',5),('USERVOICE_BO_ACCESS',4),('CREATE_BUNDLE',16),('EDIT_BUNDLE_OWN',16),('REQUEST_PUBLICATION_BUNDLE_OWN',16),('UNPUBLISH_BUNDLE_OWN',16),('DELETE_BUNDLE_OWN',16),('USERVOICE_LIVE_CHAT',1),('EDIT_USER_CORNER_OWN',3),('EDIT_ASSIGNMENT_OWN',18),('REQUEST_VALIDATION_ASSIGNMENT_OWN',18),('CANCEL_PENDING_ASSIGNMENT_OWN',18),('VALIDATE_ASSIGNMENT',18),('ASSIGNMENTS_LIST_ALL_INFO',18),('CANCEL_PENDING_ASSIGNMENT',18),('ASSIGNMENTS_LIST_BASIC_INFO',1),('CHANGE_PRODUCT_OWNER',3),('ASSIGNMENTS_LIST_ALL_INFO',17),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',17),('VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',2),('ASSIGNMENTS_LIST_ALL_INFO',2),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',1),('ASSIGNMENTS_LIST_ALL_INFO',6),('OFFER_PRODUCT',3),('ASSIGNMENTS_LIST_BASIC_INFO',17),('EDIT_ASSIGNMENT',4),('CREATE_ASSIGNMENT',4),('VALIDATE_ASSIGNMENT',17),('READ_USERS_DETAILS',17),('READ_USERS',17),('CREATE_ASSIGNMENT',16),('EDIT_ASSIGNMENT_OWN',16),('REQUEST_VALIDATION_ASSIGNMENT_OWN',16),('CANCEL_PENDING_ASSIGNMENT_OWN',16),('VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',16),('ASSIGNMENTS_LIST_ALL_INFO',16),('CHANGE_PRODUCT_OWNER',16),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',16),('REQUEST_VALIDATION_ASSIGNMENT',17),('CREATE_ASSIGNMENT',17),('EDIT_ASSIGNMENT',17),('CANCEL_PENDING_ASSIGNMENT',17),('VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',6),('EDIT_PRODUCT',16),('REQUEST_PUBLICATION_PRODUCT',16),('UNPUBLISH_PRODUCT',16),('DELETE_PRODUCT',16),('UNPUBLISH_PRODUCT',17),('DELETE_PRODUCT',17),('VALIDATE_PUBLICATION_PRODUCT',17),('REQUEST_PUBLICATION_PRODUCT',17),('EDIT_PRODUCT_OWN',17),('ASSIGNMENTS_LIST_BASIC_INFO',16),('REQUEST_PUBLICATION_PRODUCT',3),('CREATE_PRODUCT',16),('CREATE_CORNER',2),('EDIT_CORNER',2),('DELETE_CORNER',2),('EDIT_USER_CORNER',2),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',2),('READ_USERS',16),('READ_USERS',2),('USERVOICE_BO_ACCESS',16),('CREATE_PRODUCT',6),('USERVOICE_LIVE_CHAT',6),('CHANGE_PRODUCT_OWNER',2),('EDIT_PRODUCT',2),('REQUEST_PUBLICATION_PRODUCT',2),('UNPUBLISH_PRODUCT',2),('DELETE_PRODUCT',2),('VALIDATE_PUBLICATION_BUNDLE',17),('VALIDATE_USERS',3),('CREATE_CORNER',4),('EDIT_CORNER',4),('DELETE_CORNER',4),('EDIT_USER_CORNER',4),('EDIT_USER_CORNER_OWN',4),('CAN_ACCESS_GDP',16),('CAN_ACCESS_BI360',16),('CAN_ACCESS_GDP',17),('CAN_ACCESS_BI360',17),('USERVOICE_LIVE_CHAT',17),('CAN_ACCESS_BI360',1),('EDIT_BUNDLE',17),('PUBLISH_BUNDLE',17),('REQUEST_VALIDATION_ASSIGNMENT',16),('MICHEL_BI360_CHART',17),('GERARD_BI360_CHART',16),('CAN_ACCESS_GDP2',17);
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
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (12,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!12','MobileApp','deleted','','','A description here',1,1463578953067,1463579056757,NULL,'',NULL,NULL,'',NULL,'','',1034,'43ecd929984d-bad4-68fe-c48a-4c2e85d61ae9',1,NULL),(13,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!13','MobileApp','deleted','','','A description here',1,1463579044186,1463579147897,NULL,'',NULL,NULL,'',NULL,'','',1035,'c3e9176cce4e-fff5-3207-af6d-3c991001371a',1,NULL),(14,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!14','MobileApp','deleted','','','A description here',1,1463579287322,1463579391304,NULL,'',NULL,NULL,'',NULL,'','',1036,'2b5fc5a389f8-4eef-6aa7-9379-9155d918004b',1,NULL),(15,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!15','MobileApp','deleted','','','A description here',1,1463579416942,1463579520631,NULL,'',NULL,NULL,'',NULL,'','',1037,'fc0decbdac8d-f3b7-f21a-6638-7eab4b997497',1,NULL),(16,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!16','MobileApp','deleted','','','A description here',1,1463579458614,1463579562311,NULL,'',NULL,NULL,'',NULL,'','',1038,'ad2327a0f662-b502-96a4-c444-16a9289d67b2',1,NULL),(17,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!17','MobileApp','deleted','','','A description here',1,1463579549626,1463579653311,NULL,'',NULL,NULL,'',NULL,'','',1039,'9c9aa213013f-efa9-30f5-4935-003e22c8a201',1,NULL),(18,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!18','MobileApp','deleted','','','A description here',1,1463579649913,1463579753611,NULL,'',NULL,NULL,'',NULL,'','',1040,'8ba40ace1eef-a7ab-d5fc-0868-478fdbc28d0b',1,NULL),(19,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!19','MobileApp','deleted','','','A description here',1,1463579755785,1463579859472,NULL,'',NULL,NULL,'',NULL,'','',1041,'f65fdf03e911-08a8-e84f-6e53-5993cd847f5c',1,NULL),(20,'Test','Test-20','MobileApp','deleted','','','A description here',1,1463580257992,1463582512136,NULL,'',NULL,NULL,'',NULL,'','',1045,'b39d3ed15538-ff58-df41-fa2d-0ac1a9c20051',1,NULL),(21,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!21','MobileApp','deleted','','','A description here',1,1463582582137,1463582685851,NULL,'',NULL,NULL,'',NULL,'','',1046,'196b3e54c716-a099-0e83-3a79-39fce25e0857',1,NULL),(22,'Lalala','Lalala-22','MobileApp','deleted','','','A description here',1,1463582769473,1463585202323,NULL,'',NULL,NULL,'',NULL,'','',1047,'b9b02b7623ca-a8c1-52c6-e381-1e332a8191bd',1,NULL),(23,'Update','Update-23','MobileApp','deleted','','','A description here',1,1463584930983,1463585059596,NULL,'',NULL,NULL,'',NULL,'','',1048,'131fd08fbcb4-86b8-66fa-c07c-b99c9dfcfd58',1,NULL),(24,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!24','MobileApp','deleted','','','A description here',1,1463585116762,1463585220489,NULL,'',NULL,NULL,'',NULL,'','',1049,'deeacd93c47d-d444-0346-c67a-a552abd6876f',1,NULL),(25,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!25','MobileApp','deleted','','','A description here',1,1463585122773,1463585226501,NULL,'',NULL,NULL,'',NULL,'','',1164,'fbb8aa6c07a8-6913-5a45-c48e-61d9975145b9',1,NULL),(26,'Feature','Feature-26','MobileApp','deleted','','','A description here',1,1464173202183,1464174480975,NULL,'',NULL,NULL,'',NULL,'','',1165,'17e38592574e-fc43-cece-75ea-df7108fe8e9d',1,NULL),(27,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!27','MobileApp','deleted','','','A description here',1,1464173242550,1464173243277,NULL,'',NULL,NULL,'',NULL,'','',1166,'a7841d311f24-4180-2d91-4c53-8a3368e9f023',1,NULL),(28,'test 28','test-28-28','MobileApp','deleted','','','A description here',1,1464174506991,1464174559092,NULL,'',NULL,NULL,'',NULL,'','',1167,'bed00d4b6cb9-5126-603d-1e89-af5870362b71',1,NULL),(29,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!29','MobileApp','deleted','','','A description here',1,1464174532633,1464174533290,NULL,'',NULL,NULL,'',NULL,'','',1168,'1d3693003209-1e4f-adb6-708a-4716ae6a011a',1,NULL),(30,' SAMSUNG Galaxy Xcover 3',' SAMSUNG-Galaxy-Xcover-3-30','MaterialNDevice','pending','','Un smartphone pour les baroudeurs','<p>Le&nbsp;Samsung Galaxy Xcover 3&nbsp; est un smartphone ultra résistant conçu pour les sportifs et les baroudeurs, protégé contre les éléments, il vous accompagnera dans toutes vos expéditions. Le Galaxy Xcover 3 de Samsung est certifié IP67 pour une résistance extrême !</p><p>Il est doté d’un écran tactile de 4.5 pouces offrant une résistance hors du commun, d’un processeur ARM Cortex-A53 Quad-Core cadencé à 1.2 GHz épaulé par 1.5 Go de Ram, et est animé par le système d’exploitation Android 4.4.</p>',12,1464853557014,1467367896113,NULL,'',2,6,'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',9,'','',1303,'3b60046591bc-07fd-c4ce-e6b6-1c587d49d32a',1,NULL),(31,'SFR - SIM triple découpe ','SFR--SIM-triple-decoupe--31','MaterialNDevice','published','v.1','Une carte universelle et réutilisable','<p>Cette carte SIM présente non seulement l\'intérêt d\'être prédécoupée à la fois aux formats 2FF, 3FF et 4FF, mais aussi de bénéficier de chutes réutilisables. Le possesseur d\'un iPhone 5 ou ultérieur peut ainsi extraire une nano SIM du support plastique puis la repositionner s\'il bascule sur un téléphone recourant à un autre format, et réciproquement. Le crédit du fabricant est d\'être parvenu à concevoir un support à épaisseur variable, d\'autant plus que le format nano est infiniment moins épais que les deux autres formats.<br></p>',8,1464869312691,1466612462123,NULL,'',11,NULL,'',10,'','',1300,'abacfacb7474-06d7-da6c-6449-4975a9dd7f2b',1,NULL),(32,'SFR - Ligne Voix Nationale','SFR--Ligne-Voix-Nationale-32','Line','published','','Création de ligne Voix Nationale','<p>EN FRANCE, 99% DE LA POPULATION COUVERTE</p><p>Opérateur historique, SFR vous assure une couverture géographique optimale.</p><p>Un réseau qui vous couvre 99% de la population couverte en 2G/3G+ et 64% en 4G : pas besoin d’en dire plus</p>',8,1464869731351,1466495297642,NULL,'',13,NULL,'',17,'','',1301,'34d1103ae374-784e-4417-acfb-08959d9da9d2',1,NULL),(33,'Carte SIM Paramétrée','Carte-SIM-Parametree-33','Service','published','','Carte SIM Paramétrée (sans ouverture de ligne)','<p>Digital Dimension s\'occupe de la relation avec l\'opérateur pour que votre caret SIM soit configuré et prête à fonctionner.<br></p>',8,1464869741238,1466678290390,NULL,'',18,NULL,'',21,'','',1302,'b95e6e29be9d-f3c4-8aa8-c740-43a565b7d13e',1,NULL),(34,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!34','MobileApp','deleted','','','A description here',1,1464876104313,1464876234659,NULL,'',NULL,NULL,'',NULL,'','',1304,'fa970eb4ce49-9d69-91de-8cb2-489d482bd874',1,NULL),(35,'IPAD Air 2 bis','IPAD-Air-2-bis-35','MaterialNDevice','published','','6,1 mm. Et vous mesurez à peine tout ce qu’il sait faire.','<p>6,1 mm. Et vous mesurez à peine tout ce qu’il sait faire.<br></p>',12,1464946860471,1466495303091,NULL,'',22,NULL,'',NULL,'','',1307,'0df390012a44-e8d6-9b94-91a6-2421b440fd70',1,NULL),(36,'BOUYGUES  - SIM triple découpe ','BOUYGUES---SIM-triple-decoupe--36','MaterialNDevice','published','','Une carte universelle et réutilisable','<p>Cette carte SIM présente non seulement l\'intérêt d\'être prédécoupée à la fois aux formats 2FF, 3FF et 4FF, mais aussi de bénéficier de chutes réutilisables. Le possesseur d\'un iPhone 5 ou ultérieur peut ainsi extraire une nano SIM du support plastique puis la repositionner s\'il bascule sur un téléphone recourant à un autre format, et réciproquement. Le crédit du fabricant est d\'être parvenu à concevoir un support à épaisseur variable, d\'autant plus que le format nano est infiniment moins épais que les deux autres formats.</p>',9,1465314061869,1466457208528,NULL,'',25,NULL,'',NULL,'','',1364,'e031cc0ebfb1-fc31-f7ca-fa2d-118110420d2d',1,NULL),(37,'Kit Batterie iPad Air','Kit-Batterie-iPad-Air-37','MaterialNDevice','published','','En cas de signes de faiblesse, changez votre batterie','<p>Ce kit vous permet de changer vous-même la batterie de votre iPad Air (WiFi &amp; 3G) afin de résoudre un problème de charge ou d\'autonomie sur votre iPad Air. Ce pack comprend la Batterie d\'origine et les Outils.</p>',12,1466148174335,1466495312235,NULL,'',27,NULL,'',NULL,'','',1365,'9bdab05a8d8c-4aac-44d9-ffc9-f14e49e2cd7f',1,NULL),(38,'Support  Utilisateur','Support--Utilisateur-38','Service','published','','Un support à votre service','<p>Notre équipe Support est joignable de 9h à 18h.</p><p>Nous nous engageons à vous répondre dans l\'heure.</p><p>Notre satisfaction est une priorité !<br></p>',13,1466154177743,1466455872933,NULL,'',34,NULL,'',NULL,'','',1366,'9a3779c55b13-75aa-241a-bf8b-59a8aae251c6',1,NULL),(39,'Préparation EMM','Preparation-EMM-39','Service','published','','Un équipement entièrement paramétré pour l\'utiliser immédiatement','<p>Notre équipe va paramétrer votre équipement afin qu\'il soit parfaitement opérationnel lors de sa remise.</p><p>Vous n\'aurez plus qu\'à l\'utiliser.</p>',13,1466455880562,1466456655528,NULL,'',35,NULL,'',NULL,'','',1367,'c24afc08b0e3-58e0-a0ea-38ff-63d7c0100257',1,NULL),(40,'Création de boîte aux lettres','Creation-de-boite-aux-lettres-40','MobileApp','published','','Une boîte aux lettres installée et prête à l\'usage','Nous allons créer un Boite aux lettres électronique et préparer les paramétrages à intégrer dans voter terminal.<p>Vous n\'aurez plus qu\'à l\'utiliser.</p>',13,1466456023975,1466456665225,NULL,'',37,NULL,'',NULL,'','',1368,'a33c8fe87298-f4e7-84c8-0150-94e86c0cde1f',1,NULL),(41,'Delete me','Delete-me-41','MobileApp','deleted','','','A description here',7,1467015402753,1467015585700,NULL,'',NULL,NULL,'',NULL,'','',1393,'e1976620dfd0-2778-0323-f5e6-8db045460f0f',1,NULL),(42,'Delete me','Delete-me-42','MobileApp','deleted','','','A description here',2,1467023917177,1467024235913,NULL,'',NULL,NULL,'',NULL,'','',1394,'21203f35afe3-b6ed-9839-30d1-49af90a0f905',1,NULL),(43,'Carte sim pré-param.','Carte-sim-preparam.-43','Line','published','','c\'est el produit de la démo','<p>ipsum lurum<br></p>',9,1467041314931,1467041424306,NULL,'',39,NULL,'',NULL,'','',1395,'e731d93658ce-b846-6a82-828e-0a51b8b9f854',1,NULL),(44,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!44','MobileApp','draft','','','A description here',7,1467043418356,1467043418451,NULL,'',NULL,NULL,'',NULL,'','',1401,'01a386dd6169-b638-b6dc-eca9-18ec7e847b93',1,NULL),(45,'Assignation','Assignation-45','Service','draft','','','A description here',7,1467210080498,1467210252695,NULL,'',NULL,NULL,'',NULL,'','',1403,'f4bcb6007754-702a-cee0-431b-7084832e10b8',1,NULL),(46,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!46','MobileApp','draft','','','A description here',7,1467293207730,1467293067422,NULL,'',NULL,NULL,'',NULL,'','',1406,'abbab3bd1874-6b4b-a2f4-da5c-285cbb9b09b4',1,NULL),(47,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!47','MobileApp','draft','','','A description here',7,1469003276858,1469003277841,NULL,'',NULL,NULL,'',NULL,'','',NULL,'f14f7aea0eef-e683-e265-24d0-efa93abe7393',NULL,NULL),(48,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!48','MobileApp','draft','','','A description here',2,1469108499002,1469108721550,NULL,'',NULL,NULL,'',NULL,'','',NULL,'0d91b0f924b9-8e2e-b5de-0081-af77ef45ddeb',NULL,NULL);
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
INSERT INTO `product_available_feature` VALUES ('PRODUCT_EDITOR',12),('PRODUCT_FEATURES',12),('PRODUCT_RESOURCES',12),('PRODUCT_SUMMARY',12),('PRODUCT_EDITOR',13),('PRODUCT_FEATURES',13),('PRODUCT_RESOURCES',13),('PRODUCT_SUMMARY',13),('PRODUCT_EDITOR',14),('PRODUCT_FEATURES',14),('PRODUCT_RESOURCES',14),('PRODUCT_SUMMARY',14),('PRODUCT_EDITOR',15),('PRODUCT_FEATURES',15),('PRODUCT_RESOURCES',15),('PRODUCT_SUMMARY',15),('PRODUCT_EDITOR',16),('PRODUCT_FEATURES',16),('PRODUCT_RESOURCES',16),('PRODUCT_SUMMARY',16),('PRODUCT_EDITOR',17),('PRODUCT_FEATURES',17),('PRODUCT_RESOURCES',17),('PRODUCT_SUMMARY',17),('PRODUCT_EDITOR',18),('PRODUCT_FEATURES',18),('PRODUCT_RESOURCES',18),('PRODUCT_SUMMARY',18),('PRODUCT_EDITOR',19),('PRODUCT_FEATURES',19),('PRODUCT_RESOURCES',19),('PRODUCT_SUMMARY',19),('PRODUCT_EDITOR',20),('PRODUCT_FEATURES',20),('PRODUCT_RESOURCES',20),('PRODUCT_SUMMARY',20),('PRODUCT_EDITOR',21),('PRODUCT_FEATURES',21),('PRODUCT_RESOURCES',21),('PRODUCT_SUMMARY',21),('PRODUCT_EDITOR',22),('PRODUCT_FEATURES',22),('PRODUCT_RESOURCES',22),('PRODUCT_SUMMARY',22),('PRODUCT_EDITOR',23),('PRODUCT_FEATURES',23),('PRODUCT_RESOURCES',23),('PRODUCT_SUMMARY',23),('PRODUCT_EDITOR',24),('PRODUCT_FEATURES',24),('PRODUCT_RESOURCES',24),('PRODUCT_SUMMARY',24),('PRODUCT_EDITOR',25),('PRODUCT_FEATURES',25),('PRODUCT_RESOURCES',25),('PRODUCT_SUMMARY',25),('PRODUCT_EDITOR',26),('PRODUCT_FEATURES',26),('PRODUCT_RESOURCES',26),('PRODUCT_SUMMARY',26),('PRODUCT_EDITOR',27),('PRODUCT_FEATURES',27),('PRODUCT_RESOURCES',27),('PRODUCT_SUMMARY',27),('PRODUCT_EDITOR',28),('PRODUCT_FEATURES',28),('PRODUCT_RESOURCES',28),('PRODUCT_SUMMARY',28),('PRODUCT_EDITOR',29),('PRODUCT_FEATURES',29),('PRODUCT_RESOURCES',29),('PRODUCT_SUMMARY',29),('PRODUCT_EDITOR',30),('PRODUCT_FEATURES',30),('PRODUCT_RESOURCES',30),('PRODUCT_SUMMARY',30),('PRODUCT_EDITOR',31),('PRODUCT_FEATURES',31),('PRODUCT_RESOURCES',31),('PRODUCT_SUMMARY',31),('PRODUCT_RESOURCES',32),('PRODUCT_SUMMARY',32),('PRODUCT_EDITOR',33),('PRODUCT_FEATURES',33),('PRODUCT_RESOURCES',33),('PRODUCT_SUMMARY',33),('PRODUCT_EDITOR',34),('PRODUCT_FEATURES',34),('PRODUCT_RESOURCES',34),('PRODUCT_SUMMARY',34),('PRODUCT_FEATURES',35),('PRODUCT_SUMMARY',35),('PRODUCT_EDITOR',36),('PRODUCT_FEATURES',36),('PRODUCT_RESOURCES',36),('PRODUCT_SUMMARY',36),('PRODUCT_EDITOR',37),('PRODUCT_FEATURES',37),('PRODUCT_RESOURCES',37),('PRODUCT_SUMMARY',37),('PRODUCT_EDITOR',38),('PRODUCT_FEATURES',38),('PRODUCT_RESOURCES',38),('PRODUCT_SUMMARY',38),('PRODUCT_SUMMARY',39),('PRODUCT_SUMMARY',40),('PRODUCT_EDITOR',41),('PRODUCT_FEATURES',41),('PRODUCT_RESOURCES',41),('PRODUCT_SUMMARY',41),('PRODUCT_EDITOR',42),('PRODUCT_FEATURES',42),('PRODUCT_RESOURCES',42),('PRODUCT_SUMMARY',42),('PRODUCT_EDITOR',43),('PRODUCT_FEATURES',43),('PRODUCT_RESOURCES',43),('PRODUCT_SUMMARY',43),('PRODUCT_EDITOR',44),('PRODUCT_FEATURES',44),('PRODUCT_RESOURCES',44),('PRODUCT_SUMMARY',44),('PRODUCT_EDITOR',45),('PRODUCT_FEATURES',45),('PRODUCT_RESOURCES',45),('PRODUCT_SUMMARY',45),('PRODUCT_EDITOR',46),('PRODUCT_FEATURES',46),('PRODUCT_RESOURCES',46),('PRODUCT_SUMMARY',46);
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
INSERT INTO `product_corner` VALUES (30,1,0),(30,2,0),(31,1,0),(31,2,0),(31,3,0),(32,1,0),(32,2,0),(32,3,0),(33,1,0),(35,1,0),(36,1,0),(37,1,0),(38,1,0),(39,1,0),(40,1,0),(43,1,0),(45,1,0);
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
INSERT INTO `product_feature` VALUES (30,1,'ezze','<p>	•	Processeur :&nbsp;ARM Cortex-A53 Quad-Core cadencé à 1.2 GHz</p><p>	•	Système :&nbsp;Android 4.4 KitKat</p><p>	•	Ecran :&nbsp;4.5 pouces, résolution de 480 x 800 pixels</p><p>	•	RAM :&nbsp;1.5 Go</p><p>	•	APN :&nbsp;5 MP avec auto focus, flash LED, caméra frontale 2 MP</p><p>	•	Stockage :&nbsp;8 Go, extension par MicroSDHC jusqu\'à 32 Go</p><p>	•	Connectivité :&nbsp;BT 4.0, GPS, Wi-Fi 802.11 b/g/n, Wi-Fi Direct, micro-USB, jack 3.5mm</p><p>	•	Batterie de 2200 mAh</p><p>	•	Dimensions :&nbsp;132.9 x 70.1 x 10 mm pour 154 g</p>'),(35,1,'Une meilleure expérience à chaque toucher','<p>L’iPad mini 4 tourne sous iOS 9 : le système d’exploitation mobile le plus intuitif, avancé et sécurisé au monde. Et si iOS 9 semble taillé sur mesure pour l’iPad, c’est tout sauf un hasard. Avec ses apps améliorées et ses nouvelles fonctionnalités comme Slide Over, Split View et Image dans l’image, il fait rimer productivité avec simplicité. Que vous souhaitiez consulter vos messages en répondant à des e‑mails ou créer une présentation tout en regardant un match, iOS 9 vous permettra d’exploiter l’iPad comme jamais.</p>'),(35,2,'Caméra et appareil photo géniaux.','<p>L’appareil photo iSight de l’iPad Air 2 possède des optiques dernier cri, un capteur amélioré et un puissant processeur de signal d’image développé par Apple. Il propose des fonctionnalités comme la photo panoramique, la vidéo en accéléré et au ralenti ainsi que les modes rafale et retardateur. La caméra FaceTime HD avant a également été repensée. Dotée d’un capteur perfectionné et de pixels plus grands, elle offre de meilleures performances en conditions de faible éclairage. Le bénéfice est clair et net. Vos photos, vidéos — ainsi que vos appels vidéo et selfies — sont tout simplement spectaculaires. </p>'),(35,3,'Une grande puissance.','<p>L’iPad Air 2 est plus fin. Et plus puissant. Sa puce A8X lui confère une puissance CPU et des performances graphiques nettement supérieures à celles de la génération précédente. Et avec son architecture 64 bits de pointe, l’iPad Air 2 est maintenant aussi performant que bon nombre d’ordinateurs de bureau. Pour autant, il demeure remarquablement économe en énergie. Son autonomie de 10 heures vous permet de travailler, de jouer et de surfer sur le Web toute la journée.</p>'),(37,1,'Référence','<p>diphone-657</p>'),(37,2,'Modèles iPhone/iPad/iPod ','<p>A1474, A1475, A1476</p>'),(37,3,'Détails du KIT','<p>Kit Batterie iPad Air Originale (WiFi &amp; 3G) + Outils iPad</p>');
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_follow_ups`
--

LOCK TABLES `product_follow_ups` WRITE;
/*!40000 ALTER TABLE `product_follow_ups` DISABLE KEYS */;
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
INSERT INTO `product_keyword` VALUES (35,1),(37,1),(30,2),(30,10),(31,10),(32,10),(33,10),(37,10),(38,10),(39,10),(40,10),(35,16),(36,16),(38,16),(39,16),(40,16),(43,16),(30,19),(31,19),(35,19),(36,19),(37,19),(32,35),(33,35),(39,42),(40,48);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_link`
--

LOCK TABLES `product_link` WRITE;
/*!40000 ALTER TABLE `product_link` DISABLE KEYS */;
INSERT INTO `product_link` VALUES (4,30,'REGULAR_LINK','http://www.samsung.com/fr/business/business-products/smartphones/smartphones/SM-G388FDSAXEF','/public/images/customUrls/map-marker.png'),(5,35,'REGULAR_LINK','http://www.apple.com/fr/ipad-air-2/','/public/images/customUrls/map-marker.png');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_timeline_step_executors`
--

LOCK TABLES `product_timeline_step_executors` WRITE;
/*!40000 ALTER TABLE `product_timeline_step_executors` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource`
--

LOCK TABLES `resource` WRITE;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
INSERT INTO `resource` VALUES (2,30,'image/jpeg','2.jpeg',NULL,NULL,'samsung.jpeg',NULL,'samsung.jpeg'),(3,30,'image/jpeg','3.jpeg',1,NULL,' SAMSUNG Galaxy Xcover 3 2.jpeg',NULL,'recto/verso'),(4,30,'image/jpeg','4.jpeg',2,NULL,' SAMSUNG Galaxy Xcover 3 3.jpeg',NULL,'Galaxy Xcover 3'),(5,30,'image/jpeg','5.jpeg',3,NULL,' SAMSUNG Galaxy Xcover 3.jpeg',NULL,'Galaxy Xcover 3'),(6,30,'application/force-download','6.pdf',NULL,NULL,'SM-G388F_UM_Open_Lollipop_Fre_Rev.1.0_151207.pdf',NULL,' Manuel de l\'utilisateur'),(7,30,'video/mp4','7.mp4',NULL,NULL,'Samsung Galaxy Xcover 3- Born to survive.mp4',NULL,'Born to survive'),(9,30,'image/png','9.png',NULL,NULL,'Capture d’écran 2016-06-02 à 10.11.46.png',NULL,'Traction'),(10,31,'image/jpeg','10.jpg',NULL,NULL,'micro-sim-nano-sim-cutter.jpg',NULL,'formats'),(11,31,'image/jpeg','11.jpg',NULL,NULL,'sfr.jpg',NULL,'logo'),(12,31,'image/jpeg','12.jpg',1,NULL,'SIM triple découpe.jpg',NULL,'SIM triple'),(13,32,'image/jpeg','13.jpg',NULL,NULL,'sfr.jpg',NULL,'logo'),(16,32,'image/jpeg','16.jpg',1,NULL,'couvertuer nationale SFR.jpg',NULL,'couvertuer nationale SFR'),(17,32,'image/jpeg','17.jpg',NULL,NULL,'compa opérateurs.jpg',NULL,''),(18,33,'image/png','18.png',NULL,NULL,'DD mobilite.png',NULL,'DD mobilite.png'),(19,33,'image/jpeg','19.jpg',1,NULL,'visuelsCentre-de-services.jpg',NULL,'visuelsCentre-de-services.jpg'),(21,33,'image/jpeg','21.jpg',NULL,NULL,'salon-JP.jpg',NULL,'salon-JP.jpg'),(22,35,'image/png','22.png',NULL,NULL,'Silver-apple-logo.png',NULL,'Silver-apple-logo.png'),(23,35,'image/png','23.png',NULL,NULL,'Silver-apple-logo.png',NULL,'Silver-apple-logo.png'),(24,35,'image/jpeg','24.jpg',1,NULL,'apple air2.jpg',NULL,'apple air2.jpg'),(25,36,'image/png','25.png',NULL,NULL,'nouveau-logo-bouygues-telecom-300x300.png',NULL,'nouveau-logo-bouygues-telecom-300x300.png'),(27,37,'image/png','27.png',NULL,NULL,'Silver-apple-logo.png',NULL,'Silver-apple-logo.png'),(29,37,'image/jpeg','29.jpg',1,NULL,'batteie.jpg',NULL,'batteie.jpg'),(30,36,'image/jpeg','30.jpg',1,NULL,'SIM triple découpe.jpg',NULL,'SIM triple découpe.jpg'),(32,38,'image/jpeg','32.jpg',1,NULL,'technical_support_services.jpg',NULL,'technical_support_services.jpg'),(34,38,'image/png','34.png',NULL,NULL,'support-sncf3.png',NULL,'support-sncf3.png'),(35,39,'image/png','35.png',NULL,NULL,'support-sncf3.png',NULL,'support-sncf3.png'),(36,39,'image/jpeg','36.jpg',1,NULL,'emm.jpg',NULL,'emm.jpg'),(37,40,'image/png','37.png',NULL,NULL,'support-sncf3.png',NULL,'support-sncf3.png'),(38,40,'image/jpeg','38.jpg',1,NULL,'mail.jpg',NULL,'mail.jpg'),(39,43,'image/jpeg','39.jpg',NULL,NULL,'sfr.jpg',NULL,'sfr.jpg'),(40,43,'image/jpeg','40.jpg',1,NULL,'micro-sim-nano-sim-cutter.jpg',NULL,'micro-sim-nano-sim-cutter.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (3,'admin'),(6,'Ecosystème'),(2,'editor'),(18,'fleet manager'),(4,'Gerard2'),(16,'Gestionnaire'),(5,'Manager'),(17,'Manager2'),(1,'mer');
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
  `created_at` bigint(32) NOT NULL DEFAULT '1473339883',
  PRIMARY KEY (`id`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline`
--

LOCK TABLES `timeline` WRITE;
/*!40000 ALTER TABLE `timeline` DISABLE KEYS */;
INSERT INTO `timeline` VALUES (1,'line','assignment-order'),(2,'device','assignment-order'),(3,'sav_vol_and_perte','follow-up'),(4,'sav_casse','follow-up'),(5,'line_suspension','follow-up'),(6,'chgt_options','follow-up'),(7,'sim_card','follow-up');
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
  KEY `id_timeline` (`id_timeline`),
  CONSTRAINT `timeline_steps_ibfk_1` FOREIGN KEY (`id_timeline`) REFERENCES `timeline` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline_steps`
--

LOCK TABLES `timeline_steps` WRITE;
/*!40000 ALTER TABLE `timeline_steps` DISABLE KEYS */;
INSERT INTO `timeline_steps` VALUES (1,'tl_step_bdc_sent',0,1,1),(2,'tl_step_released_sim_to_user',1,2,1),(3,'tl_step_activated_line',1,3,1),(4,'tl_step_fleet_updated_line_1',1,4,1),(5,'tl_step_bdc_envoye',0,1,2),(6,'tl_step_fleet_updated_device_1',0,2,2),(7,'tl_step_order_received',1,3,2),(8,'tl_step_fleet_updated_device_2',1,4,2),(9,'tl_step_intregation_request',1,5,2),(10,'tl_step_integration_achieved',1,6,2),(11,'tl_step_released_terminal_to_user',1,7,2),(12,'tl_step_user_confirms_reception',1,8,2),(13,'device_wiping',0,1,3),(14,'line_suspension',1,1,3),(15,'device_preparation',1,1,3),(16,'device_delivery',1,1,3),(17,'device_diagnostic',1,2,4),(18,'device_repair',1,2,4),(19,'device_delivery',1,2,4),(20,'request_in_progress',1,3,5),(21,'line_suspended',1,3,5),(22,'request_in_progress',1,4,6),(23,'new_options_active',1,4,6),(24,'sim_code_created',1,5,7),(25,'sim_received',1,5,7),(26,'sim_activated',1,5,7);
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
  CONSTRAINT `fk_user_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`)
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
  CONSTRAINT `fk_user_validated` FOREIGN KEY (`validated_by`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
INSERT INTO `user_profile` VALUES (1,'Bob ','Bob--1',NULL,1466093937905,NULL,NULL,1,1),(2,'Dede','Dede-2','Lorem Ipsum',NULL,NULL,2,1,2),(3,'bob junior Corner','bob-junior-Corner-3',NULL,1466092871970,NULL,NULL,NULL,3),(4,'Michel Corner','MichelMgr-Corner-4',NULL,NULL,NULL,2,1,4),(5,'Alisson Corner','Alisson-Corner-5',NULL,NULL,NULL,2,1,5),(6,'Alice Corner','Alice-Corner-6',NULL,NULL,NULL,2,1,6),(7,'Gérard Corner','Gerard-Corner-7',NULL,NULL,NULL,2,1,7),(8,'Odile Corner','Odile-Corner-8',NULL,NULL,NULL,2,1,8),(9,'Odette Corner','Odette-Corner-9',NULL,NULL,NULL,2,1,9),(10,'Odette2 Corner','Odette2-Corner-10',NULL,NULL,NULL,2,1,10),(12,'Fabrice Corner','Fabrice-Corner-12',NULL,NULL,NULL,2,1,12),(13,'Stéphane Corner','Stephane-Corner-13',NULL,NULL,NULL,2,1,13),(14,'Delphine Corner','Delphine-Corner-14',NULL,NULL,NULL,2,1,14);
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

-- Dump completed on 2016-12-13 17:05:48
-- MySQL dump 10.13  Distrib 5.7.13, for linux-glibc2.5 (x86_64)
--
-- Host: 0.0.0.0    Database: marketplace_intuiteev
-- ------------------------------------------------------
-- Server version	5.7.16

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
INSERT INTO `SequelizeMeta` VALUES ('20160420153406-proabono.js'),('20160426163482-acl_setup.js'),('20160503094102-bundle.js'),('20160510134174-delete-user.js'),('20160511125936-admin-profile-company.js'),('20160518122420-acl-uservoice.js'),('20160524130284-orders-permissions.js'),('20160531172735-assignment-permissions.js'),('20160531172778-assignment.js'),('20160603122034-add-change-product-owner-permission.js'),('20160609163900-assignment-posystem.js'),('20160616132203-add-product-type.js'),('20160620153658-assigment_order-remove-add-columns.js'),('20160630122221-enable-product-features.js'),('20160712125324-product_timeline.js'),('20160713130351-populate_timelines_steps_1.js'),('20160714135677-modify_includes_po_from_product_timeline_steps_executor.js'),('20160719130114-add_timeline_to_products.js'),('20160720120204-add-product-assignment-options.js'),('20160824142451-add-external-workflow-for-assignment-orders.js'),('20160829095191-fix-timeline-executor_id-column.js'),('20160906171834-add-stock-table.js'),('20160912121125-add-gdpid-assignment-order.js'),('20160926152675-add-product-follow-ups.js'),('20160927114155-follow-ups.js'),('20160928164055-assignment-order-followups-add-demo-cols.js'),('20160929160383-remove-follow-up-state-column.js'),('20160929181981-add-follow-up-id-to-assignment-order-follow-up.js'),('20161004125267-tidy-follow-ups.js'),('20161004132680-add-timeline-type-column.js'),('20161004135248-add-follow-up-timeline-data.js');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_resource`
--

LOCK TABLES `article_resource` WRITE;
/*!40000 ALTER TABLE `article_resource` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order`
--

LOCK TABLES `assignment_order` WRITE;
/*!40000 ALTER TABLE `assignment_order` DISABLE KEYS */;
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
  `created_at` bigint(32) NOT NULL DEFAULT '1475047299104',
  `deleted_at` bigint(32) DEFAULT NULL,
  `id_timeline` varchar(255) NOT NULL,
  `id_follow_up_task` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_assignment_order` (`id_assignment_order`),
  CONSTRAINT `assignment_order_follow_ups_ibfk_1` FOREIGN KEY (`id_assignment_order`) REFERENCES `assignment_order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order_follow_ups`
--

LOCK TABLES `assignment_order_follow_ups` WRITE;
/*!40000 ALTER TABLE `assignment_order_follow_ups` DISABLE KEYS */;
/*!40000 ALTER TABLE `assignment_order_follow_ups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billing_agent`
--

DROP TABLE IF EXISTS `billing_agent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `billing_agent` (
  `id_user` int(11) NOT NULL,
  `api_key` varchar(40) DEFAULT NULL,
  `agent_key` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `id_user_UNIQUE` (`id_user`),
  UNIQUE KEY `api_key_UNIQUE` (`api_key`),
  UNIQUE KEY `agent_key_UNIQUE` (`agent_key`),
  CONSTRAINT `fk_billing_agent_user_profile` FOREIGN KEY (`id_user`) REFERENCES `user_profile` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billing_agent`
--

LOCK TABLES `billing_agent` WRITE;
/*!40000 ALTER TABLE `billing_agent` DISABLE KEYS */;
/*!40000 ALTER TABLE `billing_agent` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle`
--

LOCK TABLES `bundle` WRITE;
/*!40000 ALTER TABLE `bundle` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle_resource`
--

LOCK TABLES `bundle_resource` WRITE;
/*!40000 ALTER TABLE `bundle_resource` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'DD','00000000000000',NULL,'',1),(2,'admin','0998877665451234576345',NULL,NULL,1);
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
  CONSTRAINT `fk_corner_created` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corner`
--

LOCK TABLES `corner` WRITE;
/*!40000 ALTER TABLE `corner` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `external_workflows`
--

LOCK TABLES `external_workflows` WRITE;
/*!40000 ALTER TABLE `external_workflows` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `general_setting`
--

LOCK TABLES `general_setting` WRITE;
/*!40000 ALTER TABLE `general_setting` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_carousel`
--

LOCK TABLES `home_carousel` WRITE;
/*!40000 ALTER TABLE `home_carousel` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_resource`
--

LOCK TABLES `item_resource` WRITE;
/*!40000 ALTER TABLE `item_resource` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
INSERT INTO `keyword` VALUES (1,'conducteur'),(2,'move');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
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
  `id_role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission_role`
--

LOCK TABLES `permission_role` WRITE;
/*!40000 ALTER TABLE `permission_role` DISABLE KEYS */;
INSERT INTO `permission_role` VALUES ('EDIT_ARTICLE',3),('DELETE_ARTICLE',3),('EDIT_PRODUCT',3),('VALIDATE_PUBLICATION_ARTICLE',3),('UNPUBLISH_ARTICLE',3),('PUBLISH_ARTICLE',3),('VALIDATE_PUBLICATION_PRODUCT',3),('PUBLISH_PRODUCT',3),('UNPUBLISH_PRODUCT',3),('DELETE_PRODUCT',3),('CREATE_BUNDLE',3),('EDIT_BUNDLE_OWN',3),('PUBLISH_BUNDLE_OWN',3),('UNPUBLISH_BUNDLE_OWN',3),('DELETE_BUNDLE_OWN',3),('CREATE_CORNER',3),('EDIT_CORNER',3),('DELETE_CORNER',3),('EDIT_USER_CORNER',3),('CREATE_ROLES',3),('EDIT_ROLES_PERMISSION',3),('EDIT_USER_ROLE',3),('READ_USERS',3),('READ_USERS_DETAILS',3),('CREATE_USER',3),('EDIT_GENERAL_SETTINGS',3),('EDIT_USER',3),('CREATE_PRODUCT',2),('EDIT_PRODUCT_OWN',2),('REQUEST_PUBLICATION_PRODUCT',2),('UNPUBLISH_PRODUCT_OWN',2),('DELETE_PRODUCT_OWN',2),('EDIT_USER_CORNER_OWN',2),('CREATE_ARTICLE',4),('EDIT_ARTICLE_OWN',4),('REQUEST_PUBLICATION_ARTICLE',4),('UNPUBLISH_ARTICLE_OWN',4),('DELETE_ARTICLE_OWN',4),('EDIT_USER_CORNER_OWN',4),('CREATE_ORDER',5),('EDIT_ORDER_OWN',5),('REQUEST_PUBLICATION_ORDER_OWN',5),('CANCEL_PENDING_ORDER_OWN',5),('VALIDATE_ORDER',6),('CANCEL_PENDING_ORDER',6),('CREATE_ASSIGNMENT',7),('EDIT_ASSIGNMENT_OWN',7),('REQUEST_VALIDATION_ASSIGNMENT_OWN',7),('VALIDATE_ASSIGNMENT',7),('ASSIGNMENTS_LIST_ALL_INFO',7),('CANCEL_PENDING_ASSIGNMENT',7),('CANCEL_PENDING_ASSIGNMENT_OWN',7),('ASSIGNMENTS_LIST_BASIC_INFO',1),('CHANGE_PRODUCT_OWNER',3);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_link`
--

LOCK TABLES `product_link` WRITE;
/*!40000 ALTER TABLE `product_link` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_timeline_step_executors`
--

LOCK TABLES `product_timeline_step_executors` WRITE;
/*!40000 ALTER TABLE `product_timeline_step_executors` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource`
--

LOCK TABLES `resource` WRITE;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (3,'admin'),(4,'author'),(1,'customer'),(2,'editor'),(7,'fleet manager'),(6,'Michele');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline`
--

LOCK TABLES `timeline` WRITE;
/*!40000 ALTER TABLE `timeline` DISABLE KEYS */;
INSERT INTO `timeline` VALUES (1,'line','assignment-order'),(2,'device','assignment-order'),(3,'sav_vol_and_perte','follow-up'),(4,'sav_casse','follow-up'),(5,'line_suspension','follow-up'),(6,'chgt_options','follow-up'),(7,'sim_card','follow-up');
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
  KEY `id_timeline` (`id_timeline`),
  CONSTRAINT `timeline_steps_ibfk_1` FOREIGN KEY (`id_timeline`) REFERENCES `timeline` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline_steps`
--

LOCK TABLES `timeline_steps` WRITE;
/*!40000 ALTER TABLE `timeline_steps` DISABLE KEYS */;
INSERT INTO `timeline_steps` VALUES (1,'tl_step_bdc_sent',0,1,1),(2,'tl_step_released_sim_to_user',1,2,1),(3,'tl_step_activated_line',1,3,1),(4,'tl_step_fleet_updated_line_1',1,4,1),(5,'tl_step_bdc_envoye',0,1,2),(6,'tl_step_fleet_updated_device_1',0,2,2),(7,'tl_step_order_received',1,3,2),(8,'tl_step_fleet_updated_device_2',1,4,2),(9,'tl_step_intregation_request',1,5,2),(10,'tl_step_integration_achieved',1,6,2),(11,'tl_step_released_terminal_to_user',1,7,2),(12,'tl_step_user_confirms_reception',1,8,2),(13,'device_wiping',0,1,3),(14,'line_suspension',1,1,3),(15,'device_preparation',1,1,3),(16,'device_delivery',1,1,3),(17,'device_diagnostic',1,2,4),(18,'device_repair',1,2,4),(19,'device_delivery',1,2,4),(20,'request_in_progress',1,3,5),(21,'line_suspended',1,3,5),(22,'request_in_progress',1,4,6),(23,'new_options_active',1,4,6),(24,'sim_code_created',1,5,7),(25,'sim_received',1,5,7),(26,'sim_activated',1,5,7);
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
  CONSTRAINT `fk_user_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'bob@intuiteev.io','ab266fcf5ce45fe51f8b770bec3d2631f20e019eb81e8a9d6c09688ded42b099',1458308787294,'Bob','Bob','','local',NULL,'F',2,'','',NULL,NULL,NULL),(2,'dede@intuiteev.io','c0d36ffae5749313da9553cec19f3cb98b2ea9bf3f4e92dcfe071c4d72a2ae29',1458308787294,'Dede','Dede','','local',NULL,'F',3,'','',NULL,NULL,NULL);
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
  CONSTRAINT `fk_user_validated` FOREIGN KEY (`validated_by`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
INSERT INTO `user_profile` VALUES (1,'Bob Corner','Bob-Corner-1',NULL,NULL,NULL,NULL,1,1),(2,'Dede','Dede-2','Lorem Ipsum',NULL,NULL,2,1,2);
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

-- Dump completed on 2016-12-13 17:05:48
-- MySQL dump 10.13  Distrib 5.7.13, for linux-glibc2.5 (x86_64)
--
-- Host: 0.0.0.0    Database: marketplace_mobility
-- ------------------------------------------------------
-- Server version	5.7.16

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
INSERT INTO `SequelizeMeta` VALUES ('20160420153406-proabono.js'),('20160426163482-acl_setup.js'),('20160503094102-bundle.js'),('20160510134174-delete-user.js'),('20160511125936-admin-profile-company.js'),('20160518122420-acl-uservoice.js'),('20160524130284-orders-permissions.js'),('20160531172735-assignment-permissions.js'),('20160531172778-assignment.js'),('20160603122034-add-change-product-owner-permission.js'),('20160609163900-assignment-posystem.js'),('20160616132203-add-product-type.js'),('20160620153658-assigment_order-remove-add-columns.js'),('20160630122221-enable-product-features.js'),('20160712125324-product_timeline.js'),('20160713130351-populate_timelines_steps_1.js'),('20160714135677-modify_includes_po_from_product_timeline_steps_executor.js'),('20160719130114-add_timeline_to_products.js'),('20160720120204-add-product-assignment-options.js'),('20160824142451-add-external-workflow-for-assignment-orders.js'),('20160829095191-fix-timeline-executor_id-column.js'),('20160906171834-add-stock-table.js'),('20160912121125-add-gdpid-assignment-order.js'),('20160926152675-add-product-follow-ups.js'),('20160927114155-follow-ups.js'),('20160928164055-assignment-order-followups-add-demo-cols.js'),('20160929160383-remove-follow-up-state-column.js'),('20160929181981-add-follow-up-id-to-assignment-order-follow-up.js'),('20161004125267-tidy-follow-ups.js'),('20161004132680-add-timeline-type-column.js'),('20161004135248-add-follow-up-timeline-data.js');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_resource`
--

LOCK TABLES `article_resource` WRITE;
/*!40000 ALTER TABLE `article_resource` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order`
--

LOCK TABLES `assignment_order` WRITE;
/*!40000 ALTER TABLE `assignment_order` DISABLE KEYS */;
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
  `created_at` bigint(32) NOT NULL DEFAULT '1475047299077',
  `deleted_at` bigint(32) DEFAULT NULL,
  `id_timeline` varchar(255) NOT NULL,
  `id_follow_up_task` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_assignment_order` (`id_assignment_order`),
  CONSTRAINT `assignment_order_follow_ups_ibfk_1` FOREIGN KEY (`id_assignment_order`) REFERENCES `assignment_order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order_follow_ups`
--

LOCK TABLES `assignment_order_follow_ups` WRITE;
/*!40000 ALTER TABLE `assignment_order_follow_ups` DISABLE KEYS */;
/*!40000 ALTER TABLE `assignment_order_follow_ups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billing_agent`
--

DROP TABLE IF EXISTS `billing_agent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `billing_agent` (
  `id_user` int(11) NOT NULL,
  `api_key` varchar(40) DEFAULT NULL,
  `agent_key` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `id_user_UNIQUE` (`id_user`),
  UNIQUE KEY `api_key_UNIQUE` (`api_key`),
  UNIQUE KEY `agent_key_UNIQUE` (`agent_key`),
  CONSTRAINT `fk_billing_agent_user_profile` FOREIGN KEY (`id_user`) REFERENCES `user_profile` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billing_agent`
--

LOCK TABLES `billing_agent` WRITE;
/*!40000 ALTER TABLE `billing_agent` DISABLE KEYS */;
/*!40000 ALTER TABLE `billing_agent` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle`
--

LOCK TABLES `bundle` WRITE;
/*!40000 ALTER TABLE `bundle` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle_resource`
--

LOCK TABLES `bundle_resource` WRITE;
/*!40000 ALTER TABLE `bundle_resource` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'DD','00000000000000',NULL,'',1),(2,'Digital Dimension','11111111111444444',NULL,NULL,3),(3,'Partenaires','55567898999999999III',NULL,NULL,4),(4,'admin','0998877665451234576345',NULL,NULL,1);
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
  CONSTRAINT `fk_corner_created` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corner`
--

LOCK TABLES `corner` WRITE;
/*!40000 ALTER TABLE `corner` DISABLE KEYS */;
INSERT INTO `corner` VALUES (2,'RH  ','RH---2','',2,1459784948833,1459870817633,'logo-2.png'),(3,'MOBILITE','MOBILITE-3','',2,1459785350137,1459785596669,'logo-3.png');
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
INSERT INTO `corner_keyword` VALUES (3,2),(3,4),(3,7),(3,11),(2,20),(2,21),(2,24),(2,28),(2,34),(2,38);
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
INSERT INTO `editor_highlight_product` VALUES (7,3,1),(8,3,2);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `external_workflows`
--

LOCK TABLES `external_workflows` WRITE;
/*!40000 ALTER TABLE `external_workflows` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `general_setting`
--

LOCK TABLES `general_setting` WRITE;
/*!40000 ALTER TABLE `general_setting` DISABLE KEYS */;
INSERT INTO `general_setting` VALUES (1,'seo:title','Mississipi'),(2,'seo:tagline','Digital Dimension');
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
  `mainPicture` varchar(100) DEFAULT NULL,
  `detailPagePicture` varchar(100) DEFAULT NULL,
  `buttonText` varchar(45) DEFAULT 'More',
  `link` varchar(200) DEFAULT NULL,
  `secondaryPictureALT` varchar(150) DEFAULT NULL,
  `mainPictureALT` varchar(150) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_carousel`
--

LOCK TABLES `home_carousel` WRITE;
/*!40000 ALTER TABLE `home_carousel` DISABLE KEYS */;
INSERT INTO `home_carousel` VALUES (1,'<h2>Mississippi né de la<br />Transformation Digitale …</h2>','<p>4000+ web applications,<br />\r\n1,3 Millions d&rsquo;apps mobiles,<br />\r\n30 applications utilis&eacute;es en moyenne chaque mois,<br />\r\nEtc.</p>\r\n\r\n<p>On parle beaucoup de Transformation Digitale, &agrave; minima nous sommes assur&eacute;s d&rsquo;un des ses effets : il y a de plus en plus d&rsquo;applications !</p>\r\n\r\n<p>Les marketplaces ont r&eacute;volutionn&eacute; le e-commerce.</p>\r\n\r\n<p>Les premi&egrave;res mises en place majeures ont vu le jour il y a 5-6 ans dans le Retail, dans la lign&eacute;e d&rsquo;Amazon et dont la FNAC est encore aujourd&rsquo;hui un exemple parlant.</p>\r\n\r\n<p>Les activit&eacute;s de Services commencent &agrave; utiliser les notions de Marketplace, qu&rsquo;il s&rsquo;agisse de conciergerie digitale, de camping ou de f&eacute;d&eacute;ration de freelance, le mouvement est lanc&eacute;.</p>\r\n\r\n<p>Des initiatives dans le monde digital voient le jour outre-atlantique.</p>\r\n\r\n<p>Convaincus que le besoin est pressant, nous nous sommes lanc&eacute;s dans cette d&eacute;marche en 2015.</p>\r\n\r\n<p>Pour construire notre propre Marketplace Mississippi.digital, nous avions besoin d&rsquo;une solution logicielle &agrave; m&ecirc;me de r&eacute;pondre aux enjeux fonctionnels et techniques sp&eacute;cifiques &agrave; une marketplace digitale.</p>\r\n\r\n<p>Editeur de solutions, nous nous sommes engag&eacute;s dans le d&eacute;veloppement de notre propre solution.</p>\r\n\r\n<p>Notre positionnement !</p>\r\n\r\n<p>Nous partons du constat que la transformation digitale implique un nombre croissant d&rsquo;applications Web et d&rsquo;apps Mobile.</p>\r\n\r\n<p>De nombreux acteurs voient le jour en proposant des applications sur des segments &eacute;troits mais de fa&ccedil;on tr&egrave;s pertinente (ex. note de frais).</p>\r\n\r\n<p>A l&rsquo;inverse, les ERP couvrent tout mais sont peu ou difficilement &eacute;volutifs ce qui les &eacute;loignent des usages qui &eacute;voluent sans cesse.</p>\r\n\r\n<p>Nous proposons par l&rsquo;interm&eacute;diaire de notre marketplace Mississippi des regroupements d&rsquo;applications afin de couvrir un besoin vertical ou fonctionnel (RH, gestion de la mobilit&eacute;, etc.)</p>\r\n\r\n<p>Editeurs de nos propres logiciels, nous compl&eacute;tons notre offres de solutions tierces avec qui nous contractualisons de forts engagements.</p>\r\n\r\n<p><span style=\"line-height: 1.6em;\">Mississippi vous apporte alors un panel d&rsquo;applications test&eacute;es et s&eacute;lectionn&eacute;es pour leur parfaite compl&eacute;mentarit&eacute;.</span></p>\r\n\r\n<p>En nous concentrons sur les usages, nous simplifions l&rsquo;acc&egrave;s &agrave; ces applications et apportons une r&eacute;ponse sur mesure &agrave; d&rsquo;&eacute;ventuels&nbsp;besoins compl&eacute;mentaires.</p>\r\n\r\n<p>En aidant les DSI et les Directions M&eacute;tiers &agrave; faire leurs choix dans la multitude de solutions existantes sur le march&eacute;, nous facilitons et acc&eacute;l&eacute;rons l&rsquo;empreinte de la transformation digitale dans les organisations de nos Clients.</p>\r\n<div style=\"text-align: center\"><img src=\"/public/uploads/carousel/transform.png\" /></div>','slide-1.jpg','slide-1.jpg','En savoir plus...','/detail/1','','',1),(2,'<h2>Mississippi ce n’est pas …</h2>','<p>Mississippi n’est pas un bookmark où nous référencerions des applications (WebApps or MobileApps) en attendant que quelqu’un s’intéresse à elles.</p>\r\n<p>Mississippi est plus qu’un portail avec des fonctionnalités intéressantes comme les communautés d’utilisateurs.</p>\r\n<p>Mississippi n’est pas un simple site de e-commerce proposant des logiciels.</p>\r\n<p>Mississippi.digital est L’ENDROIT pour trouver LA solution à VOTRE projet !</p>\r\n<p>Pour chaque domaine : MOBILITÉ, RH, etc. nous avons fait une stricte sélection de logiciels et solutions qui sont complémentaires entre-elles et qui répondent à UN BESOIN.</p>\r\n<p>Vous avez ainsi la certitude de trouver immédiatement les fonctionnalités qui vous conviennent.</p>\r\n<p>Contactez-nous et nous vous ferons une démonstration …</p>','slide-2.jpg','slide-2.jpg','En savoir plus...','/detail/2','','',1),(3,'<h2>Nous simplifions ce<br />qui est complexe et risqué …</h2>','<p>Nous simplifions ce qui est complexe et risqué …<br />\r\nParce que choisir le bon logiciel et l’implémenter est complexe et que se tromper coûte cher.</p>\r\n<p>Vous êtes concernés par un projet de mobilité, et on vous demande de gérer le déploiement de quelques dizaines de tablettes ou de smartphones ?<br />\r\nOk, mais avec quoi ?</p>\r\n</p>Quels logiciels, quelles sont les fonctionnalités dont j’ai besoin ?<br />\r\nc’est là que nous vous aidons !<br />\r\nNous avons fait le tri pour vous.<br />\r\nNous avons testé et sélectionné les applications qui vous seront utiles.<br />\r\nNous les avons réunies pour leur complémentarité.<br />\r\nEt nous nous occupons de la relation avec les éditeurs.</p>\r\n<p>Vous ne prenez que ce dont vous avez besoin et vous voilà prêt à démarrer !</p>\r\n<p>Avec Mississippi vous bénéficiez :</p>\r\n<ul>\r\n<li>De logiciels complémentaires et qui ciblent votre besoin</li>\r\n<li>D’une interface de gestion simple et intuitive pour gérer vos utilisateurs</li>\r\n<li>D’une facture unique qui couvre tous les éditeurs</li>\r\n<li>De la garantie d’un service parfait et qui s’inscrit dans le temps</li>\r\n</ul>\r\n<p>Mississippi ouvre ses portes et vous propose ses premières offres.</p>','slide-3.jpg','slide-3.jpg','En savoir plus...','/detail/3','','',1);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_resource`
--

LOCK TABLES `item_resource` WRITE;
/*!40000 ALTER TABLE `item_resource` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
INSERT INTO `keyword` VALUES (28,'collaborateur'),(34,'congés'),(7,'EMM'),(24,'frais'),(11,'gestion'),(38,'gestion RH'),(4,'MDM'),(20,'Recrutement'),(2,'sécurité'),(1,'sécurité, MDM, EMM, gestion, '),(21,'talent');
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
INSERT INTO `message` VALUES (4,18,'jean-marc.satta@digitaldimension.fr','F','Satta','Jm','','','','',1460378092109,NULL);
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
  `id_role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission_role`
--

LOCK TABLES `permission_role` WRITE;
/*!40000 ALTER TABLE `permission_role` DISABLE KEYS */;
INSERT INTO `permission_role` VALUES ('EDIT_ARTICLE',3),('VALIDATE_PUBLICATION_ARTICLE',3),('UNPUBLISH_ARTICLE',3),('DELETE_ARTICLE',3),('PUBLISH_ARTICLE',3),('EDIT_PRODUCT',3),('VALIDATE_PUBLICATION_PRODUCT',3),('PUBLISH_PRODUCT',3),('UNPUBLISH_PRODUCT',3),('DELETE_PRODUCT',3),('CREATE_BUNDLE',3),('EDIT_BUNDLE_OWN',3),('PUBLISH_BUNDLE_OWN',3),('UNPUBLISH_BUNDLE_OWN',3),('DELETE_BUNDLE_OWN',3),('CREATE_CORNER',3),('EDIT_CORNER',3),('DELETE_CORNER',3),('EDIT_USER_CORNER',3),('CREATE_ROLES',3),('EDIT_ROLES_PERMISSION',3),('EDIT_USER_ROLE',3),('READ_USERS',3),('READ_USERS_DETAILS',3),('CREATE_USER',3),('EDIT_GENERAL_SETTINGS',3),('EDIT_USER',3),('CREATE_PRODUCT',2),('EDIT_PRODUCT_OWN',2),('REQUEST_PUBLICATION_PRODUCT',2),('UNPUBLISH_PRODUCT_OWN',2),('DELETE_PRODUCT_OWN',2),('EDIT_USER_CORNER_OWN',2),('CREATE_ARTICLE',4),('EDIT_ARTICLE_OWN',4),('REQUEST_PUBLICATION_ARTICLE',4),('DELETE_ARTICLE_OWN',4),('EDIT_USER_CORNER_OWN',4),('UNPUBLISH_ARTICLE_OWN',4),('CREATE_ORDER',5),('EDIT_ORDER_OWN',5),('REQUEST_PUBLICATION_ORDER_OWN',5),('CANCEL_PENDING_ORDER_OWN',5),('VALIDATE_ORDER',6),('CANCEL_PENDING_ORDER',6),('CREATE_ASSIGNMENT',7),('EDIT_ASSIGNMENT_OWN',7),('REQUEST_VALIDATION_ASSIGNMENT_OWN',7),('CANCEL_PENDING_ASSIGNMENT_OWN',7),('ASSIGNMENTS_LIST_ALL_INFO',7),('VALIDATE_ASSIGNMENT',7),('CANCEL_PENDING_ASSIGNMENT',7),('ASSIGNMENTS_LIST_BASIC_INFO',1),('CHANGE_PRODUCT_OWNER',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!1','MobileApp','deleted','','','A description here',1,1459942529048,1459942553447,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(2,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!2','MobileApp','deleted','','','A description here',1,1459942620608,1459942645147,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(3,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!3','MobileApp','deleted','','','A description here',1,1459942762233,1459942786956,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(4,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!4','MobileApp','deleted','','','A description here',1,1459943141589,1459943166004,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(5,'HARMONIE Formulaires','HARMONIE-Formulaires-5','MobileApp','published','','Moteur de gestion de formulaires !','<p>Solution de création et de mise à jour de formulaires et de rapports utilisable directement par les clients.</p><p>Pour répondre à la mise à jour fréquente de nombreux rapports (nouvelles normes, nouveaux produits...) dans une application mobile.</p>',3,1459946950262,1460138705871,NULL,'',92,NULL,'<p>Rayonnance est une entreprise française de référence dans la conception et la mise en œuvre de solutions métier en mobilité, notamment pour les secteurs du Retail, de l’Industrie, de la Logistique et du BTP ou encore de la Santé. La société propose une offre complète de services sur-mesure couvrant la mise à disposition de solutions matérielles (Smartphones, PDA industriels et Tablettes) fonctionnant sous Windows, iOS et Android et l’intégration d’applications métier développées par ses équipes. Rayonnance dispose en outre de sa propre solution middleware EMM (enterprise mobile management), «Harmonie», lui permettant de proposer des services avancés en matière de synchronisation de données avec les systèmes d’information et de MDM (mobile device management).</p><p>Créée en 2002 et soutenue depuis 2011 par le fonds d’investissements EPF Partners, Rayonnance connait une croissance ininterrompue de ses ventes qui a porté le volume d’activité à près de 15 millions d\'euros en 2013.</p><p>En juin 2014, Rayonnance rejoint Digital Dimension, leader des solutions mobiles professionnelles pour les entreprises.</p><p>La société accompagne des entreprises d’envergure internationale dans la mise en mobilité de leurs équipes et de leurs systèmes d’information, parmi lesquelles Camaïeu, Clear Channel, Danone, Heineken, Norauto, OCP, etc. Rayonnance fait partie du top 150 Ernst &amp; Young et Syntec 2012 et 2013 des sociétés IT en France.</p>',20,'http://rayonnance.fr/','http://www.digitaldimension.solutions/',NULL,NULL,1,NULL),(6,'HARMONIE Fichiers','HARMONIE-Fichiers-6','MobileApp','published','','Echange sécurisé de fichiers : Harmonie Fichiers !','<p>Harmonie Fichiers permet la synchronisation de fichiers depuis un serveur central vers des terminaux mobiles. <br></p><p>Il permet ainsi de tenir à jour une base de documents (dossiers, sous dossiers et tout type de fichiers) sur des périphériques.</p>',3,1459950203775,1460138790097,NULL,'',94,13,'<p>Rayonnance est une entreprise française de référence dans la conception et la mise en œuvre de solutions métier en mobilité, notamment pour les secteurs du Retail, de l’Industrie, de la Logistique et du BTP ou encore de la Santé. La société propose une offre complète de services sur-mesure couvrant la mise à disposition de solutions matérielles (Smartphones, PDA industriels et Tablettes) fonctionnant sous Windows, iOS et Android et l’intégration d’applications métier développées par ses équipes. Rayonnance dispose en outre de sa propre solution middleware EMM (enterprise mobile management), «Harmonie», lui permettant de proposer des services avancés en matière de synchronisation de données avec les systèmes d’information et de MDM (mobile device management).</p><p>Créée en 2002 et soutenue depuis 2011 par le fonds d’investissements EPF Partners, Rayonnance connait une croissance ininterrompue de ses ventes qui a porté le volume d’activité à près de 15 millions d\'euros en 2013.</p><p>En juin 2014, Rayonnance rejoint Digital Dimension, leader des solutions mobiles professionnelles pour les entreprises.</p><p>La société accompagne des entreprises d’envergure internationale dans la mise en mobilité de leurs équipes et de leurs systèmes d’information, parmi lesquelles Camaïeu, Clear Channel, Danone, Heineken, Norauto, OCP, etc. Rayonnance fait partie du top 150 Ernst &amp; Young et Syntec 2012 et 2013 des sociétés IT en France.</p>',17,'http://rayonnance.fr/','http://www.digitaldimension.solutions/',NULL,NULL,1,NULL),(7,'ARAGON Note de frais','ARAGON-Note-de-frais-7','Service','published','','Gérer vos notes de frais simplement au sein d\'un workflow, sans double saisie','<p><span style=\"line-height: 1.42857;\">. Ordre de mission</span><br></p><p>. Avances sur frais</p><p>. Notes de frais</p>',3,1459953292861,1460135588018,NULL,'',29,NULL,'<div><p>Aragon-eRH<span style=\"font-weight: normal;\"> est une entité de Digital Dimension au sein du Groupe Econocom. Aragon-eRH est la branche SIRH de Digital Dimension, Pure Player qui propose de faire du Digital la nouvelle clé de la performance et de l’innovation des entreprises.</span></p><p><span style=\"font-weight: normal;\">Pour intégrer les pratiques RH de pointe dans son SIRH, Aragon-eRH s’est doté d’un </span>comité scientifique<span style=\"font-weight: normal;\">, composé de professionnels des ressources humaines, de chefs d’entreprise et de spécialistes des technologies dans le secteur des ressources humaines.</span></p><p><span style=\"font-weight: normal;\">Aragon-eRH est </span>reconnu pour son innovation et sa créativité<span style=\"font-weight: normal;\"> : nous sommes ainsi Gartner « Cool Vendor », classés au Deloitte Fast 500 EMEA, Lauréats du Réseau Entreprendre et reconnus par Oséo.</span></p><p><span style=\"font-weight: normal;\">GARTNER « Why Cool In an HCM market filled with complex solutions and lengthy implementations, Aragon-eRH stands out due to its focus on simplicity, ease of use and rapid deployment. Aragon-eRH offers rapid implementation plans, such as D+5 (expenses, time and leave management in five days) and D+9 (performance evaluation, workforce planning and recruiting in nine days). »</span></p><p><span style=\"font-weight: normal;\">DELOITTE « The Deloitte Technology Fast 500 EMEA program is the region’s most objective industry award program, recognizing technology companies that have achieved the fastest rates of revenue growth in Europe, the Middle East, and Africa (EMEA) during the past five years. The program is supported by the Deloitte Technology Fast 50 initiatives. »</span></p></div>',74,'http://www.aragon-erh.com/fr/','',NULL,NULL,1,NULL),(8,'ARAGON Recrutement','ARAGON-Recrutement-8','Service','published','','Pour attirer ou retenir les talents, faîtes rayonner votre marque employeur !','<p>Grâce au module « Nouveaux Talents », vous faîtes rayonner votre marque employeur en assurant une gestion rigoureuse de l’ensemble des processus de recrutement, en interne comme en externe :</p><p>. Plan de recrutement</p><p>.&nbsp;Diffusion des offres</p><p>.&nbsp;Gestion des candidatures</p><p>.&nbsp;Mobilité interne</p><p>.&nbsp;Onboarding</p>',3,1459953302023,1460135896114,NULL,'',31,NULL,'<p>Aragon-eRH<span style=\"font-weight: normal;\"> est une entité de Digital Dimension au sein du Groupe Econocom. Aragon-eRH est la branche SIRH de Digital Dimension, Pure Player qui propose de faire du Digital la nouvelle clé de la performance et de l’innovation des entreprises.</span></p><p><span style=\"font-weight: normal;\">Pour intégrer les pratiques RH de pointe dans son SIRH, Aragon-eRH s’est doté d’un </span>comité scientifique<span style=\"font-weight: normal;\">, composé de professionnels des ressources humaines, de chefs d’entreprise et de spécialistes des technologies dans le secteur des ressources humaines.</span></p><p>Aragon-eRH est reconnu pour son innovation et sa créativité<span style=\"font-weight: normal;\"> : nous sommes ainsi Gartner « Cool Vendor », classés au Deloitte Fast 500 EMEA, Lauréats du Réseau Entreprendre et reconnus par Oséo.</span></p><p><span style=\"font-weight: normal;\">GARTNER « Why Cool In an HCM market filled with complex solutions and lengthy implementations, Aragon-eRH stands out due to its focus on simplicity, ease of use and rapid deployment. Aragon-eRH offers rapid implementation plans, such as D+5 (expenses, time and leave management in five days) and D+9 (performance evaluation, workforce planning and recruiting in nine days). »</span></p><p><span style=\"font-weight: normal;\">DELOITTE « The Deloitte Technology Fast 500 EMEA program is the region’s most objective industry award program, recognizing technology companies that have achieved the fastest rates of revenue growth in Europe, the Middle East, and Africa (EMEA) during the past five years. The program is supported by the Deloitte Technology Fast 50 initiatives. »</span></p>',73,'http://www.aragon-erh.com/fr/','',NULL,NULL,1,NULL),(9,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!9','MobileApp','deleted','','','A description here',1,1459955509973,1459955561680,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(10,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!10','MobileApp','deleted','','','A description here',1,1459956658249,1459956682657,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(11,'WANDERA','WANDERA-11','SaaS','deleted','','« Mobile Data Gateway » de Wandera, pour sécurisé vos donnés.','<p>L’application cloud Wandera est destinée aux entreprises souhaitant mieux maîtriser leur parc mobile.</p><p>La passerelle \'Mobile Data Gateway\' est qualifiée de multi-niveaux, car les données sont scannées à la fois sur le terminal mobile et dans le Cloud. On obtient alors des contrôles en temps réels plus puissants.</p><p>En 2014, Wandera a été élu le “Cool Vendor in Enterprise Mobility” par Gartner.</p><p>Choisir un partenaire fiable et compétent dans son domaine d\'activité est la préoccupation de Digital Dimension. Nos partenaires sont sélectionnés avec soin et leurs technologies durement éprouvées.<br></p><p><br></p>',4,1459958594486,1459963227571,NULL,'',32,36,'<p>Our Story</p><p>The Wandera team are proven innovators in enterprise cloud services and security. The team founded ScanSafe (now part of Cisco), pioneer of the cloud secure web gateway market and trusted provider to thousands of global enterprises.</p><p>The same passion for innovation and focus on customer experience is behind Wandera and the design of our unique transparent gateway architecture. We’re excited to help our customers navigate the next generation of enterprise mobility challenges beyond traditional EMM. Recognized by Gartner as a Cool Vendor, and by Computing for Mobile Security Vendor Excellence, we help our customers maximize the incredible potential of mobility while providing a superior experience for their end users.</p>',32,'https://www.wandera.com','https://www.wandera.com',NULL,NULL,1,NULL),(12,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!12','MobileApp','deleted','','','A description here',4,1459974422635,1459974422905,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(13,'HARMONIE Gestion','HARMONIE-Gestion-13','MobileApp','published','','Pour une gestion des terminaux efficaces et éscurisée','<p>Nous vous proposons un outil conçu pour vous faciliter la gestion de votre flotte mobile ! <br></p><p>Harmonie Gestion permet :</p><p>-	la gestion des utilisateurs et des droits associés : un utilisateur est reconnu par le numéro IMEI de son terminal (identifiant unique du matériel), un numéro de téléphone ou un numéro de carte SIM (si carte SIM), et éventuellement un login / password.</p><p>-	la gestion d\'une flotte d\'appareils mobiles : inscription, modification, désactivation immédiate d’une machine en cas de perte ou de vol (la machine ne peut plus se connecter). Mise à jour des applications Rayonnance installées.</p><p>-	un inventaire matériel et logiciel complet pour le suivi du parc des terminaux :</p><p>&nbsp; &nbsp;&nbsp; . Il propose des statistiques sur les connexions et les activités sur l’application (date de dernière connexion, statut de synchronisation, …)</p><p>&nbsp; &nbsp;&nbsp; . Il présente les informations sur les versions de logiciel utilisées (version de l’application mobile, version du client Harmonie sur le terminal mobile, version du protocole de synchronisation)</p><p>&nbsp; &nbsp;&nbsp; . On y trouve également un système de supervision de l’ensemble des terminaux mobiles (mémoire allouée, niveau de batterie, …).  Harmonie Gestion remonte de nombreuses autres données qui ne sont pas présentées dans l’interface d’administration. On peut, si besoin, en afficher quelques-unes pour des demandes spécifiques de clients</p><p>&nbsp; &nbsp;&nbsp; . On peut y trouver si besoin l’ensemble des logs de connexion de l’application. Rayonnance peut former une personne à la lecture et l’analyse de ces logs</p>',3,1460014255883,1460138983705,NULL,'',97,NULL,'<p>Rayonnance est une entreprise française de référence dans la conception et la mise en œuvre de solutions métier en mobilité, notamment pour les secteurs du Retail, de l’Industrie, de la Logistique et du BTP ou encore de la Santé. La société propose une offre complète de services sur-mesure couvrant la mise à disposition de solutions matérielles (Smartphones, PDA industriels et Tablettes) fonctionnant sous Windows, iOS et Android et l’intégration d’applications métier développées par ses équipes. Rayonnance dispose en outre de sa propre solution middleware EMM (enterprise mobile management), «Harmonie», lui permettant de proposer des services avancés en matière de synchronisation de données avec les systèmes d’information et de MDM (mobile device management).</p><p>Créée en 2002 et soutenue depuis 2011 par le fonds d’investissements EPF Partners, Rayonnance connait une croissance ininterrompue de ses ventes qui a porté le volume d’activité à près de 15 millions d\'euros en 2013. <br></p><p>En juin 2014, Rayonnance rejoint Digital Dimension, leader des solutions mobiles professionnelles pour les entreprises.</p><p>La société accompagne des entreprises d’envergure internationale dans la mise en mobilité de leurs équipes et de leurs systèmes d’information, parmi lesquelles Camaïeu, Clear Channel, Danone, Heineken, Norauto, OCP, etc. Rayonnance fait partie du top 150 Ernst &amp; Young et Syntec 2012 et 2013 des sociétés IT en France.</p>',55,'http://rayonnance.fr/','http://www.digitaldimension.solutions/',NULL,NULL,1,NULL),(14,'WANDERA','WANDERA-14','SaaS','published','','« Mobile Data Gateway » de Wandera, pour sécurisé vos donnés.','<p>L’application cloud Wandera est destinée aux entreprises souhaitant mieux maîtriser leur parc mobile.</p><p>La passerelle \'Mobile Data Gateway\' est qualifiée de multi-niveaux, car les données sont scannées à la fois sur le terminal mobile et dans le Cloud. On obtient alors des contrôles en temps réels plus puissants.</p><p>En 2014, Wandera a été élu le “Cool Vendor in Enterprise Mobility” par Gartner.</p><p>Choisir un partenaire fiable et compétent dans son domaine d\'activité est la préoccupation de Digital Dimension. Nos partenaires sont sélectionnés avec soin et leurs technologies durement éprouvées.</p>',4,1460030157884,1460105322715,NULL,'',58,NULL,'<p>Our Story</p><p>The Wandera team are proven innovators in enterprise cloud services and security. The team founded ScanSafe (now part of Cisco), pioneer of the cloud secure web gateway market and trusted provider to thousands of global enterprises.</p><p>The same passion for innovation and focus on customer experience is behind Wandera and the design of our unique transparent gateway architecture. We’re excited to help our customers navigate the next generation of enterprise mobility challenges beyond traditional EMM. Recognized by Gartner as a Cool Vendor, and by Computing for Mobile Security Vendor Excellence, we help our customers maximize the incredible potential of mobility while providing a superior experience for their end users.</p>',58,'https://www.wandera.com/','https://www.wandera.com/',NULL,NULL,1,NULL),(15,'LOOKOUT','LOOKOUT-15','MobileApp','published','','Protégez-vous et faites face aux menaces les plus récentes','<p>La solution Mobile Threat Protection, en particulier, permet d’identifier les menaces ciblant les plateformes iOS et Android pour apporter une visibilité totale sur la sécurité du parc mobile de l’entreprise. Au travers d\'un agent léger et non intrusif, qui vérifie en permanence l\'état de l\'appareil, Lookout identifie et protége contre les menaces, qu\'elles soient liées aux applications, au système d\'exploitation ou encore au réseau.</p><p>La solution permet d’associer à chaque type de menace un niveau de risque spécifique qui garantit non seulement la définition d\'une politique de sécurité de façon granulaire, mais aussi, au travers de l’intégration avec un MDM/EMM, l\'apport d\'une réponse graduée et proportionnée.</p>',4,1460105356081,1460112509429,NULL,'',66,68,'<p>Lookout est une société de cybersécurité, qui prédit et stoppe les attaques mobiles avant qu’elles ne puissent présenter un risque pour l’entreprise ou le grand public. La technologie Lookout est alimentée par un réseau global de plus de 100 millions d’appareils mobiles et, chaque jour, des dizaines de milliers de nouvelles applications et menaces sont analysées. En combinant la base de données de menaces mobiles la plus importante au monde et un modèle basé sur l’intelligence artificielle et la capacité à traiter des volumes d’information toujours plus importants, Lookout identifie des connections qui échappent aux technologies traditionnelles et empêche ainsi les cyber criminels de mener à bien leurs attaques ciblant les mobiles.</p><p>La société, dont le siège est à San Francisco, a été fondée en 2007 et dispose de bureaux dans le monde entier.</p><p><br></p>',65,'https://www.lookout.com','https://www.lookout.com',NULL,NULL,1,NULL),(16,'MOBILEIRON','MOBILEIRON-16','MobileApp','published','','Leader dans la sécurité de l\'entreprise mobile','<p><b>En fournissant une solution de gestion de la mobilité d\'entreprise (EMM, Enterprise Mobility Management), sur site ou dans le cloud, qui répond à la fois aux exigences des utilisateurs et aux besoins des départements informatiques, MobileIron permet aux organisations de devenir réellement Mobile First</b>. La plateforme MobileIron permet aux responsables informatiques de sécuriser et de gérer les appareils, les applications et le contenu en offrant aux utilisateurs un accès instantané aux données d\'entreprise sur un appareil de leur choix. Grâce à cette plateforme EMM, les organisations peuvent consacrer plus de temps à l\'innovation et au développement de leurs activités et moins de temps à la sécurisation des appareils mobiles.</p><p><b>Nos clients peuvent choisir d\'utiliser notre plateforme dans le cadre d\'un service cloud ou de la déployer sur site.</b></p><p>Les services informatiques définissent des règles de conformité appliquées en temps réel sur les appareils, les accès aux backoffices et durant le transfert. Son extensibilité offre par ailleurs la possibilité à un vaste ensemble de développeurs et de fournisseurs de technologie d\'intégrer facilement la plateforme MobileIron dans l\'infrastructure informatique des entreprises.</p><p>Le cœur de la plateforme MobileIron se compose des éléments suivants : MobileIron Core, MobileIron Sentry. Cette plateforme professionnelle sécurise et gére les appareils, applications et contenus mobiles tout en permettant aux collaborateurs de choisir leur matériel, de protéger leurs données personnelles et de travailler dans un environnement qui leur convient.</p>',4,1460112293540,1460139180477,NULL,'',98,NULL,'<p>MobileIron sécurise les informations où qu\'elles se trouvent. En effet les informations professionnelles sont partout : dans les centres de données, dans le cloud, dans les applications mobiles, sur les appareils mobiles et en transit entre tous ces éléments. Ainsi est il nécessaire de garantir la sécurité des terminaux, des applications et des accès aux ressources clefs de votre système d\'information.</p>',85,'https://www.mobileiron.com/fr','https://www.mobileiron.com/fr',NULL,NULL,1,NULL),(17,'ARAGON Congés & absences','ARAGON-Conges-&-absences-17','Service','published','','Avec « Congés & absences », gagnez du temps dans la gestion de vos ressources humaines','<p>. Demandes de congés</p><p>. Gestion des compteurs</p><p><span style=\"line-height: 1.42857;\">. Planning des présences et des absences</span></p>',3,1460126661897,1460135698105,NULL,'',70,NULL,'<p>Aragon-eRH <span style=\"font-weight: normal;\">est une entité de Digital Dimension au sein du Groupe Econocom. Aragon-eRH est la branche SIRH de Digital Dimension, Pure Player qui propose de faire du Digital la nouvelle clé de la performance et de l’innovation des entreprises.</span></p><p><span style=\"font-weight: normal;\">Pour intégrer les pratiques RH de pointe dans son SIRH, Aragon-eRH s’est doté d’un </span>comité scientifique<span style=\"font-weight: normal;\">, composé de professionnels des ressources humaines, de chefs d’entreprise et de spécialistes des technologies dans le secteur des ressources humaines.</span></p><p><span style=\"font-weight: normal;\">Aragon-eRH est </span>reconnu pour son innovation et sa créativité<span style=\"font-weight: normal;\"> : nous sommes ainsi Gartner « Cool Vendor », classés au Deloitte Fast 500 EMEA, Lauréats du Réseau Entreprendre et reconnus par Oséo.</span></p><p><span style=\"font-weight: normal;\">GARTNER « Why Cool In an HCM market filled with complex solutions and lengthy implementations, Aragon-eRH stands out due to its focus on simplicity, ease of use and rapid deployment. Aragon-eRH offers rapid implementation plans, such as D+5 (expenses, time and leave management in five days) and D+9 (performance evaluation, workforce planning and recruiting in nine days). »</span></p><p><span style=\"font-weight: normal;\">DELOITTE « The Deloitte Technology Fast 500 EMEA program is the region’s most objective industry award program, recognizing technology companies that have achieved the fastest rates of revenue growth in Europe, the Middle East, and Africa (EMEA) during the past five years. The program is supported by the Deloitte Technology Fast 50 initiatives. »</span></p>',71,'http://www.aragon-erh.com/fr/','',NULL,NULL,1,NULL),(18,'ARAGON Dossier collaborateur','ARAGON-Dossier-collaborateur-18','Service','published','','Grâce au dossier collaborateur, vous avez à portée de main toutes les informations historisées','<p>. Information collaborateur</p><p>. Générateur de contrats et avenants</p><p>. Salaire et historique de carrière</p><p>. Gestion des avantages société</p><p>. Alertes RH</p>',3,1460126667066,1460135662863,NULL,'',69,NULL,'<p>Aragon-eRH <span style=\"font-weight: normal;\">est une entité de Digital Dimension au sein du Groupe Econocom. Aragon-eRH est la branche SIRH de Digital Dimension, Pure Player qui propose de faire du Digital la nouvelle clé de la performance et de l’innovation des entreprises.</span></p><p><span style=\"font-weight: normal;\">Pour intégrer les pratiques RH de pointe dans son SIRH, Aragon-eRH s’est doté d’un </span>comité scientifique<span style=\"font-weight: normal;\">, composé de professionnels des ressources humaines, de chefs d’entreprise et de spécialistes des technologies dans le secteur des ressources humaines.</span></p><p><span style=\"font-weight: normal;\">Aragon-eRH est </span>reconnu pour son innovation et sa créativité<span style=\"font-weight: normal;\"> : nous sommes ainsi Gartner « Cool Vendor », classés au Deloitte Fast 500 EMEA, Lauréats du Réseau Entreprendre et reconnus par Oséo.</span></p><p><span style=\"font-weight: normal;\">GARTNER « Why Cool In an HCM market filled with complex solutions and lengthy implementations, Aragon-eRH stands out due to its focus on simplicity, ease of use and rapid deployment. Aragon-eRH offers rapid implementation plans, such as D+5 (expenses, time and leave management in five days) and D+9 (performance evaluation, workforce planning and recruiting in nine days). »</span></p><p><span style=\"font-weight: normal;\">DELOITTE « The Deloitte Technology Fast 500 EMEA program is the region’s most objective industry award program, recognizing technology companies that have achieved the fastest rates of revenue growth in Europe, the Middle East, and Africa (EMEA) during the past five years. The program is supported by the Deloitte Technology Fast 50 initiatives. »</span></p>',72,'http://www.aragon-erh.com/fr/','',NULL,NULL,1,NULL),(19,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!19','MobileApp','deleted','','','A description here',3,1460137362707,1460137362894,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(20,'easyRECrue Entretien vidéo ','easyRECrue-Entretien-video--20','Service','draft','','L\'entretien video différé','<p>easyRECrue est une solution innovante d\'entretien vidéo différé en mode SaaS permettant d\'optimiser la phase de présélection des candidatures. Entre le tri de CV et l\'entretien physique, easyRECrue permet d\'harmoniser les processus, de réduire le coût d\'un recrutement et de sélectionner les meilleurs talents en remplaçant la présélection téléphonique par la vidéo. Les bénéfices :<br></p><p>. Gagnez du temps,&nbsp;<span style=\"line-height: 1.42857;\">&nbsp;jusqu\'à 50% de temps sur votre phase de pré-sélection</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Economisez jusqu\'à 500 € par recrutement</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Rencontrez de nouveaux candidats et valorisez votre marque employeur</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Impliquez vos collaborateurs dans le processus de recrutement</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Optimisez votre prise de décision et offrez la même expérience à vos candidats</span></p>',4,1460137426150,1460713123756,NULL,'',99,NULL,'<p><span style=\"font-weight: normal;\">Une équipe passionnée à votre service</span></p><p><span style=\"font-weight: normal;\">Lancée en septembre 2013, la société EASYRECRUE développe et commercialise une solution logicielle en mode SAAS à destination des professionnels du recrutement. L\'ambition d\'EASYRECRUE est de développer une offre de présélection digitale, innovante et complète afin de faciliter le rapprochement entre candidats et recruteurs.</span></p><p><span style=\"font-weight: normal;\">Passionnés par les nouvelles technologies et l\'univers des ressources humaines, nous sommes convaincus que la vidéo et le recrutement sont faits pour s\'entendre. Notre équipe vous accompagne d\'une manière innovante dans vos recrutements en vous permettant d\'intégrer les meilleurs talents.</span></p>',91,'http://www.easyrecrue.com/','',NULL,NULL,1,NULL),(21,'ARAGON Rémunérations','ARAGON-Remunerations-21','Service','draft','','Avec \"ARAGON Rémunérations\" simulez l\'impact de votre plan de promotion et structurez la gestion des augmentations annuelles','<p>.&nbsp;<span style=\"line-height: 1.42857;\">Plan de rémunération</span></p><p><span style=\"line-height: 20px;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Augmentations individuelles et collectives</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Suivi des rémunérations</span></p>',3,1460471212590,1460554093473,NULL,'',100,NULL,'<p>Aragon-eRH<span style=\"font-weight: normal;\"> est une entité de Digital Dimension au sein du Groupe Econocom. Aragon-eRH est la branche SIRH de Digital Dimension, Pure Player qui propose de faire du Digital la nouvelle clé de la performance et de l’innovation des entreprises.</span></p><p><span style=\"font-weight: normal;\">Pour intégrer les pratiques RH de pointe dans son SIRH, Aragon-eRH s’est doté d’un </span>comité scientifique<span style=\"font-weight: normal;\">, composé de professionnels des ressources humaines, de chefs d’entreprise et de spécialistes des technologies dans le secteur des ressources humaines.</span></p><p><span style=\"font-weight: normal;\">Aragon-eRH est </span>reconnu pour son innovation et sa créativité<span style=\"font-weight: normal;\"> : nous sommes ainsi Gartner « Cool Vendor », classés au Deloitte Fast 500 EMEA, Lauréats du Réseau Entreprendre et reconnus par Oséo.</span></p><p><span style=\"font-weight: normal;\">GARTNER « Why Cool In an HCM market filled with complex solutions and lengthy implementations, Aragon-eRH stands out due to its focus on simplicity, ease of use and rapid deployment. Aragon-eRH offers rapid implementation plans, such as D+5 (expenses, time and leave management in five days) and D+9 (performance evaluation, workforce planning and recruiting in nine days). »</span></p><p><span style=\"font-weight: normal;\">DELOITTE « The Deloitte Technology Fast 500 EMEA program is the region’s most objective industry award program, recognizing technology companies that have achieved the fastest rates of revenue growth in Europe, the Middle East, and Africa (EMEA) during the past five years. The program is supported by the Deloitte Technology Fast 50 initiatives. »</span></p>',101,'http://www.aragon-erh.com/fr/','',NULL,NULL,1,NULL),(22,'ARAGON Formation','ARAGON-Formation-22','Service','draft','','Constituez votre plan annuel de formation en quelques clics !','<p>.&nbsp;<span style=\"line-height: 1.42857;\">Plan annuel de formation et suivi budgétaire</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Catalogue des formations</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Gestion et administration des formations</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">E-Learning</span></p><p><span style=\"line-height: 1.42857;\"><br></span></p>',3,1460471759515,1460554526115,NULL,'',102,NULL,'<p>Aragon-eRH<span style=\"font-weight: normal;\"> est une entité de Digital Dimension au sein du Groupe Econocom. Aragon-eRH est la branche SIRH de Digital Dimension, Pure Player qui propose de faire du Digital la nouvelle clé de la performance et de l’innovation des entreprises.</span></p><p><span style=\"font-weight: normal;\">Pour intégrer les pratiques RH de pointe dans son SIRH, Aragon-eRH s’est doté d’un </span>comité scientifique<span style=\"font-weight: normal;\">, composé de professionnels des ressources humaines, de chefs d’entreprise et de spécialistes des technologies dans le secteur des ressources humaines.</span></p><p><span style=\"font-weight: normal;\">Aragon-eRH est </span>reconnu pour son innovation et sa créativité<span style=\"font-weight: normal;\"> : nous sommes ainsi Gartner « Cool Vendor », classés au Deloitte Fast 500 EMEA, Lauréats du Réseau Entreprendre et reconnus par Oséo.</span></p><p><span style=\"font-weight: normal;\">GARTNER « Why Cool In an HCM market filled with complex solutions and lengthy implementations, Aragon-eRH stands out due to its focus on simplicity, ease of use and rapid deployment. Aragon-eRH offers rapid implementation plans, such as D+5 (expenses, time and leave management in five days) and D+9 (performance evaluation, workforce planning and recruiting in nine days). »</span></p><p><span style=\"font-weight: normal;\">DELOITTE « The Deloitte Technology Fast 500 EMEA program is the region’s most objective industry award program, recognizing technology companies that have achieved the fastest rates of revenue growth in Europe, the Middle East, and Africa (EMEA) during the past five years. The program is supported by the Deloitte Technology Fast 50 initiatives. »</span></p>',103,'http://www.aragon-erh.com/fr/','',NULL,NULL,1,NULL),(23,'ARAGON Organisation','ARAGON-Organisation-23','Service','draft','','Structurez et pilotez vos effectifs au quotidien','<p>.&nbsp;<span style=\"line-height: 1.42857;\">Organigrammes</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Gestion des postes</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Suivi des effectifs et masse salariale</span></p><p><span style=\"line-height: 1.42857;\"><br></span></p>',3,1460472281176,1460554622866,NULL,'',104,NULL,'<p>Aragon-eRH<span style=\"font-weight: normal;\"> est une entité de Digital Dimension au sein du Groupe Econocom. Aragon-eRH est la branche SIRH de Digital Dimension, Pure Player qui propose de faire du Digital la nouvelle clé de la performance et de l’innovation des entreprises.</span></p><p><span style=\"font-weight: normal;\">Pour intégrer les pratiques RH de pointe dans son SIRH, Aragon-eRH s’est doté d’un </span>comité scientifique<span style=\"font-weight: normal;\">, composé de professionnels des ressources humaines, de chefs d’entreprise et de spécialistes des technologies dans le secteur des ressources humaines.</span></p><p><span style=\"font-weight: normal;\">Aragon-eRH est </span>reconnu pour son innovation et sa créativité<span style=\"font-weight: normal;\"> : nous sommes ainsi Gartner « Cool Vendor », classés au Deloitte Fast 500 EMEA, Lauréats du Réseau Entreprendre et reconnus par Oséo.</span></p><p><span style=\"font-weight: normal;\">GARTNER « Why Cool In an HCM market filled with complex solutions and lengthy implementations, Aragon-eRH stands out due to its focus on simplicity, ease of use and rapid deployment. Aragon-eRH offers rapid implementation plans, such as D+5 (expenses, time and leave management in five days) and D+9 (performance evaluation, workforce planning and recruiting in nine days). »</span></p><p><span style=\"font-weight: normal;\">DELOITTE « The Deloitte Technology Fast 500 EMEA program is the region’s most objective industry award program, recognizing technology companies that have achieved the fastest rates of revenue growth in Europe, the Middle East, and Africa (EMEA) during the past five years. The program is supported by the Deloitte Technology Fast 50 initiatives. »</span></p>',105,'http://www.aragon-erh.com/fr/','',NULL,NULL,1,NULL),(24,'ARAGON  Entretiens compétences &carrière','ARAGON--Entretiens-competences-&carriere-24','Service','draft','','Garantissez l’application des bonnes pratiques RH et le suivi des objectifs de votre Entreprise à vos collaborateurs','<p>. Entretien et évaluations</p><p>. Comité carrières et plan de succession</p><p>. Référentiel et profil de compétences</p><p>. To do list collaborateur</p>',3,1460538294353,1460554711804,NULL,'',106,NULL,'<p>Aragon-eRH<span style=\"font-weight: normal;\"> est une entité de Digital Dimension au sein du Groupe Econocom. Aragon-eRH est la branche SIRH de Digital Dimension, Pure Player qui propose de faire du Digital la nouvelle clé de la performance et de l’innovation des entreprises.</span></p><p><span style=\"font-weight: normal;\">Pour intégrer les pratiques RH de pointe dans son SIRH, Aragon-eRH s’est doté d’un </span>comité scientifique<span style=\"font-weight: normal;\">, composé de professionnels des ressources humaines, de chefs d’entreprise et de spécialistes des technologies dans le secteur des ressources humaines.</span></p><p><span style=\"font-weight: normal;\">Aragon-eRH est </span>reconnu pour son innovation et sa créativité<span style=\"font-weight: normal;\"> : nous sommes ainsi Gartner « Cool Vendor », classés au Deloitte Fast 500 EMEA, Lauréats du Réseau Entreprendre et reconnus par Oséo.</span></p><p><span style=\"font-weight: normal;\">GARTNER « Why Cool In an HCM market filled with complex solutions and lengthy implementations, Aragon-eRH stands out due to its focus on simplicity, ease of use and rapid deployment. Aragon-eRH offers rapid implementation plans, such as D+5 (expenses, time and leave management in five days) and D+9 (performance evaluation, workforce planning and recruiting in nine days). »</span></p><p><span style=\"font-weight: normal;\">DELOITTE « The Deloitte Technology Fast 500 EMEA program is the region’s most objective industry award program, recognizing technology companies that have achieved the fastest rates of revenue growth in Europe, the Middle East, and Africa (EMEA) during the past five years. The program is supported by the Deloitte Technology Fast 50 initiatives. »</span></p>',107,'http://www.aragon-erh.com/fr/','',NULL,NULL,1,NULL),(25,'ARAGON Planification stratégique','ARAGON-Planification-strategique-25','Service','draft','','Anticipez vos besoins RH et adaptez vos processus et organisations !','<p>En fonction de votre secteur d’activité, les variations dans la demande peuvent être fortes et nécessiter une forte adaptation des processus et organisations. Grâce au module \"ARAGON planification stratégique\" vous préparez votre organisation  en identifiant les compétences mobilisables en interne et les éventuels besoin de CDD ou Intérim.</p>',3,1460538944716,1460554814362,NULL,'',108,NULL,'<p>Aragon-eRH<span style=\"font-weight: normal;\"> est une entité de Digital Dimension au sein du Groupe Econocom. Aragon-eRH est la branche SIRH de Digital Dimension, Pure Player qui propose de faire du Digital la nouvelle clé de la performance et de l’innovation des entreprises.</span></p><p><span style=\"font-weight: normal;\">Pour intégrer les pratiques RH de pointe dans son SIRH, Aragon-eRH s’est doté d’un </span>comité scientifique<span style=\"font-weight: normal;\">, composé de professionnels des ressources humaines, de chefs d’entreprise et de spécialistes des technologies dans le secteur des ressources humaines.</span></p><p><span style=\"font-weight: normal;\">Aragon-eRH est </span>reconnu pour son innovation et sa créativité<span style=\"font-weight: normal;\"> : nous sommes ainsi Gartner « Cool Vendor », classés au Deloitte Fast 500 EMEA, Lauréats du Réseau Entreprendre et reconnus par Oséo.</span></p><p><span style=\"font-weight: normal;\">GARTNER « Why Cool In an HCM market filled with complex solutions and lengthy implementations, Aragon-eRH stands out due to its focus on simplicity, ease of use and rapid deployment. Aragon-eRH offers rapid implementation plans, such as D+5 (expenses, time and leave management in five days) and D+9 (performance evaluation, workforce planning and recruiting in nine days). »</span></p><p><span style=\"font-weight: normal;\">DELOITTE « The Deloitte Technology Fast 500 EMEA program is the region’s most objective industry award program, recognizing technology companies that have achieved the fastest rates of revenue growth in Europe, the Middle East, and Africa (EMEA) during the past five years. The program is supported by the Deloitte Technology Fast 50 initiatives. »</span></p>',109,'http://www.aragon-erh.com/fr/','',NULL,NULL,1,NULL),(26,'ARAGON Feuille de temps','ARAGON-Feuille-de-temps-26','Service','draft','','Pilotez l\'activité par le suivi et l\'optimisation des temps de travail et garantissez la conformité règlementaire des pratiques de l\'Entreprise','<p>Comptabilisez et pilotez le temps de travail effectif des salariés et optimisez les charges de travail pour les managers. Le module «&nbsp;Feuilles de temps&nbsp;» vous permet de garantir la conformité règlementaire des pratiques de l’entreprise.</p><p>.&nbsp;<span style=\"line-height: 1.42857;\">Déclaration des temps</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Ventilation par projet/ activité</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Badgeuse virtuelle</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Optimisation des ressources</span></p><p><span style=\"line-height: 1.42857;\"><br></span></p>',3,1460539460431,1460554916734,NULL,'',110,NULL,'<p>Aragon-eRH<span style=\"font-weight: normal;\"> est une entité de Digital Dimension au sein du Groupe Econocom. Aragon-eRH est la branche SIRH de Digital Dimension, Pure Player qui propose de faire du Digital la nouvelle clé de la performance et de l’innovation des entreprises.</span></p><p><span style=\"font-weight: normal;\">Pour intégrer les pratiques RH de pointe dans son SIRH, Aragon-eRH s’est doté d’un </span>comité scientifique<span style=\"font-weight: normal;\">, composé de professionnels des ressources humaines, de chefs d’entreprise et de spécialistes des technologies dans le secteur des ressources humaines.</span></p><p><span style=\"font-weight: normal;\">Aragon-eRH est </span>reconnu pour son innovation et sa créativité<span style=\"font-weight: normal;\"> : nous sommes ainsi Gartner « Cool Vendor », classés au Deloitte Fast 500 EMEA, Lauréats du Réseau Entreprendre et reconnus par Oséo.</span></p><p><span style=\"font-weight: normal;\">GARTNER « Why Cool In an HCM market filled with complex solutions and lengthy implementations, Aragon-eRH stands out due to its focus on simplicity, ease of use and rapid deployment. Aragon-eRH offers rapid implementation plans, such as D+5 (expenses, time and leave management in five days) and D+9 (performance evaluation, workforce planning and recruiting in nine days). »</span></p><p><span style=\"font-weight: normal;\">DELOITTE « The Deloitte Technology Fast 500 EMEA program is the region’s most objective industry award program, recognizing technology companies that have achieved the fastest rates of revenue growth in Europe, the Middle East, and Africa (EMEA) during the past five years. The program is supported by the Deloitte Technology Fast 50 initiatives. »</span></p>',111,'http://www.aragon-erh.com/fr/','',NULL,NULL,1,NULL),(27,'ARAGON Outil collaboratif','ARAGON-Outil-collaboratif-27','Service','draft','','Publiez, échangez des informations RH ciblées & sollicitez des avis','<p>Avec l\'Outil collaboratif d\'ARAGON, publiez des informations auprès de toute ou une partie de l’entreprise, sollicitez en quelques clics l’avis des collaborateurs et facilitez les échanges entre services.</p><p>.&nbsp;<span style=\"line-height: 1.42857;\">Communication RH</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Sondage</span></p><p><span style=\"line-height: 1.42857;\">. Base de donnée unique (BDU) et b</span><span style=\"line-height: 1.42857;\">ilan social individuel (BSI)</span></p><p><span style=\"line-height: 1.42857;\">. Réseau Social d\'Entreprise (RSE)</span></p>&nbsp;<br><p><br></p>',3,1460540283108,1460554982084,NULL,'',112,NULL,'<p>Aragon-eRH<span style=\"font-weight: normal;\"> est une entité de Digital Dimension au sein du Groupe Econocom. Aragon-eRH est la branche SIRH de Digital Dimension, Pure Player qui propose de faire du Digital la nouvelle clé de la performance et de l’innovation des entreprises.</span></p><p><span style=\"font-weight: normal;\">Pour intégrer les pratiques RH de pointe dans son SIRH, Aragon-eRH s’est doté d’un </span>comité scientifique<span style=\"font-weight: normal;\">, composé de professionnels des ressources humaines, de chefs d’entreprise et de spécialistes des technologies dans le secteur des ressources humaines.</span></p><p><span style=\"font-weight: normal;\">Aragon-eRH est </span>reconnu pour son innovation et sa créativité<span style=\"font-weight: normal;\"> : nous sommes ainsi Gartner « Cool Vendor », classés au Deloitte Fast 500 EMEA, Lauréats du Réseau Entreprendre et reconnus par Oséo.</span></p><p><span style=\"font-weight: normal;\">GARTNER « Why Cool In an HCM market filled with complex solutions and lengthy implementations, Aragon-eRH stands out due to its focus on simplicity, ease of use and rapid deployment. Aragon-eRH offers rapid implementation plans, such as D+5 (expenses, time and leave management in five days) and D+9 (performance evaluation, workforce planning and recruiting in nine days). »</span></p><p><span style=\"font-weight: normal;\">DELOITTE « The Deloitte Technology Fast 500 EMEA program is the region’s most objective industry award program, recognizing technology companies that have achieved the fastest rates of revenue growth in Europe, the Middle East, and Africa (EMEA) during the past five years. The program is supported by the Deloitte Technology Fast 50 initiatives. »</span></p>',113,'http://www.aragon-erh.com/fr/','',NULL,NULL,1,NULL),(28,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!28','MobileApp','draft','','','A description here',NULL,1460553198234,1460553198265,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(29,'ARAGON Planification opérationnelle','ARAGON-Planification-operationnelle-29','Service','draft','','Améliorez la rentabilité de vos opérations en optimisant la sélection des ressources en respectant les contraintes légales des compteurs sociaux','<p>.&nbsp;<span style=\"line-height: 1.42857;\">Optimisation des affectations</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Planning d’activités</span></p><p><span style=\"line-height: 1.42857;\">.&nbsp;</span><span style=\"line-height: 1.42857;\">Suivi opérationnel des plannings d’activités</span></p>',3,1460553258925,1460555063810,NULL,'',114,NULL,'<p>Aragon-eRH<span style=\"font-weight: normal;\"> est une entité de Digital Dimension au sein du Groupe Econocom. Aragon-eRH est la branche SIRH de Digital Dimension, Pure Player qui propose de faire du Digital la nouvelle clé de la performance et de l’innovation des entreprises.</span></p><p><span style=\"font-weight: normal;\">Pour intégrer les pratiques RH de pointe dans son SIRH, Aragon-eRH s’est doté d’un </span>comité scientifique<span style=\"font-weight: normal;\">, composé de professionnels des ressources humaines, de chefs d’entreprise et de spécialistes des technologies dans le secteur des ressources humaines.</span></p><p><span style=\"font-weight: normal;\">Aragon-eRH est </span>reconnu pour son innovation et sa créativité<span style=\"font-weight: normal;\"> : nous sommes ainsi Gartner « Cool Vendor », classés au Deloitte Fast 500 EMEA, Lauréats du Réseau Entreprendre et reconnus par Oséo.</span></p><p><span style=\"font-weight: normal;\">GARTNER « Why Cool In an HCM market filled with complex solutions and lengthy implementations, Aragon-eRH stands out due to its focus on simplicity, ease of use and rapid deployment. Aragon-eRH offers rapid implementation plans, such as D+5 (expenses, time and leave management in five days) and D+9 (performance evaluation, workforce planning and recruiting in nine days). »</span></p><p><span style=\"font-weight: normal;\">DELOITTE « The Deloitte Technology Fast 500 EMEA program is the region’s most objective industry award program, recognizing technology companies that have achieved the fastest rates of revenue growth in Europe, the Middle East, and Africa (EMEA) during the past five years. The program is supported by the Deloitte Technology Fast 50 initiatives. »</span></p>',115,'http://www.aragon-erh.com/fr/','',NULL,NULL,1,NULL);
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
INSERT INTO `product_available_feature` VALUES ('PRODUCT_EDITOR',1),('PRODUCT_FEATURES',1),('PRODUCT_RESOURCES',1),('PRODUCT_SUMMARY',1),('PRODUCT_EDITOR',2),('PRODUCT_FEATURES',2),('PRODUCT_RESOURCES',2),('PRODUCT_SUMMARY',2),('PRODUCT_EDITOR',3),('PRODUCT_FEATURES',3),('PRODUCT_RESOURCES',3),('PRODUCT_SUMMARY',3),('PRODUCT_EDITOR',4),('PRODUCT_FEATURES',4),('PRODUCT_RESOURCES',4),('PRODUCT_SUMMARY',4),('PRODUCT_EDITOR',5),('PRODUCT_FEATURES',5),('PRODUCT_RESOURCES',5),('PRODUCT_SUMMARY',5),('PRODUCT_EDITOR',6),('PRODUCT_FEATURES',6),('PRODUCT_RESOURCES',6),('PRODUCT_SUMMARY',6),('PRODUCT_EDITOR',7),('PRODUCT_FEATURES',7),('PRODUCT_RESOURCES',7),('PRODUCT_SUMMARY',7),('PRODUCT_EDITOR',8),('PRODUCT_FEATURES',8),('PRODUCT_RESOURCES',8),('PRODUCT_SUMMARY',8),('PRODUCT_EDITOR',9),('PRODUCT_FEATURES',9),('PRODUCT_RESOURCES',9),('PRODUCT_SUMMARY',9),('PRODUCT_EDITOR',10),('PRODUCT_FEATURES',10),('PRODUCT_RESOURCES',10),('PRODUCT_SUMMARY',10),('PRODUCT_EDITOR',11),('PRODUCT_FEATURES',11),('PRODUCT_RESOURCES',11),('PRODUCT_SUMMARY',11),('PRODUCT_EDITOR',12),('PRODUCT_FEATURES',12),('PRODUCT_RESOURCES',12),('PRODUCT_SUMMARY',12),('PRODUCT_EDITOR',13),('PRODUCT_FEATURES',13),('PRODUCT_RESOURCES',13),('PRODUCT_SUMMARY',13),('PRODUCT_EDITOR',14),('PRODUCT_FEATURES',14),('PRODUCT_RESOURCES',14),('PRODUCT_SUMMARY',14),('PRODUCT_EDITOR',15),('PRODUCT_FEATURES',15),('PRODUCT_RESOURCES',15),('PRODUCT_SUMMARY',15),('PRODUCT_EDITOR',16),('PRODUCT_FEATURES',16),('PRODUCT_RESOURCES',16),('PRODUCT_SUMMARY',16),('PRODUCT_EDITOR',17),('PRODUCT_FEATURES',17),('PRODUCT_RESOURCES',17),('PRODUCT_SUMMARY',17),('PRODUCT_EDITOR',18),('PRODUCT_FEATURES',18),('PRODUCT_RESOURCES',18),('PRODUCT_SUMMARY',18),('PRODUCT_EDITOR',19),('PRODUCT_FEATURES',19),('PRODUCT_RESOURCES',19),('PRODUCT_SUMMARY',19),('PRODUCT_EDITOR',20),('PRODUCT_FEATURES',20),('PRODUCT_RESOURCES',20),('PRODUCT_SUMMARY',20),('PRODUCT_EDITOR',21),('PRODUCT_FEATURES',21),('PRODUCT_RESOURCES',21),('PRODUCT_SUMMARY',21),('PRODUCT_EDITOR',22),('PRODUCT_FEATURES',22),('PRODUCT_RESOURCES',22),('PRODUCT_SUMMARY',22),('PRODUCT_EDITOR',23),('PRODUCT_FEATURES',23),('PRODUCT_RESOURCES',23),('PRODUCT_SUMMARY',23),('PRODUCT_EDITOR',24),('PRODUCT_FEATURES',24),('PRODUCT_RESOURCES',24),('PRODUCT_SUMMARY',24),('PRODUCT_EDITOR',25),('PRODUCT_FEATURES',25),('PRODUCT_RESOURCES',25),('PRODUCT_SUMMARY',25),('PRODUCT_EDITOR',26),('PRODUCT_FEATURES',26),('PRODUCT_RESOURCES',26),('PRODUCT_SUMMARY',26),('PRODUCT_EDITOR',27),('PRODUCT_FEATURES',27),('PRODUCT_RESOURCES',27),('PRODUCT_SUMMARY',27),('PRODUCT_EDITOR',28),('PRODUCT_FEATURES',28),('PRODUCT_RESOURCES',28),('PRODUCT_SUMMARY',28),('PRODUCT_EDITOR',29),('PRODUCT_FEATURES',29),('PRODUCT_RESOURCES',29),('PRODUCT_SUMMARY',29);
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
INSERT INTO `product_corner` VALUES (5,3,3),(6,3,1),(7,2,0),(8,2,0),(11,3,0),(13,3,2),(14,3,0),(15,3,0),(16,3,0),(17,2,0),(18,2,0),(20,2,0),(21,2,0),(22,2,0),(23,2,0),(24,2,0),(24,3,0),(25,2,0),(26,2,0),(27,2,0),(29,2,0);
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
INSERT INTO `product_feature` VALUES (5,1,'Générateur XML de formulaires','<p>Pour tous types de supports, PDA Windows Mobile, Tablet Windows, smartphone et Tablet Android, spécialement conçu pour les projets d’application de suivi d’intervention dans le domaine de la maintenance et l’audit avec du multi-formulaires (exemples de déploiement : CBS Outdoor, RATP, Tokheim, CEC, Sergaz, LVMH R&amp;D ...).</p>'),(5,2,'Bibliothèque de composants Rayonnance','Une bibliothèque complète adaptée à la saisie sur terminal mobile tactile : <p>. menus déroulants, <br></p><p>. composants tiroir,</p><p>. cases à cocher, <br></p><p>. saisie de valeurs numériques, <br></p><p>. saisies libres, <br></p><p>. saisie de dates, <br></p><p>. prise de photo, <br></p><p>. composant signature, ...</p><p><br></p>'),(5,3,'Mises en application variées','<p>. Ajout dynamique d’éléments ou de pages à la volée au moment de remplissage du formulaire</p><p>. Définition d’aide textuelle et visuelle pour les éléments du formulaire</p><p>. Définition des champs obligatoires et des valeurs par défaut</p><p>. Contrôle fine de la mise en page et de la présentation</p><p>. Contrôle et validation des valeurs entrées</p><p>. Définir des sous-formulaires multi-niveaux</p><p>. Mise en page conditionnelle</p><p>. Auto-remplissage conditionnel</p><p>. Champs calculés</p>'),(6,1,'Efficace et sûre','<p>. Les dossiers/fichiers peuvent être synchronisés par tous les terminaux ou en cibler une partie par utilisateur, groupe, type de terminal, affectation d’une intervention/tournée... Un simple fichier de configuration permet de modifier la configuration des dossiers (ajout/suppression, choix de la localisation sur les terminaux, choix des terminaux destinataires...).</p><p>. Une connexion internet ou intranet est utilisée pour la synchronisation des fichiers et il est possible de limiter son fonctionnement aux réseaux Wifi/Ethernet ou le généraliser au 3G/4G selon l’usage désiré.</p><p>. Les terminaux synchronisent régulièrement pour se mettre à jour (ajout, suppression ou déplacements de fichiers). Il est également possible de forcer une synchronisation manuelle ou de la déclencher à des moments clés.</p>'),(6,2,'Technologies épprovées','<p>. Harmonie Fichiers s’appuie sur un serveur de fichier (serveur standard, NAS...). Il peut être géré localement sur le serveur, via un partage de dossier réseau, via FTP où grâce à une interface Web faisant partie intégrante de Harmonie Fichiers.</p><p>. Un serveur Web, pouvant être hébergé sur le même serveur que les données à synchroniser, permet la synchronisation et donc la mise à disposition des fichiers aux terminaux.</p><p>. Un serveur de base de données SQL Serveur (à partir de 2008 R2) ou Oracle (à partir de 11G) permet de conserver les informations de synchronisation</p><p>. Les terminaux concernés peuvent tourner sous Windows (Tablets, PC portables ou fixes), Windows mobile ou Android (Tablets ou smartphones)</p>'),(6,3,'Maîtrise de bout en bout','<p>. Harmonie Fichiers se décompose en :</p><p>- Une partie serveur (base de données, service Windows, application Web de synchronisation)</p><p>- Un client de synchronisation (Android ou Windows)</p><p>. Les dossiers peuvent ensuite être explorés à l’aide de l’explorateur de documents intégré aux terminaux ou un explorateur spécifique permettant :</p><p>- Une meilleure intégration dans vos applications</p><p>- Un ciblage spécifique des dossiers concernés</p><p>- Un accès simplifié aux outils de synchronisation manuelle</p>'),(7,1,'Ordre de mission','<p>Permet aux collaborateurs de solliciter la validation pour l’engagement des dépenses à venir.</p><p>Demander l’engagement de missions : dates, durées, type et motif de l’intervention.</p>'),(7,2,'Avances sur frais','<p><span style=\"line-height: 1.42857;\">Gérez facilement les demandes d’avance des collaborateurs.</span></p><p>Saisie des demandes d’avances sur frais par les collaborateurs sur le portail RH.</p><p>Affectation aux catégories comptables des notes de frais.</p><p>Consolidation des demandes sur le tableau de bord des professionnels RH/ Comptabilité.</p><p>Suivi par les collaborateurs, des demandes et des dates de règlement.</p>'),(7,3,'Notes de frais','<p><span style=\"line-height: 1.42857;\">Permet aux collaborateurs de saisir les notes de frais, de suivre l’avancement du traitement. Le système ventile les frais selon la nomenclature comptable de l’entreprise</span><br></p><p>Déclarer des frais via le portail, les soumettre au n+1, validation du n+1.</p><p>Joindre les justificatifs dématérialisés (JPEG, PDF, etc).</p><p>Définir les catégories d’imputation comptables de votre organisation, gérer les barèmes fiscaux et plusieurs devises différentes.</p><p>Suivre le statut d’avancement et date de paiement.</p><p>Consulter le rapport de données contrôle de gestion.</p>'),(8,1,'Plan de recrutement','<p><span style=\"line-height: 1.42857;\">Fiabilisez vos processus de validation des postes grâce à un workflow dématérialisé, vous permettant de construire rapidement votre plan de recrutement.</span></p><p>Rédaction des fiches descriptives des postes à ouvrir</p><p>Sollicitation des intervenants du circuit de validation via un workflow</p><p>Visualisation des postes ouverts validés et des budgets</p><p>Visualisation de l’avancement du plan de recrutement</p>'),(8,2,'Diffusion des offres','<p><span style=\"line-height: 1.42857;\">Publiez vos offres en externe, gagnez du temps et augmentez la visibilité de vos annonces grâce à la multidiffusion !</span><br></p><p>Rédaction et diffusion des annonces vers plusieurs job-boards en un seul clic </p><p>En l’absence de site de recrutement en propre, vous publiez sur un site clé en main, hébergé sur nos serveurs</p><p>Collecte et consolidation des candidatures reçues depuis le portail dans la CV-Thèque</p>'),(8,3,'Gestion des candidatures','<p><span style=\"line-height: 1.42857;\">Gagnez en efficacité sur toute la chaine de recrutement.</span><br></p><p>Analyse automatique des CV des candidats pour identifier des mots clé correspondant au poste</p><p>Etablissement, modification et consultation de la fiche candidat avec une vue par statut</p><p>Recherche des candidats par nom, compétences, domaine ou poste auquel ils sont rattachés</p>'),(8,4,'Mobilité interne','<p><span style=\"line-height: 1.42857;\">Identifiez les meilleurs profils en interne pour les postes ouverts.</span><br></p><p>Consultation de la liste des postes accessibles en mobilité interne</p><p>Publication des annonces sur votre portail interne</p><p>Collecte et consolidation des candidatures reçues depuis le portail dans la CV-Thèque</p><p>Recherche des collaborateurs pouvant évoluer vers des postes ouverts</p>'),(8,5,'Onboarding','<p><span style=\"line-height: 1.42857;\">Mobilisez et coordonnez les différents intervenants pour un accueil optimal des nouveaux collaborateurs.</span><br></p><p>Définition des parcours d’intégration et application d’un parcours type à un collaborateur</p><p>Suivi de la réalisation des actions et relance via le tableau de bord</p><p>Intégration automatique de la fiche candidat au dossier collaborateur et génération automatique du contrat</p><p>Alerte en fin de période d’essai.</p>'),(11,1,'En temps réel pour protéger','&nbsp;Une panoplie de service complémentaires pour réagir immédiatement :<br><p><br></p><p>. Seuil maximum de consommation de données en temps-réel (par pays, groupe ou utilisateur),</p><p>&nbsp;. Blocage sophistiqué par application ou type de contenu,</p><p>. Alerte proactive aux utilisateurs sur atteinte de seuil,</p><p>. Algorithme de compression des données (en mouvement).</p><p> </p>'),(11,2,'Des menaces cachées ','<p>Wandera explore et analyse chaque jour des millions de données issues de l’univers de la mobilité.</p><p> Cette veille constante et pointue permet d’identifier et de comprendre les nouvelles formes de menace afin d’être en mesure d’informer ou d’alerter ses Clients.</p><p>Des problèmes issus de configurations matériel ou OS, des apps qui utilisent ou diffusent des informations, ou encore les menaces issues de surf Internet, choisir un acteur informé et bien outillé, c’est se prémunir de menaces certaines.</p>'),(11,3,'Deux services complémentaires','<p>« View » :</p><p>Wandera View inclut des tableaux de bord prêts à l’emploi et des analyses sophistiquées sur l\'utilisation en temps réel de données mobiles, que ce soit au niveau du parc de l\'entreprise entière, d’un groupe d’utilisateur ou d’un simple utilisateur.</p><p>« Extend » :</p><p>Wandera Extend inclut des fonctions de réduction des coûts à travers de la compression de données et des contrôles granulaires</p>'),(13,1,'Une gestion intégrée','. Une page d’accueil paramétrable propose un résumé des informations importantes auxquelles l’utilisateur peut accéder rapidement.<br>. Une vue permet de visualiser l’ensemble des terminaux du ou des sites sélectionné.<p>. Les utilisateurs sont administrés depuis une interface web de gestion totalement intégré.</p><p><br></p><p><br> </p>'),(13,2,'Gestion des applications installées','<p>A travers l’interface d’Harmonie Gestion, on peut visualiser les applications installées sur un groupe de terminaux enrôlés. Plus important encore, on peut les gérer ; c’est-à-dire voir le numéro de la version installée, en installer de nouvelles ou en supprimer.</p>'),(13,3,'Versions et Patchs','<p>Une fois votre application déployée, il est facile de suivre et d’administrer les versions et les patchs attenants à celle-ci. Des écrans sont accessibles, en fonctions de vos droits, pour en effectuer la maintenance.</p>'),(13,4,'Statistiques','<p>Lors de chaque connexion, un terminal envoie une série d’informations concernant son état (statut, synchronisation, …). Ces informations sont archivées pour pouvoir analyser le comportement d’un terminal ou d’un ensemble de terminaux.</p>'),(13,5,'Lancement de commandes à distance ','<p>Il est possible de lancer des commandes à distance sur un terminal ou sur un groupe de terminaux. Il est également possible de définir des groupes de commandes, et les lancer sur un terminal ou un groupe de terminaux</p>'),(13,6,'Gestion des groupes','<p>Les groupes de terminaux servent à créer des ensembles de terminaux en appliquant les critères de sélection définis par l’utilisateur. L’application de ces critères se fait à chaque visualisation du groupe, ce qui permet d’avoir des groupes dynamiques. Une synthèse donne une vue d’ensemble des terminaux se trouvant dans le groupe.</p><p><br></p>'),(14,1,'En temps réel pour protéger','<p>Une panoplie de service complémentaires pour réagir immédiatement :</p><p>. Seuil maximum de consommation de données en temps-réel (par pays, groupe ou utilisateur),</p><p> . Blocage sophistiqué par application ou type de contenu,</p><p>. Alerte proactive aux utilisateurs sur atteinte de seuil,</p><p>. Algorithme de compression des données (en mouvement)</p><p><br></p>'),(14,2,'Des menaces cachées','<p>Wandera explore et analyse chaque jour des millions de données issues de l’univers de la mobilité.</p><p>Cette veille constante et pointue permet d’identifier et de comprendre les nouvelles formes de menace afin d’être en mesure d’informer ou d’alerter ses Clients.</p><p>Des problèmes issus de configurations matériel ou OS, des apps qui utilisent ou diffusent des informations, ou encore les menaces issues de surf Internet, choisir un acteur informé et bien outillé, c’est se prémunir de menaces certaines.</p><p><br></p>'),(14,3,'Deux services complémentaires','<p>« View » :</p><p>Wandera View inclut des tableaux de bord prêts à l’emploi et des analyses sophistiquées sur l\'utilisation en temps réel de données mobiles, que ce soit au niveau du parc de l\'entreprise entière, d’un groupe d’utilisateur ou d’un simple utilisateur.</p><p>« Extend » :</p><p>Wandera Extend inclut des fonctions de réduction des coûts à travers de la compression de données et des contrôles granulaires</p><p><br></p>'),(15,1,'Riche d\'expériences ...','<p>Depuis 8 ans, Lookout a bâti une infrastructure de sécurité en utilisant une technologie prédictive innovante, basée sur le \"Big Data\" et le \"Machine Learning\". Lookout possède à ce jour le réseau de capteurs mobiles le plus important au monde (100 millions d’appareils équipés) ainsi que la base de menaces mobiles la plus large (dont 23 millions d’applications analysées et classées). Leur infrastructure leur permet d\'analyser chaque jour 70000 nouvelles applications, en les comparant notamment à toutes celles qui sont déjà connues  et ils peuvent ainsi identifier des connexions qui échappent aux technologies traditionnelles à base de signature ou d\'analyse comportementale.</p>'),(15,2,'Une vision globale','<p>Lookout se distingue par sa capacité à protéger les environnements mobiles de façon complète et modulaire, en proposant des solutions à la fois pour les entreprises et pour le grand public. Leur infrastructure de sécurité et leur base de connaissance s’appuient donc sur une vision globale des menaces qui touchent les mobiles, que ce soit un appareil personnel ou d’entreprise et quelque soit son emplacement dans le monde. <br></p><p>Une vue globale garantie par plus de 100 millions de terminaux, 23 millions d\'applis repertoriées, 70000 applications analysées chaque jour.</p>'),(15,3,'Proximité  et complémentarité ...','<p>L\'infrastructure de sécurité Lookout alimente plusieurs produits dédiés à la protection de l’entreprise, avec des fonctionnalités de détection de menaces sur les smartphones et tablettes, la validation d’applications avant leur publication ou encore l’accès à une base d’intelligence pour un suivi complet des menaces mobiles et de leur évolution.</p><p><br></p><p>Une offre adapte a chaque besoin</p><p>.consumer</p><p>.integration avec l\'emm pour l\'entreprise</p><p>.solution pour developpeur et markets</p>'),(16,1,'Mobile Device Management - MDM','<p>La plateforme MobileIron permet aux responsables informatiques de sécuriser et gérer un ensemble varié d\'appareils mobiles, de provisionner automatiquement des paramètres d\'entreprise tels que le Wi-Fi et VPN et de fournir aux utilisateurs un accès sécurisé aux e-mails professionnels. Si un appareil n\'est pas utilisé de manière conforme, le responsable informatique peut définir des actions correctives, telles que la notification à l\'utilisateur des infractions aux règles ou la suppression sélective des informations d\'entreprise sans incidence sur les données personnelles. </p>'),(16,2,'Mobile Application Management - MAM','<p>Cette plateforme MobileIron fournit une solution de bout en bout qui provisionne, déploit, sécurise les applications mobiles. Grâce à ces fonctionnalités, le département informatique peut gérer l\'ensemble du cycle de vie des applications, de leur distribution aux employés via la boutique d\'applications d\'entreprise privée Apps@Work à leur sécurisation sur l\'appareil, en passant par la conteneurisation différenciée des applications d\'entreprise et des applications personnelles à l\'aide de MobileIron AppConnect.</p>'),(16,3,'Mobile Content Management - MCM','<p>Grâce à la solution intégrée de MobileIron, les départements informatiques peuvent garantir aux utilisateurs une consultation et une gestion sécurisée des documents d\'entreprise résidant dans divers référentiels de contenu tels que Sharepoint, WebDav et CIFS. La solution MobileIron garantit également le chiffrement des pièces jointes aux e-mails et leur affichage à l\'aide d\'applications autorisées dont MobileIron Docs@Work ou les suites Office. De plus, les utilisateurs finaux peuvent parcourir de manière sécurisée le contenu de l\'intranet de l\'entreprise sans recourir à un VPN étendu à tout l\'appareil.</p>'),(17,1,'Demandes de congés','<p><span style=\"line-height: 1.42857;\">Dématérialisez les demandes et validation des congés afin d’éviter les doubles saisies, fiabiliser les comptages et faire gagner du temps aux professionnels RH</span><br></p><p>Gestion de tous les types d’absences.</p><p>Paramétrage du circuit de validation avec possibilité de déléguer des droits managers, de façon permanente ou temporaire.</p><p>La fonctionnalité est accessible dans le portail RH.</p>'),(17,2,'Gestion des compteurs','<p><span style=\"line-height: 1.42857;\">Les compteurs s’incrémentent automatiquement et s’affichent pour consultation  par les collaborateurs.</span><br></p><p>Intégration des jours fériés par pays.</p><p>Consultation des compteurs : par collaborateur, par équipe, au global.</p><p>Possibilité d’import/ export excel et csv.</p><p>Intégration avec votre moteur de paie.</p>'),(17,3,'Planning des présences & absences','<p><span style=\"line-height: 1.42857;\">Validez les congés des collaborateurs sans entraver la bonne marche du service : les managers visualisent en un seul coup d’œil le planning de l’équipe.</span><br></p><p>Consultation du planning hebdomadaire individuel, et par équipe (visualisation N-1 et N-2).</p><p>Intégration des inscriptions aux formations.</p>'),(18,1,'Information collaborateur','<p><span style=\"line-height: 1.42857;\">La fonction «&nbsp;information collaborateur&nbsp;» vous garantit un accès permanent aux informations essentielles, historisées et archivées.</span><br></p><p>Constitution du référentiel d’informations le plus complet possible pour les collaborateurs.</p><p>Plus de 200 champs paramétrables sont à votre disposition.</p><p>Rattachement par pays et par entité organisationnelle.</p><p>Possibilité pour le collaborateur de modifier lui-même ses informations via le portail RH.</p>'),(18,2,'Générateur de contrats & avenants','<p><span style=\"line-height: 1.42857;\">Dématérialiser et archiver en un point central tous les documents contractuels, pour gagner de la place et trouver facilement toutes les pièces pour chaque collaborateur</span><br></p><p>Accès à un espace de stockage pour l’ensemble des documents scannés, associés à un dossier collaborateur. par simple chargement depuis vos répertoires.</p><p>Définition des modèles de contrats-types et d’avenants par groupe de collaborateurs.</p><p>Génération des contrats et avenants à partir des modèles et en intégrant les données personnalisées de chaque collaborateur.</p>'),(18,3,'Salaire & historique de carrière','<p><span style=\"line-height: 1.42857;\">Vous conservez la trace de tous les événements de la carrière d’un collaborateur: fonction, rémunération, rattachement hiérarchiques…</span><br></p><p>Accès aux dates d’entrée, de sortie, changement de postes, rattachement hiérarchique et RH, localisation.</p><p>Consultation des évolutions de la rémunération (fixe, variable, primes…), en lien avec votre moteur de paie.</p>'),(18,4,'Gestion des avantages société','<p><span style=\"line-height: 1.42857;\">Vous gérez l’allocation des tickets restaurant et la fourniture de matériels professionnels aux collaborateurs</span><br></p><p>Référencer les matériels et véhicule remis au collaborateur.</p><p>Recevoir des alertes automatiques en parcours d’intégration, destinées aux services concernés pour fluidifier la remise et sécuriser la restitution des matériels, en connexion avec la fonction on-boarding.</p><p>Calculer les contributions aux titres restaurants et rapport de données associées.</p>'),(18,5,'Alertes RH','<p><span style=\"line-height: 1.42857;\">Grâce aux alertes automatiques vous améliorez la conformité de vos processus de visites médicales, de fin de période d’essai et de fin de contrat.</span><br></p><p>Recevoir des alertes automatiques RH, manager et collaborateur.</p><p>Consulter le rapport de données : dates des visites médicales, fin de période d’essai et de contrat.</p>'),(20,1,'Créer un questionnaire ','<p><span style=\"line-height: 1.42857;\">En quelques clics, vous rédigez un questionnaire correspondant à un poste sur lequel vous avez des besoins de recrutement et vous invitez par email les candidats ayant répondu à votre annonce pour y répondre.</span><br></p><p>Adéquation pour le poste, motivation, disponibilité...tous les sujets que vous abordez habituellement dans la présélection se retrouvent sur votre questionnaire. Vous pouvez même aller plus loin dans l\'évaluation des compétences avec des questions techniques ou des mises en situation !</p>'),(20,2,'Répondre en vidéo','<p><span style=\"line-height: 1.42857;\">Grâce à leur webcam et micro, les candidats se connectent sur l\'interface sécurisée d\'easyRECrue et répondent en vidéo aux questions que vous leur avez préparées, en respectant un temps imparti pour lire la question et y répondre.</span><br></p>'),(20,3,'Visionner','<p><span style=\"line-height: 1.42857;\">Il ne vous reste plus qu\'à visionner l\'ensemble des entretiens réalisés lorsque vous le souhaitez et autant de fois que vous le voulez !</span><br></p>'),(20,4,'Partager','<p><span style=\"line-height: 1.42857;\">Grâce à notre plateforme collaborative, les différents membres de votre équipe impliqués dans le processus de recrutement peuvent avoir accès aux vidéos et les commenter !</span><br></p><p>Plusieurs critères sont proposés pour analyser les candidatures et permettent à vos équipes d\'évaluer au mieux les candidats ayant répondu au questionnaire.</p>'),(21,1,'Plan de rémunération','<p><span style=\"line-height: 1.42857;\">La fonction «&nbsp;plan de rémunération&nbsp;» vous permet de définir et partager les éléments de cadrage budgétaire avec les managers</span><br></p><p>Renseigner les taux minimum d’augmentation définis, ainsi que l’enveloppe budgétaire maximale.</p><p>Dispatcher automatiquement les montants disponibles aux managers.</p><p>Initier une campagne auprès des managers pour collecter les demandes d’augmentation pour leur équipe, en s’appuyant sur un circuit de validation.</p>'),(21,2,'Augmentations individuelles & collectives','<p>Gagnez du temps grâce à un workflow qui consolide vos demandes dans un cadre budgétaire défini.</p><p>Permet aux managers de : </p><p>. visualiser par équipe les éléments de rémunération et leurs historiques, </p><p>. simuler les augmentations, saisir des commentaires,</p><p>. envoyer les éléments pour validation.</p><p>Permet aux professionnels RH de suivre l’avancement de la campagne par manager et par direction, consolider et valider les demandes d’augmentation.</p>'),(21,3,'Suivi des rémunérations','<p><span style=\"line-height: 1.42857;\">Mesurez en quelques clics le poids de chaque élément de rémunération et leur évolution grâce au rapport de données de la fonction «&nbsp;suivi des rémunérations&nbsp;».</span><br></p><p>Consultation du survol des salaires.</p><p>Consultation par collaborateur du statut et de l’historique ventilé par type de rémunération contractuelle et en intégrant la rémunération versée.</p><p>Consultation du rapport de données «&nbsp;masse salariale&nbsp;».</p>'),(22,1,'Plan annuel de formation & suivi budgétaire','<p><span style=\"line-height: 1.42857;\">Constituez votre plan de formation en quelques clics, grâce au croisement et à l’analyse automatique de données.</span><br></p><p>Collecter les demandes individuelles par workflow de validation.</p><p>Consolider automatiquement les demandes validées issues des entretiens, les demandes individuelles et les demandes RH.</p><p>Générer automatiquement le plan de formation individuel à partir de l’entretien réalisé par le manager qui le soumet aux RH.</p><p>Consultez le plan par collaborateur.</p><p>Projeter les coûts complets.</p><p>Suivre les coûts effectifs avec ventilation comptable.</p>'),(22,2,'Catalogue des formations','<p><span style=\"line-height: 1.42857;\">Le référentiel inventorie l’ensemble des formations, organismes et sessions de formation.</span><br></p><p>Opérer plusieurs catalogues et sous catalogues selon les populations.</p><p>Publier le catalogue auprès des collaborateurs et/ou managers.</p><p>Renseigner toutes les informations relatives aux formations (types de formation, formateur, organisme de formation, sessions, compétences associées et niveau de compétence acquis théoriques).</p>'),(22,3,'Gestion & administration des formations','<p><span style=\"line-height: 1.42857;\">Déployez rapidement vos formations, de l’inscription à l’évaluation.</span><br></p><p>Affecter les sessions aux collaborateurs, de manière unitaire ou massive.</p><p>Inscrire les stagiaires, générer des convocations et invitations calendrier automatiques, suivre les inscriptions et présences, envoyer les attestations.</p><p>Générer et publier dans l’espace personnel du collaborateur des formulaires d’évaluation à chaud / à froid, consulter les résultats.</p><p>Rapport CE/IRP, intégration automatique au bilan social.</p>'),(22,4,'E-Learning','<p><span style=\"line-height: 1.42857;\">One Aragon est compatible avec le standard SCORM : vos contenus e-learning alimentent le portail RH et les rapports de données.</span><br></p><p>Intégrer les contenus e-learning selon le standard SCORM pour une utilisation directe dans le portail RH.</p><p>Génération de données d’usage par collaborateur.</p>'),(23,1,'Organigrammes','<p><span style=\"line-height: 1.42857;\">Gagnez du temps dans la création, la mise à jour et la publication de vos organigrammes hiérarchiques et fonctionnels.</span></p><p>Structurez les organigrammes hiérarchiques, avec un nombre de niveau illimité.</p><p>Structurez les organigrammes fonctionnels, basé sur les postes.</p><p>Modifiez les rattachements (rattachement automatique d’un collaborateur par niveau).</p><p>Naviguez simplement par niveau (établissement, division, service, pôle, niveau).</p><p>Choisissez l’orientation de la mise en page (horizontale/ verticale).</p><p>Accédez directement au dossier collaborateur via l’organigramme.</p>'),(23,2,'Gestion des postes','<p><span style=\"line-height: 1.42857;\">Structurez votre organisation autour des postes et identifiez facilement les postes vacants pour chaque entité ou type de poste.</span><br></p><p>Gestion des postes : rattachement des collaborateurs à un ou plusieurs postes, définition des pourcentages ETP par poste, budget, date d’ouverture et de fermeture, entité de rattachement.</p><p>Connaissance des postes vacants : liste des postes sans collaborateur par entité.</p>'),(23,3,'Suivi des effectifs & masse salariale','<p><span style=\"line-height: 1.42857;\">Suivez à tout moment l’évolution de vos effectifs et de la masse salariale. Vous identifiez facilement les écarts par rapport au budget pour chaque entité ou type de poste.</span><br></p><p>Définition des budgets : renseigner les ETP budgétés par entité et par poste.</p><p>Consultation de la synthèse organisationnelle : suivi par entité des budgets et du réalisé en postes et ETP.</p>'),(24,1,'Entretien & évaluations','<p><span style=\"line-height: 1.42857;\">Améliorez l’application des bonnes pratiques RH par les collaborateurs et les managers.</span><br></p><p>Dématérialiser les documentations et workflows de validation.</p><p>Administrer les modèles d’entretiens.</p><p>Lancer et suivre l’avancement de la campagne d’entretiens.</p><p>Accéder aux résultats par collaborateur.</p><p>Consultez les données historisées et sauvegardées.</p>'),(24,2,'Comité carrières & plan de succession','<p><span style=\"line-height: 1.42857;\">Gagnez du temps dans l’identification des potentiels et des mesures de rétention à déployer.</span><br></p><p>Consolider au sein d’un dossier carrière pour chaque collaborateur les informations collectées de manière automatiques et les informations spécifiques.</p><p>Consulter de manière visuelle les informations synthétiques et détaillées pour chaque collaborateur.</p><p>Projeter et visualiser sur l’organigramme les postes vacants et successeurs potentiels.</p>'),(24,3,'Référentiel & profil de compétences','<p><span style=\"line-height: 1.42857;\">Définissez pour chaque filière, les métiers et emplois, les compétences et le niveau requis. Vous créez le référentiel qui alimente vos plans de formation, vos plans de succession et entretiens.</span><br></p><p>Définir le référentiel des filières, métiers et emplois :missions et activités associées, classification de la convention collective, fourchette de rémunération, formation et expérience et les «&nbsp;passerelles de mobilité&nbsp;».</p><p>Définir le référentiel des compétences par domaine, définir les profils de compétence par métier/emploi.</p><p>Gérer les mises à jours du référentiel sans impacter l’historique.</p><p>Utilisation du référentiel dans les entreprises, les plans de succession et les plans de formation.</p>'),(24,4,'To do list','<p><span style=\"line-height: 1.42857;\">Suivez l’avancé d’une liste d’actions à mener, rattachée à un collaborateur ou à un projet.</span><br></p><p>Ce module est également utilisable pour le suivi des objectifs individuels.</p><p>Liste des actions à réaliser, avec une indication sur l’état d’avancement de ces mêmes actions et leur degré de faisabilité.</p><p>Graphe affichant le calcul de l’accomplissement&nbsp; (temps estimé de l’action 1, temps estimé de la période, pourcentage d’achèvement de l’action).</p><p>Suivi par le manager qui accède à sa propre liste des actions en plus de celle des membres de son équipe avec un graphe de progression qui affiche l’avancement globale de l’équipe&nbsp;.Toute action non réalisée sur sa période sera automatiquement reportée sur la période suivante en tant qu’action prioritaire. </p><p>Les actions reportées sont «&nbsp;flaguées&nbsp;».</p>'),(25,1,'Définition des scenarii de conjonctures','<p><span style=\"line-height: 1.42857;\">Préparez vos simulations organisationnelles selon différents niveaux d’activité, pour des résultats immédiatement opérationnels selon la conjoncture choisie.</span><br></p><p>Vous disposez de  scenarii de conjoncture : haute, moyenne et basse.</p><p>Vous saisissez pour chaque collaborateur, poste et ETP de la répartition théorique de leurs activités.</p>'),(25,2,'Optimisation des ressources','<p><span style=\"line-height: 1.42857;\">Projetez votre situation organisationnelle selon le scenario retenu et visualisez l’impact sur vos effectifs : départ en retraite, besoins non couverts … Ainsi, vous pourrez prendre les bonnes décisions au regard des données simulées.</span><br></p><p>Simulation de l’organisation selon le scenario : mise en évidence des postes vacants, sur ou sous-effectifs.</p><p>Demandes de transfert depuis les organigrammes, avec circuit de validation.</p><p>Demandes de planification opérationnelle pour mettre en œuvre les actions, avec circuit de validation.</p>'),(26,1,'Déclaration des temps','<p><span style=\"line-height: 1.42857;\">Assurez un contrôle automatique via un pré-remplissage selon le rythme de travail pour améliorer la conformité et alléger la saisie des collaborateurs.</span><br></p><p>Définition des rythmes de travail par population de collaborateurs, dans le dossier collaborateur.</p><p>Saisie des feuilles de temps dans le portail RH collaborateur, en sélectionnant les catégories adaptées.</p><p>Imputations en heures ou en jour.</p><p>Vous bénéficiez d’un pré-remplissage pour les jours d’absences et de formations.</p><p>Les feuilles de temps sont validées ou modifiées via un circuit de validation paramétrable.</p>'),(26,2,'Ventilation par projet/activité','<p><span style=\"line-height: 1.42857;\">Les profils «&nbsp;contrôle de gestion&nbsp;» ou manager opérationnel pourront structurer les feuilles de temps avec les informations pertinentes et ainsi analyser les rapports de données associés.</span><br></p><p>Définition des catégories comptables ou projet : projet, client, mission, nature d’activité.</p><p>Consultation des rapports de données par collaborateur.</p><p>Exportation des données pour une analyse détaillée.</p>'),(26,3,'Badgeuse virtuelle','<p><span style=\"line-height: 1.42857;\">Affranchissez vous des déclarations de temps grâce à la badgeuse virtuelle. La feuille de temps se remplit automatiquement et fait ainsi gagner du temps aux collaborateurs et managers.</span><br></p><p>Badger via le portail RH.</p><p>Récupérer automatiquement les informations en temps réel ou en fin de mois pour remplir la feuille de temps.</p><p>Faire valider ou modifier via circuit de validation.</p>'),(26,4,'Optimisation des ressources','<p><span style=\"line-height: 1.42857;\">Les profils «&nbsp;contrôle de gestion&nbsp;» ou manager opérationnel pourront structurer les feuilles de temps avec les informations pertinentes et ainsi analyser les rapports de données.</span><br></p><p>Définition des catégories comptables ou projet.</p><p>Consultation des rapports de données par collaborateur.</p><p>Exportation de données pour une analyse détaillée.</p>'),(27,1,'Communication RH','<p><span style=\"line-height: 1.42857;\">Animez et fédérez vos collaborateurs autour de temps forts de la vie de l’entreprise en publiant des articles et documents ainsi que l’annuaire de l’entreprise.</span><br></p><p>Publiez des articles d’actualité sur le portail RH : éditeur de texte, définition des populations destinataires et du calendrier de diffusion.</p><p>Annuaire : depuis le portail RH web et mobile, recherche par nom et entités organisationnelles, accès à la fiche collaborateur en mode pop-up.</p>'),(27,2,'Sondage','<p><span style=\"line-height: 1.42857;\">Créez du lien entre collaborateurs et récoltez des informations sur des sujets clés pour votre organisation. Vous suivez l’avancement des résultats en temps réel.</span><br></p><p>Création de formulaires.</p><p>Gestion des dates de publication sur le portail RH.</p><p>Gestion des listes de diffusion.</p><p>Consolidation et consultation des résultats en temps réel.</p>'),(27,3,'BDU, BSI','<p><span style=\"line-height: 1.42857;\">Vous rassemblez les informations relatives aux grandes orientations économiques et sociales de l’entreprise et de les partager avec les représentants du personnel.</span><br></p><p>Base de donnée unique (BDU) :</p><p>. Espace de publication de fichiers structuré par répertoire, gestion des dates de publication,</p><p>. Gestion des droits spécifiques d’accès,</p><p>. Possibilité d’établir un rapport de données spécifique.</p><p>Bilan social individuel (BSI) :</p><p>Editer et publier dans l’espace collaborateur.</p>'),(27,4,'Réseau social d’entreprise','<p><span style=\"line-height: 1.42857;\">La fonction RSE vous ouvre un accès à des fils de discussions organisés autour de thématiques prédéfinies permettant des interactions entre collaborateurs.</span><br></p><p>Fils de discussion thématiques.</p><p>Intégration automatique des compétences.</p>'),(29,1,'Optimisation des affectations','<p><span style=\"line-height: 1.42857;\">Affectez rapidement les ressources disponibles les plus adaptées aux projets et missions.</span><br></p><p>Notre algorithme croise les données (caractéristiques des projets, les tâches à accomplir, les profils et disponibilités des collaborateurs) pour une identification des ressources et compétences au meilleur coût.</p><p>Une définition des besoins projet, les métiers et moyens associés, association des collaborateurs à un ou plusieurs métiers (paramétrage de la mission, définition des tâches à accomplir, qualification des postes nécessaires à la mission/ projet, association des collaborateurs aux postes et compétences.</p><p>Génération automatique d’une liste d’affectation optimisée et affectation manuelle d’une ressource à un projet :</p><p>. Consolider automatiquement les besoins (par date, mission, profils de compétence, site…).</p><p>. Consulter les propositions automatiques parmi les collaborateurs disponibles.</p><p>. Visualiser l’historique collaborateur, solliciter directement une demande d’absence.</p><p>Génération automatique des contrats et notification par SMS via le portail RH.</p>'),(29,2,'Planning d’activités','<p><span style=\"line-height: 1.42857;\">Les managers opérationnels perçoivent immédiatement le niveau des affectations et peuvent intervenir sur la planification directement depuis le planning, pour une réactivité et une souplesse maximale.</span><br></p><p>Génération du planning d’activité en ligne et exportation au format PDF.</p><p>Consultation, modification et partage du planning d’activités sur le portail RH.</p><p>Visualisation grâce au code couleur du niveau d’affectation d’une mission.</p><p>Affectation des collaborateurs sur un besoin non affecté / désaffectation manuelle d’un collaborateur.</p><p>Déclaration d’un nouveau besoin et obtention d’une affectation collaborateur.</p>'),(29,3,'Suivi opérationnel des plannings d’activités','<p><span style=\"line-height: 1.42857;\">Garantissez la conformité réglementaire et administrative des affectations. One Aragon prend en charge la mise en œuvre effective des compteurs sociaux.</span><br></p><p>Alimentation automatique des feuilles de temps à partir du planning d’activité.</p><p>Consultation des feuilles de temps.</p><p>Ajout d’informations dans les feuilles de temps.</p><p>Consultation des rapports de données.</p>');
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
INSERT INTO `product_keyword` VALUES (6,2),(11,2),(13,2),(14,2),(15,2),(16,2),(6,4),(13,4),(16,7),(5,11),(6,11),(11,11),(14,11),(8,20),(20,20),(21,20),(8,21),(18,21),(20,21),(22,21),(24,21),(7,24),(7,28),(8,28),(17,28),(18,28),(20,28),(21,28),(22,28),(23,28),(24,28),(29,28),(17,34),(17,38),(18,38),(21,38),(22,38),(23,38),(24,38),(25,38),(26,38),(27,38),(29,38);
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_link`
--

LOCK TABLES `product_link` WRITE;
/*!40000 ALTER TABLE `product_link` DISABLE KEYS */;
INSERT INTO `product_link` VALUES (1,7,'REGULAR_LINK','contact@aragon-erh.com','/public/images/customUrls/map-marker.png'),(2,8,'REGULAR_LINK','contact@aragon-erh.com','/public/images/customUrls/map-marker.png'),(5,14,'REGULAR_LINK','https://itunes.apple.com/fr/app/wandera/id605469330?mt=8','/public/images/customUrls/map-marker.png'),(8,18,'REGULAR_LINK','contact@aragon-erh.com','/public/images/customUrls/map-marker.png'),(9,17,'REGULAR_LINK','contact@aragon-erh.com','/public/images/customUrls/map-marker.png'),(10,21,'REGULAR_LINK','contact@aragon-erh.com','/public/images/customUrls/map-marker.png'),(11,22,'REGULAR_LINK','contact@aragon-erh.com','/public/images/customUrls/map-marker.png'),(12,23,'REGULAR_LINK','contact@aragon-erh.com','/public/images/customUrls/map-marker.png'),(13,24,'REGULAR_LINK','contact@aragon-erh.com','/public/images/customUrls/map-marker.png'),(14,25,'REGULAR_LINK','contact@aragon-erh.com','/public/images/customUrls/map-marker.png'),(15,26,'REGULAR_LINK','contact@aragon-erh.com','/public/images/customUrls/map-marker.png'),(16,29,'REGULAR_LINK','contact@aragon-erh.com','/public/images/customUrls/map-marker.png');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_timeline_step_executors`
--

LOCK TABLES `product_timeline_step_executors` WRITE;
/*!40000 ALTER TABLE `product_timeline_step_executors` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource`
--

LOCK TABLES `resource` WRITE;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
INSERT INTO `resource` VALUES (10,5,'image/png','10.png',NULL,NULL,'composants en action.png',NULL,'composants en action'),(11,5,'image/png','11.png',NULL,NULL,'xml.png',NULL,'xml'),(12,5,'image/png','12.png',1,NULL,'Exemples d\'écran.png',NULL,'Exemples d\'écran'),(13,6,'application/force-download','13.pdf',NULL,NULL,'Harmonie Fichiers.pdf',NULL,'Harmonie Fichiers.pdf'),(14,6,'image/png','14.png',2,NULL,'Interface gestionnaire.png',NULL,'Interface gestionnaire'),(15,6,'image/png','15.png',NULL,NULL,'interface gestionnaire 2.png',NULL,'interface gestionnaire '),(16,6,'image/png','16.png',1,NULL,'schéma de principe.png',NULL,'schéma de principe'),(17,6,'image/png','17.png',NULL,NULL,'Harmonie.png',NULL,'Harmonie'),(20,5,'image/png','20.png',NULL,NULL,'Harmonie.png',NULL,'Rayonnance'),(29,7,'image/png','29.png',NULL,NULL,'carre-saas.png',NULL,'ARAGON'),(31,8,'image/png','31.png',NULL,NULL,'carre-saas.png',NULL,'ARAGON'),(32,11,'image/jpeg','32.jpg',NULL,NULL,'wandera.jpg',NULL,'wandera.jpg'),(35,11,'image/png','35.png',1,NULL,'extend6.png',NULL,'multi device'),(36,11,'application/force-download','36.pdf',NULL,NULL,'Wandera_Datasheet.pdf',NULL,'Wandera_Datasheet.pdf'),(40,11,'image/png','40.png',NULL,NULL,'Capture d’écran 2016-04-06 à 17.56.30.png',NULL,'Panneau de suervision'),(45,13,'image/png','45.png',NULL,NULL,'Vue détaillée.png',NULL,'Vue détaillée.png'),(46,13,'image/png','46.png',NULL,NULL,'Filtres et Tris.png',NULL,'Filtres et Tris.png'),(48,13,'image/png','48.png',3,NULL,'Gestion du compte utilisateur.png',NULL,'Gestion du compte utilisateur.png'),(49,13,'image/png','49.png',1,NULL,'page d\'accueil.png',NULL,'page d\'accueil.png'),(50,13,'image/png','50.png',NULL,NULL,'administration des terminaux mobiles.png',NULL,'administration des terminaux mobiles.png'),(51,13,'image/png','51.png',NULL,NULL,'Synoptique.png',NULL,'Synoptique.png'),(52,13,'image/png','52.png',NULL,NULL,'Vue Groupe.png',NULL,'Vue Groupe.png'),(53,13,'image/png','53.png',2,NULL,'Statistiques.png',NULL,'Statistiques.png'),(54,13,'image/png','54.png',NULL,NULL,'Harmonie Gestion.png',NULL,'Harmonie Gestion.png'),(55,13,'image/png','55.png',NULL,NULL,'Harmonie.png',NULL,'Harmonie.png'),(56,6,'image/png','56.png',NULL,NULL,'Capture d’écran 2016-04-07 à 10.38.45.png',NULL,'Harmonie'),(57,5,'image/png','57.png',NULL,NULL,'Capture d’écran 2016-04-07 à 10.40.11.png',NULL,'Harmonie'),(58,14,'image/svg+xml','58.svg',NULL,NULL,'Wandera.svg',NULL,'Wandera'),(59,14,'application/force-download','59.pdf',NULL,NULL,'Wandera_Datasheet.pdf',NULL,'Wandera_Datasheet.pdf'),(60,14,'image/png','60.png',1,NULL,'extend6.png',NULL,'multi devices'),(61,14,'image/png','61.png',2,NULL,'Capture d’écran 2016-04-06 à 17.56.30.png',NULL,'Panneau de Spervision'),(62,15,'image/png','62.png',1,NULL,'Malware rate.png',NULL,'Malware rate.png'),(63,15,'image/png','63.png',2,NULL,'Lack of policy or protections.png',NULL,'Lack of policy or protections.png'),(64,15,'image/png','64.png',3,NULL,'Financial risk.png',NULL,'Financial risk.png'),(65,15,'image/png','65.png',NULL,NULL,'LKlogo_horz_RGB.png',NULL,'LKlogo_horz_RGB.png'),(66,15,'image/png','66.png',NULL,NULL,'LKlogo_vert_rvs_RGB (1).png',NULL,'LKlogo_vert_rvs_RGB (1).png'),(68,15,'application/force-download','68.pdf',NULL,NULL,'Mobile Threat Protection Datasheet (US).pdf',NULL,'Mobile Threat Protection Datasheet (US).pdf'),(69,18,'image/png','69.png',NULL,NULL,'carre-saas.png',NULL,'ARAGON.png'),(70,17,'image/png','70.png',NULL,NULL,'carre-saas.png',NULL,'ARAGON'),(71,17,'image/png','71.png',NULL,NULL,'Aragon-eRH.png',NULL,'Aragon-eRH.png'),(72,18,'image/png','72.png',NULL,NULL,'Aragon-eRH.png',NULL,'Aragon-eRH.png'),(73,8,'image/png','73.png',NULL,NULL,'Aragon-eRH.png',NULL,'Aragon-eRH.png'),(74,7,'image/png','74.png',NULL,NULL,'Aragon-eRH.png',NULL,'Aragon-eRH.png'),(75,5,'image/png','75.png',NULL,NULL,'Rayonnance.png',NULL,'Rayonnance.png'),(76,6,'image/png','76.png',NULL,NULL,'Rayonnance.png',NULL,'Rayonnance.png'),(78,18,'image/jpeg','78.jpg',1,NULL,'DOSSIER COLLABORATEUR.jpg',NULL,'DOSSIER COLLABORATEUR.jpg'),(79,17,'image/jpeg','79.jpg',1,NULL,'DEMANDE DE CONGES.jpg',NULL,'DEMANDE DE CONGES.jpg'),(80,8,'image/jpeg','80.jpg',1,NULL,'RECRUTEMENT.jpg',NULL,'RECRUTEMENT.jpg'),(81,7,'image/jpeg','81.jpg',1,NULL,'NOTE DE FRAIS.jpg',NULL,'NOTE DE FRAIS.jpg'),(83,16,'image/png','83.png',NULL,NULL,'mi cloud app.png',NULL,'mi cloud app.png'),(84,16,'image/png','84.png',NULL,NULL,'mi cloud attribut.png',NULL,'mi cloud attribut.png'),(85,16,'image/png','85.png',NULL,NULL,'MobileIron.png',NULL,'MobileIron.png'),(86,16,'image/png','86.png',NULL,NULL,'mi cloud action.png',NULL,'mi cloud action.png'),(87,16,'image/jpeg','87.jpg',1,NULL,'58.jpg',NULL,'Mobilité'),(88,16,'application/force-download','88.pdf',NULL,NULL,'59.pdf',NULL,'Data Sheet'),(89,16,'application/force-download','89.pdf',NULL,NULL,'60.pdf',NULL,'MobileIron'),(90,20,'image/jpeg','90.jpg',1,NULL,'Sample-easyrecrue.jpg',NULL,'Sample-easyRECrue.jpg'),(91,20,'image/jpeg','91.jpeg',NULL,NULL,'the crew Easyrecrue.jpeg',NULL,'Crew easyRECrue.jpeg'),(92,5,'image/png','92.png',NULL,NULL,'carrés jaune.png',NULL,'carrés jaune.png'),(94,6,'image/png','94.png',NULL,NULL,'carrés jaune.png',NULL,'carrés jaune.png'),(96,20,'image/png','96.png',NULL,NULL,'easyrecrue.png',NULL,'Liste-sample-easyRECrue.jpg'),(97,13,'image/png','97.png',NULL,NULL,'carrés jaune.png',NULL,'carrés jaune.png'),(98,16,'image/png','98.png',NULL,NULL,'MobileIron-logo-stacked.png',NULL,'MobileIron-logo-stacked.png'),(99,20,'image/png','99.png',NULL,NULL,'easyRECrue_logo.png',NULL,'easyRECrue.png'),(100,21,'image/png','100.png',NULL,NULL,'carre-saas.png',NULL,'ARAGON.png'),(101,21,'image/png','101.png',NULL,NULL,'Aragon-eRH.png',NULL,'Aragon-eRH.png'),(102,22,'image/png','102.png',NULL,NULL,'carre-saas.png',NULL,'ARAGON.png'),(103,22,'image/png','103.png',NULL,NULL,'Aragon-eRH.png',NULL,'Aragon-eRH.png'),(104,23,'image/png','104.png',NULL,NULL,'carre-saas.png',NULL,'ARAGON.png'),(105,23,'image/png','105.png',NULL,NULL,'Aragon-eRH.png',NULL,'Aragon-eRH.png'),(106,24,'image/png','106.png',NULL,NULL,'carre-saas.png',NULL,'ARAGON.png'),(107,24,'image/png','107.png',NULL,NULL,'Aragon-eRH.png',NULL,'Aragon-eRH.png'),(108,25,'image/png','108.png',NULL,NULL,'carre-saas.png',NULL,'ARAGON.png'),(109,25,'image/png','109.png',NULL,NULL,'Aragon-eRH.png',NULL,'Aragon-eRH.png'),(110,26,'image/png','110.png',NULL,NULL,'carre-saas.png',NULL,'ARAGON.png'),(111,26,'image/png','111.png',NULL,NULL,'Aragon-eRH.png',NULL,'Aragon-eRH.png'),(112,27,'image/png','112.png',NULL,NULL,'carre-saas.png',NULL,'ARAGON.png'),(113,27,'image/png','113.png',NULL,NULL,'Aragon-eRH.png',NULL,'Aragon-eRH.png'),(114,29,'image/png','114.png',NULL,NULL,'carre-saas.png',NULL,'ARAGON.png'),(115,29,'image/png','115.png',NULL,NULL,'Aragon-eRH.png',NULL,'Aragon-eRH.png');
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (3,'admin'),(4,'author'),(1,'customer'),(2,'editor'),(7,'fleet manager'),(6,'Michele');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline`
--

LOCK TABLES `timeline` WRITE;
/*!40000 ALTER TABLE `timeline` DISABLE KEYS */;
INSERT INTO `timeline` VALUES (1,'line','assignment-order'),(2,'device','assignment-order'),(3,'sav_vol_and_perte','follow-up'),(4,'sav_casse','follow-up'),(5,'line_suspension','follow-up'),(6,'sim_card','follow-up'),(7,'chgt_options','follow-up');
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
  KEY `id_timeline` (`id_timeline`),
  CONSTRAINT `timeline_steps_ibfk_1` FOREIGN KEY (`id_timeline`) REFERENCES `timeline` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline_steps`
--

LOCK TABLES `timeline_steps` WRITE;
/*!40000 ALTER TABLE `timeline_steps` DISABLE KEYS */;
INSERT INTO `timeline_steps` VALUES (1,'tl_step_bdc_sent',0,1,1),(2,'tl_step_released_sim_to_user',1,2,1),(3,'tl_step_activated_line',1,3,1),(4,'tl_step_fleet_updated_line_1',1,4,1),(5,'tl_step_bdc_envoye',0,1,2),(6,'tl_step_fleet_updated_device_1',0,2,2),(7,'tl_step_order_received',1,3,2),(8,'tl_step_fleet_updated_device_2',1,4,2),(9,'tl_step_intregation_request',1,5,2),(10,'tl_step_integration_achieved',1,6,2),(11,'tl_step_released_terminal_to_user',1,7,2),(12,'tl_step_user_confirms_reception',1,8,2),(13,'device_wiping',0,1,3),(14,'line_suspension',1,1,3),(15,'device_preparation',1,1,3),(16,'device_delivery',1,1,3),(17,'device_diagnostic',1,2,4),(18,'device_repair',1,2,4),(19,'device_delivery',1,2,4),(20,'request_in_progress',1,3,5),(21,'line_suspended',1,3,5),(22,'request_in_progress',1,4,7),(23,'new_options_active',1,4,7),(24,'sim_code_created',1,5,6),(25,'sim_received',1,5,6),(26,'sim_activated',1,5,6);
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
  CONSTRAINT `fk_user_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'bob@intuiteev.io','ab266fcf5ce45fe51f8b770bec3d2631f20e019eb81e8a9d6c09688ded42b099',1459294190156,'Bob','Bob','','local',NULL,'F',2,'','',NULL,NULL,NULL),(2,'dede@intuiteev.io','c0d36ffae5749313da9553cec19f3cb98b2ea9bf3f4e92dcfe071c4d72a2ae29',1459294190156,'Dede','Dede','','local',NULL,'F',3,'','',NULL,NULL,NULL),(3,'mspi_dd@intuiteev.io','892dd1cac402f56ba442ed5b6aaf80f3f4cee2caf6899e3a442f9df97cc30450',1459941004069,'Mississippi','Digital','Mississippi','local',1459941004069,'M',2,'','',NULL,NULL,NULL),(4,'mspi_partenaires@intuiteev.io','541b69eda6390445ab050031831413ca727d3d4ccb3daf67ee297c18123516bd',1459941783156,'Partenaires','MSPI-Partenaire','Digital Dimension','local',1459941783156,'M',2,'','',NULL,NULL,NULL);
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
  CONSTRAINT `fk_user_validated` FOREIGN KEY (`validated_by`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
INSERT INTO `user_profile` VALUES (1,'Bob Corner','Bob-Corner-1',NULL,NULL,NULL,NULL,1,1),(2,'Dede','Dede-2','Lorem Ipsum',NULL,NULL,2,1,4),(3,'Digital Dimension','Digital-Dimension-3',NULL,1459952125895,'logo-3.jpg',2,1,2),(4,'Partenaires','Partenaires-4',NULL,1459952237068,'logo-4.png',2,1,3);
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

-- Dump completed on 2016-12-13 17:05:48
-- MySQL dump 10.13  Distrib 5.7.13, for linux-glibc2.5 (x86_64)
--
-- Host: 0.0.0.0    Database: marketplace_apple
-- ------------------------------------------------------
-- Server version	5.7.16

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
INSERT INTO `SequelizeMeta` VALUES ('20160420153406-proabono.js'),('20160426163482-acl_setup.js'),('20160503094102-bundle.js'),('20160510134174-delete-user.js'),('20160511125936-admin-profile-company.js'),('20160518122420-acl-uservoice.js'),('20160524130284-orders-permissions.js'),('20160531172735-assignment-permissions.js'),('20160531172778-assignment.js'),('20160603122034-add-change-product-owner-permission.js'),('20160609163900-assignment-posystem.js'),('20160616132203-add-product-type.js'),('20160620153658-assigment_order-remove-add-columns.js'),('20160630122221-enable-product-features.js'),('20160712125324-product_timeline.js'),('20160713130351-populate_timelines_steps_1.js'),('20160714135677-modify_includes_po_from_product_timeline_steps_executor.js'),('20160719130114-add_timeline_to_products.js'),('20160720120204-add-product-assignment-options.js'),('20160824142451-add-external-workflow-for-assignment-orders.js'),('20160829095191-fix-timeline-executor_id-column.js'),('20160906171834-add-stock-table.js'),('20160912121125-add-gdpid-assignment-order.js'),('20160926152675-add-product-follow-ups.js'),('20160927114155-follow-ups.js'),('20160928164055-assignment-order-followups-add-demo-cols.js'),('20160929160383-remove-follow-up-state-column.js'),('20160929181981-add-follow-up-id-to-assignment-order-follow-up.js'),('20161004125267-tidy-follow-ups.js'),('20161004132680-add-timeline-type-column.js'),('20161004135248-add-follow-up-timeline-data.js');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_resource`
--

LOCK TABLES `article_resource` WRITE;
/*!40000 ALTER TABLE `article_resource` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order`
--

LOCK TABLES `assignment_order` WRITE;
/*!40000 ALTER TABLE `assignment_order` DISABLE KEYS */;
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
  `created_at` bigint(32) NOT NULL DEFAULT '1475047299086',
  `deleted_at` bigint(32) DEFAULT NULL,
  `id_timeline` varchar(255) NOT NULL,
  `id_follow_up_task` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_assignment_order` (`id_assignment_order`),
  CONSTRAINT `assignment_order_follow_ups_ibfk_1` FOREIGN KEY (`id_assignment_order`) REFERENCES `assignment_order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order_follow_ups`
--

LOCK TABLES `assignment_order_follow_ups` WRITE;
/*!40000 ALTER TABLE `assignment_order_follow_ups` DISABLE KEYS */;
/*!40000 ALTER TABLE `assignment_order_follow_ups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billing_agent`
--

DROP TABLE IF EXISTS `billing_agent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `billing_agent` (
  `id_user` int(11) NOT NULL,
  `api_key` varchar(40) DEFAULT NULL,
  `agent_key` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `id_user_UNIQUE` (`id_user`),
  UNIQUE KEY `api_key_UNIQUE` (`api_key`),
  UNIQUE KEY `agent_key_UNIQUE` (`agent_key`),
  CONSTRAINT `fk_billing_agent_user_profile` FOREIGN KEY (`id_user`) REFERENCES `user_profile` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billing_agent`
--

LOCK TABLES `billing_agent` WRITE;
/*!40000 ALTER TABLE `billing_agent` DISABLE KEYS */;
/*!40000 ALTER TABLE `billing_agent` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle`
--

LOCK TABLES `bundle` WRITE;
/*!40000 ALTER TABLE `bundle` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle_resource`
--

LOCK TABLES `bundle_resource` WRITE;
/*!40000 ALTER TABLE `bundle_resource` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'DD','00000000000000',NULL,'',1),(2,'Econcom BOS Option','11111111234566',NULL,'test',5),(3,'BOS_Editeur','23455666666666',NULL,NULL,8),(4,'BOS_Partenaires','55678876555555555',NULL,NULL,9),(5,'admin','0998877665451234576345',NULL,NULL,1);
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
  CONSTRAINT `fk_corner_created` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corner`
--

LOCK TABLES `corner` WRITE;
/*!40000 ALTER TABLE `corner` DISABLE KEYS */;
INSERT INTO `corner` VALUES (1,'SERVICE SOCLE','SERVICE-SOCLE-1','Une approche packagée, un modèle simple et industrialisé au service de votre projet métier',3,1459408860804,1461686217391,'logo-1.png'),(2,'SERVICES OPTIONNELS','SERVICES-OPTIONNELS-2','',3,1459412216145,1461228533254,'logo-2.png'),(3,'CONSEIL','CONSEIL-3','',3,1459610546677,1461228567874,'logo-3.png'),(4,'APPS METIERS','APPS-METIERS-4','',3,1459610564629,1461228591726,'logo-4.png');
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
INSERT INTO `corner_keyword` VALUES (1,1),(1,3),(2,4),(2,5),(3,5),(2,7),(4,7),(2,10);
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
INSERT INTO `editor_highlight_product` VALUES (4,8,1),(8,8,2),(10,8,3),(13,9,1),(15,9,2),(16,9,3);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `external_workflows`
--

LOCK TABLES `external_workflows` WRITE;
/*!40000 ALTER TABLE `external_workflows` DISABLE KEYS */;
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
INSERT INTO `general_setting` VALUES (1,'seo:title','Votre projet mobilité avec bos'),(7,'seo:tagline','');
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_carousel`
--

LOCK TABLES `home_carousel` WRITE;
/*!40000 ALTER TABLE `home_carousel` DISABLE KEYS */;
INSERT INTO `home_carousel` VALUES (1,'','<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis erat magna, eget vestibulum sem posuere eu. Proin auctor sem lectus, mollis tincidunt leo congue vitae. Donec congue nibh est, quis lacinia magna suscipit id. Mauris auctor tellus purus, non porta nunc dapibus non. Mauris venenatis condimentum dui, id scelerisque urna vehicula ut. Vestibulum feugiat tempus scelerisque. Morbi quis quam dolor. Proin sit amet diam ac tellus pulvinar molestie.</p>','slide-1.jpg','slide-1.jpg','En Savoir plus','',NULL,NULL,1),(2,'','<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis erat magna, eget vestibulum sem posuere eu. Proin auctor sem lectus, mollis tincidunt leo congue vitae. Donec congue nibh est, quis lacinia magna suscipit id. Mauris auctor tellus purus, non porta nunc dapibus non. Mauris venenatis condimentum dui, id scelerisque urna vehicula ut. Vestibulum feugiat tempus scelerisque. Morbi quis quam dolor. Proin sit amet diam ac tellus pulvinar molestie.</p>','slide-2.jpg','slide-1.jpg','En Savoir plus','',NULL,NULL,1),(3,'','<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis erat magna, eget vestibulum sem posuere eu. Proin auctor sem lectus, mollis tincidunt leo congue vitae. Donec congue nibh est, quis lacinia magna suscipit id. Mauris auctor tellus purus, non porta nunc dapibus non. Mauris venenatis condimentum dui, id scelerisque urna vehicula ut. Vestibulum feugiat tempus scelerisque. Morbi quis quam dolor. Proin sit amet diam ac tellus pulvinar molestie.</p>','slide-3.jpg','slide-3.jpg','En savoir plus','',NULL,NULL,1);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_resource`
--

LOCK TABLES `item_resource` WRITE;
/*!40000 ALTER TABLE `item_resource` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
INSERT INTO `keyword` VALUES (10,'Accessoires'),(7,'Apps'),(4,'Assurance'),(5,'Conseils'),(1,'Ipad'),(27,'iPad iPhone'),(3,'Iphone');
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
INSERT INTO `message` VALUES (4,5,'julien.lhoste@econocom.com','F','Lhoste','Julien','','','J\'ai un projet à court terme (- de 2 mois)','Rappelez moi svp',1460980434503,NULL);
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
  `id_role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission_role`
--

LOCK TABLES `permission_role` WRITE;
/*!40000 ALTER TABLE `permission_role` DISABLE KEYS */;
INSERT INTO `permission_role` VALUES ('VALIDATE_PUBLICATION_ARTICLE',3),('UNPUBLISH_ARTICLE',3),('PUBLISH_ARTICLE',3),('DELETE_ARTICLE',3),('EDIT_ARTICLE',3),('PUBLISH_PRODUCT',3),('UNPUBLISH_PRODUCT',3),('EDIT_PRODUCT',3),('VALIDATE_PUBLICATION_PRODUCT',3),('DELETE_PRODUCT',3),('CREATE_BUNDLE',3),('EDIT_BUNDLE_OWN',3),('PUBLISH_BUNDLE_OWN',3),('UNPUBLISH_BUNDLE_OWN',3),('DELETE_BUNDLE_OWN',3),('CREATE_CORNER',3),('EDIT_CORNER',3),('DELETE_CORNER',3),('EDIT_USER_CORNER',3),('CREATE_ROLES',3),('EDIT_ROLES_PERMISSION',3),('EDIT_USER_ROLE',3),('READ_USERS',3),('READ_USERS_DETAILS',3),('CREATE_USER',3),('EDIT_GENERAL_SETTINGS',3),('EDIT_USER',3),('CREATE_PRODUCT',2),('EDIT_PRODUCT_OWN',2),('REQUEST_PUBLICATION_PRODUCT',2),('UNPUBLISH_PRODUCT_OWN',2),('DELETE_PRODUCT_OWN',2),('EDIT_USER_CORNER_OWN',2),('CREATE_ARTICLE',4),('EDIT_ARTICLE_OWN',4),('REQUEST_PUBLICATION_ARTICLE',4),('UNPUBLISH_ARTICLE_OWN',4),('DELETE_ARTICLE_OWN',4),('EDIT_USER_CORNER_OWN',4),('CREATE_ORDER',5),('EDIT_ORDER_OWN',5),('REQUEST_PUBLICATION_ORDER_OWN',5),('CANCEL_PENDING_ORDER_OWN',5),('VALIDATE_ORDER',6),('CANCEL_PENDING_ORDER',6),('CREATE_ASSIGNMENT',7),('EDIT_ASSIGNMENT_OWN',7),('CANCEL_PENDING_ASSIGNMENT_OWN',7),('CANCEL_PENDING_ASSIGNMENT',7),('REQUEST_VALIDATION_ASSIGNMENT_OWN',7),('VALIDATE_ASSIGNMENT',7),('ASSIGNMENTS_LIST_ALL_INFO',7),('ASSIGNMENTS_LIST_BASIC_INFO',1),('CHANGE_PRODUCT_OWNER',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!1','MobileApp','deleted','','','A description here',5,1459411851896,1459411852562,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(2,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!2','MobileApp','deleted','','','A description here',5,1459411855392,1459411856046,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(3,'Gestion des Assets','Gestion-des-Assets-3','MaterialNDevice','deleted','','Gestion des assets accroche','A description here',5,1459411857740,1459412246661,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(4,' iPhone SE','-iPhone-SE-4','MaterialNDevice','published','','iPhone SE, à partir de 15,5 € services inclus','iPhone SE, une petite révolution&nbsp;<div><p><span style=\"line-height: 1.42857;\"><br></span></p><p><span style=\"line-height: 1.42857;\">Service socle inclus&nbsp;:</span><br></p><p>• services logistique</p><p>• mise à disposition du programme DEP</p><p>• garantie étendue sur 24 mois avec services de remplacement à J+1</p><p>• fin de vie simplifiée&nbsp;: reprise et recyclage des matériels selon les normes DEEE ou&nbsp;prolongation sans engagement ou à mi-abonnement si engagement d’un an supplémentaire</p><p>•&nbsp;cession possible aux collaborateurs</p><p>Cliquez sur «&nbsp;en détail&nbsp;» pour découvrir les différents abonnements proposés</p></div>',8,1459610848406,1461942538635,NULL,'',65,NULL,'',NULL,'http://www.apple.com/fr/','',NULL,NULL,1,NULL),(5,'iPhone 6S','iPhone-6S-5','MaterialNDevice','published','','L\'iPhone 6S, à partir de 21,5 € services inclus','<p>l\'iPhone 6S en un seul mot : puissance<br></p><p>Service socle inclus&nbsp;:</p><p>• services logistique</p><p>• mise à disposition du programme DEP</p><p>• garantie étendue sur 24 mois avec services de remplacement à J+1</p><p>• fin de vie simplifiée&nbsp;: reprise et recyclage des matériels selon les normes DEEE ou&nbsp;prolongation sans engagement ou à mi-abonnement si engagement d’un an supplémentaire</p><p>•&nbsp;cession possible aux collaborateurs</p><p>Cliquez sur «&nbsp;en détail&nbsp;» pour découvrir les différents abonnements proposés</p>',8,1459611146933,1461941946804,NULL,'',72,NULL,'',14,'http://www.apple.com/fr/','',NULL,NULL,1,NULL),(6,'iPad Pro 9,7\"','iPad-Pro-9,7\"-6','MaterialNDevice','published','','iPad Pro 9,7\", à partir de  19,5 € services inclus','<p>Un service socle industrialisé autour de votre équipement iOS</p><p>•	Livraison mono-site en 1 expédition</p><p>•	Mise à disposition du programme DEP (intégration du MDM et descente du profil utilisateur) si serveur EMM existant.</p><p>•	Garantie étendue sur 24 mois : reprise du matériel défectueux sur mono-site client (site de livraison) avec échange pour un matériel neuf à J+1.</p><p>•	En fin d’abonnement initial :</p><p>&nbsp; &nbsp; &nbsp; - Reprise des matériels et recyclage selon les normes DEEE en vigueur</p><p>&nbsp; &nbsp; &nbsp; - Cession possible aux collaborateurs en fin de vie</p><p>&nbsp; &nbsp; &nbsp; - Prolongation sans engagement ou à mi-abonnement si engagement d’un an supplémentaire</p><p>Retrouvez les tarifs de l’abonnement sur la section «EN DÉTAIL »</p>',8,1459611699104,1461224824832,NULL,'',86,NULL,'',9,'http://www.apple.com/fr','',NULL,NULL,1,NULL),(7,'Showpad','Showpad-7','MobileApp','pending','','Showpad -  Développer la performance commerciale de votre force de vente','<p>Plateforme à destination des forces de vente, Showpad permet de mettre à disposition tout le contenu marketing (pdf, vidéos, appli html…) de manière intuitive et ergonomique. La solution vise à développer la performance commerciale en donnant les métrics sur l’usages des contenus envoyés au client. </p>',9,1459612536274,1462280923765,NULL,'',15,NULL,'<p><br></p>',117,'www.showpad.com','',NULL,NULL,1,NULL),(8,'Flexibilité','Flexibilite-8','Service','published','','Optez pour un modèle économique adapté à l’évolution de vos besoins','<p>Variation de masse salariale ? &nbsp;usages non linéaire? &nbsp;Volonté de mettre à disposition les derniers modèles sortis? Au travers d\'un modèle d\'abonnement flexible et unique, econocom vous propose des options de flexibilité pour gérer votre fotte de devices enfonctionde l\'usage réel que vous souhaitez en faire. Plus d\'infos dans la rubrique \"En détail\".</p>',8,1459677838375,1460218490949,NULL,'',53,NULL,'',NULL,'','',NULL,NULL,1,NULL),(9,'Gestion des assets','Gestion-des-assets-9','Service','published','','','<p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>',8,1459753728908,1460218242144,NULL,'',56,NULL,'',NULL,'','',NULL,NULL,1,NULL),(10,'Services IT','Services-IT-10','Service','published','','Des services professionnels pour une disponibilité 100% garantie','<p><br></p>',8,1459753775023,1460218131381,NULL,'',58,NULL,'',NULL,'','',NULL,NULL,1,NULL),(11,'Custom / Intégration Application','Custom--Integration-Application-11','Service','published','','Bénéficiez de  notre écosystème applicatif et de notre expérience développement iOS','<p>Econocom vous accompagne dans votre transformation au travers d\'une expertise reconnue dans le développement applicatif iOS et l\'intégration d\'un écosystème d\'apps métiers choisis pour leur pertinence sur des usages précis: relation client B2C, dématérialisation des formulaires, signatures, présentation dynamique, formation...&nbsp;</p><p><br></p>',8,1459753820571,1460217726359,NULL,'',60,NULL,'',NULL,'','',NULL,NULL,1,NULL),(12,'Conseil','Conseil-12','Service','deleted','','Parlez-nous de vos projets métiers','<p>Parlez-nous de vos projets métiers, et construisez à nos côtés votre projet de mobilité.</p><p>Bénéficiez de notre expertise technologique et de nos partenaires spécialistes de la transformation pour vous aider à explorer les bénéfices de la mobilité sur une thématique précise, testez des solutions, co construisez des prototypes et soyez assuré de la bonne mise en oeuvre des solutions à déployer.</p>',8,1459753853175,1460217798739,NULL,'',51,NULL,'',NULL,'','',NULL,NULL,1,NULL),(13,'Beehivr','Beehivr-13','MobileApp','pending','','BEEHIVR - Enfin une application aux multiples usages, orientée client','<p>Beehivr est une plateforme marketing qui permet de développer un catalogue produit, un outil de collecte de données client ou encore une enquête de satisfaction dans une même application. L’expérience client sur iPad est d’autant plus engageante que les visuels sont de qualités. L’application peut être utilisée par les vendeurs en mobilité ou par le client en mode kiosk.</p>',9,1459754296628,1462281393048,NULL,'',98,NULL,'',98,'www.beehivr.com','',NULL,NULL,1,NULL),(14,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!14','MobileApp','deleted','','','A description here',9,1459754284058,1459754335210,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(15,'DocuSign','DocuSign-15','MobileApp','pending','','DocuSign - La référence de la signature électronique','<p>Docusign est la référence mondiale pour la gestion des transactions numériques. DocuSign aide les entreprises de toutes tailles à signer, envoyer et gérer des documents dans le Cloud de manière légale et sécurisée. </p>',9,1459754445328,1462281546700,NULL,'',93,NULL,'',93,'www.docusign.fr','',NULL,NULL,1,NULL),(16,'ProntoForms','ProntoForms-16','MobileApp','pending','','ProntoForms','<p>ProntoForms permet de digitaliser les formulaires de toutes sortes : bon de commande, gestion des stocks, audit technique, questionnaire de satisfaction, demande d\'intervention... Les usages se comptent par centaines.&nbsp;<br></p>',9,1459755034250,1462281650390,NULL,'',101,NULL,'',101,'www.prontoforms.com','',NULL,NULL,1,NULL),(17,'Zunos','Zunos-17','MobileApp','pending','','Zunos','A description here',9,1459755069700,1462281775651,NULL,'',25,NULL,'',25,'www.zunos.com','',NULL,NULL,1,NULL),(18,'Ipad Air 2','Ipad-Air-2-18','MaterialNDevice','published','','Ipad Air 2, à partir de 13,5 € services inclus ','<p>Un service socle industrialisé autour de votre équipement iOS</p><p>•	Livraison mono-site en 1 expédition</p><p>•	Mise à disposition du programme DEP (intégration du MDM et descente du profil utilisateur) si serveur EMM existant.</p><p>•	Garantie étendue sur 24 mois : reprise du matériel défectueux sur mono-site client (site de livraison) avec échange pour un matériel neuf à J+1.</p><p>•	En fin d’abonnement initial :</p><p>&nbsp; &nbsp; &nbsp; - Reprise des matériels et recyclage selon les normes DEEE en vigueur</p><p>&nbsp; &nbsp; &nbsp; - Cession possible aux collaborateurs en fin de vie</p><p>&nbsp; &nbsp; &nbsp; - Prolongation sans engagement ou à mi-abonnement si engagement d’un an supplémentaire</p><p>Retrouvez les tarifs de l’abonnement sur la section «EN DÉTAIL »</p>',8,1459928600854,1461224547823,NULL,'',84,NULL,'',NULL,'','',NULL,NULL,1,NULL),(19,'iPhone 6','iPhone-6-19','MaterialNDevice','published','','iPhone 6, à partir de 20,0 € services inclus ','<p>Service socle inclus&nbsp;:</p><p>• services logistique</p><p>• mise à disposition du programme DEP</p><p>• garantie étendue sur 24 mois avec services de remplacement à J+1</p><p>• fin de vie simplifiée&nbsp;: reprise et recyclage des matériels selon les normes DEEE ou&nbsp;prolongation sans engagement ou à mi-abonnement si engagement d’un an supplémentaire</p><p>•&nbsp;cession possible aux collaborateurs</p><p>Cliquez sur «&nbsp;en détail&nbsp;» pour découvrir les différents abonnements proposés</p>',8,1459928659057,1461941845244,NULL,'',80,NULL,'',NULL,'','',NULL,NULL,1,NULL),(20,'iPad mini 4','iPad-mini-4-20','MobileApp','published','','iPad mini 4, à partir 12,0 € services inclus ','<p>Un service socle industrialisé autour de votre équipement iOS</p><p>•	Livraison mono-site en 1 expédition</p><p>•	Mise à disposition du programme DEP (intégration du MDM et descente du profil utilisateur) si serveur EMM existant.</p><p>•	Garantie étendue sur 24 mois : reprise du matériel défectueux sur mono-site client (site de livraison) avec échange pour un matériel neuf à J+1.</p><p>•	En fin d’abonnement initial :</p><p>&nbsp; &nbsp; &nbsp; - Reprise des matériels et recyclage selon les normes DEEE en vigueur</p><p>&nbsp; &nbsp; &nbsp; - Cession possible aux collaborateurs en fin de vie</p><p>&nbsp; &nbsp; &nbsp; - Prolongation sans engagement ou à mi-abonnement si engagement d’un an supplémentaire</p><p>Retrouvez les tarifs de l’abonnement sur la section «EN DÉTAIL »</p>',8,1459928711185,1461223583469,NULL,'',82,NULL,'',NULL,'','',NULL,NULL,1,NULL),(21,'iPhone 6 Plus','iPhone-6-Plus-21','MobileApp','published','','iPhone 6 Plus,  à partir de 23,0 € services inclus','<p>Service socle inclus&nbsp;:</p><p>• services logistique</p><p>• mise à disposition du programme DEP</p><p>• garantie étendue sur 24 mois avec services de remplacement à J+1</p><p>• fin de vie simplifiée&nbsp;: reprise et recyclage des matériels selon les normes DEEE ou&nbsp;prolongation sans engagement ou à mi-abonnement si engagement d’un an supplémentaire</p><p>•&nbsp;cession possible aux collaborateurs</p><p>Cliquez sur «&nbsp;en détail&nbsp;» pour découvrir les différents abonnements proposés</p>',8,1459928768249,1462277014417,NULL,'',116,NULL,'',NULL,'','',NULL,NULL,1,NULL),(22,'iPhone 6S Plus','iPhone-6S-Plus-22','MaterialNDevice','draft','','iPhone 6S Plus, à partir de 21,5 € services inclus ','<p>Service socle inclus&nbsp;:</p><p>• services logistique</p><p>• mise à disposition du programme DEP</p><p>• garantie étendue sur 24 mois avec services de remplacement à J+1</p><p>• fin de vie simplifiée&nbsp;: reprise et recyclage des matériels selon les normes DEEE ou&nbsp;prolongation sans engagement ou à mi-abonnement si engagement d’un an supplémentaire</p><p>•&nbsp;cession possible aux collaborateurs</p><p>Cliquez sur «&nbsp;en détail&nbsp;» pour découvrir les différents abonnements proposés</p>',8,1459928810102,1461942022656,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(23,'Work Different','Work-Different-23','Service','published','','Explorez les bénéfices de la mobilité ','<p>Parlez-nous de vos projets métiers, et construisez à nos côtés votre projet de mobilité.</p><p>Bénéficiez de notre expertise technologique et de nos partenaires spécialistes de la transformation pour vous aider à explorer les bénéfices de la mobilité sur une thématique précise, testez des solutions, co construisez des prototypes et soyez assuré de la bonne mise en oeuvre des solutions à déployer.</p>',8,1460026551361,1460217847688,NULL,'',43,NULL,'',NULL,'','',NULL,NULL,1,NULL),(24,'Test & Learn','Test-&-Learn-24','Service','published','','Testez pour apprendre!','<p>Parlez-nous de vos projets métiers, et construisez à nos côtés votre projet de mobilité.</p><p>Bénéficiez de notre expertise technologique et de nos partenaires spécialistes de la transformation pour vous aider à explorer les bénéfices de la mobilité sur une thématique précise, testez des solutions, co construisez des prototypes et soyez assuré de la bonne mise en oeuvre des solutions à déployer.</p>',8,1460026630091,1460217875029,NULL,'',45,NULL,'',NULL,'','',NULL,NULL,1,NULL),(25,'Make it happen','Make-it-happen-25','Service','published','','De l\'idée au prototype','<p>Parlez-nous de vos projets métiers, et construisez à nos côtés votre projet de mobilité.</p><p>Bénéficiez de notre expertise technologique et de nos partenaires spécialistes de la transformation pour vous aider à explorer les bénéfices de la mobilité sur une thématique précise, testez des solutions, co construisez des prototypes et soyez assuré de la bonne mise en oeuvre des solutions à déployer.</p>',8,1460026738301,1460217888207,NULL,'',47,NULL,'',NULL,'','',NULL,NULL,1,NULL),(26,'Boost your digital team','Boost-your-digital-team-26','Service','published','','','<p>Parlez-nous de vos projets métiers, et construisez à nos côtés votre projet de mobilité.</p><p>Bénéficiez de notre expertise technologique et de nos partenaires spécialistes de la transformation pour vous aider à explorer les bénéfices de la mobilité sur une thématique précise, testez des solutions, co construisez des prototypes et soyez assuré de la bonne mise en oeuvre des solutions à déployer.</p>',8,1460026805404,1460217912653,NULL,'',49,NULL,'',NULL,'','',NULL,NULL,1,NULL),(27,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!27','MobileApp','draft','','','A description here',8,1461163621179,1461163621564,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(28,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!28','MobileApp','draft','','','A description here',8,1461163627344,1461163627674,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(29,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!29','MobileApp','draft','','','A description here',8,1461163677249,1461163677648,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(30,'iPhone 5S','iPhone-5S-30','MobileApp','published','','iPhone 5S, à partir de 15,0 € services inclus','A description here',8,1461163681387,1461163754426,NULL,'',74,NULL,'',NULL,'','',NULL,NULL,1,NULL),(31,'iPad Pro 12,9\" ','iPad-Pro-12,9\"--31','MobileApp','published','','iPad Pro 12,9\", à partir de 25,0 € services inclus','A description here',8,1461224843199,1461225230856,NULL,'',87,NULL,'',NULL,'','',NULL,NULL,1,NULL);
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
INSERT INTO `product_available_feature` VALUES ('PRODUCT_EDITOR',1),('PRODUCT_FEATURES',1),('PRODUCT_RESOURCES',1),('PRODUCT_SUMMARY',1),('PRODUCT_EDITOR',2),('PRODUCT_FEATURES',2),('PRODUCT_RESOURCES',2),('PRODUCT_SUMMARY',2),('PRODUCT_EDITOR',3),('PRODUCT_FEATURES',3),('PRODUCT_RESOURCES',3),('PRODUCT_SUMMARY',3),('PRODUCT_EDITOR',4),('PRODUCT_FEATURES',4),('PRODUCT_RESOURCES',4),('PRODUCT_SUMMARY',4),('PRODUCT_EDITOR',5),('PRODUCT_FEATURES',5),('PRODUCT_RESOURCES',5),('PRODUCT_SUMMARY',5),('PRODUCT_EDITOR',6),('PRODUCT_FEATURES',6),('PRODUCT_RESOURCES',6),('PRODUCT_SUMMARY',6),('PRODUCT_EDITOR',7),('PRODUCT_FEATURES',7),('PRODUCT_RESOURCES',7),('PRODUCT_SUMMARY',7),('PRODUCT_EDITOR',8),('PRODUCT_FEATURES',8),('PRODUCT_RESOURCES',8),('PRODUCT_SUMMARY',8),('PRODUCT_EDITOR',9),('PRODUCT_FEATURES',9),('PRODUCT_RESOURCES',9),('PRODUCT_SUMMARY',9),('PRODUCT_EDITOR',10),('PRODUCT_FEATURES',10),('PRODUCT_RESOURCES',10),('PRODUCT_SUMMARY',10),('PRODUCT_EDITOR',11),('PRODUCT_FEATURES',11),('PRODUCT_RESOURCES',11),('PRODUCT_SUMMARY',11),('PRODUCT_EDITOR',12),('PRODUCT_FEATURES',12),('PRODUCT_RESOURCES',12),('PRODUCT_SUMMARY',12),('PRODUCT_EDITOR',13),('PRODUCT_FEATURES',13),('PRODUCT_RESOURCES',13),('PRODUCT_SUMMARY',13),('PRODUCT_EDITOR',14),('PRODUCT_FEATURES',14),('PRODUCT_RESOURCES',14),('PRODUCT_SUMMARY',14),('PRODUCT_EDITOR',15),('PRODUCT_FEATURES',15),('PRODUCT_RESOURCES',15),('PRODUCT_SUMMARY',15),('PRODUCT_EDITOR',16),('PRODUCT_FEATURES',16),('PRODUCT_RESOURCES',16),('PRODUCT_SUMMARY',16),('PRODUCT_EDITOR',17),('PRODUCT_FEATURES',17),('PRODUCT_RESOURCES',17),('PRODUCT_SUMMARY',17),('PRODUCT_EDITOR',18),('PRODUCT_FEATURES',18),('PRODUCT_RESOURCES',18),('PRODUCT_SUMMARY',18),('PRODUCT_EDITOR',19),('PRODUCT_FEATURES',19),('PRODUCT_RESOURCES',19),('PRODUCT_SUMMARY',19),('PRODUCT_EDITOR',20),('PRODUCT_FEATURES',20),('PRODUCT_RESOURCES',20),('PRODUCT_SUMMARY',20),('PRODUCT_EDITOR',21),('PRODUCT_FEATURES',21),('PRODUCT_RESOURCES',21),('PRODUCT_SUMMARY',21),('PRODUCT_EDITOR',22),('PRODUCT_FEATURES',22),('PRODUCT_RESOURCES',22),('PRODUCT_SUMMARY',22),('PRODUCT_EDITOR',23),('PRODUCT_FEATURES',23),('PRODUCT_RESOURCES',23),('PRODUCT_SUMMARY',23),('PRODUCT_EDITOR',24),('PRODUCT_FEATURES',24),('PRODUCT_RESOURCES',24),('PRODUCT_SUMMARY',24),('PRODUCT_EDITOR',25),('PRODUCT_FEATURES',25),('PRODUCT_RESOURCES',25),('PRODUCT_SUMMARY',25),('PRODUCT_EDITOR',26),('PRODUCT_FEATURES',26),('PRODUCT_RESOURCES',26),('PRODUCT_SUMMARY',26),('PRODUCT_EDITOR',27),('PRODUCT_FEATURES',27),('PRODUCT_RESOURCES',27),('PRODUCT_SUMMARY',27),('PRODUCT_EDITOR',28),('PRODUCT_FEATURES',28),('PRODUCT_RESOURCES',28),('PRODUCT_SUMMARY',28),('PRODUCT_EDITOR',29),('PRODUCT_FEATURES',29),('PRODUCT_RESOURCES',29),('PRODUCT_SUMMARY',29),('PRODUCT_EDITOR',30),('PRODUCT_FEATURES',30),('PRODUCT_RESOURCES',30),('PRODUCT_SUMMARY',30),('PRODUCT_EDITOR',31),('PRODUCT_FEATURES',31),('PRODUCT_RESOURCES',31),('PRODUCT_SUMMARY',31);
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
INSERT INTO `product_corner` VALUES (3,2,0),(4,1,1),(5,1,3),(6,1,2),(7,4,0),(8,2,0),(9,2,0),(10,2,0),(11,2,0),(11,4,0),(12,3,0),(12,4,0),(13,4,0),(15,4,0),(16,4,0),(17,4,0),(18,1,0),(19,1,0),(20,1,0),(21,1,0),(22,1,0),(23,3,0),(24,3,1),(25,3,0),(26,3,0),(30,1,0);
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
INSERT INTO `product_feature` VALUES (3,1,'Assurance','<p>Description de l\'assurance<br></p>'),(4,1,'iPhone SE |16 Go','<p><b style=\"line-height: 1.42857;\"><br></b></p><h2><b style=\"line-height: 1.42857;\">15,5€ / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(4,2,'iPhone SE |64 Go','<p><b style=\"line-height: 1.42857;\"><br></b></p><h2><b style=\"line-height: 1.42857;\">18,0€ / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus<br></p>'),(5,1,'iPhone 6S  | 16 Go ','<h2><b>21,5€ / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(5,2,'iPhone 6S  | 64 Go','<h2><b>24,5€ / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus<br></p>'),(5,3,'iPhone 6S  | 128 Go','<h2><b>27,5€ / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus<br></p>'),(6,1,'iPad Pro | 9,7\'\'_32 Go Wi-Fi','<p><br></p><h2><b>19,5 € / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(6,2,'iPad Pro |  9,7\'\'_128 Go Wi-Fi','<p><br></p><h2><b>24,0 € / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(6,3,'iPad Pro | 9,7\'\'_32 Go Wi-Fi & Cellulaire','<div><br></div><h2><b>23,5 € / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(6,4,'iPad Pro | 9,7\'\'_128 Go Wi-Fi & Cellulaire','<div><br></div><h2><b>28,0 € / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(6,5,'iPad Pro | 12,9\'\'_32 Go Wi-Fi','<div><br></div><h2><b>25,0 € / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(6,6,'iPad Pro | 12,9\'\'_128 Go Wi-Fi & Celulaire','<div><br></div><h2><b>33,5 € / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(8,1,'Restitution','<h2><b>1€ / mois&nbsp;</b></h2><p><b>par device</b></p><p><br></p><p>Restituez jusqu\'à 1/3 du parc au cours de la deuxième année.<br></p>'),(8,2,'Extension','<h2>1€ / mois </h2><p><b>par device</b></p><p><br></p><p>Ajoutez à votre parc existant jusque 1/5 &nbsp;de devices supplémentaires au cours de la première année.&nbsp;</p>'),(8,3,'Up-grade technologique','<h3><b style=\"color: inherit; font-size: 24px; line-height: 1.42857;\">1€ / mois</b></h3><p><b>par device</b></p><p><br></p><p>A mi abonnement, offrez la à vos collaborateurs la possibilité de monter en gamme (50 % du parc).</p><p><br></p>'),(9,1,'Gestion des sinistres',''),(9,2,'Accessoires',''),(9,3,'Livraison multi sites',''),(9,4,'SAV - Reprise des données',''),(9,5,'SAV - Reprise de profil',''),(10,1,'Data Back Up',''),(10,2,'Infra / Wifi upgrade',''),(10,3,'Service Sesk L1/ L2/ L3',''),(10,4,'MDM',''),(18,1,'Ipad Air 2 | 16 Go Wi-Fi','<p><br></p><h2><b>13,5 € / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(18,2,'Ipad Air 2 | 64 Go Wi-Fi','<div><br></div><h2><b>16,5 € / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(18,3,'Ipad Air 2 | 16 Go Wi-Fi & Cellulaire','<div><br></div><h2><b>17,0 € / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(18,4,'Ipad Air 2 | 64 Go Wi-Fi & Cellulaire','<h2></h2><p><br></p><h2>19,5 € / mois</h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(19,1,'iPhone 6 |16 Go','<p><b style=\"line-height: 1.42857;\"><br></b></p><h2><span style=\"line-height: 1.42857;\"><b>20,0€ / mois</b></span></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(19,2,'iPhone 6 |64 Go','<p><b style=\"line-height: 1.42857;\"><br></b></p><h2><b style=\"line-height: 1.42857;\">23,0€ / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus<br></p>'),(20,1,'iPad mini 4 | 16 Go Wi-Fi','<p><br></p><h2><b>12,0 / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(20,2,'iPad mini 4 | 128 Go Wi-Fi','<div><b><br></b></div><h2><b>17,5 / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(20,3,'iPad mini 4 | 16 Go Wi-Fi & Cellulaire','<p><br></p><h2><b>15,0 / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(20,4,'iPad mini 4 | 128 Go Wi-Fi & Cellulaire','<h2><b>20,5 / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(21,1,'iPhone 6 Plus  | 16 Go','<p><br></p><h2><b>23,0€ / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(21,2,'iPhone 6 Plus  | 64 Go','<p><br></p><h2><b>26,0€ / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus<br></p>'),(22,1,'iPhone 6S Plus  | 16 Go','<div><b><br></b></div><h2><b>24,5€ / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus</p>'),(22,2,'iPhone 6S Plus  | 64 Go','<div><br></div><h2><b>27,5€ / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus<br></p>'),(22,3,'iPhone 6S Plus  | 64 Go','<p><b style=\"line-height: 1.42857;\"><br></b></p><h2><b style=\"line-height: 1.42857;\">30,5€ / mois</b></h2><p>Abonnement 24 mois</p><p>Service inclus<br></p>');
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
INSERT INTO `product_keyword` VALUES (6,1),(18,1),(20,1),(4,3),(5,3),(19,3),(21,3),(22,3),(30,3),(23,5),(24,5),(25,5),(26,5),(7,7),(13,7),(15,7),(16,7),(17,7);
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_link`
--

LOCK TABLES `product_link` WRITE;
/*!40000 ALTER TABLE `product_link` DISABLE KEYS */;
INSERT INTO `product_link` VALUES (4,6,'REGULAR_LINK','http://www.apple.com/fr/ipad-pro/','/public/images/customUrls/map-marker.png'),(5,4,'REGULAR_LINK','http://www.apple.com/fr/iphone-se/','/public/images/customUrls/map-marker.png'),(6,5,'REGULAR_LINK','http://www.apple.com/fr/iphone-6s/','/public/images/customUrls/map-marker.png');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_timeline_step_executors`
--

LOCK TABLES `product_timeline_step_executors` WRITE;
/*!40000 ALTER TABLE `product_timeline_step_executors` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource`
--

LOCK TABLES `resource` WRITE;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
INSERT INTO `resource` VALUES (4,5,'image/jpeg','4.jpg',NULL,NULL,'picto.jpg',NULL,'picto.jpg'),(6,5,'image/jpeg','6.jpg',NULL,NULL,'plutus91503.jpg',NULL,'plutus91503.jpg'),(7,5,'image/jpeg','7.jpg',NULL,NULL,'14417089767744.jpg',NULL,'14417089767744.jpg'),(8,6,'image/jpeg','8.jpg',NULL,NULL,'picto.jpg',NULL,'picto.jpg'),(9,6,'image/png','9.png',NULL,NULL,'Apple-Logo-4.png',NULL,'Apple-Logo-4.png'),(10,6,'image/jpeg','10.jpg',NULL,NULL,'ipad-pro-infoloc.jpg',NULL,'ipad-pro-infoloc.jpg'),(11,6,'image/png','11.png',NULL,NULL,'ipad-pro-price.png',NULL,'ipad-pro-price.png'),(12,6,'image/jpeg','12.jpg',NULL,NULL,'ipad_pro_upright_fake_mockup_hero_fixed.jpg',NULL,'ipad_pro_upright_fake_mockup_hero_fixed.jpg'),(14,5,'image/png','14.png',NULL,NULL,'Apple-Logo-4.png',NULL,'Apple-Logo-4.png'),(15,7,'image/png','15.png',3,NULL,'SHOWPAD.png',NULL,'SHOWPAD logo'),(16,7,'image/jpeg','16.jpg',2,NULL,'SHOWPAD2.jpg',NULL,'SHOWPAD application'),(17,12,'image/jpeg','17.jpg',NULL,NULL,'logo econocom.jpg',NULL,'logo econocom.jpg'),(18,11,'image/jpeg','18.jpg',NULL,NULL,'logo econocom.jpg',NULL,'logo econocom.jpg'),(19,10,'image/jpeg','19.jpg',NULL,NULL,'logo econocom.jpg',NULL,'logo econocom.jpg'),(20,9,'image/jpeg','20.jpg',NULL,NULL,'logo econocom.jpg',NULL,'logo econocom.jpg'),(21,8,'image/jpeg','21.jpg',NULL,NULL,'logo econocom.jpg',NULL,'logo econocom.jpg'),(25,17,'image/png','25.png',1,NULL,'ZUNOS.png',NULL,'ZUNOS.png'),(26,6,'image/jpeg','26.jpg',1,NULL,'iPad Pro.jpg',NULL,'iPad Pro.jpg'),(27,6,'image/jpeg','27.jpg',2,NULL,'Ipro 2.jpg',NULL,'Ipro 2.jpg'),(28,5,'image/jpeg','28.jpg',NULL,NULL,'iPhone 6S.jpg',NULL,'iPhone 6S.jpg'),(32,20,'image/jpeg','32.jpg',NULL,NULL,'mini4.jpg',NULL,'mini4.jpg'),(33,18,'image/png','33.png',NULL,NULL,'iPad air 2.png',NULL,'iPad air 2.png'),(34,6,'image/jpeg','34.jpg',NULL,NULL,'iPad Pro.jpg',NULL,'iPad Pro.jpg'),(36,5,'image/jpeg','36.jpg',NULL,NULL,'iPhone 6S.jpg',NULL,'iPhone 6S.jpg'),(37,18,'image/png','37.png',NULL,NULL,'iPad air 2.png',NULL,'iPad air 2.png'),(38,19,'image/jpeg','38.jpg',NULL,NULL,'I6.jpg',NULL,'I6.jpg'),(39,19,'image/jpeg','39.jpg',NULL,NULL,'I6.jpg',NULL,'I6.jpg'),(40,20,'image/jpeg','40.jpg',NULL,NULL,'mini4.jpg',NULL,'mini4.jpg'),(43,23,'image/png','43.png',NULL,NULL,'Work different.png',NULL,'Work different.png'),(44,23,'image/png','44.png',1,NULL,'Work different.png',NULL,'Work different.png'),(45,24,'image/png','45.png',NULL,NULL,'Test and learn.png',NULL,'Test and learn.png'),(46,24,'image/png','46.png',1,NULL,'Test and learn.png',NULL,'Test and learn.png'),(47,25,'image/png','47.png',NULL,NULL,'Make it happen.png',NULL,'Make it happen.png'),(48,25,'image/png','48.png',1,NULL,'Make it happen.png',NULL,'Make it happen.png'),(49,26,'image/png','49.png',NULL,NULL,'boost your digital team.png',NULL,'boost your digital team.png'),(50,26,'image/png','50.png',1,NULL,'boost your digital team.png',NULL,'boost your digital team.png'),(51,12,'image/png','51.png',NULL,NULL,'Conseil_NB.png',NULL,'Conseil_NB.png'),(52,12,'image/png','52.png',1,NULL,'Conseil_NB.png',NULL,'Conseil_NB.png'),(53,8,'image/png','53.png',NULL,NULL,'Flexibilité.png',NULL,'Flexibilité.png'),(54,8,'image/png','54.png',1,NULL,'Flexibilité.png',NULL,'Flexibilité.png'),(55,9,'image/png','55.png',NULL,NULL,'gestion des assets.png',NULL,'gestion des assets.png'),(56,9,'image/png','56.png',NULL,NULL,'gestion des assets.png',NULL,'gestion des assets.png'),(57,9,'image/png','57.png',1,NULL,'gestion des assets.png',NULL,'gestion des assets.png'),(58,10,'image/png','58.png',NULL,NULL,'Services.png',NULL,'Services.png'),(59,10,'image/png','59.png',1,NULL,'Services.png',NULL,'Services.png'),(60,11,'image/png','60.png',NULL,NULL,'Apps.png',NULL,'Apps.png'),(61,11,'image/png','61.png',1,NULL,'Apps.png',NULL,'Apps.png'),(62,6,'image/png','62.png',NULL,NULL,'iPad air 2.png',NULL,'iPad air 2.png'),(63,6,'image/png','63.png',NULL,NULL,'iPad pro _V2.png',NULL,'iPad pro _V2.png'),(65,4,'image/png','65.png',NULL,NULL,'iPhoneSE.png',NULL,'iPhoneSE.png'),(69,4,'image/png','69.png',NULL,NULL,'iPhoneSE.png',NULL,'iPhoneSE.png'),(71,4,'image/png','71.png',1,NULL,'iPhoneSE_Face.png',NULL,'iPhoneSE_Face.png'),(72,5,'image/png','72.png',NULL,NULL,'iPhone 6S_Famille.png',NULL,'iPhone 6S_Famille.png'),(73,5,'image/png','73.png',1,NULL,'iPhone 6S_Famille.png',NULL,'iPhone 6S_Famille.png'),(74,30,'image/png','74.png',NULL,NULL,'iPhone 5S_Famille.png',NULL,'iPhone 5S_Famille.png'),(75,30,'image/png','75.png',1,NULL,'iPhone 5S_Famille.png',NULL,'iPhone 5S_Famille.png'),(77,22,'image/png','77.png',1,NULL,'iPhone 6S Plus_Famille.png',NULL,'iPhone 6S Plus_Famille.png'),(79,21,'image/png','79.png',1,NULL,'iPhone 6 Plus.png',NULL,'iPhone 6 Plus.png'),(80,19,'image/png','80.png',1,NULL,'iPhone 6.png',NULL,'iPhone 6.png'),(81,20,'image/tiff','81.tif',NULL,NULL,'iPadMini4_34Flat_3up_FR-FR-SCREEN.tif',NULL,'iPadMini4_34Flat_3up_FR-FR-SCREEN.tif'),(82,20,'image/png','82.png',NULL,NULL,'iPad mini 4.png',NULL,'iPad mini 4.png'),(83,20,'image/png','83.png',1,NULL,'iPad mini 4.png',NULL,'iPad mini 4.png'),(84,18,'image/png','84.png',NULL,NULL,'iPad Air 2.png',NULL,'iPad Air 2.png'),(85,18,'image/png','85.png',1,NULL,'iPad Air 2.png',NULL,'iPad Air 2.png'),(86,6,'image/png','86.png',3,NULL,'iPad Pro 9,7.png',NULL,'iPad Pro 9,7.png'),(87,31,'image/png','87.png',NULL,NULL,'iPad Pro 12.png',NULL,'iPad Pro 12.png'),(88,31,'image/png','88.png',1,NULL,'iPad Pro 12.png',NULL,'iPad Pro 12.png'),(89,15,'video/mp4','89.mp4',NULL,NULL,'02_DOCUSIGN_Solution_EN.mp4',NULL,'DOCUSIGN Solution'),(92,15,'image/jpeg','92.jpg',1,NULL,'Signature électronique.jpg',NULL,'Signature électronique'),(93,15,'image/png','93.png',2,NULL,'docusign logo.png',NULL,'docusign logo'),(95,7,'video/mp4','95.mp4',NULL,NULL,'02_SHOWPAD_Solution_EN.mp4',NULL,'SHOWPAD Solution'),(96,13,'image/jpeg','96.jpg',NULL,NULL,'Retail.jpg',NULL,'Retail'),(98,13,'image/png','98.png',1,NULL,'Beehivr-Logo-Black-Red.png',NULL,'Beehivr Logo'),(100,16,'image/jpeg','100.jpg',1,NULL,'Dématérialisation.jpg',NULL,'Dématérialisation'),(101,16,'image/png','101.png',2,NULL,'ProntoForms logo.png',NULL,'ProntoForms logo'),(102,5,'image/png','102.png',NULL,NULL,'iPhone 6S_Famille.png',NULL,'iPhone 6S_Famille.png'),(103,5,'image/png','103.png',2,NULL,'iPhone6s_34BF_2up_Gld_US-EN-SCREEN.png',NULL,'iPhone6s_34BF_2up_Gld_US-EN-SCREEN.png'),(104,5,'image/png','104.png',3,NULL,'iPhone6s_34BF_2up_RsGld_US-EN-SCREEN.png',NULL,'iPhone6s_34BF_2up_RsGld_US-EN-SCREEN.png'),(105,21,'image/png','105.png',NULL,NULL,'iPhone6Plus_PureAngles_SpGry_AU-EN-SCREEN.png',NULL,'iPhone6Plus_PureAngles_SpGry_AU-EN-SCREEN.png'),(106,21,'image/png','106.png',2,NULL,'iPhone6Plus_PF_Svr_AU-EN-SCREEN.png',NULL,'iPhone6Plus_PF_Svr_AU-EN-SCREEN.png'),(107,21,'image/png','107.png',NULL,NULL,'iPhone6Plus_PureAngles_Svr_AU-EN-SCREEN.png',NULL,'iPhone6Plus_PureAngles_Svr_AU-EN-SCREEN.png'),(108,21,'image/png','108.png',3,NULL,'iPhone6Plus_PF_SpGry_AU-EN-SCREEN.png',NULL,'iPhone6Plus_PF_SpGry_AU-EN-SCREEN.png'),(109,21,'image/png','109.png',4,NULL,'iPhone6Plus_PureAngles_SpGry_AU-EN-SCREEN.png',NULL,'iPhone6Plus_PureAngles_SpGry_AU-EN-SCREEN.png'),(110,4,'image/png','110.png',2,NULL,'iPhoneSE-SpGry-PF_WW-EN-PRINT.png',NULL,'iPhoneSE-SpGry-PF_WW-EN-PRINT.png'),(111,4,'image/png','111.png',3,NULL,'iPhoneSE-SpGry-PB-PF_WW-EN-SCREEN.png',NULL,'iPhoneSE-SpGry-PB-PF_WW-EN-SCREEN.png'),(112,19,'image/png','112.png',2,NULL,'iPhone6_PF_Svr_AU-EN-SCREEN.png',NULL,'iPhone6_PF_Svr_AU-EN-SCREEN.png'),(113,19,'image/png','113.png',3,NULL,'iPhone6_PF_SpGry_AU-EN-SCREEN.png',NULL,'iPhone6_PF_SpGry_AU-EN-SCREEN.png'),(114,22,'image/png','114.png',2,NULL,'iPhone6Plus_PF_SpGry_AU-EN-SCREEN.png',NULL,'iPhone6Plus_PF_SpGry_AU-EN-SCREEN.png'),(115,22,'image/png','115.png',3,NULL,'iPhone6Plus_PureAngles_Svr_AU-EN-SCREEN.png',NULL,'iPhone6Plus_PureAngles_Svr_AU-EN-SCREEN.png'),(116,21,'image/png','116.png',NULL,NULL,'iPhone 6 Plus.png',NULL,'iPhone 6 Plus.png'),(117,7,'image/jpeg','117.jpg',1,NULL,'Showpad_rgb .jpg',NULL,'Showpad_rgb .jpg'),(119,13,'image/png','119.png',NULL,NULL,'Beehivr logo.png',NULL,'Beehivr logo.png'),(120,13,'image/png','120.png',NULL,NULL,'Beehivr total app.png',NULL,'Beehivr total app.png'),(121,13,'image/png','121.png',2,NULL,'Beehivr app.png',NULL,'Beehivr app.png'),(122,13,'image/png','122.png',3,NULL,'Beehivr Dashboard.png',NULL,'Beehivr Dashboard.png');
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (3,'admin'),(4,'author'),(1,'customer'),(2,'editor'),(7,'fleet manager'),(6,'Michele');
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
  `created_at` bigint(32) NOT NULL DEFAULT '1473339883',
  PRIMARY KEY (`id`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline`
--

LOCK TABLES `timeline` WRITE;
/*!40000 ALTER TABLE `timeline` DISABLE KEYS */;
INSERT INTO `timeline` VALUES (1,'line','assignment-order'),(2,'device','assignment-order'),(3,'sav_vol_and_perte','follow-up'),(4,'sav_casse','follow-up'),(5,'line_suspension','follow-up'),(6,'sim_card','follow-up'),(7,'chgt_options','follow-up');
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
  KEY `id_timeline` (`id_timeline`),
  CONSTRAINT `timeline_steps_ibfk_1` FOREIGN KEY (`id_timeline`) REFERENCES `timeline` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline_steps`
--

LOCK TABLES `timeline_steps` WRITE;
/*!40000 ALTER TABLE `timeline_steps` DISABLE KEYS */;
INSERT INTO `timeline_steps` VALUES (1,'tl_step_bdc_sent',0,1,1),(2,'tl_step_released_sim_to_user',1,2,1),(3,'tl_step_activated_line',1,3,1),(4,'tl_step_fleet_updated_line_1',1,4,1),(5,'tl_step_bdc_envoye',0,1,2),(6,'tl_step_fleet_updated_device_1',0,2,2),(7,'tl_step_order_received',1,3,2),(8,'tl_step_fleet_updated_device_2',1,4,2),(9,'tl_step_intregation_request',1,5,2),(10,'tl_step_integration_achieved',1,6,2),(11,'tl_step_released_terminal_to_user',1,7,2),(12,'tl_step_user_confirms_reception',1,8,2),(13,'device_wiping',0,1,3),(14,'line_suspension',1,1,3),(15,'device_preparation',1,1,3),(16,'device_delivery',1,1,3),(17,'device_diagnostic',1,2,4),(18,'device_repair',1,2,4),(19,'device_delivery',1,2,4),(20,'request_in_progress',1,3,5),(21,'line_suspended',1,3,5),(22,'request_in_progress',1,4,7),(23,'new_options_active',1,4,7),(24,'sim_code_created',1,5,6),(25,'sim_received',1,5,6),(26,'sim_activated',1,5,6);
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
  CONSTRAINT `fk_user_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'bob@intuiteev.io','ab266fcf5ce45fe51f8b770bec3d2631f20e019eb81e8a9d6c09688ded42b099',1458762704658,'Bob','Bob','','local',NULL,'F',2,'','',NULL,NULL,NULL),(2,'dede@intuiteev.io','c0d36ffae5749313da9553cec19f3cb98b2ea9bf3f4e92dcfe071c4d72a2ae29',1458762704658,'Dede','Dede','','local',NULL,'F',3,'','',NULL,NULL,NULL),(3,'JEAN-GUILLAUME.ROGER@econocom.com','8b23410a1336f8528e1e5d1cda6d3eff338e0b0cf2789615130899a07658c273',1458806431075,'JGR','Jean-Guillaume','ROGER','local',1458806431097,'M',3,'','',NULL,NULL,NULL),(5,'asset@bos.com','8b23410a1336f8528e1e5d1cda6d3eff338e0b0cf2789615130899a07658c273',1459411828064,'Asset','Jean','Asset','local',1459411828064,'M',2,'','',NULL,NULL,NULL),(8,'BOS_Editeur@intuitee.io','8b8f0349f2ab1bc6a11b408e9106395937193c0690e5091669bb46933f977bed',1459610815564,'BOS_Editeur','Jean-Guillaume','Roger','local',1459610815564,'M',2,'','',NULL,NULL,NULL),(9,'BOS_Partenaires@intuiteev.io','8b1a468efe4f6083fa379682fab468199fd447cc6b0f0cc1b07ef6e9dca02147',1459612514908,'BOS_Partenaires','jean-guillaume','Roger','local',1459612514908,'M',2,'','',NULL,NULL,NULL),(10,'alisson@intuiteev.io','3a2e6e87aab6f2d9e7980fbed49901247881890a6970c8efb88dd23205ecd843',1459774826043,'Alisson','Alisson','dupont','local',1459774826043,'F',1,'','',NULL,NULL,NULL);
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
  CONSTRAINT `fk_user_validated` FOREIGN KEY (`validated_by`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
INSERT INTO `user_profile` VALUES (1,'Box','Box-1',NULL,1458835369523,'logo-1.png',NULL,1,1),(2,'Dede','Dede-2','Lorem Ipsum',NULL,NULL,2,1,5),(3,'Jean-Guillaume','Jean-Guillaume-3','Lorem Ipsum',NULL,NULL,3,1,5),(5,'Options','Options-5',NULL,1459412398932,NULL,3,1,2),(8,'bos','bos-8',NULL,1460026526450,'logo-8.png',3,1,3),(9,'PARTENAIRES BOS','PARTENAIRES-BOS-9',NULL,1461228065383,'logo-9.png',3,1,4);
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

-- Dump completed on 2016-12-13 17:05:48
-- MySQL dump 10.13  Distrib 5.7.13, for linux-glibc2.5 (x86_64)
--
-- Host: 0.0.0.0    Database: marketplace_hp
-- ------------------------------------------------------
-- Server version	5.7.16

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
INSERT INTO `SequelizeMeta` VALUES ('20160420153406-proabono.js'),('20160426163482-acl_setup.js'),('20160503094102-bundle.js'),('20160510134174-delete-user.js'),('20160511125936-admin-profile-company.js'),('20160518122420-acl-uservoice.js'),('20160524130284-orders-permissions.js'),('20160531172735-assignment-permissions.js'),('20160531172778-assignment.js'),('20160603122034-add-change-product-owner-permission.js'),('20160609163900-assignment-posystem.js'),('20160616132203-add-product-type.js'),('20160620153658-assigment_order-remove-add-columns.js'),('20160630122221-enable-product-features.js'),('20160712125324-product_timeline.js'),('20160713130351-populate_timelines_steps_1.js'),('20160714135677-modify_includes_po_from_product_timeline_steps_executor.js'),('20160719130114-add_timeline_to_products.js'),('20160720120204-add-product-assignment-options.js'),('20160824142451-add-external-workflow-for-assignment-orders.js'),('20160829095191-fix-timeline-executor_id-column.js'),('20160906171834-add-stock-table.js'),('20160912121125-add-gdpid-assignment-order.js'),('20160926152675-add-product-follow-ups.js'),('20160927114155-follow-ups.js'),('20160928164055-assignment-order-followups-add-demo-cols.js'),('20160929160383-remove-follow-up-state-column.js'),('20160929181981-add-follow-up-id-to-assignment-order-follow-up.js'),('20161004125267-tidy-follow-ups.js'),('20161004132680-add-timeline-type-column.js'),('20161004135248-add-follow-up-timeline-data.js');
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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_field`
--

LOCK TABLES `activity_field` WRITE;
/*!40000 ALTER TABLE `activity_field` DISABLE KEYS */;
INSERT INTO `activity_field` VALUES (24,'boomBeach'),(18,'Communication'),(2,'education'),(1,'healthcare'),(4,'industry'),(5,'retail'),(21,'Sécurité'),(25,'test'),(6,'transversal'),(15,'Transverse');
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'Premier Article de BART !!','Premier-Article-de-BART-!!-1','Faut-il créer une Markeplace','<p>Il semble que oui …</p><p>Les premières mises en place majeures ont vu le jour il y a 5-6 ans dans le Retail, dans la ligné d’Amazon et dont la FNAC est encore aujourd’hui un exemple parlant.</p><p>Les activités de Services commencent à utiliser les notions de Marketplace, qu’il s’agisse de conciergerie digital, de camping ou de fédération de freelance, le mouvement est lancé.</p><p>Des initiatives dans le monde digital voient le jour outre atlantique, convaincu que le besoin est pressant, nous nous sommes lancés dans cette démarche en janvier 2015.</p>','<p>Il s\'agissait du slide d\'ouverture de la conférence <b>EBG</b> sur l\'utilité et le retour d\'expérience des <b>Clients</b><br></p>',45,1457369229976,1457369229976,0,3,3,1,NULL,'Article','www.google.fr',NULL,'<p>Intuiteev la plate-forme Marketplace en marque blanche<br></p>',2),(2,'Dockers & Micrco Services','Dockers-&-Micrco-Services-2','Les développeurs adoptent conteneurs et microservices','{\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://www.nginx.com/app-dev-survey/\"}}},\"blocks\":[{\"key\":\"bnjpj\",\"text\":\"Portée par  le succès de Docker, l’adoption des conteneurs progresse, selon un  sondage réalisé par Nginx auprès de 1800 professionnels IT, des  développeurs aux DSI. \",\"type\":\"blockquote\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]},{\"key\":\"86b3u\",\"text\":\"Nginx a mené l’enquête  en novembre dernier auprès de 1800 professionnels IT. 66 % des  organisations utilisent la technologie de conteneurs (20 % en  production, 17 % pour leur développement) ou envisagent de le faire (29  %). Parmi ceux qui ont adopté les conteneurs, un tiers les utilise pour  plus de 80 % de la charge de travail. Et la moitié pour des applications  critiques. La rapidité de déploiement d’applications est le premier  avantage cité, devant l’évolutivité.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":13,\"length\":9,\"key\":0}]},{\"key\":\"45oue\",\"text\":\"Pour répondre aux attentes des utilisateurs, 70 % des répondants  disent diffuser du code au moins une fois par semaine, 28 % plusieurs  fois par jour. Dans ce contexte, les microservices, développés, testés  et déployés de manière indépendante, ont également la cote. Aujourd’hui,  68 % des organisations les utilisent ou envisagent de le faire. 50 %  des entreprises de taille intermédiaire et 44 % de PME utilisent des  microservices, mais seulement 36 % des grandes entreprises concernées.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]},{\"key\":\"er9l4\",\"text\":\"Des conteneurs au Cloud\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]},{\"key\":\"9s93j\",\"text\":\"Sans surprise, la performance des applications fait débat. 51 % des  répondants considèrent que leurs apps pourraient être plus rapides et 25  % jugent tout simplement qu’elles sont trop lentes. Mais les  entreprises consacrent peu de temps ou de ressources pour y remédier. 31  % des répondants estiment même que leur entreprise traite rarement ou  jamais de la question.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]},{\"key\":\"ce5b\",\"text\":\"Malgré tout, les profils IT se sentent impliqués dans la prise de  décision au sein de leur organisation. Et 74 % des répondants déclarent  que les développeurs jouent un rôle majeur dans le choix des outils de  développement et de déploiement d’applications. \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]},{\"key\":\"ar4ln\",\"text\":\"Le sondage s’intéresse également au Cloud. Dans ce domaine, Amazon  Web Services (AWS) est le service de Cloud public le plus populaire  auprès des membres de la communauté formé autour du serveur Web Open  Source Nginx. AWS (49 %) devance Google Cloud Platform (14 %) et  Microsoft Azure (8 %).\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]},{\"key\":\"ebvfn\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]},{\"key\":\"185hq\",\"text\":\"crédit photo © Victor Grow / Shutterstock.com\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]}]}','{\"entityMap\":{},\"blocks\":[{\"key\":\"bnjpj\",\"text\":\"Lire aussi :\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":12,\"style\":\"BOLD\"}],\"entityRanges\":[]},{\"key\":\"b6db4\",\"text\":\"Comment les conteneurs donnent naissance au Cloud v2\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]},{\"key\":\"emfs5\",\"text\":\"Pour son anniversaire, Docker saute le pas de Windows et Mac\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]}]}',45,1458235006968,1458235006968,0,1,5,4,NULL,'Article','http://www.silicon.fr/','http://www.silicon.fr/','<p>Ariane Beky</p><p>Journaliste IT, Ariane couvre pour Silicon.fr la stratégie des acteurs du numérique, l\'économie du secteur et la législation. Parmi les sujets de fond : gouvernance d\'Internet, protection des données et fiscalité.</p><p>En savoir plus sur http://www.silicon.fr/developpeurs-conteneurs-microservices-nginx-143492.html#EK5iHfRWd3QZuRgY.99</p>',6),(3,'Donnez un titre à votre article!','Donnez-un-titre-a-votre-article!-3','','{\"entityMap\":{},\"blocks\":[{\"key\":\"8t1o4\",\"text\":\"test\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]},{\"key\":\"fima6\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]},{\"key\":\"8v9ig\",\"text\":\"jaja\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]}]}','{\"entityMap\":{},\"blocks\":[{\"key\":\"5m98t\",\"text\":\"Test \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]}]}',45,1460116679952,1460116679952,0,3,NULL,NULL,NULL,'Article',NULL,NULL,NULL,NULL),(4,'Donnez un titre à votre article!','Donnez-un-titre-a-votre-article!-4','','{\"entityMap\":{},\"blocks\":[{\"key\":\"flpek\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]}]}','',45,1460700096983,1460700096983,0,3,NULL,NULL,NULL,'Article',NULL,NULL,NULL,NULL),(5,'Donnez un titre à votre article!','Donnez-un-titre-a-votre-article!-5','','{\"entityMap\":{},\"blocks\":[{\"key\":\"5lfkv\",\"text\":\"hgrlazjkgelzkajzùlkeazejlzajezkejzlajezlkajezlkejlazkjealzkjelzmakjemzlkejzmlkejzamkj\",\"type\":\"blockquote\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]},{\"key\":\"et7cb\",\"text\":\"dazzez\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]},{\"key\":\"dr8p\",\"text\":\"ddmlskddzr zerzzrze ezaeaz  ezaraz \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":11,\"length\":9,\"style\":\"BOLD\"}],\"entityRanges\":[]}]}','',45,1460709783588,1460709783588,0,2,NULL,NULL,NULL,'Article',NULL,NULL,NULL,NULL),(6,'Donnez un titre à votre article!','Donnez-un-titre-a-votre-article!-6','','','',45,1461234583692,1461234583692,0,2,NULL,NULL,NULL,'Article',NULL,NULL,NULL,NULL),(7,'test carlos','test-carlos-7','','','',45,1461245491956,1461245491956,0,2,7,NULL,NULL,'Article',NULL,NULL,NULL,NULL),(8,'Donnez un titre à votre article!','Donnez-un-titre-a-votre-article!-8','','','',45,1463130705131,1463130705131,0,2,NULL,NULL,NULL,'Article',NULL,NULL,NULL,NULL);
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
INSERT INTO `article_corner` VALUES (1,1,0),(1,2,0),(2,4,0);
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
INSERT INTO `article_keyword` VALUES (1,1),(1,3),(1,5),(2,18),(2,20);
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_resource`
--

LOCK TABLES `article_resource` WRITE;
/*!40000 ALTER TABLE `article_resource` DISABLE KEYS */;
INSERT INTO `article_resource` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,4),(5,2,5),(6,2,6),(7,7,7);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order`
--

LOCK TABLES `assignment_order` WRITE;
/*!40000 ALTER TABLE `assignment_order` DISABLE KEYS */;
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
  `created_at` bigint(32) NOT NULL DEFAULT '1475047299099',
  `deleted_at` bigint(32) DEFAULT NULL,
  `id_timeline` varchar(255) NOT NULL,
  `id_follow_up_task` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_assignment_order` (`id_assignment_order`),
  CONSTRAINT `assignment_order_follow_ups_ibfk_1` FOREIGN KEY (`id_assignment_order`) REFERENCES `assignment_order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order_follow_ups`
--

LOCK TABLES `assignment_order_follow_ups` WRITE;
/*!40000 ALTER TABLE `assignment_order_follow_ups` DISABLE KEYS */;
/*!40000 ALTER TABLE `assignment_order_follow_ups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billing_agent`
--

DROP TABLE IF EXISTS `billing_agent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `billing_agent` (
  `id_user` int(11) NOT NULL,
  `api_key` varchar(40) DEFAULT NULL,
  `agent_key` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `id_user_UNIQUE` (`id_user`),
  UNIQUE KEY `api_key_UNIQUE` (`api_key`),
  UNIQUE KEY `agent_key_UNIQUE` (`agent_key`),
  CONSTRAINT `fk_billing_agent_user_profile` FOREIGN KEY (`id_user`) REFERENCES `user_profile` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billing_agent`
--

LOCK TABLES `billing_agent` WRITE;
/*!40000 ALTER TABLE `billing_agent` DISABLE KEYS */;
/*!40000 ALTER TABLE `billing_agent` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle`
--

LOCK TABLES `bundle` WRITE;
/*!40000 ALTER TABLE `bundle` DISABLE KEYS */;
INSERT INTO `bundle` VALUES (12,'pack de test','le premier BUNDLE ...','description du premier bundle fait par JP',7,1463046298889,1463046298889,NULL,1,'pack-de-test-12',9),(13,'Donnez un titre à votre package',NULL,NULL,7,1463047316922,1463047316922,NULL,2,'Donnez-un-titre-a-votre-package-13',NULL),(14,'Package 1','Baseline',NULL,7,1463067530929,1463067530929,NULL,1,'Package-1-14',NULL),(15,'Donnez un titre à votre package',NULL,NULL,7,1463126422175,1463126422175,NULL,2,'Donnez-un-titre-a-votre-package-15',NULL),(16,'Donnez un titre à votre package',NULL,NULL,7,1463938786595,1463938786595,NULL,3,'Donnez-un-titre-a-votre-package-16',NULL),(17,'Donnez un titre à votre package',NULL,NULL,7,1463939016781,1463939016781,NULL,2,'Donnez-un-titre-a-votre-package-17',NULL),(18,'Donnez un titre à votre package',NULL,NULL,7,1464863736723,1464863736723,NULL,2,'Donnez-un-titre-a-votre-package-18',NULL);
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle_component`
--

LOCK TABLES `bundle_component` WRITE;
/*!40000 ALTER TABLE `bundle_component` DISABLE KEYS */;
INSERT INTO `bundle_component` VALUES (12,6,0),(14,11,0),(14,15,1),(12,19,1),(12,23,2),(14,34,2);
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle_corner`
--

LOCK TABLES `bundle_corner` WRITE;
/*!40000 ALTER TABLE `bundle_corner` DISABLE KEYS */;
INSERT INTO `bundle_corner` VALUES (14,1),(14,2),(14,3),(12,4),(14,4),(14,5);
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle_keyword`
--

LOCK TABLES `bundle_keyword` WRITE;
/*!40000 ALTER TABLE `bundle_keyword` DISABLE KEYS */;
INSERT INTO `bundle_keyword` VALUES (14,6),(14,7),(14,9),(14,10),(14,15),(12,17),(12,19),(12,20);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle_resource`
--

LOCK TABLES `bundle_resource` WRITE;
/*!40000 ALTER TABLE `bundle_resource` DISABLE KEYS */;
INSERT INTO `bundle_resource` VALUES (1,12,8,1,NULL),(2,12,9,0,NULL),(3,12,10,0,NULL),(4,14,11,1,NULL),(5,14,12,1,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'Aruba Networks','079-437-169-75860','03.45.87.89.99',NULL,8),(2,'Docapost','066-050-613-20587','0673301528',NULL,3),(3,'Bob Intuiteev','027-296-729-33928',NULL,NULL,9),(4,'Nuance Communications','031-240-816-39107','06 22 68 03 31',NULL,2),(5,'Bulldozair','076-807-836-83899','0184173289',NULL,4),(7,'MobileIron','002-485-050-95951','+33 627825688',NULL,20),(8,'ARAGON-eRH','041-672-987-16492','0681328649',NULL,18),(9,'NORCOD','009-670-593-17044','0320284848',NULL,12),(10,'DocuSign','044-365-634-60621','+33633394900',NULL,11),(11,'HP','011-137-481-40633','0674355429',NULL,14),(12,'Morpho','019-350-496-37686','01 58 11 77 25',NULL,6),(13,'Hiflex','020-246-587-90323','06.78.53.13.89',NULL,23),(14,'HP','077-622-311-88826','01.44.28.56.20',NULL,21),(15,'TELELOGOS','045-220-613-87542','0241227000',NULL,25),(19,'Thematic groupe','79072853900020',NULL,'Digitalisation de point de vente\nLa solution est a destination des clients finaux et des salariés.',39),(20,'MHCOMM','52288917900027',NULL,'Applications logicielles métiers pour la santé en mobilité et aux domiciles des patients.\nLes utilisateurs sont les médecins, infirmiers, soignants...+ les patients et leurs aidants.',40),(21,'LogoSapience','40061412900049',NULL,'ECOLE NUMÉRIQUE\nGestion de Parc Matériel\nGestion de Classe\nGestion de Contenus',41),(22,'Ocito','44214466300048',NULL,'Notre solution Kiwapp permet de déployer des services digitaux en mobilité et dans les points de vente: information produit, opération de collecte, formulaire newsletter, création de compte fidélité, appel d’un vendeur, outil d’aide à la vente, vérifications des stocks, product locator, récupération d’un panier web, etc.\nLes utilisateurs sont les clients des magasins, le personnel de vente ou les équipes en mobilité.',42),(23,'NOLEDGE SAS','44091450500035',NULL,'L’application Cartable Digital de Noledge vous permet de centraliser, structurer et maintenir à jour l’ensemble des supports commerciaux et marketing diffusés à vos commerciaux.\nUtilisable dans l’acte de vente en mode déconnecté, elle vous permet ainsi de piloter l’ensemble du processus de descente d’informations Terrain et d’en maîtriser l’usage jusqu’au rendez-vous Client. \nVous êtes alors assurés que vos commerciaux diffusent le bon message, au bon moment, au bon client.',43),(24,'MASKOTT','47987571800039',NULL,'Education, formation professionnelle, culture & loisirs',44),(25,'BART compagnie','12345678906665',NULL,'tests',45),(26,'BOB cie','66666699999999',NULL,NULL,47),(29,'Dupont & Cie','456789900000000',NULL,NULL,53),(30,'admin','0998877665451234576345',NULL,NULL,2),(31,'bob2 Cie','34567890987654323456789',NULL,NULL,54),(32,'John Company','123123123123321',NULL,NULL,55);
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
INSERT INTO `company_activity_field` VALUES (4,1),(10,1),(20,1),(4,2),(9,2),(10,2),(21,2),(24,2),(26,2),(4,4),(5,4),(9,4),(10,4),(4,5),(9,5),(10,5),(13,5),(14,5),(19,5),(22,5),(23,5),(2,6),(4,6),(8,6),(9,6),(10,6),(12,6),(14,6),(23,6),(7,15),(11,15),(15,15),(23,15),(23,18),(25,18),(12,21),(13,24),(25,24),(25,25);
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
INSERT INTO `company_platform` VALUES (4,1),(5,1),(7,1),(9,1),(10,1),(13,1),(14,1),(15,1),(19,1),(20,1),(21,1),(23,1),(24,1),(25,1),(26,1),(5,3),(7,3),(9,3),(10,3),(15,3),(19,3),(21,3),(22,3),(24,3),(25,3),(26,3);
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
  CONSTRAINT `fk_corner_created` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corner`
--

LOCK TABLES `corner` WRITE;
/*!40000 ALTER TABLE `corner` DISABLE KEYS */;
INSERT INTO `corner` VALUES (1,'Santé','Sante-1','Description corner santé.',1,1442590959674,1454628325790,'logo-1.png'),(2,'Education','Education-2','Description corner éducation.',1,1442590959674,1454628325807,'logo-2.png'),(3,'Industrie','Industrie-3','Description corner industrie.',1,1442590959674,1454628325807,'logo-3.png'),(4,'Transverse','Transverse-4','Description corner transverse.',1,1442590959675,1454628325808,'logo-4.png'),(5,'Point de vente','Point-de-vente-5','Description corner retail.',1,1442590959674,1454628325808,'logo-5.png');
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
INSERT INTO `corner_keyword` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(2,6),(2,7),(1,8),(2,9),(2,10),(3,11),(3,12),(3,13),(3,14),(4,14),(2,15),(3,16),(4,17),(4,18),(4,19),(4,20),(4,21),(4,23),(5,24),(5,25),(1,26);
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
INSERT INTO `editor_highlight_product` VALUES (10,21,1),(12,21,3),(13,21,2),(45,6,1),(46,6,3),(50,6,2),(58,9,2),(65,9,1),(66,43,1),(67,41,1);
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `external_workflows`
--

LOCK TABLES `external_workflows` WRITE;
/*!40000 ALTER TABLE `external_workflows` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `general_setting`
--

LOCK TABLES `general_setting` WRITE;
/*!40000 ALTER TABLE `general_setting` DISABLE KEYS */;
INSERT INTO `general_setting` VALUES (1,'seo:title','Mobility for Work'),(2,'seo:description','HP Mobility for Work est une ‘Place de Marché’ destinée à fédérer un écosystème d’acteurs de la mobilité professionnelle autour des produits mobiles d’HP.'),(3,'seo:tagline','Fédérez les acteurs de la mobilité professionnelle');
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
  `mainPicture` varchar(100) DEFAULT NULL,
  `content` text,
  `detailPagePicture` varchar(100) DEFAULT NULL,
  `buttonText` varchar(45) DEFAULT 'More',
  `link` varchar(200) DEFAULT NULL,
  `secondaryPictureALT` varchar(150) DEFAULT NULL,
  `mainPictureALT` varchar(150) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_carousel`
--

LOCK TABLES `home_carousel` WRITE;
/*!40000 ALTER TABLE `home_carousel` DISABLE KEYS */;
INSERT INTO `home_carousel` VALUES (1,'<h2 style=\"color: white;\">Fédérez les<br>acteurs de la<br>mobilité professionnelle</h2>','slide1Home.jpg','<h1>De quoi s’agit-il ?</h1><br><p>HP Mobility for Work est une ‘Place de Marché’ destinée à fédérer un écosystème d’acteurs de la mobilité professionnelle autour des produits mobiles d’HP.</p><p>Fournisseurs de matériels et accessoires dédiés, Editeurs Logiciels, fournisseurs de services d’assistance ou de conseil, formateurs, mais aussi partenaires revendeurs, cet écosystème a pour vocation de proposer des solutions adaptées aux usages de la mobilité, pour accélérer les échanges et permettre plus de productivité au quotidien.</p><br><h1>A chaque secteur d’activité ses solutions !</h1><ol><li>Santé</li><li>Industrie (Transport, BTP, Logistique…)</li><li>Point de vente</li><li>Education.</li><li>Solutions transverses</li></ol><br><p>Chacun de ces secteurs d’activité a sa spécificité. Les acteurs sont souvent ciblés et des contraintes matérielles, logicielles, ou de services leur sont propres.</p><p>HP Mobility for Work propose une sélection de partenaires et de solutions permettant de répondre à des usages métiers pour ces secteurs.</p><p>Trouvez la configuration adaptée à votre usage métier, ou complétez là grâce aux suggestions proposées par secteur d’activité !</p><p>ous pourrez également filtrer parmi les solutions par typologie de fiches produit (Matériel et Logiciel, Application mobile, Application SaaS, Service), par système d’exploitation, ou autre</p>','slide1Home.jpg','En savoir plus','/detail/1','HP Mobility for work Fédérez les acteurs de la mobilité professionnelle','HP Mobility for work Fédérez les acteurs de la mobilité professionnelle',1),(2,'<h2 style=\"color: white;\">Rejoignez-nous !</h2>','slide2Home.jpg','<h1>Vous souhaitez devenir partenaire sur la MarketPlace HP ?</h1><h3>Créez un compte et candidatez simplement avec<a href=\"#N\" data-toggle=\"modal\" data-target=\"#createAccountModal\" data-selected-account-type=\"appsVendor\"> notre formulaire</a> en ligne. HP étudiera avec attention votre profil et votre solution :</en></h3><br><p><b>Fournisseur d’accessoires ou de solutions matérielles :</b> vous disposez d’un chariot roulant spécifique, d’un adaptateur ou étui innovant, d’un objet connecté, ou tout autre accessoire qui vous semble incontournable pour les produits mobiles professionnels d’HP dans ses secteurs d’activité, proposez les nous ! Votre solution est peut-être celle qui nous manque !</p><p><b>Editeur Logiciel indépendant (ISV) :</b> Apps ou Solution de type Cloud ou en mode ‘as-a-Service’, HP vous attend si votre proposition de valeur est axée sur un cas d’usage métier pour la mobilité et en adéquation avec les produits professionnels d’HP. Encouragez les professionnels à engager la transition vers un usage adapté, en mobilité quotidienne.</p><p><b>Société de Services ou de Conseil :</b> Vous avez une expertise reconnue ou novatrice à destination des métiers, pour valoriser l’usage des produits HP ou son implication dans la transformation digitale, proposez nous une collaboration et le moyen de créer des offres communes au travers de fiche solutions simples et dédiées.</p><br><h1>Faire partie d’HP Mobility for Work c’est :</h1><br><ol><li><b>Monter un Business Plan conjoint avec HP</b> pour développer la vente d’une offre solution sectorielle commune</li><br><li><b>Valoriser la marque HP et celle du partenaire</b> au travers de ce partenariat</li><br><li><b>Stimuler le marché mobile professionnel</b> en proposant des exemples de solutions métiers adaptées</li><br><li><b>Elaborer un plan d\'engagement solide entre HP et le partenaire</b> pour se faire connaitre ensemble, enrichir ses offres et les promouvoir.</li></ol>','slide2Home.jpg','En savoir plus','/detail/2','HP Mobility for work','HP Mobility for work',1),(3,'<h2 style=\"color: white;\">Actualité Mobilité chez HP ?</h2>','slide3Home.jpg',NULL,'slide3Home.jpg','En savoir plus','http://h30657.www3.hp.com/t5/HP-BusinessNow-France/bg-p/HPBusinessReadyFrance/label-name/Mobilité?labels=Mobilité','HP Mobility for work Actualité Mobilité chez HP ?','HP Mobility for work',1),(4,'<span style=\"display:block;color:black;font-size:30px;font-weight:bold;\"><span>Tablette ou Ultrabook</span><br><span>Pourquoi pas le deux?</span><br><span style=\"font-size:20px;font-weight:lighter;\">L\'ordinateur qu\'il vous faut où que vous soyez</span></span>','slide4Home.jpg','<img src=\"/public/uploads/hp/carousel/infoMs.png\" alt=\"Microsoft HP\" style=\"display:block;margin-left:auto;margin-right:auto\"/>','bannerMS.png','En savoir plus','/detail/4','HP Mobility for work Microsoft Tablette our Ultrabook','HP Mobility for work Microsoft Tablette our Ultrabook',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_resource`
--

LOCK TABLES `item_resource` WRITE;
/*!40000 ALTER TABLE `item_resource` DISABLE KEYS */;
INSERT INTO `item_resource` VALUES (1,'image/jpeg','1.JPG','IMG_1006.JPG','IMG_1006.JPG',1457369276787,0,NULL),(2,'image/png','2.png','logo intuiteev.png','logo intuiteev.png',1457369293485,0,NULL),(3,'image/png','3.png','User.png','User.png',1457369316987,0,NULL),(4,'image/jpeg','4.jpg','conteneurs-684x250.jpg','conteneurs-684x250.jpg',1459934802395,0,NULL),(5,'image/png','5.png','Capture d’écran 2016-04-06 à 11.26.55.png','Capture d’écran 2016-04-06 à 11.26.55.png',1459934946393,0,NULL),(6,'image/jpeg','6.jpg','1a59fe2.jpg','1a59fe2.jpg',1459934969779,0,NULL),(7,'image/png','7.png','Cercle.png','Cercle.png',1461245506522,0,NULL),(8,'image/png','8.png','fleche rouge.png','fleche rouge.png',1463146698819,0,NULL),(9,'image/jpeg','9.jpg','this-is-true-this-is-truth-square-circle-please-consider-before-talking-typing.jpg','this-is-true-this-is-truth-square-circle-please-consider-before-talking-typing.jpg',1463146702225,0,NULL),(10,'image/jpeg','10.JPG','IMG_0003.JPG','IMG_0003.JPG',1463146749355,0,NULL),(11,'image/png','11.png','hp_logo.png','hp_logo.png',1463147752937,0,NULL),(12,'image/png','12.png','logo-5.png','logo-5.png',1463147768349,0,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
INSERT INTO `keyword` VALUES (25,'approvisionnement'),(16,'btp'),(10,'classe numérique'),(11,'construction'),(18,'divers'),(26,'dpii'),(7,'e-learning'),(6,'education'),(2,'had'),(3,'hôpital'),(5,'infirmier'),(14,'innovation'),(12,'logistique'),(19,'MAM'),(23,'MCM'),(17,'MDM'),(1,'médecine'),(9,'pédagogie'),(8,'pharmacie'),(24,'retail'),(15,'scolarité'),(20,'sécurité'),(21,'signature numérique'),(4,'télémédecine'),(27,'test'),(13,'transport');
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language`
--

LOCK TABLES `language` WRITE;
/*!40000 ALTER TABLE `language` DISABLE KEYS */;
INSERT INTO `language` VALUES (1,NULL,'en'),(2,NULL,'fr'),(6,NULL,'es');
/*!40000 ALTER TABLE `language` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (4,31,'jprudhomme@mobileiron.com','M','Jean Christophe','Prudhomme',NULL,'MobileIron','Je souhaite des renseignements','test envoi contact en mode draft',1443087682434,1443087707000),(5,8,'j.barthes@transfair.fr','M','Jacques','Barthes',NULL,'www.transfair.fr','Je souhaite des renseignements','Je suis intéressé par votre tablette médicale pouvez-vous me dire si on peut la trouver dans une autre langue que le français?\r\nMerci',1446547444674,NULL),(6,NULL,'damien.laigre@hp.com','F','sdjhsdfk','fdsdfs','dfg','dfg','Je souhaite des renseignements',NULL,1444050532996,1444050700000),(7,NULL,'jerome.sepeau@richdistrib.com','M','Jerome','SEPEAU','0667090887','Mobile R2D2','Je souhaite des renseignements','Bonjour\r\n\r\nJe vous ai soumis il y a quelques semaines une demande pour être partenaire et je n\'ai reçu aucun retour de votre part.\r\nPouvez-vous me faire un retour?\r\nMerci\r\nCordialement, \r\n\r\nJérôme SEPEAU\r\nMobile R2D2 \r\n',1450099461584,NULL),(8,NULL,'jerome.sepeau@richdistrib.com','M','Jerome','SEPEAU','0667090887','Mobile R2D2','Je souhaite des renseignements','Bonjour\r\n\r\nJe reviens vers vous car je n\'ai eu aucun retour à es deux demandes précédentes \r\nPouvez-vous me contacter?\r\n\r\nMerci \r\nCordialement, \r\n\r\nJérôme SEPEAU',1450278226423,NULL),(9,NULL,'jerome.sepeau@richdistrib.com','M','Jerome','SEPEAU','0667090887','Mobile R2D2','Je souhaite des renseignements','Bonjour\r\n\r\nJe reviens vers vous car je n\'ai eu aucun retour à es deux demandes précédentes \r\nPouvez-vous me contacter?\r\n\r\nMerci \r\nCordialement, \r\n\r\nJérôme SEPEAU',1450278233007,NULL),(10,15,'ttamrane@telelogos.com','F','tamrane','tarek','0241227004','TELELOGOS','Je souhaite avoir un devis','Bonjour,\nMerci de me faire une cotation pour 100 devices',1455197470905,NULL);
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
  `id_role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission_role`
--

LOCK TABLES `permission_role` WRITE;
/*!40000 ALTER TABLE `permission_role` DISABLE KEYS */;
INSERT INTO `permission_role` VALUES ('EDIT_ARTICLE',3),('VALIDATE_PUBLICATION_ARTICLE',3),('UNPUBLISH_ARTICLE',3),('PUBLISH_ARTICLE',3),('DELETE_ARTICLE',3),('EDIT_PRODUCT',3),('VALIDATE_PUBLICATION_PRODUCT',3),('PUBLISH_PRODUCT',3),('UNPUBLISH_PRODUCT',3),('DELETE_PRODUCT',3),('CREATE_BUNDLE',3),('EDIT_BUNDLE_OWN',3),('PUBLISH_BUNDLE_OWN',3),('UNPUBLISH_BUNDLE_OWN',3),('DELETE_BUNDLE_OWN',3),('CREATE_CORNER',3),('EDIT_CORNER',3),('DELETE_CORNER',3),('EDIT_USER_CORNER',3),('EDIT_USER_ROLE',3),('EDIT_ROLES_PERMISSION',3),('CREATE_ROLES',3),('READ_USERS',3),('CREATE_USER',3),('READ_USERS_DETAILS',3),('CREATE_PRODUCT',2),('EDIT_USER',3),('EDIT_PRODUCT_OWN',2),('REQUEST_PUBLICATION_PRODUCT',2),('UNPUBLISH_PRODUCT_OWN',2),('DELETE_PRODUCT_OWN',2),('EDIT_USER_CORNER_OWN',2),('EDIT_ARTICLE_OWN',4),('REQUEST_PUBLICATION_ARTICLE',4),('UNPUBLISH_ARTICLE_OWN',4),('DELETE_ARTICLE_OWN',4),('CREATE_ARTICLE',4),('EDIT_USER_CORNER_OWN',4),('EDIT_BUNDLE',3),('VALIDATE_PUBLICATION_BUNDLE',3),('PUBLISH_BUNDLE',3),('UNPUBLISH_BUNDLE',3),('DELETE_BUNDLE',3),('CREATE_PRODUCT',6),('EDIT_PRODUCT_OWN',6),('REQUEST_PUBLICATION_PRODUCT',6),('UNPUBLISH_PRODUCT_OWN',6),('DELETE_PRODUCT_OWN',6),('EDIT_USER_CORNER_OWN',6),('CREATE_ASSIGNMENT',17),('VALIDATE_ASSIGNMENT',17),('CANCEL_PENDING_ASSIGNMENT_OWN',17),('REQUEST_VALIDATION_ASSIGNMENT_OWN',17),('EDIT_ASSIGNMENT_OWN',17),('CANCEL_PENDING_ASSIGNMENT',17),('ASSIGNMENTS_LIST_ALL_INFO',17),('ASSIGNMENTS_LIST_BASIC_INFO',1),('CHANGE_PRODUCT_OWNER',3),('REQUEST_PUBLICATION_PRODUCT',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platform`
--

LOCK TABLES `platform` WRITE;
/*!40000 ALTER TABLE `platform` DISABLE KEYS */;
INSERT INTO `platform` VALUES (3,'android'),(1,'windows');
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
  CONSTRAINT `fk_product_editor_logo` FOREIGN KEY (`editor_logo`) REFERENCES `resource` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_product_logo` FOREIGN KEY (`logo`) REFERENCES `resource` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_product_specification` FOREIGN KEY (`specification`) REFERENCES `resource` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `id_timeline_foreign_idx` FOREIGN KEY (`id_timeline`) REFERENCES `timeline` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Congé Intempéries BTP','Conge-Intemperies-BTP-1','MobileApp','deleted','1.5.2','Une solution simple et efficace pour gérer les congés de vos employés.','Siquis enim militarium vel honoratorum aut nobilis inter suos rumore tenus esset insimulatus fovisse partes hostiles, iniecto onere catenarum in modum beluae trahebatur et inimico urgente vel nullo, quasi sufficiente hoc solo, quod nominatus esset aut delatus aut postulatus, capite vel multatione bonorum aut insulari solitudine damnabatur.',8,1442590959673,1447792537433,NULL,'',4,NULL,'Depuis plus de 7 ans, nous avons développé des modules dédiés aux salariés, aux managers, aux contrôleurs de gestion et aux RH afin de supprimer les saisies et resaisies, le traitement manuel des process RH, et de disposer, en temps réel, d\'une information complète, fiable et consolidée. A ce jour, plusieurs centaines de milliers de collaborateurs utilisent nos plates-formes technologiques de dématérialisation des process RH afin de faire ses demandes de congés, ses notes de frais, ses feuilles de temps... Pour seulement quelques minutes par mois en toute sécurité, ce qui permet aux collaborateurs, au management, aux acteurs RH de se libérer du temps afin de se focaliser sur son cœur de métier ! Plusieurs prix et/ou reconnaissances internationales ont validés la simplicité et la globalité d\'utilisation de nos SIRH : Cool Vendor 2013 par Gartner, Trophée des SIRH 2012, FAST 50 Deloitte.',NULL,'','',NULL,NULL,1,NULL),(2,'Horsys','Horsys-2','MobileApp','deleted','0.1.0','Gérer simplement les heures travaillées de vos équipes.','Hoc inmaturo interitu ipse quoque sui pertaesus excessit e vita aetatis nono anno atque vicensimo cum quadriennio imperasset. natus apud Tuscos in Massa Veternensi, patre Constantio Constantini fratre imperatoris, matreque Galla sorore Rufini et Cerealis, quos trabeae consulares nobilitarunt et praefecturae.',21,1442590959673,1447792537435,NULL,'',3,NULL,'Depuis plus de 7 ans, nous avons développé des modules dédiés aux salariés, aux managers, aux contrôleurs de gestion et aux RH afin de supprimer les saisies et resaisies, le traitement manuel des process RH, et de disposer, en temps réel, d\'une information complète, fiable et consolidée. A ce jour, plusieurs centaines de milliers de collaborateurs utilisent nos plates-formes technologiques de dématérialisation des process RH afin de faire ses demandes de congés, ses notes de frais, ses feuilles de temps... Pour seulement quelques minutes par mois en toute sécurité, ce qui permet aux collaborateurs, au management, aux acteurs RH de se libérer du temps afin de se focaliser sur son cœur de métier ! Plusieurs prix et/ou reconnaissances internationales ont validés la simplicité et la globalité d\'utilisation de nos SIRH : Cool Vendor 2013 par Gartner, Trophée des SIRH 2012, FAST 50 Deloitte.',NULL,'','',NULL,NULL,1,NULL),(3,'My awesome application','My-awesome-application-3','MaterialNDevice','deleted','1.0.0','','A description here',21,1442592317604,1447792537430,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(4,'Mon RH Manager','Mon-RH-Manager-4','MobileApp','deleted','0.1.6-alpha','L\'administration RH, c\'est simple !','La solution est simple d\'utilisation pour l\'ensemble des collaborateurs… Mon RH Manager nous apporte toute la visibilité sur les disponibilités des collaborateurs ce qui nous permet de gérer au mieux notre activité. L\'application simplifie nos démarches et nous apporte une meilleure organisation.<br>Jean François Mouffle, Directeur Général Deolan',21,1442590959673,1447792537438,NULL,'',69,NULL,'Depuis plus de 7 ans, nous avons développé des modules dédiés aux salariés, aux managers, aux contrôleurs de gestion et aux RH afin de supprimer les saisies et resaisies, le traitement manuel des process RH, et de disposer, en temps réel, d\'une information complète, fiable et consolidée. A ce jour, plusieurs centaines de milliers de collaborateurs utilisent nos plates-formes technologiques de dématérialisation des process RH afin de faire ses demandes de congés, ses notes de frais, ses feuilles de temps... Pour seulement quelques minutes par mois en toute sécurité, ce qui permet aux collaborateurs, au management, aux acteurs RH de se libérer du temps afin de se focaliser sur son cœur de métier ! Plusieurs prix et/ou reconnaissances internationales ont validés la simplicité et la globalité d\'utilisation de nos SIRH : Cool Vendor 2013 par Gartner, Trophée des SIRH 2012, FAST 50 Deloitte.',NULL,'','',NULL,NULL,1,NULL),(5,'teste','teste-5','MobileApp','deleted','1.0.0','Mettre en place un collecteur de souhaits','<p>A description here</p>',21,1442592012954,1447792537454,NULL,'',NULL,NULL,'<p>http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/http://theintuiteevmarketplace.com/</p>',NULL,'','',NULL,NULL,1,NULL),(6,'HP ElitePad 1000','HP-ElitePad-1000-6','MaterialNDevice','published','1.0.0','Plus que jamais parée pour travailler','<p>Plus qu\'une tablette, une solution métier complète. La tablette HP ElitePad 1000, élégante et raffinée, vous offre les performances et la flexibilité nécessaire pour transformer votre façon de travailler. Redéfinissez en toute légéreté et avec confiance la productivité de votre entreprise, grâce à l\'expertise HP en matière de gestion, de sécurité et de support</p><p>Saisie tactile, ou avec stylet, reconnaissance vocale , vous bénéficiez d\'une large panoplie d\'accessoires et de connectivité pour répondre à tous les usages professionnels.<br></p>',21,1442845317627,1468964656104,1453818810264,'',73,NULL,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http:/www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(7,'My awesome application','My-awesome-application-7','MobileApp','deleted','1.0.0','','A description here',21,1442849609360,1447792537457,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(8,'HP ElitePad 1000 Santé','HP-ElitePad-1000-Sante-8','MaterialNDevice','published','1.0.0','La tablette conçue pour le monde de la santé optimisée pour Windows','<p>Simplifiez vos workflows, optimisez vos interactions, gagnez en productivité et améliorez le contact avec vos patients grâce à la tablette HP ElitePad 1000 pensée pour le monde de la santé sous&nbsp;Windows, conçue en collaboration avec les professionnels de la santé et les hospitaliers.</p>',21,1442908187896,1447792537459,1445607284241,'',55,57,'<p></p><p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p><p></p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(9,'HP Pro x2 612','HP-Pro-x2-612-9','MaterialNDevice','published','1.0.0','Le détachable conçu pour le monde de l\'entreprise','<p>Grâce à sa tablette de 12,5 pouces et son processeur Intel de la famille Core i, ainsi que de nombreuses interfaces de classe d\'entreprise, ce détachable bénéficie de toutes les qualités nécessaires à un PC professionnel ET en même temps à une tablette de premier ordre.</p><p>Bénéficiant d\'une large gamme d\'accessoires, cet ordinateur hybride est l\'atout des entreprises souhaitant se lancer dans le monde de la mobilité.<br></p>',21,1442909179023,1447792537463,1445607082265,'',93,95,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(10,'HP Elite x2 1011','HP-Elite-x2-1011-10','MaterialNDevice','deleted','1.0.0','Un alliage de performance et d’élégance dans un format ultra mobile.','<p>Le HP Elite x2 1011 est un PC hybride détachable haut de gamme. Sa technologie permet de couvrir l\'usage d\'une grande tablette et d\'un ultrabook performant doté de Processeur Intel® Core™ M.</p><p>Equipé de mémoire et de stockage ultra rapides, il offre également des interfaces de connectivité d\'entreprise haut de gamme et une sécurité optimale pour les exigences les plus fortes.</p><p>Avec sa large gamme d\'accessoires innovants, votre bureau vous accompagne en tout lieu, pour toujours plus d\'efficacité.<br></p>',21,1442908276746,1453813177734,1445607329138,'',23,18,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(11,'HP Pro Slate 12','HP-Pro-Slate-12-11','MaterialNDevice','published','1.0.0','La tablette Android grand format conçue pour les entreprises.','Travaillez désormais aussi efficacement en déplacement qu\'au bureau, grâce à la tablette professionnelle Android™ HP Pro Slate 12 équipée de dispositifs de sécurité de haut niveau, d\'un processeur Qualcomm Snapdragon de la gamme 800 et d\'un stylet intégré HP Duet Pen pour saisir simultanément vos données sur papier et sur l\'écran! <br>',21,1442909568037,1453813224187,1453818788032,'',6,8,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(12,'HP Pro Slate 8','HP-Pro-Slate-8-12','MaterialNDevice','published','1.0.0','La tablette Android ultra-mobile conçue pour les entreprises.','<p>Travaillez désormais aussi efficacement en déplacement qu\'au bureau, grâce à la tablette professionnelle Android™ HP Pro Slate 8 équipée de dispositifs de sécurité de haut niveau, d\'un processeur Qualcomm Snapdragon de la gamme 800 et d\'un stylet intégré HP Duet Pen pour saisir simultanément vos données sur papier et sur l\'écran! </p>',21,1442911119875,1453813267708,1453818786045,'',180,179,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(13,'HP Pro Tablet 10 EE','HP-Pro-Tablet-10-EE-13','MaterialNDevice','published','1.0.0','Pensée pour l\'éducation.','<p>Développez l\'enseignement 1:1 (1élève, 1 appareil) et organisez des cours personnalisés grâce à une tablette Windows® conçue pour favoriser l\'apprentissage et renforcée afin de répondre aux exigences d’une&nbsp; journée à l\'école. La tablette HP Pro Tablet 10 EE abordable est dotée d’outils pédagogiques et d’une connectivité flexible qui étend l\'enseignement au-delà de la salle de classe. Des services et une assistance de niveau professionnel aident également les enseignants à intégrer un nouveau style d’informatique à leurs cours.</p><br>',21,1442911706797,1447792537472,1445607333389,'',157,155,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>Vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(14,'HP Pro Slate 10 EE','HP-Pro-Slate-10-EE-14','MaterialNDevice','published','1.0.0','Pensée pour l\'éducation.','<p>Améliorez l\'enseignement 1:1 (1 élève, 1 appareil) et encouragez la participation des élèves grâce à la tablette Android™ conçue pour les écoles. Profitez de la mobilité et de la robustesse de la tablette HP Pro Slate 10 EE, dotée d’outils pédagogiques et d’une connectivité flexible qui étend l\'enseignement au-delà de la salle de classe. Des services et une assistance de niveau professionnel aident également les enseignants à intégrer un nouveau style d’informatique à leurs cours.</p>',21,1442922516059,1447792537474,1445607126416,'',85,80,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>Vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(15,'MediaContact - logiciel EMM','MediaContact---logiciel-EMM-15','MobileApp','published','5.9','MediaContact - Enterprise Mobility Management Software.','<p><b>MediaContact est un logiciel EMM (Enterprise Mobility Management) comprenant des fonctionnalités de :&nbsp;</b></p><p></p><ul><li><b style=\"line-height: 1.42857; background-color: initial;\">MDM (Mobile Device Management) &nbsp;</b><br></li><li><b style=\"line-height: 1.42857; background-color: initial;\">MAM (Mobile Application Management)&nbsp;</b><br></li><li><b style=\"line-height: 1.42857; background-color: initial;\">MCM (Mobile Content&nbsp;</b><b style=\"line-height: 1.42857; background-color: initial;\">Management)</b><br></li></ul><p></p><p><u>3 principaux atouts :</u></p><p><b>Un service pour les « applications métier embarquées »</b> : MediaContact répond aux besoins d’administration et de synchronisation des applications métier embarquées sur des terminaux mobiles, et qui doivent fonctionner 24h/24 en offline.</p><p><b>Une console d’administration permettant l’administration de flottes de terminaux mobiles hétérogènes</b> : Tablettes, Smartphones, PC portables, terminaux durcis…fonctionnant sous Windows, Android ou iOS.</p><p><b>Une haute performance des synchronisations de données</b> : MediaContact dispose d’un «moteur» de synchronisation très répandu et aux performances reconnues par des centaines d’entreprises utilisatrices.</p>',25,1442924908150,1468964794267,1446381948663,'',105,106,'<p>Créé il y a plus de  30 ans, TELELOGOS est un éditeur français et indépendant spécialisé dans le développement et la commercialisation de logiciels BtoB. Aujourd’hui, 350 000 licences sont utilisées par tous types d’entreprises, de la PME aux Grands Comptes, en France comme à l’international.</p><p>Ses 3 atouts majeurs :</p><p>-	Un spécialiste de l’infrastructure : TELELOGOS est un acteur historique de la synchronisation des données qui s’appuie sur une maitrise de tous les réseaux et un savoir-faire dans la gestion des terminaux fixes et mobiles, locaux et distants, la synchronisation des données sur des réseaux M2M.</p><p>-	Un réseau de partenaires : avec ses partenaires français et internationaux (intégrateurs, revendeurs, éditeurs), TELELOGOS propose un pack performant « clé en main », quel que soit le domaine d’activité des entreprises utilisatrices :</p><p><ul><li><span style=\"line-height: 1.42857; background-color: initial;\">entreprise</span><br></li><li><span style=\"line-height: 1.42857; background-color: initial;\">collectivité - lieu public - transport</span><br></li><li><span style=\"line-height: 1.42857; background-color: initial;\">réseaux points de vente - agences</span><br></li><li><span style=\"line-height: 1.42857; background-color: initial;\">université, enseignement</span><br></li></ul></p><p>- Les logiciels sont revendus en mode classique (achat de licences « On Premise »), en mode location et souscription, et en mode service SaaS (Cloud).</p>',NULL,'http://www.telelogos.com','',NULL,NULL,1,NULL),(16,'My awesome application','My-awesome-application-16','MobileApp','deleted','1.0.0','','A description here',21,1442924912436,1447792537478,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(17,'Essai HP','Essai-HP-17','MaterialNDevice','deleted','1.0.0','eeee','A description here',14,1442932233108,1447792537478,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(18,'My awesome application','My-awesome-application-18','MobileApp','deleted','1.0.0','','A description here',14,1442932602844,1447792537478,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(19,'HP Pro Tablet 408','HP-Pro-Tablet-408-19','MaterialNDevice','published','1.0.0','Quand la mobilité s\'allie à l\'accessibilité','<p>Avec son petit gabarit et son prix abordable la tablette HP Pro Tablet 408 est une tablette compagnon idéale sur le terrain pour un usage simple et efficace d\'entreprise. </p><p>Avec l\'environnement Windows, et grâce à ses capacités de saisie et sa gamme d\'accessoires, elle devient un outil incontournable pour aller à l\'essentiel et être plus productif au quotidien.<br></p>',21,1442932815016,1453813350320,1453818781955,'',88,92,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http://www.hp/go/businessmobility','',NULL,NULL,1,NULL),(20,'My awesome application','My-awesome-application-20','MobileApp','deleted','1.0.0','','A description here',21,1442932865410,1447792537478,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(21,'My awesome application','My-awesome-application-21','MobileApp','deleted','1.0.0','','A description here',14,1442932872639,1447792537478,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(22,'My awesome application','My-awesome-application-22','MobileApp','deleted','1.0.0','','A description here',3,1442934089485,1447792537478,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(23,'HP Pro Tablet 608','HP-Pro-Tablet-608-23','MaterialNDevice','published','1.0.0','Combinez mobilité et performance.','Restez connecté grâce à cette tablette ultra-fine et légère, format 8 pouces, aux atouts professionnels! <br><p>Dynamisez votre entreprise avec un accès rapide et fiable aux applications et une gamme d\'accessoires mobiles proposés en option pour vous aider à améliorer votre productivité.</p>',21,1442998044934,1453813474229,1453818830378,'',76,79,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(24,'My awesome application','My-awesome-application-24','MaterialNDevice','deleted','1.0.0','','A description here',21,1442999800991,1447792537478,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(25,'My awesome application toto','My-awesome-application-toto-25','MobileApp','deleted','1.0.0','','A description here',9,1444738912148,1459956340932,NULL,'',218,NULL,'',NULL,'','',NULL,NULL,1,NULL),(26,'My awesome application','My-awesome-application-26','MobileApp','deleted','1.0.0','','A description here',21,1445438191689,1447792537479,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(27,'HP x2 210','HP-x2-210-27','MaterialNDevice','published','1.0.0','Cinq modes polyvalents, un prix irrésistible.','<p>Qui veut d\'un périphérique limité à uneseule tâche ?</p><p> Lorsque votre travail demande de la flexibilité, vous devez vous doter d\'un ordinateur qui tienne le rythme. Conçu pour s\'adapter à votre façon de travailler, l\'ordinateur détachable HP polyvalent x2 210 offre cinq modes pour le prix d\'un.</p>',21,1445607784866,1453814564700,1445614344005,'',25,28,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP.</p>',NULL,'','http://www8.hp.com/us/en/solutions/mobility',NULL,NULL,1,NULL),(28,'My awesome application','My-awesome-application-28','MobileApp','deleted','1.0.0','','<p>A descriptioddgdfdfgn here</p>',21,1445616040372,1447792537479,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(29,'BulldozAIR','BulldozAIR-29','MobileApp','deleted','1.0.0','','A description here',4,1443019571278,1447792537478,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(30,'My awesome application','My-awesome-application-30','MobileApp','deleted','1.0.0','','A description here',21,1443018844722,1447792537478,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(31,'MobileIron','MobileIron-31','MobileApp','draft','1.0.0','Développez l\'activité de votre entreprise étendue grace aux mobile sans compromettre la sécurité','<p>Chez MobileIron, nous nous consacrons entièrement à la conception de solutions innovantes qui aident les organisations à adopter les technologies mobiles et cloud pour doper leur efficacité et leur croissance.</p><p>Travaillez en partenariat avec l\'équipe leader sur le marché de la mobilité en entreprise qui a déjà aidé plus de 9 000 organisations à passer avec succès au tout mobile.</p>',20,1443084410229,1447792537479,NULL,'',NULL,128,'<p>Chez MobileIron, nous nous consacrons entièrement à la conception de solutions innovantes qui aident les organisations à adopter les technologies mobiles et cloud pour doper leur efficacité et leur croissance.</p><p>Travaillez en partenariat avec l\'équipe leader sur le marché de la mobilité en entreprise qui a déjà aidé plus de 9 000 organisations à passer avec succès au tout mobile.</p>',NULL,'https://www.mobileiron.com/fr','',NULL,NULL,1,NULL),(32,'mon appli','mon-appli-32','MobileApp','deleted','1.0.0','','A description here',21,1443082757191,1447792537478,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(33,'MobileIron test','MobileIron-test-33','MobileApp','draft','1.0.0','Une infrastructure mobile pour  l\'entreprise moderne','<span style=\"line-height: 1.42857143;\">La plateforme EMM (Enterprise Mobility Management) de MobileIron est conçue pour sécuriser et gérer les applications et le contenu sur les différents systèmes d\'exploitation récents à l\'échelle de l\'entreprise. Elle prend en compte l\'identité, le contexte et les règles de confidentialité établies pour définir le niveau approprié d\'accès aux données et services des entreprises.</span><p>Uniformisez la configuration et les règles de sécurité dans toute votre organisation depuis une seule plateforme intégrée</p>',20,1443087904348,1447792537479,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(34,'Maileva','Maileva-34','SaaS','published','1.0.0','Gagnez en performance, confiez-nous tous vos envois !','<p>Créez, personnalisez et diffusez en ligne vos courriers, lettres recommandées, <span style=\"line-height: 1.4285;\">depuis une interface unique, en moins de 15 minutes et sans minimum de volume ! &nbsp;</span></p><p><span style=\"line-height: 1.4285;\"><br></span></p><p><span style=\"line-height: 1.4285;\">Avec Maileva, réalisez au moins 20 % d\'économies dès votre premier envoi.</span></p>',3,1443095096719,1447792537479,1447943522647,'',146,150,'<p>Maileva est une offre La Poste Solutions Business, archiveur labéllisé tiers de confiance par la FNTC, 100% de ses sites sont localisés en France.</p><p>&nbsp;Véritable acteur de référence et leader du marché depuis plus de 10 ans, aujourd\'hui,&nbsp;Maileva&nbsp;c’est :</p><p>•	15 000 clients,</p><p>•	54 000 utilisateurs,</p><p>•	1er centre de production page à page couleur en Europe,</p><p>•	7 imprimantes numériques XEROX IGEN 150,</p><p>•	6 centres de production en France et Outre-mer,</p><p>•	85 millions de pages produites par an.</p><p></p>',NULL,'http://www.maileva.com','http://www.maileva.com/mentions_legales.php',NULL,NULL,1,NULL),(35,'My awesome application','My-awesome-application-35','MobileApp','deleted','1.0.0','','A description here',20,1443113878615,1447792537479,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(36,'Solution EMM MobileIron','Solution-EMM-MobileIron-36','MobileApp','published','1.0.0','MobileIron propose des solutions de sécurité mobile qui donnent le champ libre aux organisations en toute simplicité.','<div><p><b><span style=\"line-height: 1.42857143;\">Les organisations cherchent actuellement à déployer une solution de gestion de la mobilité d\'entreprise évolutive pour répondre a leurs propres objectifs en&nbsp;</span><span style=\"line-height: 1.42857143;\">matière</span></b><span style=\"line-height: 1.42857143;\"><b>&nbsp;de compétitivité, de productivité et de sécurité.</b> Les smartphones et les tablettes ont transformé la manière dont les utilisateurs interagissent avec les applications et le contenu dans leur vie personnelle.&nbsp;</span><br></p></div><p><b>Les utilisateurs souhaitent bénéficier dans leur environnement professionnel de la même expérience mobile.</b> Pour répondre à cette demande, le département informatique doit fournir aux utilisateurs l\'accès aux applications et contenus professionnels stratégiques sur les appareils mobiles de leur choix, tout en préservant la confidentialité, la sécurité des données et la gestion centralisée des authentification et du contrôle d\'accès aux applications et contenus de l\'entreprise. Ce sur les appareils professionnels et personnels des utilisateurs.</p><p><b>En fournissant une solution de gestion de la mobilité d\'entreprise (EMM, Enterprise Mobility Management), sur site ou dans le cloud, qui répond à la fois aux exigences des utilisateurs et aux besoins des départements informatiques, MobileIron permet aux organisations de devenir réellement Mobile First.</b> La plateforme MobileIron permet aux responsables informatiques de sécuriser et de gérer les appareils, les applications et le contenu en offrant aux utilisateurs un accès instantané aux données d\'entreprise sur un appareil de leur choix. Grâce à cette plateforme EMM, les organisations peuvent consacrer plus de temps à l\'innovation et au développement de leurs activités et moins de temps à la sécurisation des appareils mobiles.</p><p><b>Nos clients peuvent choisir d\'utiliser notre plateforme dans le cadre d\'un service cloud ou de la déployer sur site.</b></p><p>Les services informatiques définissent des règles de conformité appliquées en temps réel sur les appareils, les accès aux backoffices et durant le transfert. Son extensibilité offre par ailleurs la possibilité à un vaste ensemble de développeurs et de fournisseurs de technologie d\'intégrer facilement la plateforme MobileIron dans l\'infrastructure informatique des entreprises.</p><p>Le cœur de la plateforme MobileIron se compose des éléments suivants : MobileIron Core, MobileIron Sentry. Cette plateforme professionnelle sécurise et gére les appareils, applications et contenus mobiles tout en permettant aux collaborateurs de choisir leur matériel, de protéger leurs données personnelles et de travailler dans un environnement qui leur convient.<br></p><p><br></p><p><br></p>',20,1443112326695,1447792537479,NULL,'',62,59,'<p>MobileIron sécurise les informations où qu\'elles se trouvent. En effet les informations professionnelles sont partout : dans les centres de données, dans le cloud, dans les applications mobiles, sur les appareils mobiles et en transit entre tous ces éléments. Ainsi est il nécessaire de garantir la sécurité des terminaux, des applications et des accès aux ressources clefs de votre système d\'information.</p>',NULL,'','',NULL,NULL,1,NULL),(37,'My awesome application','My-awesome-application-37','MobileApp','deleted','1.0.0','','A description here',6,1443702787718,1447792537479,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(38,'My awesome application','My-awesome-application-38','MobileApp','deleted','1.0.0','','A description here',3,1443705517592,1447792537479,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(39,'My awesome application','My-awesome-application-39','MobileApp','deleted','1.0.0','','A description here',9,1448378125850,NULL,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(40,'My awesome application','My-awesome-application-40','MobileApp','deleted','1.0.0','','A description here',21,1444384578912,1447792537479,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(41,'HP Pro Slate / Pro Tablet - Etuis dédiés','HP-Pro-Slate-/-Pro-Tablet---Etuis-dedies-41','MaterialNDevice','published','1.0.0','A chaque métier son étui dédié.','<p>Une palette&nbsp; complète d\'étuis de protection ou d\'extension pour les&nbsp; tablettes de la gamme HP Pro Slate et HP Pro Tablet.</p><p>Trouver la réponse à vos besoins métiers au quotidien:</p><p>- HP Rugged Case: étui durci</p><p>- HP Smart Cover Case: étui confort et flexible</p><p>- HP Keyboard Case: étui Bluetooth ou avec Pogo Pin (suivant modèle) pour clavier intégré</p><p>etc...<br></p>',21,1443178775726,1447792537479,1445607059803,'',42,NULL,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>Vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(42,'HP ElitePad 1000 -  Etuis et Coques Spécifiques','HP-ElitePad-1000----Etuis-et-Coques-Specifiques-42','MaterialNDevice','deleted','1.0.0','A chaque métier sa coque ou son étui dédiée.','Une gamme de coque complète pour le HP ElitePad 1000 afin de trouver la réponse à tous vos problèmes du quotidien.<br><p><a href=\"http://store.hp.com/FranceStore/Merch/Product.aspx?id=J6T90AW&amp;opt=ABF&amp;sel=TBL\"><span data-href=\"http://store.hp.com/FranceStore/Merch/Product.aspx?id=J6T90AW&amp;opt=ABF&amp;sel=TBL\" data-auto-link=\"true\"><br></span></a></p>',21,1443175942131,1447792537479,NULL,'',31,NULL,'<p>\"La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>Vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(43,'Stations d\'accueil pour tablettes HP','Stations-d\'accueil-pour-tablettes-HP-43','MaterialNDevice','published','1.0.0','De retour au bureau, votre tablette sur sa station d\'accueil','Retrouvez toutes les connectiques nécessaires pour plus de productivité au bureau sur les stations d\'accueil pour tablettes professionnelles d\'HP.<br><p>Simples, optimales et portables, les stations d\'accueil ont été conçues pour s\'adapter à votre mobilité.<br></p>',21,1443188196435,1453814179464,1453818801346,'',46,NULL,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>Vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(44,'Stylets et Adaptateurs HP','Stylets-et-Adaptateurs-HP-44','MaterialNDevice','published','1.0.0','Les stylets et adaptateurs nécessaires à votre usage','<p>Découvrez la gamme complète de stylets et d\'adaptateurs HP pour les tablettes et détachables professionnels.</p><p>Gagnez en précision et offrez à votre produit l\'accès au périphérique qu\'il vous faut. <br></p>',21,1443184173122,1447792537479,1445607054655,'',101,NULL,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>Vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(45,'Signature électronique de documents à valeur probante','Signature-electronique-de-documents-a-valeur-probante-45','Service','published','1.0.0','Signature électronique omnicanal','<p>Grâce à nos solutions, vous pouvez signer tous types de documents de façon entièrement dématérialisée en ligne ou en mobilité.</p><h2>La valeur légale du document est garantie, par la <b>signature électronique</b>, la constitution d’un dossier de preuve et sa conservation intègre dans le temps.  </h2><p>Vous améliorez ainsi le service rendu, et gagnez en efficacité commerciale et/ou opérationnelle.  </p><p>Solution destinée aux intégrateurs, éditeurs et aux grandes entreprises.</p>',6,1443703722155,1447792537479,1447056215939,'',190,NULL,'<p><b>Morpho (Safran) est un leader mondial des solutions de sécurité et d\'identité destinées à un monde de plus en plus numérique et connecté.</b></p><h2>Nous développons des solutions innovantes d’authentification biométrique (empreintes, visage, iris, …), de sécurisation des transactions en ligne grâce à la <b>signature électronique</b> et d’archivage à vocation probante.&nbsp;</h2><h3>Nous aidons nos clients à sécuriser les processus numériques, à répondre aux contraintes réglementaires et à innover pour améliorer le service et l\'efficacité.&nbsp;</h3><h4>Nos solutions et services sont éprouvés dans des contextes d’utilisation variés et sont certifiés selon les standards de sécurité internationaux les plus exigeants.</h4>',NULL,'http://www.morpho.com/fr','http://www.morpho.com/fr/informations-legales-politique-de-confidentialite',NULL,NULL,1,NULL),(46,'Coffre-fort électronique, Archivage et Traçabilité','Coffre-fort-electronique,-Archivage-et-Tracabilite-46','Service','published','1.0.0','Sécurisez la conservation de vos documents numériques','<h2><span style=\"line-height: 1.42857143;\">L\'<b>archivage électronique</b> sécurisé dans un coffre-fort numérique vous permet de protéger vos données dans le temps : en garantir l’intégrité  et en assurer  la restitution intacte pour qu\'elles puissent constituer un élément de preuve.</span></h2><div><p><br></p><p>Solution destinée aux intégrateurs, aux éditeurs et aux grandes entreprises.</p></div>',6,1443789342957,1447792537479,1447056219758,'',115,NULL,'<p><b>Morpho (Safran) est un leader mondial des solutions de sécurité et d\'identité destinées à un monde de plus en plus numérique et connecté.</b></p><h2>Nous développons des solutions innovantes d’authentification biométrique (empreintes, visage, iris, …), de sécurisation des transactions en ligne grâce à la signature électronique et d’<b>archivage à vocation probante</b>.&nbsp;</h2><h3>Nous aidons nos clients à sécuriser les processus numériques, à répondre aux contraintes réglementaires et à innover pour améliorer le service et l\'efficacité.&nbsp;</h3><h4>Nos solutions et services sont éprouvés dans des contextes d’utilisation variés et sont certifiés selon les standards de sécurité internationaux les plus exigeants.</h4>',NULL,'http://www.morpho.com/fr','http://www.morpho.com/fr/informations-legales-politique-de-confidentialite',NULL,NULL,1,NULL),(47,'BulldozAIR','BulldozAIR-47','MobileApp','published','2.1.7','Application de gestion de projet qui facilite la collaboration entre le bureau et le terrain','<p>BulldozAIR est une application web et mobile qui organise visuellement le travail des équipes à distance.<br></p><p><span style=\"line-height: 1.42857;\">Vos équipes ont la liste des tâches à réaliser sur l\'application et les comprennent mieux grâce à des photos, croquis et localisations. BulldozAIR vous permet de mieux piloter visuellement vos projets, même au bureau, et de générer automatiquement vos rapports d\'activité.</span><br></p>',4,1444640623976,1447792537479,NULL,'',48,NULL,'<p>BulldozAIR a été conçu par des ingénieurs travaux qui ont exercé leur métier en tant que conducteur de travaux sur de grands chantiers de construction et de réhabilitation.</p>',NULL,'http://www.bulldozair.com','http://www.bulldozair.com',NULL,NULL,1,NULL),(48,'HP ElitePad 1000 Rugged Tablet','HP-ElitePad-1000-Rugged-Tablet-48','MaterialNDevice','published','1.0.0','L\'ElitePad 1000 devient une tablette durcie','<p>Restez productif au bureau et en mobilité grâce à la tablette durçie HP ElitePad 1000, une solution métier complète Windows® conçue pour vous suivre partout et supporter vos activités en conditions les plus difficiles... tout au long de la journée.</p>',21,1443433893958,1468964824656,1445607210260,'',154,135,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(49,'Maileva','Maileva-49','SaaS','pending','1.0.0','Gagnez en performance, confiez-nous tous vos envois !','<p>Vous êtes acteur dans le secteur de l\'industrie ? BTP, Transport ...</p><p>Créez, personnalisez et diffusez en ligne vos courriers, lettres recommandées, depuis une interface unique, en moins de 15 minutes et sans minimum de volume !</p><p>Réalisez tous vos envois de documents :</p><ul><li>planning de rendez-vous, réception de chantier,</li><li>contrat, devis, bon de commandes, </li><li>propositions commerciales,</li><li>bordereaux de livraison,</li><li>états de stocks, </li><li>gestion des factures, relances, paie, comptabilité ...</li></ul><p>&nbsp;</p><p><font color=\"#ffffff\" style=\"background-color: rgb(66, 79, 84);\"></font>&nbsp;</p><p>&nbsp;</p>',3,1444136309665,1447792537479,NULL,'',36,NULL,'<p>&nbsp;Maileva est une offre La Poste Solution Business, archiveur labéllisé tiers de confiance par la FNTC, 100% de ses sites sont localisés en France.</p><p>Véritable acteur de référence et leader du marché plus de 10 ans, aujourd\'hui, Maileva c\'est:</p><ul><li>15 000 clients,</li><li>54 000 utilisateurs,</li><li>7 imprimantes numériques XEROX IGEN 150,</li><li>1er centre de production page à page couleur en Europe,</li><li>6 centres de production en France métropolitaine et Outre-mer,</li><li>85 millions de pages produites par ans.</li></ul><p>&nbsp;</p><p><font color=\"#ffffff\" style=\"background-color: rgb(66, 79, 84);\"></font>&nbsp;</p>',NULL,'http://www.maileva.com','http://www.maileva.com/mentions_legales.php',NULL,NULL,1,NULL),(50,'Authentification forte','Authentification-forte-50','Service','published','1.0.0','Sécurisez les identités et les accès','<p>Vous offrez une multitude de services en ligne à vos utilisateurs et clients.&nbsp;</p><p>Cela offre des opportunités formidables, mais pose aussi de grands défis en termes de sécurité : fraude, respect de la vie privée, confidentialité …&nbsp;</p><h2>Morpho offre des solutions d’<b>authentification forte</b>, pour prouver avec certitude qui l’on est, afin d’accéder à un service ou de réaliser une transaction en ligne. </h2><p>Solution destinée aux intégrateurs, aux éditeurs et aux grandes entreprises</p>',6,1443793896066,1447792537479,1447056223683,'',122,NULL,'<p><b>Morpho (Safran) est un leader mondial des solutions de sécurité et d\'identité destinées à un monde de plus en plus numérique et connecté.&nbsp;</b></p><h2>Nous développons des solutions innovantes d’<b>authentification biométrique</b> (empreintes, visage, iris, …), de sécurisation des transactions en ligne grâce à la signature électronique et d’archivage à vocation probante.&nbsp;</h2><h3>Nous aidons nos clients à sécuriser les processus numériques, à répondre aux contraintes réglementaires et à innover pour améliorer le service et l\'efficacité.&nbsp;</h3><h4>Nos solutions et services sont éprouvés dans des contextes d’utilisation variés et sont certifiés selon les standards de sécurité internationaux les plus exigeants.</h4>',NULL,'http://www.morpho.com/fr','http://www.morpho.com/fr/informations-legales-politique-de-confidentialit',NULL,NULL,1,NULL),(51,'Maileva','Maileva-51','SaaS','pending','1.0.0','Gagnez en performance, confiez-nous tous vos envois !','<p> Vous êtes acteur&nbsp;dans le secteur de la santé ?&nbsp;</p><p>Aide aux familles, soins à domicile, portage de repas, garde d\'enfants ...</p><p>Créez, personnalisez et diffusez en ligne vos courriers, lettres recommandées, depuis une interface unique, en moins de 15 minutes et sans minimum de volume !</p><p>Réalisez tous vos envois de documents :</p><p>Planification :</p><ul><li>modification des interventions, prise de rendez-vous,</li><li>plannings, gestion du temps de travail.</li></ul><p>&nbsp;</p><p>Gestion de la relation client:</p><ul><li>prospection, devis, prise en charge, </li><li>enquêtes de satisfaction.</li></ul><p>&nbsp;</p><p>Administration &amp; Facturation:</p><ul><li>envoi de bulletins de paie, attestation fiscales,</li><li>&nbsp;gestion des impayés ....<br></li></ul><p>&nbsp;</p>',3,1444124549600,1447792537479,NULL,'',99,NULL,'<p>Maileva est une offre La Poste Solutions Business, archiveur labéllisé tiers de confiance par la FNTC, 100% de ses sites sont localisés en France.</p><p> Véritable acteur de référence et leader du marché depuis plus de 10 ans, aujourd\'hui, Maileva c’est :</p><p>&nbsp;</p><ul><li>&nbsp;15 000 clients,</li><li>&nbsp;54 000 utilisateurs,</li><li>&nbsp;7 imprimantes numériques XEROX IGEN 150,</li><li>&nbsp;1er centre de production page à page couleur en Europe,</li><li>&nbsp;6 centres de production en France métropolitaine et Outre-mer,</li><li>&nbsp;85 millions de pages produites par an.</li></ul>',NULL,'http://www.maileva.com','http://www.maileva.com/mentions_legales.php',NULL,NULL,1,NULL),(52,'My awesome application','My-awesome-application-52','MobileApp','deleted','1.0.0','','A description here',4,1444641589576,1447792537479,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(53,'HP Touchpoint Manager','HP-Touchpoint-Manager-53','MobileApp','published','1.0.0','Gérez votre parc informatique plus simplement!','<p>HP Touchpoint Manager est une application puissante basée sur le Cloud qui vous aide à optimiser votre productivité en simplifiant vos tâches informatiques quotidiennes, quels que soient les périphériques, les marques ou les systèmes d\'exploitation utilisés.</p><p>Téléchargez une version d\'essai gratuite pendant 1 mois!...<br></p>',21,1444657303265,1453814250482,1453818800110,'',166,168,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(54,'HP Classroom Manager','HP-Classroom-Manager-54','MobileApp','published','2.0.0','Contrôlez votre classe, gérez les périphériques de vos élèves et encouragez la collaboration.','<p>Prenez le contrôle de votre salle de classe et gérez les tablettes, PC, ou encore Chromebooks de vos élèves grâce à HP Classroom Manager 2.0. <br></p><p>Profitez d\'une expérience intuitive et facilement accessible grâce à une panoplie d\'outils numériques conçus pour redéfinir la salle de classe numérique, prévenir les distractions et renforcer l\'apprentissage des élèves.</p>',21,1444725943586,1447792537479,1445544100629,'',177,169,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP.</p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(55,'My awesome application','My-awesome-application-55','MobileApp','deleted','1.0.0','','A description here',21,1446107481842,1447792537479,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(56,'dkfdzehrhzkhrzkjehrekjhrezkjhrkzejhkzrejrhekjrhekjrhezkj','dkfdzehrhzkhrzkjehrekjhrezkjhrkzejhkzrejrhekjrhekjrhezkj-56','MobileApp','deleted','1.0.0','','A description here',9,1446471807011,1447792537479,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(57,'My awesome application','My-awesome-application-57','MobileApp','deleted','1.0.0','','A description here',9,1451907759418,NULL,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(58,'JP-2','JP2-58','MaterialNDevice','draft','1.0.0','','A description here',9,1451907767590,1459947362191,NULL,'',216,217,'',NULL,'','',NULL,NULL,1,NULL),(59,'HP Elite x2 1012','HP-Elite-x2-1012-59','MaterialNDevice','published','1.0.0','Conçus pour les pros, adopté par tous.','<p>Avec le HP Elite x2 1012, la beauté et la puissance vont au-delà de vos attentes. Ce robuste 2-en-1 doté d\'un stylet et de claviers haute précision rétro-éclairés allie puissance et design pour répondre aux exigences du monde de l\'entreprise.</p><p>Processeurs Intel 6ème génération Core M pour gagner en autonomie et performance sans ventilateur, sans bruit.<br></p><p>Un choix haut de gamme avec un chassis en aluminium, l\'audio Bang &amp; Olufsen, et la qualité HP professionnelle avec ses tests conformes aux normes Mil-Std 810 G.</p><p>Le meilleur de la sécurité HP avec des fonctionalités avancées et optionnelles (TPM2, HP Sure Start, lecteur d\'emprunte ou Smart Card...) sans oublier des options de connectivité de dernière génération (4G, stations d\'accueil USB-C thunderbolt ou Wigig sans fil).</p><p>La mobilité optimisée pour les pros!<br></p>',21,1453730167944,1468965165007,1453818831963,'',137,136,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',NULL,'http://www.hp.com/','',NULL,NULL,1,NULL),(60,'Accessoires HP ElitePad 1000','Accessoires-HP-ElitePad-1000-60','MaterialNDevice','published','1.0.0','Les  accessoires spécifiques Elitepad, pour optimiser les besoins métiers','<p><u>Etui Productivity Jacket</u>: Protection élégante, dotée de connectiques supplémentaires et permettant de retrouver le confort d’un clavier traditionnel intégré.<u><br></u></p><p><u>Etui Expansion Jacket&nbsp;</u> : connectivité et autonomie record grâce à la batterie supplémentaire et les connecteurs additionnels<br></p><p><u>Etui Security Jacket</u> : Pour protéger vos données grâce au lecteur Smart Card et lecteur d’empreintes digitales.</p><p><u>Etui Durci</u>: Protection renforcée pour les environnements les plus difficiles (chantiers, entrepôts, milieu industriel).</p><p><u>Adaptateurs Elitepad:</u> A chaque périphérique son adaptateur.</p><u>Station d\'accueil</u>: De retour au bureau, connectez un écran et tous les périphériques classiques (VGA, RJ45, USB etc.).<u><br></u><br><p><u>Solution point de vente ElitePad (Station d\'accueil et étui dédié)</u>: scanner de code barre 1D/2D, lecteur MSR, batterie supplémentaire en option, intégrable sur station et conçue pour optimiser l’interaction client/vendeur sur la surface de vente.</p>',21,1443171982250,1453813568813,1453818793240,'',161,NULL,'<p>\"La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>',163,'http://http://www8.hp.com/fr/fr/solutions/mobility/overview.html?jumpid=ba_nmihfwj8ebl','',NULL,NULL,1,NULL),(61,'HP Mobile Connect','HP-Mobile-Connect-61','Service','published','1.0.0','Un plan d\'accès haut débit où que vous soyez','<p>HP Mobile Connect est un service mobile haut débit sans engagement contractuel, payable à l’utilisation, entièrement intégré dans certains modèles de tablettes et d’ordinateurs portables HP. <br></p><p>Grâce au service mobile haut débit payable à l’utilisation HP Mobile Connect, vous bénéficiez d’une couverture étendue, rentable et sécurisée, et ce, dans plus d’endroits. <br></p>',21,1444722322650,1453814413840,1453818826703,'',111,108,'<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l\'adoption de scénarios BYOD ; c\'est surtout la possibilité d\'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP.</p>',NULL,'http://www.hp.com/go/businessmobility','',NULL,NULL,1,NULL),(62,'Click and collect : gestion et reception de colis','Click-and-collect-:-gestion-et-reception-de-colis-62','MobileApp','published','1.0.0','Application mobile de gestion et réception de colis (click and collect) en point de vente','<p>Application mobile &nbsp;sur mesure développée pour un leader de la livraison de colis en points de vente.</p><p>Les principales &nbsp;fonctionnalités :&nbsp;</p><p>• réception des colis dans le point de vente</p><p><span style=\"line-height: 1.42857;\">•&nbsp;</span><span style=\"line-height: 1.42857;\">prise de photo pour signaler un incident / colis défecteux</span></p><p><span style=\"line-height: 1.42857;\">•</span><span style=\"line-height: 1.42857;\">&nbsp;signature électronique en temps réel</span></p><p>• gestion de la remise du colis au client final (click and collect)<span style=\"line-height: 1.42857;\"><br></span></p><p>• prise en charge des retours<br></p><p>Les bénéfices clients :&nbsp;</p><p>•	Envoi des infos en temps réel sur les colis</p><p>•	Réduction des délais de traitement d’information</p><p>•	Réduction du nombre de colis perdus&nbsp;</p><p>•	Amélioration du temps de livraison au client final</p>',12,1454574365406,1454576548010,NULL,'',199,NULL,'<p>Norcod : intégrateur de solutions connectées pour l\'entreprise. &nbsp;Spécialiste depuis plus de 15 ans dans l’identification et la traçabilité.</p><p><ul><li><span style=\"line-height: 1.42857; background-color: initial;\">Édition&nbsp;</span><span style=\"line-height: 1.42857; background-color: initial;\">de solutions sur mesure</span></li><li><span style=\"line-height: 1.42857; background-color: initial;\">Déploiement et maintenance de matériel</span><br></li><li><span style=\"line-height: 1.42857; background-color: initial;\">Installation de parcs Wifi</span></li><li><span style=\"line-height: 1.42857; background-color: initial;\">Supervision Wifi&nbsp;</span><br></li></ul></p><p><br></p><p>&nbsp;</p>',198,'http://www.norcod.fr','',NULL,NULL,1,NULL),(63,'Solution mobile pour la gestion opérationnelle du magasin','My-awesome-application-63','MobileApp','published','','Solution mobile pour la gestion opérationnelle du magasin','<p>Une application mobile unique pour réaliser toutes les opérations métiers en magasin. </p><p>- Optimisation des réceptions (colis et stock magasins)</p><p>- Ré étiquetage en mobilité des produits ( en période de soldes par exemple)</p><p>- Gestion des retours&nbsp;</p><p>- Réalisation des Inventaires partiels (tournants) sur des rayons à forte valeur ajoutée.</p><p>- Gestion des préventes web et réservations «&nbsp;click and collect&nbsp;»</p>',12,1454667843223,1454667843130,NULL,'',200,NULL,'<p>Norcod : intégrateur de solutions connectées pour l\'entreprise.  Spécialiste depuis plus de 15 ans dans l’identification et la traçabilité.</p><p>Édition de solutions sur mesure</p><p>Déploiement et maintenance de matériel</p><p>Installation de parcs Wifi</p><p>Supervision Wifi&nbsp;</p>',201,'http://www.norcod.fr','',NULL,NULL,1,NULL),(64,'Reception de marchandises pour une chaîne de restaurants','My-awesome-application-64','MobileApp','published','','APPLICATION DE RÉCEPTION DE MARCHANDISES POUR LES RESTAURANTS ','<p><span style=\"line-height: 1.42857;\">Application mobile PDA connectée aux SI pour la gestion des stocks, des préparations de commande.</span><br></p><p>Lecture des infos contenues dans l’étiquette logistique (roll) puis dans les étiquettes carton. Suivi de la traçabilité.</p><div><p><br></p><p><u>Fonctionnalités :&nbsp;</u></p><div><p>- Vérifier la conformité des produits entrants et s’assurer de la bonne réception </p><p>- Vérifier les dates de péremption des produits entrants dans le restaurant  : pouvoir refuser une date trop ancienne</p><p>- Assurer une traçabilité de bout en bout</p><p>- Eviter les litiges dues aux livraisons</p><p><br></p><p><u>Bénéfices clients :&nbsp;</u></p><p>Identifier et limiter les erreurs de livraison sur les tournées dans les restaurants.</p><p>Optimiser les DLUO et le First in first out&nbsp;: capacité pour le client à refuser une DLUO trop ancienne</p><p>Automatiser l’inventaire  en réel du frigo</p><p><br></p><p><u>Performance :&nbsp;</u></p><p>Architecture  technique très souple permettant d’interfacer à la fois le SI local des magasins et le SI central pour consolidation et pilotage.&nbsp;</p><p><br></p></div></div>',12,1454668414290,1454668414259,NULL,'',202,NULL,'<p>Norcod : intégrateur de solutions connectées pour l\'entreprise. Spécialiste depuis plus de 15 ans dans l’identification et la traçabilité.</p><p>Édition de solutions sur mesure</p><p>Déploiement et maintenance de matériel</p><p>Installation de parcs Wifi</p><p>Supervision Wifi&nbsp;</p>',203,'http://www.norcod.fr','',NULL,NULL,1,NULL),(65,'My awesome application','My-awesome-application-65','MobileApp','published','','','A description here',9,1455700997309,1455700998306,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(66,'My awesome application','My-awesome-application-66','MobileApp','draft','','','A description here',43,1456407310568,1456407311499,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(67,'Wizzbe','My-awesome-application-67','SaaS','pending','','La première solution complète pour l’éducation numérique','<p><span style=\"line-height: 1.42857;\">Wizzbe propose toutes les fonctions essentielles à l’école numérique et couvre l’ensemble des&nbsp;</span><span style=\"line-height: 1.42857;\">préconisations du Ministère de l’Education décrites au travers du CARMO (le Cadre de référence pour&nbsp;</span><span style=\"line-height: 1.42857;\">l’Accès aux Ressources pédagogiques via un équipement Mobile)&nbsp;:</span></p><p>- La Gestion de parc (MDM)&nbsp;des équipements mobiles   </p><p>- La Gestion des applications mobiles (MAM) et la sécurisation d’accès des élèves </p><p>- La Gestion de classe, pour superviser les élèves, diffuser les ressources et différencier les&nbsp;<span style=\"line-height: 1.42857;\">apprentissages</span></p><p>- La Gestion des productions numériques (MCM)  </p><p>La solution Wizzbe s’intègre parfaitement dans le cadre des projets d’équipements&nbsp;<span style=\"line-height: 1.42857;\">numériques en proposant des outils et des ressources adaptés spécifiquement à l’usage&nbsp;</span><span style=\"line-height: 1.42857;\">scolaire.</span></p>',41,1456751851939,1456751852332,NULL,'',209,211,'<p>LogoSapience est une entreprise française créée en 1995 et basée à Angers.</p><p>Les activités de l’entreprise LogoSapience sont divisées en deux principaux secteurs :</p><p>- Une activité « Bureau d’études » et mode projet</p><p>- Une activité « e-éducation » en mode produit</p><p>Un partenaire de l’école numérique depuis 1995</p><p>L’activité  « Éducation » de la société LogoSapience naît en 1995 d’une rencontre entre le </p><p>fondateur de LogoSapience convaincu que les outils numériques vont apporter de nouvelles </p><p>fonctionnalités dans l’éducation et un enseignant de langues dans le supérieur souhaitant </p><p>s’adosser à des compétences informatiques pour intégrer le numérique dans l’apprentissage </p><p>des langues.</p><p>Cette rencontre abouti à la création du premier logiciel de LogoSapience dédié à l’éducation.</p><p>La particularité de LogoSapience est d’avoir développé depuis 1995 une approche centrée </p><p>sur les besoins des utilisateurs intégrant les besoins des enseignants, ceux des élèves comme </p><p>ceux des collectivités locales ayant la compétence éducation. La connaissance des pratiques </p><p>pédagogiques comme celle des besoins des administrateurs des réseaux par LogoSapience </p><p>est un élément clé. </p><p>Pour cela, aux côté des ingénieurs, LogoSapience a intégré dans son équipe une responsable </p><p>pédagogique chargée de la relation avec le monde éducatif et de la participation de </p><p>LogoSapience aux débats et travaux sur le numérique dans l’éducation.   </p><p>LogoSapience, spécialiste de l’Éducation innovante</p><p>Présentes aujourd’hui dans près de 3000 établissements en France et à l’étranger, les </p><p>solutions proposées par LogoSapience se distinguent par leurs constantes innovations.  En </p><p>effet, la spécificité de LogoSapience est d’avoir intégré depuis ses premières recherches sur </p><p>les fonctionnalités des laboratoires de langues une activité de Recherche &amp; Développement </p><p>intégrée. </p><p>LogoSapience étant également convaincue que le développement de nouveaux outils ne </p><p>peut se faire sans une étroite collaboration avec les futurs usagers et les laboratoires de </p><p>recherche, a ainsi participé à plusieurs projets collaboratifs.</p><p>A l’échelle européenne : LogoSapience a piloté le développement technique du projet de la </p><p>mise en œuvre de plateformes multilingues de travail collaboratif pour l’INALCO (Langues’O) </p><p>et l’ARDEMI et participe aujourd’hui au projet Future Classroom Lab de European Schoolnet. </p><p>A l’échelle nationale, LogoSapience a notament été associée au projet e-education TED </p><p>(Tablette pour l’Education).</p>',210,'http://www.logosapience.com/','',NULL,NULL,1,NULL),(68,'My awesome application','My-awesome-application-68','MobileApp','deleted','','','A description here',41,1456751852646,1456751852933,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(69,'My awesome application #1.1','My-awesome-application-#1.1-69','MobileApp','draft','','','A description here',9,1456995451378,1458288870937,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(70,'My awesome application','My-awesome-application-70','MobileApp','deleted','','','A description here',41,1457019941698,1457019941705,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(71,'Prosuit-1 de NewBOB','Prosuit1-de-NewBOB-71','MobileApp','published','','','A description here',47,1458254388081,1458324720693,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(72,'Prosuit-2 de NewBOB','Prosuit2-de-NewBOB-72','MobileApp','published','','Prosuit#1 de NewBOB le top','<p>description de Prosuit#2 de NewBOB</p>',47,1458314089833,1458324708380,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(73,'Prosuit-3 de NewBOB','Prosuit3-de-NewBOB-73','MaterialNDevice','draft','','','A description here',47,1458317682243,1458326323844,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(74,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!74','MobileApp','deleted','','','A description here',9,1458822573902,1458822575345,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(75,'demon pour Charles','demon-pour-Charles-75','MaterialNDevice','draft','','','A description here',9,1459356848353,1459356954708,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(76,'John Product','John-Product-76','MobileApp','published','','','<p>Description</p>',9,1459404659624,1459404696326,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(77,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!77','MobileApp','deleted','','','A description here',9,1459942877089,1459942901516,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(78,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!78','MobileApp','deleted','','','A description here',9,1460642892624,1460642892980,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(79,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!79','MobileApp','deleted','','','A description here',9,1461232979060,1461233631542,NULL,'',NULL,NULL,'',NULL,'','',NULL,NULL,1,NULL),(80,'John test 2','John-test-2-80','MobileApp','deleted','','','A description here',9,1462808471285,1462808869180,NULL,'',NULL,NULL,'',NULL,'','',NULL,'fe38ca7be8ca-7a80-e30b-b26d-b74cbbbed211',1,NULL),(81,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!81','MobileApp','deleted','','','A description here',9,1462809071349,1462809084182,NULL,'',NULL,NULL,'',NULL,'','',NULL,'51efd11b5224-5cff-c62b-020f-32f770b36cef',1,NULL),(82,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!82','MobileApp','deleted','2.0','','A description here',9,1462809116579,1462809135514,NULL,'',NULL,NULL,'',NULL,'','',NULL,'bc51426412c7-8dc6-143e-cda5-8077f5b5351d',1,NULL),(83,'test','test-83','MobileApp','deleted','','','A description here',9,1462811655857,1462811911670,NULL,'',NULL,NULL,'',NULL,'','',NULL,'e640af456cfe-795c-6b84-6c1b-f32e2f81f255',1,NULL),(84,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!84','MobileApp','deleted','','','A description here',9,1462811851618,1462811937283,NULL,'',NULL,NULL,'',NULL,'','',NULL,'96d51a5ca507-da42-01c2-0968-7b2cf77eee06',1,NULL),(85,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!85','MobileApp','deleted','','','A description here',9,1462812359975,1462812445661,NULL,'',NULL,NULL,'',NULL,'','',NULL,'1a14eed7718e-e0b9-44bb-e82d-243ec6846eb0',1,NULL),(86,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!86','MobileApp','deleted','','','A description here',9,1462812530526,1462812616349,NULL,'',NULL,NULL,'',NULL,'','',NULL,'374f67cae403-e7d7-a71c-b5d0-2d5904433344',1,NULL),(87,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!87','MobileApp','deleted','','','A description here',9,1462813445112,1462813530830,NULL,'',NULL,NULL,'',NULL,'','',NULL,'684b6768fb61-a620-66e8-d564-2547a937c9e3',1,NULL),(88,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!88','MobileApp','deleted','','','A description here',9,1462813646166,1462813731943,NULL,'',NULL,NULL,'',NULL,'','',NULL,'d6ebbfe693f4-7fa3-92be-24c1-b94db7329676',1,NULL),(89,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!89','MobileApp','deleted','','','A description here',9,1462814157007,1462814242778,NULL,'',NULL,NULL,'',NULL,'','',NULL,'d10eeb3e4227-577a-049f-8e63-41cf081ec2ff',1,NULL),(90,'Delete Me 2','Delete-Me-2-90','MobileApp','deleted','','','A description here',9,1462814257604,1462814456000,NULL,'',NULL,NULL,'',NULL,'','',NULL,'df5d69b10d81-3082-6793-c082-605a37a24e1e',1,NULL),(91,'Edit Product 1dsa','Edit-Product-1dsa-91','MobileApp','deleted','','','A description here',9,1462874969734,1462875418656,NULL,'',NULL,NULL,'',NULL,'','',1004,'8393f56119e0-a1c2-947a-54ec-2e41bd4be4f3',1,NULL),(92,'Change Name','Change-Name-92','MobileApp','deleted','','','A description here',9,1462875336686,1462875473019,NULL,'',NULL,NULL,'',NULL,'','',1005,'6f921257ca14-51a3-dda2-9e11-ce4737febbe4',1,NULL),(93,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!93','MobileApp','deleted','','','A description here',9,1462875395037,1462875482351,NULL,'',NULL,NULL,'',NULL,'','',1006,'dd70d467ab2d-15c5-67be-8da1-fdb87c063461',1,NULL),(94,'Update Product on Proabono','Update-Product-on-Proabono-94','MobileApp','deleted','','','A description here',9,1462877858740,1462877979972,NULL,'',NULL,NULL,'',NULL,'','',1008,'8ba002c67b7e-84e7-673b-a1ea-aaf2cc87fb09',1,NULL),(95,'John Ipad','John-Ipad-95','MobileApp','draft','','','A description here',9,1462878503642,1462886229805,NULL,'',NULL,NULL,'',NULL,'','',1009,'4a4fa4063305-7746-721d-1746-43791a6507f6',1,NULL);
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
INSERT INTO `product_available_feature` VALUES ('PRODUCT_EDITOR',1),('PRODUCT_FEATURES',1),('PRODUCT_RESOURCES',1),('PRODUCT_SUMMARY',1),('PRODUCT_EDITOR',2),('PRODUCT_FEATURES',2),('PRODUCT_RESOURCES',2),('PRODUCT_SUMMARY',2),('PRODUCT_EDITOR',3),('PRODUCT_FEATURES',3),('PRODUCT_RESOURCES',3),('PRODUCT_SUMMARY',3),('PRODUCT_EDITOR',4),('PRODUCT_FEATURES',4),('PRODUCT_RESOURCES',4),('PRODUCT_SUMMARY',4),('PRODUCT_EDITOR',5),('PRODUCT_FEATURES',5),('PRODUCT_RESOURCES',5),('PRODUCT_SUMMARY',5),('PRODUCT_EDITOR',6),('PRODUCT_FEATURES',6),('PRODUCT_RESOURCES',6),('PRODUCT_SUMMARY',6),('PRODUCT_EDITOR',7),('PRODUCT_FEATURES',7),('PRODUCT_RESOURCES',7),('PRODUCT_SUMMARY',7),('PRODUCT_EDITOR',8),('PRODUCT_FEATURES',8),('PRODUCT_RESOURCES',8),('PRODUCT_SUMMARY',8),('PRODUCT_EDITOR',9),('PRODUCT_FEATURES',9),('PRODUCT_RESOURCES',9),('PRODUCT_SUMMARY',9),('PRODUCT_EDITOR',10),('PRODUCT_FEATURES',10),('PRODUCT_RESOURCES',10),('PRODUCT_SUMMARY',10),('PRODUCT_EDITOR',11),('PRODUCT_FEATURES',11),('PRODUCT_RESOURCES',11),('PRODUCT_SUMMARY',11),('PRODUCT_EDITOR',12),('PRODUCT_FEATURES',12),('PRODUCT_RESOURCES',12),('PRODUCT_SUMMARY',12),('PRODUCT_EDITOR',13),('PRODUCT_FEATURES',13),('PRODUCT_RESOURCES',13),('PRODUCT_SUMMARY',13),('PRODUCT_EDITOR',14),('PRODUCT_FEATURES',14),('PRODUCT_RESOURCES',14),('PRODUCT_SUMMARY',14),('PRODUCT_EDITOR',15),('PRODUCT_FEATURES',15),('PRODUCT_RESOURCES',15),('PRODUCT_SUMMARY',15),('PRODUCT_EDITOR',16),('PRODUCT_FEATURES',16),('PRODUCT_RESOURCES',16),('PRODUCT_SUMMARY',16),('PRODUCT_EDITOR',17),('PRODUCT_FEATURES',17),('PRODUCT_RESOURCES',17),('PRODUCT_SUMMARY',17),('PRODUCT_EDITOR',18),('PRODUCT_FEATURES',18),('PRODUCT_RESOURCES',18),('PRODUCT_SUMMARY',18),('PRODUCT_EDITOR',19),('PRODUCT_FEATURES',19),('PRODUCT_RESOURCES',19),('PRODUCT_SUMMARY',19),('PRODUCT_EDITOR',20),('PRODUCT_FEATURES',20),('PRODUCT_RESOURCES',20),('PRODUCT_SUMMARY',20),('PRODUCT_EDITOR',21),('PRODUCT_FEATURES',21),('PRODUCT_RESOURCES',21),('PRODUCT_SUMMARY',21),('PRODUCT_EDITOR',22),('PRODUCT_FEATURES',22),('PRODUCT_RESOURCES',22),('PRODUCT_SUMMARY',22),('PRODUCT_EDITOR',23),('PRODUCT_FEATURES',23),('PRODUCT_RESOURCES',23),('PRODUCT_SUMMARY',23),('PRODUCT_EDITOR',24),('PRODUCT_FEATURES',24),('PRODUCT_RESOURCES',24),('PRODUCT_SUMMARY',24),('PRODUCT_EDITOR',25),('PRODUCT_FEATURES',25),('PRODUCT_RESOURCES',25),('PRODUCT_SUMMARY',25),('PRODUCT_EDITOR',26),('PRODUCT_FEATURES',26),('PRODUCT_RESOURCES',26),('PRODUCT_SUMMARY',26),('PRODUCT_EDITOR',27),('PRODUCT_FEATURES',27),('PRODUCT_RESOURCES',27),('PRODUCT_SUMMARY',27),('PRODUCT_EDITOR',28),('PRODUCT_FEATURES',28),('PRODUCT_RESOURCES',28),('PRODUCT_SUMMARY',28),('PRODUCT_EDITOR',29),('PRODUCT_FEATURES',29),('PRODUCT_RESOURCES',29),('PRODUCT_SUMMARY',29),('PRODUCT_EDITOR',30),('PRODUCT_FEATURES',30),('PRODUCT_RESOURCES',30),('PRODUCT_SUMMARY',30),('PRODUCT_EDITOR',31),('PRODUCT_FEATURES',31),('PRODUCT_RESOURCES',31),('PRODUCT_SUMMARY',31),('PRODUCT_EDITOR',32),('PRODUCT_FEATURES',32),('PRODUCT_RESOURCES',32),('PRODUCT_SUMMARY',32),('PRODUCT_EDITOR',33),('PRODUCT_FEATURES',33),('PRODUCT_RESOURCES',33),('PRODUCT_SUMMARY',33),('PRODUCT_EDITOR',34),('PRODUCT_FEATURES',34),('PRODUCT_RESOURCES',34),('PRODUCT_SUMMARY',34),('PRODUCT_EDITOR',35),('PRODUCT_FEATURES',35),('PRODUCT_RESOURCES',35),('PRODUCT_SUMMARY',35),('PRODUCT_EDITOR',36),('PRODUCT_FEATURES',36),('PRODUCT_RESOURCES',36),('PRODUCT_SUMMARY',36),('PRODUCT_EDITOR',37),('PRODUCT_FEATURES',37),('PRODUCT_RESOURCES',37),('PRODUCT_SUMMARY',37),('PRODUCT_EDITOR',38),('PRODUCT_FEATURES',38),('PRODUCT_RESOURCES',38),('PRODUCT_SUMMARY',38),('PRODUCT_EDITOR',39),('PRODUCT_FEATURES',39),('PRODUCT_RESOURCES',39),('PRODUCT_SUMMARY',39),('PRODUCT_EDITOR',40),('PRODUCT_FEATURES',40),('PRODUCT_RESOURCES',40),('PRODUCT_SUMMARY',40),('PRODUCT_EDITOR',41),('PRODUCT_FEATURES',41),('PRODUCT_RESOURCES',41),('PRODUCT_SUMMARY',41),('PRODUCT_EDITOR',42),('PRODUCT_FEATURES',42),('PRODUCT_RESOURCES',42),('PRODUCT_SUMMARY',42),('PRODUCT_EDITOR',43),('PRODUCT_FEATURES',43),('PRODUCT_RESOURCES',43),('PRODUCT_SUMMARY',43),('PRODUCT_EDITOR',44),('PRODUCT_FEATURES',44),('PRODUCT_RESOURCES',44),('PRODUCT_SUMMARY',44),('PRODUCT_EDITOR',45),('PRODUCT_FEATURES',45),('PRODUCT_RESOURCES',45),('PRODUCT_SUMMARY',45),('PRODUCT_EDITOR',46),('PRODUCT_FEATURES',46),('PRODUCT_RESOURCES',46),('PRODUCT_SUMMARY',46),('PRODUCT_EDITOR',47),('PRODUCT_FEATURES',47),('PRODUCT_RESOURCES',47),('PRODUCT_SUMMARY',47),('PRODUCT_EDITOR',48),('PRODUCT_FEATURES',48),('PRODUCT_RESOURCES',48),('PRODUCT_SUMMARY',48),('PRODUCT_EDITOR',49),('PRODUCT_FEATURES',49),('PRODUCT_RESOURCES',49),('PRODUCT_SUMMARY',49),('PRODUCT_EDITOR',50),('PRODUCT_FEATURES',50),('PRODUCT_RESOURCES',50),('PRODUCT_SUMMARY',50),('PRODUCT_EDITOR',51),('PRODUCT_FEATURES',51),('PRODUCT_RESOURCES',51),('PRODUCT_SUMMARY',51),('PRODUCT_EDITOR',52),('PRODUCT_FEATURES',52),('PRODUCT_RESOURCES',52),('PRODUCT_SUMMARY',52),('PRODUCT_EDITOR',53),('PRODUCT_FEATURES',53),('PRODUCT_RESOURCES',53),('PRODUCT_SUMMARY',53),('PRODUCT_EDITOR',54),('PRODUCT_FEATURES',54),('PRODUCT_RESOURCES',54),('PRODUCT_SUMMARY',54),('PRODUCT_EDITOR',55),('PRODUCT_FEATURES',55),('PRODUCT_RESOURCES',55),('PRODUCT_SUMMARY',55),('PRODUCT_EDITOR',56),('PRODUCT_FEATURES',56),('PRODUCT_RESOURCES',56),('PRODUCT_SUMMARY',56),('PRODUCT_EDITOR',57),('PRODUCT_FEATURES',57),('PRODUCT_RESOURCES',57),('PRODUCT_SUMMARY',57),('PRODUCT_EDITOR',58),('PRODUCT_FEATURES',58),('PRODUCT_RESOURCES',58),('PRODUCT_SUMMARY',58),('PRODUCT_EDITOR',59),('PRODUCT_FEATURES',59),('PRODUCT_RESOURCES',59),('PRODUCT_SUMMARY',59),('PRODUCT_EDITOR',60),('PRODUCT_FEATURES',60),('PRODUCT_RESOURCES',60),('PRODUCT_SUMMARY',60),('PRODUCT_EDITOR',61),('PRODUCT_FEATURES',61),('PRODUCT_RESOURCES',61),('PRODUCT_SUMMARY',61),('PRODUCT_EDITOR',62),('PRODUCT_FEATURES',62),('PRODUCT_RESOURCES',62),('PRODUCT_SUMMARY',62),('PRODUCT_EDITOR',63),('PRODUCT_FEATURES',63),('PRODUCT_RESOURCES',63),('PRODUCT_SUMMARY',63),('PRODUCT_EDITOR',64),('PRODUCT_FEATURES',64),('PRODUCT_RESOURCES',64),('PRODUCT_SUMMARY',64),('PRODUCT_EDITOR',65),('PRODUCT_FEATURES',65),('PRODUCT_RESOURCES',65),('PRODUCT_SUMMARY',65),('PRODUCT_EDITOR',66),('PRODUCT_FEATURES',66),('PRODUCT_RESOURCES',66),('PRODUCT_SUMMARY',66),('PRODUCT_EDITOR',67),('PRODUCT_FEATURES',67),('PRODUCT_RESOURCES',67),('PRODUCT_SUMMARY',67),('PRODUCT_EDITOR',68),('PRODUCT_FEATURES',68),('PRODUCT_RESOURCES',68),('PRODUCT_SUMMARY',68),('PRODUCT_EDITOR',69),('PRODUCT_FEATURES',69),('PRODUCT_RESOURCES',69),('PRODUCT_SUMMARY',69),('PRODUCT_EDITOR',70),('PRODUCT_FEATURES',70),('PRODUCT_RESOURCES',70),('PRODUCT_SUMMARY',70),('PRODUCT_EDITOR',71),('PRODUCT_FEATURES',71),('PRODUCT_RESOURCES',71),('PRODUCT_SUMMARY',71),('PRODUCT_EDITOR',72),('PRODUCT_FEATURES',72),('PRODUCT_RESOURCES',72),('PRODUCT_SUMMARY',72),('PRODUCT_EDITOR',73),('PRODUCT_FEATURES',73),('PRODUCT_RESOURCES',73),('PRODUCT_SUMMARY',73),('PRODUCT_EDITOR',74),('PRODUCT_FEATURES',74),('PRODUCT_RESOURCES',74),('PRODUCT_SUMMARY',74),('PRODUCT_EDITOR',75),('PRODUCT_FEATURES',75),('PRODUCT_RESOURCES',75),('PRODUCT_SUMMARY',75),('PRODUCT_EDITOR',76),('PRODUCT_FEATURES',76),('PRODUCT_RESOURCES',76),('PRODUCT_SUMMARY',76),('PRODUCT_EDITOR',77),('PRODUCT_FEATURES',77),('PRODUCT_RESOURCES',77),('PRODUCT_SUMMARY',77),('PRODUCT_EDITOR',78),('PRODUCT_FEATURES',78),('PRODUCT_RESOURCES',78),('PRODUCT_SUMMARY',78),('PRODUCT_EDITOR',79),('PRODUCT_FEATURES',79),('PRODUCT_RESOURCES',79),('PRODUCT_SUMMARY',79),('PRODUCT_EDITOR',80),('PRODUCT_FEATURES',80),('PRODUCT_RESOURCES',80),('PRODUCT_SUMMARY',80),('PRODUCT_EDITOR',81),('PRODUCT_FEATURES',81),('PRODUCT_RESOURCES',81),('PRODUCT_SUMMARY',81),('PRODUCT_EDITOR',82),('PRODUCT_FEATURES',82),('PRODUCT_RESOURCES',82),('PRODUCT_SUMMARY',82),('PRODUCT_EDITOR',83),('PRODUCT_FEATURES',83),('PRODUCT_RESOURCES',83),('PRODUCT_SUMMARY',83),('PRODUCT_EDITOR',84),('PRODUCT_FEATURES',84),('PRODUCT_RESOURCES',84),('PRODUCT_SUMMARY',84),('PRODUCT_EDITOR',85),('PRODUCT_FEATURES',85),('PRODUCT_RESOURCES',85),('PRODUCT_SUMMARY',85),('PRODUCT_EDITOR',86),('PRODUCT_FEATURES',86),('PRODUCT_RESOURCES',86),('PRODUCT_SUMMARY',86),('PRODUCT_EDITOR',87),('PRODUCT_FEATURES',87),('PRODUCT_RESOURCES',87),('PRODUCT_SUMMARY',87),('PRODUCT_EDITOR',88),('PRODUCT_FEATURES',88),('PRODUCT_RESOURCES',88),('PRODUCT_SUMMARY',88),('PRODUCT_EDITOR',89),('PRODUCT_FEATURES',89),('PRODUCT_RESOURCES',89),('PRODUCT_SUMMARY',89),('PRODUCT_EDITOR',90),('PRODUCT_FEATURES',90),('PRODUCT_RESOURCES',90),('PRODUCT_SUMMARY',90),('PRODUCT_EDITOR',91),('PRODUCT_FEATURES',91),('PRODUCT_RESOURCES',91),('PRODUCT_SUMMARY',91),('PRODUCT_EDITOR',92),('PRODUCT_FEATURES',92),('PRODUCT_RESOURCES',92),('PRODUCT_SUMMARY',92),('PRODUCT_EDITOR',93),('PRODUCT_FEATURES',93),('PRODUCT_RESOURCES',93),('PRODUCT_SUMMARY',93),('PRODUCT_EDITOR',94),('PRODUCT_FEATURES',94),('PRODUCT_RESOURCES',94),('PRODUCT_SUMMARY',94),('PRODUCT_EDITOR',95),('PRODUCT_FEATURES',95),('PRODUCT_RESOURCES',95),('PRODUCT_SUMMARY',95);
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
  `highlight_product` int(11) DEFAULT NULL,
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
INSERT INTO `product_corner` VALUES (4,4,0),(5,3,0),(6,3,0),(6,4,0),(6,5,0),(8,1,1),(9,4,0),(10,3,0),(10,4,0),(11,1,0),(11,2,0),(11,3,0),(11,4,0),(11,5,0),(12,1,0),(12,2,0),(12,3,0),(12,4,0),(12,5,0),(13,2,1),(14,2,0),(15,4,1),(17,4,0),(19,3,0),(19,4,0),(19,5,0),(23,1,0),(23,2,0),(23,3,0),(23,4,0),(23,5,0),(27,2,0),(27,3,0),(27,4,0),(29,3,0),(31,4,0),(32,4,0),(33,4,0),(34,1,0),(34,3,0),(34,4,0),(36,4,3),(41,4,0),(42,4,0),(43,1,0),(43,2,0),(43,3,0),(43,4,0),(43,5,0),(44,4,0),(45,4,0),(46,4,0),(47,3,2),(48,3,1),(48,4,0),(49,3,3),(50,4,0),(51,1,0),(53,1,0),(53,2,0),(53,3,0),(53,4,2),(53,5,0),(54,2,2),(58,1,0),(58,5,0),(59,1,2),(59,2,0),(59,3,0),(59,4,0),(59,5,0),(60,1,0),(60,3,0),(60,4,0),(60,5,0),(61,1,0),(61,2,0),(61,3,0),(61,4,0),(61,5,1),(62,5,0),(63,5,NULL),(64,3,NULL),(64,4,NULL),(64,5,NULL),(67,2,NULL),(71,5,NULL),(72,5,NULL),(73,5,NULL),(75,1,NULL),(75,3,NULL),(76,1,NULL),(76,2,NULL),(76,3,NULL),(76,4,NULL),(76,5,NULL),(80,2,NULL),(80,3,NULL),(80,4,NULL),(81,2,NULL),(82,2,NULL),(82,3,NULL),(95,1,NULL),(95,2,NULL),(95,3,NULL),(95,4,NULL);
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
  PRIMARY KEY (`id_product`,`order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_feature`
--

LOCK TABLES `product_feature` WRITE;
/*!40000 ALTER TABLE `product_feature` DISABLE KEYS */;
INSERT INTO `product_feature` VALUES (1,0,'UN LOGICIEL RH SIMPLE !','Chaque utilisateur dispose depuis son tableau de bord de l\'essentiel des informations le concernant. Vos reportings, servant au suivi de votre activité ou à tout élément spécifique de votre environnement professionnel, sont très simples à réaliser grâce à Mon RH Manager. Etudié pour un interfaçage efficace avec Excel, Mon RH Manager vous permet d\'exporter l\'ensemble de vos données, et de créer votre document rapidement.'),(1,1,'LA SÉCURITÉ, UNE COMPOSANTE ESSENTIELLE','Nous avons retenu Amazon Web Services comme plateforme de cloud computing pour sa flexibilité, sa robustesse, sa réactivité et sa proximité. La sécurité des données RH, très sensibles, est assurée par un opérateur majeur du cloud computing. Les applications sont protégées par une authentification par mot de passe complexe et les données transitant sur Internet sont cryptées (SSL). La gestion des accès est un point fort de Mon RH Manager : pour chaque processus RH, chaque collaborateur se voit décerner un droit d\'accès, comme administrateur, acteur, valideur...'),(1,2,'UNE FACTURATION SIMPLE ET CLAIRE','Mon RH Manager vous permet de faire des économies et vous facilite la facturation. Notre solution fonctionne grâce à un système d\'abonnement simple : pas d\'immobilisations comptables du parc informatique, pas d\'obligation de passer/payer la version supérieure, contrats simples et plus lisibles... Afin de simplifier encore plus votre gestion courante quotidienne, la facturation de Mon RH Manager se fait en ligne, par carte bancaire. L\'historique de facturation est consultable directement sur la solution. C\'est simple, clair et sécurisé.'),(1,3,'SANS ENGAGEMENT','Mon RH Manager, le logiciel RH le plus simple pour optimiser sa gestion des ressources humaines, et cela sans engagement ! Grâce à son interface simple et intuitive, élaborée par des professionnels des Ressources Humaines, Mon RH Manager, votre SIRH simplifie le quotidien des PME-PMI. Notre tarification simple vous assure une parfaite flexibilité dans votre gestion RH : Mon RH Manager, c\'est sans engagement !'),(1,4,'ACCÈS IMMÉDIAT','Vous souhaitez simplifier vos process RH, Mon RH Manager y répond en un temps de déploiement record ! Pas besoin d\'informatique, seule une connexion internet suffit. Un simple identifiant permet de vous connecter en ligne au logiciel RH et en un clic tous vos salariés ont accès à l\'ensemble des fonctionnalités RH (gestion des temps, gestion des congés, notes de frais, planning, adminitration RH) ! 24,90 € HT / MOIS. Mon RH Manager est une solution en mode SaaS disponible 24h/24 et 365j/an. Pensée par des professionnels des RH pour simplifier votre quotidien, vous bénéficiez d\'une couverture fonctionnelle complète, assurée par l\'ensemble de nos modules à travers un SIRH unique, 100% SaaS, 100% cloud. Disposer de Mon RH Manager en SaaS est la solution la plus économique pour les PME-PMI. Vos frais fixes sont réduits : pas besoin de ressources informatiques internes, de coûts d\'entretien ou de mises à jour.'),(2,0,'UN LOGICIEL RH SIMPLE !','Chaque utilisateur dispose depuis son tableau de bord de l\'essentiel des informations le concernant. Vos reportings, servant au suivi de votre activité ou à tout élément spécifique de votre environnement professionnel, sont très simples à réaliser grâce à Mon RH Manager. Etudié pour un interfaçage efficace avec Excel, Mon RH Manager vous permet d\'exporter l\'ensemble de vos données, et de créer votre document rapidement.'),(2,1,'LA SÉCURITÉ, UNE COMPOSANTE ESSENTIELLE','Nous avons retenu Amazon Web Services comme plateforme de cloud computing pour sa flexibilité, sa robustesse, sa réactivité et sa proximité. La sécurité des données RH, très sensibles, est assurée par un opérateur majeur du cloud computing. Les applications sont protégées par une authentification par mot de passe complexe et les données transitant sur Internet sont cryptées (SSL). La gestion des accès est un point fort de Mon RH Manager : pour chaque processus RH, chaque collaborateur se voit décerner un droit d\'accès, comme administrateur, acteur, valideur...'),(2,2,'UNE FACTURATION SIMPLE ET CLAIRE','Mon RH Manager vous permet de faire des économies et vous facilite la facturation. Notre solution fonctionne grâce à un système d\'abonnement simple : pas d\'immobilisations comptables du parc informatique, pas d\'obligation de passer/payer la version supérieure, contrats simples et plus lisibles... Afin de simplifier encore plus votre gestion courante quotidienne, la facturation de Mon RH Manager se fait en ligne, par carte bancaire. L\'historique de facturation est consultable directement sur la solution. C\'est simple, clair et sécurisé.'),(2,3,'SANS ENGAGEMENT','Mon RH Manager, le logiciel RH le plus simple pour optimiser sa gestion des ressources humaines, et cela sans engagement ! Grâce à son interface simple et intuitive, élaborée par des professionnels des Ressources Humaines, Mon RH Manager, votre SIRH simplifie le quotidien des PME-PMI. Notre tarification simple vous assure une parfaite flexibilité dans votre gestion RH : Mon RH Manager, c\'est sans engagement !'),(2,4,'ACCÈS IMMÉDIAT','Vous souhaitez simplifier vos process RH, Mon RH Manager y répond en un temps de déploiement record ! Pas besoin d\'informatique, seule une connexion internet suffit. Un simple identifiant permet de vous connecter en ligne au logiciel RH et en un clic tous vos salariés ont accès à l\'ensemble des fonctionnalités RH (gestion des temps, gestion des congés, notes de frais, planning, adminitration RH) ! 24,90 € HT / MOIS. Mon RH Manager est une solution en mode SaaS disponible 24h/24 et 365j/an. Pensée par des professionnels des RH pour simplifier votre quotidien, vous bénéficiez d\'une couverture fonctionnelle complète, assurée par l\'ensemble de nos modules à travers un SIRH unique, 100% SaaS, 100% cloud. Disposer de Mon RH Manager en SaaS est la solution la plus économique pour les PME-PMI. Vos frais fixes sont réduits : pas besoin de ressources informatiques internes, de coûts d\'entretien ou de mises à jour.'),(4,0,'UN LOGICIEL RH SIMPLE !','Chaque utilisateur dispose depuis son tableau de bord de l\'essentiel des informations le concernant. Vos reportings, servant au suivi de votre activité ou à tout élément spécifique de votre environnement professionnel, sont très simples à réaliser grâce à Mon RH Manager. Etudié pour un interfaçage efficace avec Excel, Mon RH Manager vous permet d\'exporter l\'ensemble de vos données, et de créer votre document rapidement.'),(4,1,'LA SÉCURITÉ, UNE COMPOSANTE ESSENTIELLE','Nous avons retenu Amazon Web Services comme plateforme de cloud computing pour sa flexibilité, sa robustesse, sa réactivité et sa proximité. La sécurité des données RH, très sensibles, est assurée par un opérateur majeur du cloud computing. Les applications sont protégées par une authentification par mot de passe complexe et les données transitant sur Internet sont cryptées (SSL). La gestion des accès est un point fort de Mon RH Manager : pour chaque processus RH, chaque collaborateur se voit décerner un droit d\'accès, comme administrateur, acteur, valideur...'),(4,2,'UNE FACTURATION SIMPLE ET CLAIRE','Mon RH Manager vous permet de faire des économies et vous facilite la facturation. Notre solution fonctionne grâce à un système d\'abonnement simple : pas d\'immobilisations comptables du parc informatique, pas d\'obligation de passer/payer la version supérieure, contrats simples et plus lisibles... Afin de simplifier encore plus votre gestion courante quotidienne, la facturation de Mon RH Manager se fait en ligne, par carte bancaire. L\'historique de facturation est consultable directement sur la solution. C\'est simple, clair et sécurisé.'),(4,3,'SANS ENGAGEMENT','Mon RH Manager, le logiciel RH le plus simple pour optimiser sa gestion des ressources humaines, et cela sans engagement ! Grâce à son interface simple et intuitive, élaborée par des professionnels des Ressources Humaines, Mon RH Manager, votre SIRH simplifie le quotidien des PME-PMI. Notre tarification simple vous assure une parfaite flexibilité dans votre gestion RH : Mon RH Manager, c\'est sans engagement !'),(4,4,'ACCÈS IMMÉDIAT','Vous souhaitez simplifier vos process RH, Mon RH Manager y répond en un temps de déploiement record ! Pas besoin d\'informatique, seule une connexion internet suffit. Un simple identifiant permet de vous connecter en ligne au logiciel RH et en un clic tous vos salariés ont accès à l\'ensemble des fonctionnalités RH (gestion des temps, gestion des congés, notes de frais, planning, adminitration RH) ! 24,90 € HT / MOIS. Mon RH Manager est une solution en mode SaaS disponible 24h/24 et 365j/an. Pensée par des professionnels des RH pour simplifier votre quotidien, vous bénéficiez d\'une couverture fonctionnelle complète, assurée par l\'ensemble de nos modules à travers un SIRH unique, 100% SaaS, 100% cloud. Disposer de Mon RH Manager en SaaS est la solution la plus économique pour les PME-PMI. Vos frais fixes sont réduits : pas besoin de ressources informatiques internes, de coûts d\'entretien ou de mises à jour.'),(6,0,'Elégante et soignée.','De haute qualité, sa conception en fait l’une des tablettes professionnelles les plus fines, ultra-légères et ultra-résistantes du marché.<p><br></p>'),(6,1,'Sécurisée de bout en bout.','<p>Bénéficiant des meilleurs atouts de sécurité d’HP, elle vous offre une protection accrue contre les attaques de virus, menaces de sécurité ou de perte de données.</p>'),(6,2,'Pensée pour la productivité','<p>Connectivité sans fil de classe d\'entreprise extrêmement fiable y compris 4G&nbsp; en option, elle s\'adapte à votre usage au quotidien avec une gamme d\'accessoires des plus complètes.</p>'),(8,0,'Parée pour la santé.','<p>Profitez d\'une solution durable et légère pour votre environnement hospitalier. Grâce à un traitementantimicrobien2 pour protéger le produit, elle est facile à nettoyer et conçue pour répondre aux normes IP 544 etMIL-STD 810G.5</p>'),(8,1,'Conforme aux exigences de sécurité.','<p>Contribuez à réduire le risque d\'erreurs médicales en utilisant le lecteur de code barres 2D (sur certainesconfigurations) pour badger le personnel ou les patients et cataloguer et administrer les médicaments. Dictezavec précision grâce au logiciel de réduction du bruit intégré.</p>'),(8,2,'Equipée d\'un scanner 2D.','<p>Aidez à réduire le risque d\'erreurs médicales en utilisant le lecteur de code barres 2D (sur certaines configurations) pour badger le personnel ou les patients et cataloguer et administrer les médicaments. Dictez avec précision avec le logiciel de réduction du bruit intégré.</p>'),(8,3,'Idéale pour la saisie de formulaires.','<p>Créez la solution idéale pour vous accompagner dans chaque situation grâce à une suite d\'accessoires en option.7 Utilisez le stylet pour saisir des données lorsque vous êtes sur le terrain ou une station d\'accueil pourcréer un environnement de bureautique lorsque vous êtes de retour au bureau médical.</p>'),(9,0,'Conçu pour les entreprises','<p>Profitez du design épuré de l\'ordinateur amovible 2-en-1 HP Pro x2 612 G1 doté d\'un grand écran HD ou FHD en option de 31,75 cm (12,5 pouces)3 pour la création de contenu. La tablette dispose d\'un port USB 3.0 pour le transfert de données et d\'un stylet Wacom haute performance HP Pro x2 612 G1 en option.</p>'),(9,1,'Plusieurs options d\'achat.','<p>Achetez dès aujourd\'hui votre ordinateur portable entièrement détachable, ou créez-le progressivement. Le HP Prox2 612 G1 fonctionne avec des claviers optionnels qui offrent des solutions pour remplacer entièrement un ordinateur portable ou pour répondre aux besoins en matière de déplacement. Vous pouvez acheter la tablette détachable HP Pro x2 612 G1 2-en-1 avec une option Power Keybord et clavier de voyage</p>'),(9,2,'Les capacités d\'un UltraBook.','<p>Remplacez votre ordinateur portable traditionnel par le HP Pro x2 612 G1. Les solutions 2-en-1 vous permettent d\'obtenir les meilleurs résultats avec les processeurs Intel® Core™ i3/i5 de 4e génération en option, les 2 disques SSD rapides et une plus grande autonomie de batterie lorsqu\'ils sont associés au clavier HP Pro x2 612 G1 en option.</p>'),(9,3,'Lq sécurité avant tout.','<p>Protégez votre ordinateur HP Pro x2 612 G1 et les données qu\'il contient avec les fonctions de sécurité HP.&nbsp; Les fonctionnalités HP Sure Start, HP BIOSphere, HP Client Security5 et le lecteur d\'empreintes digitales en option disponibles sur la tablette vous permettent de protéger votre périphérique.</p>'),(10,0,'Conçue pour la durabilité et la mobilité','<p>Prenez la route avec une tablette toute aussi résistante qu\'élégante. Combinez-la aux touches précises et à la puissance constante du clavier pleine taille HP Premium doté d\'une solide charnière Reflex</p>'),(10,1,'Sécuritée renforcée des données et périphériques','<p>Informations sensibles en toute sécurité grâce à HP Sure Start, HP BIOSphere, HP Client Security, TPM et SED3. Et bénéficiez en plus d\'une garantie supplémentaire grâce à un lecteur Smart Card et d\'empreintes digitales sur le clavier d\'alimentation en option.</p>'),(10,2,'Accessoires innovants dédiés usage','<p>Répondez aux besoins spécifiques de votre entreprise avec des accessoires innovants comme sa station d\'accueil sans fil Wigig en option, un clavier de voyage ou de bureau en option, un stylet Wacom pour saisie sur l\'écran.<br></p>'),(11,0,'Conçue pour votre succès','<p>Spécifiquement conçue pour vous accompagner dans vos activités professionnelles, avec une résolution HD pour une lisibilité naturelle du contenu en pleine page et un écran particulièrement résistant.</p>'),(11,1,'Protection des données renforcée','<p>D\'un niveau de contrôle et d\'une sécurité à toute épreuve avec la tablette Android™ équipée d\'un dispositif matériel et logiciel professionnel dédié et intégré.<br></p>'),(11,2,'Création instantanée de contenu','<p>Augmentez votre productivité en numérisant instantanément les notes transcrites sur papier. Egalement équipée d\'une suite intégrée d\'applications de haute fidélité et la large gamme d\'applications disponibles sur Google Play™.</p>'),(12,0,'Conçue pour votre succès.','<p>Spécifiquement conçue pour vous accompagner dans vos activités professionnelles, avec une résolution HD pour une lisibilité naturelle du contenu en pleine page et un écran particulièrement résistant.</p>'),(12,1,'Protection des données renforcée.','<p>D\'un niveau de contrôle et d\'une sécurité à toute épreuve avec la tablette Android™ équipée d\'un dispositif matériel et logiciel professionnel dédié et intégré.</p>'),(12,2,'Création instantanée de contenu','<p>Augmentez votre productivité en numérisant instantanément les notes transcrites sur papier. Egalement équipée d\'une suite intégrée d\'applications de haute fidélité et la large gamme d\'applications disponibles sur Google Play™.</p>'),(13,0,'Conçue pour l\'enseignement.','<p>Particulièrement robuste pour l\'usage d\'un collégien, cette tablette a été pensée sur mesure pour appréhender l\'outil numérique grâce à ses caractéristiques techniques simples et adaptées.<br></p>'),(13,1,'Dotée d\'outils et contenus adaptés','<p></p><p>Equipée&nbsp;de nouveaux utilitaires et contenus dédiés à l\'enseignement et l\'innovation pédagogique: gestion de classe, collaboration, communication entre élèves, parents et enseignants.<br></p><p></p>'),(13,2,'Optimisée pour la mobilité','<p>Connectivité sans fil de classe d\'entreprise extrêmement fiable et d’une connectivité 3G en option pour se connecter en tout lieu et en sécurité. La batterie longue durée permet d\'assurer toute la journée de travail.<br></p>'),(14,0,'Conçue pour l\'enseignement.','<p>Particulièrement robuste pour l\'usage d\'un collégien, cette tablette a été pensée sur mesure pour appréhender l\'outil numérique grâce à ses caractéristiques techniques simples et adaptées.</p>'),(14,1,'Dotée d\'outils et contenus adaptés.','<p>Equipée de nouveaux utilitaires et contenus dédiés à l\'enseignement et l\'innovation pédagogique: gestion de classe, collaboration, communication entre élèves, parents et enseignants.</p>'),(14,2,'Optimisée pour la mobilité.','Connectivité sans fil de classe d\'entreprise extrêmement fiable et d’une connectivité 3G en option pour se connecter en tout lieu et en sécurité. La batterie longue durée permet d\'assurer toute la journée de travail.<p><br></p>'),(15,0,'MDM - Mobile Device Management','<p>Kiosque applicatif, inventaire, surveillance, provisionning</p>'),(15,1,'MAM - Mobile Application Management','<p>Télé-distribution, mise à jour et sécurisation des applications métiers. Sauvegardes des données applicatives</p>'),(15,2,'MCM - Mobile Content Management','<p>Synchronisation de bases documentaires, arborescences, données métiers, fichiers volumineux</p>'),(15,3,'Types de terminaux gérés','<p>PC portables, smartphones, tablettes, terminaux durcis, terminaux embarqués</p>'),(19,0,'Mobilité professionnelle abordable et fiable','<p>Dynamisez votre activité avec une tablette format 8\', proposée à un prix abordable et qui a subi des tests exigeants de durabilité.</p>'),(19,1,'Une sécurité professionnelle','<p>Permet de sécuriser et gérez vos données, vos périphériques et votre identité grâce aux fonctionnalités professionnelles de cryptage des données TPM et prêt à être intégré à un utilitaire de gestion de flotte mobile.<br></p>'),(19,2,'Une meilleure expérience utilisateur','<p>Optimisez votre productivité avec son éventail d\'accessoires en option, de logiciels et services HP. Vous pourrez personnaliser votre tablette spécifiquement pour votre usage quotidien.<br></p>'),(23,0,'Facile à sécuriser. Facile à gérer.','<p>Bénéficiez d\'options de sécurité et de facilité de gestion de niveau professionnel sur la HP Pro Tabl 608 équipée de fonctionnalités telles que l\'authentification à facteurs multiples, la protection des données d\'entreprise, HP Client Security, HP Touchpoint Manager, et bien plus encore.</p>'),(23,1,'Haute performance dans une configuration compacte.','<p>Les performances de la tablette compacte, mince et légère reçoivent un nouvel élan grâce à l\'écran QXGA incroyablement puissant, l\'assistant personnel virtuel Cortana et une combinaison de connectivité et de performances pour prendre en charge vos besoins métier.</p>'),(23,2,'Des gains d\'efficacité grâce à des solutions mobiles.','<p>Adaptez votre expérience aux besoins de votre entreprise avec un clavier, des étuis, une station d\'accueil portable et plus pour personnaliser votre tablette.</p>'),(23,3,'Votre partenaire de confiance en matière de migration.','<p>Des ateliers de préparation à l\'aide gratuite pour la migration, HP et nos partenaires rendront votre entreprise opérationnelle sur Windows 10.&nbsp; HP vous aide à préparer votre environnement et à mettre en œuvre la solution idéale avec le matériel adéquat.</p>'),(27,0,'Sécurisé et performant.','<p>Protégez-vous contre les menaces de sécurité d\'aujourd\'hui et optimisez les fonctionnalités de gestion et de productivité pour les entreprises avec Windows 10 Professionnel.</p>'),(27,1,'La puissance de Windows 10.','<p>Système d\'exploitation Windows 10 Professionnel de 64 bits pour prendre en charge vos applications métier, alimenté par un processeur Intel Atom Quad Core.4 Et, avec jusqu\'à 4 Go de mémoire; vous bénéficiez des performances dont vous avez besoin pour réaliser vos objectifs.</p>'),(27,2,'La solidité comme valeur.','<p>Bénéficiez d\'une véritable expérience d\'ordinateur portable professionnel grâce à la base de clavier robuste et à la charnière reflex de 135° qui offrent une large gamme de positions d\'écran stables et équilibrées, plus la garantie de durabilité grâce aux 120 000 heures de tests effectués lors du processus Total Test Process HP.</p>'),(29,0,'OFFLINE/ONLINE ','<p><br></p>'),(31,0,'fiche produit fonction 1','<p>blabla</p>'),(31,1,'fiche produit fonction 2','<p>blabla</p><p>www.mobileiron.com</p>'),(34,0,'Concentrez-vous sur vos priorités','<p>Bénéficiez d’une solution d’envois multicanal réactive, disponible 24h/24, 7j/7, en toute autonomie.&nbsp;</p><p><br></p><p>Réalisez tous vos envois en ligne, depuis un Espace Client unique.&nbsp;</p><p><br></p><p>Maileva prend en charge l’ensemble des opérations liées à vos envois.</p>'),(34,1,'Gagnez en efficacité et en réactivité','<p>Réalisez tous vos envois en 15 minutes : courrier, recommandé ...</p><p><br></p><p>Avec Maileva, tout envoi déposé avant 14h est remis à La Poste le jour-même.</p><p><br></p><p>Vous disposez également de nombreux services pour enrichir vos envois.</p>'),(34,2,'Maîtrisez et otpimisez votre budget','<p>Optimisez votre budget en réalisant au moins 20% d’économies dès votre 1er envoi grâce à des tarifs préférentiels. </p><p><br></p><p>Choisissez la formule la plus adaptée à vos besoins.</p><p></p>'),(34,3,'Appuyez-vous sur une solution simple et sûre','<p>Confiez vos envois à Maileva, <br>une offre La Poste Solutions Business, leader sur le marché.</p><p><br></p><p>Avec Maileva, vous pilotez vos envois en temps réel, recevez des notifications par e-mail et accédez à des tableaux de bord en ligne.</p><p>&nbsp;</p><p></p>'),(34,4,'Bénéficiez d\'un accompagnement personnalisé gratuit','<p><span style=\"line-height: 1.4285;\">Réalisez vos envois en toute&nbsp;sérénité !</span><br></p><p>Maileva vous accompagne gratuitement au démarrage et tout au long de votre utilisation de ses solutions.</p><p><br></p><p><span style=\"line-height: 1.4285;\">Pour tout besoin, contactez le service clients au 0810 802 801 (prix d\'appel local). &nbsp;</span><br></p>'),(36,0,'Mobile Device Management - MDM','<p>La plateforme MobileIron permet aux responsables informatiques de sécuriser et gérer un ensemble varié d\'appareils mobiles, de provisionner automatiquement des paramètres d\'entreprise tels que le Wi-Fi et VPN et de fournir aux utilisateurs un accès sécurisé aux e-mails professionnels. Si un appareil n\'est pas utilisé de manière conforme, le responsable informatique peut définir des actions correctives, telles que la notification à l\'utilisateur des infractions aux règles ou la suppression sélective des informations d\'entreprise sans incidence sur les données personnelles.&nbsp;</p>'),(36,1,'Mobile Application Management - MAM','<p>Cette plateforme MobileIron fournit une solution de bout en bout qui provisionne, déploit, sécurise les applications mobiles. Grâce à ces fonctionnalités, le département informatique peut gérer l\'ensemble du cycle de vie des applications, de leur distribution aux employés via la boutique d\'applications d\'entreprise privée Apps@Work à leur sécurisation sur l\'appareil, en passant par la conteneurisation différenciée des applications d\'entreprise et des applications personnelles à l\'aide de MobileIron AppConnect.</p>'),(36,2,'Mobile Content Management - MCM','<p>Grâce à la solution intégrée de MobileIron, les départements informatiques peuvent garantir aux utilisateurs une consultation et une gestion sécurisée des documents d\'entreprise résidant dans divers référentiels de contenu tels que Sharepoint, WebDav et CIFS. La solution MobileIron garantit également le chiffrement des pièces jointes aux e-mails et leur affichage à l\'aide d\'applications autorisées dont MobileIron Docs@Work ou les suites Office. De plus, les utilisateurs finaux peuvent parcourir de manière sécurisée le contenu de l\'intranet de l\'entreprise sans recourir à un VPN étendu à tout l\'appareil.</p>'),(41,0,'Pour plus de robustesse.','<p>Les étuis HP Rugged Case sont durcis et conçus pour protégez votre tablette dans les environnements les plus extrêmes.</p>'),(41,1,'Pour plus de productivité.','<p>Les étuisHP Bluetooth Keyboard Case vous permettent de transformer instantanément vos tablettes en ordinateur grâce à leur clavier intégré afin de rester productif, même durant vos trajets.<br></p>'),(41,2,'Pour plus de confort en mobilité.','<p>Les étuis HP Smart Cover Case protègent et se positionnent idéalement pour avoir une vision plus claire de vos travaux.<br></p>'),(42,0,'Pour plus de sécurité.','<p>La HP Security Jacket pour protéger vos données grâce au lecteur Smart Card et lecteur d’empreintes digitales.</p>'),(42,1,'Pour plus d\'autonomie','<p>La HP Expansion Jacket : protection, connectivité et autonomie record grâce à la batterie supplémentaire.</p>'),(42,2,'Pour plus de mobilité.','<p>Avec la HP Rugged Case pour transporter facilement, et protéger efficacement votre tablette, grâce à son aspect durcie.<br></p>'),(42,3,'Pour plus de relation client.','<p>La HP Retail Jacket conçue pour optimiser l’interaction client/vendeur sur la surface de vente en transformant votre tablette point de vente mobile. <br></p>'),(43,0,'Un station d\'accueil pour chaque tablette HP','Qu\'elle soit basée sur Windows ou Android, retrouvez la station d\'accueil de votre tablette professionnelle HP pour une utilisation au bureau, en confort visuel avec la possibilité d\'interfacer, clavier, souris ou autre périphérique utile à plus de productivité.<br>'),(43,1,'Simples, optimales et portables','<p>Toutes les stations d\'accueil des tablettes professionnelles HP ont été pensées pour aller à l\'essentiel de vos besoins. Une conception optimale telle que l\'apparition d\'un pogo pin pour les stations des Pro Tablet 608 ou Pro Slate 8 et 12, ou d\'un clapet de rangement pour l\'emmener dans vos déplacements.</p>'),(44,0,'Gagnez en précision.','<p>Les stylets HP sont conçus pour être extrêmement performant et précis. Selon votre équipement professionnel, choisissez le stylet qui lui correspond pour une prise de note directement sur votre tablette.<br></p>'),(44,1,'Eliminez les contraintes d\'interfaçage','<p>Grâce à la gamme complète d\'adaptateurs HP, identifiez le type d\'interface dont vous aurez besoin au quotidien et qui vous accompagnera dans vos déplacements.</p><p>Vous compléterez ainsi les possibilités d\'usage et de connectivité de votre équipement.<br></p>'),(45,0,'Signer des documents en mobilité','<h3>La <b>signature électronique</b> permet à vos clients et vos utilisateurs de signer des documents de manière 100% numérique à toute heure, en tous lieux et depuis tout terminal (mobile, tablette, PC) : chez eux par Internet, avec un conseiller en point de vente, en itinérance, par téléphone…  </h3>'),(45,1,'Donner valeur légale au document électronique signé','<h2>La <b>signature électronique</b> remplace la signature manuscrite, avec la même valeur légale, pour marquer l’engagement sur le document. Un dossier de preuve opposable en cas de litige est constitué. Archivé dans un coffre-fort numérique, sa conservation intègre est assurée pendant toute la durée légale. </h2>'),(45,2,'Simple, efficace, innovant','<h3>Grâce à la <b>signature électronique</b>, vous améliorez le service utilisateurs, vous gagnez en efficacité commerciale et opérationnelle : service accessible à tout heure et en tout lieu, par tous les clients et pour tous les canaux, suppression du papier, réduction des temps et des coûts de traitement.  </h3>'),(46,0,'Préserver la valeur probante','<h2>Le <b>coffre-fort électronique</b> de Morpho permet de garantir dans le temps l’intégrité et la valeur probante de leurs archives numériques : contrats, documents, données, transactions… Elles peuvent être restituée certifiées intactes à tout moment et constituer un élément de preuve en cas de litige.</h2>'),(46,1,'Protéger l’information sensible','<h3>Le <b>coffre-fort électronique</b> Morpho  permet de garantir la confidentialité des documents sensibles : seules les personnes habilitées peuvent y accéder (contrôle d’accès). Vous pouvez mettre en place un coffre-fort d’Entreprise ou un Espace personnel sécurisé pour vos clients. &nbsp;</h3>'),(46,2,'Répondre au cadre réglementaire de traçabilité ','<h3>Le <b>coffre-fort électronique</b> de Morpho permet aux  entreprises d’assurer leurs obligations réglementaires de traçabilité : tracer des événements, des actions ou des informations. Les traces sont conservées pour en garantir l’intégrité et pouvoir être produites devant la justice en tant que preuves.</h3>'),(47,0,'Collectez les tâches visuellement','<p>Pour <b>faciliter la compréhension</b>, chaque tâche est associée à une photo, un croquis ou bien une localisation.</p>'),(47,1,'Collaborez plus simplement','<p>Les tâches peuvent être assignées à une personne ou un groupe, même extérieur à votre société.</p>'),(47,2,'Suivez mieux vos projets','<p>BulldozAIR <b>organise automatiquement vos tâches</b> pour faciliter le suivi et les recherches.</p>'),(47,3,'Créez vos rapports automatiquement','<p>L\'application <b>simplifie la génération et le partage des  rapports d\'activités</b>.<br></p>'),(47,4,'Depuis n\'importe quel appareil','<p>L\'application est disponible sur :<br></p><p></p><ul><li><span style=\"line-height: 1.42857; background-color: initial;\">Android</span><br></li><li><span style=\"line-height: 1.42857; background-color: initial;\">iOS</span><br></li><li><span style=\"line-height: 1.42857; background-color: initial;\">Windows 8</span><br></li><li><span style=\"line-height: 1.42857; background-color: initial;\">Directement sur un navigateur Web</span><br></li></ul><p></p>'),(47,5,'Et même sans connexion !','<p>BulldozAIR centralise tous vos documents dans le cloud et les rend accessibles sans connexion internet.</p>'),(48,0,'Une durabilité audacieuse','<p>Utilisez cette solution durable partout où vous en avez besoin. Elle est conçue pour être nettoyée et répond aux normes IP 65 (eau et la poussière) et a passé et réussi les tests MIL-STD 810G.</p>'),(48,1,'Une productivité mobile qui travaille aussi dur que vous','<p>Travaillez efficacement avec jusqu\'à 20 heures d\'autonomie de la batterie et utilisez le lecteur de code barres 2D (sur certaines configurations) pour accéder rapidement à des informations telles que des données d\'inventaire. Port série RS232 également intégré<br></p>'),(48,2,'Sécurité maximum dès le départ','<p>Travaillez sereinement grâce aux nombreuses fonctionnalités de sécurité proposées : Lecteur de carte à puce intégré avec chiffrement FIPS-140-2 et certification IPS-201, des solutions HP Client Security et HP BIOS Protection, ainsi que le chiffrement complet du disque</p>'),(49,0,'Concentrez-vous sur vos priorités','<p>Bénéficiez d’une solution d’envois multicanal réactive, disponible 24h/24, 7j/7, en toute autonomie. <br></p><p><br></p><p>Réalisez tous vos envois en ligne avec un seul prestataire, depuis un Espace Client unique. <br></p><p><br></p><p>Maileva prend en charge l’ensemble des opérations liées à vos envois.</p>'),(49,1,'Gagnez en efficacité','<p>Réalisez tous vos envois en 15 minutes : courrier, recommandé … <br></p><p><br></p><p>Avec Maileva, tout envoi déposé avant 14h est remis à La Poste le jour-même.</p><p><br></p><p>Vous disposez également de nombreux services pour enrichir vos envois.</p>'),(49,2,'Maîtrisez et optimisez votre budget','<p>Optimisez votre budget en réalisant au moins 20% d’économies dès votre 1er envoi grâce à des tarifs préférentiels. <br></p><p><br></p><p>Choisissez la formule la plus adaptées à vos besoins.</p>'),(49,3,'Appuyez-vous sur une solution simple et sûre','<p>Confiez vos envois à Maileva, <br>une offre La Poste Solutions Business, leader sur le marché.</p><p><br></p><p>Avec Maileva, vous pilotez vos envois en temps réel depuis votre Espace Client, recevez des notifications par e-mail et accédez à des tableaux de bord pour toutes vos opérations réalisées au cours des 6 derniers mois.</p>'),(49,4,'Bénéficiez d\'un accompagnement personnalisé gratuit','<p>Réalisez vos envois ente sérénité !</p><p><br></p><p>Maileva vous accompagne gratuitement au démarrage et tout au long de votre utilisation de ses solutions.</p><p><br></p><p>Pour tout besoin, contactez le service clients au 0810 802 801 (prix d\'appel local).  </p>'),(50,0,'Couvre tous vos besoins d’authentification forte','<h2>Les solutions d\'<b>authentification forte</b> de Morpho répondent à de très nombreux cas d\'usage : sécurisation d\'accès à des portails ou services en ligne, accès au réseau professionnel à distance, validation d\'opérations sensibles (virement, prélèvement…), authentification avant signature électronique, …</h2>'),(50,1,'Est innovante : mobile, biométrie','<h3>Pour arriver au « meilleure équilibre », autour de critères tels que : population cible, ergonomie, niveau de risque, coût… la solution Morpho supporte tous les moyens d\'<b>authentification forte</b> y compris les plus innovants : biométrie, mobile, carte à puce, OTP SMS, OTP OATH…</h3>'),(50,2,'Offre une expérience utilisateur optimale','<h3>Les solutions d\'<b>authentification forte</b> de Morpho vous permettent d’optimiser l’expérience utilisateur selon le niveau de risque. Par exemple un autre moyen d’authentification peut lui être proposé s’il a perdu ou oublié le moyen demandé en premier lieu.&nbsp;</h3>'),(51,0,'Concentrez-vous sur vos priorités','<p>Bénéficiez d’une solution d’envois multicanal réactive, disponible 24h/24, 7j/7, en toute autonomie. <br></p><p><br></p><p>Réalisez tous vos envois en ligne avec un seul prestataire, depuis un Espace Client unique. <br></p><p><br></p><p>Maileva prend en charge l’ensemble des opérations liées à vos envois.</p>'),(51,1,'Gagnez en efficacité et en réactivité','<p>Réalisez tous vos envois en 15 minutes : courrier, recommandé !</p><p><br></p><p>Avec Maileva, tout envoi déposé avant 14h est remis à La Poste le jour-même.</p><p><br></p><p>Vous disposez également de nombreux services pour enrichir vos envois.</p>'),(51,2,'Maîtrisez et optimisez votre budget','<p>Optimisez votre budget en réalisant au moins 20% d’économies dès votre 1er envoi grâce à des tarifs préférentiels. <br></p><p><br></p><p>Choisissez la formule la plus adaptées à vos besoins.</p>'),(51,3,'Appuyez-vous sur une solution simple et sûre','<p>Confiez vos envois à Maileva, <br>une offre La Poste Solutions Business, leader sur le marché.</p><p><br></p><p>Avec Maileva, vous pilotez vos envois en temps réel depuis votre Espace Client, recevez des notifications par e-mail et accédez à des tableaux de bord pour toutes vos opérations réalisées au cours des 6 derniers mois.</p>'),(51,4,'Bénéficiez d\'un accompagnement personnalisé gratuit','<p>Réalisez vos envois en sérénité !</p><p><br></p><p>Maileva vous accompagne gratuitement au démarrage et tout au long de votre utilisation de ses solutions.</p><p><br></p><p>Pour tout besoin, contactez le service clients au 0810 802 801 (prix d\'appel local).  </p>'),(53,0,'Complet','<p>Des smartphones aux ordinateurs portables, HP Touchpoint Manager permet de gérer un large choix d’appareils exécutant Microsoft Windows, Android et iOS !</p>'),(53,1,'Simple','<p>L\'interface Web intuitive de HP Touchpoint Manager simplifie la gestion quotidienne des fonctions informatiques. Les stratégies intégrées fondées sur des bonnes pratiques sectorielles contribuent à protéger vos données et à maintenir vos périphériques à l\'état opérationnel. Les alertes automatisées avertissent l\'administrateur système en cas d\'action requise.</p>'),(53,2,'Economique','<p>HP Touchpoint Manager automatise vos fonctions informatiques pour vous permettre d\'économiser du temps et de l\'argent. HP propose plusieurs options d\'abonnement mensuel, y compris un forfait de base gratuit. HP Touchpoint Manager vous aide à réduire les périodes d\'indisponibilité de vos employés et à mieux vous concentrer sur votre activité.</p>'),(53,3,'Une version \'Basic\' très complète:','<p>- Localisation des appareils.<br>- Installation de firewall.<br>- Création de groupes d\'utilisateurs.<br>- Etat de fonctionnement du disque dur.<br>- Verrouillage à distance de l\'appareil.<br>- Sécurité des appareils mobiles<br>- Alertes proactives.<br>- Alarme à distance.<br>- Etat de fonctionnement de la batterie.<br>- Inventaire des utilisateurs et des appareils.<br>- Installation d\'Anti-Virus.<br>- Suppression des données à distance.</p>'),(53,4,'La version \'Pro\' inclue également:','<p>- Déploiement d\'applications mobiles.<br>- Réinitialisation du mot de passe.<br>- Assistance TouchPoint HP par chat et téléphone.<br>- Prise de contrôle à distance.<br>- Gestion d\'accès Wi-Fi automatisé.</p>'),(53,5,'En savoir plus...','<p><a href=\"http://www8.hp.com/fr/fr/solutions/touchpoint-manager/overview.html\"><span data-href=\"http://www8.hp.com/fr/fr/solutions/touchpoint-manager/overview.html\" data-auto-link=\"true\">http://www8.hp.com/fr/fr/solutions/touchpoint-manager/overview.html</span></a> <br></p>'),(54,0,'Contrôlez les applications, l\'accès à Internet et les périphériques externes des élèves.','Prenez le contrôle des ordinateurs des élèves pour y ajouter du contenu, pour imposer des limitations aux applications, au matériel ou à l\'accès à Internet, et mettez en place des sessions de chat en groupe ou individuelles. Configurez les lecteurs optiques, les périphériques USB et les autres lecteurs externes en lecture seule pour prévenir l\'introduction de fichiers non autorisés ou de virus, et pour empêcher le vol de contenu d\'apprentissage.'),(54,1,'Effectuez le suivi des activités et des progrès des élèves.','<p>Gardez un œil sur le progrès des élèves et encouragez leur participation en surveillant les applications ouvertes, l\'utilisation d\'Internet et les frappes au clavier.</p><p>Passez en revue les activités des élèves grâce aux historiques d\'utilisation d\'Internet, des applications, de messagerie instantanée et des imprimantes.</p>'),(54,2,'Créez un environnement collaboratif. ','<p>Enrichissez l\'apprentissage des élèves grâce notamment au partage de messages, de sites et de documents et au chat en groupe.</p><p>Compilez un journal en PDF au fil de la journée pour aider les élèves à effectuer le suivi de leurs activités et de leurs devoirs. Développez des plans de cours, archivez l\'intégralité des cours et des discussions, ajoutez des chapitres ou créez des signets pour vous organiser.</p>'),(54,3,'Évaluez la compréhension des élèves grâce à une panoplie d\'outils d\'évaluation','<p>Créez des tests avec des fichiers audio et vidéo et suivez en temps réel les scores des élèves. Jaugez le niveau de compréhension de manière instantanée grâce à des questionnaires.</p><p>Mettez en place des quiz et questionnaires à la manière de jeux télévisés pour renforcer l\'apprentissage collaboratif. Effectuez des enregistrements audio des élèves et rejouez-les grâce aux fonctions de suivi audio, idéales pour un laboratoire de langue.</p>'),(54,4,'Gérez efficacement les ordinateurs des élèves','<p>Démarrez les ordinateurs des élèves à partir de la console de l\'enseignant ou du technicien et économisez l\'énergie en arrêtant tous les ordinateurs à partir d\'une commande centralisée. Consultez et gérez les activités d\'impression des élèves et échangez des fichiers entre ordinateurs.</p><p>La console du technicien indique des informations matérielles et logicielles détaillées au personnel informatique de l\'établissement. Contrôlez les ordinateurs connectés à distance pour y distribuer des fichiers, pour configurer les systèmes d\'exploitation, les logiciels antivirus et les paramètres de protection Internet des logiciels.</p>'),(54,5,'En savoir plus...','<p><a href=\"http://www8.hp.com/fr/fr/classmanager/overview.html\"><span data-href=\"http://www8.hp.com/fr/fr/classmanager/overview.html\" data-auto-link=\"true\">www8.hp.com/fr/fr/classmanager/overview.html</span></a></p><p><br></p><p>Contact spécialiste: https://ssl.www8.hp.com/h41268/live/index.aspx?qid=21077&nbsp; <br></p><p><br></p>'),(58,1,'','<p>je voudrais écrire sans pb <br></p>'),(59,0,'Design et mobilité sans compromis','<p>Remarquablement fin et élégant, l\'Elite x2 1012 est un 2-en-1 pour les professionnels mobiles qui ne veulent faire aucun compromis en matière de puissance, de durabilité, de connectivité LTE en option4 et de productivité lors de leurs déplacements, le tout dans un design élégant.</p>'),(59,1,'Conçus pour les pros, adopté par tous','<p>Une conception exceptionnelle facile à administrer. L\'Elite x2 1012 offre intègre les fonctionnalités de sécurité et de gestion de la gamme Elite, une durabilité de niveau professionnel, une maintenance facile sur site2, une disponibilité des références dans le monde entier et une asssistance assurée dans 180 pays</p>'),(59,2,'Des accessoires adaptés à votre façon de travailler','<p>A votre bureau ou en déplacement, soyez équipé pour affronter votre journée de travail avec le stylet HP Active Pen avec App Launch utilisant la technologie Wacom. Utilisez des accessoires pour accroître votre efficacité.&nbsp; Ajoutez des stations d\'accueil professionnelles en option3 et des claviers HP.</p>'),(60,0,'Productivité.','<p>Soyez productif grâce à une gamme d\'accessoires dédiés comme la HP Expansion Jacket qui vous offre, grâce à sa batterie supplémentaire, une autonomie rare. <br></p>'),(60,1,'Transformez votre tablette en terminal point de vente.','<p>Equipez votre tablette de nos solutions point de vente mobile afin d\'équiper vos employés jusqu\'en rayon et améliorer l\'interaction avec les clients.<br></p>'),(60,2,'Retrouvez vos connectiques.','<p>Grâce à ses nombreux ports la station d\'accueil ElitePad offre des connectiques de haut niveau, comparable à celles d\'un UltraBook et permettant de répondre à toutes vos exigences de productivité.<br></p>'),(61,0,'Connectivité à portée de main.','<p>HP Mobile Connect est la solution idéale pour les utilisateurs qui veulent profiter du haut débit mobile sans abonnement et sans avoir à rechercher des points d\'accès (hot spots). <br></p><p>En déplacement pour quelques semaines ? Ou seulement quelques jours ? Dans tous les cas de figure, HP Mobile Connect vous propose un forfait adapté à vos besoins et à votre budget. Achetez et utilisez des services adaptés à vos besoins, et seulement au moment où vous en avez besoin.</p>'),(61,1,'Plus économique.','<p>Déplacement professionnel ? Le forfait prépayé HP Mobile Connect « One Week Plan » vous garantit une semaine de connexion à prix fixe et unique. Cette solution est plus économique que les dépenses accumulées pour utiliser les hot spots des aéroports, des hôtels ou autres lieux publics.</p>'),(61,2,'Plus pratique.','<p>Pourquoi vous limiter aux hot spots sans fil et vous imposer leurs informations de connexion parfois complexes ? Avec HP Mobile Connect, vous avez simplement besoin d\'un mot de passe pour bénéficier d\'une expérience de connexion homogène, sans jamais avoir à vous préoccuper de la proximité d\'un hot spot.</p>'),(61,3,'Plus sécurisé.','<p>Oubliez les risques de sécurité du Wi-Fi public : le service HP Mobile Connect est sécurisé en permanence sur les produits HP.<br></p>'),(61,4,'3 ans de données déjà intégrés sur certains produits HP','<p>Jusqu\'à 200MB par mois pendant 3 ans déjà intégrés dans votre produit HP. <br></p><p>Renseignez vous, le prépaiement a déjà été pris en compte, sans souscription complémentaire à effectuer sur une large gamme de produits HP.<br></p>'),(62,0,'Reception de colis','<p>Le point de vente réceptionne les colis reçus de la centrale d\'achat ou de l\'entepôt sur son terminal mobile.&nbsp;</p>'),(62,1,'Distribution d\'un colis','<p>Le point de vente remet le colis au client sur présentation de son numéro de commande. Il saisit le numéro ou scanne le code barre à l\'aide de son terminal mobile.</p><p><span style=\"line-height: 1.42857;\">Un module de recherche permet de retrouver le client par nom, &nbsp;par date de commande, par fournisseur.</span></p><p>Le client signe sur le terminal mobile.&nbsp;</p><p>L\'information est reportée en temps réel en 3G ou en Wifi.</p>'),(62,2,'Retour d\'un colis','<p>Si le client souhaite retourner son colis à l\'expéditeur, le point de vente peut réceptionner un colis \"retour\" et le renvoyer à la centrale d\'achat ou chez le fournisseur. Il scanne le bon de retour figurant sur le colis.</p>'),(62,3,'Prise de photo','<p>Si le colis arrive défectueux, le point de vente peut signaler l\'incident en envoyant la photo du colis. Il utilise son terminal mobile et envoie la photo instantanément.</p>'),(63,1,'Optimisation des réceptions','<p><br></p>'),(63,2,'Ré étiquetage en mobilité des produits','PDA a<span style=\"line-height: 1.42857;\">ssocié à une imprimante mobile connectée en Bluetooth.</span><p><span style=\"line-height: 1.42857;\">En période de soldes par exemple, les vendeurs peuvent programmer un nouveau prix sur leur terminal mobile et imprimer une étiquette corrective à l\'aide d\'une imprimante mobile connectée au PDA en bluethoth.</span></p>'),(63,3,'Gestion des retours',''),(63,4,'Réalisation des Inventaires ','<p>Le magasin peut réaliser des Inventaires partiels (tournants) sur des rayons à forte valeur ajoutée.&nbsp;</p>'),(63,5,'Gestion des préventes web et réservations','<p>e magasin réceptionner les colis en provenance de l\'entrepôt et pré-réservés sur le web. (Click and collect)</p><p><span style=\"line-height: 1.42857;\">Les colis sont remis au client après avoir été identifié&nbsp;</span><span style=\"line-height: 20px;\">grâce</span><span style=\"line-height: 1.42857;\">&nbsp;au lecteur de&nbsp;code à barres.&nbsp;</span></p>'),(63,6,'Relevé de prix concurrence','L\'application permet de&nbsp;réaliser des relevés de prix sur un échantillon de produits ou un rayon de la concurrence.&nbsp;<p><br></p>'),(64,1,'Conformité','<p>- Vérifier la conformité des produits entrants et s’assurer de la bonne réception</p><p><br></p>'),(64,2,'DLUO /DLC ','<p>- Vérifier les dates de péremption des produits entrants dans le restaurant : pouvoir refuser une date trop ancienne</p><p>- Optimiser les DLUO et le First in first out</p><p><br></p>'),(64,3,'Traçabilité alimentaire','<p>- Assurer une traçabilité de bout en bout : depuis l\'entrepôt / le fournisseur jusqu\'à l\'assiette du consommateur.</p>'),(64,4,'Litiges','<p>- Eviter les litiges dues aux livraisons : capacité à refuser une palette non attendue<br></p>'),(67,1,'La Gestion de parc des équipements mobiles : MDM  (Mobile Device','<div><br></div><p><span style=\"line-height: 1.42857;\">Le MDM Wizzbe gère le déploiement, la sécurisation, la surveillance, l\'intégration et&nbsp;</span><span style=\"line-height: 1.42857;\">l\'administration des appareils mobiles.&nbsp;</span></p><p><span style=\"line-height: 1.42857;\"><br></span></p><p><span style=\"line-height: 1.42857;\">L\'objectif du MDM consiste à optimiser la fonctionnalité et la sécurité des appareils&nbsp;</span><span style=\"line-height: 1.42857;\">mobiles au sein des établissements scolaires, tout en protégeant simultanément le&nbsp;</span><span style=\"line-height: 1.42857;\">réseau.</span></p><p><span style=\"line-height: 1.42857;\"><br></span></p><p><span style=\"line-height: 1.42857;\">Le  MDM Wizzbe permet également aux administrateurs des établissements et des&nbsp;</span><span style=\"line-height: 1.42857;\">collectivités de superviser leur flotte matérielle.</span></p><p><span style=\"line-height: 1.42857;\"><br></span></p><div><p>Le MDM Wizzbe gère également les appareils personnels des élèves dans un cadre&nbsp;<span style=\"line-height: 1.42857;\">BYOD.</span><span style=\"line-height: 1.42857;\">&nbsp;</span></p><p><span style=\"line-height: 1.42857;\"><br></span></p><p>Exclusivité Wizzbe&nbsp;: un système d’alarme optimisé pour les établissements scolaires&nbsp;<span style=\"line-height: 1.42857;\">pour mieux suivre les équipements.&nbsp;</span></p><p><span style=\"line-height: 1.42857;\"><br></span></p><p><span style=\"line-height: 1.42857;\">En effet,  pour la maintenance préventive des</span><span style=\"line-height: 1.42857;\">équipements, la solution Wizzbe propose un écran de synthèse dédié au suivi global</span><span style=\"line-height: 1.42857;\">des équipements et de leur état de fonctionnement. Le suivi est facilité par les&nbsp;</span><span style=\"line-height: 1.42857;\">indicateurs d’alarme paramétrables.</span></p></div>'),(67,2,'La Gestion des applications mobiles : MAM pour tablettes Android et Windows','<p>La MAM consiste à distribuer, sécuriser et suivre les applications sur les équipements&nbsp;<span style=\"line-height: 1.42857;\">des élèves.</span></p><p>Wizzbe propose 3 niveaux de délégation des droits :</p>-&nbsp;<span style=\"line-height: 1.42857;\">Le niveau Administrateur : pour gérer les applications via le profil déployé sur&nbsp;</span><span style=\"line-height: 1.42857;\">chaque tablette. Les applications sont affectées à un matériel et seront disponibles&nbsp;</span><span style=\"line-height: 1.42857;\">quel que soit l’élève qui se connecte).</span><div><p><span style=\"line-height: 20px;\"><br></span></p><p>- Le niveau Enseignant : pour diffuser les applications aux élèves à tout moment et&nbsp;<span style=\"line-height: 1.42857;\">en fonction des besoins de cours. Les applications présentes dans Wizzbe pour&nbsp;</span><span style=\"line-height: 1.42857;\">l’élève sont alors liées à l’élève lui-même (2 élèves  qui se connectent sur une&nbsp;</span><span style=\"line-height: 1.42857;\">même tablette  peuvent avoir accès dans leur univers Wizzbe à des applications&nbsp;</span><span style=\"line-height: 1.42857;\">différentes).</span></p><p><span style=\"line-height: 1.42857;\"><br></span></p><p>- Le niveau Élève : pour télécharger les applications depuis un store d’internet, si&nbsp;<span style=\"line-height: 1.42857;\">cette possibilité lui est donnée par l’administrateur de l’établissement.</span></p></div>'),(69,1,'','Sélectionnez un type de produitfzerazerazerzeezc ezerza<br>');
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_follow_ups`
--

LOCK TABLES `product_follow_ups` WRITE;
/*!40000 ALTER TABLE `product_follow_ups` DISABLE KEYS */;
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
INSERT INTO `product_keyword` VALUES (8,1),(23,1),(51,1),(58,1),(75,1),(8,2),(75,2),(76,2),(95,2),(8,3),(51,3),(76,3),(95,3),(8,4),(51,4),(61,4),(76,4),(95,4),(8,5),(51,5),(76,5),(54,6),(67,6),(13,7),(14,7),(23,7),(59,7),(61,7),(67,7),(82,7),(8,8),(13,9),(14,9),(54,9),(67,9),(82,9),(13,10),(14,10),(54,10),(67,10),(5,11),(6,11),(19,11),(29,11),(43,11),(47,11),(48,11),(49,11),(59,11),(60,11),(6,12),(19,12),(43,12),(47,12),(48,12),(49,12),(61,12),(64,12),(6,13),(19,13),(23,13),(43,13),(47,13),(48,13),(49,13),(59,13),(60,13),(61,13),(9,14),(17,14),(23,14),(29,14),(34,14),(41,14),(42,14),(43,14),(44,14),(45,14),(46,14),(47,14),(48,14),(49,14),(50,14),(59,14),(61,14),(13,15),(14,15),(54,15),(67,15),(6,16),(19,16),(23,16),(29,16),(43,16),(47,16),(48,16),(49,16),(59,16),(60,16),(61,16),(15,17),(31,17),(53,17),(9,18),(15,18),(41,18),(42,18),(44,18),(45,18),(46,18),(48,18),(50,18),(15,19),(53,19),(6,20),(9,20),(19,20),(23,20),(41,20),(42,20),(43,20),(45,20),(46,20),(48,20),(53,20),(59,20),(60,20),(61,20),(42,21),(44,21),(45,21),(46,21),(50,21),(15,23),(53,23),(6,24),(19,24),(23,24),(59,24),(61,24),(62,24),(63,24),(64,24),(6,25),(19,25),(23,25),(64,25),(72,25),(8,26),(59,26);
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
INSERT INTO `product_language` VALUES (4,1),(5,1),(15,1),(45,1),(46,1),(47,1),(50,1),(62,1),(63,1),(64,1),(2,2),(4,2),(5,2),(6,2),(8,2),(9,2),(10,2),(11,2),(12,2),(13,2),(14,2),(15,2),(19,2),(23,2),(27,2),(29,2),(34,2),(41,2),(42,2),(43,2),(45,2),(46,2),(47,2),(48,2),(50,2),(53,2),(54,2),(59,2),(60,2),(61,2),(62,2),(63,2),(64,2),(67,2),(47,6),(62,6),(63,6),(64,6);
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
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_link`
--

LOCK TABLES `product_link` WRITE;
/*!40000 ALTER TABLE `product_link` DISABLE KEYS */;
INSERT INTO `product_link` VALUES (1,1,'ANDROID','https://googlestore.com/','/public/images/platforms/android.png'),(2,1,'WINDOWS','https://windowsstore.com/','/public/images/platforms/windows.png'),(3,11,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/List.aspx?sel=TBL&ctrl=f&fc_scrn_m25=1&fc_sb_slate=1&fc_seg_bus=1&jumpid=re_r10048_fr/fr/pps/ea-tablet/shopnow&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(4,11,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(5,62,'ANDROID','http://www.norcod.fr','/public/images/platforms/android.png'),(6,62,'WINDOWS','http://www.norcod.fr','/public/images/platforms/windows.png'),(7,2,'ANDROID','https://googlestore.com/','/public/images/platforms/android.png'),(8,2,'WINDOWS','https://windowsstore.com/','/public/images/platforms/windows.png'),(9,27,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(10,10,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/List.aspx?sel=NTB&ctrl=f&fc_form_deta=1&fc_sb_elitebk=1&jumpid=cp_r10048_fr/fr/pc_comm/elite_super/elitefamily/ea-elitex2-buynow&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(11,10,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(12,36,'ANDROID','https://play.google.com/store/apps/developer?id=MobileIron&hl=fr','/public/images/platforms/android.png'),(13,36,'WINDOWS','https://www.microsoft.com/en-us/store/apps/apps-work/9wzdncrdhvnq','/public/images/platforms/windows.png'),(14,4,'ANDROID','https://googlestore.com/','/public/images/platforms/android.png'),(15,4,'WINDOWS','https://windowsstore.com/','/public/images/platforms/windows.png'),(16,41,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/List.aspx?sel=TBL&ctrl=f&fc_bs_expertrecom=1&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(17,41,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do ?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(18,42,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/Product.aspx?id=J6T90AW&opt=ABF&sel=TBL','/public/images/customUrls/hp-store.png'),(19,42,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do ','/public/images/customUrls/map-marker.png'),(20,8,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(21,8,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/Product.aspx?id=H9X12EA&opt=ABF&sel=TBLhttp://store.hp.com/FranceStore/Merch/Product.aspx?id=H9X12EA&opt=ABF&sel=TBL&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(22,43,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/Product.aspx?id=K6X11AA&opt=ABB&sel=ACC&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(23,6,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/List.aspx?sel=TBL&ctrl=f&fc_sb_elitepd=1&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(24,47,'WINDOWS','https://www.microsoft.com/fr-fr/store/apps/bulldozair/9wzdncrdrj7s','/public/images/platforms/windows.png'),(25,47,'ANDROID','https://play.google.com/store/apps/details?id=com.blockbase.bulldozair&hl=fr','/public/images/platforms/android.png'),(26,6,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(27,23,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/Product.aspx?id=H9X40EA&opt=ABF&sel=TBL&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(28,13,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/Product.aspx?id=L2J88AA&opt=ABF&sel=TBL&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(29,9,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(30,61,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/Offer.apx?p=b-mobconnect','/public/images/customUrls/hp-store.png'),(31,23,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do ?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(32,59,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(33,59,'REGULAR_LINK','http://www.hp.com/go/elitex21012?jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(34,9,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/Offer.aspx?p=b-detachables-biz-overview&jumpid=re_r11260_fr/fr/pps/mobility/products/prox2_612-learnmore&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(35,13,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(36,43,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do ?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(37,12,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/List.aspx?sel=TBL&ctrl=f&fc_scrn_l25=1&fc_sb_slate=1&fc_seg_bus=1&jumpid=re_r10048_fr/fr/pps/ea-tablet/slate8-shopnow&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(38,12,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do ?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(39,44,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do ?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(40,19,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/Product.aspx?id=L3S96AA&opt=ABF&sel=TBL&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(41,14,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/list.aspx?sel=TBL&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(42,53,'WINDOWS','https://www.hptouchpointmanager.com/idm/register.jsp?locale=fr','/public/images/platforms/windows.png'),(43,53,'ANDROID','https://play.google.com/store/apps/details?id=com.hp.lhagent&hl=fr','/public/images/platforms/android.png'),(44,14,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(45,19,'REGULAR_LINK',' http://www8.hp.com/fr/fr/store-finder/index.do?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(46,54,'ANDROID','https://play.google.com/store/apps/details?id=com.hp.cm.student&hl=fr','/public/images/platforms/android.png'),(47,54,'WINDOWS','https://ssl.www8.hp.com/h41268/live/index.aspx?qid=21796','/public/images/platforms/windows.png'),(48,44,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/List.aspx?sel=ACC&ctrl=f&fc_ptyp_workspace=1&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(49,34,'REGULAR_LINK','http://www.maileva.com/pushtotalk.php','/public/images/customUrls/envelope.png'),(50,31,'ANDROID','toto','/public/images/platforms/android.png'),(51,31,'WINDOWS','titi','/public/images/platforms/windows.png'),(52,46,'REGULAR_LINK','dsa@morpho.com','/public/images/customUrls/undefined.png'),(53,60,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/Product.aspx?id=J6T90AW&opt=ABF&sel=ùTBL&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(54,60,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do ?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(55,50,'REGULAR_LINK','dsa@morpho.com','/public/images/customUrls/undefined.png'),(56,48,'REGULAR_LINK','http://store.hp.com/FranceStore/Merch/Product.aspx?id=H9X08EA&opt=ABF&sel=TBL&jumpid=ba_nbmviytgq5','/public/images/customUrls/hp-store.png'),(57,48,'REGULAR_LINK','http://www8.hp.com/fr/fr/store-finder/index.do ?jumpid=ba_nbmviytgq5','/public/images/customUrls/map-marker.png'),(58,45,'REGULAR_LINK','dsa@morpho.com','/public/images/customUrls/undefined.png'),(62,67,'REGULAR_LINK','www.wizzbe.fr','/public/images/customUrls/map-marker.png'),(66,58,'REGULAR_LINK','Je mets Gilles en copie tout de suite pour gagner du temps, ','/public/images/customUrls/envelope.png'),(74,75,'REGULAR_LINK','www.google.com','/public/images/customUrls/map-marker.png');
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_timeline_step_executors`
--

LOCK TABLES `product_timeline_step_executors` WRITE;
/*!40000 ALTER TABLE `product_timeline_step_executors` DISABLE KEYS */;
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
INSERT INTO `rating` VALUES (2,21,1442851841265,10,0,'thanks a lot !',NULL,NULL),(15,1,NULL,NULL,1,NULL,NULL,NULL),(34,3,1443700711193,10,0,'Solution simple, rapide et réactive pour réaliser tous mes envois',NULL,NULL),(49,3,1445443899213,8,0,'',NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=220 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource`
--

LOCK TABLES `resource` WRITE;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
INSERT INTO `resource` VALUES (1,30,'application/pdf','1.pdf',NULL,NULL,NULL,NULL,'HP Market Place France -26082015'),(2,56,'application/pdf','2.pdf',NULL,NULL,NULL,NULL,'pdf de test'),(3,2,'image/jpg','3.jpg',NULL,NULL,NULL,NULL,'Logo'),(4,1,'image/png','4.png',NULL,NULL,NULL,NULL,'Logo'),(5,32,'image/jpeg','5.jpg',NULL,NULL,NULL,NULL,'Wireless Docking back'),(6,11,'image/jpeg','6.jpeg',NULL,NULL,NULL,NULL,'Pro Slate 12'),(7,11,'image/jpeg','7.jpg',NULL,NULL,NULL,NULL,'Port Folio Pro Slate 12 '),(8,11,'application/pdf','8.pdf',NULL,NULL,NULL,NULL,'HP Pro Slate 12 - Fiche Produit'),(9,11,'image/jpeg','9.jpg',NULL,NULL,NULL,NULL,'Pro Slate 12 Lifestyle '),(10,11,'image/jpeg','10.jpg',NULL,NULL,NULL,NULL,'Pro slate 12'),(11,11,'image/jpeg','11.jpg',NULL,NULL,NULL,NULL,'Lifestyle 12'),(12,11,'image/jpeg','12.jpg',NULL,NULL,NULL,NULL,'Lifestyle 12 (2)'),(13,11,'video/mp4','13.mp4',NULL,NULL,NULL,NULL,'Présentation - HP Pro Slate 8 et 12 (2)'),(14,11,'video/mp4','14.mp4',NULL,NULL,NULL,NULL,'Présentation - HP Pro Slate 8 et 12'),(15,33,'application/vnd.openxmlformats-officedocument.presentationml.presentation','15.pptx',NULL,NULL,NULL,NULL,'MI - AfW SEP 2015'),(16,57,'image/png','16.png',NULL,NULL,NULL,NULL,'Videos'),(17,10,'image/jpeg','17.jpg',NULL,NULL,NULL,NULL,'HP Elite x2 1011 - Tablette seule'),(18,10,'application/pdf','18.pdf',NULL,NULL,NULL,NULL,'HP Elite x2 1011 - Fiche Produit'),(19,10,'image/jpeg','19.jpg',NULL,NULL,NULL,NULL,'HP Elite x2 1011 - en réunion'),(20,10,'video/mp4','20.mp4',NULL,NULL,NULL,NULL,'Présentation - HP Elite x2 1011 - Film'),(21,10,'video/mp4','21.mp4',NULL,NULL,NULL,NULL,'Présentation - HP Elite x2 1011- Dynamique'),(22,10,'image/jpeg','22.jpg',NULL,NULL,NULL,NULL,'HP Elite x2 1011 - Bureau'),(23,10,'image/jpeg','23.jpg',NULL,NULL,NULL,NULL,'HP Elite x2 1011 et accessoires'),(24,10,'image/jpeg','24.jpg',NULL,NULL,NULL,NULL,'HP Elite x 2 1011 avec clavier bureau'),(25,27,'image/png','25.png',NULL,NULL,NULL,NULL,'HP x2 210 - Image 1 '),(26,27,'image/jpeg','26.jpg',NULL,NULL,NULL,NULL,'HP x2 210 - Image 2 '),(27,27,'image/jpeg','27.jpg',NULL,NULL,NULL,NULL,'HP x2 210 - Image 3 '),(28,27,'application/pdf','28.pdf',NULL,NULL,NULL,NULL,'HP x2 210 - Datasheets'),(29,27,'image/jpeg','29.jpg',NULL,NULL,NULL,NULL,'HP x2 210 - Image 4 '),(30,27,'image/jpeg','30.jpg',NULL,NULL,NULL,NULL,'HP x2 210 - Imagine 5'),(31,42,'image/png','31.PNG',NULL,NULL,NULL,NULL,'HP ElitePad 1000 - Jackets'),(32,42,'image/jpeg','32.jpg',NULL,NULL,NULL,NULL,'ElitePad Security Jacket'),(33,42,'image/jpeg','33.jpg',NULL,NULL,NULL,NULL,'ElitePad Extansion Jacket'),(34,42,'image/jpeg','34.jpg',NULL,NULL,NULL,NULL,'HP ElitePad 1000 - Security Jacket Lifestyle'),(35,42,'image/jpeg','35.jpg',NULL,NULL,NULL,NULL,'HP20141016762'),(36,49,'image/png','36.png',NULL,NULL,NULL,NULL,'LogoMaileva-HD-RVB'),(37,49,'video/mp4','37.mp4',NULL,NULL,NULL,NULL,'ANIMATIQUE_MAILEVA_2015'),(38,49,'image/png','38.png',NULL,NULL,NULL,NULL,'Corner HP Maileva1'),(39,41,'image/jpeg','39.jpg',NULL,NULL,NULL,NULL,'Pro Slate/Tablet Smart Cover Case'),(40,41,'image/jpeg','40.jpg',NULL,NULL,NULL,NULL,'Pro Slate/Tablet Keyboard Case '),(41,41,'image/jpeg','41.jpg',NULL,NULL,NULL,NULL,'Pro Slate/Tablet Rugged Case'),(42,41,'image/png','42.PNG',NULL,NULL,NULL,NULL,'HP Pro Slate / Tablet -Jackets & Cases '),(43,43,'image/jpeg','43.jpg',NULL,NULL,NULL,NULL,'HP ElitePad 1000 G2 Rugged Tablet Docking Adapter'),(44,43,'image/jpeg','44.jpg',NULL,NULL,NULL,NULL,'ElitePad Docking Station'),(45,43,'image/jpeg','45.jpeg',NULL,NULL,NULL,NULL,'Pro Portable Dock'),(46,43,'image/png','46.PNG',NULL,NULL,NULL,NULL,'HP Docking Station'),(47,47,'image/jpeg','47.JPG',NULL,NULL,NULL,NULL,'BulldozAIR_2_notes_hp_pro_slate_8'),(48,47,'image/jpeg','48.JPG',NULL,NULL,NULL,NULL,'BulldozAIR_1_home_hp_pro_slate_8'),(49,47,'image/jpeg','49.JPG',NULL,NULL,NULL,NULL,'BulldozAIR_3_assignment_hp_pro_tablet_698'),(50,47,'image/jpeg','50.JPG',NULL,NULL,NULL,NULL,'BulldozAIR_4_plan_hp_pro_slate_8'),(51,47,'image/jpeg','51.JPG',NULL,NULL,NULL,NULL,'BulldozAIR_5_calendar_hp_pro_tablet_698'),(52,47,'image/jpeg','52.JPG',NULL,NULL,NULL,NULL,'BulldozAIR_6_status_hp_pro_slate_8'),(53,8,'image/jpeg','53.jpg',NULL,NULL,NULL,NULL,'HP ElitePad 1000 Santé -1 '),(54,8,'image/jpeg','54.jpg',NULL,NULL,NULL,NULL,'HP ElitePad 1000 Santé - 2'),(55,8,'image/jpeg','55.jpg',NULL,NULL,NULL,NULL,'HP ElitePad 1000 Santé '),(56,8,'video/mp4','56.mp4',NULL,NULL,NULL,NULL,'Présentation HP ElitePad 1000 Santé '),(57,8,'application/pdf','57.pdf',NULL,NULL,NULL,NULL,'HP ElitePad 1000 Santé - Fiche produit'),(58,36,'image/jpeg','58.jpg',NULL,NULL,NULL,NULL,'3'),(59,36,'application/pdf','59.pdf',NULL,NULL,NULL,NULL,'MobileIron'),(60,36,'application/pdf','60.pdf',NULL,NULL,NULL,NULL,'MobileIron Datasheet_FR'),(61,36,'video/mp4','61.mp4',NULL,NULL,NULL,NULL,'MI-Platform-060214-h264-FR'),(62,36,'image/jpeg','62.jpg',NULL,NULL,NULL,NULL,'MobileIron-logo'),(63,36,'application/vnd.openxmlformats-officedocument.presentationml.presentation','63.pptx',NULL,NULL,NULL,NULL,'First Meeting - Mobile First - 2014 FR'),(64,36,'video/mp4','64.mp4',NULL,NULL,NULL,NULL,'Platform Demo-FR'),(65,36,'image/png','65.png',NULL,NULL,NULL,NULL,'mi cloud action'),(66,36,'image/png','66.png',NULL,NULL,NULL,NULL,'micloud dashboard'),(67,36,'image/png','67.png',NULL,NULL,NULL,NULL,'mi cloud attribut'),(68,36,'image/png','68.png',NULL,NULL,NULL,NULL,'mi cloud app'),(69,4,'image/png','69.png',NULL,NULL,NULL,NULL,'Logo'),(70,6,'image/jpeg','70.jpg',NULL,NULL,NULL,NULL,'HP ElitePad 1000 et étui '),(71,6,'application/pdf','71.pdf',NULL,NULL,NULL,NULL,'HP Elitepad 1000 - Fiche Produit'),(72,6,'image/jpeg','72.jpg',NULL,NULL,NULL,NULL,'HP ElitePad 1000 et stylet'),(73,6,'image/jpeg','73.jpg',NULL,NULL,NULL,NULL,'HP Elitepad 1000'),(74,6,'image/jpeg','74.jpg',NULL,NULL,NULL,NULL,'HP Elitepad 1000 - 1'),(75,6,'image/jpeg','75.jpg',NULL,NULL,NULL,NULL,'Lifestyle 1000 - 2'),(76,23,'image/jpeg','76.jpg',NULL,NULL,NULL,NULL,'608'),(77,23,'image/jpeg','77.jpg',NULL,NULL,NULL,NULL,'608 Lifestyle'),(78,23,'image/jpeg','78.jpeg',NULL,NULL,NULL,NULL,'86d65f52-396c-4305-a9f8-a15d970597d0'),(79,23,'application/pdf','79.pdf',NULL,NULL,NULL,NULL,'HP_Pro_Tablet_608_G1'),(80,14,'application/pdf','80.pdf',NULL,NULL,NULL,NULL,'HP Pro Slate 10 EE'),(81,14,'video/mp4','81.mp4',NULL,NULL,NULL,NULL,'Présentation - HP Pro Slate 10 EE'),(82,14,'image/jpeg','82.jpg',NULL,NULL,NULL,NULL,'HP Pro Slate  10 EE'),(83,14,'image/jpeg','83.jpg',NULL,NULL,NULL,NULL,'HP Pro Slate 10 EE - 1'),(84,14,'image/jpeg','84.jpg',NULL,NULL,NULL,NULL,'HP Pro Slate 10 EE - 2'),(85,14,'image/jpeg','85.jpg',NULL,NULL,NULL,NULL,'HP Pro Slate 10 EE Keyboard'),(86,14,'image/jpeg','86.jpg',NULL,NULL,NULL,NULL,'HP Pro Slate 10 EE'),(87,23,'image/jpeg','87.jpeg',NULL,NULL,NULL,NULL,'8ae072f0-ecb3-412c-9ce9-2f1053c7e572'),(88,19,'image/jpeg','88.jpg',NULL,NULL,NULL,NULL,'HP Pro Tablet 408'),(89,19,'image/jpeg','89.jpg',NULL,NULL,NULL,NULL,'Hp Pro tablet 408 '),(90,19,'image/jpeg','90.jpg',NULL,NULL,NULL,NULL,'HP Pro Tablet 408 Lifestyle '),(91,19,'image/jpeg','91.jpg',NULL,NULL,NULL,NULL,'Pro Tablet 408 stylet'),(92,19,'application/pdf','92.pdf',NULL,NULL,NULL,NULL,'HP_Pro_Tablet_408_G1'),(93,9,'image/jpeg','93.jpg',NULL,NULL,NULL,NULL,'HP Pro x2 612'),(94,9,'image/jpeg','94.jpg',NULL,NULL,NULL,NULL,'HP Pro x2 612 - Tablette seule '),(95,9,'application/pdf','95.pdf',NULL,NULL,NULL,NULL,'HP Pro x2 612 - Fiche Produit'),(96,9,'image/jpeg','96.jpg',NULL,NULL,NULL,NULL,'HP Pro x2 612 - en déplaceme'),(97,9,'image/jpeg','97.jpg',NULL,NULL,NULL,NULL,'HP Pro x2 612 - au bureau'),(98,51,'video/mp4','98.mp4',NULL,NULL,NULL,NULL,'ANIMATIQUE_MAILEVA_2015'),(99,51,'image/png','99.png',NULL,NULL,NULL,NULL,'LogoMaileva-HD-RVB'),(100,51,'image/png','100.png',NULL,NULL,NULL,NULL,'Corner HP Maileva1'),(101,44,'image/png','101.PNG',NULL,NULL,NULL,NULL,'Stylet et connecteur HP '),(102,44,'image/jpeg','102.jpg',NULL,NULL,NULL,NULL,'Executive Tablet Pen G2'),(103,44,'image/jpeg','103.jpg',NULL,NULL,NULL,NULL,'Pro x2 612 Wacom Replace Pen '),(104,44,'image/jpeg','104.jpg',NULL,NULL,NULL,NULL,'Micro USB to USb Ethernet Cable'),(105,15,'image/png','105.png',NULL,NULL,NULL,NULL,'logoTELELOGOS'),(106,15,'application/pdf','106.pdf',NULL,NULL,NULL,NULL,'Présentation MediaContact'),(107,15,'image/jpeg','107.jpg',NULL,NULL,NULL,NULL,'visuel_mediacontact_hp'),(108,61,'application/pdf','108.pdf',NULL,NULL,NULL,NULL,'HP-Mobile Connect - Brochure'),(109,61,'application/pdf','109.pdf',NULL,NULL,NULL,NULL,' HP Mobile Connect - Fiche Produit'),(110,61,'image/jpeg','110.jpg',NULL,NULL,NULL,NULL,'Mobile Connect - en image'),(111,61,'image/jpeg','111.jpg',NULL,NULL,NULL,NULL,'Mobile Connect - carte Sim universelle'),(112,46,'image/jpeg','112.jpg',NULL,NULL,NULL,NULL,'Archivage électronique Morpho'),(113,46,'image/jpeg','113.jpg',NULL,NULL,NULL,NULL,'Archivage électronique - Morpho Secure Storage server'),(114,46,'image/jpeg','114.jpg',NULL,NULL,NULL,NULL,'Morpho (Safran Groupe)'),(115,46,'image/jpeg','115.jpg',NULL,NULL,NULL,NULL,'Safran-Morpho'),(116,46,'image/jpeg','116.jpg',NULL,NULL,NULL,NULL,'Safran-Morpho'),(117,46,'application/pdf','117.pdf',NULL,NULL,NULL,NULL,'electronic_vault_m3s_morpho_secure_storage_server_en'),(118,50,'image/jpeg','118.jpg',NULL,NULL,NULL,NULL,'Authentification forte mobile'),(119,50,'image/jpeg','119.jpg',NULL,NULL,NULL,NULL,'Authentification bometrique'),(120,50,'image/jpeg','120.jpg',NULL,NULL,NULL,NULL,'Authentification forte'),(121,50,'image/jpeg','121.jpg',NULL,NULL,NULL,NULL,'Morpho (Safran Groupe)'),(122,50,'image/jpeg','122.jpg',NULL,NULL,NULL,NULL,'Safran-Morpho'),(123,50,'image/jpeg','123.jpg',NULL,NULL,NULL,NULL,'Safran-Morpho'),(124,50,'application/pdf','124.pdf',NULL,NULL,NULL,NULL,'strong_authentication_macs_morpho_access_control_server_en'),(125,50,'application/pdf','125.pdf',NULL,NULL,NULL,NULL,'mobile_strong_authentication_digital_signature_morpho_cloudcard_en'),(126,31,'image/jpeg','126.jpg',NULL,NULL,NULL,NULL,'18'),(127,31,'image/jpeg','127.jpg',NULL,NULL,NULL,NULL,'3'),(128,31,'application/pdf','128.pdf',NULL,NULL,NULL,NULL,'2014-comapny-factsheet_FR'),(129,31,'application/postscript','129.eps',NULL,NULL,NULL,NULL,'MobileIron-logo[1]'),(130,31,'application/pdf','130.pdf',NULL,NULL,NULL,NULL,'platform_detail_WEB'),(131,31,'video/mp4','131.mp4',NULL,NULL,NULL,NULL,'MI-Platform-060214-h264-FR'),(132,48,'image/jpeg','132.jpg',NULL,NULL,NULL,NULL,'Lifestyle HP ElitePad 1000 Rugged Tablet - 2'),(133,48,'image/jpeg','133.jpg',NULL,NULL,NULL,NULL,'Lifestyle HP ElitePad 1000 Rugged Tablet - 1'),(134,48,'image/jpeg','134.jpg',NULL,NULL,NULL,NULL,'HP ElitePad Rugged Shoulder Strap'),(135,48,'application/pdf','135.pdf',NULL,NULL,NULL,NULL,'HP_ElitePad_1000_G2_Rugged_Tablet'),(136,59,'application/pdf','136.pdf',NULL,NULL,NULL,NULL,'HP Elite x2 1012'),(137,59,'image/jpeg','137.jpg',1,NULL,NULL,NULL,'Elitex2-1012 (3)'),(138,59,'image/jpeg','138.jpg',2,NULL,NULL,NULL,'Elitex2-1012 (5)'),(139,59,'image/jpeg','139.jpg',3,NULL,NULL,NULL,'Elitex2-1012 (8)'),(140,59,'image/jpeg','140.jpg',NULL,NULL,NULL,NULL,'Elitex2-1012-LifeStyle (6)'),(141,59,'image/jpeg','141.jpg',NULL,NULL,NULL,NULL,'Elitex2-1012-LifeStyle (8)'),(142,59,'image/jpeg','142.jpg',4,NULL,NULL,NULL,'Elitex2-1012-LifeStyle (2)'),(143,59,'image/jpeg','143.jpg',NULL,NULL,NULL,NULL,'Elitex2-1012-LifeStyle (10)'),(144,59,'image/jpeg','144.jpg',NULL,NULL,NULL,NULL,'Elitex2-1012 (2)'),(145,59,'video/mp4','145.mp4',NULL,NULL,NULL,NULL,'HP_Elite_x2_1012_Short_FR'),(146,34,'image/png','146.png',NULL,NULL,NULL,NULL,'LogoMaileva-HD-RVB'),(147,34,'application/pdf','147.pdf',NULL,NULL,NULL,NULL,'Maileva_Plaquette'),(148,34,'image/png','148.png',NULL,NULL,NULL,NULL,'Corner HP Maileva1'),(149,34,'video/mp4','149.mp4',NULL,NULL,NULL,NULL,'Maileva_Pedagogique_15_V1'),(150,34,'application/pdf','150.pdf',NULL,NULL,NULL,NULL,'Maileva_Présentation commerciale_2015'),(151,13,'image/jpeg','151.jpg',NULL,NULL,NULL,NULL,'HP Pro Tablet 10 EE - 1'),(152,13,'image/jpeg','152.jpg',NULL,NULL,NULL,NULL,'HP Pro Tablet 10 EE - 2'),(153,13,'video/mp4','153.mp4',NULL,NULL,NULL,NULL,'Présentation - HP Pro Tablet 10 EE'),(154,48,'image/jpeg','154.jpg',NULL,NULL,NULL,NULL,'HP ElitePad 1000 Rugged Tablet'),(155,13,'application/pdf','155.pdf',NULL,NULL,NULL,NULL,'HP Pro Tablet 10 EE'),(156,13,'image/jpeg','156.jpg',NULL,NULL,NULL,NULL,'HP Pro Tablet 10EE'),(157,13,'image/jpeg','157.jpg',NULL,NULL,NULL,NULL,'HP Pro Tablet 10 EE Keyboard'),(158,60,'image/jpeg','158.jpg',NULL,NULL,NULL,NULL,'HP ElitePad 1000'),(159,60,'image/jpeg','159.jpg',NULL,NULL,NULL,NULL,'HP ElitePad Docking Station'),(160,60,'application/vnd.openxmlformats-officedocument.presentationml.presentation','160.pptx',NULL,NULL,NULL,NULL,'Accessoires HP ElitePad 1000'),(161,60,'image/png','161.png',NULL,NULL,NULL,NULL,'Accessoires HP ElitePad 1000'),(162,60,'image/jpeg','162.jpg',NULL,NULL,NULL,NULL,'HP ElitePad Security Jacket'),(163,60,'image/gif','163.gif',NULL,NULL,NULL,NULL,'HP_Blue_RGB_72_MD'),(164,53,'image/png','164.PNG',NULL,NULL,NULL,NULL,'Fonctionnalité HP Touchpoint Manager'),(165,53,'image/jpeg','165.jpg',NULL,NULL,NULL,NULL,'2015-10-19_18h54_10'),(166,53,'image/jpeg','166.jpg',NULL,NULL,NULL,NULL,'2015-10-19_18h59_01'),(167,53,'image/jpeg','167.jpg',NULL,NULL,NULL,NULL,'HP TouchPoint manager - Capture'),(168,53,'application/pdf','168.pdf',NULL,NULL,NULL,NULL,'HP Touchpoint Manager brief - version Pro'),(169,54,'application/pdf','169.pdf',NULL,NULL,NULL,NULL,'HP Classroom Manager - Fiche produit'),(170,53,'image/jpeg','170.jpg',NULL,NULL,NULL,NULL,'2015-10-19_19h01_22'),(171,53,'image/png','171.PNG',NULL,NULL,NULL,NULL,'Logo HP'),(172,53,'image/jpeg','172.jpg',NULL,NULL,NULL,NULL,'2015-10-19_18h28_19'),(173,54,'image/png','173.PNG',NULL,NULL,NULL,NULL,'Logo HP'),(174,54,'application/pdf','174.pdf',NULL,NULL,NULL,NULL,'HP Classroom Manager - Livre Blanc'),(175,54,'application/pdf','175.pdf',NULL,NULL,NULL,NULL,'HP Classroom manager - Brochure'),(176,54,'video/mp4','176.mp4',NULL,NULL,NULL,NULL,'HP Classroom Manager_fra'),(177,54,'image/jpeg','177.jpg',NULL,NULL,NULL,NULL,'Classroom Manager - multiOS'),(178,54,'image/jpeg','178.jpg',NULL,NULL,NULL,NULL,'Classroom Manager - captures'),(179,12,'application/pdf','179.pdf',NULL,NULL,NULL,NULL,'HP Pro Slate 8 - Fiche Produit'),(180,12,'image/jpeg','180.jpg',NULL,NULL,NULL,NULL,'HP Pro Slate 8 '),(181,12,'image/jpeg','181.jpg',NULL,NULL,NULL,NULL,'HP Port Folio Pro Slate 8 '),(182,12,'video/mp4','182.mp4',NULL,NULL,NULL,NULL,'Présentation HP Pro Slate 8 - A la montagne'),(183,12,'image/jpeg','183.jpg',NULL,NULL,NULL,NULL,'HP Smart Cover Pro Slate 8 '),(184,12,'image/jpeg','184.jpg',NULL,NULL,NULL,NULL,'HP Pro Slate 8 - 1'),(185,12,'video/mp4','185.mp4',NULL,NULL,NULL,NULL,'HP-Pro-Slate-Tablets-with-Duet-Pen-video-demo-FR'),(186,12,'image/jpeg','186.jpg',NULL,NULL,NULL,NULL,'Lifestyle field'),(187,45,'image/jpeg','187.jpg',NULL,NULL,NULL,NULL,'Avantages d'),(188,45,'image/jpeg','188.jpg',NULL,NULL,NULL,NULL,'Cas d\'usages - Signature électronique'),(189,45,'image/jpeg','189.jpg',NULL,NULL,NULL,NULL,'Morpho (Safran Gro'),(190,45,'image/jpeg','190.jpg',NULL,NULL,NULL,NULL,'Safran-Morpho'),(191,45,'application/pdf','191.pdf',NULL,NULL,NULL,NULL,'digital_signature_morpho_adsigner_en'),(192,45,'application/pdf','192.pdf',NULL,NULL,NULL,NULL,'m2s_morpho_digital_signature_server_en'),(193,45,'application/pdf','193.pdf',NULL,NULL,NULL,NULL,'digital_signature_validation_mvs_morpho_validation_server_en'),(194,45,'application/pdf','194.pdf',NULL,NULL,NULL,NULL,'online_contracting_mtp_morpho_trust_platform_en'),(195,45,'application/pdf','195.pdf',NULL,NULL,NULL,NULL,'mobile_strong_authentication_digital_signature_morpho_cloudcard_en_0'),(196,45,'application/pdf','196.pdf',NULL,NULL,NULL,NULL,'secure_transaction_mtss_morpho_time_stamp_server_en'),(197,62,'image/jpeg','197.jpg',1,NULL,'LI4278_RETAIL_IMG_0483.jpg',NULL,'LI4278_RETAIL_IMG_0483.jpg'),(198,62,'image/jpeg','198.jpg',NULL,NULL,'NORCOD_Bleu_RVB_BD.jpg',NULL,'NORCOD_Bleu_RVB_BD.jpg'),(199,62,'image/jpeg','199.jpg',NULL,NULL,'photo distribution.jpg',NULL,'photo distribution.jpg'),(200,63,'image/jpeg','200.jpg',2,NULL,'photo distribution.jpg',NULL,'photo distribution.jpg'),(201,63,'image/jpeg','201.jpg',NULL,NULL,'NORCOD_Bleu_CMJN.jpg',NULL,'NORCOD_Bleu_CMJN.jpg'),(202,64,'image/jpeg','202.jpg',2,NULL,'restaurantion zebra norcod.jpg',NULL,'restaurantion zebra norcod.jpg'),(203,64,'image/jpeg','203.jpg',NULL,NULL,'NORCOD_Bleu_RVB_BD.jpg',NULL,'NORCOD_Bleu_RVB_BD.jpg'),(204,58,'image/png','204.png',NULL,NULL,'hp_logo.png',NULL,'hp_logo.png'),(205,58,'image/png','205.png',1,NULL,'logo-4.png',NULL,'logo-4.png'),(206,63,'image/jpeg','206.jpg',1,NULL,'Enterprise_Retail_IMG_8063_David_Johnson.jpg',NULL,'Enterprise_Retail_IMG_8063_David_Johnson.jpg'),(207,64,'image/jpeg','207.jpg',1,NULL,'P1010042.jpg',NULL,'P1010042.jpg'),(208,64,'image/png','208.png',NULL,NULL,'2016-02-11_11h50_39.png',NULL,'2016-02-11_11h50_39.png'),(209,67,'image/jpeg','209.jpg',NULL,NULL,'logo wizzbe infisimple 10cmx300dpi.jpg',NULL,'logo wizzbe infisimple 10cmx300dpi.jpg'),(210,67,'image/jpeg','210.jpg',NULL,NULL,'logo wizzbe infisimple 10cmx300dpi.jpg',NULL,'logo wizzbe infisimple 10cmx300dpi.jpg'),(211,67,'application/pdf','211.pdf',NULL,NULL,'WizzbeMOBILE-.pdf',NULL,'WizzbeMOBILE-.pdf'),(212,67,'application/pdf','212.pdf',NULL,NULL,'fichewizzbeSCHOOL-.pdf',NULL,'fichewizzbeSCHOOL-.pdf'),(213,67,'application/pdf','213.pdf',NULL,NULL,'Plaquette Wizzbe NANO 2.pdf',NULL,'Plaquette Wizzbe NANO 2.pdf'),(214,74,'image/jpeg','214.jpg',NULL,NULL,'folder1jpg.jpg',NULL,'folder1jpg.jpg'),(215,74,'image/png','215.png',NULL,NULL,'documents-158461_640.png',NULL,'documents-158461_640.png'),(216,58,'image/png','216.png',NULL,NULL,'06F3203B-DBB1-4AA1-922B-192FD9C95F73[3].png',NULL,'06F3203B-DBB1-4AA1-922B-192FD9C95F73[3].png'),(217,58,'application/force-download','217.pdf',NULL,NULL,'linkedin_hp_followers_case_study_us_en_130613.pdf',NULL,'exemple'),(218,25,'image/png','218.png',1,NULL,'hp.png',NULL,'hp.png'),(219,79,'image/jpeg','219.jpg',NULL,NULL,'lorem-ipsum.jpg',NULL,'c');
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (3,'admin'),(4,'author'),(6,'BOB'),(1,'customer'),(2,'editor'),(17,'fleet manager'),(16,'Michele'),(5,'test JP');
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline`
--

LOCK TABLES `timeline` WRITE;
/*!40000 ALTER TABLE `timeline` DISABLE KEYS */;
INSERT INTO `timeline` VALUES (1,'line','assignment-order'),(2,'device','assignment-order'),(3,'sav_vol_and_perte','follow-up'),(4,'sav_casse','follow-up'),(5,'line_suspension','follow-up'),(6,'sim_card','follow-up'),(7,'chgt_options','follow-up');
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
  KEY `id_timeline` (`id_timeline`),
  CONSTRAINT `timeline_steps_ibfk_1` FOREIGN KEY (`id_timeline`) REFERENCES `timeline` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline_steps`
--

LOCK TABLES `timeline_steps` WRITE;
/*!40000 ALTER TABLE `timeline_steps` DISABLE KEYS */;
INSERT INTO `timeline_steps` VALUES (1,'tl_step_bdc_sent',0,1,1),(2,'tl_step_released_sim_to_user',1,2,1),(3,'tl_step_activated_line',1,3,1),(4,'tl_step_fleet_updated_line_1',1,4,1),(5,'tl_step_bdc_envoye',0,1,2),(6,'tl_step_fleet_updated_device_1',0,2,2),(7,'tl_step_order_received',1,3,2),(8,'tl_step_fleet_updated_device_2',1,4,2),(9,'tl_step_intregation_request',1,5,2),(10,'tl_step_integration_achieved',1,6,2),(11,'tl_step_released_terminal_to_user',1,7,2),(12,'tl_step_user_confirms_reception',1,8,2),(13,'device_wiping',0,1,3),(14,'line_suspension',1,1,3),(15,'device_preparation',1,1,3),(16,'device_delivery',1,1,3),(17,'device_repair',1,2,4),(18,'device_delivery',1,2,4),(19,'request_in_progress',1,3,5),(20,'device_diagnostic',1,2,4),(21,'line_suspended',1,3,5),(22,'request_in_progress',1,4,7),(23,'new_options_active',1,4,7),(24,'sim_code_created',1,5,6),(25,'sim_received',1,5,6),(26,'sim_activated',1,5,6);
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
  CONSTRAINT `fk_user_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'mobilityforwork@hp.com','b61335ff92a8794154cdf05eee50d76a77a530868ed14372f5186677819e6eaa',1454541838160,'HP Operator','HP','Operator','local',1454541838160,'M',6,NULL,NULL,NULL,NULL,NULL),(2,'morgan.poiret@nuance.com','fd7ea23617330b6858a172f47835334ac6d1a521a3a297c9ac16a06cb3b7c64a',1447945826475,'Morgan Poiret','Morgan ','Poiret','local',1447945826475,'M',2,NULL,'morgan.poiret@nuance.com',NULL,NULL,NULL),(3,'herve.guillot@docapost.fr','361c759bab083f18ddf002d588964d4d68499713f4147584d1a526c77ff917b1',1447149060698,'rv','Hervé','GUILLOT','local',1447149060698,'F',2,NULL,'herve.guillot@docapost.fr',NULL,NULL,NULL),(4,'marketing@bulldozair.com','44408a63b41788364c6162468de00095d213c1043a1e23858af8373bd1caa08a',1445445486855,'BulldozAIR','Adrien','Plat','local',1445445486855,'M',2,'0184173289','marketing@bulldozair.com',NULL,NULL,NULL),(5,'brice.colucci@gmail.com','a5cc5e36241bcda5b1027b633dc63bed26861cc1cb61884b8bd0f4a0e3bda8b1',1442590959661,'Brice Colucci','Brice','Colucci','local',1442590959661,'M',1,'06.43.34.47.01','brice.colucci@digital-dimension.com',NULL,NULL,NULL),(6,'dsa@morpho.com','fb613cdf0439c222f040221e801cb628cd5dca58d772b02cf4bd240615f3c6df',1447148819497,' ','',NULL,'local',1447148819497,'F',2,NULL,'dsa@morpho.com',NULL,NULL,NULL),(7,'dede@intuiteev.io','c0d36ffae5749313da9553cec19f3cb98b2ea9bf3f4e92dcfe071c4d72a2ae29',1454573204467,'Dédé intuiteev','',NULL,'local',1454573204467,'M',3,NULL,NULL,NULL,NULL,NULL),(8,'anthony.bert@econocom-osiatis.com','18062db49503870ab73977cd96998d6035095c1565d096fc1dbb6a2ac4e03650',1442590959661,'Anthony Bert','Anthony','Bert','local',1442590959661,'M',2,NULL,NULL,NULL,NULL,NULL),(9,'bob@intuiteev.io','ab266fcf5ce45fe51f8b770bec3d2631f20e019eb81e8a9d6c09688ded42b099',1454573006750,'Bob AppsVendor','',NULL,'local',1454573006750,'M',2,NULL,NULL,NULL,NULL,NULL),(10,'ttamrane@telelogos.com','047bfe7a9e01b66fba4f84feec67b3b7e9e717ecaf4f46226ff58b72d366dad8',1454628323641,'TT','Tarek','TAMRANE','local',NULL,'F',1,NULL,'ttamrane@telelogos.com',NULL,NULL,NULL),(11,'sebastien.francois@docusign.com','4977a17c798d5f28e4e8e9c6241da353ef95f66e5d688356e6a00f1abc7f101e',1454628323636,'sebfrancois','Sebastien','Francois','local',NULL,'M',2,NULL,'sebastien.francois@docusign.com',NULL,NULL,NULL),(12,'elizabeth.decoster@norcod.fr','08b7078f632fe2edcfa5487ad6390233f88cff37c76a8621d828e49603c56394',1454574205227,'Elizabeth Decoster','ELIZABETH','DECOSTER','local',1454574205227,'F',2,NULL,'elizabeth.decoster@norcod.fr',NULL,NULL,NULL),(13,'jerome.sepeau@richdistrib.com','ad601fc823b6dafc268f1d42b2ca72cb6613bebaccade295716d220b8b8fb183',1454628323640,'jeromeSEPEAU','Jerome','SEPEAU','local',NULL,'M',1,NULL,'jerome.sepeau@richdistrib.com',NULL,NULL,NULL),(14,'damien.laigre@hp.com','9377b038eaec24cab37359e550d2f410c0623949264413b30770df83f6fd5164',1454628323632,'hp-edit','Damien','LAIGRE','local',NULL,'M',2,NULL,'damien.laigre@hp.com',NULL,NULL,NULL),(15,'alice1@fai.com','8f3c9713f8dde0960b3375edbc3aebda35ebc7bc721085a115d14852520578df',1442590959661,'Alice1 Customer','Alice1','Glisse1','local',1442590959661,'F',1,NULL,NULL,NULL,NULL,NULL),(16,'charles@fai.com','10fe82adb964fa73c3c60be251181c421193f56ae01ba671974d82365a08a410',1442590959661,'Charles Dupond','Charles','Dupond','local',1442590959661,'M',1,'04.76.45.67.98','charles@fai.com',NULL,NULL,NULL),(17,'henry@fai.com','927a3aed189d610b2e151c4208913b3ed0cb38f6be613756819b1513c8924d7f',1442590959661,'Henry','Henry','Bert','local',1442590959661,'M',1,NULL,NULL,NULL,NULL,NULL),(18,'jean-pierre.chamarande@digitaldimension.fr','626e57b7df39b16edfd6ddb9db745c67df54230b6ed20dc60a0332739797db2a',1445524219246,'JMS','Jean-Marc','SATTA','local',1445524219246,'M',2,NULL,'jean-pierre.chamarande@digitaldimension.fr',NULL,NULL,NULL),(19,'alice@fai.com','2bd806c97f0e00af1a1fc3328fa763a9269723c8db8fac4f93af71db186d6e90',1445432661044,'Alice Customer','Alice','Glisse','local',1445432661044,'F',1,NULL,NULL,NULL,NULL,NULL),(20,'jprudhomme@mobileiron.com','ef4909f06cb590bb84c4d22e71a22d7811e35dc7cf153fe916639b7bf7071d1b',1448223739848,'jeanprumi','Jean Christophe','Prudhomme','local',1448223739848,'M',2,NULL,'jprudhomme@mobileiron.com',NULL,NULL,NULL),(21,'mobilityforwork-editor@hp.com','b61335ff92a8794154cdf05eee50d76a77a530868ed14372f5186677819e6eaa',1453813085223,'HP Editor','HP','Mobility for Work','local',1453813085223,'M',2,'06 74 35 54 29','mobilityforwork-editor@hp.com',NULL,NULL,NULL),(22,'alice2@fai.com','f52f81525409ea9dccc8b3f9bc3b14709f00720ecad8eab8d6b9349aa8914f2a',1442590959661,'Alice2 Customer','Alice2','Glisse2','local',1442590959661,'F',1,NULL,NULL,NULL,NULL,NULL),(23,'bastien.loron@econocom-osiatis.com','d719e47e3771a4ee3ba9fdeacec7fdfcef9c9fb4033f34d8abb849d10e4ee95d',1442590959661,'Bastien Loron','Bastien','Loron','local',1442590959661,'M',2,NULL,NULL,NULL,NULL,NULL),(24,'alice3@fai.com','78c3c9c7dd9f766be390c6a05600688f678687fd497d5e4edfd7a3f597a4959b',1442590959661,'Alice3 Customer','Alice3','Glisse3','local',1442590959661,'F',1,NULL,NULL,NULL,NULL,NULL),(25,'cmenard@telelogos.com','07292a5d86d5d53dec03c2db1397ca3bea2bf5db97be274b8c58e4585fd25f4d',1446111254085,'Clément TELELOGOS','Clément ','Ménard','local',1446111254085,'M',2,NULL,'cmenard@telelogos.com',NULL,NULL,NULL),(26,'secretaire@supenseine.com','3a31cc1e2c674e23e5c74ffa83f445e426cc0cee8d1778b05e518675d4086e7c',1454631144501,'klmn',',lkm','klùlk','local',NULL,'M',1,'','',NULL,NULL,NULL),(31,'jean-pierre.chamarande2@digitaldimension.fr','3a31cc1e2c674e23e5c74ffa83f445e426cc0cee8d1778b05e518675d4086e7c',1454632060541,'kjhm','mkjhm','kjmkjhmh','local',NULL,'F',1,'','',NULL,NULL,NULL),(36,'jean-pierre.chamarande5@digitaldimension.fr','3a31cc1e2c674e23e5c74ffa83f445e426cc0cee8d1778b05e518675d4086e7c',1454660905381,'kljezezke','klzamezhezam','klzmahmhzea','local',NULL,'F',1,'','',NULL,NULL,NULL),(37,'jean-pierre.chamarandeLOLO@digitaldimension.fr','3a31cc1e2c674e23e5c74ffa83f445e426cc0cee8d1778b05e518675d4086e7c',1454661006893,'lolo','lolo','lolo','local',NULL,'F',1,'','',NULL,NULL,NULL),(38,'kariithi.kilemi@hp.com','bb4e7ad824bb4e51b4b7c5180e8783955032fce81becfa79e9623999cfd747a2',1455128011800,'','Kariithi','Kilemi','local',NULL,'M',1,'','',NULL,NULL,NULL),(39,'ccuny@wynd.eu','3aa2aab841fb287d8618bf5f4525393c3f20a8b328d2368206b479c1163d0790',1456147846514,'Wynd','Charles','cuny','local',NULL,'M',2,'','',NULL,NULL,NULL),(40,'olivier.galy@mhcomm.fr','4156a9f6c6076e022d70f5c3a6d698c5ae2135b80e6a5006454520661a7d7a47',1456161051406,'mhcomm','OLIVIER','GALY','local',NULL,'M',2,'','',NULL,NULL,NULL),(41,'f.cadeau@logosapience.fr','3aa2aab841fb287d8618bf5f4525393c3f20a8b328d2368206b479c1163d0790',1456309281565,'fcadeau','François','CADEAU','local',NULL,'M',2,'','',NULL,NULL,NULL),(42,'sebastien@ocito.com','89d2e6df58d4c50244855ed8ed44454bc5313367701c050ad9b402a72bdd6c96',1456313459478,'_Seb','Sébastien','Fosset','local',NULL,'M',2,'','',NULL,NULL,NULL),(43,'jpere@noledge.fr','36decf99a5af53231f3e1a23848f2d826c9de0a50bae9c30edf15c34b1656cb3',1456407138963,'','JEROME','PERE','local',NULL,'M',2,'','',NULL,NULL,NULL),(44,'lodic@maskott.com','d3c87cbbda57de36aedcb65ea88697be0283dcbb11f7ea04ad56cea3ce173362',1456838534118,'MASKOTT','Laurent','ODIC','local',NULL,'M',2,'','',NULL,NULL,NULL),(45,'bart@intuiteev.io','7e10798fc009e1cc1bd67d3e54c9aa973c3403749eb16d50dceb20b8fcfb2ebe',1457369129597,'BART M','Mathieu','BART','local',1457369129597,'M',4,'','',NULL,NULL,NULL),(46,'alison@intuiteev.io','f7dc628f9ecccd8d213e7504962bdd9ca90f6ef6273d8128207eb2ba7c6db522',1458233687542,'','Garde','Alison','local',1458233687542,'F',1,'','',NULL,NULL,NULL),(47,'newbob@intuiteev.io','933bdd7165df34d5667aa62fb27d774a9d17f9cd9a92346b7550997e41f43740',1458254323475,'New BOB','BOBe','New BOB','local',1458254323475,'M',2,'','',NULL,NULL,NULL),(48,'other@test.io','96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e',1458254612726,'','test','other','local',1458254612726,'M',1,'','',NULL,NULL,NULL),(49,'bobbcn@intuiteev.io','ab266fcf5ce45fe51f8b770bec3d2631f20e019eb81e8a9d6c09688ded42b099',1458289961510,'','BcnBob','BobBcn','local',1458289961510,'M',1,'','',NULL,NULL,NULL),(50,'alissonD@intuiteev.io','0516fe13df42247d9bea6070ff91a89d8fbd31816f541976b09ef5d7622dd38e',1458630730251,'AlissonD','Alisson','Dupont','local',1458630730251,'F',1,'','',NULL,NULL,NULL),(51,'huguette@intuiteev.io','ab296b34180447a6c1b74032f6db9186d1883a496102bbdcc03204312122a95c',1458833597584,'gueguette','Huguette','De Versailles','local',1458833597584,'F',1,'','',NULL,NULL,NULL),(52,'ali@intuiteev.io','b9f47d1f87a6567c58717d0c65b9ba170900aae912d5e5f3cdb978dcc6daa95f',1458891823311,'Ali','Ali dupont','WAZNI','local',1458891823311,'M',1,'','',NULL,NULL,NULL),(53,'dupont@intuiteev.io','286d10f4fea823b0fe87c00d6f68b5b80c21ab24fdc8416d40266aede2874209',1462988078611,'Dupont','Laurent','DUPONT','local',1462988078611,'M',4,'','',NULL,NULL,NULL),(54,'bob2@intuiteev.io','f20dc737bf90cdbb513a1c65c0665c771ddc6ee482a55b74ba7759ba84897566',1463852135222,'bob2','bob junior','bob2','local',1463852135222,'M',2,'','',NULL,NULL,NULL),(55,'john@intuiteev.io','96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e',1463852672272,'','Benavides','John','local',1463852672272,'M',2,'','',NULL,NULL,NULL);
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
  CONSTRAINT `fk_user_validated` FOREIGN KEY (`validated_by`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
INSERT INTO `user_profile` VALUES (2,'Nuance Communications','Morgan--Corner-2','Unknown description :(',NULL,NULL,NULL,1,4),(3,'Corner Docapost','Herve-Corner-3','Description corner éditeur Docapost',NULL,NULL,NULL,1,2),(4,'Corner BulldozAIR','Adrien-Corner-4','Bulldozair',NULL,NULL,NULL,1,5),(6,'Morpho, leader de la sécurité et de l’identité','Editor-Corner-6','Morpho est leader mondial des solutions d’authentification forte, de signature électronique, d’archivage à valeur probante et de traçabilité',NULL,NULL,NULL,1,12),(7,'Lorem Ipsum','Lorem-Ipsum-7','Lorem Ipsum',NULL,NULL,7,1,30),(8,'Corner Aruba Networks','Anthony-Corner-8','Description corner éditeur Aruba Networks',NULL,NULL,NULL,1,1),(9,'Bob Intuiteev','Bob-Intuiteev-9','Description corner éditeur Bob Intuiteev',1456413953163,'logo-9.png',NULL,1,3),(11,'Corner DocuSign','Sebastien-Corner-11','Description corner éditeur DocuSign',NULL,NULL,NULL,1,10),(12,'Corner NORCOD','ELIZABETH-Corner-12','Description corner éditeur NORCOD',1454668899937,'logo-12.jpg',7,1,9),(14,'HP ','HP--14','Description corner éditeur HP',1459410849830,NULL,NULL,1,11),(18,'Corner ARAGON-eRH','Jean-Marc-Corner-18','Description corner éditeur ARAGON-eRH',NULL,NULL,NULL,1,8),(20,'Corner MobileIron','Jean-Christophe-Corner-20','Commentaire interne HP MI MobileIron',NULL,NULL,NULL,1,7),(21,'Corner HP','HP-Corner-21','HP Mobility révolutionne votre façon de travailler grâce à des produits et services avancés qui améliorent vos processus et renforcent votre relation avec le client.\n\nAdapté à votre univers professionnel: transformer la santé, doper la distribution, booster la construction, électriser l\'enseignement,  HP a développé des solutions spécifiques avec une sécurité intégrée pour répondre aux défis de votre secteur.\n\nAvec des appareils et des services de catégorie professionnelle, les solutions HP Mobility permettent aux entreprises de plonger dans leur transformation du poste de travail en toute sérénité.',NULL,NULL,NULL,1,14),(23,'Corner Hiflex','Bastien-Corner-23','Description corner éditeur Hiflex',NULL,NULL,NULL,1,13),(25,'Corner TELELOGOS','Clement--Corner-25','Description corner éditeur TELELOGOS',NULL,NULL,NULL,1,15),(39,'Charles Corner','Charles-Corner-39',NULL,NULL,NULL,1,1,19),(40,'OLIVIER Corner','OLIVIER-Corner-40',NULL,NULL,NULL,1,1,20),(41,'LogoSapience','LogoSapience-41',NULL,1457019924899,NULL,1,1,21),(42,'Sébastien Corner','Sebastien-Corner-42',NULL,NULL,NULL,1,1,22),(43,'NOLEDGE Corner','NOLEDGE-Corner-43',NULL,1456419749328,NULL,1,1,23),(44,'Laurent Corner','Laurent-Corner-44',NULL,NULL,NULL,1,1,24),(45,'Mathieu Corner','BART-M-Corner-45',NULL,NULL,NULL,7,1,25),(47,'BOBe Corner','BOBe-Corner-47',NULL,NULL,NULL,7,1,26),(53,'Laurent Corner','Dupont-Corner-53',NULL,NULL,NULL,7,1,29),(54,'bob junior Corner','bob-junior Corner-54',NULL,NULL,NULL,7,1,31),(55,'Benavides Corner','Benavides Corner-55',NULL,NULL,NULL,NULL,NULL,32);
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

-- Dump completed on 2016-12-13 17:05:48
-- MySQL dump 10.13  Distrib 5.7.13, for linux-glibc2.5 (x86_64)
--
-- Host: 0.0.0.0    Database: marketplace_sncf
-- ------------------------------------------------------
-- Server version	5.7.16

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
INSERT INTO `SequelizeMeta` VALUES ('20160420153406-proabono.js'),('20160426163482-acl_setup.js'),('20160503094102-bundle.js'),('20160510134174-delete-user.js'),('20160511125936-admin-profile-company.js'),('20160518122420-acl-uservoice.js'),('20160524130284-orders-permissions.js'),('20160531172735-assignment-permissions.js'),('20160531172778-assignment.js'),('20160603122034-add-change-product-owner-permission.js'),('20160609163900-assignment-posystem.js'),('20160616132203-add-product-type.js'),('20160620153658-assigment_order-remove-add-columns.js'),('20160630122221-enable-product-features.js'),('20160712125324-product_timeline.js'),('20160713130351-populate_timelines_steps_1.js'),('20160714135677-modify_includes_po_from_product_timeline_steps_executor.js'),('20160719130114-add_timeline_to_products.js'),('20160720120204-add-product-assignment-options.js'),('20160824142451-add-external-workflow-for-assignment-orders.js'),('20160829095191-fix-timeline-executor_id-column.js'),('20160906171834-add-stock-table.js'),('20160912121125-add-gdpid-assignment-order.js'),('20160926152675-add-product-follow-ups.js'),('20160927114155-follow-ups.js'),('20160928164055-assignment-order-followups-add-demo-cols.js'),('20160929160383-remove-follow-up-state-column.js'),('20160929181981-add-follow-up-id-to-assignment-order-follow-up.js'),('20161004125267-tidy-follow-ups.js'),('20161004132680-add-timeline-type-column.js'),('20161004135248-add-follow-up-timeline-data.js'),('20161005123924-update-timeline-data.js'),('20161005165097-force-timeline-steps-unique.js'),('20161005174808-fix-product-follow-ups-data.js'),('20161007131127-update-timeline-step-data.js'),('20161011103623-comments-table.js'),('20161012114145-notifications.js'),('20161027095035-user-foreignkeys.js'),('20161027124906-add-portability-timeline-and-steps.js'),('20161027144064-sncf-sync-users.js'),('20161031143964-add-options-to-followups.js'),('20161103100550-remove-notification-user-foreign-keys.js'),('20161103102722-new-sav-casse.js'),('20161103120378-add-new-sav-cass-timeline-data.js'),('20161103134239-add-related-timeline-table.js'),('20161104113880-remove-user-foreignkeys.js'),('20161104124000-import-gdp.js'),('20161108101906-fix-product-data.js'),('20161108131446-remove-non-sncf-assignments.js'),('20161111091411-add-primarykey-product-follow-ups.js');
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
INSERT INTO `article` VALUES (1,'Donnez un titre à votre article!','Donnez-un-titre-a-votre-article!-1','','','',34,1472495116648,1472495116648,0,3,NULL,NULL,NULL,'Article',NULL,NULL,NULL,NULL),(2,'Donnez uåTITLE titre à votre article!','Donnez-uaTITLE-titre-a-votre-article!-2','','{\"entityMap\":{},\"blocks\":[{\"key\":\"cn08c\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]}]}','',34,1473070888824,1473070888824,0,2,NULL,NULL,NULL,'Article','fsfssdsf','kl;kk\';',NULL,NULL),(3,'Donnez un titre à votre article!','Donnez-un-titre-a-votre-article!-3','','','',40,1473346367428,1473346367428,0,2,NULL,NULL,NULL,'Article',NULL,NULL,NULL,NULL),(4,'TESTING','TESTING-4','','{\"entityMap\":{},\"blocks\":[{\"key\":\"3mtqh\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]}]}','',34,1474358692713,1474358692713,0,3,NULL,NULL,NULL,'Article',NULL,NULL,NULL,NULL);
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
INSERT INTO `article_corner` VALUES (2,2,0);
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
  `import_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_assigned_to` (`id_assigned_to`),
  KEY `id_assigned_by` (`id_assigned_by`),
  KEY `id_state` (`id_state`),
  CONSTRAINT `assignment_ibfk_3` FOREIGN KEY (`id_state`) REFERENCES `item_state` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1961 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
INSERT INTO `assignment` VALUES (219,'dd2560955',1007,1007,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(270,'dd2560955',1032,1032,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(271,'dd2560955',1032,1032,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(359,'dd2560955',1078,1078,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(366,'dd2560955',1082,1082,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(442,'dd2560955',1113,1113,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(443,'dd2560955',1113,1113,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(498,'dd2560955',1145,1145,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(639,'dd2560955',1153,1153,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(702,'dd2560955',1191,1191,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(759,'dd2560955',1224,1224,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(760,'dd2560955',1225,1225,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(761,'dd2560955',1225,1225,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(792,'dd2560955',1243,1243,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(793,'dd2560955',1243,1243,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(810,'dd2560955',1253,1253,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(815,'dd2560955',1256,1256,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(816,'dd2560955',1256,1256,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(820,'dd2560955',1259,1259,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(831,'dd2560955',1265,1265,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(881,'dd2560955',1294,1294,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(882,'dd2560955',1294,1294,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(907,'dd2560955',1307,1307,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(908,'dd2560955',1307,1307,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(909,'dd2560955',1308,1308,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(910,'dd2560955',1308,1308,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(973,'dd2560955',1347,1347,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(974,'dd2560955',1347,1347,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(983,'dd2560955',1353,1353,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1017,'dd2560955',1372,1372,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1018,'dd2560955',1372,1372,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1019,'dd2560955',1373,1373,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1035,'dd2560955',1383,1383,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1055,'dd2560955',1396,1396,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1168,'dd2560955',1457,1457,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1171,'dd2560955',1459,1459,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1195,'dd2560955',1474,1474,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1196,'dd2560955',1474,1474,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1197,'dd2560955',1474,1474,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1198,'dd2560955',1474,1474,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1199,'dd2560955',1474,1474,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1200,'dd2560955',1474,1474,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1201,'dd2560955',1474,1474,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1202,'dd2560955',1474,1474,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1203,'dd2560955',1474,1474,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1265,'dd2560955',1511,1511,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1266,'dd2560955',1511,1511,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1329,'dd2560955',1546,1546,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1336,'dd2560955',1551,1551,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1376,'dd2560955',1575,1575,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1378,'dd2560955',1577,1577,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1408,'dd2560955',1589,1589,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1409,'dd2560955',1590,1590,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1420,'dd2560955',1597,1597,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1421,'dd2560955',1597,1597,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1422,'dd2560955',1597,1597,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1423,'dd2560955',1597,1597,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1465,'dd2560955',1622,1622,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1481,'dd2560955',1630,1630,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1489,'dd2560955',1636,1636,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1535,'dd2560955',1667,1667,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1536,'dd2560955',1667,1667,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1578,'dd2560955',1682,1682,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1579,'dd2560955',1682,1682,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1581,'dd2560955',1684,1684,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1582,'dd2560955',1684,1684,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1585,'dd2560955',1687,1687,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1586,'dd2560955',1687,1687,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1595,'dd2560955',1693,1693,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1596,'dd2560955',1693,1693,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1623,'dd2560955',1708,1708,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1624,'dd2560955',1708,1708,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1626,'dd2560955',1710,1710,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1627,'dd2560955',1710,1710,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1630,'dd2560955',1712,1712,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1650,'dd2560955',1724,1724,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1651,'dd2560955',1724,1724,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1667,'dd2560955',1735,1735,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1686,'dd2560955',1749,1749,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1687,'dd2560955',1749,1749,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1688,'dd2560955',1750,1750,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1689,'dd2560955',1750,1750,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1718,'dd2560955',1769,1769,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1721,'dd2560955',1771,1771,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1736,'dd2560955',1781,1781,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1737,'dd2560955',1781,1781,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1752,'dd2560955',1790,1790,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1775,'dd2560955',1803,1803,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1782,'dd2560955',1809,1809,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1795,'dd2560955',1818,1818,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1802,'dd2560955',1823,1823,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1803,'dd2560955',1823,1823,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1812,'dd2560955',1828,1828,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1813,'dd2560955',1828,1828,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1816,'dd2560955',1830,1830,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1817,'dd2560955',1831,1831,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1824,'dd2560955',1835,1835,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1825,'dd2560955',1836,1836,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1826,'dd2560955',1836,1836,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1839,'dd2560955',1843,1843,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1848,'dd2560955',1848,1848,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1849,'dd2560955',1848,1848,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1850,'dd2560955',1849,1849,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1851,'dd2560955',1849,1849,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1852,'dd2560955',1850,1850,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1853,'dd2560955',1851,1851,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1863,'dd2560955',1857,1857,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1864,'dd2560955',1857,1857,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1865,'dd2560955',1858,1858,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1881,'dd2560955',985,985,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1882,'dd2560955',985,985,5,'581b3eff708d8c4d0072a39b',1478606178018,1478606178018,'alias',NULL,'gdp'),(1951,'89acbf2ab',1151,40,5,'5825c97fa47b062500ebfd52',1478871320924,1478871320924,'sncf-assignment-1951','',NULL),(1952,'223ecfdd9',1113,34,5,'5825cc9aa47b062500ebfd53',1478872210321,1478872210321,'sncf-assignment-1952','',NULL),(1953,'5c483e50d',1511,40,5,'5825d88ca47b062500ebfd56',1478874576332,1478874576332,'sncf-assignment-1953','',NULL),(1954,'ca362ce3c',1473,40,5,'5825d873a47b062500ebfd55',1478874589529,1478874589529,'sncf-assignment-1954','',NULL),(1955,'d9d805e22',1693,40,5,'5827aff7a47b062500ebfd57',1478875477798,1478875477798,'sncf-assignment-1955','',NULL),(1956,'e65db6ce2',1771,40,5,'5827aff9a47b062500ebfd58',1478875507144,1478875507144,'sncf-assignment-1956','',NULL),(1957,'3068bee18',1032,40,4,NULL,1478997231738,1478997231739,'sncf-assignment-1957','',NULL),(1958,'0a792aab3',1809,40,5,'58283f2651e7172500e6ffac',1479032494684,1479032494684,'sncf-assignment-1958','',NULL),(1959,'d3c200de0',1459,40,5,'5828ca9b51e7172500e6ffb4',1479068252181,1479068252181,'sncf-assignment-1959','',NULL),(1960,'07271b551',1459,37,5,'5828d39e51e7172500e6ffb5',1479070610591,1479070610591,'sncf-assignment-1960','',NULL);
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
  `import_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_assignment` (`id_assignment`),
  KEY `id_product` (`id_product`),
  KEY `id_bundle` (`id_bundle`),
  KEY `id_state` (`id_state`),
  CONSTRAINT `assignment_order_ibfk_1` FOREIGN KEY (`id_assignment`) REFERENCES `assignment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `assignment_order_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `assignment_order_ibfk_3` FOREIGN KEY (`id_bundle`) REFERENCES `bundle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `assignment_order_ibfk_4` FOREIGN KEY (`id_state`) REFERENCES `item_state` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2164 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order`
--

LOCK TABLES `assignment_order` WRITE;
/*!40000 ALTER TABLE `assignment_order` DISABLE KEYS */;
INSERT INTO `assignment_order` VALUES (418,'dd2560955',219,133,NULL,4,NULL,1,NULL,1478606178018,'179','gdp'),(468,'dd2560955',270,133,NULL,4,NULL,1,NULL,1478606178018,'465','gdp'),(469,'dd2560955',271,156,NULL,4,NULL,1,NULL,1478606178018,'497','gdp'),(558,'dd2560955',359,133,NULL,4,NULL,1,NULL,1478606178018,'226','gdp'),(565,'dd2560955',366,133,NULL,4,NULL,1,NULL,1478606178018,'6','gdp'),(641,'dd2560955',442,133,NULL,4,NULL,1,NULL,1478606178018,'227','gdp'),(642,'dd2560955',443,150,NULL,4,NULL,1,NULL,1478606178018,'255','gdp'),(694,'dd2560955',498,133,NULL,4,NULL,1,NULL,1478606178018,'127','gdp'),(838,'dd2560955',639,132,NULL,4,NULL,1,NULL,1478606178018,'1036','gdp'),(902,'dd2560955',702,133,NULL,4,NULL,1,NULL,1478606178018,'109','gdp'),(958,'dd2560955',759,133,NULL,4,NULL,1,NULL,1478606178018,'181','gdp'),(959,'dd2560955',760,133,NULL,4,NULL,1,NULL,1478606178018,'8','gdp'),(960,'dd2560955',761,148,NULL,4,NULL,1,NULL,1478606178018,'329','gdp'),(991,'dd2560955',792,133,NULL,4,NULL,1,NULL,1478606178018,'588','gdp'),(992,'dd2560955',793,149,NULL,4,NULL,1,NULL,1478606178018,'254','gdp'),(1009,'dd2560955',810,133,NULL,4,NULL,1,NULL,1478606178018,'189','gdp'),(1014,'dd2560955',815,133,NULL,4,NULL,1,NULL,1478606178018,'51','gdp'),(1015,'dd2560955',816,161,NULL,4,NULL,1,NULL,1478606178018,'342','gdp'),(1019,'dd2560955',820,133,NULL,4,NULL,1,NULL,1478606178018,'632','gdp'),(1030,'dd2560955',831,133,NULL,4,NULL,1,NULL,1478606178018,'5','gdp'),(1079,'dd2560955',881,133,NULL,4,NULL,1,NULL,1478606178018,'464','gdp'),(1080,'dd2560955',882,161,NULL,4,NULL,1,NULL,1478606178018,'343','gdp'),(1106,'dd2560955',907,133,NULL,4,NULL,1,NULL,1478606178018,'39','gdp'),(1107,'dd2560955',908,148,NULL,4,NULL,1,NULL,1478606178018,'332','gdp'),(1108,'dd2560955',909,133,NULL,4,NULL,1,NULL,1478606178018,'803','gdp'),(1109,'dd2560955',910,148,NULL,4,NULL,1,NULL,1478606178018,'501','gdp'),(1170,'dd2560955',973,133,NULL,4,NULL,1,NULL,1478606178018,'61','gdp'),(1173,'dd2560955',974,148,NULL,4,NULL,1,NULL,1478606178018,'323','gdp'),(1182,'dd2560955',983,133,NULL,4,NULL,1,NULL,1478606178018,'750','gdp'),(1216,'dd2560955',1017,133,NULL,4,NULL,1,NULL,1478606178018,'261','gdp'),(1217,'dd2560955',1018,148,NULL,4,NULL,1,NULL,1478606178018,'253','gdp'),(1218,'dd2560955',1019,133,NULL,4,NULL,1,NULL,1478606178018,'60','gdp'),(1234,'dd2560955',1035,133,NULL,4,NULL,1,NULL,1478606178018,'77','gdp'),(1254,'dd2560955',1055,133,NULL,4,NULL,1,NULL,1478606178018,'30','gdp'),(1367,'dd2560955',1168,133,NULL,4,NULL,1,NULL,1478606178018,'14','gdp'),(1370,'dd2560955',1171,133,NULL,4,NULL,1,NULL,1478606178018,'47','gdp'),(1394,'dd2560955',1195,133,NULL,4,NULL,1,NULL,1478606178018,'412','gdp'),(1395,'dd2560955',1196,133,NULL,4,NULL,1,NULL,1478606178018,'413','gdp'),(1396,'dd2560955',1197,133,NULL,4,NULL,1,NULL,1478606178018,'414','gdp'),(1397,'dd2560955',1199,133,NULL,4,NULL,1,NULL,1478606178018,'689','gdp'),(1398,'dd2560955',1198,133,NULL,4,NULL,1,NULL,1478606178018,'415','gdp'),(1399,'dd2560955',1200,159,NULL,4,NULL,1,NULL,1478606178018,'338','gdp'),(1400,'dd2560955',1201,133,NULL,4,NULL,1,NULL,1478606178018,'862','gdp'),(1401,'dd2560955',1202,133,NULL,4,NULL,1,NULL,1478606178018,'864','gdp'),(1403,'dd2560955',1203,133,NULL,4,NULL,1,NULL,1478606178018,'865','gdp'),(1464,'dd2560955',1265,133,NULL,4,NULL,1,NULL,1478606178018,'665','gdp'),(1466,'dd2560955',1266,157,NULL,4,NULL,1,NULL,1478606178018,'335','gdp'),(1528,'dd2560955',1329,133,NULL,4,NULL,1,NULL,1478606178018,'699','gdp'),(1535,'dd2560955',1336,133,NULL,4,NULL,1,NULL,1478606178018,'188','gdp'),(1575,'dd2560955',1376,133,NULL,4,NULL,1,NULL,1478606178018,'3','gdp'),(1577,'dd2560955',1378,133,NULL,4,NULL,1,NULL,1478606178018,'43','gdp'),(1607,'dd2560955',1408,133,NULL,4,NULL,1,NULL,1478606178018,'59','gdp'),(1608,'dd2560955',1409,133,NULL,4,NULL,1,NULL,1478606178018,'54','gdp'),(1619,'dd2560955',1420,133,NULL,4,NULL,1,NULL,1478606178018,'187','gdp'),(1620,'dd2560955',1421,134,NULL,4,NULL,1,NULL,1478606178018,'226','gdp'),(1621,'dd2560955',1422,133,NULL,4,NULL,1,NULL,1478606178018,'406','gdp'),(1622,'dd2560955',1423,148,NULL,4,NULL,1,NULL,1478606178018,'322','gdp'),(1664,'dd2560955',1465,133,NULL,4,NULL,1,NULL,1478606178018,'65','gdp'),(1679,'dd2560955',1481,133,NULL,4,NULL,1,NULL,1478606178018,'49','gdp'),(1688,'dd2560955',1489,133,NULL,4,NULL,1,NULL,1478606178018,'635','gdp'),(1733,'dd2560955',1535,133,NULL,4,NULL,1,NULL,1478606178018,'76','gdp'),(1735,'dd2560955',1536,161,NULL,4,NULL,1,NULL,1478606178018,'347','gdp'),(1777,'dd2560955',1578,133,NULL,4,NULL,1,NULL,1478606178018,'62','gdp'),(1778,'dd2560955',1579,148,NULL,4,NULL,1,NULL,1478606178018,'324','gdp'),(1780,'dd2560955',1581,133,NULL,4,NULL,1,NULL,1478606178018,'458','gdp'),(1781,'dd2560955',1582,161,NULL,4,NULL,1,NULL,1478606178018,'341','gdp'),(1784,'dd2560955',1585,133,NULL,4,NULL,1,NULL,1478606178018,'78','gdp'),(1785,'dd2560955',1586,161,NULL,4,NULL,1,NULL,1478606178018,'348','gdp'),(1794,'dd2560955',1595,133,NULL,4,NULL,1,NULL,1478606178018,'757','gdp'),(1795,'dd2560955',1596,158,NULL,4,NULL,1,NULL,1478606178018,'337','gdp'),(1822,'dd2560955',1623,133,NULL,4,NULL,1,NULL,1478606178018,'52','gdp'),(1823,'dd2560955',1624,148,NULL,4,NULL,1,NULL,1478606178018,'252','gdp'),(1825,'dd2560955',1626,133,NULL,4,NULL,1,NULL,1478606178018,'7','gdp'),(1826,'dd2560955',1627,148,NULL,4,NULL,1,NULL,1478606178018,'325','gdp'),(1829,'dd2560955',1630,133,NULL,4,NULL,1,NULL,1478606178018,'511','gdp'),(1849,'dd2560955',1650,133,NULL,4,NULL,1,NULL,1478606178018,'56','gdp'),(1850,'dd2560955',1651,148,NULL,4,NULL,1,NULL,1478606178018,'503','gdp'),(1866,'dd2560955',1667,133,NULL,4,NULL,1,NULL,1478606178018,'4','gdp'),(1885,'dd2560955',1686,133,NULL,4,NULL,1,NULL,1478606178018,'41','gdp'),(1886,'dd2560955',1688,133,NULL,4,NULL,1,NULL,1478606178018,'50','gdp'),(1887,'dd2560955',1689,148,NULL,4,NULL,1,NULL,1478606178018,'504','gdp'),(1889,'dd2560955',1687,148,NULL,4,NULL,1,NULL,1478606178018,'330','gdp'),(1916,'dd2560955',1718,133,NULL,4,NULL,1,NULL,1478606178018,'66','gdp'),(1920,'dd2560955',1721,133,NULL,4,NULL,1,NULL,1478606178018,'82','gdp'),(1935,'dd2560955',1736,133,NULL,4,NULL,1,NULL,1478606178018,'81','gdp'),(1938,'dd2560955',1737,161,NULL,4,NULL,1,NULL,1478606178018,'345','gdp'),(1953,'dd2560955',1752,133,NULL,4,NULL,1,NULL,1478606178018,'48','gdp'),(1971,'dd2560955',1775,133,NULL,4,NULL,1,NULL,1478606178018,'70','gdp'),(1983,'dd2560955',1782,133,NULL,4,NULL,1,NULL,1478606178018,'72','gdp'),(1991,'dd2560955',1795,133,NULL,4,NULL,1,NULL,1478606178018,'71','gdp'),(2002,'dd2560955',1803,148,NULL,4,NULL,1,NULL,1478606178018,'326','gdp'),(2004,'dd2560955',1802,133,NULL,4,NULL,1,NULL,1478606178018,'36','gdp'),(2011,'dd2560955',1812,133,NULL,4,NULL,1,NULL,1478606178018,'79','gdp'),(2012,'dd2560955',1813,161,NULL,4,NULL,1,NULL,1478606178018,'346','gdp'),(2015,'dd2560955',1816,133,NULL,4,NULL,1,NULL,1478606178018,'34','gdp'),(2016,'dd2560955',1817,133,NULL,4,NULL,1,NULL,1478606178018,'69','gdp'),(2023,'dd2560955',1824,133,NULL,4,NULL,1,NULL,1478606178018,'55','gdp'),(2024,'dd2560955',1825,133,NULL,4,NULL,1,NULL,1478606178018,'68','gdp'),(2025,'dd2560955',1826,148,NULL,4,NULL,1,NULL,1478606178018,'502','gdp'),(2038,'dd2560955',1839,133,NULL,4,NULL,1,NULL,1478606178018,'63','gdp'),(2047,'dd2560955',1850,133,NULL,4,NULL,1,NULL,1478606178018,'22','gdp'),(2048,'dd2560955',1848,133,NULL,4,NULL,1,NULL,1478606178018,'80','gdp'),(2049,'dd2560955',1849,161,NULL,4,NULL,1,NULL,1478606178018,'344','gdp'),(2050,'dd2560955',1851,148,NULL,4,NULL,1,NULL,1478606178018,'327','gdp'),(2051,'dd2560955',1853,133,NULL,4,NULL,1,NULL,1478606178018,'74','gdp'),(2053,'dd2560955',1852,133,NULL,4,NULL,1,NULL,1478606178018,'67','gdp'),(2061,'dd2560955',1863,133,NULL,4,NULL,1,NULL,1478606178018,'10','gdp'),(2063,'dd2560955',1864,148,NULL,4,NULL,1,NULL,1478606178018,'331','gdp'),(2064,'dd2560955',1865,133,NULL,4,NULL,1,NULL,1478606178018,'64','gdp'),(2080,'dd2560955',1882,133,NULL,4,NULL,1,NULL,1478606178018,'822','gdp'),(2083,'dd2560955',1881,133,NULL,4,NULL,1,NULL,1478606178018,'75','gdp'),(2152,'ab70c6bcc',1951,174,NULL,4,NULL,1,'',1478871320937,'652',NULL),(2153,'a119d085b',1952,128,NULL,4,NULL,1,'',1478872210331,'1151',NULL),(2154,'1d7f4260d',1953,174,NULL,4,NULL,0,'',1478874576345,'653',NULL),(2155,'0c431992f',1954,128,NULL,4,NULL,1,'',1478874589537,'1152',NULL),(2156,'c7baca12b',1955,128,NULL,4,NULL,1,'',1478875477808,'1153',NULL),(2157,'f970eda65',1956,174,NULL,4,NULL,0,'',1478875507150,'654',NULL),(2158,'96c662c57',1957,128,NULL,4,NULL,0,'',1478997231750,NULL,NULL),(2159,'f4b9ebf83',1958,NULL,32,4,NULL,0,'',1479032494702,NULL,NULL),(2160,'52e5168df',1958,128,32,4,NULL,1,'',1479032494727,'1154',NULL),(2161,'97f0bdfe2',1958,174,32,4,NULL,0,'',1479032494727,'655',NULL),(2162,'cacecf46e',1959,174,NULL,4,NULL,1,'',1479068252195,'656',NULL),(2163,'9a8ae9848',1960,128,NULL,4,NULL,1,'activation_date=2016-11-25&sim=std_mini_sim_2ff&sms_alert=on',1479070610603,'1155',NULL);
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
  `options` text,
  PRIMARY KEY (`id`),
  KEY `id_assignment_order` (`id_assignment_order`),
  CONSTRAINT `assignment_order_follow_ups_ibfk_1` FOREIGN KEY (`id_assignment_order`) REFERENCES `assignment_order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order_follow_ups`
--

LOCK TABLES `assignment_order_follow_ups` WRITE;
/*!40000 ALTER TABLE `assignment_order_follow_ups` DISABLE KEYS */;
INSERT INTO `assignment_order_follow_ups` VALUES (48,558,'5828563c51e7172500e6ffb2',1475047299102,NULL,'portability','1','account_number=ghkjljkhlj&idGdp=226&new_sim_number=567897654567890&order_number=gfhgjkhj5678&portability_date=2016-11-15&target_operator=bouygue&userId=37'),(49,2016,'5828c80e51e7172500e6ffb3',1475047299102,NULL,'portability','1','account_number=lkjhlkhj&assignmentId=dd2560955&idGdp=69&new_sim_number=456789TYUI&order_number=456789&portability_date=2016-11-18&target_operator=orange&userId=37'),(50,468,'58356e858486c54f005a44ab',1475047299102,NULL,'portability','1','account_number=12314&idGdp=465&new_sim_number=42134124&order_number=2134124214&portability_date=2014-12-30&target_operator=orange&userId=34'),(51,641,'58356ea48486c54f005a44ac',1475047299102,NULL,'portability','1','account_number=213214312&idGdp=227&new_sim_number=4214&order_number=4124321&portability_date=2017-12-01&target_operator=bouygue&userId=34');
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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle`
--

LOCK TABLES `bundle` WRITE;
/*!40000 ALTER TABLE `bundle` DISABLE KEYS */;
INSERT INTO `bundle` VALUES (1,'ADC - Kit nouvel arrivant','Une dotation complète et opérationnelle.','Ce kit comprend :\n. un SAMSUNG Galaxy Xcover3\n. un carte SIM et une ligne voix associé',2,1464870237649,1464870237649,NULL,2,'ADC--Kit-nouvel-arrivant-1',1),(2,' Sirius NG - Kit Ipad AIR paramétré 2','Une dotation complète et opérationnelle.','Ce kit comprend :\n. un iPad Air\n. une ligne voix nationale\n. création d\'une boite aux lettres\n. le paramétrage de l\'EMM',2,1464870435747,1464870435747,NULL,1,' Sirius-NG--Kit-Ipad-AIR-parametre-2-2',3),(3,'Bundle de demo','c\'est el plus beau bundle',NULL,7,1465373092385,1465373092385,NULL,3,'Bundle-de-demo-3',NULL),(4,'Donnez un titre à votre package',NULL,NULL,7,1466456756889,1466456756889,NULL,3,'Donnez-un-titre-a-votre-package-4',NULL),(5,'Donnez un titre à votre package',NULL,NULL,7,1467042135006,1467042135006,NULL,3,'Donnez-un-titre-a-votre-package-5',NULL),(6,'Gerard Package',NULL,NULL,7,1469626122586,1469626122586,NULL,3,'Gerard-Package-6',16),(7,'JP package','blabla le package de JP',NULL,7,1469655861131,1469655861131,NULL,3,'JP-package-7',17),(8,'Package A+','This is a basline','This is a description for the package.',2,1469693941856,1469693941856,NULL,2,'Package-A+-8',18),(9,'Package',NULL,'Pack 1',7,1469719137823,1469719137823,NULL,3,'Package-9',19),(10,'pack Ben',NULL,NULL,7,1469721196360,1469721196360,NULL,3,'pack-Ben-10',NULL),(11,'Donnez un titre à votre package',NULL,NULL,7,1470083195254,1470083195254,NULL,3,NULL,NULL),(12,'Donnez un titre à votre package',NULL,NULL,7,1470083301934,1470083301934,NULL,3,NULL,NULL),(13,'Donnez un titre à votre package',NULL,NULL,2,1470083426761,1470083426761,NULL,3,NULL,NULL),(14,'Donnez un titre à votre package',NULL,NULL,2,1470083461477,1470083461477,NULL,3,NULL,NULL),(15,'Donnez un titre à votre package',NULL,NULL,2,1470084004996,1470084004996,NULL,3,'Donnez-un-titre-a-votre-package-15',NULL),(16,'demo charles',NULL,NULL,7,1470208833202,1470208833202,NULL,3,'demo-charles-16',NULL),(17,'Pack de Test JP',NULL,NULL,2,1470318440297,1470318440297,NULL,3,'Pack-de-Test-JP-17',8),(18,'Package Test #2 JP',NULL,NULL,2,1470325199475,1470325199475,NULL,3,'Package-Test-#2-JP-18',10),(19,'Package Test 3 JP',NULL,NULL,7,1470327243126,1470327243126,NULL,3,'Package-Test-3-JP-19',11),(20,'Pack with both new products',NULL,NULL,7,1470388032729,1470388032729,NULL,3,'Pack-with-both-new-products-20',12),(21,'Donnez un titre à votre package',NULL,NULL,2,1471503747143,1471503747143,NULL,3,'Donnez-un-titre-a-votre-package-21',NULL),(22,'Bundle Test 2',NULL,'Description',2,1472495130586,1472495130586,NULL,3,'Bundle-Test-2-22',14),(23,'',NULL,NULL,7,1472546036491,1472546036491,NULL,3,'Donnez-un-titre-a-votre-package-23',NULL),(24,'Donnez un titre à votre package',NULL,NULL,7,1472546068096,1472546068096,NULL,3,'Donnez-un-titre-a-votre-package-24',NULL),(25,'lsùejaz',NULL,NULL,7,1472654391719,1472654391719,NULL,3,'lsuejaz-25',NULL),(26,'Donnez un titre à votre package',NULL,NULL,7,1473345558543,1473345558543,NULL,3,'Donnez-un-titre-a-votre-package-26',NULL),(27,'package du 09',NULL,NULL,7,1473345567243,1473345567243,NULL,3,'package-du-09-27',NULL),(28,'TESTING BUNDLE',NULL,NULL,2,1474359392879,1474359392879,NULL,3,'TESTING-BUNDLE-28',15),(29,'My bundle',NULL,NULL,2,1475745014775,1475745014775,NULL,3,'My-bundle-29',NULL),(30,'Pack de validation',NULL,NULL,7,1476078483298,1476078483298,NULL,1,'Pack-de-validation-30',24),(31,'pAck de test',NULL,NULL,34,1478196033500,1478196033500,NULL,3,'pAck-de-test-31',25),(32,'package de test JP',NULL,NULL,34,1478252923845,1478252923845,NULL,1,'package-de-test-JP-32',26);
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
INSERT INTO `bundle_component` VALUES (1,30,0),(9,30,1),(29,31,0),(1,32,1),(2,32,1),(29,33,1),(2,35,0),(3,35,0),(3,36,1),(31,37,1),(2,39,3),(2,40,2),(6,49,1),(6,50,0),(7,51,0),(10,51,1),(16,51,1),(7,52,1),(9,52,0),(10,52,0),(16,52,0),(17,81,0),(18,81,0),(17,82,1),(8,83,0),(18,83,1),(19,83,0),(22,83,1),(27,83,2),(8,84,1),(19,84,1),(27,84,1),(20,86,0),(20,87,1),(22,96,0),(27,101,0),(28,109,0),(28,110,1),(30,128,0),(30,128,3),(31,128,0),(32,128,1),(30,129,1),(30,130,2),(32,174,0);
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
INSERT INTO `bundle_corner` VALUES (6,2),(9,2),(22,2),(27,2),(30,2),(32,2),(6,4),(8,4),(22,4);
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle_resource`
--

LOCK TABLES `bundle_resource` WRITE;
/*!40000 ALTER TABLE `bundle_resource` DISABLE KEYS */;
INSERT INTO `bundle_resource` VALUES (1,1,1,0,NULL),(2,1,2,1,NULL),(3,2,3,0,NULL),(4,2,4,1,NULL),(5,8,5,0,NULL),(6,8,6,0,NULL),(7,8,7,0,NULL),(8,17,8,0,NULL),(9,17,9,0,NULL),(10,18,10,0,NULL),(11,19,11,0,NULL),(12,20,12,0,NULL),(13,8,13,0,NULL),(14,22,14,1,NULL),(15,28,15,1,NULL),(16,6,16,1,NULL),(17,7,17,1,NULL),(18,8,18,1,NULL),(19,9,19,1,NULL),(21,30,24,0,NULL),(22,31,25,0,NULL),(23,32,26,0,NULL),(24,32,27,1,NULL);
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
  KEY `created_by` (`created_by`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'DD','00000000000000',NULL,'',33),(2,'admin','0998877665451234576345',NULL,NULL,33),(3,'bob2 Cie','123456789098765433',NULL,NULL,35),(4,'SNCF TRACTION','12345667788899990000000',NULL,NULL,37),(5,'Alisson &Cie','3445567788999999999999999999999',NULL,NULL,38),(6,'Alice & Cie','34567890°09876543456789555666',NULL,NULL,39),(7,'SNCF-Traction','345678987654456787654567898765456789',NULL,NULL,40),(8,'Orange ','45567899009877654332356788',NULL,NULL,41),(9,'ORANGE','345678909876543456789',NULL,NULL,42),(10,'ORANGE','234567899654345678987654',NULL,NULL,43),(12,'Supplier & Cie','345679087654345678909876547',NULL,NULL,44),(13,'Support & Co','56789876543234567898765434567',NULL,NULL,45),(14,'Digital Dimension','345678987534567890',NULL,NULL,46);
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
  KEY `fk_corner_created_idx` (`created_by`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corner`
--

LOCK TABLES `corner` WRITE;
/*!40000 ALTER TABLE `corner` DISABLE KEYS */;
INSERT INTO `corner` VALUES (2,'NOS EQUIPEMENTS','NOS-EQUIPEMENTS-2','',34,1463570874016,1478856368345,'logo-2.jpg'),(4,'NOS   SERVICES','NOS---SERVICES-4','',34,1463570905034,1478796620644,'logo-4.jpg');
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
INSERT INTO `corner_keyword` VALUES (2,1),(2,2),(2,35),(4,42),(4,48),(2,54),(2,57),(2,69),(2,73),(2,78),(2,121),(4,137);
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
  CONSTRAINT `fk_bestproduct_editor` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `external_workflows`
--

LOCK TABLES `external_workflows` WRITE;
/*!40000 ALTER TABLE `external_workflows` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `general_setting`
--

LOCK TABLES `general_setting` WRITE;
/*!40000 ALTER TABLE `general_setting` DISABLE KEYS */;
INSERT INTO `general_setting` VALUES (1,'seo:title','Flotte XXXX'),(3,'seo:tagline','here we can put that info'),(4,'seo:description','.....');
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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_resource`
--

LOCK TABLES `item_resource` WRITE;
/*!40000 ALTER TABLE `item_resource` DISABLE KEYS */;
INSERT INTO `item_resource` VALUES (1,'image/jpeg','1.jpg','logo sncf - KIT.jpg','logo sncf - KIT.jpg',1464945270058,0,NULL),(2,'image/png','2.png','bundle.png','bundle.png',1464945435449,0,NULL),(3,'image/jpeg','3.jpg','logo sncf - KIT.jpg','logo sncf - KIT.jpg',1466153906789,0,NULL),(4,'image/png','4.png','bundle.png','bundle.png',1466153922265,0,NULL),(5,'image/jpeg','5.jpg','product.jpg','product.jpg',1469694051860,0,NULL),(6,'image/jpeg','6.jpg','product.jpg','product.jpg',1469694063421,0,NULL),(7,'image/jpeg','7.jpg','product.jpg','product.jpg',1469694729006,0,NULL),(8,'image/png','8.png','places-folder-python-icon.png','places-folder-python-icon.png',1470318469303,0,NULL),(9,'image/png','9.png','Solved_rubiks_cube.png','Solved_rubiks_cube.png',1470318556639,0,NULL),(10,'image/png','10.png','apps-ubuntuone-icon.png','apps-ubuntuone-icon.png',1470325244375,0,NULL),(11,'image/png','11.png','Solved_rubiks_cube.png','Solved_rubiks_cube.png',1470327279381,0,NULL),(12,'image/png','12.png','apps-thunderbird-icon.png','apps-thunderbird-icon.png',1470388202452,0,NULL),(13,'image/jpeg','13.jpg','ultimate-guide-to-your-product-launch.jpg','ultimate-guide-to-your-product-launch.jpg',1470638611689,0,NULL),(14,'image/jpeg','14.jpg','total-product-marketing.jpg','total-product-marketing.jpg',1472495147855,0,NULL),(15,'image/jpeg','15.jpg','product.jpg','product.jpg',1474359502660,0,NULL),(16,'image/jpeg','16.jpg','sncf-1.jpg','sncf-1.jpg',1475492895859,0,NULL),(17,'image/jpeg','17.jpg','sncf-1.jpg','sncf-1.jpg',1475493009908,0,NULL),(18,'image/jpeg','18.jpg','sncf-4.jpg','sncf-4.jpg',1475493031850,0,NULL),(19,'image/jpeg','19.jpg','sncf-4.jpg','sncf-4.jpg',1475493061955,0,NULL),(20,'image/jpeg','sncf-3.jpg','sncf-3.jpg','sncf-3.jpg',1475493111093,0,NULL),(21,'image/jpeg','sncf-1.jpg','sncf-1.jpg','sncf-1.jpg',1475493115397,0,NULL),(22,'image/jpeg','22.jpg','68.jpg','68.jpg',1475493359363,0,NULL),(24,'image/png','24.png','places-folder-dropbox-icon.png','places-folder-dropbox-icon.png',1476091496121,0,NULL),(25,'image/png','25.png','package.png','package.png',1478196047779,0,NULL),(26,'image/png','26.png','package.png','package.png',1478777133446,0,NULL),(27,'image/jpeg','27.jpg','support.jpg','support.jpg',1478777158525,0,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
INSERT INTO `keyword` VALUES (10,'ADC'),(69,'Alcatel'),(1,'Apple'),(48,'email'),(42,'emm'),(57,'HTC'),(35,'ligne'),(19,'matériel'),(121,'Motorola'),(54,'nokia'),(2,'Samsung'),(16,'Sirius NG'),(73,'Smartphone'),(137,'Support'),(78,'Tablette');
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
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_comments`
--

LOCK TABLES `log_comments` WRITE;
/*!40000 ALTER TABLE `log_comments` DISABLE KEYS */;
INSERT INTO `log_comments` VALUES (1,'essau JP',38,'57f607c05c30042600157c56',1478088831384,NULL),(2,'mzh rzzalùkr',40,'57f765695c30042600157c5c',1478102678407,NULL),(3,' iaza arjzùarz iazrjojùzmzjora\nezrkhazkzazkha kezjrzoar erzhze',40,'57f765695c30042600157c5c',1478102693230,NULL),(4,'blblalal\n',41,'581b4158c5ba4d2500edfa20',1478181553294,NULL),(5,'SUIVI DÉTAILLÉ',41,'581b4158c5ba4d2500edfa20',1478181995175,NULL),(6,'demo Anissa',41,'58235c5d984cbf2500c7eae7',1478712572941,NULL),(7,'merci pour tout',41,'5828c80e51e7172500e6ffb3',1479067861110,NULL);
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
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=175 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (132,'notification_timeline_action_assignment_order',2145,'tl_step_released_sim_to_user',41,1478712468146,1478712471408,NULL,1478712431426,NULL),(133,'notification_timeline_action_assignment_order',2145,'tl_step_activated_line',41,1478712588805,1478712592509,NULL,1478712485698,NULL),(134,'notification_timeline_action_assignment_order',2145,'tl_step_fleet_updated_line_1',41,1478712588805,1478712592509,NULL,1478712503144,NULL),(135,'notification_timeline_action_assignment_order',2146,'tl_step_released_sim_to_user',41,1478777408248,1478997106371,NULL,1478713495192,NULL),(136,'notification_publication_request_product',172,NULL,34,1478776388287,NULL,NULL,1478772941260,NULL),(137,'notification_publication_request_product',172,NULL,37,1478776077618,1478776084531,NULL,1478772941260,NULL),(138,'notification_publication_request_product',156,NULL,34,1478786572803,NULL,NULL,1478785422911,NULL),(139,'notification_publication_request_product',156,NULL,37,1478785449037,1478785452644,NULL,1478785422911,NULL),(140,'notification_publication_request_product',156,NULL,34,1478786572803,NULL,NULL,1478785641466,NULL),(141,'notification_publication_request_product',156,NULL,37,1478786502483,NULL,NULL,1478785641466,NULL),(142,'notification_publication_request_product',156,NULL,34,1478786572803,NULL,NULL,1478785752961,NULL),(143,'notification_publication_request_product',156,NULL,37,1478786502483,NULL,NULL,1478785752961,NULL),(144,'notification_timeline_action_assignment_order',2152,'tl_step_fleet_updated_device_1',45,1478997493417,NULL,NULL,1478871459843,NULL),(145,'notification_timeline_action_assignment_order',2152,'tl_step_order_received',45,1478997493417,NULL,NULL,1478871704928,NULL),(146,'notification_timeline_action_assignment_order',2152,'tl_step_fleet_updated_device_2',45,1478997493417,NULL,NULL,1478871726653,NULL),(147,'notification_timeline_action_assignment_order',2152,'tl_step_intregation_request',45,1478997493417,NULL,NULL,1478871806106,NULL),(148,'notification_timeline_action_assignment_order',2152,'tl_step_integration_achieved',45,1478997493417,NULL,NULL,1478871844982,NULL),(149,'notification_timeline_action_assignment_order',2152,'tl_step_released_terminal_to_user',45,1478997493417,NULL,NULL,1478871853490,NULL),(150,'notification_timeline_action_assignment_order',2152,'tl_step_user_confirms_reception',45,1478997493417,NULL,NULL,1478871863583,NULL),(151,'notification_timeline_action_assignment_order',2153,'tl_step_released_sim_to_user',41,1478872438359,1478997106371,NULL,1478872245392,NULL),(152,'notification_timeline_action_assignment_order',2153,'tl_step_activated_line',41,1478872438359,1478997106371,NULL,1478872307901,NULL),(153,'notification_timeline_action_assignment_order',2153,'tl_step_fleet_updated_line_1',41,1478872438359,1478997106371,NULL,1478872325362,NULL),(154,'notification_timeline_action_assignment_order',2155,'tl_step_released_sim_to_user',41,1478996271902,1478997106371,NULL,1478875287656,NULL),(155,'notification_timeline_action_assignment_order',2154,'tl_step_fleet_updated_device_1',45,1478997493417,NULL,NULL,1478875305341,NULL),(156,'notification_timeline_action_assignment_order',2156,'tl_step_released_sim_to_user',41,1478996271902,1478996719035,NULL,1478996239714,NULL),(157,'notification_timeline_action_assignment_order',2157,'tl_step_fleet_updated_device_1',45,1478997493417,NULL,NULL,1478996239714,NULL),(158,'notification_timeline_action_assignment_order',2156,'tl_step_activated_line',41,1478996872421,1478997106371,NULL,1478996743160,NULL),(159,'notification_timeline_action_assignment_order',2155,'tl_step_activated_line',41,1478997082951,1478997106371,NULL,1478996906540,NULL),(160,'notification_timeline_action_assignment_order',2156,'tl_step_fleet_updated_line_1',41,1478997082951,1478997106371,NULL,1478996923521,NULL),(161,'notification_timeline_action_assignment_order',2155,'tl_step_fleet_updated_line_1',41,1478997082951,1478997085451,NULL,1478996963347,NULL),(162,'notification_timeline_action_assignment_order',2160,'tl_step_released_sim_to_user',41,1479032698094,1479032699626,NULL,1479032631898,NULL),(163,'notification_timeline_action_assignment_order',2161,'tl_step_fleet_updated_device_1',45,1479068339119,NULL,NULL,1479032631898,NULL),(164,'notification_timeline_action_assignment_order',2160,'tl_step_activated_line',41,1479032809713,1479032814694,NULL,1479032737233,NULL),(165,'notification_timeline_action_assignment_order',2162,'tl_step_fleet_updated_device_1',45,NULL,NULL,NULL,1479068351400,NULL),(166,'notification_timeline_action_assignment_order',2162,'tl_step_order_received',45,NULL,NULL,NULL,1479068375363,NULL),(167,'notification_timeline_action_assignment_order',2162,'tl_step_fleet_updated_device_2',45,NULL,NULL,NULL,1479068394488,NULL),(168,'notification_timeline_action_assignment_order',2162,'tl_step_intregation_request',45,NULL,NULL,NULL,1479068536863,NULL),(169,'notification_timeline_action_assignment_order',2162,'tl_step_integration_achieved',45,NULL,NULL,NULL,1479068555455,NULL),(170,'notification_timeline_action_assignment_order',2162,'tl_step_released_terminal_to_user',45,NULL,NULL,NULL,1479068572916,NULL),(171,'notification_timeline_action_assignment_order',2162,'tl_step_user_confirms_reception',45,NULL,NULL,NULL,1479068626244,NULL),(172,'notification_timeline_action_assignment_order',2163,'tl_step_released_sim_to_user',41,NULL,NULL,NULL,1479070696032,NULL),(173,'notification_timeline_action_assignment_order',2163,'tl_step_activated_line',41,NULL,NULL,NULL,1479070705868,NULL),(174,'notification_timeline_action_assignment_order',2163,'tl_step_fleet_updated_line_1',41,NULL,NULL,NULL,1479070724996,NULL);
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
INSERT INTO `permission_role` VALUES ('CREATE_PRODUCT',21),('EDIT_PRODUCT',21),('REQUEST_PUBLICATION_PRODUCT',21),('VALIDATE_PUBLICATION_PRODUCT',21),('PUBLISH_PRODUCT',21),('UNPUBLISH_PRODUCT',21),('DELETE_PRODUCT',21),('READ_USERS',21),('READ_USERS_DETAILS',21),('CREATE_BUNDLE',21),('EDIT_BUNDLE_OWN',21),('USERVOICE_BO_ACCESS',21),('EDIT_ASSIGNMENT',21),('CREATE_ASSIGNMENT',21),('CREATE_CORNER',21),('EDIT_CORNER',21),('DELETE_CORNER',21),('EDIT_USER_CORNER',21),('EDIT_USER_CORNER_OWN',21),('CREATE_PRODUCT',23),('EDIT_PRODUCT',23),('CHANGE_PRODUCT_OWNER',23),('REQUEST_PUBLICATION_PRODUCT',23),('UNPUBLISH_PRODUCT',23),('DELETE_PRODUCT',23),('CREATE_BUNDLE',23),('EDIT_BUNDLE_OWN',23),('REQUEST_PUBLICATION_BUNDLE_OWN',23),('UNPUBLISH_BUNDLE_OWN',23),('DELETE_BUNDLE_OWN',23),('CREATE_STOCK',23),('EDIT_STOCK',23),('EDIT_STOCK_OWN',23),('REQUEST_PUBLICATION_STOCK',23),('VALIDATE_PUBLICATION_STOCK',23),('PUBLISH_STOCK',23),('DELETE_STOCK',23),('DELETE_STOCK_OWN',23),('READ_USERS',23),('GERARD_BI360_CHART',23),('USERVOICE_BO_ACCESS',23),('CREATE_ASSIGNMENT',23),('EDIT_ASSIGNMENT_OWN',23),('REQUEST_VALIDATION_ASSIGNMENT',23),('REQUEST_VALIDATION_ASSIGNMENT_OWN',23),('CANCEL_PENDING_ASSIGNMENT_OWN',23),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',23),('VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',23),('ASSIGNMENTS_LIST_ALL_INFO',23),('ASSIGNMENTS_LIST_BASIC_INFO',23),('CAN_ACCESS_GDP',23),('CAN_ACCESS_BI360',23),('UNPUBLISH_STOCK',23),('USERVOICE_LIVE_CHAT',18),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',18),('ASSIGNMENTS_LIST_BASIC_INFO',18),('CREATE_ARTICLE',24),('EDIT_ARTICLE_OWN',24),('REQUEST_PUBLICATION_ARTICLE',24),('UNPUBLISH_ARTICLE_OWN',24),('DELETE_ARTICLE_OWN',24),('EDIT_USER_CORNER_OWN',24),('CREATE_ROLES',24),('EDIT_ROLES_PERMISSION',24),('READ_USERS',24),('READ_USERS_DETAILS',24),('VIEW_ALL_FOLLOW_UPS',24),('CREATE_ARTICLE',20),('EDIT_ARTICLE',20),('EDIT_ARTICLE_OWN',20),('REQUEST_PUBLICATION_ARTICLE_OWN',20),('REQUEST_PUBLICATION_ARTICLE',20),('VALIDATE_PUBLICATION_ARTICLE',20),('PUBLISH_ARTICLE',20),('PUBLISH_ARTICLE_OWN',20),('UNPUBLISH_ARTICLE',20),('UNPUBLISH_ARTICLE_OWN',20),('DELETE_ARTICLE',20),('CREATE_PRODUCT',20),('EDIT_PRODUCT',20),('EDIT_PRODUCT_OWN',20),('CHANGE_PRODUCT_OWNER',20),('REQUEST_PUBLICATION_PRODUCT',20),('REQUEST_PUBLICATION_PRODUCT_OWN',20),('VALIDATE_PUBLICATION_PRODUCT',20),('PUBLISH_PRODUCT',20),('PUBLISH_PRODUCT_OWN',20),('UNPUBLISH_PRODUCT',20),('UNPUBLISH_PRODUCT_OWN',20),('DELETE_PRODUCT',20),('DELETE_PRODUCT_OWN',20),('OFFER_PRODUCT',20),('CREATE_BUNDLE',20),('EDIT_BUNDLE',20),('EDIT_BUNDLE_OWN',20),('REQUEST_PUBLICATION_BUNDLE_OWN',20),('REQUEST_PUBLICATION_BUNDLE',20),('VALIDATE_PUBLICATION_BUNDLE',20),('PUBLISH_BUNDLE',20),('PUBLISH_BUNDLE_OWN',20),('UNPUBLISH_BUNDLE',20),('UNPUBLISH_BUNDLE_OWN',20),('DELETE_BUNDLE',20),('DELETE_BUNDLE_OWN',20),('CREATE_STOCK',20),('EDIT_STOCK',20),('EDIT_STOCK_OWN',20),('REQUEST_PUBLICATION_STOCK_OWN',20),('REQUEST_PUBLICATION_STOCK',20),('VALIDATE_PUBLICATION_STOCK',20),('PUBLISH_STOCK',20),('PUBLISH_STOCK_OWN',20),('UNPUBLISH_STOCK',20),('UNPUBLISH_STOCK_OWN',20),('DELETE_STOCK',20),('DELETE_STOCK_OWN',20),('CREATE_CORNER',20),('EDIT_CORNER',20),('DELETE_CORNER',20),('EDIT_USER_CORNER',20),('EDIT_USER_CORNER_OWN',20),('CREATE_ROLES',20),('EDIT_ROLES_PERMISSION',20),('EDIT_USER_ROLE',20),('READ_USERS',20),('READ_USERS_DETAILS',20),('VALIDATE_USERS',20),('CREATE_USER',20),('EDIT_USER',20),('EDIT_GENERAL_SETTINGS',20),('GERARD_BI360_CHART',20),('MICHEL_BI360_CHART',20),('USERVOICE_LIVE_CHAT',20),('USERVOICE_BO_ACCESS',20),('VIEW_ALL_FOLLOW_UPS',20),('VIEW_ALL_ASSIGNMENTS',20),('CREATE_ASSIGNMENT',20),('EDIT_ASSIGNMENT',20),('EDIT_ASSIGNMENT_OWN',20),('REQUEST_VALIDATION_ASSIGNMENT',20),('REQUEST_VALIDATION_ASSIGNMENT_OWN',20),('VALIDATE_ASSIGNMENT',20),('VALIDATE_ASSIGNMENT_OWN',20),('CANCEL_PENDING_ASSIGNMENT',20),('CANCEL_PENDING_ASSIGNMENT_OWN',20),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',20),('VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',20),('ASSIGNMENTS_LIST_ALL_INFO',20),('ASSIGNMENTS_LIST_BASIC_INFO',20),('CAN_ACCESS_GDP',20),('CAN_ACCESS_GDP2',20),('CAN_ACCESS_BI360',20),('CREATE_PRODUCT',16),('READ_USERS',16),('USERVOICE_LIVE_CHAT',16),('VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',16),('ASSIGNMENTS_LIST_ALL_INFO',16),('CREATE_ARTICLE',15),('EDIT_ARTICLE',15),('EDIT_ARTICLE_OWN',15),('REQUEST_PUBLICATION_ARTICLE_OWN',15),('REQUEST_PUBLICATION_ARTICLE',15),('VALIDATE_PUBLICATION_ARTICLE',15),('PUBLISH_ARTICLE',15),('PUBLISH_ARTICLE_OWN',15),('UNPUBLISH_ARTICLE',15),('UNPUBLISH_ARTICLE_OWN',15),('DELETE_ARTICLE',15),('DELETE_ARTICLE_OWN',15),('CREATE_PRODUCT',15),('EDIT_PRODUCT',15),('EDIT_PRODUCT_OWN',15),('CHANGE_PRODUCT_OWNER',15),('REQUEST_PUBLICATION_PRODUCT',15),('REQUEST_PUBLICATION_PRODUCT_OWN',15),('VALIDATE_PUBLICATION_PRODUCT',15),('PUBLISH_PRODUCT',15),('PUBLISH_PRODUCT_OWN',15),('UNPUBLISH_PRODUCT',15),('UNPUBLISH_PRODUCT_OWN',15),('DELETE_PRODUCT',15),('DELETE_PRODUCT_OWN',15),('OFFER_PRODUCT',15),('CREATE_BUNDLE',15),('EDIT_BUNDLE',15),('EDIT_BUNDLE_OWN',15),('REQUEST_PUBLICATION_BUNDLE_OWN',15),('REQUEST_PUBLICATION_BUNDLE',15),('VALIDATE_PUBLICATION_BUNDLE',15),('PUBLISH_BUNDLE',15),('PUBLISH_BUNDLE_OWN',15),('UNPUBLISH_BUNDLE',15),('UNPUBLISH_BUNDLE_OWN',15),('DELETE_BUNDLE',15),('DELETE_BUNDLE_OWN',15),('CREATE_STOCK',15),('EDIT_STOCK',15),('EDIT_STOCK_OWN',15),('REQUEST_PUBLICATION_STOCK_OWN',15),('REQUEST_PUBLICATION_STOCK',15),('VALIDATE_PUBLICATION_STOCK',15),('PUBLISH_STOCK',15),('PUBLISH_STOCK_OWN',15),('UNPUBLISH_STOCK',15),('UNPUBLISH_STOCK_OWN',15),('DELETE_STOCK',15),('DELETE_STOCK_OWN',15),('CREATE_CORNER',15),('EDIT_CORNER',15),('DELETE_CORNER',15),('EDIT_USER_CORNER',15),('EDIT_USER_CORNER_OWN',15),('CREATE_ROLES',15),('EDIT_ROLES_PERMISSION',15),('EDIT_USER_ROLE',15),('READ_USERS',15),('READ_USERS_DETAILS',15),('VALIDATE_USERS',15),('CREATE_USER',15),('EDIT_USER',15),('EDIT_GENERAL_SETTINGS',15),('USERVOICE_LIVE_CHAT',15),('USERVOICE_BO_ACCESS',15),('VIEW_ALL_FOLLOW_UPS',15),('VIEW_ALL_ASSIGNMENTS',15),('CREATE_ASSIGNMENT',15),('EDIT_ASSIGNMENT',15),('EDIT_ASSIGNMENT_OWN',15),('REQUEST_VALIDATION_ASSIGNMENT',15),('REQUEST_VALIDATION_ASSIGNMENT_OWN',15),('VALIDATE_ASSIGNMENT',15),('VALIDATE_ASSIGNMENT_OWN',15),('CANCEL_PENDING_ASSIGNMENT',15),('CANCEL_PENDING_ASSIGNMENT_OWN',15),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',15),('VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',15),('ASSIGNMENTS_LIST_ALL_INFO',15),('ASSIGNMENTS_LIST_BASIC_INFO',15),('CAN_ACCESS_GDP',15),('CAN_ACCESS_GDP2',15),('CAN_ACCESS_BI360',15),('CREATE_PRODUCT',22),('EDIT_PRODUCT',22),('CHANGE_PRODUCT_OWNER',22),('REQUEST_PUBLICATION_PRODUCT',22),('UNPUBLISH_PRODUCT',22),('DELETE_PRODUCT',22),('CREATE_BUNDLE',22),('EDIT_BUNDLE',22),('EDIT_BUNDLE_OWN',22),('REQUEST_PUBLICATION_BUNDLE',22),('VALIDATE_PUBLICATION_BUNDLE',22),('PUBLISH_BUNDLE',22),('UNPUBLISH_BUNDLE',22),('DELETE_BUNDLE',22),('DELETE_BUNDLE_OWN',22),('READ_USERS',22),('GERARD_BI360_CHART',22),('USERVOICE_LIVE_CHAT',22),('VIEW_ALL_FOLLOW_UPS',22),('VIEW_ALL_ASSIGNMENTS',22),('CREATE_ASSIGNMENT',22),('EDIT_ASSIGNMENT_OWN',22),('REQUEST_VALIDATION_ASSIGNMENT_OWN',22),('CANCEL_PENDING_ASSIGNMENT_OWN',22),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',22),('ASSIGNMENTS_LIST_ALL_INFO',22),('ASSIGNMENTS_LIST_BASIC_INFO',22),('EDIT_ASSIGNMENT_OWN',19),('REQUEST_VALIDATION_ASSIGNMENT_OWN',19),('VALIDATE_ASSIGNMENT',19),('CANCEL_PENDING_ASSIGNMENT',19),('CANCEL_PENDING_ASSIGNMENT_OWN',19),('ASSIGNMENTS_LIST_ALL_INFO',19),('CAN_ACCESS_GDP',19),('CAN_ACCESS_GDP2',19),('VIEW_ALL_FOLLOW_UPS',19),('EDIT_PRODUCT_OWN',25),('REQUEST_PUBLICATION_PRODUCT',25),('VALIDATE_PUBLICATION_PRODUCT',25),('UNPUBLISH_PRODUCT',25),('DELETE_PRODUCT',25),('EDIT_BUNDLE',25),('VALIDATE_PUBLICATION_BUNDLE',25),('PUBLISH_BUNDLE',25),('READ_USERS',25),('READ_USERS_DETAILS',25),('MICHEL_BI360_CHART',25),('USERVOICE_LIVE_CHAT',25),('CREATE_ASSIGNMENT',25),('EDIT_ASSIGNMENT',25),('REQUEST_VALIDATION_ASSIGNMENT',25),('VALIDATE_ASSIGNMENT',25),('CANCEL_PENDING_ASSIGNMENT',25),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',25),('ASSIGNMENTS_LIST_ALL_INFO',25),('ASSIGNMENTS_LIST_BASIC_INFO',25),('VIEW_ALL_FOLLOW_UPS',25),('CREATE_PRODUCT',17),('EDIT_PRODUCT',17),('CHANGE_PRODUCT_OWNER',17),('REQUEST_PUBLICATION_PRODUCT',17),('UNPUBLISH_PRODUCT',17),('DELETE_PRODUCT',17),('EDIT_CORNER',17),('DELETE_CORNER',17),('EDIT_USER_CORNER',17),('EDIT_USER_CORNER_OWN',17),('READ_USERS',17),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',17),('VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',17),('ASSIGNMENTS_LIST_ALL_INFO',17);
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
  `import_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `alias_UNIQUE` (`alias`),
  KEY `fk_user_product_idx` (`created_by`),
  KEY `product_state_key` (`state`),
  KEY `fk_product_logo` (`logo`),
  KEY `fk_product_editor_logo` (`editor_logo`),
  KEY `fk_product_specification` (`specification`),
  KEY `id_timeline_foreign_idx` (`id_timeline`),
  CONSTRAINT `fk_product_editor_logo` FOREIGN KEY (`editor_logo`) REFERENCES `resource` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_product_logo` FOREIGN KEY (`logo`) REFERENCES `resource` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_product_specification` FOREIGN KEY (`specification`) REFERENCES `resource` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `id_timeline_foreign_idx` FOREIGN KEY (`id_timeline`) REFERENCES `timeline` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=178 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (12,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!12','MobileApp','deleted','','','A description here',33,1463578953067,1463579056757,NULL,'',NULL,NULL,'',NULL,'','',1034,'43ecd929984d-bad4-68fe-c48a-4c2e85d61ae9',1,NULL,NULL),(13,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!13','MobileApp','deleted','','','A description here',33,1463579044186,1463579147897,NULL,'',NULL,NULL,'',NULL,'','',1035,'c3e9176cce4e-fff5-3207-af6d-3c991001371a',1,NULL,NULL),(14,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!14','MobileApp','deleted','','','A description here',33,1463579287322,1463579391304,NULL,'',NULL,NULL,'',NULL,'','',1036,'2b5fc5a389f8-4eef-6aa7-9379-9155d918004b',1,NULL,NULL),(15,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!15','MobileApp','deleted','','','A description here',33,1463579416942,1463579520631,NULL,'',NULL,NULL,'',NULL,'','',1037,'fc0decbdac8d-f3b7-f21a-6638-7eab4b997497',1,NULL,NULL),(16,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!16','MobileApp','deleted','','','A description here',33,1463579458614,1463579562311,NULL,'',NULL,NULL,'',NULL,'','',1038,'ad2327a0f662-b502-96a4-c444-16a9289d67b2',1,NULL,NULL),(17,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!17','MobileApp','deleted','','','A description here',33,1463579549626,1463579653311,NULL,'',NULL,NULL,'',NULL,'','',1039,'9c9aa213013f-efa9-30f5-4935-003e22c8a201',1,NULL,NULL),(18,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!18','MobileApp','deleted','','','A description here',33,1463579649913,1463579753611,NULL,'',NULL,NULL,'',NULL,'','',1040,'8ba40ace1eef-a7ab-d5fc-0868-478fdbc28d0b',1,NULL,NULL),(19,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!19','MobileApp','deleted','','','A description here',33,1463579755785,1463579859472,NULL,'',NULL,NULL,'',NULL,'','',1041,'f65fdf03e911-08a8-e84f-6e53-5993cd847f5c',1,NULL,NULL),(20,'Test','Test-20','MobileApp','deleted','','','A description here',33,1463580257992,1463582512136,NULL,'',NULL,NULL,'',NULL,'','',1045,'b39d3ed15538-ff58-df41-fa2d-0ac1a9c20051',1,NULL,NULL),(21,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!21','MobileApp','deleted','','','A description here',33,1463582582137,1463582685851,NULL,'',NULL,NULL,'',NULL,'','',1046,'196b3e54c716-a099-0e83-3a79-39fce25e0857',1,NULL,NULL),(22,'Lalala','Lalala-22','MobileApp','deleted','','','A description here',33,1463582769473,1463585202323,NULL,'',NULL,NULL,'',NULL,'','',1047,'b9b02b7623ca-a8c1-52c6-e381-1e332a8191bd',1,NULL,NULL),(23,'Update','Update-23','MobileApp','deleted','','','A description here',33,1463584930983,1463585059596,NULL,'',NULL,NULL,'',NULL,'','',1048,'131fd08fbcb4-86b8-66fa-c07c-b99c9dfcfd58',1,NULL,NULL),(24,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!24','MobileApp','deleted','','','A description here',33,1463585116762,1463585220489,NULL,'',NULL,NULL,'',NULL,'','',1049,'deeacd93c47d-d444-0346-c67a-a552abd6876f',1,NULL,NULL),(25,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!25','MobileApp','deleted','','','A description here',33,1463585122773,1463585226501,NULL,'',NULL,NULL,'',NULL,'','',1164,'fbb8aa6c07a8-6913-5a45-c48e-61d9975145b9',1,NULL,NULL),(26,'Feature','Feature-26','MobileApp','deleted','','','A description here',33,1464173202183,1464174480975,NULL,'',NULL,NULL,'',NULL,'','',1165,'17e38592574e-fc43-cece-75ea-df7108fe8e9d',1,NULL,NULL),(27,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!27','MobileApp','deleted','','','A description here',33,1464173242550,1464173243277,NULL,'',NULL,NULL,'',NULL,'','',1166,'a7841d311f24-4180-2d91-4c53-8a3368e9f023',1,NULL,NULL),(28,'test 28','test-28-28','MobileApp','deleted','','','A description here',33,1464174506991,1464174559092,NULL,'',NULL,NULL,'',NULL,'','',1167,'bed00d4b6cb9-5126-603d-1e89-af5870362b71',1,NULL,NULL),(29,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!29','MobileApp','deleted','','','A description here',33,1464174532633,1464174533290,NULL,'',NULL,NULL,'',NULL,'','',1168,'1d3693003209-1e4f-adb6-708a-4716ae6a011a',1,NULL,NULL),(30,'Galaxy Xcover 3','Galaxy-Xcover-3-30','MaterialNDevice','published','','Un smartphone pour les baroudeurs','<p>Le&nbsp;Samsung Galaxy Xcover 3&nbsp; est un smartphone ultra résistant conçu pour les sportifs et les baroudeurs, protégé contre les éléments, il vous accompagnera dans toutes vos expéditions. Le Galaxy Xcover 3 de Samsung est certifié IP67 pour une résistance extrême !</p><p>Il est doté d’un écran tactile de 4.5 pouces offrant une résistance hors du commun, d’un processeur ARM Cortex-A53 Quad-Core cadencé à 1.2 GHz épaulé par 1.5 Go de Ram, et est animé par le système d’exploitation Android 4.4.</p>',44,1464853557014,1478798498850,NULL,'',2,6,'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',NULL,'','',1303,'3b60046591bc-07fd-c4ce-e6b6-1c587d49d32a',2,NULL,NULL),(31,'SFR - SIM triple découpe ','SFR--SIM-triple-decoupe--31','MaterialNDevice','draft','v.1','Une carte universelle et réutilisable','<p>Cette carte SIM présente non seulement l\'intérêt d\'être prédécoupée à la fois aux formats 2FF, 3FF et 4FF, mais aussi de bénéficier de chutes réutilisables. Le possesseur d\'un iPhone 5 ou ultérieur peut ainsi extraire une nano SIM du support plastique puis la repositionner s\'il bascule sur un téléphone recourant à un autre format, et réciproquement. Le crédit du fabricant est d\'être parvenu à concevoir un support à épaisseur variable, d\'autant plus que le format nano est infiniment moins épais que les deux autres formats.<br></p>',41,1464869312691,1478797074398,NULL,'',11,NULL,'',10,'','',1300,'abacfacb7474-06d7-da6c-6449-4975a9dd7f2b',1,NULL,NULL),(32,'SFR - Ligne Voix Nationale','SFR--Ligne-Voix-Nationale-32','Line','published','','Création de ligne Voix Nationale','<p>EN FRANCE, 99% DE LA POPULATION COUVERTE</p><p>Opérateur historique, SFR vous assure une couverture géographique optimale.</p><p>Un réseau qui vous couvre 99% de la population couverte en 2G/3G+ et 64% en 4G : pas besoin d’en dire plus</p>',41,1464869731351,1478798479235,NULL,'',13,NULL,'',17,'','',1301,'34d1103ae374-784e-4417-acfb-08959d9da9d2',1,NULL,NULL),(33,'Carte SIM Paramétrée','Carte-SIM-Parametree-33','Service','published','','Carte SIM Paramétrée (sans ouverture de ligne)','<p>Digital Dimension s\'occupe de la relation avec l\'opérateur pour que votre caret SIM soit configuré et prête à fonctionner.<br></p>',41,1464869741238,1478798523007,NULL,'',18,NULL,'',21,'','',1302,'b95e6e29be9d-f3c4-8aa8-c740-43a565b7d13e',1,NULL,NULL),(34,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!34','MobileApp','deleted','','','A description here',33,1464876104313,1464876234659,NULL,'',NULL,NULL,'',NULL,'','',1304,'fa970eb4ce49-9d69-91de-8cb2-489d482bd874',1,NULL,NULL),(35,'IPAD Air 2','IPAD-Air-2-35','MaterialNDevice','published','','6,1 mm. Et vous mesurez à peine tout ce qu’il sait faire.','<p>6,1 mm. Et vous mesurez à peine tout ce qu’il sait faire.<br></p>',44,1464946860471,1478856521008,NULL,'',22,NULL,'',NULL,'','',1307,'0df390012a44-e8d6-9b94-91a6-2421b440fd70',1,NULL,NULL),(36,'BOUYGUES  - Voix&data ','BOUYGUES---Voix&data--36','Line','published','','Un Forfait à la carte','<p>Une offre mobile dédiée aux entreprises pour la France et l\'international, incluant appels, SMS et MMS en France métropolitaine, vers et depuis l\'Europe et les DOM et vers USA/Canada. Profitez également de 10 Go d’internet mobile 4G en France et 1Go depuis l\'Europe et les DOM.</p><blockquote>Accès au réseau national 4G et 4G+ inclus couvrant 77% de la population.</blockquote>',42,1465314061869,1478800824259,NULL,'',144,NULL,'',NULL,'','',1364,'e031cc0ebfb1-fc31-f7ca-fa2d-118110420d2d',1,1,NULL),(37,'Batterie iPad Air','Batterie-iPad-Air-37','Service','published','','En cas de signes de faiblesse, changez votre batterie','<p>Ce kit vous permet de changer vous-même la batterie de votre iPad Air (WiFi &amp; 3G) afin de résoudre un problème de charge ou d\'autonomie sur votre iPad Air. Ce pack comprend la Batterie d\'origine et les Outils.</p>',44,1466148174335,1478798987027,NULL,'',27,NULL,'',NULL,'','',1365,'9bdab05a8d8c-4aac-44d9-ffc9-f14e49e2cd7f',1,NULL,NULL),(38,'Support  Utilisateur john test','Support--Utilisateur-john-test-38','Line','deleted','','Un support à votre service','<p>Notre équipe Support est joignable de 9h à 18h.</p><p>Nous nous engageons à vous répondre dans l\'heure.</p><p>Notre satisfaction est une priorité !<br></p>',45,1466154177743,1478773553830,NULL,'',34,NULL,'',NULL,'','',1366,'9a3779c55b13-75aa-241a-bf8b-59a8aae251c6',2,1,NULL),(39,'Préparation EMM','Preparation-EMM-39','Service','published','','Un équipement entièrement paramétré pour l\'utiliser immédiatement','<p>Notre équipe va paramétrer votre équipement afin qu\'il soit parfaitement opérationnel lors de sa remise.</p><p>Vous n\'aurez plus qu\'à l\'utiliser.</p>',45,1466455880562,1478796757128,NULL,'',35,NULL,'',NULL,'','',1367,'c24afc08b0e3-58e0-a0ea-38ff-63d7c0100257',NULL,NULL,NULL),(40,'Boîte aux lettres','Boite-aux-lettres-40','Service','published','','Une boîte aux lettres installée et prête à l\'usage','Nous aallons créer un Boite aux lettres électronique et préparer les paramétrages à intégrer dans voter terminal.<p>Vous n\'aurez plus qu\'à l\'utiliser.</p>',45,1466456023975,1478799380038,NULL,'',37,NULL,'',NULL,'','',1368,'a33c8fe87298-f4e7-84c8-0150-94e86c0cde1f',NULL,NULL,NULL),(41,'Delete me','Delete-me-41','MobileApp','deleted','','','A description here',40,1467015402753,1467015585700,NULL,'',NULL,NULL,'',NULL,'','',1393,'e1976620dfd0-2778-0323-f5e6-8db045460f0f',1,NULL,NULL),(42,'Delete me','Delete-me-42','MobileApp','deleted','','','A description here',34,1467023917177,1467024235913,NULL,'',NULL,NULL,'',NULL,'','',1394,'21203f35afe3-b6ed-9839-30d1-49af90a0f905',1,NULL,NULL),(43,'Carte sim pré-param.','Carte-sim-preparam.-43','Line','deleted','','c\'est el produit de la démo','<p>ipsum lurum<br></p>',42,1467041314931,1478797036278,NULL,'',39,NULL,'',NULL,'','',1395,'e731d93658ce-b846-6a82-828e-0a51b8b9f854',1,NULL,NULL),(44,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!44','MobileApp','deleted','','','A description here',40,1467043418356,1467043418451,NULL,'',NULL,NULL,'',NULL,'','',1401,'01a386dd6169-b638-b6dc-eca9-18ec7e847b93',1,NULL,NULL),(45,'Assignation','Assignation-45','Service','deleted','','','A description here',40,1467210080498,1467210252695,NULL,'',NULL,NULL,'',NULL,'','',1403,'f4bcb6007754-702a-cee0-431b-7084832e10b8',1,NULL,NULL),(46,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!46','MobileApp','deleted','','','A description here',40,1467293207730,1467293067422,NULL,'',NULL,NULL,'',NULL,'','',1406,'abbab3bd1874-6b4b-a2f4-da5c-285cbb9b09b4',1,NULL,NULL),(47,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!47','MobileApp','deleted','','','A description here',40,1469003276858,1469003277841,NULL,'',NULL,NULL,'',NULL,'','',NULL,'f14f7aea0eef-e683-e265-24d0-efa93abe7393',NULL,NULL,NULL),(48,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!48','MobileApp','deleted','','','A description here',34,1469446728992,1469446959928,NULL,'',NULL,NULL,'',NULL,'','',NULL,'5132cb4aac22-7a89-4c39-7834-f3508d71ef7e',NULL,NULL,NULL),(49,'Gerard Device','Gerard-Device-49','MaterialNDevice','deleted','','','A description here',40,1469625928766,1469626423937,NULL,'',NULL,NULL,'',NULL,'','',NULL,'9ad9ece592ff-24be-e615-a521-397a3bda637c',2,NULL,NULL),(50,'Gerard Line','Gerard-Line-50','MobileApp','deleted','','','A description here',40,1469626265223,1469626511724,NULL,'',NULL,NULL,'',NULL,'','',NULL,'2f7c68ca4fdc-955c-6b80-5a17-1d75bf0f3a8c',1,NULL,NULL),(51,'Device JP','Device-JP-51','MaterialNDevice','deleted','','Device JP ','A description here',40,1469654063307,1469654200820,NULL,'',NULL,NULL,'',NULL,'','',NULL,'20c22e9757e5-6f37-ebd0-51f8-497044ade48a',2,NULL,NULL),(52,'Ligne JP','Ligne-JP-52','MobileApp','deleted','','blabla la ligne JP','A description here',40,1469655760334,1469655798609,NULL,'',NULL,NULL,'',NULL,'','',NULL,'77dd1969c218-fd4d-1a7b-488a-ee9555fa8f0f',1,NULL,NULL),(53,'Barcelone','Barcelone-53','MaterialNDevice','deleted','','Be hungry be foolish','<p>Réfléchir n\'est jamais nuisible<br></p>',44,1469718688783,1469718933605,NULL,'',43,NULL,'',NULL,'','',NULL,'f0caebea9cca-dbb3-840c-4199-2a1211c85f83',NULL,1,NULL),(54,'line JP','line-JP-54','Line','deleted','','','A description here',40,1469720699523,1469720796545,NULL,'',NULL,NULL,'',NULL,'','',NULL,'a1a9bc9e6c5d-31da-257c-10ff-11e27fc9e349',1,2,NULL),(55,'device JP','device-JP-55','MobileApp','deleted','','','A description here',40,1469720933379,1470321620777,NULL,'',NULL,NULL,'',NULL,'','',NULL,'305c296847fe-6e88-c23e-890c-60983704d64b',2,NULL,NULL),(75,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!75','MobileApp','deleted','','','A description here',34,1470083979154,1470084297409,NULL,'',44,NULL,'',NULL,'','',NULL,'58356cc88634-0045-2092-eacf-87e7cfdb577d',NULL,NULL,NULL),(76,'Produit JP1','Produit-JP1-76','MaterialNDevice','deleted','','','A description here',40,1470084671977,1470084861425,NULL,'',NULL,NULL,'',NULL,'','',NULL,'b61a99f69dcd-0671-d5f8-c255-f9637000649c',2,2,NULL),(79,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!79','MobileApp','deleted','','','A description here',34,1470091954761,1470092213357,NULL,'',45,NULL,'',NULL,'','',NULL,'f5217ad3bc1a-10f6-c174-dc82-81142b42c5df',NULL,NULL,NULL),(80,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!80','MobileApp','deleted','','','A description here',40,1470208828830,1470208829073,NULL,'',NULL,NULL,'',NULL,'','',NULL,'dac63afb360a-0486-a472-d63a-1629f68ecb1c',NULL,NULL,NULL),(81,'TL Ligne & form_1','TL-Ligne-&-form_1-81','Line','deleted','','','A description here',44,1470306390865,1470314109653,NULL,'',46,NULL,'',NULL,'','',NULL,'4fb785cee872-31cb-272d-3109-92a52e6328e2',1,NULL,NULL),(82,'TL Device & form_2','TL-Device-&-form_2-82','MobileApp','deleted','','','A description here',33,1470306579028,1470318253413,NULL,'',49,NULL,'',NULL,'','',NULL,'1b4af6f1090f-4262-549a-886f-10f840196569',2,NULL,NULL),(83,'TL Device & form_2','TL-Device-&-form_2-83','MaterialNDevice','deleted','','','A description here',40,1470324862362,1475492546166,NULL,'',70,NULL,'',NULL,'','',NULL,'ccc5e0b0e3f5-2f16-7e2b-056e-8bfa82ea630e',2,2,NULL),(84,'TL Ligne & form_1','TL-Ligne-&-form_1-84','Line','deleted','','','A description here',33,1470327032058,1475492623325,NULL,'',72,NULL,'',NULL,'','',NULL,'cf69e8defc73-2b7a-4fe0-9e36-d52d12dc7d2e',1,1,NULL),(85,'TEST PRODUCT 01','TEST-PRODUCT-01-85','MobileApp','deleted','','','A description here',34,1470384920764,1470384989159,NULL,'',NULL,NULL,'',NULL,'','',NULL,'329af59bf885-6ab7-2901-01ca-0c14a916aec6',1,1,NULL),(86,'TL Line & form_2 & owner:ODILE','TL-Line-&-form_2-&-owner:ODILE-86','MaterialNDevice','deleted','','','A description here',41,1470384948654,1475492727813,NULL,'',77,NULL,'',NULL,'','',NULL,'f41194ed0efb-3ad3-fcc9-a48c-41b35a2fac45',1,2,NULL),(87,'owner:GERARD / players:ODILE','owner:GERARD--players:ODILE-87','Line','deleted','','','A description here',40,1470387499376,1475492701209,NULL,'',75,NULL,'',NULL,'','',NULL,'d8674f0b3443-dc89-473e-cd50-2bf9337a8685',1,NULL,NULL),(88,'ower:Gerard/player:Fabrice','ower:Gerardplayer:Fabrice-88','MaterialNDevice','deleted','','','A description here',40,1470400102535,1475492751542,NULL,'',79,NULL,'',NULL,'','',NULL,'f0122afca254-c3eb-9da2-3d82-253aebd8710d',2,NULL,NULL),(89,'owner:gerard/player:odile','owner:gerardplayer:odile-89','MaterialNDevice','deleted','','','A description here',40,1470401139055,1475492782723,NULL,'',81,NULL,'',NULL,'','',NULL,'1945dcfd29a9-596a-7302-0f75-c1ea52cc9101',2,NULL,NULL),(90,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!90','MobileApp','deleted','','','A description here',40,1470402802008,1470402802287,NULL,'',NULL,NULL,'',NULL,'','',NULL,'479e199a2fe0-d94b-ed65-db2d-bca569321362',NULL,NULL,NULL),(91,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!91','MobileApp','deleted','','','<p>A description here</p>',40,1470402923785,1470403842213,NULL,'',NULL,NULL,'',NULL,'','',NULL,'0dccbbdd2ac1-589d-0d39-5cdf-e575afd2375c',NULL,NULL,NULL),(92,'John Product','John-Product-92','MobileApp','deleted','0.1','Pharse','A description here',34,1470656017151,1470656326829,NULL,'',58,58,'',NULL,'','',NULL,'f575a200df87-2293-4aa9-5421-40b83635da94',1,NULL,NULL),(93,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!93','MobileApp','deleted','','','A description here',34,1472463340070,1472463340421,NULL,'',NULL,NULL,'',NULL,'','',NULL,'943415d33b70-3021-c488-afad-006786971efe',NULL,NULL,NULL),(94,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!94','MobileApp','deleted','','','A description here',34,1472463346509,1472463346856,NULL,'',NULL,NULL,'',NULL,'','',NULL,'69005e6c374b-5e34-c18e-18ee-ff84e993d575',NULL,NULL,NULL),(95,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!95','MobileApp','deleted','','','A description here',34,1472493256469,1472493256532,NULL,'',NULL,NULL,'',NULL,'','',NULL,'6a8aa93bf6a9-612c-0cc4-2ef4-e85bc6046da4',NULL,NULL,NULL),(96,'Test product ','Test-product--96','MobileApp','deleted','','Summary Title','<p>Description&nbsp;</p>',34,1472494254110,1474464553807,NULL,'',59,NULL,'',NULL,'','',NULL,'7d2c170b0b2a-4e63-c39c-ca98-d320af7c895d',1,1,NULL),(97,'DEVICE / FORM2','DEVICE--FORM2-97','MobileApp','deleted','','','A description here',40,1472546030372,1475492815283,NULL,'',83,NULL,'',NULL,'','',NULL,'ac9520e4a973-4a76-7152-31b8-cc3d7de361ba',2,2,NULL),(98,'John Line','John-Line-98','MobileApp','deleted','','','A description here',34,1472732511558,1472811106061,NULL,'',NULL,NULL,'',NULL,'','',NULL,'a8912e78f5f0-59e8-5559-1afa-0ae7e0ae21c3',1,NULL,NULL),(99,'Product Test','Product-Test-99','MobileApp','deleted','1.0','summary','A description here',34,1472826558284,1474464549433,NULL,'',NULL,NULL,'',NULL,'','',NULL,'744f9e9a622b-1c1c-d70a-2a07-342b380adea6',1,NULL,NULL),(100,'John&JP-TLline-form1','John&JPTLlineform1-100','MobileApp','deleted','','','A description here',40,1473242599542,1473346111679,NULL,'',NULL,NULL,'',NULL,'','',NULL,'2c11d87e8643-3e59-452e-5eeb-1e028af9d53f',1,1,NULL),(101,'demo du 08 sept LIGNE','demo-du-08-sept-LIGNE-101','MobileApp','deleted','','','blablabla<br>',40,1473344803123,1473348017642,NULL,'',NULL,NULL,'',NULL,'','',NULL,'0d3ebf3463fc-12e2-049e-3516-d4b90c18fcd6',1,1,NULL),(102,'demo 2 du 08','demo-2-du-08-102','Service','deleted','','','A description here',40,1473347829965,1473351405016,NULL,'',NULL,NULL,'',NULL,'','',NULL,'e7b95e5fc692-58b2-ff1d-a4dc-44b7bdfde39d',NULL,NULL,NULL),(103,'demo du 12 opérateur ORANGE','demo-du-12-operateur-ORANGE-103','MobileApp','deleted','','','A description here',40,1473674140716,1474464489004,NULL,'',NULL,NULL,'',NULL,'','',NULL,'c32677a60304-84a3-90de-17e1-f089d76f2dde',1,1,NULL),(104,'demo EMM','demo-EMM-104','Line','deleted','','','A description here',40,1473682495798,1474464493076,NULL,'',NULL,NULL,'',NULL,'','',NULL,'018651fc22b3-f178-9b1b-4a08-2a1cd4663369',1,1,NULL),(105,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!105','MobileApp','deleted','','','A description here',40,1473687073476,1473687074370,NULL,'',NULL,NULL,'',NULL,'','',NULL,'d36c9e5efa8e-a895-72f4-4b39-081ec596ecaf',NULL,NULL,NULL),(106,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!106','MobileApp','deleted','','','A description here',34,1473762886578,1473762906557,NULL,'',NULL,NULL,'',NULL,'','',NULL,'f2860b53d263-7ba7-05a3-200f-e1ffde63deb6',NULL,NULL,NULL),(107,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!107','MobileApp','deleted','','','A description here',40,1474293071593,1474293071982,NULL,'',NULL,NULL,'',NULL,'','',NULL,'3c74eb56b395-28c4-4da0-25f7-ef7d2027bca5',NULL,NULL,NULL),(108,'TESTING','TESTING-108','MobileApp','deleted','','','A description here',34,1474358713270,1474464457246,NULL,'',NULL,NULL,'',NULL,'','',NULL,'76b1a3d06407-1213-11af-782b-69572e71f789',NULL,NULL,NULL),(109,'TESTING DEVICE','TESTING-DEVICE-109','MaterialNDevice','deleted','','','A description here',34,1474359120157,1474464449748,NULL,'',63,NULL,'',NULL,'','',NULL,'e1a3868295ef-ebb3-6229-a476-09b5d705c4d1',2,NULL,NULL),(110,'TESTING LINE','TESTING-LINE-110','Line','deleted','','','A description here',34,1474359242579,1474464445971,NULL,'',64,NULL,'',NULL,'','',NULL,'a409fd19c3de-2305-a009-4380-2d07559449fb',1,1,NULL),(111,'demu du 21','demu-du-21-111','MobileApp','deleted','','demo du 21','elgrlkjrmq<br>',40,1474467537170,1475492842953,NULL,'',85,NULL,'',NULL,'','',NULL,'0cdb890f01fb-a18f-85fd-ed28-fc0cd666492b',1,1,NULL),(112,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!112','MobileApp','deleted','','','A description here',40,1474981568500,1474981569722,NULL,'',NULL,NULL,'',NULL,'','',NULL,'aefc56621a40-df44-8e70-118c-f95838a32ca3',NULL,NULL,NULL),(113,'The A Train','The-A-Train-113','MobileApp','deleted','','','A description here',34,1475498977977,1476083481548,NULL,'',87,NULL,'',NULL,'','',NULL,'7ed74fd9c823-a701-3f7d-a3a8-53a7c8c80cf3',1,NULL,NULL),(114,'Porduit U Orange','Porduit-U-Orange-114','MobileApp','deleted','','','A description here',40,1475506816764,1476083498849,NULL,'',89,NULL,'',NULL,'','',NULL,'ca36d9745f79-57d1-fc12-53e4-a951fde211b0',1,1,NULL),(115,'mail bird','mail-bird-115','MobileApp','deleted','','','A description here',40,1475510092074,1475510313954,NULL,'',90,NULL,'',NULL,'','',NULL,'70bd5038e714-d8a9-8e30-743b-3a780f8a7962',NULL,NULL,NULL),(116,'produit du 06/10','produit-du-0610-116','MobileApp','deleted','','','A description here',40,1475739781781,1476083462149,NULL,'',91,NULL,'',NULL,'','',NULL,'e9d08a393ad1-91d5-f7b4-cf76-acd9d451905b',1,1,NULL),(117,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!117','MobileApp','deleted','','','A description here',34,1475745464884,1475745471939,NULL,'',NULL,NULL,'',NULL,'','',NULL,'74c4ff4de135-8902-a8d1-d57f-a503f406abf9',NULL,NULL,NULL),(118,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!118','MobileApp','deleted','','','A description here',34,1475750017268,1475750017831,NULL,'',NULL,NULL,'',NULL,'','',NULL,'9f4b27c666e7-6c33-8c39-f442-26ef57e56d1c',NULL,NULL,NULL),(119,'gemmaLine','gemmaLine-119','Line','deleted','','','<p>new product created by Gemma</p>',34,1475752608379,1475752995174,NULL,'',93,92,'',NULL,'','',NULL,'af60dabddb75-8673-73ca-21c9-9a39e3c900cb',1,NULL,NULL),(120,'gemmaProduct','gemmaProduct-120','MobileApp','deleted','','','A description here',34,1475753169004,1475753362209,NULL,'',94,NULL,'',NULL,'','',NULL,'00b0a697df12-f390-453e-f7a6-e060ed61c368',1,NULL,NULL),(121,'Gemma\'s line','Gemma\'s-line-121','Line','deleted','','It\'s a test line','<p>a test product</p>',34,1475760926874,1475836818388,NULL,'',95,NULL,'',NULL,'','',NULL,'87ee9e992123-faac-c705-271c-acc93f200f49',1,1,NULL),(122,'gemma_spider','gemma_spider-122','MobileApp','deleted','','','A description here',34,1475765939443,1475836824840,NULL,'',NULL,NULL,'',NULL,'','',NULL,'122ce87e5f23-b300-042c-0427-73e83ed416fb',NULL,NULL,NULL),(123,'gemma_mob','gemma_mob-123','MobileApp','deleted','','','A description here',34,1475766039377,1475766086608,NULL,'',96,NULL,'',NULL,'','',NULL,'6f99ed689163-cbda-5bab-5d8f-66aab2c9e49c',NULL,NULL,NULL),(124,'Philippe','Philippe-124','MobileApp','deleted','','','A description here',40,1475828738603,1476083439222,NULL,'',97,NULL,'',NULL,'','',NULL,'bfb5f090f29d-6fa4-1337-6a59-0d87d7441af0',1,NULL,NULL),(125,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!125','MobileApp','deleted','','','A description here',40,1476090213739,1476090242406,NULL,'',98,NULL,'',NULL,'','',NULL,'6e878e2eca2c-0e05-9bc5-d081-0848784dc15d',NULL,NULL,NULL),(126,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!126','MobileApp','deleted','','','A description here',40,1476090193717,1476090213763,NULL,'',NULL,NULL,'',NULL,'','',NULL,'a50ef5364e9c-b27e-3bc4-7753-081bfe6e697e',NULL,NULL,NULL),(127,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!127','MobileApp','deleted','','','A description here',40,1476090197848,1476090217899,NULL,'',NULL,NULL,'',NULL,'','',NULL,'27856d83eb29-5fbe-5856-934b-e48744879ae1',NULL,NULL,NULL),(128,'Orange ','Orange--128','Line','published','','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.','<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.&nbsp;</p><p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in.<br></p>',41,1476090669325,1478860566360,NULL,'',99,NULL,'',NULL,'','',NULL,'9ef14d9c2cc2-5cb6-a684-be39-804d636b1d46',1,1,NULL),(129,'Purple bird','Purple-bird-129','MobileApp','deleted','','','A description here',42,1476090859909,1478255060452,NULL,'',100,NULL,'',NULL,'','',NULL,'53f69b446651-4785-354c-c255-cd2f39a8eea3',2,NULL,NULL),(130,'blue circle','blue-circle-130','MaterialNDevice','deleted','','','A description here',40,1476097499655,1478773744157,NULL,'',101,NULL,'',NULL,'','',NULL,'0fa1c251a91a-faa1-e5b3-e9dd-2a270719ee57',1,2,NULL),(131,'APPLE iPad 2','APPLE-iPad-2-131','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478771785465,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(132,'SFR - Forfait Data','SFR--Forfait-Data-132','Line','published',NULL,'ABSOLU MATRISE - Forfait data pour Tablette et PC','<p><b>Cible</b></p><p>• Les entreprises dont les collaborateurs :</p><p>- se déplacent en France et à l’étranger, ponctuellement ou fréquement</p><p>- souhaitent se connecter en continu depuis leur PC portable ou leur tablette 3G+</p><p><b>Besoins du c</b>lient</p><p>• Un moyen de connexion simple et intuitif, en France comme à l’étranger</p><p>• Un budget maîtrisé, grâce à des forfaits adaptés aux usages de chaque collaborateur</p><p><b>Caractéristiques</b></p><p>• Gestion des e-mails et agendas</p><p>• Accès à l’intranet de l’entreprise via des solutions de sécurisation de type IpSec ou APN dédié</p><p>• Une connexion au Très Haut Débit Mobile en Dual Carrier jusqu’à 42 Mbit/s</p><p><b>Terminaux</b></p><p>• Tablettes tactiles 3G+ - &nbsp;Clé Internet 3G+ - Clé Internet Hotspot 3G+</p>',35,NULL,1478799217382,NULL,NULL,104,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(133,'SFR Voix - Forfait. GC','SFR-Voix--Forfait.-GC-133','Line','published',NULL,'Forfait voix - COMPTEUR Grands Comptes','<p>UNE FACTURATION AU RÉEL</p><p>En plus du forfait de base, vous ne payez que les consommations réalisées.</p><p>POUR POUVOIR JOINDRE MES SALARIÉS TOUT LE TEMPS</p><p>Parce que certains collaborateurs ont surtout besoin d\'être joignables.</p>',34,NULL,1478797142662,NULL,NULL,142,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(134,'APPLE IPHONE 4','APPLE-IPHONE-4-134','MaterialNDevice','published',NULL,'L’iPhone 4 propose toutes les fonctions essentielles d’un smartphone, avec un écran haute résolution.','<p>Dimension : 115 x 58,6 x 9,3 mm</p><p>Poids : 137 grammes</p><p>Autonomie : 300h en veille ; 1h en communication</p><p>Date de sortie : Juin 2010</p><p>Fréquence : 850-900/1800-1900 Mhz (quadri-bande)</p><p>Résolution de l’écran : 960 x 640 pixels</p><p>Tactile : oui - Wi-Fi / UMA / UPnP : 802.11 b/g/n</p><p>Bluetooth : oui (2.1) - 4G : non</p><p>Internet : WAP 2.0 + navigateur Web</p><p>Messagerie : SMS / EMS / MMS / e-mail (push)</p><p>Appareil photo : 5 mégapixels avec Flash LED + Auto Focus</p><p>Vidéo : oui - Radio FM : non - Lecteur MP3/AAC : oui</p><p>Mémoire interne : 8 Go - Carte mémoire : non</p>',34,NULL,1478800118461,NULL,NULL,147,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(135,'iPad 2 WI-FI 3G 32 Go','iPad-2-WI-FI-3G-32-Go-135','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478771808401,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(136,'APPLE iPad 3 4G','APPLE-iPad-3-4G-136','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478771824292,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(137,'IPAD 3 Wifi/3G','IPAD-3-Wifi/3G-137','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478771834630,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(138,'APPLE IPHONE 4S 16Go','APPLE-IPHONE-4S-16Go-138','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478771842477,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(139,'APPLE iPHONE 4 16 GO','APPLE-iPHONE-4-16-GO-139','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478771876278,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(140,'APPLE IPHONE 5C 16GO','APPLE-IPHONE-5C-16GO-140','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478771889837,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(141,'Pack iPad Air paramétré (wifi, 4G) ','Pack-iPad-Air-paramétré-(wifi,-4G)--141','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478771920316,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(142,'Pack Ipad AIR Service Plus test','Pack-Ipad-AIR-Service-Plus-test-142-142','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478772122753,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(143,'Ipad AIR non-paramétré','Ipad-AIR-non-paramétré-143','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478771964867,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(144,'Pack Voyages GN1 - Création de ligne','Pack-Voyages-GN1---Création-de-ligne-144','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478771980487,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(145,'SAMSUNG GT-i9220 / N7000 Galaxy Note','SAMSUNG-GT-i9220-/-N7000-Galaxy-Note-145','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478772113376,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(146,'SAMSUNG  Galaxy S IV','SAMSUNG--Galaxy-S-IV-146','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478772028348,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(147,'Pack Voyages GN1 - Paramétrage terminal seul','Pack-Voyages-GN1---Paramétrage-terminal-seul-147','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478772021963,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(148,'SAMSUNG B2710','SAMSUNG-B2710-148','MaterialNDevice','published',NULL,'Le Samsung B2710, Samsung bénéficie de la certification IP67 : il est étanche et résiste aux chocs et à la poussière.','<p>Dimension : 121 x 53 x 17,9 mm</p><p>Poids : 116 grammes</p><p>Autonomie : 500h en veille ; 1h en communication</p><p>Date de sortie : Octobre 2010</p><p>Fréquence : 850-900/1800-1900 Mhz (quadri-bande)</p><p>Résolution de l’écran : 240 x 320 pixels</p><p>Tactile : non - 3G : oui - Wi-Fi / UMA / UPnP : non</p><p>Bluetooth : oui (2.1) - Internet : WAP 2.0</p><p>Messagerie : SMS / EMS / MMS / e-mail - Appareil photo : 2 mégapixels</p><p>Vidéo : oui - Radio FM : oui -Lecteur MP3/AAC : oui</p><p>Mémoire interne : 15 Mo - Carte mémoire : microSD (Transflash)&nbsp;</p>',34,NULL,1478793554605,NULL,NULL,134,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(149,'ALCATEL One Touch S210','ALCATEL-One-Touch-S210-149','MaterialNDevice','published',NULL,'ALCATEL One Touch S210 offre les fonctions essentielles : téléphoner et envoyer des SMS.','<p>Dimension : 98 x 44 x 12,3 mm</p><p>Poids : 61 grammes</p><p>Autonomie : 250h en veille ; 5h en communication</p><p>Date de sortie : Mai 2008</p><p>Fréquence : 900/1800 Mhz (bi-bande)</p><p>Résolution de l’écran : 128 x 128 pixels</p><p>Tactile : non -Haut-parleur (main-libre) : oui -Internet : non</p><p>Messagerie : SMS - Appareil photo : non - Vidéo : non</p><p>Radio FM : non -Lecteur MP3 : non -Carte mémoire : non</p>',34,NULL,1478795459985,NULL,NULL,146,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(150,'MOTOROLA C350','MOTOROLA-C350-150','MaterialNDevice','published',NULL,'Le Motorola C350 propose toutes les fonctions essentielles d’un mobile avec, en plus, un accès internet.','<p>Dimension : 98 x 43 x 17 mm</p><p>Poids : 85 grammes</p><p>Autonomie : 215h en veille ; 1h en communication</p><p>Date de sortie : Avril 2003</p><p>Fréquence : 900/1800 Mhz (bi-bande)</p><p>Résolution de l’écran : 96 x 65 pixels</p><p>Tactile : non - Wi-Fi / UMA / UPnP : non - Bluetooth : non</p><p>Internet : WAP 1.2.1 - Messagerie : SMS - Appareil photo : non</p><p>Vidéo : non - Radio FM : non - Lecteur MP3/AAC : non</p><p>Carte mémoire : non</p>',34,NULL,1478792183285,NULL,NULL,132,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(151,'Pack Voyages GN3 - création de ligne','Pack-Voyages-GN3---création-de-ligne-151','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478793781703,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(152,'Pack Voyages GN3','Pack-Voyages-GN3-152','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478773831935,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(153,'Samsung GALAXY Note','Samsung-GALAXY-Note-153','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478772094308,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(154,'GALAXY Note john','GALAXY-Note-john-154-154','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478778132429,NULL,NULL,116,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(155,'Pack Voyages GN1 - Réattribution','Pack-Voyages-GN1---Réattribution-155','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478773798844,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(156,'NOKIA 1600','NOKIA-1600-156','MaterialNDevice','published',NULL,'Simple et léger, le Nokia 1600 est destiné à ceux qui veulent juste un téléphone pour téléphoner','<p>Dimension 103 x 44,4 x 17,2 mm</p><p>Poids : 85 grammes</p><p>Autonomie : 450h en veille ; 1h en communication</p><p>Date de sortie : Septembre 2005</p><p>Fréquence : 900/1800 Mhz (bi-bande)</p><p>Résolution de l’écran : 96 x 65 pixels</p><p>Tactile : non - Wi-Fi / UMA / UPnP : non - Bluetooth : non</p><p>Internet : non - Messagerie : SMS / EMS - Appareil photo : non</p><p>Vidéo : non - Radio FM : non - Lecteur MP3/AAC : non Carte mémoire : non</p>',34,NULL,1478785735685,NULL,NULL,127,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(157,'HTC Touch HD (T8282)','HTC-Touch-HD-(T8282)-157','MaterialNDevice','published',NULL,'Le HTC Touch HD T8282 propose les fonctions essentielles d’un smartphone avec une bonne autonomie.','<p>Dimension : 115,00 x 62,80 x 12,00 mm</p><p>Poids : 146 grammes</p><p>Autonomie : 450h en veille ; 5h en communication</p><p>Date de sortie : Août 2006</p><p>Fréquence : 850-900/1800-1900 Mhz (quadri-bande)</p><p>Résolution de l’écran : 480 x 800 pixels</p><p>Tactile : oui - 3G : oui - Wi-Fi / UMA / UPnP : oui</p><p>Bluetooth : oui - Internet : WAP 2.0</p><p>Messagerie : SMS / EMS / MMS / e-mail -Appareil photo : 5 mégapixels</p><p>Vidéo : non -Radio FM : oui -Lecteur MP3/AAC : oui</p><p>Mémoire interne : 512 Mo -Carte mémoire : microSD, microSDHC</p>',34,NULL,1478792787496,NULL,NULL,138,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(158,'NOKIA 2610','NOKIA-2610-158','MaterialNDevice','published',NULL,'Le Nokia 2610 propose toutes les fonctions essentielles d’un mobile avec, en plus, un accès internet.','<p>Dimension 104 x 43 x 18 mm</p><p>Poids : 91 grammes</p><p>Autonomie : 380h en veille ; 1h en communication</p><p>Date de sortie : Août 2006</p><p>Fréquence : 900/1800 Mhz (bi-bande)</p><p>Résolution de l’écran : 128 x 128 pixels</p><p>Tactile : non - Wi-Fi / UMA / UPnP : non - Bluetooth : non</p><p>Internet : WAP 2.0 - Messagerie : SMS / EMS / MMS / e-mail</p><p>Appareil photo : non - Vidéo : non - Radio FM : non</p><p>Lecteur MP3/AAC : non - Mémoire interne : 3 Mo - Carte mémoire : non</p>',34,NULL,1478791427908,NULL,NULL,131,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(159,'NOKIA E65','NOKIA-E65-159','MaterialNDevice','published',NULL,'Le Nokia E65 permet une itinérance internationale et propose diverses options de connectivité ','<p>Dimension : 105 x 49 x 15,5 mm</p><p>Poids : 115 grammes</p><p>Autonomie : 265h en veille ; 1h en communication</p><p>Date de sortie : Février 2007</p><p>Fréquence : 850-900/1800-1900 Mhz (quadri-bande)</p><p>Résolution de l’écran : 240 x 320 pixels - Tactile : non</p><p>3G : oui - Wi-Fi / UMA / UPnP : oui / non / non - Bluetooth : non</p><p>Internet : WAP 2.0 + navigateur Web -Messagerie : SMS / EMS / MMS / e-mail</p><p>Appareil photo : 2 mégapixels - Vidéo : oui - Radio FM : non</p><p>Lecteur MP3/AAC : oui - Mémoire interne : 50 Mo</p><p>Carte mémoire : microSD (Transflash)</p>',34,NULL,1478799122530,NULL,NULL,130,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(160,'HTC S730 Wings','HTC-S730-Wings-160','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478772339465,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(161,'SAMSUNG SGH-B2700','SAMSUNG-SGH-B2700-161','MaterialNDevice','published',NULL,'Le SGH-B2700 est un modèle bien équipé et doté d\'une autonomie correcte. ','<p>Dimension : 115 x 52 x 18 mm</p><p>Poids : 114 grammes</p><p>Autonomie : 350h en veille ; 5h en communication</p><p>Fréquence : 850-900/1800-1900 Mhz (quadri-bande)</p><p>Tactile : non - Wi-Fi / UMA / UPnP : non - Bluetooth : oui (2.0)</p><p>Internet : WAP 2.0 -Messagerie : SMS / EMS / MMS / e-mail&nbsp;</p><p>Appareil photo : 2 mégapixels - Vidéo : oui - Radio FM : oui</p><p>Lecteur MP3/AAC : oui - Mémoire interne : 26 Mo</p>',34,NULL,1478792403647,NULL,NULL,136,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(162,'Pack iPad paramétré (wifi, 4G)','Pack-iPad-paramétré-(wifi,-4G)-162','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478773862087,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(163,'Pack iPad Service Plus','Pack-iPad-Service-Plus-163','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478773871352,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(164,'Lignes sans Produits Facturés','Lignes-sans-Produits-Facturés-164','Line','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478773879111,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(165,'NOKIA 5200','NOKIA-5200-165','MaterialNDevice','draft',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478791359528,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(166,'Ipad WI-FI 4G 32 Go Noir','Ipad-WI-FI-4G-32-Go-Noir-166','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478773895231,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(167,'APPLE IPAD 4 32go Blanc  ','APPLE-IPAD-4-32go-Blanc---167','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478773946842,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(168,'APPLE IPHONE 4 32 GB','APPLE-IPHONE-4-32-GB-168','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478772415523,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(169,'Pack Ipad non-paramétré (WiFi, 4G)','Pack-Ipad-non-paramétré-(WiFi,-4G)-169','MaterialNDevice','deleted',NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',34,NULL,1478773959324,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'gdp'),(170,'test JP du 09','test-JP-du-09-170','MobileApp','deleted','','','A description here',40,1478702779543,1478773939224,NULL,'',102,NULL,'',NULL,'','',NULL,'eb91fbc40706-edd8-44be-bf13-5f1340bb0c82',NULL,NULL,NULL),(171,'Test Product - Thursday','Test-Product--Thursday-171','MobileApp','deleted','','','A description here',34,1478770806713,1478770832779,NULL,'',NULL,NULL,'',NULL,'','',NULL,'e5accda5ba15-eb99-44ef-3983-9b418bc0b736',NULL,NULL,NULL),(172,'John Test ','John-Test--172','MobileApp','deleted','1.02','Test Summary','<p>Description</p>',34,1478772301022,1478772840002,NULL,'',110,113,'',NULL,'','',NULL,'726764ba4365-af1c-f892-eae8-a412ac5c64ab',2,NULL,NULL),(173,'NOkia JP','NOkia-JP-173','MobileApp','deleted','','','A description here',34,1478783649621,1478783681847,NULL,'',119,NULL,'',NULL,'','',NULL,'5cdd5dbd0ec2-7d26-2e63-22f8-e35369482b7a',NULL,NULL,NULL),(174,'APPLE IPAD PRO','APPLE-IPAD-PRO-174','MaterialNDevice','published','Pro','Ipad Pro, Et l’on réinventa l’ordinateur.','<p>L’iPad Pro n’est pas simplement un iPad de nouvelle génération. C’est une toute nouvelle vision de l’informatique, sans compromis, parfaitement adaptée au monde d’aujourd’hui. Avec l’iPad Pro, vous avez entre les mains davantage de puissance qu’avec la plupart des PC portables. Même les tâches les plus complexes deviennent aussi naturelles que toucher, faire défiler d’un geste de la main ou écrire avec un stylo.</p>',34,1478799425310,1478800155562,NULL,'',150,NULL,'',NULL,'','',NULL,'a541f781cce4-a60f-acd0-4f0f-41fd9e766cdb',2,NULL,NULL),(175,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!175','MobileApp','draft','','','A description here',34,1481555605110,1481555605680,NULL,'',NULL,NULL,'',NULL,'','',NULL,'95a90e658b45-7fbb-7849-d223-3a67990f82e0',NULL,NULL,NULL),(176,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!176','MobileApp','draft','','','A description here',34,1481555605635,1481555606410,NULL,'',NULL,NULL,'',NULL,'','',NULL,'e65612594ec5-3871-ee25-7605-681f944a1f9f',NULL,NULL,NULL),(177,'Donnez un nom à votre produit! test','Donnez-un-nom-a-votre-produit!-test-177','MobileApp','draft','','','A description here',34,1481555608224,1481555634123,NULL,'',NULL,NULL,'',NULL,'','',NULL,'3a4477e8c225-cf6a-b12b-3bd6-c6f5c1414ed3',NULL,NULL,NULL);
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
INSERT INTO `product_available_feature` VALUES ('PRODUCT_EDITOR',12),('PRODUCT_FEATURES',12),('PRODUCT_RESOURCES',12),('PRODUCT_SUMMARY',12),('PRODUCT_EDITOR',13),('PRODUCT_FEATURES',13),('PRODUCT_RESOURCES',13),('PRODUCT_SUMMARY',13),('PRODUCT_EDITOR',14),('PRODUCT_FEATURES',14),('PRODUCT_RESOURCES',14),('PRODUCT_SUMMARY',14),('PRODUCT_EDITOR',15),('PRODUCT_FEATURES',15),('PRODUCT_RESOURCES',15),('PRODUCT_SUMMARY',15),('PRODUCT_EDITOR',16),('PRODUCT_FEATURES',16),('PRODUCT_RESOURCES',16),('PRODUCT_SUMMARY',16),('PRODUCT_EDITOR',17),('PRODUCT_FEATURES',17),('PRODUCT_RESOURCES',17),('PRODUCT_SUMMARY',17),('PRODUCT_EDITOR',18),('PRODUCT_FEATURES',18),('PRODUCT_RESOURCES',18),('PRODUCT_SUMMARY',18),('PRODUCT_EDITOR',19),('PRODUCT_FEATURES',19),('PRODUCT_RESOURCES',19),('PRODUCT_SUMMARY',19),('PRODUCT_EDITOR',20),('PRODUCT_FEATURES',20),('PRODUCT_RESOURCES',20),('PRODUCT_SUMMARY',20),('PRODUCT_EDITOR',21),('PRODUCT_FEATURES',21),('PRODUCT_RESOURCES',21),('PRODUCT_SUMMARY',21),('PRODUCT_EDITOR',22),('PRODUCT_FEATURES',22),('PRODUCT_RESOURCES',22),('PRODUCT_SUMMARY',22),('PRODUCT_EDITOR',23),('PRODUCT_FEATURES',23),('PRODUCT_RESOURCES',23),('PRODUCT_SUMMARY',23),('PRODUCT_EDITOR',24),('PRODUCT_FEATURES',24),('PRODUCT_RESOURCES',24),('PRODUCT_SUMMARY',24),('PRODUCT_EDITOR',25),('PRODUCT_FEATURES',25),('PRODUCT_RESOURCES',25),('PRODUCT_SUMMARY',25),('PRODUCT_EDITOR',26),('PRODUCT_FEATURES',26),('PRODUCT_RESOURCES',26),('PRODUCT_SUMMARY',26),('PRODUCT_EDITOR',27),('PRODUCT_FEATURES',27),('PRODUCT_RESOURCES',27),('PRODUCT_SUMMARY',27),('PRODUCT_EDITOR',28),('PRODUCT_FEATURES',28),('PRODUCT_RESOURCES',28),('PRODUCT_SUMMARY',28),('PRODUCT_EDITOR',29),('PRODUCT_FEATURES',29),('PRODUCT_RESOURCES',29),('PRODUCT_SUMMARY',29),('PRODUCT_FEATURES',30),('PRODUCT_RESOURCES',30),('PRODUCT_SUMMARY',30),('PRODUCT_RESOURCES',31),('PRODUCT_SUMMARY',31),('PRODUCT_RESOURCES',32),('PRODUCT_SUMMARY',32),('PRODUCT_SUMMARY',33),('PRODUCT_EDITOR',34),('PRODUCT_FEATURES',34),('PRODUCT_RESOURCES',34),('PRODUCT_SUMMARY',34),('PRODUCT_FEATURES',35),('PRODUCT_SUMMARY',35),('PRODUCT_SUMMARY',36),('PRODUCT_FEATURES',37),('PRODUCT_SUMMARY',37),('PRODUCT_EDITOR',38),('PRODUCT_FEATURES',38),('PRODUCT_RESOURCES',38),('PRODUCT_SUMMARY',38),('PRODUCT_SUMMARY',39),('PRODUCT_SUMMARY',40),('PRODUCT_EDITOR',41),('PRODUCT_FEATURES',41),('PRODUCT_RESOURCES',41),('PRODUCT_SUMMARY',41),('PRODUCT_EDITOR',42),('PRODUCT_FEATURES',42),('PRODUCT_RESOURCES',42),('PRODUCT_SUMMARY',42),('PRODUCT_EDITOR',43),('PRODUCT_FEATURES',43),('PRODUCT_RESOURCES',43),('PRODUCT_SUMMARY',43),('PRODUCT_EDITOR',44),('PRODUCT_FEATURES',44),('PRODUCT_RESOURCES',44),('PRODUCT_SUMMARY',44),('PRODUCT_EDITOR',45),('PRODUCT_FEATURES',45),('PRODUCT_RESOURCES',45),('PRODUCT_SUMMARY',45),('PRODUCT_EDITOR',46),('PRODUCT_FEATURES',46),('PRODUCT_RESOURCES',46),('PRODUCT_SUMMARY',46),('PRODUCT_EDITOR',51),('PRODUCT_FEATURES',51),('PRODUCT_RESOURCES',51),('PRODUCT_EDITOR',52),('PRODUCT_FEATURES',52),('PRODUCT_RESOURCES',52),('PRODUCT_FEATURES',53),('PRODUCT_SUMMARY',53),('PRODUCT_SUMMARY',76),('PRODUCT_SUMMARY',81),('PRODUCT_SUMMARY',83),('PRODUCT_SUMMARY',84),('PRODUCT_SUMMARY',86),('PRODUCT_SUMMARY',87),('PRODUCT_SUMMARY',88),('PRODUCT_EDITOR',89),('PRODUCT_FEATURES',89),('PRODUCT_RESOURCES',89),('PRODUCT_SUMMARY',89),('PRODUCT_EDITOR',96),('PRODUCT_FEATURES',96),('PRODUCT_RESOURCES',96),('PRODUCT_SUMMARY',97),('PRODUCT_EDITOR',98),('PRODUCT_FEATURES',98),('PRODUCT_RESOURCES',98),('PRODUCT_SUMMARY',98),('PRODUCT_EDITOR',99),('PRODUCT_FEATURES',99),('PRODUCT_RESOURCES',99),('PRODUCT_SUMMARY',99),('PRODUCT_SUMMARY',100),('PRODUCT_SUMMARY',101),('PRODUCT_SUMMARY',102),('PRODUCT_SUMMARY',103),('PRODUCT_SUMMARY',104),('PRODUCT_SUMMARY',108),('PRODUCT_SUMMARY',109),('PRODUCT_SUMMARY',110),('PRODUCT_SUMMARY',111),('PRODUCT_SUMMARY',112),('PRODUCT_SUMMARY',113),('PRODUCT_SUMMARY',114),('PRODUCT_SUMMARY',115),('PRODUCT_SUMMARY',116),('PRODUCT_SUMMARY',117),('PRODUCT_SUMMARY',118),('PRODUCT_SUMMARY',119),('PRODUCT_SUMMARY',120),('PRODUCT_SUMMARY',121),('PRODUCT_SUMMARY',122),('PRODUCT_SUMMARY',123),('PRODUCT_SUMMARY',124),('PRODUCT_SUMMARY',125),('PRODUCT_SUMMARY',128),('PRODUCT_SUMMARY',129),('PRODUCT_SUMMARY',130),('PRODUCT_SUMMARY',131),('PRODUCT_SUMMARY',132),('PRODUCT_SUMMARY',133),('PRODUCT_SUMMARY',134),('PRODUCT_SUMMARY',135),('PRODUCT_SUMMARY',136),('PRODUCT_SUMMARY',137),('PRODUCT_SUMMARY',138),('PRODUCT_SUMMARY',139),('PRODUCT_SUMMARY',140),('PRODUCT_SUMMARY',141),('PRODUCT_SUMMARY',142),('PRODUCT_SUMMARY',143),('PRODUCT_SUMMARY',144),('PRODUCT_SUMMARY',145),('PRODUCT_SUMMARY',146),('PRODUCT_SUMMARY',147),('PRODUCT_SUMMARY',148),('PRODUCT_SUMMARY',149),('PRODUCT_SUMMARY',150),('PRODUCT_SUMMARY',151),('PRODUCT_SUMMARY',152),('PRODUCT_SUMMARY',153),('PRODUCT_SUMMARY',154),('PRODUCT_SUMMARY',155),('PRODUCT_SUMMARY',156),('PRODUCT_SUMMARY',157),('PRODUCT_SUMMARY',158),('PRODUCT_SUMMARY',159),('PRODUCT_SUMMARY',160),('PRODUCT_SUMMARY',161),('PRODUCT_SUMMARY',162),('PRODUCT_SUMMARY',163),('PRODUCT_SUMMARY',164),('PRODUCT_SUMMARY',165),('PRODUCT_SUMMARY',166),('PRODUCT_SUMMARY',167),('PRODUCT_SUMMARY',168),('PRODUCT_SUMMARY',169),('PRODUCT_SUMMARY',170),('PRODUCT_SUMMARY',171),('PRODUCT_SUMMARY',172),('PRODUCT_SUMMARY',173),('PRODUCT_FEATURES',174),('PRODUCT_SUMMARY',174),('PRODUCT_SUMMARY',175),('PRODUCT_SUMMARY',176),('PRODUCT_SUMMARY',177);
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
INSERT INTO `product_corner` VALUES (30,2,0),(31,2,0),(32,2,0),(33,4,0),(35,2,0),(36,2,0),(37,2,0),(37,4,0),(38,4,0),(39,4,0),(40,4,0),(50,2,0),(50,4,0),(91,2,0),(92,2,0),(92,4,0),(96,2,0),(99,2,0),(99,4,0),(103,2,0),(111,2,0),(115,2,0),(117,2,0),(128,2,0),(129,2,0),(130,2,0),(132,2,0),(133,2,0),(134,2,0),(148,2,0),(149,2,0),(150,2,0),(154,2,0),(156,2,0),(157,2,0),(158,2,0),(159,2,0),(161,2,0),(172,4,0),(173,2,0),(174,2,0),(177,2,0);
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
INSERT INTO `product_feature` VALUES (30,1,'Smartphone ultra résistant','<p>Restez serein même dans les situations les plus extrêmes grace à l\'incroyable robustesse du Galaxy Xcover 3. Avec son design renforcé et sa certification IP67, le Galaxy Xcover 3 ne craint ni l\'eau, ni la poussière.</p>'),(30,2,'Gardez le contrôle','<p>Equipé d\'une batterie de 2200 mAh, le Galaxy Xcover 3 vous suivra partout, tout au long de la journée.</p><p>Equipé de la 4G, le Galaxy Xcover 3, naviguez sur internet, téléchargez des films, de la musique ou profitez des derniers jeux en ligne… sans plus attendre !<br></p>'),(30,3,'Alliage d\'ergonomie et de puissance','<p>Avec sa surface adhérente et sa finesse de 9,95mm, le Galaxy Xcover 3 offre une excellente prise en main et une parfaite ergonomie. Il vous offre une fluidité à toute épreuve grâce à son processeur nouvelle génération Quad Core 1.3 GHz et sa mémoire vive de 1.5 Go. Son interface sous Marshmallow 6.0 est plus fluide que jamais.</p>'),(35,1,'Une meilleure expérience à chaque toucher','<p>L’iPad mini 4 tourne sous iOS 9 : le système d’exploitation mobile le plus intuitif, avancé et sécurisé au monde. Et si iOS 9 semble taillé sur mesure pour l’iPad, c’est tout sauf un hasard. Avec ses apps améliorées et ses nouvelles fonctionnalités comme Slide Over, Split View et Image dans l’image, il fait rimer productivité avec simplicité. Que vous souhaitiez consulter vos messages en répondant à des e‑mails ou créer une présentation tout en regardant un match, iOS 9 vous permettra d’exploiter l’iPad comme jamais.</p>'),(35,2,'Caméra et appareil photo géniaux.','<p>L’appareil photo iSight de l’iPad Air 2 possède des optiques dernier cri, un capteur amélioré et un puissant processeur de signal d’image développé par Apple. Il propose des fonctionnalités comme la photo panoramique, la vidéo en accéléré et au ralenti ainsi que les modes rafale et retardateur. La caméra FaceTime HD avant a également été repensée. Dotée d’un capteur perfectionné et de pixels plus grands, elle offre de meilleures performances en conditions de faible éclairage. Le bénéfice est clair et net. Vos photos, vidéos — ainsi que vos appels vidéo et selfies — sont tout simplement spectaculaires. </p>'),(35,3,'Une grande puissance.','<p>L’iPad Air 2 est plus fin. Et plus puissant. Sa puce A8X lui confère une puissance CPU et des performances graphiques nettement supérieures à celles de la génération précédente. Et avec son architecture 64 bits de pointe, l’iPad Air 2 est maintenant aussi performant que bon nombre d’ordinateurs de bureau. Pour autant, il demeure remarquablement économe en énergie. Son autonomie de 10 heures vous permet de travailler, de jouer et de surfer sur le Web toute la journée.</p>'),(37,1,'Référence','<p>diphone-657</p>'),(37,2,'Modèles iPhone/iPad/iPod ','<p>A1474, A1475, A1476</p>'),(37,3,'Détails du KIT','<p>Kit Batterie iPad Air Originale (WiFi &amp; 3G) + Outils iPad</p>'),(53,1,'Cartouche 1','<p>Test</p>'),(53,2,'Cartouche 2',''),(92,1,'John','<p>John Test</p>'),(172,1,'des','<p>desdesdesdes</p>'),(174,1,'Une vue imprenable sur le progrès. ','<p>L’élément clé de l’iPad, c’est son écran. Il est à la fois une fenêtre spectaculaire sur vos contenus et l’interface qui, grâce au Multi‑Touch, vous permet de faire à peu près tout ce que vous voulez. Pour l’iPad&nbsp;Pro, nous avons créé l’écran Retina le plus avancé qui soit. En version 12,9&nbsp;pouces, il offre même la plus haute résolution jamais proposée sur un appareil iOS. Et sur le nouveau modèle 9,7&nbsp;pouces, il est non seulement notre écran le plus sophistiqué, mais aussi le plus lumineux et le moins réfléchissant au monde.<br></p>'),(174,2,'Très vite, vous trouverez les portables très lents. ','<p>La puce&nbsp;A9X 64&nbsp;bits procure à l’iPad&nbsp;Pro la puissance nécessaire pour s’acquitter facilement de tâches autrefois chasse gardée des stations de travail et autres PC. Sans parler de celles que vous n’auriez jamais imaginé accomplir sur un ordinateur. Malgré ces performances spectaculaires, l’architecture ultra-efficiente de la puce&nbsp;A9X permet d’assurer jusqu’à 10&nbsp;heures d’autonomie1<br></p>'),(174,3,'Très légèrement surpuissant. ','<p>L’iPad&nbsp;Pro a beau s’acquitter de tâches qui s’effectuent généralement sur un PC, il est d’une légèreté qu’aucun ordinateur ne peut atteindre. La version 9,7&nbsp;pouces réunit des performances poids lourd dans moins de 500&nbsp;g. Le modèle 12,9&nbsp;pouces, quant à lui, est plus fin que l’iPhone&nbsp;6s et pèse à peine plus de 700&nbsp;g. Et grâce à leur coque unibody en aluminium, tous deux offrent cette rassurante sensation de robustesse quand on les prend en main.</p>');
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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `product_follow_ups_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_follow_ups`
--

LOCK TABLES `product_follow_ups` WRITE;
/*!40000 ALTER TABLE `product_follow_ups` DISABLE KEYS */;
INSERT INTO `product_follow_ups` VALUES (84,'a new follow up','sav_vol_and_perte','device_wiping',0,'','',1),(84,'a new follow up','sav_vol_and_perte','line_suspension',1,'3','',2),(84,'a new follow up','sav_vol_and_perte','device_preparation',1,'3','',3),(84,'a new follow up','sav_vol_and_perte','device_delivery',1,'3','',4),(84,'test follow up','sav_casse','device_diagnostic',0,'3','',5),(84,'test follow up','sav_casse','device_repair',0,'3','',6),(84,'test follow up','sav_casse','sc_device_delivery',0,'3','',7),(84,'new follow up','line_suspension','ls_request_in_progress',1,'','',8),(84,'new follow up','line_suspension','line_suspended',1,'','',9),(113,'A Train follow up','sav_casse','device_diagnostic',0,'','13',10),(113,'A Train follow up','sav_casse','device_repair',0,'','13',11),(113,'A Train follow up','sav_casse','sc_device_delivery',0,'','13',12),(114,'SAV','sav_vol_and_perte','device_wiping',0,'','',13),(114,'SAV','sav_vol_and_perte','line_suspension',0,'','13',14),(114,'SAV','sav_vol_and_perte','device_preparation',0,'','13',15),(114,'SAV','sav_vol_and_perte','device_delivery',0,'','13',16),(116,'sav','sav_casse','device_diagnostic',0,'','8',17),(116,'sav','sav_casse','sc_device_delivery',0,'','8',18),(116,'sav','sav_casse','device_repair',0,'','8',19),(116,'sim','sim_card','sim_code_created',0,'','12',20),(116,'sim','sim_card','sim_received',0,'','12',21),(116,'sim','sim_card','sim_activated',0,'','12',22),(124,'1','sav_vol_and_perte','device_wiping',0,'','',23),(124,'1','sav_vol_and_perte','line_suspension',0,'','13',24),(124,'1','sav_vol_and_perte','device_preparation',0,'','13',25),(124,'1','sav_vol_and_perte','device_delivery',0,'','13',26),(124,'2','line_suspension','ls_request_in_progress',0,'','12',27),(124,'2','line_suspension','line_suspended',0,'','12',28),(129,'1','sav_vol_and_perte','device_wiping',0,'','',29),(129,'1','sav_vol_and_perte','line_suspension',0,'','13',30),(129,'1','sav_vol_and_perte','device_preparation',0,'','13',31),(129,'1','sav_vol_and_perte','device_delivery',0,'','13',32),(129,'2','sav_casse','device_diagnostic',0,'','13',33),(129,'2','sav_casse','sc_device_delivery',0,'','13',34),(129,'2','sav_casse','device_repair',0,'','13',35),(130,'1','sav_casse','device_diagnostic',0,'','8',36),(130,'1','sav_casse','sc_device_delivery',0,'','8',37),(130,'1','sav_casse','device_repair',0,'','8',38),(128,'1','portability','porta_qualif',0,'','',39),(128,'1','portability','porta_ready',0,'','41',40),(128,'1','portability','porta_operator',0,'','41',41),(128,'1','portability','porta_operator_ok',0,'','41',42),(128,'1','portability','porta_closed',0,'','45',43),(128,'2','chgt_options','request_in_progress',0,'','8',44),(128,'2','chgt_options','new_options_active',0,'','8',45),(128,'3','sim_card','sim_code_created',0,'','8',46),(128,'3','sim_card','sim_received',0,'','8',47),(128,'3','sim_card','sim_activated',0,'','8',48),(156,'Nokia  SC','sav_casse','device_diagnostic',0,'','',49),(156,'Nokia  SC','sav_casse','device_repair',0,'15','',50),(156,'Nokia  SC','sav_casse','device_ready',0,'15','',51),(156,'Nokia  SC','sav_casse','sc_device_delivery',0,'15','',52),(156,'Nokia  SC','sav_casse','gfn_validation',0,'15','',53),(174,'SAV  CASSE','sav_casse','device_diagnostic',0,'','',54),(174,'SAV  CASSE','sav_casse','device_repair',0,'','34',55),(174,'SAV  CASSE','sav_casse','device_ready',0,'','34',56),(174,'SAV  CASSE','sav_casse','sc_device_delivery',0,'','34',57),(174,'SAV  CASSE','sav_casse','gfn_validation',0,'','34',58),(133,'1','portability','porta_qualif',0,'','',59),(133,'1','portability','porta_ready',0,'','41',60),(133,'1','portability','porta_operator',0,'','41',61),(133,'1','portability','porta_operator_ok',0,'','41',62),(133,'1','portability','porta_closed',0,'','41',63);
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
INSERT INTO `product_keyword` VALUES (35,1),(37,1),(92,1),(96,1),(99,1),(134,1),(174,1),(30,2),(91,2),(92,2),(96,2),(99,2),(148,2),(161,2),(177,2),(38,10),(96,10),(99,10),(38,16),(43,16),(92,16),(32,35),(36,35),(132,35),(133,35),(39,42),(40,48),(156,54),(158,54),(159,54),(173,54),(157,57),(149,69),(30,73),(134,73),(148,73),(149,73),(157,73),(158,73),(161,73),(35,78),(37,78),(174,78),(150,121),(33,137),(37,137),(39,137),(40,137);
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
) ENGINE=InnoDB AUTO_INCREMENT=257 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_timeline_step_executors`
--

LOCK TABLES `product_timeline_step_executors` WRITE;
/*!40000 ALTER TABLE `product_timeline_step_executors` DISABLE KEYS */;
INSERT INTO `product_timeline_step_executors` VALUES (7,'user',40,3,50),(8,'user',40,2,50),(9,'user',40,4,50),(10,'user',40,7,49),(11,'user',34,7,49),(12,'user',40,8,49),(13,'user',34,8,49),(14,'user',40,9,49),(15,'user',34,9,49),(16,'user',34,10,49),(17,'user',40,10,49),(18,'user',34,11,49),(19,'user',40,11,49),(20,'user',40,12,49),(21,'user',34,12,49),(25,'user',41,2,52),(26,'user',41,3,52),(27,'user',41,4,52),(28,'user',40,11,51),(29,'user',44,7,51),(30,'user',44,8,51),(31,'user',40,10,51),(32,'user',44,9,51),(33,'user',38,12,51),(34,'user',39,12,51),(35,'user',41,2,54),(36,'user',41,3,54),(37,'user',41,4,54),(38,'user',45,7,55),(39,'user',45,8,55),(40,'user',45,9,55),(41,'user',45,7,76),(42,'user',45,8,76),(43,'user',45,9,76),(44,'user',45,11,76),(45,'user',45,10,76),(46,'user',45,12,76),(47,'user',44,7,82),(48,'user',44,8,82),(49,'user',44,9,82),(50,'user',44,10,82),(51,'user',44,11,82),(52,'user',44,12,82),(53,'user',44,7,83),(54,'user',44,8,83),(55,'user',44,9,83),(56,'user',44,11,83),(57,'user',44,10,83),(58,'user',44,12,83),(59,'user',41,2,84),(60,'user',41,3,84),(61,'user',41,4,84),(62,'user',41,2,85),(63,'user',41,3,85),(64,'user',41,4,85),(68,'user',41,2,86),(69,'user',41,3,86),(70,'user',44,3,86),(71,'user',41,4,86),(72,'user',41,2,87),(73,'user',41,3,87),(74,'user',41,4,87),(75,'user',44,7,88),(76,'user',44,8,88),(77,'user',44,10,88),(78,'user',44,11,88),(79,'user',44,9,88),(80,'user',44,12,88),(81,'user',41,7,89),(82,'user',41,8,89),(83,'user',41,9,89),(84,'user',41,10,89),(85,'user',41,11,89),(86,'user',41,12,89),(93,'role',15,4,96),(94,'role',15,2,96),(95,'product_owner',NULL,2,96),(96,'role',15,3,96),(97,'product_owner',NULL,3,96),(98,'product_owner',NULL,4,96),(99,'role',15,2,98),(100,'product_owner',NULL,2,98),(101,'role',15,3,98),(102,'product_owner',NULL,3,98),(103,'role',15,4,98),(104,'product_owner',NULL,4,98),(105,'user',44,7,97),(106,'user',44,8,97),(107,'user',44,9,97),(108,'user',44,10,97),(109,'user',44,11,97),(110,'user',44,12,97),(111,'user',41,2,100),(112,'user',41,3,100),(113,'user',41,4,100),(120,'user',41,2,101),(121,'user',41,3,101),(122,'user',41,4,101),(129,'role',15,4,99),(130,'role',15,2,99),(131,'product_owner',NULL,2,99),(132,'role',15,3,99),(133,'product_owner',NULL,3,99),(134,'product_owner',NULL,4,99),(135,'user',41,2,103),(136,'user',41,3,103),(137,'user',41,4,103),(138,'user',41,2,104),(139,'user',41,3,104),(140,'user',41,4,104),(141,'role',15,9,109),(142,'role',15,7,109),(143,'product_owner',NULL,7,109),(144,'role',15,8,109),(145,'product_owner',NULL,8,109),(146,'product_owner',NULL,9,109),(147,'role',15,10,109),(148,'product_owner',NULL,10,109),(149,'role',15,12,109),(150,'product_owner',NULL,12,109),(151,'role',15,11,109),(152,'role',15,2,110),(153,'role',15,3,110),(154,'role',15,4,110),(155,'user',41,2,111),(156,'user',41,3,111),(157,'user',41,4,111),(182,'user',34,2,113),(183,'user',34,3,113),(184,'user',34,4,113),(185,'user',41,2,114),(186,'user',41,3,114),(187,'user',41,4,114),(188,'user',45,2,116),(189,'user',45,3,116),(190,'user',45,4,116),(191,'role',20,2,119),(192,'role',21,3,119),(193,'role',15,3,119),(194,'role',15,4,119),(195,'user',34,4,121),(196,'user',34,2,121),(197,'role',20,2,121),(198,'user',38,3,121),(199,'role',18,3,121),(200,'role',19,4,121),(201,'user',41,2,124),(202,'user',41,3,124),(203,'user',41,4,124),(204,'user',41,2,128),(205,'user',41,3,128),(206,'user',41,4,128),(207,'user',45,7,129),(208,'user',45,8,129),(209,'user',45,9,129),(210,'user',45,10,129),(211,'user',45,11,129),(212,'user',45,12,129),(213,'user',44,2,130),(214,'user',44,3,130),(215,'user',44,4,130),(230,'user',34,10,172),(231,'user',34,6,172),(232,'user',34,7,172),(233,'user',34,8,172),(234,'user',34,9,172),(235,'user',34,11,172),(236,'user',34,12,172),(237,'user',41,2,36),(238,'user',41,3,36),(239,'user',41,4,36),(240,'user',44,6,30),(241,'user',44,7,30),(242,'user',44,8,30),(243,'user',44,9,30),(244,'user',44,10,30),(245,'user',44,11,30),(246,'user',44,12,30),(247,'user',41,2,33),(248,'user',41,3,33),(249,'user',41,4,33),(250,'user',45,6,174),(251,'user',45,7,174),(252,'user',45,8,174),(253,'user',45,9,174),(254,'user',45,10,174),(255,'user',45,11,174),(256,'user',45,12,174);
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
  CONSTRAINT `fk_product_like` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
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
) ENGINE=InnoDB AUTO_INCREMENT=156 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource`
--

LOCK TABLES `resource` WRITE;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
INSERT INTO `resource` VALUES (2,30,'image/jpeg','2.jpeg',NULL,NULL,'samsung.jpeg',NULL,'samsung.jpeg'),(3,30,'image/jpeg','3.jpeg',1,NULL,' SAMSUNG Galaxy Xcover 3 2.jpeg',NULL,'recto/verso'),(4,30,'image/jpeg','4.jpeg',2,NULL,' SAMSUNG Galaxy Xcover 3 3.jpeg',NULL,'Galaxy Xcover 3'),(5,30,'image/jpeg','5.jpeg',3,NULL,' SAMSUNG Galaxy Xcover 3.jpeg',NULL,'Galaxy Xcover 3'),(6,30,'application/force-download','6.pdf',NULL,NULL,'SM-G388F_UM_Open_Lollipop_Fre_Rev.1.0_151207.pdf',NULL,' Manuel de l\'utilisateur'),(7,30,'video/mp4','7.mp4',NULL,NULL,'Samsung Galaxy Xcover 3- Born to survive.mp4',NULL,'Born to survive'),(10,31,'image/jpeg','10.jpg',NULL,NULL,'micro-sim-nano-sim-cutter.jpg',NULL,'formats'),(11,31,'image/jpeg','11.jpg',NULL,NULL,'sfr.jpg',NULL,'logo'),(12,31,'image/jpeg','12.jpg',1,NULL,'SIM triple découpe.jpg',NULL,'SIM triple'),(13,32,'image/jpeg','13.jpg',NULL,NULL,'sfr.jpg',NULL,'logo'),(16,32,'image/jpeg','16.jpg',1,NULL,'couvertuer nationale SFR.jpg',NULL,'couvertuer nationale SFR'),(17,32,'image/jpeg','17.jpg',NULL,NULL,'compa opérateurs.jpg',NULL,''),(18,33,'image/png','18.png',NULL,NULL,'DD mobilite.png',NULL,'DD mobilite.png'),(19,33,'image/jpeg','19.jpg',1,NULL,'visuelsCentre-de-services.jpg',NULL,'visuelsCentre-de-services.jpg'),(21,33,'image/jpeg','21.jpg',NULL,NULL,'salon-JP.jpg',NULL,'salon-JP.jpg'),(22,35,'image/png','22.png',NULL,NULL,'Silver-apple-logo.png',NULL,'Silver-apple-logo.png'),(23,35,'image/png','23.png',NULL,NULL,'Silver-apple-logo.png',NULL,'Silver-apple-logo.png'),(24,35,'image/jpeg','24.jpg',1,NULL,'apple air2.jpg',NULL,'apple air2.jpg'),(27,37,'image/png','27.png',NULL,NULL,'Silver-apple-logo.png',NULL,'Silver-apple-logo.png'),(29,37,'image/jpeg','29.jpg',1,NULL,'batteie.jpg',NULL,'batteie.jpg'),(30,36,'image/jpeg','30.jpg',1,NULL,'SIM triple découpe.jpg',NULL,'SIM triple découpe.jpg'),(32,38,'image/jpeg','32.jpg',1,NULL,'technical_support_services.jpg',NULL,'technical_support_services.jpg'),(34,38,'image/png','34.png',NULL,NULL,'support-sncf3.png',NULL,'support-sncf3.png'),(35,39,'image/png','35.png',NULL,NULL,'support-sncf3.png',NULL,'support-sncf3.png'),(37,40,'image/png','37.png',NULL,NULL,'support-sncf3.png',NULL,'support-sncf3.png'),(39,43,'image/jpeg','39.jpg',NULL,NULL,'sfr.jpg',NULL,'sfr.jpg'),(40,43,'image/jpeg','40.jpg',1,NULL,'micro-sim-nano-sim-cutter.jpg',NULL,'micro-sim-nano-sim-cutter.jpg'),(41,53,'image/jpeg','41.JPG',1,NULL,'_DSC3301.JPG',NULL,'_DSC3301.JPG'),(42,53,'image/jpeg','42.jpg',2,NULL,'11954681_10207930603367048_8798226838160447789_n.jpg',NULL,'11954681_10207930603367048_8798226838160447789_n.jpg'),(43,53,'image/jpeg','43.jpg',NULL,NULL,'waves.jpg',NULL,'waves.jpg'),(44,75,'image/jpeg','44.jpg',NULL,NULL,'ultimate-guide-to-your-product-launch.jpg',NULL,'ultimate-guide-to-your-product-launch.jpg'),(45,79,'image/jpeg','45.jpg',NULL,NULL,'ultimate-guide-to-your-product-launch.jpg',NULL,'ultimate-guide-to-your-product-launch.jpg'),(46,81,'image/png','46.png',NULL,NULL,'apps-eclipse-icon.png',NULL,'apps-eclipse-icon.png'),(47,81,'image/png','47.png',1,NULL,'apps-scan-monitor-icon.png',NULL,'apps-scan-monitor-icon.png'),(48,82,'image/png','48.png',1,NULL,'WebcamMax-logo.png',NULL,'WebcamMax-logo.png'),(49,82,'image/png','49.png',NULL,NULL,'apps-pidgin-icon.png',NULL,'apps-pidgin-icon.png'),(57,38,'image/jpeg','57.jpg',NULL,NULL,'ultimate-guide-to-your-product-launch.jpg',NULL,'ultimate-guide-to-your-product-launch.jpg'),(58,92,'image/jpeg','58.jpg',1,NULL,'ultimate-guide-to-your-product-launch.jpg',NULL,'ultimate-guide-to-your-product-launch.jpg'),(59,96,'image/jpeg','59.jpg',1,NULL,'total-product-marketing.jpg',NULL,'total-product-marketing.jpg'),(61,102,'image/jpeg','61.jpg',1,NULL,'13880245_542319619286676_6364055531723508213_n.jpg',NULL,'13880245_542319619286676_6364055531723508213_n.jpg'),(62,102,'image/jpeg','62.jpg',2,NULL,'ultimate-guide-to-your-product-launch.jpg',NULL,'ultimate-guide-to-your-product-launch.jpg'),(63,109,'image/png','63.png',1,NULL,'hp.png',NULL,'hp.png'),(64,110,'image/png','64.png',1,NULL,'headphones.png',NULL,'headphones.png'),(70,83,'image/jpeg','70.jpg',NULL,NULL,'sncf-1.jpg',NULL,'sncf-1.jpg'),(71,83,'image/jpeg','71.jpg',1,NULL,'sncf-1.jpg',NULL,'sncf-1.jpg'),(72,84,'image/jpeg','72.JPG',NULL,NULL,'sncf-2.JPG',NULL,'sncf-2.JPG'),(73,84,'image/jpeg','73.JPG',1,NULL,'sncf-2.JPG',NULL,'sncf-2.JPG'),(74,86,'image/jpeg',NULL,NULL,NULL,'sncf-3.jpg',NULL,'sncf-3.jpg'),(75,87,'image/jpeg','75.jpg',NULL,NULL,'sncf-1.jpg',NULL,'sncf-1.jpg'),(76,87,'image/jpeg','76.jpg',1,NULL,'sncf-1.jpg',NULL,'sncf-1.jpg'),(77,86,'image/jpeg','77.jpg',NULL,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(78,86,'image/jpeg','78.jpg',1,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(79,88,'image/jpeg','79.JPG',NULL,NULL,'sncf-2.JPG',NULL,'sncf-2.JPG'),(80,88,'image/jpeg','80.JPG',1,NULL,'sncf-2.JPG',NULL,'sncf-2.JPG'),(81,89,'image/jpeg','81.jpg',NULL,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(82,89,'image/jpeg','82.jpg',1,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(83,97,'image/jpeg','83.JPG',NULL,NULL,'sncf-2.JPG',NULL,'sncf-2.JPG'),(84,97,'image/jpeg','84.JPG',1,NULL,'sncf-2.JPG',NULL,'sncf-2.JPG'),(85,111,'image/jpeg','85.jpg',NULL,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(86,111,'image/jpeg','86.jpg',1,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(87,113,'image/jpeg','87.jpg',NULL,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(88,113,'image/jpeg','88.jpg',1,NULL,'sncf-4.jpg',NULL,'sncf-4.jpg'),(89,114,'image/png','89.png',NULL,NULL,'apps-ubuntuone-icon.png',NULL,'apps-ubuntuone-icon.png'),(90,115,'image/png','90.png',NULL,NULL,'apps-thunderbird-icon.png',NULL,'apps-thunderbird-icon.png'),(91,116,'image/png','91.png',NULL,NULL,'apps-eclipse-icon.png',NULL,'apps-eclipse-icon.png'),(92,119,'application/pdf','92.pdf',NULL,NULL,'pdf-sample.pdf',NULL,'pdf-sample.pdf'),(93,119,'image/jpeg','93.jpg',NULL,NULL,'hormiga-patas.jpg',NULL,'hormiga-patas.jpg'),(94,120,'image/jpeg','94.jpg',NULL,NULL,'hormiga-patas.jpg',NULL,'hormiga-patas.jpg'),(95,121,'image/jpeg','95.jpg',NULL,NULL,'hormiga-patas.jpg',NULL,'hormiga-patas.jpg'),(96,123,'image/jpeg','96.jpg',NULL,NULL,'download.jpg',NULL,'download.jpg'),(97,124,'image/png','97.png',NULL,NULL,'panic-button.png',NULL,'panic-button.png'),(98,125,'image/png','98.png',NULL,NULL,'apps-clementine-icon.png',NULL,'apps-clementine-icon.png'),(99,128,'image/png','99.png',NULL,NULL,'apps-clementine-icon.png',NULL,'apps-clementine-icon.png'),(100,129,'image/png','100.png',NULL,NULL,'apps-pidgin-icon.png',NULL,'apps-pidgin-icon.png'),(101,130,'image/png','101.png',NULL,NULL,'apps-chromium-browser-icon.png',NULL,'apps-chromium-browser-icon.png'),(102,170,'image/png','102.png',NULL,NULL,'categories-applications-internet-icon.png',NULL,'categories-applications-internet-icon.png'),(103,132,'image/jpeg','103.jpg',NULL,NULL,'forfait-mobile-487.jpg',NULL,'forfait-mobile-487.jpg'),(104,132,'image/jpeg','104.jpg',NULL,NULL,'sfr.jpg',NULL,'sfr.jpg'),(105,132,'image/jpeg','105.jpg',1,NULL,'couvertuer nationale SFR.jpg',NULL,'couvertuer nationale SFR.jpg'),(106,133,'image/jpeg',NULL,NULL,NULL,'sfr.jpg',NULL,'sfr.jpg'),(107,133,'image/jpeg',NULL,NULL,NULL,'forfait-mobile-487.jpg',NULL,'forfait-mobile-487.jpg'),(108,133,'image/jpeg',NULL,NULL,NULL,'sfr.jpg',NULL,'sfr.jpg'),(110,172,'image/jpeg','110.jpg',2,NULL,'bundle_0.jpg',NULL,'bundle_0.jpg'),(111,172,'image/png','111.png',1,NULL,'Screenshot from 2016-09-08 14-12-17.png',NULL,'Screenshot from 2016-09-08 14-12-17.png'),(112,172,'image/png','112.png',3,NULL,'Screenshot from 2016-09-19 09-01-12.png',NULL,'Screenshot from 2016-09-19 09-01-12.png'),(113,172,'image/png','113.png',NULL,NULL,'Screenshot from 2016-10-31 13-58-03.png',NULL,'Screenshot from 2016-10-31 13-58-03.png'),(114,154,'image/jpeg',NULL,NULL,NULL,'bundle_0.jpg',NULL,'bundle_0.jpg'),(115,154,'image/png',NULL,NULL,NULL,'Screenshot from 2016-10-31 09-51-54.png',NULL,'Screenshot from 2016-10-31 09-51-54.png'),(116,154,'image/jpeg','116.jpg',NULL,NULL,'bundle_0.jpg',NULL,'bundle_0.jpg'),(119,173,'image/png','119.png',NULL,NULL,'Nokia Logo.png',NULL,'Nokia Logo.png'),(121,173,'image/jpeg','121.jpg',1,NULL,'nokia-1600.jpg',NULL,'nokia-1600.jpg'),(125,158,'image/jpeg','125.jpg',1,NULL,'nokia 2610.jpg',NULL,'nokia 2610.jpg'),(127,156,'image/png','127.png',NULL,NULL,'Nokia Logo.png',NULL,'Nokia Logo.png'),(128,156,'image/jpeg','128.jpg',1,NULL,'nokia-1600.jpg',NULL,'nokia-1600.jpg'),(130,159,'image/png','130.png',NULL,NULL,'Nokia Logo.png',NULL,'Nokia Logo.png'),(131,158,'image/png','131.png',NULL,NULL,'Nokia Logo.png',NULL,'Nokia Logo.png'),(132,150,'image/png','132.png',NULL,NULL,'Motorola Logo.png',NULL,'Motorola Logo.png'),(133,150,'image/jpeg','133.jpg',1,NULL,'MOTOROLA C350.jpg',NULL,'MOTOROLA C350.jpg'),(134,148,'image/png','134.png',NULL,NULL,'Samsung-Logo.png',NULL,'Samsung-Logo.png'),(135,148,'image/jpeg','135.jpg',1,NULL,'SAMSUNG B2710.jpg',NULL,'SAMSUNG B2710.jpg'),(136,161,'image/png','136.png',NULL,NULL,'Samsung-Logo.png',NULL,'Samsung-Logo.png'),(137,161,'image/jpeg','137.jpg',1,NULL,'SAMSUNG SGH-B2700.jpg',NULL,'SAMSUNG SGH-B2700.jpg'),(138,157,'image/png','138.png',NULL,NULL,'HTC logo.png',NULL,'HTC logo.png'),(139,157,'image/jpeg','139.jpg',1,NULL,'htc_touch-hd-t8282.jpg',NULL,'htc_touch-hd-t8282.jpg'),(141,149,'image/jpeg','141.jpg',1,NULL,'Alcatel_s210.jpg',NULL,'Alcatel_s210.jpg'),(142,133,'image/jpeg','142.jpg',NULL,NULL,'sfr.jpg',NULL,'sfr.jpg'),(143,133,'image/jpeg','143.jpg',1,NULL,'forfait-mobile-487.jpg',NULL,'forfait-mobile-487.jpg'),(144,36,'image/jpeg','144.jpg',NULL,NULL,'boygues.jpg',NULL,'Bouygues'),(146,149,'image/png','146.png',NULL,NULL,'Alcatel logo.png',NULL,'Alcatel logo.png'),(147,134,'image/png','147.png',NULL,NULL,'Silver-apple-logo - copie.png',NULL,'Silver-apple-logo - copie.png'),(148,134,'image/jpeg','148.jpg',1,NULL,'iphone4.jpg',NULL,'iphone4.jpg'),(149,159,'image/jpeg','149.jpg',1,NULL,'NOKIA E65.jpg',NULL,'NOKIA E65.jpg'),(150,174,'image/png','150.png',NULL,NULL,'Silver-apple-logo.png',NULL,'Silver-apple-logo.png'),(151,174,'image/jpeg','151.jpg',1,NULL,'ipad pro.jpg',NULL,'ipad pro.jpg'),(152,174,'image/jpeg','152.jpg',2,NULL,'ipad pro2.jpg',NULL,'ipad pro2.jpg'),(153,174,'image/jpeg','153.jpg',3,NULL,'ipad pro supoort.jpg',NULL,'ipad pro supoort.jpg'),(154,177,'image/jpeg',NULL,NULL,NULL,'máscara-de-caballo-loco-barata-2.jpg',NULL,'máscara-de-caballo-loco-barata-2.jpg'),(155,177,'image/png',NULL,NULL,NULL,'Screenshot from 2016-11-30 16-30-54.png',NULL,'Screenshot from 2016-11-30 16-30-54.png');
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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (15,'admin'),(16,'Ecosystème'),(17,'editor'),(18,'End-user'),(19,'fleet manager'),(20,'gemma_role'),(21,'Gerard2'),(22,'Gestionnaire'),(23,'Gestionnaire2'),(24,'Manager'),(25,'Manager2');
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline`
--

LOCK TABLES `timeline` WRITE;
/*!40000 ALTER TABLE `timeline` DISABLE KEYS */;
INSERT INTO `timeline` VALUES (1,'line','assignment-order'),(2,'device','assignment-order'),(13,'sav_vol_and_perte','follow-up'),(14,'sav_casse','follow-up'),(15,'line_suspension','follow-up'),(16,'chgt_options','follow-up'),(17,'sim_card','follow-up'),(18,'portability','follow-up'),(19,'sav_casse_2','follow-up');
/*!40000 ALTER TABLE `timeline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timeline_related_timelines`
--

DROP TABLE IF EXISTS `timeline_related_timelines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `timeline_related_timelines` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) NOT NULL,
  `child_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `parent_id` (`parent_id`),
  KEY `child_id` (`child_id`),
  CONSTRAINT `timeline_related_timelines_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `timeline` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `timeline_related_timelines_ibfk_2` FOREIGN KEY (`child_id`) REFERENCES `timeline` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline_related_timelines`
--

LOCK TABLES `timeline_related_timelines` WRITE;
/*!40000 ALTER TABLE `timeline_related_timelines` DISABLE KEYS */;
INSERT INTO `timeline_related_timelines` VALUES (1,14,19);
/*!40000 ALTER TABLE `timeline_related_timelines` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline_steps`
--

LOCK TABLES `timeline_steps` WRITE;
/*!40000 ALTER TABLE `timeline_steps` DISABLE KEYS */;
INSERT INTO `timeline_steps` VALUES (1,'tl_step_bdc_sent',0,1,1),(2,'tl_step_released_sim_to_user',1,2,1),(3,'tl_step_activated_line',1,3,1),(4,'tl_step_fleet_updated_line_1',1,4,1),(5,'tl_step_bdc_envoye',0,1,2),(6,'tl_step_fleet_updated_device_1',1,2,2),(7,'tl_step_order_received',1,3,2),(8,'tl_step_fleet_updated_device_2',1,4,2),(9,'tl_step_intregation_request',1,5,2),(10,'tl_step_integration_achieved',1,6,2),(11,'tl_step_released_terminal_to_user',1,7,2),(12,'tl_step_user_confirms_reception',1,8,2),(42,'device_wiping',0,1,13),(43,'line_suspension',1,2,13),(44,'device_preparation',1,3,13),(45,'device_delivery',1,4,13),(46,'device_diagnostic',0,1,14),(47,'device_repair',1,2,14),(48,'device_ready',1,4,14),(49,'sc_device_delivery',1,5,14),(50,'ls_request_in_progress',1,1,15),(51,'line_suspended',1,2,15),(52,'request_in_progress',1,1,16),(53,'new_options_active',1,2,16),(54,'sim_code_created',1,1,17),(55,'sim_received',1,2,17),(56,'sim_activated',1,3,17),(57,'porta_qualif',0,1,18),(58,'porta_ready',1,2,18),(59,'porta_operator',1,3,18),(60,'porta_operator_ok',1,4,18),(61,'porta_closed',1,5,18),(62,'gfn_validation',1,3,14),(63,'sav_en_cours',0,1,19),(64,'material_sent',1,2,19),(65,'material_received',1,3,19),(66,'repair_status',1,4,19);
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
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (33,'bob@intuiteev.io','ab266fcf5ce45fe51f8b770bec3d2631f20e019eb81e8a9d6c09688ded42b099',1463498233476,'Bob','Bob','','local',NULL,'F',17,'','',NULL,NULL,NULL),(34,'dede@intuiteev.io','c0d36ffae5749313da9553cec19f3cb98b2ea9bf3f4e92dcfe071c4d72a2ae29',1463498233476,'Dede','Dede','','local',NULL,'F',15,'','',NULL,NULL,NULL),(35,'bob2@intuiteev.io','f20dc737bf90cdbb513a1c65c0665c771ddc6ee482a55b74ba7759ba84897566',1463852372513,'bob2','bob junior','bob2','local',1463852372513,'M',17,'','',NULL,NULL,NULL),(37,'michel@intuiteev.io','388fe8b56526e4793347d87513441a118c8cd886b6d666ebb428c501b22c4ae5',1464960749783,'Michel-Mgr','Michel','Manager','local',1464960749783,'M',25,'','',NULL,NULL,NULL),(38,'alisson@intuiteev.io','3a2e6e87aab6f2d9e7980fbed49901247881890a6970c8efb88dd23205ecd843',1465285433336,'Alisson','Alisson','Parker','local',1465285433336,'F',18,'','',NULL,NULL,NULL),(39,'alice@intuiteev.io','365d1ffcab792bdb96c133c96c452864987d21bc8886ce2fc50c3968ebd6b5cb',1465291546671,'Alice','Alice','Irish','local',1465291546671,'F',18,'','',NULL,NULL,NULL),(40,'gerard@intuiteev.io','408717c3330187fddb0cb63bf706b6a1ca2820bcf5ca4ebe6112dbe8e34a0884',1465293900203,'Gérard','Gérard','Fleet','local',1465293900203,'M',22,'','',NULL,NULL,NULL),(41,'odile@intuiteev.io','d55080049566c8845a4dcd148d0ee4a64a166ef07bb90bed017baee5915f0ec0',1465305936017,'Odile','Odile','Deray','local',1465305936017,'F',16,'','',NULL,NULL,NULL),(42,'odette@intuiteev.io','e4d4369b064f86dd0867cc0eca7b8cf1384b72b6bb3cd659b60ca31815388787',1465311974378,'Odette','Odette','Dela','local',1465311974378,'M',16,'','',NULL,NULL,NULL),(43,'odette2@intuiteev.io','ce97087361bc028c0e8b0974af58ce5ceaa09d67d9eeb24f8060c30632060666',1465312021364,'Odette2','Odette2','Dela','local',1465312021364,'F',18,'','',NULL,NULL,NULL),(44,'fabrice@intuiteev.io','3619c3952485967a1f9404dcfb30e65dc617c96b396e7c87c917690712561cc2',1466090467342,'Fabrice','Fabrice','Supplier','local',1466090467342,'M',16,'','',NULL,NULL,NULL),(45,'stephane@intuiteev.io','6213222bef4532bd879f97177c4466f03881514ba65ee6eeab227ed1ede27092',1466090558282,'Stéphane','Stéphane','Support','local',1466090558282,'M',16,'','',NULL,NULL,NULL),(46,'delphine@intuiteev.io','70bec20491a9e727e45537c3be17955f9e03e2479cce2dd184ffe471c5ded2a8',1466772100535,'Delphine','Delphine','Weiskopf','local',1466772100535,'F',18,'','',NULL,NULL,NULL);
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
  CONSTRAINT `fk_user_company` FOREIGN KEY (`id_company`) REFERENCES `company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
INSERT INTO `user_profile` VALUES (33,'Bob 23','Bob-23-1',NULL,1475663859851,NULL,NULL,1,1),(34,'Dede','Dede-2','Lorem Ipsum',NULL,NULL,NULL,1,2),(35,'bob junior Corner','bob-junior-Corner-3',NULL,1466092871970,NULL,34,1,3),(37,'Michel Corner','MichelMgr-Corner-4',NULL,NULL,NULL,34,1,4),(38,'Alisson Corner','Alisson-Corner-5',NULL,NULL,NULL,34,1,5),(39,'Alice Corner','Alice-Corner-6',NULL,NULL,NULL,34,1,6),(40,'Gérard Corner','Gerard-Corner-7',NULL,NULL,NULL,34,1,7),(41,'Odile Corner','Odile-Corner-8',NULL,NULL,NULL,34,1,8),(42,'Odette Corner','Odette-Corner-9',NULL,NULL,NULL,34,1,9),(43,'Odette2 Corner','Odette2-Corner-10',NULL,NULL,NULL,34,1,10),(44,'Fabrice Corner','Fabrice-Corner-12',NULL,NULL,NULL,34,1,12),(45,'Stéphane Corner','Stephane-Corner-13',NULL,NULL,NULL,34,1,13),(46,'Delphine Corner','Delphine-Corner-14',NULL,NULL,NULL,34,1,14);
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

-- Dump completed on 2016-12-13 17:05:49
-- MySQL dump 10.13  Distrib 5.7.13, for linux-glibc2.5 (x86_64)
--
-- Host: 0.0.0.0    Database: marketplace_decathlon
-- ------------------------------------------------------
-- Server version	5.7.16

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
INSERT INTO `SequelizeMeta` VALUES ('20160420153406-proabono.js'),('20160426163482-acl_setup.js'),('20160503094102-bundle.js'),('20160510134174-delete-user.js'),('20160511125936-admin-profile-company.js'),('20160518122420-acl-uservoice.js'),('20160531172735-assignment-permissions.js'),('20160531172778-assignment.js'),('20160603122034-add-change-product-owner-permission.js'),('20160609163900-assignment-posystem.js'),('20160616132203-add-product-type.js'),('20160620153658-assigment_order-remove-add-columns.js'),('20160630122221-enable-product-features.js'),('20160712125324-product_timeline.js'),('20160713130351-populate_timelines_steps_1.js'),('20160714135677-modify_includes_po_from_product_timeline_steps_executor.js'),('20160719130114-add_timeline_to_products.js'),('20160720120204-add-product-assignment-options.js'),('20160824142451-add-external-workflow-for-assignment-orders.js'),('20160829095191-fix-timeline-executor_id-column.js'),('20160906171834-add-stock-table.js'),('20160912121125-add-gdpid-assignment-order.js'),('20160926152675-add-product-follow-ups.js'),('20160927114155-follow-ups.js'),('20160928164055-assignment-order-followups-add-demo-cols.js'),('20160929160383-remove-follow-up-state-column.js'),('20160929181981-add-follow-up-id-to-assignment-order-follow-up.js'),('20161004125267-tidy-follow-ups.js'),('20161004132680-add-timeline-type-column.js'),('20161004135248-add-follow-up-timeline-data.js');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_resource`
--

LOCK TABLES `article_resource` WRITE;
/*!40000 ALTER TABLE `article_resource` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
INSERT INTO `assignment` VALUES (1,'b446a1c7c',2,3,5,'578e533d4afe651000b3ec90',1468943887975,1468943887976,'decathlon-assignment-1',''),(2,'b026e38ab',3,3,5,'578e57704afe651000b3ec91',1468946282428,1468946282428,'decathlon-assignment-2',''),(3,'8e980d99e',2,2,5,'57e98a26fe7daa2500c4ff9f',1474921463084,1474921463084,'decathlon-assignment-3',''),(4,'ba6172b8b',2,3,5,'57e98a29fe7daa2500c4ffa0',1474922582667,1474922582667,'decathlon-assignment-4',''),(5,'95f03f1f5',1,3,5,'57ea3213fe7daa2500c4ffa1',1474965993618,1474965993618,'decathlon-assignment-5','');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order`
--

LOCK TABLES `assignment_order` WRITE;
/*!40000 ALTER TABLE `assignment_order` DISABLE KEYS */;
INSERT INTO `assignment_order` VALUES (1,'b446a1c7c',1,3,NULL,4,NULL,0,NULL,1468943888021,NULL),(2,'b026e38ab',2,3,NULL,4,NULL,0,NULL,1468946282435,NULL),(3,'8e980d99e',3,3,NULL,4,NULL,1,'',1474921463146,'0'),(4,'ba6172b8b',4,3,NULL,4,NULL,0,'',1474922582676,'0'),(5,'95f03f1f5',5,3,NULL,4,NULL,1,'',1474965993629,'0');
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
  `created_at` bigint(32) NOT NULL DEFAULT '1475047299055',
  `deleted_at` bigint(32) DEFAULT NULL,
  `id_timeline` varchar(255) NOT NULL,
  `id_follow_up_task` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_assignment_order` (`id_assignment_order`),
  CONSTRAINT `assignment_order_follow_ups_ibfk_1` FOREIGN KEY (`id_assignment_order`) REFERENCES `assignment_order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_order_follow_ups`
--

LOCK TABLES `assignment_order_follow_ups` WRITE;
/*!40000 ALTER TABLE `assignment_order_follow_ups` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle`
--

LOCK TABLES `bundle` WRITE;
/*!40000 ALTER TABLE `bundle` DISABLE KEYS */;
INSERT INTO `bundle` VALUES (1,'Pack de démo',NULL,NULL,3,1474921688214,1474921688214,NULL,2,'Pack-de-demo-1',NULL);
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
INSERT INTO `bundle_component` VALUES (1,3,0);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle_resource`
--

LOCK TABLES `bundle_resource` WRITE;
/*!40000 ALTER TABLE `bundle_resource` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'DD','00000000000000',NULL,'',1),(2,'admin','0998877665451234576345',NULL,NULL,1),(3,'Gerard Company','12332145632112',NULL,NULL,3);
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
  CONSTRAINT `fk_corner_created` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corner`
--

LOCK TABLES `corner` WRITE;
/*!40000 ALTER TABLE `corner` DISABLE KEYS */;
INSERT INTO `corner` VALUES (1,'Smartphone','Smartphone-1','Domaine de présentation des Smartphones disponibles',2,1468963497660,1468963716442,'logo-1.jpg'),(2,'Tablettes','Tablettes-2','Tablettes prêtes à l\'emploi',2,1468963725108,1468963797422,'logo-2.jpg'),(4,'demo decat','demo-decat-4','',3,1474979119058,1474979126643,'');
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
INSERT INTO `corner_keyword` VALUES (1,1),(2,1),(1,2),(2,2),(1,5),(1,8),(2,8),(2,19),(4,19),(4,29);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `external_workflows`
--

LOCK TABLES `external_workflows` WRITE;
/*!40000 ALTER TABLE `external_workflows` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `general_setting`
--

LOCK TABLES `general_setting` WRITE;
/*!40000 ALTER TABLE `general_setting` DISABLE KEYS */;
INSERT INTO `general_setting` VALUES (1,'seo:title','Decathlon');
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
INSERT INTO `home_carousel` VALUES (1,NULL,NULL,'carousel-1.png',NULL,NULL,NULL,NULL,NULL,1);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_resource`
--

LOCK TABLES `item_resource` WRITE;
/*!40000 ALTER TABLE `item_resource` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
INSERT INTO `keyword` VALUES (8,'Apple'),(19,'Huawei'),(2,'Lenovo'),(1,'Samsung'),(5,'Sony'),(29,'test');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
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
  `id_role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission_role`
--

LOCK TABLES `permission_role` WRITE;
/*!40000 ALTER TABLE `permission_role` DISABLE KEYS */;
INSERT INTO `permission_role` VALUES ('CREATE_PRODUCT',2),('EDIT_USER_CORNER_OWN',2),('CREATE_ARTICLE',4),('EDIT_ARTICLE_OWN',4),('REQUEST_PUBLICATION_ARTICLE',4),('UNPUBLISH_ARTICLE_OWN',4),('DELETE_ARTICLE_OWN',4),('EDIT_USER_CORNER_OWN',4),('ASSIGNMENTS_LIST_BASIC_INFO',1),('OFFER_PRODUCT',2),('REQUEST_PUBLICATION_PRODUCT_OWN',2),('PUBLISH_PRODUCT_OWN',2),('UNPUBLISH_PRODUCT_OWN',2),('EDIT_PRODUCT',2),('CREATE_PRODUCT',5),('EDIT_PRODUCT',5),('CHANGE_PRODUCT_OWNER',5),('REQUEST_PUBLICATION_PRODUCT',5),('VALIDATE_PUBLICATION_PRODUCT',5),('PUBLISH_PRODUCT',5),('UNPUBLISH_PRODUCT',5),('DELETE_PRODUCT',5),('CREATE_BUNDLE',5),('EDIT_BUNDLE',5),('EDIT_BUNDLE_OWN',5),('REQUEST_PUBLICATION_BUNDLE',5),('PUBLISH_BUNDLE',5),('UNPUBLISH_BUNDLE',5),('DELETE_BUNDLE',5),('DELETE_BUNDLE_OWN',5),('CREATE_STOCK',5),('EDIT_STOCK',5),('REQUEST_PUBLICATION_STOCK',5),('VALIDATE_PUBLICATION_STOCK',5),('PUBLISH_STOCK',5),('UNPUBLISH_STOCK',5),('DELETE_STOCK',5),('CREATE_CORNER',5),('EDIT_CORNER',5),('DELETE_CORNER',5),('EDIT_USER_CORNER',5),('USERVOICE_LIVE_CHAT',5),('VIEW_ALL_FOLLOW_UPS',5),('CREATE_ASSIGNMENT',5),('EDIT_ASSIGNMENT',5),('REQUEST_VALIDATION_ASSIGNMENT',5),('VALIDATE_ASSIGNMENT',5),('CANCEL_PENDING_ASSIGNMENT',5),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',5),('ASSIGNMENTS_LIST_ALL_INFO',5),('ASSIGNMENTS_LIST_BASIC_INFO',5),('EDIT_ARTICLE',3),('VALIDATE_PUBLICATION_ARTICLE',3),('PUBLISH_ARTICLE',3),('UNPUBLISH_ARTICLE',3),('DELETE_ARTICLE',3),('CREATE_PRODUCT',3),('EDIT_PRODUCT',3),('CHANGE_PRODUCT_OWNER',3),('REQUEST_PUBLICATION_PRODUCT',3),('VALIDATE_PUBLICATION_PRODUCT',3),('PUBLISH_PRODUCT',3),('UNPUBLISH_PRODUCT',3),('DELETE_PRODUCT',3),('OFFER_PRODUCT',3),('CREATE_BUNDLE',3),('EDIT_BUNDLE_OWN',3),('PUBLISH_BUNDLE_OWN',3),('UNPUBLISH_BUNDLE_OWN',3),('DELETE_BUNDLE_OWN',3),('CREATE_CORNER',3),('EDIT_CORNER',3),('DELETE_CORNER',3),('EDIT_USER_CORNER',3),('CREATE_ROLES',3),('EDIT_ROLES_PERMISSION',3),('EDIT_USER_ROLE',3),('READ_USERS',3),('READ_USERS_DETAILS',3),('VALIDATE_USERS',3),('CREATE_USER',3),('EDIT_USER',3),('EDIT_GENERAL_SETTINGS',3),('VIEW_ALL_ASSIGNMENTS',3),('CREATE_ASSIGNMENT',3),('EDIT_ASSIGNMENT',3),('EDIT_ASSIGNMENT_OWN',3),('REQUEST_VALIDATION_ASSIGNMENT',3),('REQUEST_VALIDATION_ASSIGNMENT_OWN',3),('VALIDATE_ASSIGNMENT',3),('VALIDATE_ASSIGNMENT_OWN',3),('CANCEL_PENDING_ASSIGNMENT',3),('CANCEL_PENDING_ASSIGNMENT_OWN',3),('VIEW_ASSIGNED_ASSIGNMENT_TO_USER',3),('VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',3),('ASSIGNMENTS_LIST_ALL_INFO',3),('ASSIGNMENTS_LIST_BASIC_INFO',3),('VIEW_ALL_FOLLOW_UPS',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'test avec John','test-avec-John-1','MobileApp','deleted','','','A description here',1,1468847102614,1468847573965,NULL,'',NULL,NULL,'',NULL,'','',NULL,'ae7372e4e5f6-334f-e536-4f51-79dde0c86776',1,NULL),(2,'Change product','Change-product-2','MobileApp','deleted','','','A description here',1,1468848961084,1468849189397,NULL,'',NULL,NULL,'',NULL,'','',1448,'d7d383c9d1be-37e5-dc1a-be8c-64b5f8326d30',1,NULL),(3,'Moto G4 Plus','Moto-G4-Plus-3','MaterialNDevice','published','Juin 2016','Concentrez-vous sur l\'essentiel','<p>Même s\'il n\'est plus signé par Motorola, mais par Lenovo Mobile désormais, le Moto G4 porte en lui le même souffle que le tout premier de la série. Il propose en effet de s\'attaquer au segment des phablettes low-cost, avec une dotation technique et un tarif quasi équivalent.</p>',1,1468848977085,1474921415164,NULL,'',5,NULL,'',NULL,'','',1449,'2eb202224375-fadc-0516-7878-94f666d869cb',1,NULL),(4,'Donnez un nom à votre produit!','Donnez-un-nom-a-votre-produit!4','MobileApp','deleted','','','A description here',1,1468849205106,1468849421970,NULL,'',NULL,NULL,'',NULL,'','',NULL,'b2bf0ad0b68d-018f-f7ab-2de7-2765980747d8',1,NULL),(5,'Change the name','Change-the-name-5','MobileApp','deleted','','','A description here',1,1468849504365,1468849887717,NULL,'',NULL,NULL,'',NULL,'','',NULL,'eb542184bf76-91ec-7014-c8bd-0e0b41f412b5',1,NULL),(6,'PRODUCT - LINE','PRODUCT--LINE-6','Line','deleted','','','A description here',2,1474560553918,1474561040165,NULL,'',6,NULL,'',NULL,'','',NULL,'9b4de706134d-98a5-ba35-aac4-2b7205f72616',NULL,NULL),(7,'titre produit de démo','titre-produit-de-demo-7','MobileApp','published','','kljrezjrh','<p>hA description here</p>',3,1474979171658,1474979269282,NULL,'',NULL,NULL,'',NULL,'','',NULL,'c057a3715578-b687-6f85-7b5d-8ea44468fbee',1,NULL);
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
INSERT INTO `product_available_feature` VALUES ('PRODUCT_FEATURES',3),('PRODUCT_RESOURCES',3),('PRODUCT_SUMMARY',3),('PRODUCT_SUMMARY',6),('PRODUCT_SUMMARY',7);
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
INSERT INTO `product_corner` VALUES (3,1,0),(7,1,0);
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
INSERT INTO `product_feature` VALUES (3,1,'Deux types de mise au point','<p>Deux technologies de mise au point automatique, laser et à détection de phase (PDAF), vous garantissent de ne plus jamais manquer une photo.</p>'),(3,2,'Empreinte digitale','<p>Il vous suffit de toucher le lecteur d’empreintes digitales pour activer votre smartphone et le déverrouiller. Contrairement à d’autres téléphones, le Moto G Plus reconnaît votre empreinte digitale quelle que soit la façon dont vous le tenez.</p>'),(3,3,'Expérience Android à l’état pur','<p>Un smartphone plus rapide.</p><p>Stimulez vos performances grâce à une version d’Android™ pure et sans couches logicielles. Sans éléments superflus pour vous ralentir, le Moto G4 Plus vous permet de passer à la vitesse supérieure.</p>');
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
INSERT INTO `product_keyword` VALUES (3,2),(7,2);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_link`
--

LOCK TABLES `product_link` WRITE;
/*!40000 ALTER TABLE `product_link` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_timeline_step_executors`
--

LOCK TABLES `product_timeline_step_executors` WRITE;
/*!40000 ALTER TABLE `product_timeline_step_executors` DISABLE KEYS */;
INSERT INTO `product_timeline_step_executors` VALUES (1,'user',2,2,3),(2,'user',2,3,3),(3,'user',2,4,3),(4,'user',2,2,7),(5,'user',2,3,7),(6,'user',2,4,7);
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource`
--

LOCK TABLES `resource` WRITE;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
INSERT INTO `resource` VALUES (2,3,'image/jpeg','2.jpg',NULL,NULL,'moto_g4_plus_box-640x569.jpg',NULL,'moto_g4_plus_box'),(3,3,'image/jpeg','3.jpg',1,NULL,'MotoGPlus.jpg',NULL,'MotoGPlus'),(4,3,'image/jpeg','4.jpg',2,NULL,'Lenovo Moto G4.jpg',NULL,'Lenovo Moto G4'),(5,3,'image/jpeg','5.jpg',NULL,NULL,'motorola-moto-g4-plus-2.jpg',NULL,'motorola-moto-g4-plus-2.jpg'),(6,6,'image/jpeg','6.jpg',NULL,NULL,'phone-line-e1382014967939.jpg',NULL,'phone-line-e1382014967939.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (3,'admin'),(4,'author'),(1,'customer'),(2,'editor'),(5,'fleet manager');
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,3,15,161132400),(2,3,2,1515452400),(3,3,2,1518130800);
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline`
--

LOCK TABLES `timeline` WRITE;
/*!40000 ALTER TABLE `timeline` DISABLE KEYS */;
INSERT INTO `timeline` VALUES (1,'line','assignment-order'),(2,'device','assignment-order'),(3,'sav_vol_and_perte','follow-up'),(4,'sav_casse','follow-up'),(5,'line_suspension','follow-up'),(6,'chgt_options','follow-up'),(7,'sim_card','follow-up');
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
  KEY `id_timeline` (`id_timeline`),
  CONSTRAINT `timeline_steps_ibfk_1` FOREIGN KEY (`id_timeline`) REFERENCES `timeline` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline_steps`
--

LOCK TABLES `timeline_steps` WRITE;
/*!40000 ALTER TABLE `timeline_steps` DISABLE KEYS */;
INSERT INTO `timeline_steps` VALUES (1,'tl_step_bdc_sent',0,1,1),(2,'tl_step_released_sim_to_user',1,2,1),(3,'tl_step_activated_line',1,3,1),(4,'tl_step_fleet_updated_line_1',1,4,1),(5,'tl_step_bdc_envoye',0,1,2),(6,'tl_step_fleet_updated_device_1',0,2,2),(7,'tl_step_order_received',1,3,2),(8,'tl_step_fleet_updated_device_2',1,4,2),(9,'tl_step_intregation_request',1,5,2),(10,'tl_step_integration_achieved',1,6,2),(11,'tl_step_released_terminal_to_user',1,7,2),(12,'tl_step_user_confirms_reception',1,8,2),(13,'device_wiping',0,1,3),(14,'line_suspension',1,1,3),(15,'device_preparation',1,1,3),(16,'device_delivery',1,1,3),(17,'device_diagnostic',1,2,4),(18,'device_repair',1,2,4),(19,'device_delivery',1,2,4),(20,'request_in_progress',1,3,5),(21,'line_suspended',1,3,5),(22,'request_in_progress',1,4,6),(23,'new_options_active',1,4,6),(24,'sim_code_created',1,5,7),(25,'sim_received',1,5,7),(26,'sim_activated',1,5,7);
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
  CONSTRAINT `fk_user_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'bob@intuiteev.io','ab266fcf5ce45fe51f8b770bec3d2631f20e019eb81e8a9d6c09688ded42b099',1468844327684,'Bob','FRANCE_Lille','Lille','local',NULL,'F',2,'','',NULL,NULL,NULL),(2,'dede_decathlon@intuiteev.io','c0d36ffae5749313da9553cec19f3cb98b2ea9bf3f4e92dcfe071c4d72a2ae29',1468844327684,'Dede','Dede','Admin','local',NULL,'F',3,'','',NULL,NULL,NULL),(3,'gerard@intuiteev.io','408717c3330187fddb0cb63bf706b6a1ca2820bcf5ca4ebe6112dbe8e34a0884',1468943622460,'Gerard Grard','Gerard','Fleet','local',1468943622460,'M',5,'','',NULL,NULL,NULL);
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
  CONSTRAINT `fk_user_validated` FOREIGN KEY (`validated_by`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
INSERT INTO `user_profile` VALUES (1,'Lenovo','Lenovo-1',NULL,1468967636879,NULL,NULL,1,1),(2,'Dede','Dede-2','Lorem Ipsum',NULL,NULL,2,1,2),(3,'Gerard Corner','Gerard-Grard-Corner-3',NULL,NULL,NULL,2,1,3);
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


-- Dump completed on 2016-12-13 17:05:49
