import Models from 'helpers/repositories';

export function getKeywords(req, res) {
  const { Keyword } = Models(req.tenant);
  Keyword.findAll()
    .then(keywords => {
      res.json(
        keywords.map(p => p.parse()
      )
    );
  }).catch(err => {
    console.error(err);
  });
}

export function getPlatforms(req, res) {
  const { Platform } = Models(req.tenant);
  Platform.findAll()
    .then(platforms => {
      res.json(
        platforms.map(p => p.parse()
        )
      );
    }).catch(err => {
      console.error(err);
    });
}
export function getCompanies(req, res) {
  const { Company } = Models(req.tenant);
  Company.findAll()
    .then(companies => {
      res.json(
        companies.map(p => p.parse()
        )
      );
    }).catch(err => {
      console.error(err);
    });
}
