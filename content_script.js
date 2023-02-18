function click_following() {
    const el = document.querySelector('[data-testid="ScrollSnap-List"] > div:last-child a');
    el.click();
}
if (document.readyState === "complete") {
    click_following();
} else {
    window.onload = function() {
        click_following();
    };
}
