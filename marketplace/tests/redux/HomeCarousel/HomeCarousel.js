import { expect } from 'chai';
import { Map, List,fromJS } from 'immutable';
import { ACTION } from 'actions';
import { makeStore } from 'Core/store';

const store = makeStore();

//REDUCER UNIT TESTING
//TEST CASES: Set home slides, Get one page detail
describe('Home Carousel Reducers', () => {
  let aFakeSlides = [
    {
      'id':56,
      'title':'<h2>This is a Title of Slide 56</h2>',
      'mainPicture': 'slide1Home.jpg',
      'content': '<h1>Content Title</h1><br/><p>This is the content text of Slide 56</p>',
      'detailPagePicture': 'slide1Home.jpg',
      'buttonText': 'En savoir plus',
      'link':'/detail/1',
      'secondaryPictureALT': 'HP Mobility for work ALT Secondary of Slide 56',
      'mainPictureALT': 'HP Mobility ALT Main of Slide 56',
      'active':1
    },
    {
      'id':57,
      'title':'<h2>This is a Title of Slide 57</h2>',
      'mainPicture': 'slide2Home.jpg',
      'content': '<h1>Content Title</h1><br/><p>This is the content text of Slide 57</p>',
      'detailPagePicture': 'slide1Home.jpg',
      'buttonText': 'En savoir plus',
      'link':'/detail/2',
      'secondaryPictureALT': 'HP Mobility for work ALT Secondary of Slide 57',
      'mainPictureALT': 'HP Mobility ALT Main of Slide 57',
      'active':1
    },
    {
      'id':58,
      'title':'<h2>This is a Title of Slide 58</h2>',
      'mainPicture': 'slide4Home.jpg',
      'content': '<h1>Content Title</h1><br/><p>This is the content text of Slide 58</p>',
      'detailPagePicture': 'slide1Home.jpg',
      'buttonText': 'En savoir plus',
      'link':'/detail/4',
      'secondaryPictureALT': 'HP Mobility for work ALT Secondary of Slide 58',
      'mainPictureALT': 'HP Mobility ALT Main of Slide 58',
      'active':1
    }
  ];

  let oFakeDetailPage =     {
    'id':3,
    'title':'<h2>Actualité Mobilité chez HP ?</h2>',
    'mainPicture': 'slide3Home.jpg',
    'content': null,
    'detailPagePicture': 'slide3Home.jpg',
    'buttonText': 'En savoir plus',
    'link':'/http://h30657.www3.hp.com/t5/HP-BusinessNow-France/bg-p/HPBusinessReadyFrance/label-name/Mobilité?labels=Mobilité',
    'secondaryPictureALT': 'HP Mobility for work Actualité Mobilité chez HP ?',
    'mainPictureALT': 'HP Mobility for work',
    'active':1
  };

  it('Set home slides', () => {

    store.dispatch({
      type: ACTION.HOME_CAROUSEL.GETALLSLIDES,
      slides: aFakeSlides
    });

    expect(store.getState().get('homeCarousel')).to.equal(fromJS(aFakeSlides));

  });

  it('Get one page detail', () => {

    store.dispatch({
      type: ACTION.HOME_CAROUSEL.GETPAGE,
      page: oFakeDetailPage
    });

    expect(store.getState().get('homeCarousel')).to.equal(fromJS(oFakeDetailPage));

  });
});
