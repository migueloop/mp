export default [
  {
    id: 'sav_vol_and_perte',
    // name: 'SAV - Vol & Perte',
    steps: [
      {
        id: 'device_wiping',
        manual: 0,
        // name: 'Effacement du terminal',
      },
      {
        id: 'line_suspension',
        manual: 1,
        // name: 'Suspension de la ligne',
      },
      {
        id: 'device_preparation',
        manual: 1,
        // name: 'Préparation du terminal',
      },
      {
        id: 'device_delivery',
        manual: 1,
        // name: 'Envoi du terminal',
      },
    ],
  },
  {
    id: 'sav_casse',
    // name: 'SAV - Casse',
    steps: [
      {
        id: 'device_diagnostic',
        manual: 0,
        // name: 'Diagnostic de la casse',
      },
      {
        id: 'device_repair',
        manual: 1,
        // name: 'Réparation du terminal',
      },
      {
        id: 'device_ready',
        manual: 1,
        // name: 'Réparation du terminal',
      },
      {
        id: 'sc_device_delivery',
        manual: 1,
        // name: 'Envoi du terminal',
      },
    ],
  },
  {
    id: 'line_suspension',
    // name: 'Suspension ligne',
    steps: [
      {
        id: 'ls_request_in_progress',
        manual: 1,
        // name: 'Demande en cours',
      },
      {
        id: 'line_suspended',
        manual: 1,
        // name: 'Ligne suspendue',
      },
    ],
  },
  {
    id: 'chgt_options',
    // name: 'Chgt Options',
    steps: [
      {
        id: 'request_in_progress',
        manual: 1,
        // name: 'Demande en cours',
      },
      {
        id: 'new_options_active',
        manual: 1,
        // name: 'Nouvelles options actives',
      },
    ],
  },
  {
    id: 'sim_card',
    // name: 'Carte SIM',
    steps: [
      {
        id: 'sim_code_created',
        manual: 1,
        // name: 'Cde SIM réalisée',
      },
      {
        id: 'sim_received',
        manual: 1,
        // name: 'SIM réceptionnée',
      },
      {
        id: 'sim_activated',
        manual: 1,
        // name: 'SIM activée',
      },
    ],
  },
];
