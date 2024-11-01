jQuery(document).ready(function($){
    var mediaUploader;
    $('#upload-button').click(function(e) {
        e.preventDefault();
        // If the uploader object has already been created, reopen the dialog
        if (mediaUploader) {
            mediaUploader.open();
            return;
        }

        // Extend the wp.media object
        mediaUploader = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            }, multiple: false 
        });

        // When a file is selected, grab the URL and set it as the text field's value
        mediaUploader.on('select', function() {
            var attachment = mediaUploader.state().get('selection').first().toJSON();

            if ( typeof(attachment.sizes['thumbnail'] ) != "undefined" ) {
               var  imgURL = attachment.sizes['thumbnail'].url;
            } else {
                var imgURL = attachment.url;
            }
            //alert(imgURL);
            $('#client_avtar_uploader').val(imgURL);
        });

        // Open the uploader dialog
        mediaUploader.open();
    });

});