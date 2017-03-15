export const EDITOR = {
  ALL: `
  SELECT
       user_profile.id_user AS id_user,
       user_profile.title AS title,
       user_profile.alias AS alias,
       user_profile.description AS description,
       user_profile.last_update AS last_update,
       user_profile.image AS image,
       user_profile.validated_by AS validated_by,
       user_profile.activated AS activated,
       user_profile.id_company AS id_company,
       CONCAT('[',
               COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                                   product.id,
                                   ', "name": "',
                                   REPLACE(COALESCE(product.name, ''),
                                       '"',
                                       '\\''),
                                   '", "highlight_product": ',
                                   COALESCE(editor_highlight_product.highlight_product_order,
                                           '""'),
                                   '}')
                           SEPARATOR ','),
                       ''),
               ']') AS products,
       CONCAT('[',
               COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                                   bundle.id,
                                   ', "title": "',
                                   REPLACE(COALESCE(bundle.title, ''),
                                       '"',
                                       '\\''),
                                   '"}')
                           SEPARATOR ','),
                       ''),
               ']') AS bundles
   FROM
       (((user_profile
       LEFT JOIN product ON ((user_profile.id_user = product.created_by)))
       LEFT JOIN bundle ON ((user_profile.id_user = bundle.created_by_id)))
       LEFT JOIN editor_highlight_product ON ((editor_highlight_product.id_product = product.id)))
   GROUP BY user_profile.id_user
  `,
};
