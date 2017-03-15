import React, { Component } from 'react';

class CommonLayout extends Component {

  static contextTypes = {}

  render() {
    const init = [];
    const clientConfig = this.props.clientConfig || {};
    if (!this.props.error) {
      init.push(<script key="initScript" src="/static/javascripts/bundle.js"></script>);
      init.push(<script key="initialJson" id="initial-state" type="text/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(this.props.state) }}></script>);
      init.push(<script key="clientConfig" id="clientConfig" type="text/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clientConfig) }}></script>);
    }
    const lang = this.props.state.v02.common.locale.language;
    const langU = lang.replace('-', '_');
    let meta = [];
    if (this.props.state.v02.common.seo.page.meta) {
      const metadata = this.props.state.v02.common.seo.page.meta;
      meta = metadata.map((m, i) => {
        if (m.name.substr(0, 3) === 'og:') {
          return <meta key={i} className="seo-metadata" property={m.name} content={m.content} />;
        }
        return <meta key={i} className="seo-metadata" name={m.name} content={m.content} />;
      });
    }

    // TODO: keep <link/> as static property read from tenant's options.json
    // Maybe keep others, such as Twitter @account...
    // TODO: icons must be defined for at least -72, -114, -128 (default) & -144
    return (
      <html lang={lang} prefix="og: http://ogp.me/ns#">
      <head>
        <meta charSet="utf-8" />
        <title id="page-title">{this.props.state.v02.common.seo.page.title}</title>
        {/* Basics
        <link rel="author" href={this.props.meta.author.url}/>
        <link rel="publisher" href={this.props.meta.publisher.url}/>
 */}
        {/* DublinCore */}
        <link rel="schema.DC" href="http://purl.org/dc/elements/1.1/" />
        <link rel="schema.DCTERMS" href="http://purl.org/dc/terms/" />
        {/* CSS */}
        <link rel="stylesheet" href="/public/stylesheets/bootstrap.min.css" />
        <link rel="stylesheet" href="/public/stylesheets/style.css" />
        {/* Viewport & MS compat */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta httpEquiv="cleartype" content="on" />
        {/* Metas (shared/Reducers/Seo)
        <meta name="description" content={this.props.seo.description}/>
        <meta name="author" content={this.props.meta.author.name}/>
        <meta name="publisher" content={this.props.meta.publisher.name}/>
        <meta name="dc.language" content={lang}/>
        <meta name="dcterms.title" content={this.props.seo.title}/>
        <meta name="dcterms.description" content={this.props.seo.description}/>
        <meta name="dcterms.type" content={this.props.seo.type_dc}/>
        <meta name="dcterms.creator" content={this.props.meta.author.name}/>
        <meta name="dcterms.publisher" content={this.props.meta.publisher.name}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content={this.props.meta.social.twitter}/>
        <meta name="twitter:creator" content={this.props.seo.twitter}/>
        <meta name="twitter:title" content={this.props.seo.title}/>
        <meta name="twitter:description" content={this.props.seo.description}/>
        <meta name="twitter:image" content={this.props.seo.cover}/>
        <meta property="og:locale" content={langU}/>
        <meta property="og:title" content={this.props.seo.title}/>
        <meta property="og:description" content={this.props.seo.description}/>
        <meta property="og:type" content={this.props.seo.type_og}/>
        <meta property="og:image" content={this.props.seo.cover}/>
        */}
        {meta}

        {/* Icons */}
        <link rel="icon" href="/public/images/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/public/images/logo.png" />
        <link rel="apple-touch-icon" href="/public/images/logo.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/public/images/logo-72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/public/images/logo-114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/public/images/logo-144.png" />
        {/* Initial state */}
        {init}
      </head>
      <body>
        <content id="react-app" dangerouslySetInnerHTML={{ __html: this.props.children }} />
      </body>
      </html>
    );
  }
}

export default CommonLayout;
