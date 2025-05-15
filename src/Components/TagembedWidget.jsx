import { useEffect, useRef } from "react";

const TagembedWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if script already exists
    if (!document.getElementById("tagembed-script")) {
      const script = document.createElement("script");
      script.id = "tagembed-script";
      script.src = "https://widget.tagembed.com/embed.min.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already loaded, try to reinitialize (some widgets provide a method)
      // If not, you might need to reload page to fully re-init widget
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="tagembed-widget"
      style={{ width: "100%", height: "auto", margin: "auto", paddingBottom: "110px", zIndex: "1", position: "relative"}}
      data-widget-id="2171321"
      data-tags="false"
      // eslint-disable-next-line react/no-unknown-property
      view-url="https://widget.tagembed.com/2171321"
    ></div>
  );
};

export default TagembedWidget;
