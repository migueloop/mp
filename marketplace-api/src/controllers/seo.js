import Models from 'helpers/repositories';

export function getSeoSettings(req, res) {
  const { GeneralSettings } = Models(req.tenant);
  GeneralSettings.findAll({
    where: {
      key: {
        $like: 'seo:%',
      },
    },
  })
    .then(settings => {
      res.json(
        GeneralSettings.parse(settings)
      );
    }).catch(err => {
      console.error(err);
    });
}
