
// Your code goes here:
ChangePic = function() {
  let newPic = jQuery(this)
  let newSourceValue = newPic.attr("src")
  jQuery("#main-image").attr('src', newSourceValue)
}

jQuery("img").on("click", ChangePic)
