const mix = require('laravel-mix');
const lodash = require("lodash");
const fs = require('fs');

const folder = {
  src        : "resources/", // source files
  dist       : "public/", // build files
  dist_assets: "public/assets/" //build assets files
};

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// uglify
mix.options({
  uglify: {
    uglifyOptions: {
      mangle: {
        keep_fnames: true,
      }
    }
  }
});


//done

// disabling source maps
mix.sourceMaps(false);
var third_party_js = [
  "./node_modules/jquery/dist/jquery.js",
  "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
  "./node_modules/simplebar/dist/simplebar.min.js",
  "./node_modules/node-waves/dist/waves.min.js",
  "./node_modules//waypoints/lib/jquery.waypoints.min.js",
  "./node_modules/jquery.counterup/jquery.counterup.min.js",
  "./node_modules/feather-icons/dist/feather.js",
];

//copying required assets
mix.combine(third_party_js, folder.dist_assets + "js/vendor.js").minify(folder.dist_assets + "js/vendor.js");

//done

// // optional third party assets
var third_party_assets = {
  css_js: [
    {
      "name": "fullcalendar-list",
      "assets": [
        "./node_modules/@fullcalendar/core/main.min.js",
        "./node_modules/@fullcalendar/core/main.min.css",
        "./node_modules/@fullcalendar/bootstrap/main.min.js",
        "./node_modules/@fullcalendar/bootstrap/main.min.css",
        "./node_modules/@fullcalendar/daygrid/main.min.js",
        "./node_modules/@fullcalendar/daygrid/main.min.css",
        "./node_modules/@fullcalendar/timegrid/main.min.js",
        "./node_modules/@fullcalendar/timegrid/main.min.css",
        "./node_modules/@fullcalendar/list/main.min.js",
        "./node_modules/@fullcalendar/list/main.min.css",
        "./node_modules/@fullcalendar/interaction/main.min.js",
      ]
    },
    {
      "name": "admin-resources",
      "assets": [
        "./node_modules/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js",
        "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js",
        "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-us-merc-en.js",
        "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-in-mill-en.js",
        "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-au-mill-en.js",
        "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-us-il-chicago-mill-en.js",
        "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-uk-mill-en.js",
        "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-ca-lcc-en.js",
        "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-europe-mill-en.js",
        "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-fr-merc-en.js",
        "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-es-merc.js",
        "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-es-mill.js",
        "./node_modules/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css"
      ]
    },
    {
      "name": "rwd-table",
      "assets": [
        "./node_modules/admin-resources/rwd-table/rwd-table.min.js",
        "./node_modules/admin-resources/rwd-table/rwd-table.min.css"
      ]
    },
    {
      "name": "animate.css",
      "assets": [
        "./node_modules/animate.css/animate.min.css"
      ]
    },
    {
      "name": "apexcharts",
      "assets": [
        "./node_modules/apexcharts/dist/apexcharts.min.js"
      ]
    },
    {
      "name": "autonumeric",
      "assets": [
        "./node_modules/autonumeric/dist/autoNumeric.min.js"
      ]
    },
    {
      "name": "bootstrap-colorpicker",
      "assets": [
        "./node_modules/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css",
        "./node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js",
      ]
    },
    {
      "name": "bootstrap-datepicker",
      "assets": [
        "./node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css",
        "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
      ]
    },
    {
      "name"  : "bootstrap-maxlength",
      "assets": [
      "./node_modules/bootstrap-maxlength/dist/bootstrap-maxlength.min.js",
      ]
    },
    {
      "name": "bootstrap-select",
      "assets": [
        "./node_modules/bootstrap-select/dist/css/bootstrap-select.min.css",
        "./node_modules/bootstrap-select/dist/js/bootstrap-select.min.js",
      ]
    },
    {
      "name": "bootstrap-table",
      "assets": [
        "./node_modules/bootstrap-table/dist/bootstrap-table.min.css",
        "./node_modules/bootstrap-table/dist/bootstrap-table.min.js",
      ]
    },
    {
      "name": "bootstrap-touchspin",
      "assets": [
        "./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css",
        "./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js",
      ]
    },
    {
      "name": "c3",
      "assets": [
        "./node_modules/c3/c3.min.css",
        "./node_modules/c3/c3.min.js",
      ]
    },
    {
      "name": "chart.js",
      "assets": [
        "./node_modules/chart.js/dist/Chart.bundle.min.js",
      ]
    },
    {
      "name": "chartist",
      "assets": [
        "./node_modules/chartist/dist/chartist.min.css",
        "./node_modules/chartist/dist/chartist.min.js",
      ]
    },
    {
      "name": "chartist-plugin-tooltips",
      "assets": [
        "./node_modules/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css",
        "./node_modules/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js",
      ]
    },
    {
      "name": "clockpicker",
      "assets": [
        "./node_modules/clockpicker/dist/bootstrap-clockpicker.min.css",
        "./node_modules/clockpicker/dist/bootstrap-clockpicker.min.js",
      ]
    },
    {
      "name": "cropper",
      "assets": [
        "./node_modules/cropper/dist/cropper.min.css",
        "./node_modules/cropper/dist/cropper.min.js",
      ]
    },
    {
      "name": "d3",
      "assets": [
        "./node_modules/d3/dist/d3.min.js"
      ]
    },
    {
      "name": "datatables",
      "assets": [
        "./node_modules/datatables.net/js/jquery.dataTables.min.js",
        "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.min.js",
        "./node_modules/datatables.net-bs4/css/dataTables.bootstrap4.min.css",
        "./node_modules/datatables.net-responsive/js/dataTables.responsive.min.js",
        "./node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js",
        "./node_modules/datatables.net-buttons/js/dataTables.buttons.min.js",
        "./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js",
        "./node_modules/datatables.net-buttons/js/buttons.html5.min.js",
        "./node_modules/datatables.net-buttons/js/buttons.flash.min.js",
        "./node_modules/datatables.net-buttons/js/buttons.print.min.js",
        "./node_modules/datatables.net-keytable/js/dataTables.keyTable.min.js",
        "./node_modules/datatables.net-select/js/dataTables.select.min.js",
        "./node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.css",
        "./node_modules/datatables.net-buttons-bs4/css/buttons.bootstrap4.css",
        "./node_modules/datatables.net-select-bs4/css/select.bootstrap4.css",
      ]
    },
    {
      "name": "devbridge-autocomplete",
      "assets": [
        "./node_modules/devbridge-autocomplete/dist/jquery.autocomplete.min.js",
      ]
    },
    {
      "name": "dragula",
      "assets": [
        "./node_modules/dragula/dist/dragula.min.css",
        "./node_modules/dragula/dist/dragula.min.js",
      ]
    },
    {
      "name": "dropify",
      "assets": [
        "./node_modules/dropify/dist/css/dropify.min.css",
        "./node_modules/dropify/dist/js/dropify.min.js",
      ]
    },
    {
      "name": "dropzone",
      "assets": [
        "./node_modules/dropzone/dist/min/dropzone.min.css",
        "./node_modules/dropzone/dist/min/dropzone.min.js",
      ]
    },
    {
      "name": "flatpickr",
      "assets": [
        "./node_modules/flatpickr/dist/flatpickr.min.css",
        "./node_modules/flatpickr/dist/flatpickr.min.js",
      ]
    },
    {
      "name": "flot-charts",
      "assets": [
        "./node_modules/flot-charts/jquery.flot.js",
        "./node_modules/flot-charts/jquery.flot.time.js",
        "./node_modules/flot-charts/jquery.flot.resize.js",
        "./node_modules/flot-charts/jquery.flot.pie.js",
        "./node_modules/flot-charts/jquery.flot.selection.js",
        "./node_modules/flot-charts/jquery.flot.stack.js",
        "./node_modules/flot-charts/jquery.flot.crosshair.js",
      ]
    },
    {
      "name": "flot-orderbars",
      "assets": [
        "./node_modules/flot-orderbars/js/jquery.flot.orderBars.js",
      ]
    },
    {
      "name": "footable",
      "assets": [
        "./node_modules/footable/dist/footable.all.min.js",
      ]
    },
    {
      "name": "gmaps",
      "assets": [
        "./node_modules/gmaps/gmaps.min.js",
      ]
    },
    {
      "name": "hopscotch",
      "assets": [
        "./node_modules/hopscotch/dist/css/hopscotch.min.css",
        "./node_modules/hopscotch/dist/js/hopscotch.min.js",
      ]
    },
    {
      "name": "ion-rangeslider",
      "assets": [
        "./node_modules/ion-rangeslider/css/ion.rangeSlider.min.css",
        "./node_modules/ion-rangeslider/js/ion.rangeSlider.min.js",
      ]
    },
    {
      "name": "jquery-countdown",
      "assets": [
        "./node_modules/jquery-countdown/dist/jquery.countdown.min.js",
      ]
    },
    {
      "name": "jquery-datatables-checkboxes",
      "assets": [
        "./node_modules/jquery-datatables-checkboxes/js/dataTables.checkboxes.min.js",
      ]
    },
    {
      "name": "jquery-knob",
      "assets": [
        "./node_modules/jquery-knob/dist/jquery.knob.min.js",
      ]
    },
    {
      "name": "jquery-mapael",
      "assets": [
        "./node_modules/jquery-mapael/js/jquery.mapael.min.js",
        "./node_modules/jquery-mapael/js/maps/world_countries.min.js",
        "./node_modules/jquery-mapael/js/maps/usa_states.min.js",

      ]
    },
    {
      "name": "jquery-mask-plugin",
      "assets": [
        "./node_modules/jquery-mask-plugin/dist/jquery.mask.min.js",
      ]
    },
    {
      "name": "jquery-mockjax",
      "assets": [
        "./node_modules/jquery-mockjax/dist/jquery.mockjax.min.js",
      ]
    },
    {
      "name": "jquery-sparkline",
      "assets": [
        "./node_modules/jquery-sparkline/jquery.sparkline.min.js",
      ]
    },
    {
      "name": "jquery-tabledit",
      "assets": [
        "./node_modules/jquery-tabledit/jquery.tabledit.min.js",
      ]
    },
    {
      "name": "jquery-toast-plugin",
      "assets": [
        "./node_modules/jquery-toast-plugin/dist/jquery.toast.min.js",
        "./node_modules/jquery-toast-plugin/dist/jquery.toast.min.css",
      ]
    },
    {
      "name": "jquery.flot.tooltip",
      "assets": [
        "./node_modules/jquery.flot.tooltip/js/jquery.flot.tooltip.min.js",
      ]
    },
    {
      "name": "jquery.scrollto",
      "assets": [
        "./node_modules/jquery.scrollto/dist/jquery.scrollTo.min.js",
      ]
    },
    {
      "name": "jsgrid",
      "assets": [
        "./node_modules/jsgrid/dist/jsgrid.min.js",
        "./node_modules/jsgrid/dist/jsgrid.min.css",
      ]
    },
    {
      "name": "ladda",
      "assets": [
        "./node_modules/ladda/dist/spin.min.js",
        "./node_modules/ladda/dist/ladda.min.js",
        "./node_modules/ladda/dist/ladda.min.css",
      ]
    },
    {
      "name": "magnific-popup",
      "assets": [
        "./node_modules/magnific-popup/dist/jquery.magnific-popup.min.js",
        "./node_modules/magnific-popup/dist/magnific-popup.css",
      ]
    },
    {
      "name": "minimist",
      "assets": [
        "./node_modules/minimist/index.js",
      ]
    },
    {
      "name": "mohithg-switchery",
      "assets": [
        "./node_modules/mohithg-switchery/dist/switchery.min.js",
        "./node_modules/mohithg-switchery/dist/switchery.min.css",
      ]
    },
    {
      "name": "moment",
      "assets": [
        "./node_modules/moment/min/moment.min.js",
      ]
    },
    {
      "name": "morris.js06",
      "assets": [
        "./node_modules/morris.js06/morris.min.js",
      ]
    },
    {
      "name": "multiselect",
      "assets": [
        "./node_modules/multiselect/css/multi-select.css",
        "./node_modules/multiselect/js/jquery.multi-select.js",
      ]
    },
    {
      "name": "nestable2",
      "assets": [
        "./node_modules/nestable2/dist/jquery.nestable.min.css",
        "./node_modules/nestable2/dist/jquery.nestable.min.js",
      ]
    },
    {
      "name": "parsleyjs",
      "assets": [
        "./node_modules/parsleyjs/dist/parsley.min.js",
      ]
    },
    {
      "name": "pdfmake",
      "assets": [
        "./node_modules/pdfmake/build/pdfmake.min.js",
        "./node_modules/pdfmake/build/vfs_fonts.js",
      ]
    },
    {
      "name": "peity",
      "assets": [
        "./node_modules/peity/jquery.peity.min.js",
      ]
    },
    {
      "name": "popper.js",
      "assets": [
        "./node_modules/popper.js/dist/popper.min.js",
        "./node_modules/popper.js/dist/popper-utils.min.js",
      ]
    },
    {
      "name": "quill",
      "assets": [
        "./node_modules/quill/dist/quill.min.js",
        "./node_modules/quill/dist/quill.core.css",
        "./node_modules/quill/dist/quill.snow.css",
        "./node_modules/quill/dist/quill.bubble.css",
      ]
    },
    {
      "name": "raphael",
      "assets": [
        "./node_modules/raphael/raphael.min.js",
      ]
    },
    {
      "name": "run",
      "assets": [
        "./node_modules/run/run.js",
      ]
    },
    {
      "name": "select2",
      "assets": [
        "./node_modules/select2/dist/js/select2.min.js",
        "./node_modules/select2/dist/css/select2.min.css",
      ]
    },
    {
      "name": "selectize",
      "assets": [
        "./node_modules/selectize/dist/js/standalone/selectize.min.js",
        "./node_modules/selectize/dist/css/selectize.bootstrap3.css",
      ]
    },
    {
      "name": "simplebar",
      "assets": [
        "./node_modules/simplebar/dist/simplebar.min.js",
        "./node_modules/simplebar/dist/simplebar.min.css",
      ]
    },
    {
      "name": "sortablejs",
      "assets": [
        "./node_modules/sortablejs/Sortable.min.js",
      ]
    },
    {
      "name": "summernote",
      "assets": [
        "./node_modules/summernote/dist/summernote-bs4.min.js",
        "./node_modules/summernote/dist/summernote-bs4.min.css",
      ]
    },
    {
      "name": "sweetalert2",
      "assets": [
        "./node_modules/sweetalert2/dist/sweetalert2.min.js",
        "./node_modules/sweetalert2/dist/sweetalert2.min.css",
      ]
    },
    {
      "name": "tablesaw",
      "assets": [
        "./node_modules/tablesaw/dist/tablesaw.js",
        "./node_modules/tablesaw/dist/tablesaw.css",
      ]
    },
    {
      "name": "tippy.js",
      "assets": [
        "./node_modules/tippy.js/dist/tippy.all.min.js",
      ]
    }, {
      "name": "toastr",
      "assets": [
        "./node_modules/toastr/dist/toastr.min.js",
        "./node_modules/toastr/dist/toastr.min.css",
      ]
    },
    {
      "name": "twitter-bootstrap-wizard",
      "assets": [
        "./node_modules/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js",
      ]
    },
    {
      "name": "x-editable",
      "assets": [
        "./node_modules/x-editable/dist/bootstrap3-editable/css/bootstrap-editable.css",
        "./node_modules/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.min.js",
      ]
    },
  ]
};

//copying third party assets
lodash(third_party_assets).forEach(function (assets, type) {
  if (type == "css_js") {
    lodash(assets).forEach(function (plugin) {
      var name = plugin['name'],
        assetlist = plugin['assets'],
        css = [],
        js = [];
      lodash(assetlist).forEach(function (asset) {
        var ass = asset.split(',');
        for (let i = 0; i < ass.length; ++i) {
          if (ass[i].substr(ass[i].length - 3) == ".js") {
            js.push(ass[i]);
          } else {
            css.push(ass[i]);
          }
        };
      });
      if (js.length > 0) {
        mix.combine(js, folder.dist_assets + "/libs/" + name + "/" + name + ".min.js");
      }
      if (css.length > 0) {
        mix.combine(css, folder.dist_assets + "/libs/" + name + "/" + name + ".min.css");
      }
    });
  }
});

// copy all fonts -
var out = folder.dist_assets + "fonts";
mix.copyDirectory(folder.src + "fonts/", out);

// copy all images - 
out = folder.dist_assets + "images";
mix.copyDirectory(folder.src + "images/", out);

// copy all data - 
out = folder.dist_assets + "data";
mix.copyDirectory(folder.src + "data/", out);

// scss
var getFiles = function (dir) {
  // get all 'files' in this directory
  // filter directories
  return fs.readdirSync(dir).filter(file => {
    return fs.statSync(`${dir}/${file}`).isFile();
  });
};

// compile scss
getFiles(folder.src + "scss").forEach(function (filepath) {
  var fileName = filepath.substring(0, filepath.lastIndexOf('.')) || filepath;
  mix.sass(folder.src + "scss/" + filepath, folder.dist_assets + "css").options({ processCssUrls: mix.inProduction() }).minify(folder.dist_assets + "css/" + fileName + ".css");
});

//copying demo pages related assets
getFiles(folder.src + "js/pages").forEach(function (filepath) {
  mix.js(folder.src + "js/pages/" + filepath, folder.dist_assets + "js/pages/" + filepath);
});

// app theme file
mix.combine([folder.src + 'js/layout.js', folder.src + 'js/app.js'], folder.dist_assets + "js/app.js").minify(folder.dist_assets + "js/app.js");