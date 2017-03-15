CREATE schema IF NOT EXISTS `marketplace_mobility`;
USE marketplace_mobility;
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
