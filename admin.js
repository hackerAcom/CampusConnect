document.getElementById('social-hub-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const data = {
        friendCircleLink: form['friend-circle-link'].value,
        friendCircleImage: form['friend-circle-image'].value,
        seniorAdviceLink: form['senior-advice-link'].value,
        seniorAdviceImage: form['senior-advice-image'].value,
        discordChatLink: form['discord-chat-link'].value,
        discordChatImage: form['discord-chat-image'].value,
    };
    // Logic to save Social Hub data
    console.log('Saving Social Hub Data', data);
});

document.getElementById('food-facilities-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const data = {
        cafeteriaMenuLink: form['cafeteria-menu-link'].value,
        cafeteriaMenuImage: form['cafeteria-menu-image'].value,
        diningHoursLink: form['dining-hours-link'].value,
        diningHoursImage: form['dining-hours-image'].value,
        foodReviewsLink: form['food-reviews-link'].value,
        foodReviewsImage: form['food-reviews-image'].value,
    };
    // Logic to save Food Facilities data
    console.log('Saving Food Facilities Data', data);
});
