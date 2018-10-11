const HtmlTemplate = ({
  content, helmet, preloadedState,
}) => `
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
      ${helmet.meta}
      ${helmet.title}
    </head>
    <body>
      <div id="app">${content}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="client_bundle.js"></script>
    </body>
  </html>
  `;

export default HtmlTemplate;
