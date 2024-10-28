//Se code est plus important en se momnent
const pricingPlan = document.querySelector('.pricing-plan');

// Start animation on mouse over
pricingPlan.addEventListener('mouseover', () => {
    pricingPlan.style.animationPlayState = 'running';
});

// Stop animation on mouse out
pricingPlan.addEventListener('mouseout', () => {
    pricingPlan.style.animationPlayState = 'paused';
});
