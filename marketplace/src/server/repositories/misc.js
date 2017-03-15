import Repository from './drivers/mysql';

export default class Locales {
  constructor(tenant) {
    this.tenant = tenant;
    this._repo = new Repository(tenant);
  }

  getPlatforms() {
    return this._repo.query('select * from platform');
  }
  getCompanies(where = '', params = []) {
    if (where.length > 0) {
      where = ` where ${where}`;
    }
    return new Promise((resolve, reject) => {
      this._repo.query(`SELECT
        \`company\`.\`id\` AS \`id\`,
        \`company\`.\`name\` AS \`name\`,
        \`company\`.\`siret\` AS \`siret\`,
        \`company\`.\`phone\` AS \`phone\`,
        \`company\`.\`usecase\` AS \`usecase\`,
        \`company\`.\`created_by\` AS \`created_by\`,
        CONCAT('[',
                COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                                    \`activity_field\`.\`id\`,
                                    ', "name": "',
                                    COALESCE(\`activity_field\`.\`name\`, ''),
                                    '"}')
                            SEPARATOR ','),
                        ''),
                ']') AS \`activity_fields\`,
        CONCAT('[',
                COALESCE(GROUP_CONCAT(DISTINCT CONCAT('{"id": ',
                                    \`platform\`.\`id\`,
                                    ', "name": "',
                                    COALESCE(\`platform\`.\`name\`, ''),
                                    '"}')
                            SEPARATOR ','),
                        ''),
                ']') AS \`platforms\`
    FROM
        ((((\`company\`
        LEFT JOIN \`company_activity_field\` ON ((\`company\`.\`id\` = \`company_activity_field\`.\`id_company\`)))
        LEFT JOIN \`activity_field\` ON ((\`activity_field\`.\`id\` = \`company_activity_field\`.\`id_activity_field\`)))
        LEFT JOIN \`company_platform\` ON ((\`company\`.\`id\` = \`company_platform\`.\`id_company\`)))
        LEFT JOIN \`platform\` ON ((\`platform\`.\`id\` = \`company_platform\`.\`id_platform\`)))`, params)
        .then(companies => {
          resolve(companies.map(company => {
            const { activity_fields, platforms, ...others } = company;
            let obj = { ...others };
            try {
              obj = {
                ...others,
                activity_fields: JSON.parse(activity_fields),
                platforms: JSON.parse(platforms),
              };
            } catch (e) {
              console.log('err getCompanies', e);
            }
            return obj;
          }));
        })
        .catch(reject);
    });
  }
  getActivityFields() {
    return this._repo.query('select * from activity_field');
  }
}
