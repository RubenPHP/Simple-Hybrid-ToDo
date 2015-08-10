// Initialize your app
var myApp = new Framework7({
        material: true,
        //precompileTemplates: true,
        template7Pages: true,
        template7Data: {
            'page:about': {
                name: 'John Doess'
        }
    }
    });

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main');

/*http://www.idangero.us/framework7/forum/#!/getting-started:how-to-use-template7data-on*/
/*
https://github.com/nolimits4web/ToDo7/blob/master/index.html#L92
https://github.com/nolimits4web/ToDo7/blob/master/index.html#L44
https://github.com/nolimits4web/ToDo7/blob/master/js/todo7.js#L53
*/
// Build Todo HTML using Template7 template engine
var todoItemTemplateSource = $$('#todo-item-template').html();
var todoItemTemplate = Template7.compile(todoItemTemplateSource);
function buildTodoListHtml() {
    var renderedList = todoItemTemplate({name: 'Testing'});
    $$('.todo-items-list').html(renderedList);
}
// Build HTML on App load
buildTodoListHtml();

/*I don't know why on Index we must use this to pass context values to template*/
/*mainView.router.load({
    url: 'index.html',
    context: {
      name: 'test'
    }
})*/

/*Check if task List exists on LocalStorage*/
if (!localStorage.taskList) {
    localStorage.setItem('taskList', JSON.stringify([]));
};

$$(document).on('ajaxStart', function (e) {
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function () {
    myApp.hideIndicator();
});

/*Important! Close the popover so the new popped view is not obsured by the modal*/
$$('.popover a').on('click', function () {
    myApp.closeModal('.popover');
});


myApp.onPageInit('form-task', function (page) {
    /*Capture task-form input*/
    $$('.form-to-json').on('click', function(){
      var formData = myApp.formToJSON('#task-form');
      debugger;
      var taskList = JSON.parse(localStorage.getItem('taskList'));
      taskList.push(JSON.stringify(formData));
      localStorage.setItem('taskList', JSON.stringify(taskList));
      alert(localStorage.taskList);
    });
})
