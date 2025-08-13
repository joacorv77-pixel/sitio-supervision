const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Le dice a Eleventy que los archivos .html son válidos y debe copiarlos.
  // También procesará nuestro archivo .njk.
  eleventyConfig.setTemplateFormats([
    "njk",
    "html",
    "md" 
  ]);

  // Copia la carpeta 'admin' completa al sitio final.
  eleventyConfig.addPassthroughCopy("admin");

  // Formato de fecha legible (ej. 13 de agosto, 2025)
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).setLocale('es').toLocaleString(DateTime.DATE_FULL);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
