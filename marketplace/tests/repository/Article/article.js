import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { init } from 'repositories/drivers/mysql';
import Promise from 'bluebird';
import ArticleRepository from 'repositories/article.js';
import Utils from '../../helpers/utils.js';

chai.use(chaiAsPromised);
chai.should();
let sTenant = 'hp';
let articlePromise = new ArticleRepository(sTenant);
let oUtils = new Utils();
let oFakeArticle = {
  title: oUtils.generateString(5,'Test Title',' DD'),
  baseline: oUtils.generateString(10, 'Test Baseline', ' DD'),
  description: oUtils.generateString(10, 'Test Description', ' DD'),
  summary: oUtils.generateString(10, 'Test Summary', ' DD'),
  created_by: 10,
  creation_date: Date.now(),
  publication_date: Date.now(),
  last_update: 0,
  state: 2
};

//  article.js UNIT TESTING
//  TEST CASES:
describe.skip('Articles', () => {

  it('Get one ', (done) => {
    articlePromise.getByUser(5).should.be.fulfilled.then( (article) => {
      done();
    });
  });


  it('Get all', (done) => {
    articlePromise.getAll().should.be.fulfilled.then( (articles) => {
      done();
    });
  });


  it('Creates one', (done) => {
    articlePromise.create(oFakeArticle).should.be.fulfilled.then( (article) => {
      done();
    });
  });


  it('Retrieve published', (done) => {
    articlePromise.getPublished().should.be.fulfilled.then((publishedArticles) => {
      done();
    });
  });


  it('Retrieve pendings', (done) => {
    articlePromise.getPendings().should.be.fulfilled.then((pendingArticles) => {
      done();
    })
  });


  it('Retrieve draft', (done) => {

    articlePromise.getDraft().should.be.fulfilled.then((draftArticles) => {
      done();
    });

  });


  it('Retrieve deleted', (done) => {

    articlePromise.getDeleted().should.be.fulfilled.then((deletedArticles) => {
      // console.log('---> DELETED: ', deletedArticles);
      done();
    });

  });


  it('Delete one', (done) => {

    //Get the first article
    articlePromise.getFirst().should.be.fulfilled.then((firstArticle) => {
      //Mark as deleted
      articlePromise.delete(firstArticle.id).should.be.fulfilled.then((deletedArticle) => {
        done();
      });
    });

  });


  it ('Demand publication', (done) => {

    //Insert one with a state different from PENDING
    articlePromise.create(oFakeArticle).should.be.fulfilled.then( (articleId) => {
      //Change state to demand publication, this is change state to PENDING
      articlePromise.demandPublication(articleId).should.be.fulfilled.then((demandedArticle) => {
        // console.log(demandedArticle);
        done();
      });
    });

  });


  it ('Publish', (done) => {

    oFakeArticle.state = 2;
    //Insert one with a state different from PENDING
    articlePromise.create(oFakeArticle).should.be.fulfilled.then( (articleId) => {
      //Change state to demand publication, this is change state to PENDING
      articlePromise.publish(articleId).should.be.fulfilled.then((publishedArticle) => {
        // console.log(publishedArticle);
        done();
      });
    });

  });


  it ('Get keywords', (done) => {
    //First get articles that have keywors
    articlePromise.getArticlesWithKeywords().should.be.fulfilled.then( (articlesWithkeywords) => {
      //If there are some, get the first to retrieve its keywords
      if (articlesWithkeywords.length > 0 ){
        articlePromise.getKeywords(articlesWithkeywords[0].id_article).should.be.fulfilled.then( (articleKeywords) => {
          done();
        });
      }
    });

  });


  it ('Get latest', (done) => {
    articlePromise.getLatest().should.be.fulfilled.then( (latestArticles) => {
          // console.log('LATEST: ', latestArticles);
          done();
    });
  });


  it ('Get Links', (done) => {
    //First get articles that have links
    articlePromise.getArticlesWithLinks().should.be.fulfilled.then( (articlesWithkeywords) => {
      //If there are some, get the first to retrieve its links
      if (articlesWithkeywords.length > 0 ){
        articlePromise.getLinks(articlesWithkeywords[0].id_article).should.be.fulfilled.then( (articleLinks) => {
          done();
        });
      }
    });

  });


  it ('Get Resources', (done) => {
    //First get articles that have links
    articlePromise.getArticlesWithResources().should.be.fulfilled.then( (articlesWithResources) => {
      //If there are some, get the first to retrieve its links
      if (articlesWithResources.length > 0 ){
        articlePromise.getResources(articlesWithResources[0].id_article).should.be.fulfilled.then( (articleResources) => {
          done();
        });
      }
    });
  });


  it('Set article keywords', (done) => {

    let nFakeArticleId = 1;
    let aFakeKeywordsIds = [{id:1},{id:2},{id:3}];

    articlePromise.setKeywords(nFakeArticleId,aFakeKeywordsIds).should.be.fulfilled.then( (insertedKeywords) => {
      done();
    });

  });


  it('Set article corners', (done) => {

    let nFakeArticleId = 2;
    let aFakeCornersIds = [{id:2, highlight_article:1},{id:3, highlight_article:1}];

    articlePromise.setCorners(nFakeArticleId,aFakeCornersIds).should.be.fulfilled.then( (insertedCorners) => {
      done();
    });

  });


  it('Update resource', (done) => {

    let aFakeResources = [
      {name_custom: oUtils.generateString(2, 'Test CustomNameResource', ' DD'), id:1},
      {name_custom: oUtils.generateString(2, 'Test CustomNameResource', ' DD'), id:2}];

    articlePromise.updateResources(aFakeResources).should.be.fulfilled.then( (updatedResources) => {
      done();
    });

  });


  it('Delete resource', (done) => {

    let oFakeResourceArticle = {id:1, resource:{id: 1}};

    //TODO: Improve this test: TAKE CARE! If we set to.be.fulfilled will throw an Error but will delete the resource
    // from the DB, because there is no file to delete in the FS. Change to to.be.fulfilled when we have files to
    // delete
    articlePromise.deleteResource(oFakeResourceArticle).should.be.rejected.then( (deletedResource) => {
      done();
    });
  });


  it('Add to corner', (done) => {

    //TODO: Improve test, when there is anocher corner with same ids created throw an error with duplicated entry
    let oFakeRelationArticleCorner = {id_article:6, id_corner:3, highlight_article:1};

    articlePromise.addToCorner(oFakeRelationArticleCorner).should.be.fulfilled.then( (cornerAdded) => {
      done();
    });

  });


  it('Add keywords string', (done) => {

    articlePromise.addKeywordString(1,'had').should.be.fulfilled.then( (addedKeyword) => {
      done();
    });

  });

});
