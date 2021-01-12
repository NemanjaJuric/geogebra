app.loadPartials([
    { id: '#small-header', path: consts.partialsPath + 'small-header.partial.html' },
    { id: '#materials', path: consts.partialsPath + 'materials.partial.html' }
]);

$(".link").click(function (e) {
    e.preventDefault();
    app.loadState($(this).attr("data-state"));
});