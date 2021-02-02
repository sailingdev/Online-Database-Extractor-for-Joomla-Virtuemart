/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Layout
*/


/**
 * LeftSidebar
 * @param {*} $ 
 */
!function ($) {
    'use strict';

    var LeftSidebar = function () {
        this.body = $('body'),
        this.window = $(window)
    };

    /**
     * Reset the theme
     */
    LeftSidebar.prototype._reset = function() {
        this.body.removeAttr('data-sidebar-color');
        this.body.removeAttr('data-sidebar-size');
        this.body.removeAttr('data-sidebar-showuser');
    },

    /**
     * Changes the color of sidebar
     * @param {*} color 
     */
    LeftSidebar.prototype.changeColor = function(color) {
        this.body.attr('data-sidebar-color', color);
        this.parent.updateConfig("sidebar", { "color": color });
    },

    /**
     * Changes the size of sidebar
     * @param {*} size 
     */
    LeftSidebar.prototype.changeSize = function(size) {
        this.body.attr('data-sidebar-size', size);
        this.parent.updateConfig("sidebar", { "size": size });
    },

    /**
     * Toggle User information
     * @param {*} showUser 
     */
    LeftSidebar.prototype.showUser = function(showUser) {
        this.body.attr('data-sidebar-showuser', showUser);
        this.parent.updateConfig("sidebar", { "showuser": showUser });
    },

    /**
     * Initilizes the menu
     */
    LeftSidebar.prototype.initMenu = function() {
        var self = this;

        var layout = $.LayoutThemeApp.getConfig();
        var sidebar = $.extend({}, layout ? layout.sidebar: {});
        var defaultSidebarSize = sidebar.size ? sidebar.size : 'default';

        // resets everything
        this._reset();

        // Left menu collapse
        $('.button-menu-mobile').on('click', function (event) {
            event.preventDefault();
            var sidebarSize = self.body.attr('data-sidebar-size');
            if (self.window.width() >= 993) {
                if (sidebarSize === 'condensed') {
                    self.changeSize(defaultSidebarSize);
                } else {
                    self.changeSize('condensed');
                }
            } else {
                self.changeSize(defaultSidebarSize);
                self.body.toggleClass('sidebar-enable');
            }
        });

        // sidebar - main menu
        if ($("#side-menu").length) { 
            var navCollapse = $('#side-menu li .collapse');

            // open one menu at a time only
            navCollapse.on({
                'show.bs.collapse': function (event) {
                    var parent = $(event.target).parents('.collapse.show');
                    $('#side-menu .collapse.show').not(parent).collapse('hide');
                }
            });

            // activate the menu in left side bar (Vertical Menu) based on url
            $("#side-menu a").each(function () {
                var pageUrl = window.location.href.split(/[?#]/)[0];
                if (this.href == pageUrl) {
                    $(this).addClass("active");
                    $(this).parent().addClass("menuitem-active");
                    $(this).parent().parent().parent().addClass("show");
                    $(this).parent().parent().parent().parent().addClass("menuitem-active"); // add active to li of the current link
                    
                    var firstLevelParent = $(this).parent().parent().parent().parent().parent().parent();
                    if (firstLevelParent.attr('id') !== 'sidebar-menu')
                        firstLevelParent.addClass("show");
                    
                    $(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active");
                    
                    var secondLevelParent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent();
                    if (secondLevelParent.attr('id') !== 'wrapper')
                        secondLevelParent.addClass("show");

                    var upperLevelParent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                    if (!upperLevelParent.is('body'))
                        upperLevelParent.addClass("menuitem-active");
                }
            });
        }


        // handling two columns menu if present
        var twoColSideNav = $("#two-col-sidenav-main");
        if (twoColSideNav.length) {
            var twoColSideNavItems = $("#two-col-sidenav-main .nav-link");
            var sideSubMenus = $(".twocolumn-menu-item");

            // showing/displaying tooltip based on screen size
            if (this.window.width() >= 585) {
                twoColSideNavItems.tooltip('enable');
            } else {
                twoColSideNavItems.tooltip('disable');
            }

            var nav = $('.twocolumn-menu-item .nav-second-level');
            var navCollapse = $('#two-col-menu li .collapse');

            // open one menu at a time only
            navCollapse.on({
                'show.bs.collapse': function () {
                    var nearestNav = $(this).closest(nav).closest(nav).find(navCollapse);
                    if (nearestNav.length)
                        nearestNav.not($(this)).collapse('hide');
                    else
                        navCollapse.not($(this)).collapse('hide');
                }
            });

            twoColSideNavItems.on('click', function (e) {
                var target = $($(this).attr('href'));

                if (target.length) {
                    e.preventDefault();

                    twoColSideNavItems.removeClass('active');
                    $(this).addClass('active');

                    sideSubMenus.removeClass("d-block");
                    target.addClass("d-block");

                    // showing full sidebar if menu item is clicked
                    $.LayoutThemeApp.leftSidebar.changeSize('default');
                    return false;
                }
                return true;
            });

            // activate menu with no child
            var pageUrl = window.location.href.split(/[?#]/)[0];
            twoColSideNavItems.each(function () {
                if (this.href == pageUrl) {
                    $(this).addClass('active');
                }
            });


            // activate the menu in left side bar (Two column) based on url
            $("#two-col-menu a").each(function () {
                if (this.href == pageUrl) {
                    $(this).addClass("active");
                    $(this).parent().addClass("menuitem-active");
                    $(this).parent().parent().parent().addClass("show");
                    $(this).parent().parent().parent().parent().addClass("menuitem-active"); // add active to li of the current link

                    var firstLevelParent = $(this).parent().parent().parent().parent().parent().parent();
                    if (firstLevelParent.attr('id') !== 'sidebar-menu')
                        firstLevelParent.addClass("show");

                    $(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active");

                    var secondLevelParent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent();
                    if (secondLevelParent.attr('id') !== 'wrapper')
                        secondLevelParent.addClass("show");

                    var upperLevelParent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                    if (!upperLevelParent.is('body'))
                        upperLevelParent.addClass("menuitem-active");

                    // opening menu
                    var matchingItem = null;
                    var targetEl = '#' + $(this).parents('.twocolumn-menu-item').attr("id");
                    $("#two-col-sidenav-main .nav-link").each(function () {
                        if ($(this).attr('href') === targetEl) {
                            matchingItem = $(this);
                        }
                    });
                    if (matchingItem) matchingItem.trigger('click');
                }
            });
        }
    },

    /**
     * Initilize the left sidebar size based on screen size
     */
    LeftSidebar.prototype.initLayout = function() {
        // in case of small size, activate the small menu
        if ((this.window.width() >= 768 && this.window.width() <= 1028) || this.body.data('keep-enlarged')) {
            this.changeSize('condensed');
        } else {
            this.changeSize('default');
        }
    },

    /**
     * Initilizes the menu
     */
    LeftSidebar.prototype.init = function() {
        var self = this;
        this.initMenu();
        this.initLayout();

        // on window resize, make menu flipped automatically
        this.window.on('resize', function (e) {
            e.preventDefault();
            self.initLayout();
        });
    },
  
    $.LeftSidebar = new LeftSidebar, $.LeftSidebar.Constructor = LeftSidebar
}(window.jQuery),


/**
 * Topbar
 * @param {*} $ 
 */
function ($) {
    'use strict';

    var Topbar = function () {
        this.body = $('body'),
        this.window = $(window)
    };

    /**
     * Initilizes the menu
     */
    Topbar.prototype.initMenu = function() {
        // Serach Toggle
        $('#top-search').on('click', function (e) {
            $('#search-dropdown').addClass('d-block');
        });

        // hide search on opening other dropdown
        $('.topbar-dropdown').on('show.bs.dropdown', function () {
            $('#search-dropdown').removeClass('d-block');
        });

        //activate the menu in topbar(horizontal menu) based on url
        $(".navbar-nav a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) { 
                $(this).addClass("active");
                $(this).parent().addClass("active");
                $(this).parent().parent().addClass("active");
                $(this).parent().parent().parent().addClass("active");
                $(this).parent().parent().parent().parent().addClass("active");
                var el = $(this).parent().parent().parent().parent().addClass("active").prev();
                if (el.hasClass("nav-link"))
                    el.addClass('active');
            }
        });

        // Topbar - main menu
        $('.navbar-toggle').on('click', function (event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });
    },

    /**
     * Changes the color of topbar
     * @param {*} color 
     */
    Topbar.prototype.changeColor = function(color) {
        this.body.attr('data-topbar-color', color);
        this.parent.updateConfig("topbar", { "color": color });
    },

    /**
     * Initilizes the menu
     */
    Topbar.prototype.init = function() {
        this.initMenu();
    },
    $.Topbar = new Topbar, $.Topbar.Constructor = Topbar
}(window.jQuery),


/**
 * RightBar
 * @param {*} $ 
 */
function ($) {
    'use strict';

    var RightBar = function () {
        this.body = $('body'),
        this.window = $(window)
    };

    /** 
     * Select the option based on saved config
    */
   RightBar.prototype.selectOptionsFromConfig = function() {
       var self = this;

        var config = self.layout.getConfig();
        
        if (config) {
            $('input[type=radio][name=color-scheme-mode][value=' + config.mode + ']').prop('checked', true);
            $('input[type=radio][name=width][value=' + config.width + ']').prop('checked', true);
            $('input[type=radio][name=menus-position][value=' + config.menuPosition + ']').prop('checked', true);

            $('input[type=radio][name=leftsidebar-color][value=' + config.sidebar.color + ']').prop('checked', true);
            $('input[type=radio][name=leftsidebar-size][value=' + config.sidebar.size + ']').prop('checked', true);
            $('input[type=checkbox][name=leftsidebar-user]').prop('checked', config.sidebar.showuser);

            $('input[type=radio][name=topbar-color][value=' + config.topbar.color + ']').prop('checked', true);
        }
    },
  
    /**
     * Toggles the right sidebar
     */
    RightBar.prototype.toggleRightSideBar = function() {
        var self = this;
        self.body.toggleClass('right-bar-enabled');
        self.selectOptionsFromConfig();
    },

    /**
     * Initilizes the right side bar
     */
    RightBar.prototype.init = function() {
        var self = this;

        // right side-bar toggle
        $(document).on('click', '.right-bar-toggle', function () {
            self.toggleRightSideBar();
        });

        $(document).on('click', 'body', function (e) {
            // hiding search bar
            if($(e.target).closest('#top-search').length !== 1) {
                $('#search-dropdown').removeClass('d-block');
            }
            if ($(e.target).closest('.right-bar-toggle, .right-bar').length > 0) {
                return;
            }

            if ($(e.target).closest('.left-side-menu, .side-nav').length > 0 || $(e.target).hasClass('button-menu-mobile')
                || $(e.target).closest('.button-menu-mobile').length > 0) {
                return;
            }

            $('body').removeClass('right-bar-enabled');
            $('body').removeClass('sidebar-enable');
            return;
        });

        // overall color scheme
        $('input[type=radio][name=color-scheme-mode]').change(function () {
            self.layout.changeMode($(this).val());
        });

        // width mode
        $('input[type=radio][name=width]').change(function () {
            self.layout.changeLayoutWidth($(this).val());
        });

        // menus-position
        $('input[type=radio][name=menus-position]').change(function () {
            self.layout.changeMenuPositions($(this).val());
        });

        // left sidebar color
        $('input[type=radio][name=leftsidebar-color]').change(function () {
            self.layout.leftSidebar.changeColor($(this).val());
        });

        // left sidebar size
        $('input[type=radio][name=leftsidebar-size]').change(function () {
            self.layout.leftSidebar.changeSize($(this).val());
        });

        // left sidebar user information
        $('input[type=checkbox][name=leftsidebar-user]').change(function (e) {
            self.layout.leftSidebar.showUser(e.target.checked);
        });

        // topbar
        $('input[type=radio][name=topbar-color]').change(function () {
            self.layout.topbar.changeColor($(this).val());
        });

        // reset
        $('#resetBtn').on('click', function (e) {
            e.preventDefault();
            // reset to default
            self.layout.reset();
            self.selectOptionsFromConfig();
        });
    },

    $.RightBar = new RightBar, $.RightBar.Constructor = RightBar
}(window.jQuery),


/**
 * Layout and theme manager
 * @param {*} $ 
 */

function ($) {
    'use strict';

    // Layout and theme manager

    var LayoutThemeApp = function () {
        this.body = $('body'),
        this.window = $(window),
        this.config = {},
        // styles
        this.defaultBSStyle = $("#bs-default-stylesheet"),
        this.defaultAppStyle = $("#app-default-stylesheet"),
        this.darkBSStyle = $("#bs-dark-stylesheet"),
        this.darkAppStyle = $("#app-dark-stylesheet");
    };

    /**
    * Preserves the config in memory
    */
    LayoutThemeApp.prototype._saveConfig = function(newConfig) {
        this.config = $.extend(this.config, newConfig);
        // NOTE: You can make ajax call here to save preference on server side or localstorage as well
    },

    /**
     * Update the config for given config
     * @param {*} param 
     * @param {*} config 
     */
    LayoutThemeApp.prototype.updateConfig = function(param, config) {
        var newObj = {};
        if (typeof config === 'object' && config !== null) {
            var originalParam = this.config[param];
            newObj[param] = $.extend(originalParam, config);
        } else {
            newObj[param] = config;
        }
        this._saveConfig(newObj);
    }

    /**
     * Loads the config - takes from body if available else uses default one
     */
    LayoutThemeApp.prototype.loadConfig = function() {
        var bodyConfig = JSON.parse(this.body.attr('data-layout') ? this.body.attr('data-layout') : '{}');
        
        var config = $.extend({}, {
            mode: "light",
            width: "fluid",
            menuPosition: 'fixed',
            sidebar: {
                color: "light",
                size: "default",
                showuser: false
            },
            topbar: {
                color: "dark"
            },
            showRightSidebarOnPageLoad: false
        });
        if (bodyConfig) {
            config = $.extend({}, config, bodyConfig);
        };
        return config;
    },

    /**
    * Apply the config
    */
    LayoutThemeApp.prototype.applyConfig = function() {
        // getting the saved config if available
        this.config = this.loadConfig();

        // activate menus
        this.leftSidebar.init();
        this.topbar.init();

        this.leftSidebar.parent = this;
        this.topbar.parent = this;


        // mode
        this.changeMode(this.config.mode);

        // width
        this.changeLayoutWidth(this.config.width);

        // menu position
        this.changeMenuPositions(this.config.menuPosition);

        // left sidebar
        var sidebarConfig = $.extend({}, this.config.sidebar);
        this.leftSidebar.changeColor(sidebarConfig.color);
        this.leftSidebar.changeSize(sidebarConfig.size);
        this.leftSidebar.showUser(sidebarConfig.showuser);

        // topbar
        var topbarConfig = $.extend({}, this.config.topbar);
        this.topbar.changeColor(topbarConfig.color);
    },

    /**
     * Toggle dark or light mode
     * @param {*} mode 
     */
    LayoutThemeApp.prototype.changeMode = function(mode) {
        // sets the theme
        switch (mode) {
            case "dark": {
                this.defaultBSStyle.attr("disabled", true);
                this.defaultAppStyle.attr("disabled", true);

                this.darkBSStyle.attr("disabled", false);
                this.darkAppStyle.attr("disabled", false);

                this.leftSidebar.changeColor("dark");
                this._saveConfig({ mode: mode, sidebar: $.extend({}, this.config.sidebar, { color: 'dark' }) });
                break;
            }
            default: {
                this.defaultBSStyle.attr("disabled", false);
                this.defaultAppStyle.attr("disabled", false);

                this.darkBSStyle.attr("disabled", true);
                this.darkAppStyle.attr("disabled", true);
                this.leftSidebar.changeColor("light");
                this._saveConfig({ mode: mode, sidebar: $.extend({}, this.config.sidebar, { color: 'light' }) });
                break;
            }
        }
        
        this.rightBar.selectOptionsFromConfig();
    }

    /**
     * Changes the width of layout
     */
    LayoutThemeApp.prototype.changeLayoutWidth = function(width) {
        switch (width) {
            case "boxed": {
                this.body.attr('data-layout-width', 'boxed');
                // automatically activating condensed
                $.LeftSidebar.changeSize("condensed");
                this._saveConfig({ width: width });
                break;
            }
            default: {
                this.body.attr('data-layout-width', 'fluid');
                // automatically activating provided size
                var bodyConfig = JSON.parse(this.body.attr('data-layout') ? this.body.attr('data-layout') : '{}');
                $.LeftSidebar.changeSize(bodyConfig && bodyConfig.sidebar ? bodyConfig.sidebar.size : "default");
                this._saveConfig({ width: width });
                break;
            }
        }
        this.rightBar.selectOptionsFromConfig();
    }

    /**
     * Changes menu positions
     */
    LayoutThemeApp.prototype.changeMenuPositions = function(position) {
        this.body.attr("data-layout-menu-position", position);
    }

    /**
     * Clear out the saved config
     */
    LayoutThemeApp.prototype.clearSavedConfig = function() {
        this.config = {};
    },

    /**
     * Gets the config
     */
    LayoutThemeApp.prototype.getConfig = function() {
        return this.config;
    },

    /**
     * Reset to default
     */
    LayoutThemeApp.prototype.reset = function() {
        this.clearSavedConfig();
        this.applyConfig();
    },

    /**
     * Init
     */
    LayoutThemeApp.prototype.init = function() {
        this.leftSidebar = $.LeftSidebar;
        this.topbar = $.Topbar;

        this.leftSidebar.parent = this;
        this.topbar.parent = this;

        // initilize the menu
        this.applyConfig();
    },

    $.LayoutThemeApp = new LayoutThemeApp, $.LayoutThemeApp.Constructor = LayoutThemeApp
}(window.jQuery);