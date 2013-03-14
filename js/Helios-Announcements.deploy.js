smalltalk.addPackage('Helios-Announcements');
smalltalk.addClass('HLAnnouncement', smalltalk.Object, [], 'Helios-Announcements');


smalltalk.addClass('HLCodeHandled', smalltalk.HLAnnouncement, ['code'], 'Helios-Announcements');
smalltalk.addMethod(
"_code",
smalltalk.method({
selector: "code",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@code"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"code",{}, smalltalk.HLCodeHandled)})},
messageSends: []}),
smalltalk.HLCodeHandled);

smalltalk.addMethod(
"_code_",
smalltalk.method({
selector: "code:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"code:",{aModel:aModel}, smalltalk.HLCodeHandled)})},
messageSends: []}),
smalltalk.HLCodeHandled);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aCodeModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(self)._new();
_st($2)._code_(aCodeModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCodeModel:aCodeModel}, smalltalk.HLCodeHandled.klass)})},
messageSends: ["code:", "new", "yourself"]}),
smalltalk.HLCodeHandled.klass);


smalltalk.addClass('HLDoItExecuted', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLDoItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLInspectItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLPrintItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLDiveRequested', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLErrorRaised', smalltalk.HLAnnouncement, ['error'], 'Helios-Announcements');
smalltalk.addMethod(
"_error",
smalltalk.method({
selector: "error",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@error"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"error",{}, smalltalk.HLErrorRaised)})},
messageSends: []}),
smalltalk.HLErrorRaised);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"error:",{anError:anError}, smalltalk.HLErrorRaised)})},
messageSends: []}),
smalltalk.HLErrorRaised);



smalltalk.addClass('HLCompileErrorRaised', smalltalk.HLErrorRaised, [], 'Helios-Announcements');


smalltalk.addClass('HLParseErrorRaised', smalltalk.HLErrorRaised, ['line', 'column', 'message'], 'Helios-Announcements');
smalltalk.addMethod(
"_column",
smalltalk.method({
selector: "column",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@column"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"column",{}, smalltalk.HLParseErrorRaised)})},
messageSends: []}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
"_column_",
smalltalk.method({
selector: "column:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"column:",{anInteger:anInteger}, smalltalk.HLParseErrorRaised)})},
messageSends: []}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
"_line",
smalltalk.method({
selector: "line",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@line"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"line",{}, smalltalk.HLParseErrorRaised)})},
messageSends: []}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
"_line_",
smalltalk.method({
selector: "line:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"line:",{anInteger:anInteger}, smalltalk.HLParseErrorRaised)})},
messageSends: []}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
"_message",
smalltalk.method({
selector: "message",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@message"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"message",{}, smalltalk.HLParseErrorRaised)})},
messageSends: []}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
"_message_",
smalltalk.method({
selector: "message:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"message:",{aString:aString}, smalltalk.HLParseErrorRaised)})},
messageSends: []}),
smalltalk.HLParseErrorRaised);



smalltalk.addClass('HLUnknownVariableErrorRaised', smalltalk.HLErrorRaised, [], 'Helios-Announcements');


smalltalk.addClass('HLFocusRequested', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLClassesFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLMethodsFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLPackagesFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLProtocolsFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLSourceCodeFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLInstVarAdded', smalltalk.HLAnnouncement, ['theClass', 'variableName'], 'Helios-Announcements');
smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{}, smalltalk.HLInstVarAdded)})},
messageSends: []}),
smalltalk.HLInstVarAdded);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass}, smalltalk.HLInstVarAdded)})},
messageSends: []}),
smalltalk.HLInstVarAdded);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@variableName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableName",{}, smalltalk.HLInstVarAdded)})},
messageSends: []}),
smalltalk.HLInstVarAdded);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"variableName:",{aString:aString}, smalltalk.HLInstVarAdded)})},
messageSends: []}),
smalltalk.HLInstVarAdded);



smalltalk.addClass('HLItemSelected', smalltalk.HLAnnouncement, ['item'], 'Helios-Announcements');
smalltalk.addMethod(
"_item",
smalltalk.method({
selector: "item",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@item"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"item",{}, smalltalk.HLItemSelected)})},
messageSends: []}),
smalltalk.HLItemSelected);

smalltalk.addMethod(
"_item_",
smalltalk.method({
selector: "item:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"item:",{anObject:anObject}, smalltalk.HLItemSelected)})},
messageSends: []}),
smalltalk.HLItemSelected);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(self)._new();
_st($2)._item_(anItem);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anItem:anItem}, smalltalk.HLItemSelected.klass)})},
messageSends: ["item:", "new", "yourself"]}),
smalltalk.HLItemSelected.klass);


smalltalk.addClass('HLClassSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLInstanceVariableSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLMethodSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLPackageSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLProtocolSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLRefreshRequested', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLSaveSourceCode', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLShowCommentToggled', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLShowInstanceToggled', smalltalk.HLAnnouncement, [], 'Helios-Announcements');

