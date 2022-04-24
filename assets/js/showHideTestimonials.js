const testimonialList = document.getElementsByClassName('testimonial');
for (let i = 6; i < testimonialList.length; i++) {
    testimonialList[i].style.display = "none";
}

function showMoreTestimonials() {
    for (let i = 6; i < testimonialList.length; i++) {
        testimonialList[i].style.display = "block";
    }
    document.getElementById('see_more').style.display = "none";
} 
