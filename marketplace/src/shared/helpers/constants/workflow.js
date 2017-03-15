export const TEMPLATE = {
  CREATE2: {
    label: 'sncf',
    definitions: {
      assignmentId: '',
      employee: {
        name: '',
        lastname: '',
        email: '',
        phone: '',
      },
      user: {
        name: '',
        lastname: '',
        email: '',
        phone: '',
      },
    },
    timelines: {
      device: {
        orderId: '',
      },
      line: {
        orderId: '',
        product: {
          name: '',
        },
        siret: '',
      },
      email: {
        orderId: '',
      },
      emm: {
        orderId: '',
      },
    },
  },
  CREATE: {
    label: 'sncf',
    definitions: {
      assignmentId: '',
      employee: {
        name: '',
        lastname: '',
        email: '',
        phone: '',
      },
      user: {
        name: '',
        lastname: '',
        email: '',
        phone: '',
      },
    },
    timelines: [],
  },
  CREATE_TIMELINE: {
    label: 'device',
    id: 'order1',
    definitions: {
      orderId: 'order1',
      productName: '',
    },
  },
};

export const URL = {
  ENDPOINT: {
    CREATE: 'workflow/create/',
    DISPATCH: 'action/dispatch',
    TIMELINE: {
      ROOT: 'timeline',
      ACTIVE_STEP: 'activeStep',
    },
  },
};
