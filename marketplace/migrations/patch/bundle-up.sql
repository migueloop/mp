
CREATE TABLE IF NOT EXISTS `bundle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `baseline` VARCHAR(150) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `created_by_id` INT NOT NULL,
  `creation_date` BIGINT NOT NULL,
  `last_update` BIGINT NULL DEFAULT NULL,
  `publication_date` BIGINT NULL DEFAULT NULL,
  `state_id` INT NOT NULL,
  `alias` VARCHAR(110) NULL,
  `logo_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fx_bundle_state_idx` (`state_id` ASC),
  INDEX `fx_bundle_logo_idx` (`logo_id` ASC),
  CONSTRAINT `fx_bundle_logo` FOREIGN KEY (`logo_id`) REFERENCES `item_resource` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fx_bundle_state` FOREIGN KEY (`state_id`) REFERENCES `item_state` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
  );

  CREATE TABLE IF NOT EXISTS `bundle_component` (
    `id_bundle` INT(11) NOT NULL,
    `id_component` INT(11) NOT NULL,
    `show_order` TINYINT(1) NOT NULL DEFAULT -1 ,
    PRIMARY KEY (`id_bundle`, `id_component`, `show_order`),
    INDEX `fx_bundle_component_component_idx` (`id_component` ASC),
    CONSTRAINT `fx_bundle_component_bundle` FOREIGN KEY (`id_bundle`) REFERENCES `bundle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fx_bundle_component_component` FOREIGN KEY (`id_component`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  );


CREATE TABLE IF NOT EXISTS `bundle_resource` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_bundle` INT NOT NULL,
  `id_resource` INT NOT NULL,
  `show_carousel` TINYINT(1) NULL DEFAULT 0,
  `carousel_order` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fx_bundle_resource_bundle_idx` (`id_bundle` ASC),
  INDEX `fx_bundle_resource_resource_idx` (`id_resource` ASC),
  CONSTRAINT `fx_bundle_resource_bundle` FOREIGN KEY (`id_bundle`) REFERENCES `bundle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fx_bundle_resource_resource` FOREIGN KEY (`id_resource`) REFERENCES `item_resource` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  );


CREATE TABLE IF NOT EXISTS `bundle_keyword` (
  `id_bundle` INT NOT NULL,
  `id_keyword` INT NOT NULL,
  PRIMARY KEY (`id_bundle`, `id_keyword`),
  INDEX `fx_bundle_keyword_keyword_idx` (`id_keyword` ASC),
  CONSTRAINT `fx_bundle_keyword_bundle` FOREIGN KEY (`id_bundle`) REFERENCES `bundle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fx_bundle_keyword_keyword` FOREIGN KEY (`id_keyword`) REFERENCES `keyword` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  );

CREATE TABLE IF NOT EXISTS `bundle_corner` (
  `id_bundle` INT NOT NULL,
  `id_corner` INT NOT NULL,
  PRIMARY KEY (`id_bundle`, `id_corner`),
  INDEX `fx_bundle_corner_corner_idx` (`id_corner` ASC),
  CONSTRAINT `fx_bundle_corner_bundle` FOREIGN KEY (`id_bundle`) REFERENCES `bundle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fx_bundle_corner_corner` FOREIGN KEY (`id_corner`) REFERENCES `corner` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  );
