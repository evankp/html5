(function ($) {
    const $navLinks = $('#nav-links')
    const slideSpeed = 300

    $('#menu-icon').on('click', () => {
        if ($navLinks.is(':hidden')) {
            $navLinks.slideDown(slideSpeed)
        } else {
            $navLinks.slideUp(slideSpeed)
        }
    })

    $(document).mouseup(function(e) {
        // if the target of the click isn't the container nor a descendant of the container
        if (!$navLinks.is(e.target) && $navLinks.has(e.target).length === 0)
        {
            $navLinks.slideUp(slideSpeed)
        }
    })

    $('.play-btn').on('click', function() {
        const media = $(this).parent().parent()[0].firstElementChild
        var $mediabtn = $(this).attr('data-media-btn')

        const MINVOLUME = 0.05
        const MAXVOLUME = 1
        const ADJUSTBY = 0.05

        if ( $mediabtn === 'play') {
            media.play()
        } else if ($mediabtn === 'pause') {
            media.pause()
        } else if ($mediabtn === 'volume-up') {
            if (media.volume < MAXVOLUME) {
                media.volume += ADJUSTBY
                console.log('Increased')
            }
        } else if ($mediabtn === 'volume-down') {
            if (media.volume >= MINVOLUME) {
                media.volume -= ADJUSTBY
                console.log('Decreased')
            }
        }
    })

    var date = new Date(),
        expireDate = new Date('September 28 2018 09:00:00')

    if (date >= expireDate) {
        $('#audio-element').remove()
    }
})(jQuery)