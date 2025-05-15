import React from 'react';

const InstagramFeed = () => {
  return (
    <div
      style={{ marginTop: "50px", marginBottom: "50px" }}
      dangerouslySetInnerHTML={{
        __html: `
          <div class="tagembed-widget" style="width:100%;height:100%" data-widget-id="2171321" data-tags="false"  view-url="https://widget.tagembed.com/2171321"></div>
        `,
      }}
    />
  );
};

export default InstagramFeed;
