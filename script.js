const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)'
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)'
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    } else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const imageTriggers = document.querySelectorAll(".imageTrigger");
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");

    imageTriggers.forEach(trigger => {
        trigger.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior
            modalImage.src = trigger.href; // Set modal image src dynamically
            modal.classList.remove("hidden"); // Show modal
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden"); // Hide modal on close button click
    });

    // Close modal if user clicks outside the image
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const videoTriggers = document.querySelectorAll(".videoTrigger"); // Select all triggers
    const videoModal = document.getElementById("videoModal"); // Modal element
    const modalVideo = document.getElementById("modalVideo"); // Video iframe inside modal
    const closeVideoModal = document.getElementById("closeVideoModal"); // Close button

    videoTriggers.forEach(trigger => {
        trigger.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior
            const videoSrc = trigger.href.replace("watch?v=", "embed/"); // Convert YouTube URL to embed format
            modalVideo.src = `${videoSrc}?autoplay=1`; // Autoplay the video
            videoModal.classList.remove("hidden"); // Show the modal
        });
    });

    closeVideoModal.addEventListener("click", () => {
        videoModal.classList.add("hidden"); // Hide modal
        modalVideo.src = ""; // Stop the video
    });

    // Close the modal if the user clicks outside the iframe content
    videoModal.addEventListener("click", (event) => {
        if (event.target === videoModal) {
            videoModal.classList.add("hidden");
            modalVideo.src = ""; // Reset video src to stop playback
        }
    });
});


