const sr=ScrollReveal({
    distance:'100px',
    duration: 2600,
    delay: 450,
    reset:true,
})

sr.reveal('.animation-top', {delay:100,origin:'top'});
sr.reveal('.animation-left', {delay:100,origin:'left'});
sr.reveal('.animation-right', {delay:100,origin:'right'});
sr.reveal('.animation-bottom', {delay:100,origin:'bottom'});