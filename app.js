Ext.application({
    name: 'HelloExt',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: '���������� �� Ext JS 4',
                    html: '<h3>����� ���������� � ��� Ext JS 4!</h3>'
                }
            ]
        });
    }
});