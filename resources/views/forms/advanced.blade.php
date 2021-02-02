@extends('layouts.vertical', ['title' => 'Advanced Plugins'])

@section('css')
    <!-- Plugins css -->
    <link href="{{asset('assets/libs/mohithg-switchery/mohithg-switchery.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/multiselect/multiselect.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/select2/select2.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/selectize/selectize.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/bootstrap-select/bootstrap-select.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.css')}}" rel="stylesheet" type="text/css" />
@endsection

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">
        
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                            <li class="breadcrumb-item active">Advanced</li>
                        </ol>
                    </div>
                    <h4 class="page-title">Form Advanced</h4>
                </div>
            </div>
        </div>     
        <!-- end page title -->  

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Selectize</h4>
                        <p class="sub-header">
                            Selectize is the hybrid of a textbox and <code>&lt;select&gt;</code> box. It's jQuery-based and it's useful for tagging, contact lists, country selectors, and so on.
                        </p>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group mb-3">
                                    <label>Default</label>
                                    <input type="text" id="selectize-tags" value="Awesome, Admin, Dashboard">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group mb-3">
                                    <label>Select</label> <br/>
                                    <select id="selectize-select">
                                        <option data-display="Select">Nothing</option>
                                        <option value="1">Some option</option>
                                        <option value="2">Another option</option>
                                        <option value="3" disabled>A disabled option</option>
                                        <option value="4">Potato</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Maximum Allow</label>
                                    <select id="selectize-maximum">
                                        <option value="">Select a state...</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA" selected>California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY" selected>Wyoming</option>
                                    </select>
                                    <div class="clearfix"></div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>Links</label>
                                    <select id="selectize-links"></select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group mb-3">
                                    <label>Confirm Delete Alert</label>
                                    <input type="text" id="selectize-confirm" value="awesome,neat,yeah">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group mb-3">
                                    <label>Basic Optgroups</label>
                                    <select id="selectize-optgroup" multiple placeholder="Select gear...">
                                        <option value="">Select gear...</option>
                                        <optgroup label="Climbing">
                                            <option value="pitons">Pitons</option>
                                            <option value="cams">Cams</option>
                                            <option value="nuts">Nuts</option>
                                            <option value="bolts">Bolts</option>
                                            <option value="stoppers">Stoppers</option>
                                            <option value="sling">Sling</option>
                                        </optgroup>
                                        <optgroup label="Skiing">
                                            <option value="skis">Skis</option>
                                            <option value="skins">Skins</option>
                                            <option value="poles">Poles</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group mb-3">
                                    <label>Programmatic Optgroups</label>
                                    <select id="selectize-programmatic" placeholder="Select animal..."></select>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group mb-3">
                                    <label>Optgroup Columns</label>
                                    <input type="text" id="selectize-optgroup-column" placeholder="Select cars...">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group mb-0">
                                    <label>Remove Button</label>
                                    <input type="text" class="selectize-close-btn" value="awesome,neat">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group mb-0">
                                    <label for="select-code-language">Dropdown Header</label>
                                    <select id="select-code-language" class="selectize-drop-header" placeholder="Select a language...">
                                        <option value="txt">Text</option>
                                        <option value="md">Markdown</option>
                                        <option value="html">HTML</option>
                                        <option value="php">PHP</option>
                                        <option value="python">Python</option>
                                        <option value="java">Java</option>
                                        <option value="js" selected>JavaScript</option>
                                        <option value="c#">Ruby</option>
                                        <option value="c#">VHDL</option>
                                        <option value="c#">Verilog</option>
                                        <option value="c#">C#</option>
                                        <option value="c++">C/C++</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Switchery</h4>
                        <p class="sub-header">
                            iOS 7 style switches for your checkboxes
                        </p>

                        <div class="row">
                            <div class="col-lg-6">
                                <label class="mb-1">Basic</label>
                                <p class="text-muted font-13">
                                    Add an attribute <code>
                                    data-plugin="switchery" data-color="@colors"</code>
                                    to your input element and it will be converted into switch.
                                </p>
    
                                <div class="switchery-demo">
                                    <input type="checkbox" checked data-plugin="switchery" data-color="#039cfd"/>
                                    <input type="checkbox" checked data-plugin="switchery" data-color="#f1b53d"/>
                                    <input type="checkbox" checked data-plugin="switchery" data-color="#1bb99a"/>
                                    <input type="checkbox" checked data-plugin="switchery" data-color="#ff5d48"/>
                                    <input type="checkbox" checked data-plugin="switchery" data-color="#3db9dc"/>
                                    <input type="checkbox" checked data-plugin="switchery" data-color="#2b3d51"/>
                                    <input type="checkbox" checked data-plugin="switchery" data-color="#9261c6"/>
                                    <input type="checkbox" checked data-plugin="switchery" data-color="#ff7aa3"/>
                                    <input type="checkbox" checked data-plugin="switchery" data-color="#98a6ad"/>
                                </div>

                            </div>

                            <div class="col-lg-6">
                                <label class="mb-1 mt-3 mt-lg-0">Sizes & Secondary color</label>
                                <p class="text-muted font-13">
                                    Add an attribute <code>
                                    data-size="small",data-size="large"</code>
                                    to your input element and it will be converted into switch.
                                    Add an attribute <code>
                                    data-color="@color" data-secondary-color="@color"</code>
                                    to your input element and it will be converted into switch.
                                </p>
    
                                <div class="switchery-demo">
                                    <input type="checkbox" checked data-plugin="switchery" data-color="#64b0f2" data-size="small"/>
                                    <input type="checkbox" checked data-plugin="switchery" data-color="#ff7aa3"/>
                                    <input type="checkbox" checked data-plugin="switchery" data-color="#2b3d51" data-size="large"/>
                                    <input type="checkbox" data-plugin="switchery" data-color="#1bb99a" data-secondary-color="#ff5d48" />
                                    <input type="checkbox" data-plugin="switchery" data-color="#9261c6"  data-secondary-color="#ff7aa3" checked />
                                </div>
                            </div>
                        </div>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Select2</h4>
                        <p class="sub-header">The jQuery replacement for select boxes</p>

                        <div class="row">
                            <div class="col-md-6">
                                <p class="mb-1 font-weight-bold text-muted">Single Select</p>
                                <p class="text-muted font-13">
                                    Select2 can take a regular select box like this...
                                </p>

                                <select class="form-control" data-toggle="select2">
                                    <option>Select</option>
                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                        <option value="AK">Alaska</option>
                                        <option value="HI">Hawaii</option>
                                    </optgroup>
                                    <optgroup label="Pacific Time Zone">
                                        <option value="CA">California</option>
                                        <option value="NV">Nevada</option>
                                        <option value="OR">Oregon</option>
                                        <option value="WA">Washington</option>
                                    </optgroup>
                                    <optgroup label="Mountain Time Zone">
                                        <option value="AZ">Arizona</option>
                                        <option value="CO">Colorado</option>
                                        <option value="ID">Idaho</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="UT">Utah</option>
                                        <option value="WY">Wyoming</option>
                                    </optgroup>
                                    <optgroup label="Central Time Zone">
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TX">Texas</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="WI">Wisconsin</option>
                                    </optgroup>
                                    <optgroup label="Eastern Time Zone">
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="IN">Indiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="OH">Ohio</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WV">West Virginia</option>
                                    </optgroup>
                                </select>
                            </div> <!-- end col -->

                            <div class="col-md-6">
                                <p class="mb-1 font-weight-bold text-muted mt-3 mt-md-0">Multiple Select</p>
                                <p class="text-muted font-13">
                                    Select2 can take a regular select box like this...
                                </p>

                                <select class="form-control select2-multiple" data-toggle="select2" multiple="multiple" data-placeholder="Choose ...">
                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                        <option value="AK">Alaska</option>
                                        <option value="HI">Hawaii</option>
                                    </optgroup>
                                    <optgroup label="Pacific Time Zone">
                                        <option value="CA">California</option>
                                        <option value="NV">Nevada</option>
                                        <option value="OR">Oregon</option>
                                        <option value="WA">Washington</option>
                                    </optgroup>
                                    <optgroup label="Mountain Time Zone">
                                        <option value="AZ">Arizona</option>
                                        <option value="CO">Colorado</option>
                                        <option value="ID">Idaho</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="UT">Utah</option>
                                        <option value="WY">Wyoming</option>
                                    </optgroup>
                                    <optgroup label="Central Time Zone">
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TX">Texas</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="WI">Wisconsin</option>
                                    </optgroup>
                                    <optgroup label="Eastern Time Zone">
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="IN">Indiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="OH">Ohio</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WV">West Virginia</option>
                                    </optgroup>
                                </select>
                            </div> <!-- end col -->
                        </div> <!-- end row -->

                    </div> <!-- end card-body-->
                </div> <!-- end card-->
            </div> <!-- end col-->
        </div> 
        <!-- end row-->

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Bootstrap MaxLength</h4>
                        <p class="sub-header">Uses the HTML5 attribute "maxlength" to work.</p>

                        <div class="row">
                            <div class="col-md-6">
                                <label class="mb-1 font-weight-medium text-muted">Default usage</label>
                                <p class="text-muted font-13">
                                    The badge will show up by default when the remaining chars are 10 or less:
                                </p>
                                <input type="text" class="form-control" maxlength="25" name="defaultconfig" id="defaultconfig" />

                                <div>
                                    <label class="mb-1 mt-4 font-weight-medium text-muted">Threshold value</label>
                                    <p class="text-muted font-13">
                                        Do you want the badge to show up when there are 20 chars or less? Use the <code>threshold</code> option:
                                    </p>
                                    <input type="text" maxlength="25" name="thresholdconfig" class="form-control" id="thresholdconfig" />
                                </div>

                                <div>
                                    <label class="mb-1 mt-4 font-weight-medium text-muted">All the options</label>
                                    <p class="text-muted m-b-15 font-13">
                                        Please note: if the <code>alwaysShow</code> option is enabled, the <code>threshold</code> option is ignored.
                                    </p>
                                    <input type="text" class="form-control" maxlength="25" name="alloptions" id="alloptions" />
                                </div>
                            </div> <!-- end col -->

                            <div class="col-md-6">
                                <div class="mt-3 mt-md-0">

                                    <label class="mb-1 font-weight-medium text-muted">Position</label>
                                    <p class="text-muted font-13">
                                        All you need to do is specify the <code>placement</code> option, with one of those strings. If none
                                        is specified, the positioning will be defauted to 'bottom'.
                                    </p>
                                    <input type="text" class="form-control" maxlength="25" name="placement" id="placement" />

                                    <div>
                                        <label class="mb-1 mt-4 font-weight-medium text-muted">Textareas</label>
                                        <p class="text-muted font-13">
                                            Bootstrap maxlength supports textarea as well as inputs. Even on old IE.
                                        </p>
                                        <textarea id="textarea" class="form-control" maxlength="225" rows="3" placeholder="This textarea has a limit of 225 chars."></textarea>
                                    </div>
                                </div>
                            </div> <!-- end col -->
                        </div>
                        <!-- end row -->
                    </div> <!-- end card-body -->
                </div> <!-- end card -->
            </div> <!-- end col -->
        </div>
        <!-- end row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Multiple Select</h4>
                        <p class="sub-header">Example of multiple select.</p>

                        <div class="row">
                            <div class="col-md-6">
                                <p class="mb-1 font-weight-bold text-muted">Default</p>
                                <p class="text-muted font-13">
                                    Use a <code>
                                        &lt;select multiple /&gt;</code>
                                        as your input element for a tags input, to gain true multivalue support.        
                                </p>

                                <select multiple="multiple" class="multi-select" id="my_multi_select1" name="my_multi_select1[]" data-plugin="multiselect">
                                    <option>Dallas Cowboys</option>
                                    <option>New York Giants</option>
                                    <option selected>Philadelphia Eagles</option>
                                    <option selected>Washington Redskins</option>
                                    <option>Chicago Bears</option>
                                    <option>Detroit Lions</option>
                                    <option>Green Bay Packers</option>
                                    <option>Minnesota Vikings</option>
                                    <option selected>Atlanta Falcons</option>
                                    <option>Carolina Panthers</option>
                                    <option>New Orleans Saints</option>
                                    <option>Tampa Bay Buccaneers</option>
                                    <option>Arizona Cardinals</option>
                                    <option>St. Louis Rams</option>
                                    <option>San Francisco 49ers</option>
                                    <option>Seattle Seahawks</option>
                                </select>

                            </div> <!-- end col -->

                            <div class="col-md-6">
                                <p class="mb-1 font-weight-bold text-muted mt-3 mt-md-0">Grouped Options</p>
                                <p class="text-muted font-13">
                                    Use a <code>
                                        &lt;select multiple /&gt;</code>
                                        as your input element for a tags input, to gain true multivalue support.        
                                </p>

                                <select multiple="multiple" class="multi-select" id="my_multi_select2" name="my_multi_select2[]" data-plugin="multiselect" data-selectable-optgroup="true">
                                    <optgroup label="NFC EAST">
                                        <option>Dallas Cowboys</option>
                                        <option>New York Giants</option>
                                        <option>Philadelphia Eagles</option>
                                        <option>Washington Redskins</option>
                                    </optgroup>
                                    <optgroup label="NFC NORTH">
                                        <option>Chicago Bears</option>
                                        <option>Detroit Lions</option>
                                        <option>Green Bay Packers</option>
                                        <option>Minnesota Vikings</option>
                                    </optgroup>
                                    <optgroup label="NFC SOUTH">
                                        <option>Atlanta Falcons</option>
                                        <option>Carolina Panthers</option>
                                        <option>New Orleans Saints</option>
                                        <option>Tampa Bay Buccaneers</option>
                                    </optgroup>
                                    <optgroup label="NFC WEST">
                                        <option>Arizona Cardinals</option>
                                        <option>St. Louis Rams</option>
                                        <option>San Francisco 49ers</option>
                                        <option>Seattle Seahawks</option>
                                    </optgroup>
                                </select>

                            </div> <!-- end col -->
                        </div> <!-- end row -->

                    </div> <!-- end card-body-->
                </div> <!-- end card-->
            </div> <!-- end col-->
        </div> 
        <!-- end row-->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Auto Complete</h4>
                        <p class="sub-header">Ajax Autocomplete for jQuery allows you to easily create autocomplete/autosuggest boxes for text input fields</p>

                        <div class="row">
                            <div class="col-md-6">
                                <label class="mb-1 font-weight-bold text-muted">Ajax Lookup</label>

                                <input type="text" name="country" id="autocomplete-ajax"
                                            class="form-control"
                                            style=" z-index: 2; background: transparent;"/>
                                    <input type="text" name="country" id="autocomplete-ajax-x"
                                            disabled="disabled" class="form-control"
                                            style="display: none;"/>

                            </div> <!-- end col -->

                            <div class="col-md-6">
                                <label class="mb-1 mt-3 mt-md-0 font-weight-bold text-muted">Local Lookup and Grouping</label>

                                <input type="text" name="country" id="autocomplete"
                                            class="form-control"/>
                                
                            </div> <!-- end col -->
                        </div> <!-- end row -->

                    </div> <!-- end card-body-->
                </div> <!-- end card-->
            </div> <!-- end col-->
        </div> 
        <!-- end row-->


        <!-- Bootstrap-select -->
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <h4 class="header-title">Bootstrap-select</h4>
                    <p class="sub-header">
                        The jQuery plugin that brings select elements into the 21st century with intuitive multiselection, searching, and much more. Now with Bootstrap 4 support.
                    </p>
                    <div class="row">
                        <div class="col-md-4">
                            <p class="text-muted font-13">
                                Create your <code>&lt;select&gt;</code> with the <code>.selectpicker</code> class.
                            </p>
                            <select class="selectpicker" data-style="btn-light">
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                            </select>

                            <p class="text-muted mt-3 font-13">
                                It also works with option groups:
                            </p>
                            <select class="selectpicker" data-style="btn-light">
                                <optgroup label="Picnic">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </optgroup>
                                <optgroup label="Camping">
                                    <option>Tent</option>
                                    <option>Flashlight</option>
                                    <option>Toilet Paper</option>
                                </optgroup>
                            </select>

                            <p class="text-muted mt-3 font-13">
                                You can also show the tick icon on single <code>select</code> with the <code>show-tick</code> class:
                            </p>

                            <select class="selectpicker show-tick" data-style="btn-light">
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                            </select>

                            <p class="text-muted mt-3 font-13">
                                And with multiple selects:
                            </p>
                            <select class="selectpicker" multiple data-style="btn-light">
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                            </select>

                            <p class="text-muted mt-3 font-13">
                                You can limit the number of elements you are allowed to select via the
                                <code>
                                    data-max-option
                                </code>
                                attribute. It also works for option groups.
                            </p>

                            <select class="selectpicker mb-0" multiple data-max-options="2" data-style="btn-light">
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                            </select>
                        </div>
                        <!-- end col -->

                        <div class="col-md-4">
                            <p class="text-muted font-13 mt-3 mt-md-0">
                                You can limit the number of elements you are allowed to select via the
                                <code>
                                    data-max-option
                                </code>
                                attribute. It also works for option groups.
                            </p>

                            <select class="selectpicker" data-style="btn-outline-primary">
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                            </select>

                            <br />
                            <br />
                            <select class="selectpicker" data-style="btn-outline-success">
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                            </select>

                            <br />
                            <br />
                            <select class="selectpicker" data-style="btn-outline-warning">
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                            </select>

                            <br />
                            <br />
                            <select class="selectpicker" data-style="btn-info">
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                            </select>

                            <br />
                            <br />
                            <select class="selectpicker" data-style="btn-danger">
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                            </select>

                            <br />
                            <br />
                            <select class="selectpicker" data-style="btn-blue">
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                            </select>

                            <p class="text-muted mt-3 font-13">
                                Add an icon to an option or optgroup with the <code>data-icon</code> attribute:
                            </p>
                            <select class="selectpicker mb-0" data-style="btn-pink">
                                <option data-icon="mdi mdi-camera-iris mr-1">Mustard</option>
                                <option data-icon="mdi mdi-cards-club mr-1">Ketchup</option>
                                <option data-icon="mdi mdi-cart-outline mr-1">Relish</option>
                                <option data-icon="mdi mdi-checkerboard mr-1">Mayonnaise</option>
                                <option data-icon="mdi mdi-coffee-outline mr-1">Barbecue Sauce</option>
                            </select>

                        </div>
                        <!-- end col-->

                        <div class="col-md-4">
                            <p class="text-muted font-13 mt-3 mt-md-0">
                                You can add a search input by passing <code>data-live-search="true"</code> attribute:
                            </p>

                            <select class="selectpicker" data-live-search="true"  data-style="btn-light">
                                <option>Hot Dog, Fries and a Soda</option>
                                <option>Burger, Shake and a Smile</option>
                                <option>Sugar, Spice and all things nice</option>
                            </select>

                            <p class="text-muted mt-3 font-13">
                                You can also use the <code>
                                title</code> attribute as an alternative to display when the option is
                                selected:
                            </p>

                            <select class="selectpicker" data-live-search="true" data-style="btn-light">
                                <option title="Combo 1">Hot Dog, Fries and a Soda</option>
                                <option title="Combo 2">Burger, Shake and a Smile</option>
                                <option title="Combo 3">Sugar, Spice and all things nice</option>
                            </select>

                            <p class="text-muted mt-3 font-13">
                                Using the <code>data-selected-text-format</code> attribute on a <code>multiple select</code>
                                you can specify how the selection is displayed.
                            </p>

                            <select class="selectpicker" multiple data-selected-text-format="count" data-style="btn-light">
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                            </select>

                            <br/>
                            <br/>
                            <select class="selectpicker" multiple data-selected-text-format="count > 3" data-style="btn-light">
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                                <option>Onions</option>
                            </select>

                            <p class="text-muted mt-3 font-13">
                                Add the <code>disabled</code> attribute to the select to apply the <code>disabled</code> class.
                            </p>
                            <select class="selectpicker m-b-0" data-style="btn-light" disabled>
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                            </select>
                        </div>
                        <!-- end col -->
                    </div> <!-- end row -->
                </div> <!-- end card-box -->
            </div> <!-- end col -->
        </div>
        <!-- end row-->

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Bootstrap Touchspin</h4>
                        <p class="text-muted font-14 mb-3">
                            A mobile and touch friendly input spinner component for Bootstrap.
                            Specify attribute <code>data-toggle="touchspin"</code> and your input would be conveterted into touch friendly spinner. 
                        </p>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group mb-3">
                                    <label>Using data attributes</label>
                                    <input data-toggle="touchspin" type="text" value="55">
                                </div>

                                <div class="form-group mb-3">
                                    <label>Example with postfix (large)</label>
                                    <input data-toggle="touchspin" value="18.20" type="text" data-step="0.1" data-decimals="2" data-bts-postfix="%">
                                </div>

                                <div class="form-group mb-3">
                                    <label>With prefix</label>
                                    <input data-toggle="touchspin" type="text" data-bts-prefix="$">
                                </div>

                                <div class="form-group mb-0">
                                    <label>Change button class</label>
                                    <input data-toggle="touchspin" value="77" type="text" data-bts-button-down-class="btn btn-danger" data-bts-button-up-class="btn btn-info">
                                </div>
                            </div> <!-- end col -->

                            <div class="col-lg-6 mt-3 mt-lg-0">
                                <div class="form-group mb-3">
                                    <label>Init with empty value:</label>
                                    <input data-toggle="touchspin" type="text">
                                </div>

                                <div class="form-group mb-3">
                                    <label>Max value - (Default value 100)</label>
                                    <input data-toggle="touchspin" data-bts-max="500" value="128" data-btn-vertical="true" type="text">
                                </div>

                                <div class="form-group mb-0">
                                    <label>With prefix and postfix button</label>
                                    <input data-toggle="touchspin" data-bts-prefix="A Button" data-bts-prefix-extra-class="btn btn-light"  data-bts-postfix="A Button" data-bts-postfix-extra-class="btn btn-light" type="text">
                                </div>
                            </div> <!-- end col -->
                        </div>
                        <!-- end row -->

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->


        
    </div> <!-- container -->
@endsection

@section('script')
    <!-- Plugins js-->
    <script src="{{asset('assets/libs/selectize/selectize.min.js')}}"></script>
    <script src="{{asset('assets/libs/mohithg-switchery/mohithg-switchery.min.js')}}"></script>
    <script src="{{asset('assets/libs/multiselect/multiselect.min.js')}}"></script>
    <script src="{{asset('assets/libs/select2/select2.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap-select/bootstrap-select.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap-maxlength/bootstrap-maxlength.min.js')}}"></script>
    <script src="{{asset('assets/libs/devbridge-autocomplete/devbridge-autocomplete.min.js')}}"></script>
    <script src="{{asset('assets/libs/jquery-mockjax/jquery-mockjax.min.js')}}"></script>

    <!-- Page js-->
    <script src="{{asset('assets/js/pages/form-advanced.init.js')}}"></script>
@endsection