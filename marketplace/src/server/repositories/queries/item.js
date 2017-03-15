export const ITEM_QUERIES = {
  BUNDLE: {
    DELETE_CORNER: ' DELETE FROM bundle_corner WHERE id_bundle = ? ',
    DELETE_KEYWORD: ' DELETE FROM bundle_keyword WHERE id_bundle = ? ',
    DELETE_LINK: ' DELETE FROM bundle_link where id_bundle = ? ',
    GET_ALL: ` SELECT
    bundle.id AS id,
    bundle.title AS title,
    bundle.alias AS alias,
    bundle.state_id AS state_id,
    bundle.logo_id AS logo_id,
    bundle.baseline AS baseline,
    bundle.description AS description,
    bundle.created_by_id AS created_by_id,
    bundle.creation_date AS creation_date,
    bundle.last_update AS last_update,
    bundle.publication_date AS publication_date,
    CONCAT(\'[\', COALESCE(GROUP_CONCAT(DISTINCT CONCAT(\'{\"id\":\', corner.id, \', \"name\":\"\', REPLACE(corner.name, \'\"\', \'\\\"\'), \'\"}\') SEPARATOR \',\'), \'\'), \']\') AS corners,
    CONCAT(\'[\', COALESCE(GROUP_CONCAT(DISTINCT CONCAT(\'{\"id\": \', keyword.id, \', \"name\":\"\', REPLACE(keyword.name, \'\"\', \'\\\"\'), \'\"}\') SEPARATOR \',\'), \'\'), \']\') AS keywords,
    CONCAT(\'[\',COALESCE(GROUP_CONCAT(DISTINCT CONCAT(\'{\"id\":\', logo_resource.id, \', \"url\":\"\', REPLACE(logo_resource.name, \'\"\', \'\\\'\'), \'\",\"type\":\"\', REPLACE(logo_resource.type, \'\"\', \'\\\'\'), \'\"}\') SEPARATOR \',\'), \'\'), \']\') AS logo_info,
    CONCAT(\'[\',COALESCE(GROUP_CONCAT(DISTINCT CONCAT(\'{\"id\":\', available_resources.id, \', \"name\":\"\', REPLACE(available_resources.name, \'\"\', \'\\\'\'), \'\",\"original_name\":\"\', REPLACE(available_resources.original_name, \'\"\', \'\\\'\'),\'\",\"show_carousel\":\"\', REPLACE(available_resources.show_carousel, \'\"\', \'\\\'\'),\'\",\"carousel_order\":\"\', REPLACE(COALESCE(available_resources.carousel_order, \'\'), \'\"\', \'\\\'\'),\'\",\"name_custom\":\"\', REPLACE(COALESCE(available_resources.name_custom,\'\'), \'\"\', \'\\\'\'),\'\",\"id_item\":\"\', REPLACE(available_resources.id_bundle, \'\"\', \'\\\'\'),\'\",\"type\":\"\', REPLACE(available_resources.type, \'\"\', \'\\\'\'), \'\"}\') SEPARATOR \',\'), \'\'), \']\') AS resources,
    CONCAT(\'[\',COALESCE(GROUP_CONCAT(DISTINCT CONCAT(\'{\"id\":\', product.id, \', \"show_order\":\"\', REPLACE(bundle_component.show_order, \'\"\', \'\\\'\'), \'\",\"alias\":\"\', REPLACE(product.alias, \'\"\', \'\\\'\'), \'\", \"name\":\"\', REPLACE(product.name, \'\"\', \'\\\'\'), \'\", \"logo\":\"\', REPLACE(component_logo.name, \'\"\', \'\\\'\'), \'\"}\') SEPARATOR \',\'), \'\'), \']\') AS components,
    CONCAT(\'[\',COALESCE(GROUP_CONCAT(DISTINCT CONCAT(\'{\"show_order\":\', components_with_no_logo.show_order, \', \"id\":\', REPLACE(components_with_no_logo.id_comp, \'\"\', \'\\\"\'), \', \"alias\":\"\', REPLACE(components_with_no_logo.comp_alias, \'\"\', \'\\\'\'), \'\", \"name\":\"\', REPLACE(components_with_no_logo.name, \'\"\', \'\\\"\'), \'\"}\') SEPARATOR \',\'), \'\'), \']\') AS components_without_logo
    FROM bundle
    LEFT JOIN (
			SELECT bundle_resource.id_bundle as id_bundle, bundle_resource.show_carousel as show_carousel, bundle_resource.carousel_order as carousel_order, item_resource.*
      FROM bundle_resource, item_resource
      WHERE bundle_resource.id_resource = item_resource.id ) AS available_resources ON available_resources.id_bundle = bundle.id
    LEFT JOIN bundle_corner ON bundle_corner.id_bundle = bundle.id
    LEFT JOIN corner ON corner.id = bundle_corner.id_corner
    LEFT JOIN bundle_keyword ON bundle_keyword.id_bundle = bundle.id
    LEFT JOIN keyword ON keyword.id = bundle_keyword.id_keyword
    LEFT JOIN bundle_resource ON bundle_resource.id_bundle = bundle.id
    LEFT JOIN item_resource AS logo_resource ON logo_resource.id = bundle.logo_id
    LEFT JOIN bundle_component ON bundle_component.id_bundle = bundle.id
    LEFT JOIN product ON product.id = bundle_component.id_component
    LEFT JOIN resource AS component_logo ON component_logo.id = product.logo
    LEFT JOIN (
				SELECT product.id as id_comp , product.alias as comp_alias, product.name as name, bundle_component.show_order as show_order FROM product, bundle_component
				WHERE product.id = bundle_component.id_component AND product.logo IS NULL
        ) AS components_with_no_logo ON components_with_no_logo.id_comp = bundle_component.id_component `,
    GET_ALL_FAKE: ' SELECT * FROM bundle ',
    INSERT_CORNER: ' INSERT INTO bundle_corner SET ? ',
    INSERT_KEYWORD: ' INSERT INTO bundle_keyword SET ? ',
    INSERT_LINK: ' INSERT INTO bundle_link SET ? ',
  },
  // CONCAT(\'[\',COALESCE(GROUP_CONCAT(DISTINCT CONCAT(\'{\"id\":\', assignment_order.id, \', \"id_po_system\":\"\', COALESCE(assignment_order.id_po_system,\'\'), \'\",   \"id_owner\":\"\', COALESCE(assignment_order.id_owner,\'\'), \'\",  \"id_product\":\"\', COALESCE(assignment_order.id_product,\'\'), \'\", \"id_state\":\"\', COALESCE(assignment_order.id_state,\'\'), \'\", \"editor_title\":\"\', COALESCE(assignment_order.editor_title,\'\'), \'\", \"alias\":\"\', COALESCE(assignment_order.alias,\'\'), \'\", \"description\":\"\', COALESCE(assignment_order.description,\'\'), \'\", \"logo\":\"\', COALESCE(assignment_order.logo,\'\'), \'\", \"id_bundle\":\"\', COALESCE(assignment_order.id_bundle,\'\'), \'\", \"name\":\"\', COALESCE(assignment_order.name,\'\'), \'\"}\') SEPARATOR \',\'), \'\'), \']\') AS items

  ASSIGNMENT: {
    GET_ALL: ` SELECT
    assignment.id AS id,
    assignment.description AS description,
    assignment.alias AS alias,
    assignment.id_state AS id_state,
    assignment.created_at AS created_at,
    assignment.assigned_at AS assigned_at,
    assignment.id_workflow_instance AS id_workflow_instance,
    assignment.id_po_system AS id_po_system,
    assignment.id_assigned_by as id_assigned_by,
    assignment.id_assigned_to as id_assigned_to,
    CONCAT(\'[\',COALESCE(GROUP_CONCAT(DISTINCT CONCAT(\'{\"id\":\', assignment_order.id, \', \"id_gdp\":\', COALESCE(assignment_order.id_gdp, 0), \', \"id_assignment\":\', assignment_order.id_assignment, \', \"completed\":\"\', COALESCE(assignment_order.completed,\'\'), \'\", \"options\":\"\', COALESCE(assignment_order.options,\'\'), \'\", \"id_po_system\":\"\', COALESCE(assignment_order.id_po_system,\'\'), \'\", \"id_product\":\"\', COALESCE(assignment_order.id_product,\'\'), \'\", \"id_state\":\"\', COALESCE(assignment_order.id_state,\'\'), \'\",  \"id_bundle\":\"\', COALESCE(assignment_order.id_bundle,\'\'), \'\"}\') SEPARATOR \',\'), \'\'), \']\') AS items
    FROM assignment
    LEFT JOIN assignment_order ON assignment_order.id_assignment = assignment.id`,
  },
  GET_ASSIGNED_PRODUCT_INFO: ` SELECT product.name AS name,
   COALESCE(product.description, '') AS description,
   editor.title AS editor_title,
   COALESCE(logo.name,'/public/images/placeholders/product.png') AS logo
   FROM ((product
   LEFT JOIN resource AS logo ON (product.logo = logo.id))
   WHERE product.id = ?`,
  GET_ASSIGNED_BUNDLE_INFO: `SELECT bundle.title AS name,
  COALESCE(bundle.description, '') AS description,
  editor.title AS editor_title,
  COALESCE(logo.name,'/public/images/placeholders/product.png') AS logo
  FROM ((bundle
  LEFT JOIN resource AS logo ON (bundle.logo_id = logo.id))
  WHERE bundle.id = ? `,
  PRODUCT: {
    GET_ALL: `SELECT * FROM (SELECT product.id AS id,
    product.name AS name,
    product.alias AS alias,
    product.type AS type,
    product.state AS state,
    product.version AS version,
    product.baseline AS baseline,
    product.description AS description,
    product.created_by AS created_by,
    product.creation_date AS creation_date,
    product.last_update AS last_update,
    product.publication_date AS publication_date,
    product.submit_observation AS submit_observation,
    product.logo AS logo,
    product.id_assignment_option_form AS id_assignment_option_form,
                               product.specification AS specification,
                               product.editor_description AS editor_description,
                               product.editor_logo AS editor_logo,
                               product.editor_homepage AS editor_homepage,
                               product.editor_legal_mentions AS editor_legal_mentions,
                               product.id_billing,
                               product.billing_token,
                               concat(
                                 '[',
                                  COALESCE (
                                    group_concat(
                                      DISTINCT concat( '
                                        {
                                          "name": "', product_link.name, '",
                                          "url":"', REPLACE ( product_link.url, '"', '\\"' ), '",
                                          "image":"', REPLACE ( product_link.image, '"', '\\"' ), '"
                                        }'
                                      ) SEPARATOR ','
                                    ), ''
                                  ),
                                  ']'
                                ) AS links,
                                concat(
                                  '[',
                                  COALESCE (
                                    group_concat(
                                      DISTINCT concat(
                                        '{
                                          "id":', corner.id, ',
                                          "name":"', REPLACE (corner.name, '"', '\\"'), '"
                                        }'
                                      ) SEPARATOR ','
                                    ), ''
                                  ),
                                  ']'
                                ) AS corners,
                                concat(
                                  '[',
                                  COALESCE (
                                    group_concat(
                                      DISTINCT concat(
                                        '{
                                          "order":', product_feature.order, ',
                                          "name":"', product_feature.name, '",
                                          "description": "', REPLACE ( product_feature.description, '"', '\\"' ), '"
                                        }'
                                      ) SEPARATOR ', '
                                    ), ''
                                  ),
                                  ']'
                                ) AS features,
                                concat(
                                  '[',
                                  COALESCE (
                                    group_concat(
                                      DISTINCT concat(
                                        '{
                                          "id": ', keyword.id, ',
                                          "name":"', REPLACE (keyword.name, '"', '\\"'), '"
                                        }'
                                      ) SEPARATOR ','
                                    ), ''
                                  ),
                                  ']'
                                ) AS keywords,
                                concat(
                                  '[',
                                  COALESCE (
                                    group_concat(
                                      DISTINCT concat(
                                        '{
                                          "id": ', language.id, ',
                                          "name": "', REPLACE ( COALESCE (language.name, ''), '"', '\\"' ), '",
                                          "abbreviation": "', REPLACE ( language.abbreviation, '"', '\\"' ), '"
                                        }'
                                      ) SEPARATOR ','
                                    ), ''
                                  ),
                                  ']'
                                ) AS languages,
                                concat(
                                  '[',
                                  COALESCE (
                                    group_concat(
                                      DISTINCT concat(
                                        '{
                                          "id": ', resource.id, ',
                                          "id_product": ', product.id, ',
                                          "name":"', REPLACE ( COALESCE (resource.name, ''), '"', '\\"' ), '",
                                          "type":"', resource.type, '",
                                          "home_order":', REPLACE ( COALESCE ( resource.home_order, 'null' ), '"', '\\"' ), ',
                                          "is_hidden":', REPLACE ( COALESCE (resource.is_hidden, 0), '"', '\\"' ), ',
                                          "original_name":"', REPLACE ( COALESCE ( resource.original_name, '' ), '"', '\\"' ), '",
                                          "name_custom":"', REPLACE ( COALESCE ( resource.name_custom, '' ), '"', '\\"' ), '",
                                          "creation_date":"', COALESCE ( resource.creation_date, '' ), '"
                                        }'
                                      ) SEPARATOR ','
                                    ), ''
                                  ),
                                  ']'
                                ) AS resources,
                                concat(
                                  '[',
                                  COALESCE (
                                    group_concat(
                                      DISTINCT concat(
                                        '"',product_available_feature.id_feature,'"'
                                      ) SEPARATOR ','
                                    ), ''
                                  ),
                                  ']'
                                ) AS available_features,
                               COALESCE (
                                 group_concat(
                                   DISTINCT concat(
                                     '{
                                       "id":"', COALESCE ( product.id_timeline, 'null' ), '",
                                       "name":"', timeline.name, '"
                                      }'
                                    ) SEPARATOR ','
                                  ), ''
                                ) AS timeline,
                                concat(
                                  '[',
                                  COALESCE (
                                    group_concat(
                                      DISTINCT concat(
                                        '{
                                          "id_step": ', timelineSteps.id_step, ',
                                          "manual": ', timelineSteps.step_manual, ',
                                          "executor_type":"', timelineSteps.executor_type, '",
                                          "step_name":"', timelineSteps.step_name, '",
                                          "id_executor":"', COALESCE ( timelineSteps.id_executor, 'null' ), '"
                                        }'
                                      ) SEPARATOR ','
                                    ), ''
                                  ),
                                  ']'
                                ) AS tl_steps,
                                concat(
                                  '[',
                                  COALESCE (
                                    group_concat(
                                      concat(
                                        '{
                                          "id_follow_up_task":"', COALESCE ( product_follow_ups.id_follow_up_task, 'null' ), '",
                                          "id_timeline":"', COALESCE ( product_follow_ups.id_timeline, 'null' ), '",
                                          "id_step":"', COALESCE ( product_follow_ups.id_step, 'null' ), '",
                                          "include_product_owner":"', COALESCE ( product_follow_ups.include_product_owner, 'null' ), '",
                                          "role_ids":"', COALESCE ( product_follow_ups.role_ids, 'null' ), '",
                                          "user_ids":"', COALESCE ( product_follow_ups.user_ids, 'null' ), '"
                                         }'
                                      ) SEPARATOR ','
                                    ), ''
                                  ),
                                  ']'
                                ) AS follow_ups
                                FROM
                                product
                                  LEFT JOIN product_feature ON product_feature.id_product = product.id
                                  LEFT JOIN product_corner ON product_corner.id_product = product.id
                                  LEFT JOIN corner ON corner.id = product_corner.id_corner
                                  LEFT JOIN product_keyword ON product_keyword.id_product = product.id
                                  LEFT JOIN keyword ON keyword.id = product_keyword.id_keyword
                                  LEFT JOIN product_language ON product_language.id_product = product.id
                                  LEFT JOIN language ON language.id = product_language.id_language
                                  LEFT JOIN resource ON resource.id_product = product.id
                                  LEFT JOIN product_link ON product_link.id_product = product.id
                                  LEFT JOIN product_available_feature ON product_available_feature.id_product = product.id
                                  LEFT JOIN product_follow_ups ON product_follow_ups.id_product = product.id
                                  LEFT JOIN timeline ON timeline.id = product.id_timeline
                                  LEFT JOIN (
										                  SELECT p.id as id_product, ptse.executor_type, ptse.id_executor, ts.id as id_step, ts.name as step_name, ts.manual as step_manual
										                  FROM product as p, product_timeline_step_executors as ptse, timeline_steps as ts, timeline as t
										                  WHERE p.id = ptse.id_product AND ptse.id_timeline_step = ts.id AND p.id_timeline = t.id
                                  ) as timelineSteps ON timelineSteps.id_product = product.id  `,
    SET_TIMELINE_STEP: 'INSERT into product_timeline_step_executors(executor_type, id_executor, id_timeline_step, id_product) VALUES(?,?,?,)',
  },
  TIMELINE: {
    ALL: 'SELECT * ',
  },
};
