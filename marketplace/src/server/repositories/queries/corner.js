export const CORNER = {
  ALL: `SELECT
        corner.id AS id,
        corner.name AS name,
        corner.alias AS alias,
        corner.description AS description,
        corner.created_by AS created_by,
        corner.creation_date AS creation_date,
        corner.last_update AS last_update,
        corner.logo AS logo,
        CONCAT('[',
                COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                                    keyword.id,
                                    ', "name": "',
                                    REPLACE(COALESCE(keyword.name, ''),
                                        '"',
                                        '\\''),
                                    '"}')
                            SEPARATOR ','),
                        ''),
                ']') AS keywords,
        CONCAT('[',
                COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                                    product.id,
                                    ', "name": "',
                                    REPLACE(COALESCE(product.name, ''),
                                        '"',
                                        '\\''),
                                    '", "highlight_product": ',
                                    product_corner.highlight_product,
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
        ((((((corner
        LEFT JOIN corner_keyword ON ((corner_keyword.id_corner = corner.id)))
        LEFT JOIN keyword ON ((corner_keyword.id_keyword = keyword.id)))
        LEFT JOIN product_corner ON ((product_corner.id_corner = corner.id)))
        LEFT JOIN product ON ((product_corner.id_product = product.id and product.state="published")))
        LEFT JOIN bundle_corner ON ((bundle_corner.id_corner = corner.id)))
        LEFT JOIN bundle ON ((bundle_corner.id_bundle = bundle.id)))
    GROUP BY corner.id`,
};
