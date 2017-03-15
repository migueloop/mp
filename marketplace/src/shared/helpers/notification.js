import { NOTIFICATION } from 'helpers/constants';

export const getNotifcationUrl = notification => {
  switch (notification.type) {
    case NOTIFICATION.TYPE.PUBLICATION_REQUEST_PRODUCT:
      return `/admin/content/products?productId=${notification.id_subject}`;
    case NOTIFICATION.TYPE.PUBLICATION_REQUEST_BUNDLE:
      return `/admin/content/bundles?bundleId=${notification.id_subject}`;
    case NOTIFICATION.TYPE.PUBLICATION_REQUEST_ASSIGNMENT:
      return `/admin/assignments/draft?assignmentId=${notification.id_subject}`;
    case NOTIFICATION.TYPE.TIMELINE_ACTION_ASSIGNMENT_ORDER:
      return `/admin/assignments/in-progress?assignmentOrderId=${notification.id_subject}`;
    default:
      return '/admin';
  }
};

const getSubjectNameSafe = (list, notification, property) => {
  return list && list.length > 0 && notification.id_subject
  && list.find(x => x.id == notification.id_subject) && list.find(x => x.id == notification.id_subject)[property];
};

export const getNotificationSubjectName = data => {
  const { products, bundles, assignments, assignmentOrders, notification } = data;
  switch (notification.type) {
    // TODO: improve this logic so it's safer
    case NOTIFICATION.TYPE.PUBLICATION_REQUEST_PRODUCT:
      return getSubjectNameSafe(products, notification, 'name');
    case NOTIFICATION.TYPE.PUBLICATION_REQUEST_BUNDLE:
      return getSubjectNameSafe(bundles, notification, 'title');
    case NOTIFICATION.TYPE.PUBLICATION_REQUEST_ASSIGNMENT:
      return getSubjectNameSafe(assignments, notification, 'id_po_system');
    case NOTIFICATION.TYPE.TIMELINE_ACTION_ASSIGNMENT_ORDER:
      return getSubjectNameSafe(assignmentOrders, notification, 'id_subject');
    default:
      return 'default name';
  }
};
