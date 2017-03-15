import templates from './templates';
import ReactHTMLEmail from 'react-html-email';
import React from 'react';
const {
  NewUserNotification,
  ProductPublishedNotification,
  UserValidatedNotification,
  ProductPublicationRequestedNotification,
  BundlePublicationRequestedNotification,
  AssignmentRequestedNotification,
  AssignmentValidatedNotification,
  AssignmentValidatedNotificationToSupplier,
  PoGenEmail,
 } = templates;

function render(Template, variables) {
  ReactHTMLEmail.injectReactEmailAttributes();
  return ReactHTMLEmail.renderEmail(<Template {...variables} />);
}

export function renderNewUserNotification(variables) {
  return render(NewUserNotification, variables);
}

export function renderProductPublishedNotification(variables) {
  return render(ProductPublishedNotification, variables);
}

export function renderUserValidatedNotification(variables) {
  return render(UserValidatedNotification, variables);
}

export function renderProductPublicationRequestedNotification(variables) {
  return render(ProductPublicationRequestedNotification, variables);
}

export function renderBundlePublicationRequestedNotification(variables) {
  return render(BundlePublicationRequestedNotification, variables);
}

export function renderAssignmentRequestedNotification(variables) {
  return render(AssignmentRequestedNotification, variables);
}

export function renderAssignmentValidatedNotification(variables) {
  return render(AssignmentValidatedNotification, variables);
}

export function renderAssignmentValidatedNotificationToSupplier(variables) {
  return render(AssignmentValidatedNotificationToSupplier, variables);
}

export function renderPoGenEmail(variables) {
  return render(PoGenEmail, variables);
}
