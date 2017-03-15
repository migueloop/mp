import React from 'react';
import { PRODUCT, ITEM } from 'helpers/constants';

export const getProductByAlias = ((aProducts, sAlias) => aProducts.find(product => product.alias === sAlias));

export const getProductCommentsNumber = (aProductComments => {
  return aProductComments.reduce((accumulatedCommentsNumber, currentComment) => {
    return currentComment.comment ? accumulatedCommentsNumber + 1 : 0;
  }, 0);
});

export const getProductGalleryImages = ((aResources, nProductId) => {
  const aImages = aResources.filter(oResource => oResource.home_order !== null);

  aImages.sort((a, b) => +(a.home_order > b.home_order) || +(a.home_order === b.home_order) - 1);
  const aGalleryImages = aImages.map(oImage => {
    const galleryImage = {
      original: `/public/uploads/products/${nProductId}/${oImage.name}`,
      thumbnail: `/public/uploads/products/${nProductId}/${oImage.name}`,
    };
    return galleryImage;
  });
  return aGalleryImages;
});

export const getProductPlatformClass = (sProductPlatform => {
  switch (sProductPlatform) {
    case PRODUCT.PLATFORM.ANDROID:
      return 'android';
    case PRODUCT.PLATFORM.WINDOWS:
      return 'microsoft';
    case PRODUCT.PLATFORM.IOS:
      return 'ios';
    case PRODUCT.PLATFORM.WEB:
      return 'map-marker';
    default:
      return 'envelope';
  }
});

export const getProductRating = (aProductRatings => {
  return aProductRatings.reduce((accumulatedRating, currentRating, index) => {
    return { totalRatings: accumulatedRating + currentRating.rating,
      ratingsNumber: index + 1 };
  }, 0);
});

export const getProductResourceURL = ((productId, resourceFile) => `/public/uploads/products/${productId}/${resourceFile}`);

// For the front end we have three types of product:
// They are either line or device and then everything else is support.
export const getProductType = inputType => {
  let outputType = ITEM.TYPES.SUPPORT;
  if (inputType === ITEM.TYPES.MATERIAL) {
    outputType = ITEM.TYPES.MATERIAL;
  }
  if (inputType === 'MaterialNDevice') {
    outputType = 'device';
  }
  if (inputType === ITEM.TYPES.LINE) {
    outputType = ITEM.TYPES.LINE;
  }
  return outputType;
};

// export const parseTimelineStepExecutors = steps => {
//
// }
