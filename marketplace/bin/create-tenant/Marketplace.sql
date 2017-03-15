-- MySQL dump 10.13  Distrib 5.6.24, for Win64 (x86_64)
--
-- Host: localhost    Database: marketplace
-- ------------------------------------------------------
-- Server version	5.6.27-log

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

drop schema if exists `%DATABASE%`;

CREATE SCHEMA IF NOT EXISTS `%DATABASE%` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `%DATABASE%` ;

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
  CONSTRAINT `fk_company_created` FOREIGN KEY (`created_by`) REFERENCES `user_profile` (`id_user`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
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
  CONSTRAINT `fk_company_activity_field` FOREIGN KEY (`id_company`) REFERENCES `company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_activity_field_company` FOREIGN KEY (`id_activity_field`) REFERENCES `activity_field` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
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
  `logo` VARCHAR(50) DEFAULT NULL,
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
  KEY `fk_user_corner_idx` (`id_user`),
  KEY `fk_user_validated_idx` (`validated_by`),
  KEY `fk_user_company_idx` (`id_company`),
  UNIQUE KEY `alias_editor_UNIQUE` (`alias`),
  CONSTRAINT `fk_user_company` FOREIGN KEY (`id_company`) REFERENCES `company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_corner` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_validated` FOREIGN KEY (`validated_by`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_profile` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
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
  `type` enum('MobileApp','SaaS','MaterialNDevice','Service') DEFAULT NULL,
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `alias_UNIQUE` (`alias`),
  KEY `fk_user_product_idx` (`created_by`),
  KEY `product_state_key` (`state`),
  CONSTRAINT `fk_product_logo` FOREIGN KEY (`logo`) REFERENCES `resource` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_product_editor_logo` FOREIGN KEY (`editor_logo`) REFERENCES `resource` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_product_specification` FOREIGN KEY (`specification`) REFERENCES `resource` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_product_editor` FOREIGN KEY (`created_by`) REFERENCES `user_profile` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
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
-- Table structure for table `product_corner`
--

DROP TABLE IF EXISTS `product_corner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_corner` (
  `id_product` int(11) NOT NULL,
  `id_corner` int(11) NOT NULL,
  `highlight_product` int(11) DEFAULT 0,
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (3,'admin'),(1,'customer'),(2,'editor');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
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
  `id_role` int(11) DEFAULT '1' NOT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `contact_mail` varchar(45) DEFAULT NULL,
  `token` varchar(400) DEFAULT NULL,
  `social_id` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `social_UNIQUE` (`social_id`),
  KEY `fk_user_role_idx` (`id_role`),
  CONSTRAINT `fk_user_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
--  Article Feature PATCH
--

insert into role set name = "author";


--
-- Table structure for table `item_state`
--

DROP TABLE IF EXISTS `item_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_state` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `state` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `state_UNIQUE` (`state` ASC));
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_state`
--

LOCK TABLES `item_state` WRITE;
/*!40000 ALTER TABLE `item_state` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_state` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `item_resource`
--

DROP TABLE IF EXISTS `item_resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_resource` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(100) NULL DEFAULT NULL,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  `original_name` VARCHAR(100) NULL DEFAULT NULL,
  `name_custom` VARCHAR(100) NULL DEFAULT NULL,
  `creation_date` BIGINT(32) NULL DEFAULT NULL,
  `is_hidden` TINYINT(1) NULL DEFAULT NULL,
  `home_order` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- Dumping data for table `item_resource`
--
LOCK TABLES `item_resource` WRITE;
/*!40000 ALTER TABLE `item_resource` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--


DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `alias` varchar(55) DEFAULT NULL,
  `baseline` varchar(225) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `summary` text DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `creation_date` bigint(32) NOT NULL,
  `last_update` bigint(32) DEFAULT NULL,
  `publication_date` bigint(32) DEFAULT NULL,
  `state` INT DEFAULT NULL,
  `logo` INT DEFAULT NULL,
  `main_picture` INT DEFAULT NULL,
  `editor_information` INT DEFAULT NULL,
  `type` ENUM('Article', 'Interview', 'WhiteBook')  DEFAULT 'Article',
  `editor_homepage` VARCHAR(150)  DEFAULT NULL,
  `editor_legal_mentions` VARCHAR(150)  DEFAULT NULL,
  `editor_description` TEXT  DEFAULT NULL,
  `editor_logo` INT(11)  DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_article_editor_idx` (`created_by`),
  KEY `fk_article_item_state_idx` (`state`),
  KEY `fk_article_logo_idx` (`logo`),
  KEY `fk_article_main_picture_idx` (`main_picture`),
  KEY `fk_article_editor_logo_idx` (`editor_logo`),
  CONSTRAINT `fk_article_editor` FOREIGN KEY (`created_by`) REFERENCES `user_profile` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_article_item_state` FOREIGN KEY (`state`) REFERENCES `item_state` (`id`)  ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_article_logo` FOREIGN KEY (`logo`) REFERENCES `item_resource` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_article_main_picture` FOREIGN KEY (`main_picture`) REFERENCES `item_resource` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_article_editor_logo` FOREIGN KEY (`editor_logo`) REFERENCES `item_resource` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


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
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_article` INT(11) NOT NULL,
  `url` VARCHAR(255) NULL DEFAULT NULL,
  `image` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_article_idx` (`id_article` ASC),
  CONSTRAINT `fk_article_link` FOREIGN KEY (`id_article`)  REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
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
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_article` INT(11) NOT NULL,
  `id_resource` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_article_resource_idx` (`id_article` ASC),
  INDEX `fk_resource_article_idx` (`id_resource` ASC),
  CONSTRAINT `fk_article` FOREIGN KEY (`id_article`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_resource` FOREIGN KEY (`id_resource`) REFERENCES `item_resource` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE
     OR REPLACE ALGORITHM = UNDEFINED
    DEFINER = `root`@`localhost`
    SQL SECURITY DEFINER
VIEW `editors` AS
    SELECT
        `user_profile`.`id_user` AS `id_user`,
        `user_profile`.`title` AS `title`,
        `user_profile`.`alias` AS `alias`,
        `user_profile`.`description` AS `description`,
        `user_profile`.`last_update` AS `last_update`,
        `user_profile`.`image` AS `image`,
        `user_profile`.`validated_by` AS `validated_by`,
        `user_profile`.`activated` AS `activated`,
        `user_profile`.`id_company` AS `id_company`,
        CONCAT('[',
                COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                                    `product`.`id`,
                                    ', "name": "',
                                    REPLACE(COALESCE(`product`.`name`, ''),
                                        '"',
                                        '\''),
                                    '"}')
                            SEPARATOR ','),
                        ''),
                ']') AS `keywords`,
        CONCAT('[',
                COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                                    `product`.`id`,
                                    ', "name": "',
                                    REPLACE(COALESCE(`product`.`name`, ''),
                                        '"',
                                        '\''),
                                    '", "highlight_product": ',
                                    COALESCE(`editor_highlight_product`.`highlight_product_order`,
                                            '""'),
                                    '}')
                            SEPARATOR ','),
                        ''),
                ']') AS `products`
    FROM
        ((`user_profile`
        LEFT JOIN `product` ON ((`user_profile`.`id_user` = `product`.`created_by`)))
        LEFT JOIN `editor_highlight_product` ON ((`editor_highlight_product`.`id_product` = `product`.`id`)))
    GROUP BY `user_profile`.`id_user`;


CREATE
     OR REPLACE ALGORITHM = UNDEFINED
    DEFINER = `root`@`localhost`
    SQL SECURITY DEFINER
VIEW `products` AS
    SELECT
        `product`.`id` AS `id`,
        `product`.`name` AS `name`,
        `product`.`alias` AS `alias`,
        `product`.`type` AS `type`,
        `product`.`state` AS `state`,
        `product`.`version` AS `version`,
        `product`.`baseline` AS `baseline`,
        `product`.`description` AS `description`,
        `product`.`created_by` AS `created_by`,
        `product`.`creation_date` AS `creation_date`,
        `product`.`last_update` AS `last_update`,
        `product`.`publication_date` AS `publication_date`,
        `product`.`submit_observation` AS `submit_observation`,
        `product`.`logo` AS `logo`,
        `product`.`specification` AS `specification`,
        `product`.`editor_description` AS `editor_description`,
        `product`.`editor_logo` AS `editor_logo`,
        `product`.`editor_homepage` AS `editor_homepage`,
        `product`.`editor_legal_mentions` AS `editor_legal_mentions`,
        COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"title": "',
                            `user_profile`.`title`,
                            '", "alias":"',
                            REPLACE(`user_profile`.`alias`,
                                '\"',
                                        '\\"'),
                            '"}')
                    SEPARATOR ','),
                '') AS `editor`,
        COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                            `company`.`id`,
                            ', "name":"',
                            REPLACE(`company`.`name`,
                                '\"',
                                        '\\"'),
                            '"}')
                    SEPARATOR ','),
                '') AS `company`,
        CONCAT('[',
                COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"name": "',
                                    `product_link`.`name`,
                                    '", "url":"',
                                    REPLACE(`product_link`.`url`,
                                        '\"',
                                        '\\"'),
                                    '", "image":"',
                                    REPLACE(`product_link`.`image`,
                                        '\"',
                                        '\\"'),
                                    '"}')
                            SEPARATOR ','),
                        ''),
                ']') AS `links`,
        CONCAT('[',
                COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id":',
                                    `corner`.`id`,
                                    ', "name":"',
                                    REPLACE(`corner`.`name`,
                                        '\"',
                                        '\\"'),
                                    '"}')
                            SEPARATOR ','),
                        ''),
                ']') AS `corners`,
        CONCAT('[',
                COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"order":',
                                    `product_feature`.`order`,
                                    ', "name":"',
                                    `product_feature`.`name`,
                                    '", "description": "',
                                    REPLACE(`product_feature`.`description`,
                                        '\"',
                                        '\\"'),
                                    '"}')
                            SEPARATOR ', '),
                        ''),
                ']') AS `features`,
        CONCAT('[',
                COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                                    `keyword`.`id`,
                                    ', "name":"',
                                    REPLACE(`keyword`.`name`,
                                        '\"',
                                        '\\"'),
                                    '"}')
                            SEPARATOR ','),
                        ''),
                ']') AS `keywords`,
        CONCAT('[',
                COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                                    `language`.`id`,
                                    ', "name": "',
                                    REPLACE(COALESCE(`language`.`name`, ''),
                                        '\"',
                                        '\\"'),
                                    '", "abbreviation": "',
                                    REPLACE(`language`.`abbreviation`,
                                        '\"',
                                        '\\"'),
                                    '"}')
                            SEPARATOR ','),
                        ''),
                ']') AS `languages`,
        CONCAT('[',
                COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                                    `resource`.`id`,
                                    ',"id_product": ',
                                    `product`.`id`,
                                    ', "name":"',
                                    REPLACE(COALESCE(`resource`.`name`, ''),
                                        '\"',
                                        '\\"'),
                                    '", "type":"',
                                    `resource`.`type`,
                                    '", "home_order":',
                                    REPLACE(COALESCE(`resource`.`home_order`,
                                                'null'),
                                        '\"',
                                        '\\"'),
                                    ', "is_hidden":',
                                    REPLACE(COALESCE(`resource`.`is_hidden`,
                                                0),
                                        '\"',
                                        '\\"'),
                                    ', "original_name":"',
                                    REPLACE(COALESCE(`resource`.`original_name`,
                                                ''),
                                        '\"',
                                        '\\"'),
                                    '", "name_custom":"',
                                    REPLACE(COALESCE(`resource`.`name_custom`,
                                                ''),
                                        '\"',
                                        '\\"'),
                                    '", "creation_date":"',
                                    COALESCE(`resource`.`creation_date`,
                                            ''),
                                    '"}')
                            SEPARATOR ','),
                        ''),
                ']') AS `resources`
    FROM
        (((((((((((`product`
        JOIN `user_profile` ON ((`user_profile`.`id_user` = `product`.`created_by`)))
        JOIN `company` ON ((`company`.`id` = `user_profile`.`id_company`)))
        LEFT JOIN `product_feature` ON ((`product_feature`.`id_product` = `product`.`id`)))
        LEFT JOIN `product_corner` ON ((`product_corner`.`id_product` = `product`.`id`)))
        LEFT JOIN `corner` ON ((`corner`.`id` = `product_corner`.`id_corner`)))
        LEFT JOIN `product_keyword` ON ((`product_keyword`.`id_product` = `product`.`id`)))
        LEFT JOIN `keyword` ON ((`keyword`.`id` = `product_keyword`.`id_keyword`)))
        LEFT JOIN `product_language` ON ((`product_language`.`id_product` = `product`.`id`)))
        LEFT JOIN `language` ON ((`language`.`id` = `product_language`.`id_language`)))
        LEFT JOIN `resource` ON ((`resource`.`id_product` = `product`.`id`)))
        LEFT JOIN `product_link` ON ((`product_link`.`id_product` = `product`.`id`)))
    GROUP BY `product`.`id`;



CREATE
     OR REPLACE ALGORITHM = UNDEFINED
    DEFINER = `root`@`localhost`
    SQL SECURITY DEFINER
VIEW `corners` AS
    SELECT
        `corner`.`id` AS `id`,
        `corner`.`name` AS `name`,
        `corner`.`alias` AS `alias`,
        `corner`.`description` AS `description`,
        `corner`.`created_by` AS `created_by`,
        `corner`.`creation_date` AS `creation_date`,
        `corner`.`last_update` AS `last_update`,
        `corner`.`logo` AS `logo`,
        CONCAT('[',
                COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                                    `keyword`.`id`,
                                    ', "name": "',
                                    REPLACE(COALESCE(`keyword`.`name`, ''),
                                        '"',
                                        '\''),
                                    '"}')
                            SEPARATOR ','),
                        ''),
                ']') AS `keywords`,
        CONCAT('[',
                COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                                    `product`.`id`,
                                    ', "name": "',
                                    REPLACE(COALESCE(`product`.`name`, ''),
                                        '"',
                                        '\''),
                                    '", "highlight_product": ',
                                    `product_corner`.`highlight_product`,
                                    '}')
                            SEPARATOR ','),
                        ''),
                ']') AS `products`,
                CONCAT('[',
                        COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                                            `article`.`id`,
                                            ', "title": "',
                                            REPLACE(COALESCE(`article`.`title`, ''),
                                                '"',
                                                '\''),
                                            '"}')
                                    SEPARATOR ','),
                                ''),
                        ']') AS `articles`

    FROM
        ((((((`corner`
        LEFT JOIN `corner_keyword` ON ((`corner_keyword`.`id_corner` = `corner`.`id`)))
        LEFT JOIN `keyword` ON ((`corner_keyword`.`id_keyword` = `keyword`.`id`)))
        LEFT JOIN `product_corner` ON ((`product_corner`.`id_corner` = `corner`.`id`)))
        LEFT JOIN `product` ON ((`product_corner`.`id_product` = `product`.`id`)))
        LEFT JOIN `article_corner` ON ((`article_corner`.`id_corner` = `corner`.`id`)))
        LEFT JOIN `article` ON ((`article_corner`.`id_article` = `article`.`id`)))
    GROUP BY `corner`.`id`;


INSERT INTO `item_state` (`state`) VALUES ('published');
INSERT INTO `item_state` (`state`) VALUES ('draft');
INSERT INTO `item_state` (`state`) VALUES ('deleted');
INSERT INTO `item_state` (`state`) VALUES ('pending');

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-11-26 17:05:45
