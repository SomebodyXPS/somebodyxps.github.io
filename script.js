// Animate skill bars on scroll
const skills = document.querySelectorAll('.skill-bar .fill');
const options = { threshold: 0.5 };

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
      if(entry.isIntersecting){
            const fill = entry.target;
                  fill.style.width = fill.getAttribute('style'); // Already defined in HTML
                      }
                        });
                        }, options);

                        skills.forEach(skill=>observer.observe(skill));

                        // Fade-in on scroll
                        const faders = document.querySelectorAll('section');
                        const appearOptions = { threshold: 0.2, rootMargin:"0px 0px -50px 0px" };
                        const appearOnScroll = new IntersectionObserver((entries)=>{
                          entries.forEach(entry=>{
                              if(entry.isIntersecting){ entry.target.style.opacity=1; entry.target.style.transform="translateY(0)"; }
                                });
                                }, appearOptions);

                                faders.forEach(section=>{
                                  section.style.opacity=0; section.style.transform="translateY(50px)"; appearOnScroll.observe(section);
                                  });