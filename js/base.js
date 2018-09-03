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
})(jQuery)